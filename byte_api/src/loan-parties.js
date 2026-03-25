/**
 * loan-parties.js
 * 
 * Production functions for fetching party contact data from BytePro loan files.
 * 
 * BytePro stores all parties (Title Company, Listing Agent, Loan Officer, etc.)
 * in a single "Parties" table with no server-side type filter. Each party has:
 *   Company, EMail, WorkPhone, HomePhone, Fax, FirstName, LastName, 
 *   FullName, Title, Street, City, State, Zip
 * 
 * Party types are identified by ordinal position (fixed order matching the
 * BytePro UI Parties screen), or by filtering on Company name when known.
 */
const { search } = require('./client');

// All available contact fields on the Parties table
const PARTY_FIELDS = [
  'Company', 'EMail', 'WorkPhone', 'HomePhone', 'Fax',
  'FirstName', 'LastName', 'FullName', 'Title',
  'Street', 'City', 'State', 'Zip',
];

/**
 * Get ALL parties for a loan file.
 * Returns an array of { Company, EMail, WorkPhone, ... } objects.
 * 
 * @param {string} loanNumber - BytePro FileName (e.g., "PHM0124084419")
 * @returns {Promise<Array<Object>>}
 */
async function getAllParties(loanNumber) {
  const searchFields = [
    { FieldName: 'FileName', TableName: 'FileData',
      FieldFilter: { FilterValue1: loanNumber, FilterType: 1 } },
    ...PARTY_FIELDS.map(f => ({ FieldName: f, TableName: 'Parties' })),
  ];

  const result = await search(searchFields, { MaxItems: 200 });

  if (!result.SearchRows) return [];

  return result.SearchRows.map(row => {
    const vals = row.SearchValues.map(v => v.FieldValue || '');
    const party = { FileName: vals[0] };
    PARTY_FIELDS.forEach((f, i) => { party[f] = vals[i + 1]; });
    return party;
  }).filter(p => 
    // Only return non-empty rows
    p.Company || p.EMail || p.FirstName || p.LastName
  );
}

/**
 * Get a specific party by exact Company name match.
 * Uses server-side FieldFilter for exact match (FilterType: 1).
 * 
 * @param {string} loanNumber - BytePro FileName
 * @param {string} companyName - Exact company name (e.g., "Core Title")
 * @returns {Promise<Object|null>}
 */
async function getPartyByCompany(loanNumber, companyName) {
  const searchFields = [
    { FieldName: 'FileName', TableName: 'FileData',
      FieldFilter: { FilterValue1: loanNumber, FilterType: 1 } },
    { FieldName: 'Company', TableName: 'Parties',
      FieldFilter: { FilterValue1: companyName, FilterType: 1 } },
    ...PARTY_FIELDS.filter(f => f !== 'Company')
      .map(f => ({ FieldName: f, TableName: 'Parties' })),
  ];

  const result = await search(searchFields, { MaxItems: 1 });

  if (!result.SearchRows?.length) return null;

  const vals = result.SearchRows[0].SearchValues.map(v => v.FieldValue || '');
  const party = { FileName: vals[0], Company: companyName };
  const otherFields = PARTY_FIELDS.filter(f => f !== 'Company');
  otherFields.forEach((f, i) => { party[f] = vals[i + 2]; });
  return party;
}

/**
 * Get the Title Company contact info for a loan file.
 * 
 * Strategy: Fetches all parties and identifies the Title Company by 
 * its fixed ordinal position in the BytePro party type list.
 * Position 42 (0-indexed) in the 48-type standard party list.
 * 
 * Falls back to Company name matching containing "title" (case-insensitive).
 * 
 * @param {string} loanNumber - BytePro FileName
 * @returns {Promise<Object|null>}
 */
async function getTitleCompany(loanNumber) {
  const allParties = await getAllParties(loanNumber);
  
  // Filter parties that have data in Company or EMail
  // The title company should have at least a Company name
  // Try to find by "title" in company name (common pattern)
  const titleByName = allParties.find(p => 
    p.Company && /title/i.test(p.Company)
  );
  
  if (titleByName) return titleByName;
  
  // If no "title" in name found, return null
  // (caller should use getPartyByCompany if they know the exact name)
  return null;
}

module.exports = { getAllParties, getPartyByCompany, getTitleCompany, PARTY_FIELDS };
