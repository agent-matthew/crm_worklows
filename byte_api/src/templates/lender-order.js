/**
 * lender-order.js
 * 
 * Email template for the lender title order request.
 * This is sent TO the title company, CC'd to processor/LO/assistant.
 * 
 * MOCK TEMPLATE — replace with the real template when provided.
 */

/**
 * Build the lender order email.
 * 
 * @param {Object} data - Workflow data from getProcessingWorkflowData()
 * @param {Object} data.titleCompany - { Company, EMail, ... }
 * @param {Object} data.borrower - { firstName, lastName, fullName, allBorrowers }
 * @param {number} data.loanAmount
 * @param {string} data.loanNumber
 * @returns {{ subject: string, html: string, text: string }}
 */
function buildLenderOrderEmail(data) {
  const { titleCompany, borrower, loanAmount, loanNumber } = data;
  const companyName = titleCompany?.Company || 'Title Company';
  const borrowerName = borrower?.allBorrowers || borrower?.fullName || 'the borrower';
  const formattedAmount = loanAmount
    ? `$${loanAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
    : '(see file)';

  const subject = `Title Order Request — ${borrowerName} — ${loanNumber}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p>Hello ${companyName} Team,</p>
      
      <p>We are reaching out to submit a title order for the following loan file:</p>
      
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
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; background: #f7f7f7;">Loan Amount</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${formattedAmount}</td>
        </tr>
      </table>
      
      <p>Please confirm receipt and provide an estimated turnaround time at your earliest convenience.</p>
      
      <p>Thank you,<br/>
      Priority Home Mortgage — Processing Team</p>
      
      <hr style="border: none; border-top: 1px solid #eee; margin-top: 24px;" />
      <p style="font-size: 12px; color: #999;">
        This is an automated message from Priority Home Mortgage's processing system.
        If you have questions, please reply to this email.
      </p>
    </div>
  `;

  const text = `Hello ${companyName} Team,

We are reaching out to submit a title order for the following loan file:

  Borrower(s): ${borrowerName}
  Loan Number: ${loanNumber}
  Loan Amount: ${formattedAmount}

Please confirm receipt and provide an estimated turnaround time at your earliest convenience.

Thank you,
Priority Home Mortgage — Processing Team`;

  return { subject, html, text };
}

module.exports = { buildLenderOrderEmail };
