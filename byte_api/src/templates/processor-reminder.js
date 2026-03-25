/**
 * processor-reminder.js
 * 
 * Email template for the internal processor follow-up reminder.
 * Sent TO the Loan Processor after the title order goes out.
 * 
 * Purpose: Remind processor to follow up with the title company
 * and request anything that's missing.
 */

/**
 * Build the processor reminder email.
 * 
 * @param {Object} data - Workflow data
 * @param {Object} data.titleCompany
 * @param {Object} data.borrower
 * @param {string} data.loanNumber
 * @returns {{ subject: string, html: string, text: string }}
 */
function buildProcessorReminderEmail(data) {
  const { titleCompany, borrower, loanNumber } = data;
  const borrowerName = borrower?.allBorrowers || borrower?.fullName || 'the borrower';
  const titleName = titleCompany?.Company || 'the title company';
  const titleEmail = titleCompany?.EMail || '(unknown)';

  const subject = `Action Required: Follow Up on Title Order — ${borrowerName} — ${loanNumber}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p>Hi there,</p>
      
      <p>A title order request has been automatically sent for the following file:</p>
      
      <table style="border-collapse: collapse; margin: 16px 0; width: 100%; max-width: 500px;">
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f7f7f7;">Borrower(s)</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${borrowerName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f7f7f7;">Loan Number</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${loanNumber}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f7f7f7;">Title Company</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${titleName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f7f7f7;">Title Email</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${titleEmail}</td>
        </tr>
      </table>
      
      <p><strong>Please follow up with ${titleName} to:</strong></p>
      <ul>
        <li>Confirm they received the title order</li>
        <li>Request any missing documentation</li>
        <li>Get an estimated completion date</li>
      </ul>
      
      <p>Thank you!</p>
      
      <hr style="border: none; border-top: 1px solid #eee; margin-top: 24px;" />
      <p style="font-size: 12px; color: #999;">
        Automated reminder from Priority Home Mortgage's processing system.
      </p>
    </div>
  `;

  const text = `Hi there,

A title order request has been automatically sent for:

  Borrower(s):   ${borrowerName}
  Loan Number:   ${loanNumber}
  Title Company: ${titleName}
  Title Email:   ${titleEmail}

Please follow up with ${titleName} to:
  - Confirm they received the title order
  - Request any missing documentation
  - Get an estimated completion date

Thank you!`;

  return { subject, html, text };
}

module.exports = { buildProcessorReminderEmail };
