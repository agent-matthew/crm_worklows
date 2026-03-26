Byte Pro Data Dictionary

### [](#TOP)FileData

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FileDataID | integer | The ID of the FileData record |
| LoanID | NullableInteger | Loan ID of the Active Loan |
| OrganizationID | Integer | For SQL use only - foreign key into table Organizations. |
| FileName | String(50) | Name of the loan file. |
| FilePath | String(255) | The path to the folder that contains the loan file. |
| OccupancyType | Enum.OccupancyType | Occupancy<br><br>* 0 - NotAssigned<br>* 1 - PrimaryResidence<br>* 2 - SecondaryResidence<br>* 3 - InvestmentProperty |
| DateCreated | DateTime | Date the loan file was created |
| DateModified | DateTime | Date the loan file was last modified |
| AgencyCaseNo | string(50) | Agency Case No |
| TitleNamesNonBorrowers | string(200) | Title Names of Non-Borrowers |
| DesiredCoName | string(150) | Name of the originating company |
| DesiredCoStreet1 | string(50) | Street address 1 of the originating company |
| DesiredCoStreet2 | string(50) | Street address 2 of the originating company |
| DesiredCoCity | string(50) | City of the originating company |
| DesiredCoState | string(2) | State of the originating company |
| DesiredCoZip | string(9) | Zip code of the originating company |
| DesiredCoPhone | string(20) | Phone number of the originating company |
| DesiredCoFax | string(20) | Fax number of the originating company |
| DownPaymentType1 | Enum.DownPaymentType | Down Payment Type 1<br><br>* 0 - NotAssigned<br>* 1 - CheckingOrSavings<br>* 2 - DepositOnSalesContract<br>* 3 - EquityOnSoldProperty<br>* 4 - EquityOnPendingSale<br>* 5 - EquityOnSubjectProperty<br>* 6 - GiftFunds<br>* 7 - StocksAndBonds<br>* 8 - LotEquity<br>* 9 - BridgeLoan<br>* 10 - UnsecuredBorrowedFunds<br>* 11 - TrustFunds<br>* 12 - RetirementFunds<br>* 13 - RentWithOptionToPurchase<br>* 14 - LifeInsuranceCashValue<br>* 15 - SaleOfChattel<br>* 16 - TradeEquity<br>* 17 - SweatEquity<br>* 18 - CashOnHand<br>* 19 - Other<br>* 20 - SecuredBorrowedFunds<br>* 21 - FHAGiftNA<br>* 22 - FHAGiftRelative<br>* 23 - FHAGiftGovAssist<br>* 24 - FHAGiftEmployer<br>* 25 - FHAGiftNonProfitSellerFunded<br>* 26 - FHAGiftNonProfitNonSellerFunded<br>* 27 - FHAGiftFederalAgency<br>* 28 - FHAGiftStateAgency<br>* 29 - FHAGiftLocalAgency<br>* 30 - FHAGiftOther<br>* 31 - FHAGiftCommunityNonProfit<br>* 32 - FHAGiftReligiousNonProfit<br>* 33 - Grant<br>* 34 - FHAGrantRelative<br>* 35 - FHAGrantFederalAgency<br>* 36 - FHAGrantStateAgency<br>* 37 - FHAGrantLocalAgency<br>* 38 - FHAGrantEmployer<br>* 39 - FHAGrantOther<br>* 40 - FHAGrantCommunityNonProfit<br>* 41 - FHAGrantReligiousNonProfit<br>* 42 - FHAGiftBorrower<br>* 43 - FHAGiftPropertySeller<br>* 44 - FHAGiftUnmarriedPartner<br>* 45 - FHAGrantBorrower<br>* 46 - FHAGrantPropertySeller<br>* 47 - FHAGrantUnmarriedPartner |
| DownPaymentAmount1 | NullableCurrency | Down Payment Amount 1 |
| DownPaymentType2 | Enum.DownPaymentType | Down Payment Type 2<br><br>* 0 - NotAssigned<br>* 1 - CheckingOrSavings<br>* 2 - DepositOnSalesContract<br>* 3 - EquityOnSoldProperty<br>* 4 - EquityOnPendingSale<br>* 5 - EquityOnSubjectProperty<br>* 6 - GiftFunds<br>* 7 - StocksAndBonds<br>* 8 - LotEquity<br>* 9 - BridgeLoan<br>* 10 - UnsecuredBorrowedFunds<br>* 11 - TrustFunds<br>* 12 - RetirementFunds<br>* 13 - RentWithOptionToPurchase<br>* 14 - LifeInsuranceCashValue<br>* 15 - SaleOfChattel<br>* 16 - TradeEquity<br>* 17 - SweatEquity<br>* 18 - CashOnHand<br>* 19 - Other<br>* 20 - SecuredBorrowedFunds<br>* 21 - FHAGiftNA<br>* 22 - FHAGiftRelative<br>* 23 - FHAGiftGovAssist<br>* 24 - FHAGiftEmployer<br>* 25 - FHAGiftNonProfitSellerFunded<br>* 26 - FHAGiftNonProfitNonSellerFunded<br>* 27 - FHAGiftFederalAgency<br>* 28 - FHAGiftStateAgency<br>* 29 - FHAGiftLocalAgency<br>* 30 - FHAGiftOther<br>* 31 - FHAGiftCommunityNonProfit<br>* 32 - FHAGiftReligiousNonProfit<br>* 33 - Grant<br>* 34 - FHAGrantRelative<br>* 35 - FHAGrantFederalAgency<br>* 36 - FHAGrantStateAgency<br>* 37 - FHAGrantLocalAgency<br>* 38 - FHAGrantEmployer<br>* 39 - FHAGrantOther<br>* 40 - FHAGrantCommunityNonProfit<br>* 41 - FHAGrantReligiousNonProfit<br>* 42 - FHAGiftBorrower<br>* 43 - FHAGiftPropertySeller<br>* 44 - FHAGiftUnmarriedPartner<br>* 45 - FHAGrantBorrower<br>* 46 - FHAGrantPropertySeller<br>* 47 - FHAGrantUnmarriedPartner |
| DownPaymentAmount2 | NullableCurrency | Down Payment Amount 2 |
| DownPaymentDescOV | String(100) | Override value for description of down payment |
| FHALenderId | string(50) | An FHA-assigned identifier of the originator making an underwriting request using the FHA Total Scorecard program. |
| FHASponsorId | string(50) | An FHA-assigned identifier of the lender acting as an approved sponsor for the originator making the underwriting request using the FHA Total Scorecard program. |
| SalesConcessions | NullableCurrency | The dollar amount of the value of sales concessions granted by an interested party including such items as furniture, carpeting, decorator allowances, automobiles, vacations, securities, giveaways or other sales incentives. |
| GiftAmount | NullableCurrency | Gift amount |
| GiftSource | string(50) | Gift source |
| GiftDonorName1 | string(50) | Name of the person who is providing a gift to the borrower. |
| GiftDonorName2 | String(50) | Name of another person who is providing a gift to the borrower. |
| GiftDonorStreet | String(50) | Street of the person who is providing a gift to the borrower. |
| GiftDonorCity | String(50) | City of the person who is providing a gift to the borrower. |
| GiftDonorState | string(2) | State of the person who is providing a gift to the borrower. |
| GiftDonorZip | string(9) | Zip code of the person who is providing a gift to the borrower. |
| GiftDonorPhone | string(20) | Phone number of the person who is providing a gift to the borrower. |
| MINNumber | string(20) | MIN number generated for this loan file. |
| MINOrgID | NullableInteger | The organization ID part of the MERS MIN number |
| MINSequence | NullableLong | The sequence part of the MERS MIN number |
| WaiveEscrow | Enum.EscrowWaiverType | Indicates whether tax and/or insurance escrow will be waived<br><br>* 0 - NotAssigned<br>* 1 - WaiveBoth<br>* 2 - NotWaived<br>* 3 - WaiveTaxesOnly<br>* 4 - WaiveInsuranceOnly |
| VAFundingFeeCategory | Enum.VAFundingFeeCategory | Indicates the cateogory of VA borrower and loan so that the appropriate funding fee can be determined<br><br>* 0 - NotAssigned<br>* 1 - RegularMilitaryFirstUse<br>* 2 - RegularMilitarySubsequentUse<br>* 3 - ReservesOrGuardFirstUse<br>* 4 - ReservesOrGuardSubsequentUse<br>* 5 - InterestRateReductionRefi<br>* 6 - ManufacturedHome<br>* 7 - LoanAssumption<br>* 8 - Exempt |
| FirstTimeHomeBuyer | Enum.YesNoNA | Indicates whether the borrower is a first time home buyer<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| TaxBracket | NullableInteger | The primary borrower's tax bracket. Used on the Rent vs Own screen and Application summary |
| CommunityLending | Enum.YesNoNA | Indicates whether the loan is a community lending loan<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HomeBuyerEducation | Enum.YesNoNA | Indicates whether the borrower(s) completed the homebuyer education program.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FirstMortgageHolder | Enum.FirstMortgageHolder | Specifies the investor holding the first mortgage<br><br>* 0 - NotAssigned<br>* 1 - FannieMae<br>* 2 - FreddieMac<br>* 3 - SellerOrOther<br>* 4 - Unknown |
| LoanOfficerUserName | String(50) | User name of the loan officer assigned to this file. |
| LoanOfficerAccess | Enum.UserAccess | * 0 - FullAccess<br>* 1 - ReadOnly<br>* 2 - EditConversationLogOnly |
| LoanProcessorUserName | String(50) | User name of the loan processor assigned to this file. |
| LoanProcessorAccess | Enum.UserAccess | * 0 - FullAccess<br>* 1 - ReadOnly<br>* 2 - EditConversationLogOnly |
| OtherUserName | String(50) | User name of other user assigned to this file. |
| OtherUserAccess | Enum.UserAccess | * 0 - FullAccess<br>* 1 - ReadOnly<br>* 2 - EditConversationLogOnly |
| OtherUser2Name | String(50) | User name of other user 2 assigned to this file. |
| OtherUser2Access | Enum.UserAccess | * 0 - FullAccess<br>* 1 - ReadOnly<br>* 2 - EditConversationLogOnly |
| OtherUser3Name | String(50) | User name of other user 3 assigned to this file. |
| OtherUser3Access | Enum.UserAccess | * 0 - FullAccess<br>* 1 - ReadOnly<br>* 2 - EditConversationLogOnly |
| OtherUser4Name | String(50) | User name of other user 4 assigned to this file. |
| OtherUser4Access | Enum.UserAccess | * 0 - FullAccess<br>* 1 - ReadOnly<br>* 2 - EditConversationLogOnly |
| DocumentationType | Enum.DocumentationType | Documentation Type<br><br>* 0 - NotAssigned<br>* 1 - Alternative<br>* 2 - Full<br>* 3 - Reduced<br>* 4 - StreamlinedRefi<br>* 5 - NoDocumentation<br>* 6 - NoRatio<br>* 7 - LimitedDocumentation<br>* 8 - NoIncNoEmpNoAssets<br>* 9 - NoIncNoAssets<br>* 10 - NoAssets<br>* 11 - NoIncNoEmp<br>* 12 - NoInc<br>* 13 - NoVerifOfIncEmpAssets<br>* 14 - NoVerifOfIncAssets<br>* 15 - NoVerifOfAssets<br>* 16 - NoVerifOfIncEmp<br>* 17 - NoVerifOfInc<br>* 18 - VerbalEmp<br>* 19 - OnePaystub<br>* 20 - OnePaystubAndVVOE<br>* 21 - OnePaystubOneW2AndVVOEOr1040 |
| UseCustomRepaymentWording | Boolean | Indicates whether or not to use custom repayment wording on the commitment letter. If not checked then the standard payment wording is used. |
| RepaymentWordingOV | String(500) | Override wording for the repayment terms on the commitment letter. |
| EvidenceOfTitleOption | Enum.EvidenceOfTitleOption | Evidence of title required on the commitment letter.<br><br>* 0 - NotAssigned<br>* 1 - AbstractOfTitle<br>* 2 - TorrensTitleGuaranteePolicy<br>* 3 - MortgageTitleGuaranteePolicy<br>* 4 - LawyersOpinionOfTitle<br>* 5 - Other |
| OtherEvidenceOfTitle | String(50) | Other value for evidence of title on the commitment letter. |
| CommitmentReturnOption | Enum.CommitmentReturnOption | Describes where the commitment letter should be returned (address above or address below)<br><br>* 0 - AboveAddress<br>* 1 - FollowingAddress |
| CommitmentReturnDays | NullableInteger | Indicates the number of days that the borrower has to return the commitment. |
| CommitmentReturnAddress | String(250) | The complete address of the entity to which the commitment should be returned if \[address below\] was selected. |
| XSiteLoanAppID | String(50) |     |
| Deleted | Boolean |     |
| SubFolder | Integer | &lt;BR&gt;Default=0 |
| _TrustAccountBalance | NullableCurrency |     |
| _TotalAllIncomes | NullableCurrency |     |
| _TotalAllDebtPayments | NullableCurrency |     |
| _TotalAllDebtBalances | NullableCurrency |     |
| _TotalAllLiquidAssets | NullableCurrency |     |
| _CosignerNames | String(200) |     |
| _AllBorrowerNames | String(200) |     |
| _LOYellowAlertDate | NullableDateTime |     |
| _LORedAlertDate | NullableDateTime |     |
| _LPYellowAlertDate | NullableDateTime |     |
| _LPRedAlertDate | NullableDateTime |     |
| _OUYellowAlertDate | NullableDateTime |     |
| _OURedAlertDate | NullableDateTime |     |
| _OU2YellowAlertDate | NullableDateTime |     |
| _OU2RedAlertDate | NullableDateTime |     |
| _OU3YellowAlertDate | NullableDateTime |     |
| _OU3RedAlertDate | NullableDateTime |     |
| _OU4YellowAlertDate | NullableDateTime |     |
| _OU4RedAlertDate | NullableDateTime |     |
| OverrideInterviewer | Boolean | If true, display Broker party information instead of Company information in Interviewer section of 1003. |
| DRIVEScore | NullableInteger(1000) | DataVerify DRIVEScore ranges from 0 - 1000 |
| DRIVEStatus | String(50) | DataVerify DRIVEStatus: Auto Refer, High Caution, Moderate Caution, Low Caution, Pass, ERROR |
| _FileCreditScore | NullableInteger | Stored calculated value. |
| OrgNameOV | String(150) | Override value for the organization name. If entered, this value prints on documents. |
| OrgStreet1OV | string(50) | Override value for the organization street 1. If entered, this value prints on documents. |
| OrgStreet2OV | string(50) | Override value for the organization street 2. If entered, this value prints on documents. |
| OrgCityOV | string(50) | Override value for the organization city. If entered, this value prints on documents. |
| OrgStateOV | string(2) | Override value for the organization state. If entered, this value prints on documents. |
| OrgZipOV | string(9) | Override value for the organization zip. If entered, this value prints on documents. |
| OrgPhoneOV | string(20) | Override value for the organization phone. If entered, this value prints on documents. |
| OrgFaxOV | string(20) | Override value for the organization fax. If entered, this value prints on documents. |
| MortgageBotAccountId | String(50) |     |
| SuperLoanType | Enum.SuperLoanType | Indicates if the file is a regular loan or a loan modification<br><br>* 0 - NewLoan<br>* 1 - LoanModification |
| VALenderID | String(50) | Lender VA ID number |
| VAAgentID | String(50) | Agent VA ID number |
| GFEVersion | Enum.GFEVersion | Indicates which version of the GFE is being used (Pre-2010 or Jan 2010)<br><br>* 0 - Pre2010<br>* 1 - _2010 |
| CompanyTypeOV | Enum.CompanyType | Override value for company type (Default, Lender or Broker)<br><br>* 0 - NotAssigned<br>* 1 - Lender<br>* 2 - Broker |
| OriginationChannel | Enum.OriginationChannel | Origination Channel. Retail = Originated in your company and closed by your company; Brokered Out = Originated in your company and brokered to another lender; Wholesale = Originated by a broker and closed by your company; Correspondent = Originated and closed by another lender and purchased by your company; Mini-Corr = Originated and closed by another lender, but underwritten and purchased by your company.<br><br>* 0 - NotAssigned<br>* 1 - Retail<br>* 2 - BrokeredOut<br>* 3 - Wholesale<br>* 4 - Purchased<br>* 5 - MiniCorr<br>* 6 - ConsumerDirect |
| TILVersionOV | Enum.TILVersionOV | Override indicating whether the 2011 or Pre-2011 Version of the TIL is to be used<br><br>* 0 - NotAssigned<br>* 1 - _2011<br>* 2 - Pre2011 |
| LockRequestType | Enum.LockRequestType | The type of lock request being made<br><br>* 0 - NotAssigned<br>* 1 - NewLock<br>* 2 - LockExtension<br>* 3 - Relock<br>* 4 - Renegotiation<br>* 5 - LockCancellation<br>* 6 - LockRequestedInPPE<br>* 7 - Snapshot<br>* 8 - CurrentState<br>* 9 - BestExInPPE<br>* 10 - ChangedInPPE<br>* 11 - LockAcceptedInPPE<br>* 12 - LockCancelledInPPE<br>* 13 - LockRejectedInPPE<br>* 14 - RegisteredInPPE<br>* 15 - UpdatedInPPE |
| LockRequestTime | NullableDateTime | The date and time the lock request was initiated |
| LockRequestComments | String(1000) | Comments for the lock desk about the lock request |
| CorvisaFileID1 | String(50) |     |
| CorvisaFileID2 | String(50) |     |
| TradeGUID | GUID | GUID of the trade this loan is assigned to (can be null).&lt;BR&gt;Default=Guid.Empty |
| LockRequestExtensionDays | NullableInteger | The number of days for the lock extension request |
| RHSCaseNoAssignmentPeriod | NullableInteger | Indicates when the RHS case number was assigned |
| ThirdPartyFileName | String(100) | File name in third party system |
| ThirdPartyFileNamePiggyback | String(100) | File name of piggyback loan in third party system |
| ThirdPartyTransferDateFirst | NullableDateTime | Date of the first transfer into third party system |
| ThirdPartyTransferDateMostRecent | NullableDateTime | Date of the most recent transfer into third party system |
| OpenerUserName | String(50) | User name of the opener assigned to this file. |
| _OpenerYellowAlertDate | NullableDateTime |     |
| _OpenerRedAlertDate | NullableDateTime |     |
| UnderwriterUserName | String(50) | User name of the underwriter assigned to this file. |
| _UnderwriterYellowAlertDate | NullableDateTime |     |
| _UnderwriterRedAlertDate | NullableDateTime |     |
| DocDrawerUserName | String(50) | User name of the doc drawer assigned to this file. |
| _DocDrawerYellowAlertDate | NullableDateTime |     |
| _DocDrawerRedAlertDate | NullableDateTime |     |
| CloserUserName | String(50) | User name of the closer assigned to this file. |
| _CloserYellowAlertDate | NullableDateTime |     |
| _CloserRedAlertDate | NullableDateTime |     |
| QCUserName | String(50) | User name of the QC assigned to this file. |
| _QCYellowAlertDate | NullableDateTime |     |
| _QCRedAlertDate | NullableDateTime |     |
| ComplianceUserName | String(50) | User name of the compliance person assigned to this file. |
| _ComplianceYellowAlertDate | NullableDateTime |     |
| _ComplianceRedAlertDate | NullableDateTime |     |
| ShipperUserName | String(50) | User name of the shipper assigned to this file. |
| _ShipperYellowAlertDate | NullableDateTime |     |
| _ShipperRedAlertDate | NullableDateTime |     |
| LockDeskUserName | String(50) | User name of the lock desk person assigned to this file. |
| _LockDeskYellowAlertDate | NullableDateTime |     |
| _LockDeskRedAlertDate | NullableDateTime |     |
| AccountingUserName | String(50) | User name of the accounting person assigned to this file. |
| _AccountingYellowAlertDate | NullableDateTime |     |
| _AccountingRedAlertDate | NullableDateTime |     |
| ServicingUserName | String(50) | User name of the servicing person assigned to this file. |
| _ServicingYellowAlertDate | NullableDateTime |     |
| _ServicingRedAlertDate | NullableDateTime |     |
| InsuringUserName | String(50) | User name of the insuring person assigned to this file. |
| _InsuringYellowAlertDate | NullableDateTime |     |
| _InsuringRedAlertDate | NullableDateTime |     |
| SecondaryUserName | String(50) | User name of the secondary person assigned to this file. |
| _SecondaryYellowAlertDate | NullableDateTime |     |
| _SecondaryRedAlertDate | NullableDateTime |     |
| GiftDonorAccountInstitution | String(50) | The institution at which the donors gift funds are deposited |
| GiftDonorAccountNo | String(30) | The account number of the donors account |
| GiftTransferDate | NullableDate | The date that the funds were transfered to the borrower |
| GiftFundsProvidedAtClosing | Boolean | Indicates whether or not the funds will be provided at closing |
| GiftDonorInstitutionAddress | String(100) | The address of the institution at which the donors gift funds are deposited |
| AgencyCaseNoAssignmentDate | NullableDate | Agency Case Number Assignment Date |
| DocTypeEmployment | Enum.DocTypeEmployment | Indicates how employment is documented<br><br>* 0 - NotAssigned<br>* 1 - Verified<br>* 2 - Stated<br>* 3 - None |
| DocTypeIncome | Enum.DocTypeIncome | Indicates how income is documented<br><br>* 0 - NotAssigned<br>* 1 - Verified<br>* 2 - Stated<br>* 3 - StatedWith4506T<br>* 4 - None |
| DocTypeAsset | Enum.DocTypeAsset | Indicates how assets are documented<br><br>* 0 - NotAssigned<br>* 1 - Verified<br>* 2 - Stated<br>* 3 - None |
| EstimatedCreditScore | NullableInteger | The borrowers estimate of their credit score. |
| OptimalBlueLoanIdentifier | String(20) | Optimal Blue Loan ID |
| _SelfEmployed | Boolean | Self Employment Indicator |
| _HasNonOccCoBorrower | Boolean | Calculated field indicating whether the loan has a non occupying co borrower. |
| OtherUser5Name | String(50) | User name of the other 5 user assigned to this file. |
| _OU5YellowAlertDate | NullableDateTime |     |
| _OU5RedAlertDate | NullableDateTime |     |
| OtherUser6Name | String(50) | User name of the other 6 user assigned to this file. |
| _OU6YellowAlertDate | NullableDateTime |     |
| _OU6RedAlertDate | NullableDateTime |     |
| OtherUser7Name | String(50) | User name of the other 7 user assigned to this file. |
| _OU7YellowAlertDate | NullableDateTime |     |
| _OU7RedAlertDate | NullableDateTime |     |
| OtherUser8Name | String(50) | User name of the other 8 user assigned to this file. |
| _OU8YellowAlertDate | NullableDateTime |     |
| _OU8RedAlertDate | NullableDateTime |     |
| OtherUser9Name | String(50) | User name of the other 9 user assigned to this file. |
| _OU9YellowAlertDate | NullableDateTime |     |
| _OU9RedAlertDate | NullableDateTime |     |
| OtherUser10Name | String(50) | User name of the other 10 user assigned to this file. |
| _OU10YellowAlertDate | NullableDateTime |     |
| _OU10RedAlertDate | NullableDateTime |     |
| OtherUser11Name | String(50) | User name of the other 11 user assigned to this file. |
| _OU11YellowAlertDate | NullableDateTime |     |
| _OU11RedAlertDate | NullableDateTime |     |
| OtherUser12Name | String(50) | User name of the other 12 user assigned to this file. |
| _OU12YellowAlertDate | NullableDateTime |     |
| _OU12RedAlertDate | NullableDateTime |     |
| LOCompType | Enum.LOCompType | Loan officer compensation type.<br><br>* 0 - NotAssigned<br>* 1 - BorrowerPaid<br>* 2 - LenderPaid |
| EligibleForPurchaseByGSE_OV | Enum.YesNoNA | An override value indicating whether or not the loan is eligible for purchase by a GSE.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IncomeAndDebtQMATRNotes | String(1000) | Additional QM/ATR notes for the income and debts. |
| DocPrepAltLenderCode | String(10) | Alternate lender code for use by doc prep companies. |
| IsBusinessPurpose | Boolean | Indicates whether the credit is for a business purpose under TILA (e.g. if the credit is not primarily for personal, family, or household purposes). Applies to investment properties only.&lt;BR&gt;Default=False |
| EventInfo | Integer | Event Information |
| _IsFLPLoan | Boolean | Indicates if the loan is a Funded Loan Pricing (FLP) loan |
| SyncFileDataID | Integer | The FileDataID of the synced file. For the Enterprise edition only. |
| SyncType | Enum.SyncType | Identifies the type of synchronization<br><br>* 0 - None<br>* 1 - PiggybackFirst<br>* 2 - PiggybackSecond<br>* 3 - PiggybackThird |
| SyncFileName | String(50) | File name of the synced file. For the Standard edition only. |
| SyncedFileDOTCredits | NullableCurrency | Other credits amount on the details of transaction to account for the closing costs and prepaids on the synchronized file. |
| MarksmanProspectID | String(32) | Marksman Prospect ID |
| EscrowAbsenceReason | Enum.EscrowAbsenceReason | Indicates the reason why no escrow account has been established.<br><br>* 0 - NotAssigned<br>* 1 - Declined<br>* 2 - NotOffered |
| PartialPaymentOption | Enum.PartialPaymentOption | Indicates whether or not the lender accepts partial payments, and if so how they are applied.<br><br>* 0 - NotAssigned<br>* 1 - AppliedToTheLoan<br>* 2 - HeldInSeparateAccount<br>* 3 - NotAccepted |
| LiabilityAfterForeclosure | Enum.LiabilityAfterForeclosure | Indicates whether the borrower has liability after foreclosure<br><br>* 0 - NotAssigned<br>* 1 - StateLawMayProtectYou<br>* 2 - StateLawDoesNotProtectYou |
| TRIDLoanIDOV | String(30) | Override value for the Loan ID on the Loan Estimate and Closing Disclosure |
| DoNotApplyTRIDRules | Boolean | Indicates whether the loan file is flagged to not apply TRID rules. |
| ConstTILACalcMethod | Enum.ConstTILACalcMethod | Indicates how the TILA disclosures are calculated for construction loans.<br><br>* 0 - AppendixD<br>* 1 - AppendixJ<br>* 2 - AppendixDAppendixJ |
| OtherUser13Name | String(50) | User name of the other 13 user assigned to this file. |
| _OU13YellowAlertDate | NullableDateTime |     |
| _OU13RedAlertDate | NullableDateTime |     |
| OtherUser14Name | String(50) | User name of the other 14 user assigned to this file. |
| _OU14YellowAlertDate | NullableDateTime |     |
| _OU14RedAlertDate | NullableDateTime |     |
| OtherUser15Name | String(50) | User name of the other 15 user assigned to this file. |
| _OU15YellowAlertDate | NullableDateTime |     |
| _OU15RedAlertDate | NullableDateTime |     |
| OtherUser16Name | String(50) | User name of the other 16 user assigned to this file. |
| _OU16YellowAlertDate | NullableDateTime |     |
| _OU16RedAlertDate | NullableDateTime |     |
| OtherUser17Name | String(50) | User name of the other 17 user assigned to this file. |
| _OU17YellowAlertDate | NullableDateTime |     |
| _OU17RedAlertDate | NullableDateTime |     |
| OtherUser18Name | String(50) | User name of the other 18 user assigned to this file. |
| _OU18YellowAlertDate | NullableDateTime |     |
| _OU18RedAlertDate | NullableDateTime |     |
| OtherUser19Name | String(50) | User name of the other 19 user assigned to this file. |
| _OU19YellowAlertDate | NullableDateTime |     |
| _OU19RedAlertDate | NullableDateTime |     |
| OtherUser20Name | String(50) | User name of the other 20 user assigned to this file. |
| _OU20YellowAlertDate | NullableDateTime |     |
| _OU20RedAlertDate | NullableDateTime |     |
| OtherUser21Name | String(50) | User name of the other 21 user assigned to this file. |
| _OU21YellowAlertDate | NullableDateTime |     |
| _OU21RedAlertDate | NullableDateTime |     |
| OtherUser22Name | String(50) | User name of the other 22 user assigned to this file. |
| _OU22YellowAlertDate | NullableDateTime |     |
| _OU22RedAlertDate | NullableDateTime |     |
| OtherUser23Name | String(50) | User name of the other 23 user assigned to this file. |
| _OU23YellowAlertDate | NullableDateTime |     |
| _OU23RedAlertDate | NullableDateTime |     |
| OtherUser24Name | String(50) | User name of the other 24 user assigned to this file. |
| _OU24YellowAlertDate | NullableDateTime |     |
| _OU24RedAlertDate | NullableDateTime |     |
| OtherUser25Name | String(50) | User name of the other 25 user assigned to this file. |
| _OU25YellowAlertDate | NullableDateTime |     |
| _OU25RedAlertDate | NullableDateTime |     |
| SyncFileDataID2 | Integer | The file data ID of an additional synced file. For the Enterprise edition only. |
| SyncFileName2 | String(50) | File name of an additional synced file. For the Standard edition only. |
| _IsConsumerPortalLoan | Boolean | Indicates if the loan is a consumer portal loan. This value is only set when using funded loan pricing for the consumer portal. |
| MarksmanLockID | String(32) | Marksman Lock Id |
| ULI | String(45) | Universal Loan Identifier |
| OverrideULI | Boolean | Indicates the that ULI has been overrriden and should not be automatically updated. |
| URLAVersion | Enum.URLAVersion | Indicates the version of the URLA to use<br><br>* 0 - Classic<br>* 1 - ClassicWithGMIAddendum<br>* 2 - _2019 |
| CoreLogicFraudScore | NullableInteger | Fraud score returned by CoreLogic Fraud Manager. |
| TitleCurrentlyHeldInNames | String(400) | Comma separated list of names that the title is currently held in. Used for refinance loans only. |
| OriginalBorrowers | String(400) | The original borrowers on a loan being refinanced |
| FHAAgentId | string(50) | An FHA-assigned identifier of the agent making an underwriting request using the FHA Total Scorecard program. |
| PositiveRentalHistory | Enum.YesNoNA | Indicates if main borrower has a positive rental history.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PointOfSaleSystem | Enum.PointOfSaleSystem | Identifies the POS used to originate the application<br><br>* 0 - NotAssigned<br>* 1 - None<br>* 2 - ByteConsumerPortal<br>* 3 - BeSmartee<br>* 4 - Blend<br>* 5 - Floify<br>* 6 - Revvin<br>* 7 - Roostify<br>* 8 - SimpleNexus<br>* 9 - Tavant |

### [](#TOP)Status

Contains information describing the status of the loan file.

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| StatusID | integer | The ID of the Status record |
| FileDataID | Integer | ID of the Loan File |
| LoanStatus | Enum.LoanStatus | The loan file's current status<br><br>* 0 - NotAssigned<br>* 1 - Prequal<br>* 2 - CreditOnly<br>* 3 - InProcessing<br>* 4 - Submitted<br>* 5 - Approved<br>* 6 - Resubmitted<br>* 7 - Declined<br>* 8 - InClosing<br>* 9 - Closed<br>* 10 - Canceled<br>* 11 - Lead<br>* 12 - Suspended<br>* 13 - DocsSigned<br>* 14 - Funded<br>* 15 - Purchased<br>* 16 - ClearToClose<br>* 17 - DocsSent<br>* 18 - CollateralSent<br>* 19 - Shipped<br>* 51 - CustomStatus1<br>* 52 - CustomStatus2<br>* 53 - CustomStatus3<br>* 54 - CustomStatus4<br>* 55 - CustomStatus5<br>* 56 - CustomStatus6<br>* 57 - CustomStatus7<br>* 58 - CustomStatus8<br>* 59 - CustomStatus9<br>* 60 - CustomStatus10<br>* 61 - CustomStatus11<br>* 62 - CustomStatus12<br>* 63 - CustomStatus13<br>* 64 - CustomStatus14<br>* 65 - CustomStatus15<br>* 66 - CustomStatus16<br>* 67 - CustomStatus17<br>* 68 - CustomStatus18<br>* 69 - CustomStatus19<br>* 70 - CustomStatus20<br>* 71 - CustomStatus21<br>* 72 - CustomStatus22<br>* 73 - CustomStatus23<br>* 74 - CustomStatus24<br>* 75 - CustomStatus25<br>* 76 - CustomStatus26<br>* 77 - CustomStatus27<br>* 78 - CustomStatus28<br>* 79 - CustomStatus29<br>* 80 - CustomStatus30 |
| LeadDate | NullableDate | The date on which the borrower was first contacted about the loan. |
| ApplicationDate | NullableDate | The date on which the borrower applied for the loan. |
| FollowUpFlag | Enum.FollowUpFlagFile | Used to flag the loan file<br><br>* 0 - NotAssigned<br>* 1 - RedFlag<br>* 2 - BlueFlag<br>* 3 - YellowFlag<br>* 4 - GreenFlag<br>* 5 - OrangeFlag<br>* 6 - PurpleFlag |
| PrequalDate | NullableDate | The date that the loan file was marked as a prequal. |
| CreditOnlyDate | NullableDate | The date that the loan file was marked as the status 'Credit Only'. |
| InProcessingDate | NullableDate | The date that the loan file was marked as the status 'In Processing'. |
| SubmittedDate | NullableDate | The date that the loan file was submitted for underwriting. |
| ApprovedDate | NullableDate | The date that the loan file was approved by underwriting. |
| ResubmittedDate | NullableDate | The date that the loan file was resubmitted to underwriting. |
| DeclinedDate | NullableDate | The date that the loan application was declined. |
| InClosingDate | NullableDate | The date that the loan file was marked as the status 'In Closing'. |
| ClosedDate | NullableDate | The date that the loan file was closed. |
| CanceledDate | NullableDate | The date that the loan file was canceled. |
| SchedClosingDate | NullableDate | The date that the loan is scheduled to close. |
| SchedApprovalDate | NullableDate | The date that the loan is scheduled to be approved. |
| SigningDate | NullableDateTime | This field has been phased out. Use SigningAppointmentDate and SigningAppointmentTime instead. The date and time that the closing documents are scheduled to be signed. |
| GFEDeliveryMethod | Enum.GFEDeliveryMethod | The method by which the GFE was delivered to the borrower(s).<br><br>* 0 - NotAssigned<br>* 1 - InPerson<br>* 2 - Mailed<br>* 3 - EMailed<br>* 4 - Faxed<br>* 5 - ESigned<br>* 6 - EDelivered |
| GFEDeliveryDate | NullableDate | The date that the LE/GFE was delivered to the borrower(s). |
| GFERevisionDate | NullableDate | The date that a revised GFE was delivered to the borrower(s). |
| FundingDate | NullableDate | The date that the loan was funded. |
| PurchaseContractDate | NullableDate | Purchase contract date. |
| ExcludeFromManagementReports | boolean | Indicates whether the loan should be excluded from custom reports. |
| FollowUpDate | NullableDateTime | The date at which the loan file should be reviewed. |
| CreditFirstIssuedDate | NullableDateTime | Credit Report First Issued Date |
| SuspendedDate | NullableDate | The date that the loan is suspended. |
| DocsSignedDate | NullableDate | Date that the documents were signed. |
| SchedFundingDate | NullableDate | The date the loan is scheduled to be funded on. |
| CustomStatus1Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus2Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus3Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus4Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus5Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus6Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus7Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus8Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus9Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus10Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus11Date | NullableDate | Date associated with loan status '{0}'. |
| OtherDate1 | NullableDate |     |
| OtherDate2 | NullableDate |     |
| OtherDate3 | NullableDate |     |
| Notes | String(20000) | General notes pertaining to the loan file |
| LoanPurchasedDate | NullableDate | Date the loan was purchased |
| GFERevisionMethod | Enum.GFEDeliveryMethod | The method by which redisclosure was made<br><br>* 0 - NotAssigned<br>* 1 - InPerson<br>* 2 - Mailed<br>* 3 - EMailed<br>* 4 - Faxed<br>* 5 - ESigned<br>* 6 - EDelivered |
| DisclosureWaitingPeriodWaived | Boolean | Indicates whether or not the borrower has waived the initial disclosure waiting period. |
| RedisclosureWaitingPeriodWaived | Boolean | Indicates whether the borrower has waived the redisclosure waiting period |
| TILRevisionDate | NullableDate | The date that a revised TIL was sent to the applicant |
| TILRevisionMethod | Enum.GFEDeliveryMethod | The method by which a revised TIL was sent to the applicant<br><br>* 0 - NotAssigned<br>* 1 - InPerson<br>* 2 - Mailed<br>* 3 - EMailed<br>* 4 - Faxed<br>* 5 - ESigned<br>* 6 - EDelivered |
| RecissionDate | NullableDate | Recission date for the loan. |
| InvestorDueDate | NullableDate | The date by which the loan must be delivered to the investor |
| ShipByDate | NullableDate | The target date by which the loan should be shipped to the investor. |
| ClearToCloseDate | NullableDate | Date that the loan is clear to close |
| ShippedDate | NullableDate | The date the loan was shipped to the investor. |
| CollateralSentDate | NullableDate | The date that the note was sent to the warehouse lender |
| DocsSentDate | NullableDate | The date that closing documents were sent to the closing agent |
| NoteDate | NullableDate | Date on which the note was created. |
| _NMLSActionDate | NullableDate | The date used for reporting for NMLS call reports |
| PredProtectResult | Enum.ComplianceTestResult | Indicates whether the loan passes all PredProtect tests.<br><br>* 0 - NotRun<br>* 1 - NotApplicable<br>* 2 - Pass<br>* 3 - Fail |
| _StatusDate | NullableDate | The date that the loan entered the current status |
| ComplianceEaseRiskIndicator | Enum.ComplianceEaseRiskIndicator | An value returned by ComplianceEase indicating the loan's risk level.<br><br>* 0 - NotRun<br>* 1 - Critical<br>* 2 - Elevated<br>* 3 - Minimal<br>* 4 - Moderate<br>* 5 - Significant |
| ComplianceCheckRunDate | NullableDateTime | The date and time that compliance check was last run. |
| ComplianceCheckOverride | Boolean | Indicates whether a failed compliance check can be has been manually overriden. |
| AppraisalCompleted | NullableDate | The date the appraisal was completed |
| AppraisalDelivered | NullableDate | The date the appraisal was delivered to the borrower. |
| AppraisalDeliveryMethod | Enum.AppraisalDeliveryMethod | The method by which the appraisal was delivered to the borrower<br><br>* 0 - NotAssigned<br>* 1 - InPerson<br>* 2 - Mailed<br>* 3 - EMailed<br>* 4 - Faxed |
| Appraisal2Completed | NullableDate | The date the second appraisal was completed |
| Appraisal2Delivered | NullableDate | The date the second appraisal was delivered to the borrower |
| Appraisal2DeliveryMethod | Enum.AppraisalDeliveryMethod | The method by which the second appraisal was delivered to the borrower<br><br>* 0 - NotAssigned<br>* 1 - InPerson<br>* 2 - Mailed<br>* 3 - EMailed<br>* 4 - Faxed |
| AppraisalReceivedByBorrower | NullableDate | The date the appraisal was known to be received by the borrower. Use this field when evidence indicates actual receipt by the borrower. |
| Appraisal2ReceivedByBorrower | NullableDate | The date the second appraisal was known to be received by the borrower. Use this field when evidence indicates actual receipt by the borrower. |
| AppraisalTimingWaiverDate | NullableDate | The date the borrower waived their right to receive the appraisal prior to consummation. Reference 12 CFR 1002.14(a)(1). This field applies to all appraisals. |
| DocsBackDate | NullableDate | The date the signed closing documents were received back. |
| DocsImagedDate | NullableDate | The date the signed closing documents were imported into the document imaging system |
| InvestorPackagedDate | NullableDate | The date the investor package was prepared for the investor |
| InvestorShippedDate | NullableDate | The date the investor package was shipped to the investor |
| InvestorSuspendedDate | NullableDate | The date the investor suspended the loan |
| InvestorClearedDate | NullableDate | The date the loan was cleared by the investor |
| InsurancePackagedDate | NullableDate | The date the insurance package was prepared |
| InsuranceShippedDate | NullableDate | The date the insurance package was sent |
| InsuranceRejectedDate | NullableDate | The date the insurance package was rejected |
| InsuranceResubmittedDate | NullableDate | The date the insurance package was resubmitted |
| InsuranceObtainedDate | NullableDate | The date insurance was obtained. For FHA loans this is the endorsement date. |
| InsuranceRHSRequestMailedDate | NullableDate | The date the insurance request was mailed for USDA/RHS loans |
| InsuranceRHSResponseDate | NullableDate | The date the insurance response was received from USDA/RHS |
| InsuranceFeeDeliveredDate | NullableDate | The date the insurance fee was delivered |
| InsuranceMIC_LGCToInvestorDate | NullableDate | The date the MIC or LGC was sent to the investor |
| ServicingFirstPaymentDate | NullableDate | The first payment date to the servicer |
| ServicingDataSentDate | NullableDate | The date that the servicing data was sent to the servicer |
| ServicingPackageSentDate | NullableDate | The date the servicing package was sent to the servicer |
| ServicingAuditDate | NullableDate | The date that the servicing audit was performed |
| ServicingAuditUserName | String(50) | The username of the user that performed the servicing audit |
| CorrPurchaseByDate | NullableDate | In a correspondent environment, the date that the loan must be purchased from the correspondent lender. |
| CorrOriginalNoteReceivedDate | NullableDate | In a correspondent environment, the date the original note was received from the correspondent lender or the correspondent lender's warehouse bank. |
| InsuringReceivedDate | NullableDate | Date the insuring department started reviewing the loan file. |
| InsuranceReviewReqDate | NullableDate | Date the insurance package was requested by HUD, VA or RHS for review. |
| MortRecChangeDate | NullableDate | Date the loan was assigned to the investor in FHA Connection. |
| CaseTransferReqDate | NullableDate | Date the borrower requested that the case be transferred to a new lender. |
| CaseTransferCompDate | NullableDate | Date the case was transferred to the new lender. |
| InsuringNotes | String(200) | Notes for the insuring department. |
| ShippingReceivedDate | NullableDate | Date that the shipping department received the file. |
| CollateralPackSentDate | NullableDate | Date that the note and other documents were sent to the warehouse bank. |
| FinalHUDToInvestorDate | NullableDate | Date the final HUD-1 was sent to the investor. |
| NoteShipmentReqDate | NullableDate | Date the lender requested the warehouse bank send the note to the investor. |
| NoteBackToWarehouseDate | NullableDate | Date the note was returned to the warehouse bank if the original investor did not purchase the loan. |
| ShippingNotes | String(200) | Notes for the shipping department. |
| PMICertificateActivationDate | NullableDate | The date the PMI certificate was activated |
| PreapprovalApplicationDate | NullableDate | The date the preapproval request was made. This date is used for HMDA and NMLS reporting. |
| _NMLSApplicationDate | NullableDate | The application date used for NMLS reporting purposes. |
| CDWaitingPeriodWaived | Boolean | Indicates whether the borrower has waived the 3 day waiting period between the time the borrower receives the Closing Disclosure and the consummation of the loan. |
| IntentToProceedDate | NullableDate | The date the borrower indicated their intent to proceed with the loan. |
| ClosingCostsExpirationDate | NullableDate | The date that the closing costs expire on the Loan Estimate |
| ClosingCostsExpirationTimeOfDayOV | String(20) | An override value for the time of day that the closing costs expire on the Loan Estimate. This value is normally calculated. |
| CDDateIssuedOption | Enum.CDDateIssuedOption | Indicates which date should be printed in the Date Issued field on the Closing Disclosure<br><br>* 0 - DateOnDocuments<br>* 1 - ScheduledClosingDate<br>* 2 - OtherDate |
| CDDateIssuedOtherDate | NullableDate | The date shown in the Date Issued field on the Closing Disclosure when the CD Date Issued Option is Other Date |
| _HasSixAppDataPoints | Boolean | Indicates whether the six application data points have been entered: borrower name, income, SSN, property address, property value, and loan amount. |
| _ApplicationTestResult | Enum.ApplicationTestResult | The result of the test that determines if the application date has been entered properly when the six application data points have been collected.<br><br>* 0 - NotAssigned<br>* 1 - HasSixDataPointsAndAppDateSet<br>* 2 - HasSixDataPointsAndAppDateNotSet<br>* 3 - DoesNotHaveSixDataPointsAndAppDateSet<br>* 4 - DoesNotHaveSixDataPointsAndAppDateNotSet |
| FeeReconciliationTestResult | Enum.FeeReconciliationTestResult | The result of the test to determine if there are unreconciled fee increases on a TRID loan.<br><br>* 0 - NotAssigned<br>* 1 - NotATRIDLoan<br>* 2 - LENotDelivered<br>* 3 - NoUnreconciledFeeIncreases<br>* 4 - UnreconciledFeeIncreases |
| TRIDDisclosureTestResult | Enum.TRIDDisclosureTestResult | The result of the test to determine if the LE or CD needs to be disclosed or redisclosed.<br><br>* 0 - NotAssigned<br>* 1 - NotATRIDLoan<br>* 2 - ApplicationDateNotSet<br>* 3 - LEInitialDisclosureRequired<br>* 4 - RedisclosureRequired<br>* 5 - RedisclosureNotRequired |
| LEDisclosureTestResult | Enum.LEDisclosureTestResult | The result of the test to determine if the LE needs to be disclosed or redisclosed. This test result is derived from TRIDDisclosureTestResult.<br><br>* 0 - NotAssigned<br>* 1 - NotATRIDLoan<br>* 2 - ApplicationDateNotSet<br>* 3 - LEInitialDisclosureRequired<br>* 4 - LERedisclosureRequired<br>* 5 - LERedisclosureNotRequired<br>* 6 - LERedisclosureNotPermittedCDDisclosed |
| CDDisclosureTestResult | Enum.CDDisclosureTestResult | The result of the test to determine if the CD needs to be redisclosed. This test result is derived from TRIDDisclosureTestResult.<br><br>* 0 - NotAssigned<br>* 1 - NotATRIDLoan<br>* 2 - ApplicationDateNotSet<br>* 3 - CDNotDisclosed<br>* 4 - CDRedisclosureNotRequired<br>* 5 - CDRedisclosureRequired |
| ClosingCostsExpirationTimeZoneCityOV | Enum.TimeZoneCity | The city identifier for the time zone for the date the closing costs expire on the Loan Estimate. This value is used by certain document preparation providers and is normally calculated based on the time zone abbreviation and the subject property state.<br><br>* 0 - NotAssigned<br>* 10 - NewYork<br>* 20 - Chicago<br>* 30 - Boise<br>* 40 - Phoenix<br>* 50 - LosAngeles<br>* 60 - Anchorage<br>* 70 - Honolulu<br>* 80 - Bermuda<br>* 90 - StJohns<br>* 100 - Marquesas<br>* 110 - PagoPago<br>* 120 - Caracas<br>* 130 - Halifax<br>* 140 - BuenosAires<br>* 150 - SouthGeorgia<br>* 160 - Azores<br>* 170 - Reykjavik<br>* 180 - London<br>* 190 - Guam<br>* 200 - SanJuan |
| CustomStatus12Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus13Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus14Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus15Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus16Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus17Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus18Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus19Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus20Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus21Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus22Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus23Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus24Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus25Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus26Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus27Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus28Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus29Date | NullableDate | Date associated with loan status '{0}'. |
| CustomStatus30Date | NullableDate | Date associated with loan status '{0}'. |
| SigningAppointmentConfirmed | Boolean | Indicates whether the signing appointment has been confirmed and is OK to be communicated to the borrowers. |
| SigningAppointmentLocationType | Enum.SigningAppointmentLocationType | Identifies where the signing will take place.<br><br>* 0 - NotAssigned<br>* 1 - SettlementCompany<br>* 2 - TitleCompany<br>* 3 - EscrowCompany |
| SigningAppointmentTime | String(15) | The signing appointment time of day |
| SigningAppointmentDate | NullableDate | The date that signing occurs |
| LastStatusChangeDateTime | NullableDateTime | Last date and time the loan status was changed. |
| _ESignTestResult | Enum.ESignTestResult | Indicates whether documents that have been sent for e-signing need to be delivered<br><br>* 0 - NoESignPackagesSent<br>* 1 - NoUnsignedPackages<br>* 2 - NoUndeliveredPackages<br>* 3 - UndeliveredPackages<br>* 4 - PackagesPastEDeliveryDeadline |
| MERSRegistrationDate | NullableDateTime | The date and time the loan was registered with MERS |
| MERSTransferDate | NullableDateTime | The date and time the loan was transferred in MERS |
| MERSCurrentInvestorOrgID | String(7) | The current investor that is populated in the MERS system. |
| MERSCurrentServicerOrgID | String(7) | The current servicer that is populated in the MERS system. |
| MERSCurrentSubservicerOrgID | String(7) | The current subservicer that is populated in the MERS system. |
| InterimIntAdditionalConsentedDays | NullableInteger | The number of additional days of interim interest that the borrower has consented to paying. Currently used for CA loans only. |
| NMLSApplicationDateCalcOption | Enum.NMLSApplicationDateCalcOption | Indicates how the NMLS Application Date is calculated<br><br>* 0 - Default<br>* 1 - HMDADeniedDate<br>* 2 - StatusDeclinedDate |
| SchedInsuranceObtainedDate | NullableDate | The date insurance is scheduled to be obtained. For FHA loans this is the scheduled endorsement date. |
| _LockMonitorTestResult | Enum.LockMonitorTestResult | Indicates whether the loan needs to be repriced<br><br>* 0 - NotAssigned<br>* 1 - NotLocked<br>* 2 - LockCancelled<br>* 3 - LockExpired<br>* 4 - LoanProgramNotMonitored<br>* 5 - StatusNotMonitored<br>* 6 - LockHistoryNotFound<br>* 7 - RepriceNotNeeded<br>* 8 - RepriceNeeded |
| PreventAutoCalcMIPFF | Boolean | Indicates whether the MIP/FF and Loan with MIP/FF are prevented from being automatically calculated when the corresponding default setting is set. |

### [](#TOP)Borrower

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| BorrowerID | Integer | Bor ID |
| FileDataID | Integer | ID of the Loan File |
| FirstName | string(50) | First Name |
| MiddleName | string(50) | Middle Name |
| LastName | string(50) | Last Name |
| Generation | string(10) | Generation |
| NickName | String(50) |     |
| SSN | string(50) | SSN |
| HomePhone | string(50) | Home Phone |
| MobilePhone | string(20) | Mobile Phone |
| Fax | string(50) | Fax |
| Age | NullableInteger | Age |
| DOB | NullableDate | Date of Birth |
| Ethnicity | Enum.Ethnicity | Ethnicity. Applies only to the version of the GMI data that is used for applications taken before January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - HispanicOrLatino<br>* 2 - NotHispanicOrLatino<br>* 3 - NotProvided<br>* 4 - NotApplicable |
| GovDoNotWishToFurnish | boolean | If checked, indicates that the borrower did not wish to supply the government monitoring information: ethnicity, race and/or sex. Applies only to the version of the GMI data that is used for applications taken before January 1 2018. |
| RaceNotApplicable | boolean | If checked, indicates that this borrower's race is not applicable. Applies only to the version of the GMI data that is used for applications taken before January 1 2018. |
| RaceNotProvided | boolean | If checked, indicates that the borrower did not provide the race. Applies only to the version of the GMI data that is used for applications taken before January 1 2018. |
| RaceAmericanIndian | boolean | American Indian or Alaska Native. Applies only to the version of the GMI data that is used for applications taken before January 1 2018. |
| RaceAsian | boolean | Asian. Applies only to the version of the GMI data that is used for applications taken before January 1 2018. |
| RaceBlack | boolean | Black or African American. Applies only to the version of the GMI data that is used for applications taken before January 1 2018. |
| RacePacificIslander | boolean | Native Hawaiian or Other Pacific Islander. Applies only to the version of the GMI data that is used for applications taken before January 1 2018. |
| RaceWhite | boolean | White. Applies only to the version of the GMI data that is used for applications taken before January 1 2018. |
| Gender | Enum.Gender | Gender. Applies only to the version of the GMI data that is used for applications taken before January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - Female<br>* 2 - Male<br>* 3 - NotProvided<br>* 4 - NotApplicable |
| YearsSchool | NullableInteger | Years School |
| MaritalStatus | Enum.MaritalStatus | Marital Status<br><br>* 0 - NotAssigned<br>* 1 - Married<br>* 2 - Separated<br>* 3 - Unmarried |
| NoDeps | NullableInteger | Number of dependents |
| DepsAges | string(40) | Ages of dependents |
| Email | string(50) | Email |
| DateSigned1003 | NullableDate | Date Signed1003 |
| OmitFromTitle | boolean | Omit From Title |
| FNMACreditRefNo | string(50) | FNMACredit Ref No |
| VAServiceNo | string(50) | VAService No |
| VAClaimFolderNo | string(50) | VAClaim Folder No |
| CAIVRS | string(50) | CAIVRS |
| LDP | string(50) | LDP |
| OutstandingJudgements | Enum.YesNoNA | Declarations - Are there outstanding judgements against you<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| Bankruptcy | Enum.YesNoNA | Declarations - Have you been declared bankrupt in the last 7 years<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PropertyForeclosed | Enum.YesNoNA | Declarations - Pre-2021 URLA: Have you had property foreclosed upon or given title or deed in lieu thereof in the last 7 years? 2021 URLA: Have you had property foreclosed upon in the last 7 years?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PartyToLawsuit | Enum.YesNoNA | Declarations - Pre-2021 URLA: Are you a party to a lawsuit? 2021 URLA: Are you a party to a lawsuit in which you potentially have any personal financial liability?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| LoanForeclosed | Enum.YesNoNA | Declarations - Have you directly or indirectly been obligated on any loan which resulted in foreclosure, transfer of title in lieu of foreclosure, or judgment?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| DelinquentFederalDebt | Enum.YesNoNA | Declarations - Are you presently delinquent or in default on any Federal debt or any other loan, mortgage, financial obligation, bond, or loan guarantee?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| AlimonyObligation | Enum.YesNoNA | Declarations - Are you obligated to pay alimony, child support, or separate maintenance?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| DownPaymentBorrowed | Enum.YesNoNA | Declarations - Pre-2021 URLA: Is any part of the down payment borrowed? 2021 URLA: Are you borrowing any money for this real estate transaction (e.g., money for your closing costs or down payment) or obtaining any money from another party, such as the seller or realtor, that you have not disclosed on this loan application?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| EndorserOnNote | Enum.YesNoNA | Declarations - Pre-2021 URLA: Are you a co-maker or endorser on a note? 2021 URLA: Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| OccupyAsPrimaryRes | Enum.YesNoNA | Declarations - Do you intend to occupy the property as your primary residence?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| OwnershipInterest | Enum.YesNoNA | Declarations - Have you had an ownership interest in a property in the last 3 years?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PropertyType | Enum.DeclarationPropertyType(2) | Declarations - What type of property did you own?<br><br>* 0 - NotAssigned<br>* 1 - PRPrincipalResidence<br>* 2 - SHSecondHome<br>* 3 - IPInvestmentProperty<br>* 4 - SRFHASecondaryResidence |
| TitleHeld | Enum.DeclarationTitleHeld(2) | Declarations - How did you hold title to the home?<br><br>* 0 - NotAssigned<br>* 1 - SSolely<br>* 2 - SPJointlyWithSpouse<br>* 3 - OJointlyWithAnotherPerson |
| IncomeNetRentalOV | NullableCurrency | NetRental Income Override Value |
| IncomeOther1OV | NullableCurrency | Other Income 1 Override Value |
| IncomeOther2OV | NullableCurrency | Other Income 2 Override Value |
| IncomeTotalOV | NullableCurrency | Total Income Override Value |
| MailingStreet | string(50) | Mailing address street |
| MailingCity | string(50) | Mailing address city |
| MailingState | string(2) | Mailing address state |
| MailingZip | string(9) | Mailing address zip code |
| MailingCountry | string(50) | Mailling address country |
| IdentityDocType | string(50) | Indicates the type of document used to verify the borrower's identity. For use on the Verification of Identification form. |
| IdentityDocNo | string(50) | Indicates the document number (i.e. driver's license number) of the document used to verify the borrower's identity. For use on the Verification of Identification form. |
| IdentityDocPlaceOfIssuance | string(50) | Indicates the place of issuance of the document used to verify the borrower's identity. For use on the Verification of Identification form. |
| IdentityDocDateOfIssuance | NullableDate | Indicates the date of issuance of the document used to verify the borrower's identity. For use on the Verification of Identification form. |
| IdentityDocExpDate | NullableDate | Indicates the expiration date of the document used to verify the borrower's identity. For use on the Verification of Identification form. |
| OFACScanComplete | boolean | Indicates whether or not an OFAC scan has been completed for the borrower. For use on the Verification of Identification form. |
| IdentityComments | string(300) | Contains a comment that can be included on the Verification of Identification form. |
| VADeductionFedTax | NullableCurrency | Deduction for federal income tax |
| VADeductionStateTax | NullableCurrency | Deduction for state income tax |
| VADeductionRetirement | NullableCurrency | Deduction for taxes on retirement funds |
| VADeductionOther | NullableCurrency | VA - other income deduction |
| IsVeteran | Enum.YesNoNA | Indicates whether the borrower qualifies as a Veteran under HUD guidelines and that the loan application should be evaluated as a 203(b)(2) Veteran Loan. If any borrower qualifies as a Veteran under VA guidelines then the loan (including all borrowers) may be processed as a VA loan application.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ExperianScore | NullableInteger | Experian Credit Score |
| ExperianModel | String(50) | Experian Score Model |
| ExperianFactors | String(1000) | Experian Factors Affecting the Credit Score |
| ExperianPIN | string(10) | Experian Credit Freeze PIN |
| TransUnionScore | NullableInteger | TransUnion Credit Score |
| TransUnionModel | String(50) | TransUnion Score Model |
| TransUnionFactors | String(1000) | TransUnion Factors Affecting the Credit Score |
| TransUnionPIN | string(10) | TransUnion Credit Freeze PIN |
| EquifaxScore | NullableInteger | Equifax Credit Score |
| EquifaxModel | String(50) | Equifax Score Model |
| EquifaxFactors | String(1000) | Equifax Factors Affecting the Credit Score |
| EquifaxPIN | string(10) | Equifax Credit Freeze Pin |
| CreditScoreLow | NullableInteger |     |
| CreditScoreHigh | NullableInteger |     |
| CreditScoreAverage | NullableInteger |     |
| _IncomeNetRental | NullableCurrency |     |
| _IncomeOther1 | NullableCurrency |     |
| _IncomeOther2 | NullableCurrency |     |
| _IncomeTotal | NullableCurrency |     |
| _CreditScoreMedian | NullableInteger | Median Credit Score |
| IsNonPersonEntity | Boolean | &lt;BR&gt;Default=False |
| FMACCreditRefNo | string(50) | FMAC Credit Ref No |
| HasLDP | Enum.YesNoNA | Does Borrower have LDP?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HAMPHardshipIncomeReduced | Enum.YesNoNA | For Home Affordable Modifications - indicates whether or not the borrower's hardship stems from reduced income.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HAMPHardshipCircumstancesChanged | Enum.YesNoNA | For Home Affordable Modifications - indicates whether or not the borrower's hardship stems from a change in circumstances.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HAMPHardshipExpensesIncreased | Enum.YesNoNA | For Home Affordable Modifications - indicates whether or not the borrower's hardship stems from increased expenses.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HAMPHardshipCashReservesInsufficient | Enum.YesNoNA | For Home Affordable Modifications - indicates whether or not the borrower's hardship stems from insufficient cash reserves.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HAMPHardshipDebtPaymentsExcessive | Enum.YesNoNA | For Home Affordable Modifications - indicates whether or not the borrower's hardship stems from excessive debt payments.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HAMPHardshipOther | Enum.YesNoNA | For Home Affordable Modifications - indicates whether or not the borrower's hardship stems from other factors.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| CitizenResidencyType | Enum.CitizenResidencyType | Indicates whether the borrower is a US Citizen, Permanent Resident Alien, Non Permanent Resident Alien, Non Resident Alien, or Unknown<br><br>* 0 - NotAssigned<br>* 1 - USCitizen<br>* 2 - PermanentResidentAlien<br>* 3 - NonPermanentResidentAlien<br>* 4 - NonResidentAlien<br>* 5 - Unknown |
| _USCitizen | Enum.YesNoNA | Declarations - Are you a U.S. citizen?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| _ResidentAlien | Enum.YesNoNA | Declarations - Are you a permanent resident alien?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| EquifaxModelRangeLow | NullableInteger | Low range of Equifax credit score model used to determine the borrowers credit score |
| EquifaxModelRangeHigh | NullableInteger | High range of Equifax credit score model used to determine the borrowers credit score |
| ExperianModelRangeLow | NullableInteger | Low range of Experian credit score model used to determine the borrowers credit score |
| ExperianModelRangeHigh | NullableInteger | High range of Equifax credit score model used to determine the borrowers credit score |
| TransUnionModelRangeLow | NullableInteger | Low range of TransUnion credit score model used to determine the borrowers credit score |
| TransUnionModelRangeHigh | NullableInteger | High range of TransUnion credit score model used to determine the borrowers credit score |
| EquifaxCreditScoreRank | NullableCurrency | Ranking as percentage of consumers who have the same credit score as the borrower per the Equifax Credit Score Model |
| ExperianCreditScoreRank | NullableCurrency | Ranking as percentage of consumers who have the same credit score as the borrower per the Experian Credit Score Model |
| TransUnionCreditScoreRank | NullableCurrency | Ranking as percentage of consumers who have the same credit score as the borrower per the Transunion Credit Score Model |
| CreditDenialCreditBureauFlags | Enum.CreditBureauBitFlag | Indicates which credit bureau(s) are shown on the statement of credit denial<br><br>* 0 - BitFlagNone<br>* 1 - BitFlagEquifax<br>* 2 - BitFlagTransUnion<br>* 4 - BitFlagExperian |
| CreditDenialOtherReasons | String(200) | Other reasons for credit denial that are specific to this borrower |
| CreditDenialCreditScoreBureauOV | Enum.CreditBureau | Override value for the selection of which credit bureau's score to show on the Statement of Credit Denial.<br><br>* 0 - NotAssigned<br>* 1 - Equifax<br>* 2 - TransUnion<br>* 3 - Experian |
| CreditDenialCreditScoreUsedOV | Enum.YesNoNA | Override indicator for whether or not the credit score for this borrower was used in taking adverse action<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| CounselingConfirmationType | Enum.CounselingConfirmationType | ULDD - Type of mortgage counseling received by the borrower.<br><br>* 0 - NotAssigned<br>* 1 - GovernmentAgency<br>* 2 - HUDApprovedCounselingAgency<br>* 3 - LenderTrainedCounseling<br>* 4 - NoBorrowerCounseling<br>* 100 - BorrowerDidNotParticipate<br>* 101 - MortgageInsuranceCompany<br>* 102 - NonProfitOrganization |
| CounselingFormatType | Enum.CounselingFormatType | ULDD - The format under which the mortgage counseling took place.<br><br>* 0 - NotAssigned<br>* 1 - BorrowerEducationNotRequired<br>* 2 - Classroom<br>* 3 - HomeStudy<br>* 4 - Individual<br>* 100 - BorrowerDidNotParticipate |
| MobilePhoneSMSGateway | String(40) | SMS gateway for sending text message to the mobile phone |
| FirstTimeHomebuyer | Boolean | ULDD - Flags a borrower as a first time homebuyer. |
| LegalEntityType | Enum.LegalEntityType | ULDD - Type of legal entity to export when the borrower is designated a non-person entity.<br><br>* 0 - NotAssigned<br>* 1 - Corporation<br>* 2 - GovernmentEntity<br>* 3 - JointVenture<br>* 4 - LimitedLiabilityCompany<br>* 5 - LimitedPartnership<br>* 6 - NonProfitCorporation<br>* 8 - Partnership<br>* 100 - LandTrustAndBeneficiaryIsIndividual<br>* 101 - LivingTrust<br>* 102 - IllinoisLandTrust<br>* 103 - LandTrust<br>* 104 - NativeAmericanTribeOrTribalOrganization |
| NonTraditionalCreditUsed | Boolean | ULDD - True if the borrower has no credit score available from one of the standard credit repositories. |
| PostClosingMailingOverride | Boolean | Indicates that the post-closing mailing address should not be calculated automatically based on whether or not the borrower intended to occupy the subject property as his/her primary residence. |
| PostClosingMailingStreet | String(100) | The post-closing mailing address street |
| PostClosingMailingCity | String(50) | The post-closing mailing address city |
| PostClosingMailingState | String(2) | The post-closing mailing address state |
| PostClosingMailingZip | String(9) | The post-closing mailing address zip code |
| PostClosingMailingCountryCode | String(2) | The post-closing mailing address country code |
| TaxpayerIdentifierType | Enum.TaxpayerIdentifierType | Identifies what type of value is stored in the social security number field.<br><br>* 0 - SSN<br>* 1 - EIN<br>* 2 - ITIN |
| CAIVRSInfo | String(10000) | CAIVRS Information |
| POAFirstName | String(50) | Power of Attorney First Name |
| POAMiddleName | String(50) | Power of Attorney Middle Name |
| POALastName | String(50) | Power of Attorney Last Name |
| POAGeneration | String(10) | Power of Attorney Generation |
| POASigningCapacity | String(50) | Signing capacity of the power of attorney signer, for example Attorney in Fact. |
| NonPersonEntitySigner | String(250) | Name of non-person entity signer. |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| ForeclosureExplanation | Enum.ForeclosureExplanation | Borrower Foreclosure Explanation<br><br>* 1 - Confirmed\_CR\_DIL<br>* 2 - Confirmed\_CR\_PFS<br>* 4 - Confirmed\_CR\_FC_Incorrect<br>* 8 - Confirmed\_CR\_FC_EC<br>* 16 - Confirmed\_CR\_BK_Incorrect<br>* 32 - Confirmed\_CR\_BK_EC<br>* 64 - Confirmed\_Mtg\_Del_Incorrect<br>* 128 - Foreclosure_Incorrect<br>* 256 - Foreclosure_EC<br>* 512 - Bankruptcy_Incorrect<br>* 1024 - Bankruptcy_EC<br>* 2048 - DelinquencyOrDefault_Incorrect<br>* 4096 - DelinquencyOrDefault_EC<br>* 8192 - OutstandingJudgements_Incorrect<br>* 16384 - OutstandingJudgements_EC<br>* 32768 - DIL_Incorrect<br>* 65536 - DIL_EC<br>* 131072 - PreforeclosureSaleOrShortSale_Incorrect<br>* 262144 - PreforeclosureSaleOrShortSale_EC |
| PrevFHAMort | Enum.YesNoNA | Has borrower owned or sold another FHA mortgage in the last 60 months?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PrevFHAMortToBeSold | Enum.YesNoNA | Is the previous FHA mortgage to be sold?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PrevFHAMortSalesPrice | NullableCurrency | Sales price of previously sold FHA mortgage. |
| PrevFHAMortOrigLoan | NullableCurrency | Original loan amount of previous FHA mortgage. |
| PrevFHAMortStreet | String(50) | Street address of previous FHA mortgage property. |
| PrevFHAMortCity | String(50) | City of previous FHA mortgage property. |
| PrevFHAMortState | String(2) | State of previous FHA mortgage property. |
| PrevFHAMortZip | String(9) | Zip code of previous FHA mortgage property. |
| FinIntInSubdivision | Enum.YesNoNA | Does borrower have a financial interest in any property in or near the property involved in this mortgage?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| SubdivisionDetails | String(200) | Deacription of borrower's financial interest in adjacent properties. |
| OwnMoreThanFourDwellings | Enum.YesNoNA | Does borrower own more than 4 dwellings?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| EverHadVALoan | Enum.YesNoNA | Has borrower ever had a VA loan before?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| VAOccupancyType | Enum.VAOccupancyType | Occupancy Type for VA loans only.<br><br>* 0 - NotAssigned<br>* 1 - CurrentOccupant<br>* 2 - SpouseIsVeteranAndWillOccupy<br>* 3 - PreviousOccupant<br>* 4 - SpouseIsVeteranAndPrevOccupant<br>* 5 - ChildWillOccupy<br>* 6 - ChildOccupiedIRRL |
| PriceExceedingValueAwareness | Enum.PriceExceedingValueAwareness | Is borrower aware of the price exceeding value options?<br><br>* 0 - NotAssigned<br>* 1 - AwareAtSigning<br>* 2 - NotAwareAtSigning |
| OKToEDisclose | Boolean | Indicates the borrower gave the lender consent to E-Disclose&lt;BR&gt;Default=False |
| OKToPullCredit | Boolean | Indicates the borrower gave the lender consent to pull credit&lt;BR&gt;Default=False |
| CDSignatureMethod | Enum.CDSignatureMethod | CD Signature Method<br><br>* 0 - NotAssigned<br>* 1 - NoSignatureLine<br>* 2 - Wet<br>* 3 - Digital<br>* 4 - Image<br>* 5 - Text<br>* 6 - Other |
| CDSignatureMethodOtherDesc | String(35) | CD Signature Method other description |
| IsCoveredByMilitaryLendingAct | Enum.YesNoNA | Indicates whether or not the borrower is covered by the Military Lending Act (MLA).<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| SSAMatchResult | Enum.SSAMatchResult | Indicates whether the borrower SSN matched on an interface order to the SSA.<br><br>* 0 - NotRun<br>* 1 - Match<br>* 2 - NoMatch |
| SSACheckedSSN | String(9) | Identifies the SSN that was checked by the SSA interface. |
| EthnicityOtherHispanicOrLatinoDesc | String(100) | Other Hispanic or Latino description. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018. |
| RaceAmericanIndianTribe | String(100) | American Indian or Alaskan Native - name of enrolled or principal tribe. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018. |
| RaceOtherAsianDesc | String(100) | Other Asian description. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018. |
| RaceOtherPacificIslanderDesc | String(100) | Other Pacific Islander description. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018. |
| DemographicInfoProvidedMethod | Enum.DemographicInfoProvidedMethod | Indicates how the ethnicity, race and gender information was collected on the URLA. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - FaceToFace<br>* 2 - Telephone<br>* 3 - FaxOrMail<br>* 4 - EmailOrInternet |
| Race2 | Enum.Race2 | Indicates the race of the borrower. All race selections (Asian, Asian Indian, etc) are encapsulated in this field. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018.<br><br>* 0 - None<br>* 1 - IDoNotWishToFurnish<br>* 2 - AmericanIndian<br>* 4 - Asian<br>* 8 - Black<br>* 16 - PacificIslander<br>* 32 - White<br>* 64 - AsianIndian<br>* 128 - Chinese<br>* 256 - Filipino<br>* 512 - Japanese<br>* 1024 - Korean<br>* 2048 - Vietnamese<br>* 4096 - OtherAsian<br>* 8192 - NativeHawaiian<br>* 16384 - GuamanianOrChamorro<br>* 32768 - Samoan<br>* 65536 - OtherPacificIslander |
| Ethnicity2 | Enum.Ethnicity2 | Indicates the ethnicity of the borrower. All ethnicity selections (Hispanic or Latino, Mexican, etc) are encapsulated in this field. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018.<br><br>* 0 - None<br>* 1 - IDoNotWishToFurnish<br>* 2 - HispanicOrLatino<br>* 4 - NotHispanicOrLatino<br>* 8 - Mexican<br>* 16 - PuertoRican<br>* 32 - Cuban<br>* 64 - OtherHispanicOrLatino |
| Gender2 | Enum.Gender2 | Indicates the gender of the borrower. All gender selections (Female, Male, I do not wish to provide) are encapsulated in this field. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018.<br><br>* 0 - None<br>* 1 - IDoNotWishToFurnish<br>* 2 - Female<br>* 4 - Male |
| Race2CompletionMethod | Enum.GMICompletionMethod | Indicates how the race information was completed or why it was not completed. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - ProvidedByBorrower<br>* 2 - NotProvidedInMailTelephoneOrInternetApplication<br>* 3 - CollectedOnTheBasisOfVisualObservationOrSurname |
| Ethnicity2CompletionMethod | Enum.GMICompletionMethod | Indicates how the ethnicity information was completed or why it was not completed. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - ProvidedByBorrower<br>* 2 - NotProvidedInMailTelephoneOrInternetApplication<br>* 3 - CollectedOnTheBasisOfVisualObservationOrSurname |
| Gender2CompletionMethod | Enum.GMICompletionMethod | Indicates how the gender information was completed or why it was not completed. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - ProvidedByBorrower<br>* 2 - NotProvidedInMailTelephoneOrInternetApplication<br>* 3 - CollectedOnTheBasisOfVisualObservationOrSurname |
| GMINotApplicable | Boolean | Indicates whether the race, gender and ethnicity are applicable for HMDA reporting. Applies only to the version of the GMI data that is required for applications taken on or after January 1 2018. |
| HasMilitaryService | Enum.YesNoNA | Self declared military status indicator as specified on page 1 of the 2021 URLA<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsMilitarySurvivingSpouse | Enum.YesNoNA | Indicates whether borrower is Military Surviving Spouse as specified on page 1 of the 2021 URLA<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| MilitaryServiceExpirationDate | NullableDate | The date the active military term of service is scheduled to end as specified on page 1 of the 2021 URLA |
| LanguagePreference | Enum.LanguagePreferenceType | Language preference as specified on Page 1 of the 2021 URLA<br><br>* 0 - NotAssigned<br>* 1 - English<br>* 2 - Chinese<br>* 3 - Korean<br>* 4 - Spanish<br>* 5 - Tagalog<br>* 6 - Vietnamese<br>* 7 - Other<br>* 8 - IDoNotWishToRespond |
| LanguageOtherDesc | String(35) | Other language preference as specified on Page 1 of the 2021 URLA |
| UseUnmarriedAddendumOV | Enum.YesNoNA | Override value to indicate whether the unmarried addendum should be used when the borrower is unmarried.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HasDomesticRelationship | Enum.YesNoNA | Indicates if there is a person who is not the borrower's legal spouse but who currently has real property rights similar to those of a legal spouse<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| DomesticRelationshipType | Enum.DomesticRelationshipType | Indicates the type of domestic relationship if HasDomesticRelationship is Yes.<br><br>* 0 - NotAssigned<br>* 1 - CivilUnion<br>* 2 - DomesticPartnership<br>* 3 - RegisteredReciprocalBeneficiaryRelationship<br>* 4 - Other |
| DomesticRelationshipOtherDesc | String(80) | Description of the other type of domestic relationship |
| DomesticRelationshipState | String(2) | The two character state code identifying the state in which the domestic relationship was formed |
| SpecialBorrowerSellerRelationship | Enum.YesNoNA | Declaration - If this is a Purchase Transaction: Do you have a family relationship or business affiliation with the seller of the property?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| UndisclosedBorrowerFundsAmount | NullableCurrency | Declaration - the amount of undisclosed borrowed money |
| UndisclosedMortgageApplication | Enum.YesNoNA | Declaration - Have you or will you be applying for a mortgage loan on another property (not the property securing this loan) on or before closing this transaction that is not disclosed on this loan application?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| UndisclosedCreditApplication | Enum.YesNoNA | Declaration - Have you or will you be applying for any new credit (e.g. installment loan, credit card, etc.) on or before closing this loan that is not disclosed on this application?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PropertyProposedCleanEnergyLien | Enum.YesNoNA | Declaration - Will this property be subject to a lien that could take priority over the first mortgage lien, such as a clean energy lien paid through your property taxes (e.g. the Property Assessed Clean Energy Program)?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PriorPropertyShortSaleCompleted | Enum.YesNoNA | Description: Declarations - Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby the property was sold to a third party and the lender agreed to accept less than the outstanding mortgage balance due?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| BankruptcyChapterType | Enum.BankruptcyChapterType | Declarations - If the borrower declared bankruptcy in the past 7 years identify the type(s) of bankruptcy<br><br>* 0 - NotAssigned<br>* 1 - ChapterSeven<br>* 2 - ChapterEleven<br>* 4 - ChapterTwelve<br>* 8 - ChapterThirteen |
| FormerResidencesDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked next to the section that lists former residences. If the borrower does have former residences then the box will not be checked even if the value of this field is true. |
| MailingAddressDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section that lists the mailing address. If a mailing address is entered then the box will not be checked even if the value of this field is true. |
| PrimaryEmployerDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled Current Employment/Self Employment and Income. If a current employer is entered then the box will not be checked even if the value of this field is true. |
| SecondaryEmployersDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled IF APPLICABLE, Complete Information for Additional Employment/Self Employment and Income. If one or more secondary employers are entered then the box will not be checked even if the value of this field is true. |
| FormerEmployersDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled IF APPLICABLE, Complete Information for Previous Employment/Self Employment and Income. If one or more former employers are entered then the box will not be checked even if the value of this field is true. |
| OtherIncomeDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled Income from Other Sources. If there are one or more income records from other sources then the box will not be checked even if the value of this field is true. |
| OtherAssetsDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled Other Assets You Have. If there are one or more other assets then the box will not be checked even if the value of this field is true. |
| DebtsDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled Liabilities b  Credit Cards, Other Debts, and Leases that You Owe. If there are one or more debts then the box will not be checked even if the value of this field is true. |
| ExpensesDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled Other Liabilities and Expenses. If there are one or more expenses then the box will not be checked even if the value of this field is true. |
| DoNotOwnAnyRealEstateDesired | Boolean | Indicates whether the I do not own any real estate checkbox should be checked on the URLA section labeled Financial Information - Real Estate. If there are one or more REOs then the box will not be checked even if the value of this field is true. |
| GiftsDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled Gifts or Grants You Have Been Given or Will Receive for this Loan. If there are one or more gifts or grants then the box will not be checked even if the value of this field is true. |
| AdditionalREOsDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked for additional REOs beyond the first REO. If there are two or more REOs entered then the box will not be checked even if the value of this field is true. |
| ConveyedTitleInLieuOfForeclosure | Enum.YesNoNA | Declaration - Have you conveyed title to any property in lieu of foreclosure in the past 7 years?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HasCompletedEducation | Enum.YesNoNA | Indicates whether the borrower has completed homeownership education.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| EducationFormat | Enum.EducationFormat | Identifies the format in which the homeownership education was provided.<br><br>* 0 - NotAssigned<br>* 1 - AttendedWorkshopInPerson<br>* 2 - CompletedWebBasedWorkshop |
| EducationAgencyID | String(5) | The ID of the agency providing the homeownership education. |
| EducationAgencyName | String(150) | The name of the agency providing the homeownership education. |
| EducationCompletionDate | NullableDate | The date that the borrower completed the homeownership education. |
| HasCompletedCounseling | Enum.YesNoNA | Indicates whether the borrower has completed housing counseling.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| CounselingFormat | Enum.CounselingFormat | Identifies the format in which the housing counseling was provided.<br><br>* 0 - NotAssigned<br>* 1 - FaceToFace<br>* 2 - Telephone<br>* 3 - Internet<br>* 4 - Hybrid |
| CounselingAgencyID | String(5) | The ID of the agency providing the housing counseling. |
| CounselingAgencyName | String(150) | The name of the agency providing the housing counseling. |
| CounselingCompletionDate | NullableDate | The date that the borrower completed the housing counseling. |
| URLAAdditionalInfo | String(10000) | Additional URLA information that prints on the continuation sheet |
| MailingStreetContainsUnitNumberOV | Enum.YesNoNA | Override value for the indicator of whether the street address contains a unit number<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsMilitaryActiveDuty | Enum.YesNoNA | Indicates whether the borrower is currently serving on active duty<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsMilitaryRetired | Enum.YesNoNA | Indicates whether the borrower is currently retired, discharged, or separated from military service<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsMilitaryReservesOrNationalGuard | Enum.YesNoNA | Indicates whether the borrower's only period of military service was as a non-activated member of the Reserve or National Guard<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsPurpleHeartRecipient | Enum.YesNoNA | Is the veteran a Purple Heart recipient?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| WorkPersonalPhone | String(20) | The personal work phone number and extension of the borrower as entered in section 1a of the 2021 URLA. |
| VAPendingPreDischargeClaim | Enum.YesNoNA | Does veteran have a pending pre-discharge claim with VA?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FNMACreditRefNoSoftPull | String(50) | FNMA Credit reference number for soft pull. |
| EquifaxDateScoreCreated | NullableDateTime | Date credit score was created on Equifax. |
| TransUnionDateScoreCreated | NullableDateTime | Date credit score was created on TransUnion. |
| ExperianDateScoreCreated | NullableDateTime | Date credit score was created on Experian. |

### [](#TOP)Application

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ApplicationID | Integer | Application ID |
| FileDataID | Integer | ID of the Loan File |
| DisplayOrder | integer | Display Order |
| BorrowerID | NullableInteger | Borrower ID |
| CoBorrowerID | NullableInteger | CoBorrower ID |
| ApplicationMethod | Enum.ApplicationMethod | Application Method<br><br>* 0 - NotAssigned<br>* 1 - FaceToFace<br>* 2 - Mail<br>* 3 - Telephone<br>* 4 - Internet |
| OtherIncome | boolean | The income or assets of a person other than |
| IncomeSpouse | boolean | The income or assets of the Borrower's spouse |
| CreditRefNo | string(50) | Credit Reference No |
| AutoDesc1 | string(50) | Auto 1 Description |
| AutoValue1 | NullableCurrency | Auto 1 Value |
| AutoDesc2 | string(50) | Auto 2 Description |
| AutoValue2 | NullableCurrency | Auto 2 Value |
| AutoDesc3 | string(50) | Auto 3 Description |
| AutoValue3 | NullableCurrency | Auto 3 Value |
| OtherExpenseType | Enum.OtherExpenseType | Alimony, Child Support, or Separate Maintenance Indicator<br><br>* 0 - NotAssigned<br>* 1 - Alimony<br>* 2 - ChildSupport<br>* 3 - SeparateMaintenance<br>* 4 - OtherExpense |
| OtherExpenseOwedTo | String(50) | Alimony, Child Support, or Separate Maintenance Owed To |
| OtherExpenseAmount | NullableCurrency | Alimony, Child Support, or Separate Maintenance Amount |
| JobExpenseDesc1 | string(50) | Job Related Expense Description 1 |
| JobExpenseAmount1 | NullableCurrency | Job Related Expense Amount 1 |
| JobExpenseDesc2 | string(50) | Job Related Expense Description 2 |
| JobExpenseAmount2 | NullableCurrency | Job Related Expense Amount 2 |
| OtherAssetDesc1 | String(50) | Other Non-Liquid Asset Description 1 |
| OtherAssetValue1 | NullableCurrency | Other Non-Liquid Asset Value 1 |
| OtherAssetDesc2 | String(50) | Other Non-Liquid Asset Description 2 |
| OtherAssetValue2 | NullableCurrency | Other Non-Liquid Asset Value 2 |
| OtherAssetDesc3 | String(50) | Other Non-Liquid Asset Description 3 |
| OtherAssetValue3 | NullableCurrency | Other Non-Liquid Asset Value 3 |
| OtherAssetDesc4 | String(50) | Other Non-Liquid Asset Description 4 |
| OtherAssetValue4 | NullableCurrency | Other Non-Liquid Asset Value 4 |
| NetWorthOfBusiness | NullableCurrency | Net Worth of Business |
| RetirementFunds | NullableCurrency | Retirement Funds |
| LifeInsFaceValue | NullableCurrency | Life Insurance Face Value |
| LifeInsCashValue | NullableCurrency | Life Insurance Cash Value |
| StockBondDesc1 | String(50) | Stock or Bond Description 1 |
| StockBondValue1 | NullableCurrency | Stock or Bond Value 1 |
| StockBondType1 | Enum.StockBondType | Stock or Bond Type Indicator 1<br><br>* 0 - NotAssigned<br>* 1 - Stock<br>* 2 - Bond |
| StockBondDesc2 | String(50) | Stock or Bond Description 2 |
| StockBondValue2 | NullableCurrency | Stock or Bond Value 2 |
| StockBondType2 | Enum.StockBondType | Stock or Bond Type Indicator 2<br><br>* 0 - NotAssigned<br>* 1 - Stock<br>* 2 - Bond |
| StockBondDesc3 | String(50) | Stock or Bond Description 3 |
| StockBondValue3 | NullableCurrency | Stock or Bond Value 3 |
| StockBondType3 | Enum.StockBondType | Stock or Bond Type Indicator 3<br><br>* 0 - NotAssigned<br>* 1 - Stock<br>* 2 - Bond |
| StatementsCompleted | Enum.StatementsCompleted | Statements Completed Jointly Indicator<br><br>* 0 - NotAssigned<br>* 1 - Jointly<br>* 2 - NotJointly |
| IncomeBaseOV | NullableCurrency | Base Income Override Value |
| IncomeOvertimeOV | NullableCurrency | Overtime Income Override Value |
| IncomeBonusOV | NullableCurrency | Bonus Income Override Value |
| IncomeCommissionOV | NullableCurrency | Commission Income Override Value |
| IncomeDivIntOV | NullableCurrency | Divident/Interest Income Override Value |
| IncomeNetRentalOV | NullableCurrency | NetRental Income Override Value |
| IncomeOther1OV | NullableCurrency | Other Income 1 Override Value |
| IncomeOther2OV | NullableCurrency | Other Income 2 Override Value |
| IncomeTotalOV | NullableCurrency | Total Income Override Value |
| PresentRent | NullableCurrency | Present Rent. Applies to the pre-2021 URLA and HUD 92900-LT only. |
| PresentFirstMortgage | NullableCurrency | Present First Mortgage. Applies to the pre-2021 URLA and HUD 92900-LT only. |
| PresentOtherFiPI | NullableCurrency | Present Other Financing (PI). Applies to the pre-2021 URLA and HUD 92900-LT only. |
| PresentHazardIns | NullableCurrency | Present Hazard Insurance. Applies to the pre-2021 URLA and HUD 92900-LT only. |
| PresentTaxes | NullableCurrency | Present Real Estate Taxes. Applies to the pre-2021 URLA and HUD 92900-LT only. |
| PresentMI | NullableCurrency | Present Mortgage Insurance. Applies to the pre-2021 URLA and HUD 92900-LT only. |
| PresentHOD | NullableCurrency | Present Home Owner's Association Dues. Applies to the pre-2021 URLA and HUD 92900-LT only. |
| PresentOtherHousingExp | NullableCurrency | Present Other Housing Expense. Applies to the pre-2021 URLA and HUD 92900-LT only. |
| CashDepositIncludeInNetWorth | boolean | Include Cash-Deposit-Toward-Purchase in Net Worth Calculation |
| NetREOPaymentsOV | NullableCurrency | Net REO Payments Override Value |
| EquifaxIndicator | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ExperianIndicator | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| TransUnionIndicator | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| Page4Memo | string(5000) |     |
| _IncomeBase | NullableCurrency |     |
| _IncomeOvertime | NullableCurrency |     |
| _IncomeBonus | NullableCurrency |     |
| _IncomeCommission | NullableCurrency |     |
| _IncomeDivInt | NullableCurrency |     |
| _IncomeOther1 | NullableCurrency |     |
| _IncomeOther2 | NullableCurrency |     |
| _IncomeNetRental | NullableCurrency |     |
| _IncomeTotal | NullableCurrency |     |
| _PresentPITI | NullableCurrency |     |
| _REOMarketValue | NullableCurrency |     |
| _LiquidAssetsLessCashDeposit | NullableCurrency |     |
| _LiquidAssets | NullableCurrency |     |
| _TotalAssets | NullableCurrency |     |
| _TotalDebtPayments | NullableCurrency |     |
| _TotalDebtBalance | NullableCurrency |     |
| _NetWorth | NullableCurrency |     |
| _NetREOPayments | NullableCurrency |     |
| AutoExpense | NullableCurrency | Auto insurance and other auto expenses |
| HealthInsuranceExpense | NullableCurrency | Amount paid monthly for health insurance (not withheld from pay) |
| MedicalExpense | NullableCurrency | Medical expenses such as co-pays and Rx |
| FoodExpense | NullableCurrency | Food expense and spending money |
| UtilitiesExpense | NullableCurrency | Utilities such as water, sewer and phone |
| PropertyMaintenanceExpense | NullableCurrency | Property maintenance expense (not included in home owner association dues) |
| LifeInsuranceExpense | NullableCurrency | Life insurance expense (not withheld from pay) |
| DependentCareExpense | NullableCurrency | Dependent care expense (do not include child support expense) |
| OtherExpenseQMATRNotes | String(500) | QM/ATR notes for other expense amount. |
| JobExpense1QMATRNotes | String(500) | QM/ATR notes for job expense 1 amount. |
| JobExpense2QMATRNotes | String(500) | QM/ATR notes for job expense 2 amount. |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| PresentSuppPropIns | NullableCurrency | Present Supplemental Property Insurance |
| PresentFirstMortgagesPIOV | NullableCurrency | Override value for the present housing expenses for any first lien mortgage(s). Applies to the 2021 URLA only. |
| PresentSubordinateMortgagesPIOV | NullableCurrency | Override value for the present housing expenses for any subordinate mortgage(s). Applies to the 2021 URLA only. |
| PresentTaxesInsHODOV | NullableCurrency | Override value for the present housing expenses for taxes, insurance, and HOD. Applies to the 2021 URLA only. |

### [](#TOP)Residence

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ResidenceID | Integer | Res ID |
| FileDataID | Integer | ID of the Loan File |
| BorrowerID | NullableInteger | Bor ID |
| DisplayOrder | integer | Display Order |
| Current | boolean | Current Resident Indicator |
| Street | string(50) | Street |
| City | string(50) | City |
| State | string(2) | State |
| Zip | string(9) | Zip |
| LivingStatus | Enum.LivingStatus | Status<br><br>* 0 - NotAssigned<br>* 1 - Own<br>* 2 - Rent<br>* 3 - LivingRentFree |
| NoYears | NullableInteger | Number of Years at Residence |
| NoMonths | NullableInteger | Number of Months at Residence |
| LLName | string(50) | Landlord Name |
| LLAttn | string(50) | Landlord Attention |
| LLStreet | string(50) | Landlord Street |
| LLCity | string(50) | Landlord City |
| LLState | string(2) | Landlord State |
| LLZip | string(9) | Landlord Zip |
| LLPhone | string(20) | Landlord Phone |
| Notes | string(500) | Notes |
| LLFax | String(50) | Fax |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| Country | String(50) | Country |
| MonthlyRent | NullableCurrency | Monthly Rent |
| StreetContainsUnitNumberOV | Enum.YesNoNA | Override value for the indicator of whether the street address contains a unit number<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |

### [](#TOP)Employer

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| EmployerID | Integer | Res ID |
| FileDataID | Integer | ID of the Loan File |
| BorrowerID | NullableInteger | Bor ID |
| DisplayOrder | integer | Display Order |
| Status | Enum.EmployerStatus | Employer Status<br><br>* 0 - Former<br>* 1 - SecondaryCurrent<br>* 2 - Primary |
| Name | string(50) | Name |
| Attn | string(50) | Attention |
| Street | string(50) | Street |
| City | string(50) | City |
| State | string(2) | State |
| Zip | string(9) | Zip |
| SelfEmp | boolean | Self Employed Indicator |
| Position | string(50) | Position |
| TypeBus | string(50) | Type of Business |
| Phone | string(20) | Phone and extension. |
| DateFrom | NullableDate | Date From |
| DateTo | NullableDate | Date To |
| YearsOnJob | NullableDouble | Years On Job |
| YearsInProf | NullableDouble | Years In Profession |
| MoIncome | NullableCurrency | Monthly Income |
| Notes | string(500) | Notes |
| Fax | String(50) | Fax |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| VOEVendorID | String(50) | Add the VOE ID for the Work Number for the Employer |
| VOESalaryID | String(50) | Add the VOE Salary for the Work Number for the Employer |
| TimeInLineOfWorkYears | NullableInteger | Number of years in line of work as specified on the 2021 URLA |
| TimeInLineOfWorkMonths | NullableInteger | Number of months in line of work as specified on the 2021 URLA |
| IsSpecialRelationship | Enum.YesNoNA | Special Borrower Employer Relationship Indicator as specified on the 2021 URLA<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| OwnershipInterest | Enum.OwnershipInterestType | Ownership Interest Type as specified on the 2021 URLA<br><br>* 0 - NotAssigned<br>* 1 - GreaterThanOrEqualTo25Percent<br>* 2 - LessThan25Percent |
| IsForeignEmployment | Boolean | Indicates whether the employment is foreign |
| IsSeasonalEmployment | Boolean | Indicates whether the employment is seasonal |
| StreetContainsUnitNumberOV | Enum.YesNoNA | Override value for the indicator of whether the street address contains a unit number<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| Country | String(50) | Country |
| VOEEmployeeID | String(50) | VOE Employee ID for the Work Number for the Employer |
| Email | String(50) | The employers email address, typically for human resources. |

### [](#TOP)Income

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| IncomeID | Integer | Income ID |
| FileDataID | Integer | ID of the Loan File |
| BorrowerID | NullableInteger | Bor ID |
| DisplayOrder | integer | Display Order |
| IncomeType | Enum.IncomeType | Income Type<br><br>* 1 - BaseIncome<br>* 2 - Overtime<br>* 3 - Bonus<br>* 4 - Commission<br>* 5 - DividendInterest<br>* 6 - NetRentalIncome<br>* 7 - AlimonyChildSupport<br>* 8 - AutomobileExpenseAccount<br>* 9 - FosterCare<br>* 10 - NotesReceivableInstallment<br>* 11 - Pension<br>* 12 - SocialSecurity<br>* 13 - SubjectPropertyNetCashFlow<br>* 14 - Trust<br>* 15 - Unemployment<br>* 16 - PublicAssistance<br>* 17 - VABenefitsNonEducational<br>* 18 - MortgageDifferential<br>* 19 - MilitaryBasePay<br>* 20 - MilitaryRationsAllowance<br>* 21 - MilitaryFlightPay<br>* 22 - MilitaryHazardPay<br>* 23 - MilitaryClothesAllowance<br>* 24 - MilitaryQuartersAllowance<br>* 25 - MilitaryPropPay<br>* 26 - MilitaryOverseasPay<br>* 27 - MilitaryCombatPay<br>* 28 - MilitaryVariableHousingAllowance<br>* 29 - MortgageCreditCertificate<br>* 30 - TrailingCoBorrowerIncome<br>* 31 - Other<br>* 32 - BoarderIncome<br>* 33 - CapitalGains<br>* 34 - EmploymentRelatedAssets<br>* 35 - ForeignIncome<br>* 36 - RoyaltyPayment<br>* 37 - SeasonalIncome<br>* 38 - TemporaryLeave<br>* 39 - TipIncome<br>* 40 - Section8<br>* 41 - NonBorHouseholdIncome<br>* 42 - AccessoryUnitIncome<br>* 43 - Alimony<br>* 44 - ChildSupport<br>* 45 - ContractBasis<br>* 46 - DefinedContributionPlan<br>* 47 - Disability<br>* 48 - HousingAllowance<br>* 49 - SeparateMaintenance |
| Amount | NullableCurrency | Amount&lt;BR&gt;Default=0 |
| DescriptionOV | string(70) | Override value for description |
| IncomeFrequencyType | Enum.IncomeFrequencyType | Frequency type for this income (hourly, monthly, etc.)<br><br>* 0 - NotAssigned<br>* 1 - Yearly<br>* 2 - Monthly<br>* 3 - SemiMonthly<br>* 4 - BiWeekly<br>* 5 - Weekly<br>* 6 - Hourly<br>* 7 - Variable<br>* 8 - Other |
| IncomeRate | NullableCurrency | Rate of pay for this income type / income frequency. |
| HoursPerWeek | NullableCurrency | Average hours worked per week. |
| Notes | String(500) | Notes related to this income type. |
| QMATRNotes | String(500) | QM / ATR Notes related to this income type. |
| VariablePeriod1Desc | String(25) | Variable period 1 description. |
| VariablePeriod1Income | NullableCurrency | Variable period 1 income. |
| VariablePeriod1Months | NullableCurrency | Variable period 1 number of months. |
| VariablePeriod2Desc | String(25) | Variable period 2 description. |
| VariablePeriod2Income | NullableCurrency | Variable period 2 income. |
| VariablePeriod2Months | NullableCurrency | Variable period 2 number of months. |
| VariablePeriod3Desc | String(25) | Variable period 3 description. |
| VariablePeriod3Income | NullableCurrency | Variable period 3 income. |
| VariablePeriod3Months | NullableCurrency | Variable period 3 number of months. |
| _CalcDescription | String(50) | Description of the calculation for this income. |
| _RateDescription | String(70) | Description of the rate for this income. |
| SelfEmploymentIncome | Boolean | Income source is from self employment.&lt;BR&gt;Default=False |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| EmployerID | NullableInteger | Employer ID |

### [](#TOP)Asset

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| AssetID | Integer | Asset ID |
| FileDataID | Integer | ID of the Loan File |
| BorrowerID | NullableInteger | Borrower ID |
| DisplayOrder | integer | Display Order |
| Name | string(50) | Name |
| Attn | string(50) | Attention |
| Street | string(50) | Street |
| City | string(50) | City |
| State | string(2) | State |
| Zip | string(9) | Zip |
| AccountType1 | Enum.AssetType(50) | Account Type1<br><br>* 0 - NotAssigned<br>* 1 - Savings<br>* 2 - Checking<br>* 3 - CashDepositOnSalesContract<br>* 4 - GiftNotDeposited<br>* 5 - CertificateOfDeposit<br>* 6 - MoneyMarketFund<br>* 7 - MutualFunds<br>* 8 - Stocks<br>* 9 - Bonds<br>* 10 - SecuredBorrowedFundsNotDeposited<br>* 11 - BridgeLoanNotDeposited<br>* 12 - RetirementFunds<br>* 13 - NetWorthOfBusinessOwned<br>* 14 - TrustFunds<br>* 15 - OtherNonLiquidAsset<br>* 16 - OtherLiquidAsset<br>* 17 - NetProceedsFromSaleOfRealEstate<br>* 18 - NetEquity<br>* 19 - CashOnHand<br>* 20 - GiftOfEquity<br>* 21 - IndividualDevelopmentAccount<br>* 22 - LifeInsuranceCashValue<br>* 23 - ProceedsFromSaleOfNonRealEstateAsset<br>* 24 - SecuredBorrowedFunds<br>* 25 - StockOptions<br>* 26 - UnsecuredBorrowedFunds |
| AccountNo1 | string(50) | Account No1 |
| AccountBalance1 | NullableCurrency | Account Balance1 |
| AccountType2 | Enum.AssetType(50) | Account Type2<br><br>* 0 - NotAssigned<br>* 1 - Savings<br>* 2 - Checking<br>* 3 - CashDepositOnSalesContract<br>* 4 - GiftNotDeposited<br>* 5 - CertificateOfDeposit<br>* 6 - MoneyMarketFund<br>* 7 - MutualFunds<br>* 8 - Stocks<br>* 9 - Bonds<br>* 10 - SecuredBorrowedFundsNotDeposited<br>* 11 - BridgeLoanNotDeposited<br>* 12 - RetirementFunds<br>* 13 - NetWorthOfBusinessOwned<br>* 14 - TrustFunds<br>* 15 - OtherNonLiquidAsset<br>* 16 - OtherLiquidAsset<br>* 17 - NetProceedsFromSaleOfRealEstate<br>* 18 - NetEquity<br>* 19 - CashOnHand<br>* 20 - GiftOfEquity<br>* 21 - IndividualDevelopmentAccount<br>* 22 - LifeInsuranceCashValue<br>* 23 - ProceedsFromSaleOfNonRealEstateAsset<br>* 24 - SecuredBorrowedFunds<br>* 25 - StockOptions<br>* 26 - UnsecuredBorrowedFunds |
| AccountNo2 | string(50) | Account No2 |
| AccountBalance2 | NullableCurrency | Account Balance2 |
| AccountType3 | Enum.AssetType(50) | Account Type3<br><br>* 0 - NotAssigned<br>* 1 - Savings<br>* 2 - Checking<br>* 3 - CashDepositOnSalesContract<br>* 4 - GiftNotDeposited<br>* 5 - CertificateOfDeposit<br>* 6 - MoneyMarketFund<br>* 7 - MutualFunds<br>* 8 - Stocks<br>* 9 - Bonds<br>* 10 - SecuredBorrowedFundsNotDeposited<br>* 11 - BridgeLoanNotDeposited<br>* 12 - RetirementFunds<br>* 13 - NetWorthOfBusinessOwned<br>* 14 - TrustFunds<br>* 15 - OtherNonLiquidAsset<br>* 16 - OtherLiquidAsset<br>* 17 - NetProceedsFromSaleOfRealEstate<br>* 18 - NetEquity<br>* 19 - CashOnHand<br>* 20 - GiftOfEquity<br>* 21 - IndividualDevelopmentAccount<br>* 22 - LifeInsuranceCashValue<br>* 23 - ProceedsFromSaleOfNonRealEstateAsset<br>* 24 - SecuredBorrowedFunds<br>* 25 - StockOptions<br>* 26 - UnsecuredBorrowedFunds |
| AccountNo3 | string(50) | Account No3 |
| AccountBalance3 | NullableCurrency | Account Balance3 |
| AccountType4 | Enum.AssetType(50) | Account Type4<br><br>* 0 - NotAssigned<br>* 1 - Savings<br>* 2 - Checking<br>* 3 - CashDepositOnSalesContract<br>* 4 - GiftNotDeposited<br>* 5 - CertificateOfDeposit<br>* 6 - MoneyMarketFund<br>* 7 - MutualFunds<br>* 8 - Stocks<br>* 9 - Bonds<br>* 10 - SecuredBorrowedFundsNotDeposited<br>* 11 - BridgeLoanNotDeposited<br>* 12 - RetirementFunds<br>* 13 - NetWorthOfBusinessOwned<br>* 14 - TrustFunds<br>* 15 - OtherNonLiquidAsset<br>* 16 - OtherLiquidAsset<br>* 17 - NetProceedsFromSaleOfRealEstate<br>* 18 - NetEquity<br>* 19 - CashOnHand<br>* 20 - GiftOfEquity<br>* 21 - IndividualDevelopmentAccount<br>* 22 - LifeInsuranceCashValue<br>* 23 - ProceedsFromSaleOfNonRealEstateAsset<br>* 24 - SecuredBorrowedFunds<br>* 25 - StockOptions<br>* 26 - UnsecuredBorrowedFunds |
| AccountNo4 | string(50) | Account No4 |
| AccountBalance4 | NullableCurrency | Account Balance4 |
| Notes | string(500) | Notes |
| Fax | String(50) | Fax |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| AccountOtherDesc | String(80) | Other Asset Description |
| AccountHeldByType | Enum.AccountHeldByType | Indicates if the account is held solely by the indicated borrower or jointly by both borrowers on the application<br><br>* 0 - NotAssigned<br>* 1 - Jointly<br>* 2 - Individually |

### [](#TOP)REO

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| REOID | integer | REO ID |
| FileDataID | Integer | ID of the Loan File |
| BorrowerID | NullableInteger | Borrower ID |
| DisplayOrder | integer | Display Order |
| Street | string(50) | Street |
| City | string(50) | City |
| State | string(2) | State |
| Zip | string(9) | Zip |
| REOStatus | Enum.REOStatus | Property Status<br><br>* 0 - NotAssigned<br>* 1 - Sold<br>* 2 - PendingSale<br>* 3 - Rental<br>* 4 - Retained |
| REOType | Enum.REOType | Property Type<br><br>* 0 - NotAssigned<br>* 1 - SingleFamily<br>* 2 - Condominium<br>* 3 - Townhouse<br>* 4 - Cooperative<br>* 5 - TwoToFourUnitProperty<br>* 6 - MultifamilyMoreThanFourUnits<br>* 7 - ManufacturedMobileHome<br>* 8 - CommercialNonResidential<br>* 9 - MixedUseResidential<br>* 10 - Farm<br>* 11 - HomeAndBusinessCombined<br>* 12 - Land |
| MarketValue | NullableCurrency | Present Market Value |
| GrossRentalIncome | NullableCurrency | Gross Rental Income |
| Taxes | NullableCurrency | Taxes Insurance and Misc Payment |
| NetRentalIncomeOV | NullableCurrency | Net Rental Income Override Value |
| VacancyFactorOV | NullableCurrency | Vacancy Factor Override Value |
| IsSubjectProperty | boolean | Subject Property Indicator |
| IsCurrentResidence | boolean | Current Residence Indicator |
| PITIOV | NullableCurrency | PITI Override Value |
| TIIncludedInMortgage | Boolean | Indicates whether the taxes and insurance amount is include in the mortgage payment. |
| VAPurchasedOrRefinancedWithVALoan | Boolean | True if purchased or refininanced with a VA loan.&lt;BR&gt;Default=False |
| VALoanDate | NullableDate | Date of the VA loan used to purchase or refinance. |
| VAEntitlementRestoration | Enum.VAEntitlementRestoration | Reason the VA entitlement was restored.<br><br>* 0 - NotAssigned<br>* 1 - OneTimeRestorationToPurchase<br>* 2 - RegularCashOutRefi<br>* 3 - IRRRL<br>* 4 - EntitlementQueryOnly |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| MortgagesDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked indicating that there are no mortgages on the property. If there are one or more mortgages on the subject property then the box will not be checked even if the value of this field is true. |
| StreetContainsUnitNumberOV | Enum.YesNoNA | Override value for the indicator of whether the street address contains a unit number<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| AccountHeldByType | Enum.AccountHeldByType | Indicates if the account is held solely by the indicated borrower or jointly by both borrowers on the application<br><br>* 0 - NotAssigned<br>* 1 - Jointly<br>* 2 - Individually |
| NoUnits | NullableInteger | The number of dwelling units in the property |
| CurrentUsageType | Enum.REOCurrentUsageType | Indicates how the property is currently being used<br><br>* 0 - NotAssigned<br>* 1 - PrimaryResidence<br>* 2 - SecondaryResidence<br>* 3 - InvestmentProperty |
| IntendedUsageType | Enum.REOIntendedUsageType | Indicates how the property is intended to be used<br><br>* 0 - NotAssigned<br>* 1 - PrimaryResidence<br>* 2 - SecondaryResidence<br>* 3 - InvestmentProperty<br>* 4 - Other |
| Country | String(50) | Country |
| VALoanNumber | String(20) | VA Loan number for the loan associated with this REO. |
| VADamagedOrDestroyed | Boolean | True if the property was damaged or destroyed in a Federally declared natural disaster. |
| VALossDate | NullableDate | Date the property was damaged or destroyed in a Federally declared natural disaster. |

### [](#TOP)Debt

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| DebtID | Integer | Debt ID |
| FileDataID | Integer | ID of the Loan File |
| BorrowerID | NullableInteger | Borrower ID |
| DisplayOrder | integer | Display Order |
| REOID | NullableInteger | REO ID |
| DebtType | Enum.DebtType | Liability Type<br><br>* 0 - NotAssigned<br>* 1 - Revolving<br>* 2 - Installment<br>* 3 - Mortgage<br>* 4 - HELOC<br>* 5 - Liens<br>* 6 - LeasePayments<br>* 7 - Open<br>* 8 - Taxes<br>* 9 - Other<br>* 10 - TaxLien |
| Name | string(50) | Name |
| Attn | string(50) | Attention |
| Street | string(50) | Street |
| City | string(50) | City |
| State | string(2) | State |
| Zip | string(9) | Zip |
| AccountNo | string(50) | Account No |
| MoPayment | NullableCurrency | Mo Payment |
| PaymentsLeft | NullableInteger(15) | Payments Left |
| PaymentsLeftTextOV | String(50) | Override value for the payments left text that shows on the 1003 |
| UnpaidBal | NullableCurrency | Unpaid Bal |
| NotCounted | boolean | Not Counted |
| ToBePaidOff | boolean | To Be Paid Off |
| LienPosition | NullableInteger | Lien Position |
| Resubordinated | boolean | Resubordinated |
| Omitted | boolean | Omitted |
| Notes | string(500) | Notes |
| IsLienOnSubProp | Boolean | Indicates whether the liability is a lien on the subject property |
| TotalPaymentsOV | NullableCurrency | Total of all Payments (used on Debt Consolidation screen) |
| Fax | String(50) | Fax |
| SSOrDILAccepted | Enum.YesNoNA | HAFA - Was a short sale or deed-in-lieu accepted?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ListedOnCreditReport | Boolean | Indicates whether the debt is listed on the credit report.&lt;BR&gt;Default=False |
| QMATRNotes | String(500) | QM ATR notes for the debt. |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| OtherDesc | String(80) | Other description. |
| MortgageType | Enum.DebtMortgageType | Identifies the type of mortgage when the debt type is mortgage or HELOC<br><br>* 0 - NotAssigned<br>* 1 - VA<br>* 2 - FHA<br>* 3 - Conventional<br>* 4 - RHS<br>* 5 - Other |
| HELOCCreditLimit | NullableCurrency | Maximum dollar amount of credit available on a HELOC |
| AccountHeldByType | Enum.AccountHeldByType | Indicates if the account is held solely by the indicated borrower or jointly by both borrowers on the application<br><br>* 0 - NotAssigned<br>* 1 - Jointly<br>* 2 - Individually |

### [](#TOP)CreditAlias

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| CreditAliasID | Integer | Credit Alias ID |
| FileDataID | Integer | ID of the Loan File |
| BorrowerID | NullableInteger | Borrower ID |
| FirstName | String(50) | First Name |
| MiddleName | String(50) | Middle Name |
| LastName | String(50) | Last Name |
| CreditorName | String(50) | Creditor Name |
| AccountNo | String(50) | Account Number |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| CreditAliasType | Enum.CreditAliasType | Credit Alias Type<br><br>* 0 - CreditAliasAndAKA<br>* 1 - CreditAliasOnly<br>* 2 - AKAOnly |
| Generation | String(10) | Credit alias generation (JR, SR, etc) |

### [](#TOP)SubProp

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| SubPropID | Integer | Subject Property ID |
| FileDataID | Integer | ID of the Loan File |
| Street | string(50) | Street |
| City | string(50) | City |
| County | string(50) | County |
| CountyCode | NullableInteger | County Code |
| State | string(2) | State |
| Zip | string(9) | Zip |
| AppraisedValue | NullableCurrency | Appraised Value |
| PropertyType | Enum.SubjectPropertyType | Property Type<br><br>* 0 - NotAssigned<br>* 1 - Detached<br>* 2 - Attached<br>* 3 - Condominium<br>* 4 - HighRiseCondo<br>* 5 - DetachedCondo<br>* 6 - PUD<br>* 7 - Cooperative<br>* 8 - Manufactured<br>* 9 - Manufactured\_Condo\_PUD_COOP<br>* 10 - ManufacturedSinglewide<br>* 11 - ManufacturedMultiwide<br>* 12 - Other<br>* 13 - VacantLand<br>* 14 - ManufacturedMHAdvantage |
| NoUnits | NullableInteger | Number of Units&lt;BR&gt;Default=1 |
| LegalDesc | string(5000) | Legal Description |
| MetesAndBounds | boolean | Metes And Bounds Indicator |
| YearBuilt | NullableInteger | Year Built |
| FirstMortPI | NullableCurrency | First Mortgage PI Payment |
| FirstMortBalance | NullableCurrency | First Mortgage Balance |
| SecondMortPI | NullableCurrency | Second Mortgage PI Payment |
| SecondMortBalance | NullableCurrency | Second Mortgage Balance |
| GrossRentalIncome | NullableCurrency | Gross Rent |
| VacancyFactorOV | NullableCurrency | Vacancy Factor Override Value |
| ReservesRequired | boolean | Reserves Required Indicator |
| CYearLotAcq | NullableInteger | Construction Loans - Year Lot Acquired |
| COrigCost | NullableCurrency | Construction Loans - Original Cost |
| CAmtExLiens | NullableCurrency | Construction Loans - Amount of Existing Liens |
| CPresValLot | NullableCurrency | Construction Loans - Present Value of Lot |
| CImprvCost | NullableCurrency | Construction Loans - Improvement Cost |
| RYearLotAcq | NullableInteger | Refinance Loans - Year Lot Acquired |
| ROrigCost | NullableCurrency | Refinance Loans - Original Cost Of Property |
| RAmtExLiens | NullableCurrency | Refinance Loans - Amount of Existing Liens |
| ImprvMade | Enum.ImprovementsStatus | Improvement Made<br><br>* 0 - NotAssigned<br>* 1 - Made<br>* 2 - ToBeMade |
| ImprvDesc | string(50) | Improvements description |
| ImprvCost | NullableCurrency | Improvements cost |
| MannerTitleHeld | string(100) | Manner in which title will be held |
| EstHeld | Enum.EstateHeld | Estate Held<br><br>* 0 - NotAssigned<br>* 1 - FeeSimple<br>* 2 - Leasehold |
| EstLeaseHoldEx | NullableDate | Estate Lease Hold Expiration Date |
| MSA | string(5) | MSA |
| NetCashFlowOV | NullableCurrency | Net Cash Flow Override Value |
| AltImpRep | NullableCurrency | Alterations Improvements and Repairs - Details of Transaction Line B |
| LandValue | NullableCurrency | Land Value - Details of Transaction Line C. Used only for pre-2021 loans. |
| IsPUD | boolean | Obsolete. In prior versions indicated whether the subject property was a Planned Unit Development. |
| PropertyClass | Enum.PropertyClass | The property classification for Condominiums and PUD's<br><br>* 0 - NotAssigned<br>* 1 - A\_III\_Condo<br>* 2 - B\_II\_Condo<br>* 3 - C\_I\_Condo<br>* 4 - E_PUD<br>* 5 - F_PUD<br>* 6 - III_PUD<br>* 7 - \_1\_COOP<br>* 8 - \_2\_COOP<br>* 9 - FHA_VACondoOrSpotLoan<br>* 10 - PCondo<br>* 11 - QCondo<br>* 12 - RCondo<br>* 13 - SCondo<br>* 14 - TCondo<br>* 15 - UCondo<br>* 16 - StreamlinedReview<br>* 17 - EstablishedProject<br>* 18 - NewProject<br>* 19 - DetachedProject<br>* 20 - _2to4UnitProject<br>* 21 - ReciprocalReview<br>* 22 - VRefiPlus<br>* 23 - T_PUD<br>* 24 - T_COOP<br>* 25 - ExemptFromReview<br>* 999 - GNotInAProjectOrDevelopment |
| ProjectName | string(60) | Project name for condominum and PUD projects |
| SquareFeet | NullableInteger | Gross living area in square feet (VA loan summary sheet, page 2, line 39 and FHA Conditional Commitment 92800.5b) |
| PropertyAge | NullableCurrency | Property age (VA loan summary sheet, page 2, line 40) |
| TotalRooms | NullableInteger | Total number of rooms (VA loan summary sheet, page 2, line 42) |
| Bathrooms | NullableCurrency | Number of bathrooms (VA loan summary sheet, page 2, line 43) |
| Bedrooms | NullableInteger | Number of bedrooms (VA loan summary sheet, page 2, line 44) |
| FHAVAUnpaidBalance | NullableCurrency | Unpaid principal balance for use on FHA loans. Line 10A on the MCA. |
| RemainingEconomicLife | NullableInteger | Remaining economic life in years |
| PropertyTypeCustom | String(50) |     |
| AssessorsParcelNo | String(80) | Assessors Parcel No |
| PriorSaleDate | NullableDate | The date of the last prior sale of the property |
| PriorSaleAmount | NullableCurrency | The sales price of the last prior sale of the property |
| FirstMortOrigAmount | NullableCurrency | Original Amount of First Mortgage. |
| DateLandAcquired | NullableDate | Used on the VA Certificate of Loan Disbursement 26-1820 |
| LandPurchasePrice | NullableCurrency | Used on the VA Certificate of Loan Disbursement 26-1820 |
| LandAcquiredNotByPurchase | boolean | Used on the VA Certificate of Loan Disbursement 26-1820 |
| AVMConfidenceScore | NullableCurrency | AVM confidence score |
| AVMDeterminationDate | NullableDate | The date the AVM was run |
| Stories | NullableInteger | The number of stories |
| WarrantableCondo | Enum.YesNoNA | Indicates whether the condo is warrantable<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PropertyTBD | Boolean | Indicates whether or not a property has been identified |
| SpecialFloodHazardArea | Boolean | Indicates whether the property is in a special flood hazard area. |
| ProjectStatusType | Enum.ProjectStatusType | Indicates the status of a condo or coop project.<br><br>* 0 - NotAssigned<br>* 1 - Established<br>* 2 - _New |
| ProjectDesignType | Enum.ProjectDesignType | Design type of a condo or coop project.<br><br>* 0 - NotAssigned<br>* 1 - GardenProject<br>* 2 - HighriseProject<br>* 3 - MidriseProject<br>* 4 - TownhouseRowhouse<br>* 5 - OtherSelectedOnValuationDocumentation |
| ProjectDwellingUnitCount | NullableInteger | The total number of units in the property. |
| ProjectDwellingUnitsSoldCount | NullableInteger | The number of units in the property that are currently sold. |
| PropertyValuationEffectiveDate | NullableDate | The date on which the property valuation took place. |
| PropertyValuationMethod | Enum.PropertyValuationMethod | The type of property valuation performed.<br><br>* 0 - NotAssigned<br>* 1 - AutomatedValuationModel<br>* 3 - DesktopAppraisal<br>* 4 - DriveBy<br>* 5 - FullAppraisal<br>* 6 - None<br>* 8 - PriorAppraisalUsed<br>* 10 - DeskReview<br>* 100 - FieldReview<br>* 101 - HybridAppraisal |
| AVMModelType | Enum.AVMModelType | The AVM model type used.<br><br>* 0 - NotAssigned<br>* 1 - AutomatedPropertyService<br>* 2 - Casa<br>* 3 - FidelityHansen<br>* 4 - HomePriceAnalyzer<br>* 5 - HomePriceIndex<br>* 6 - HomeValueExplorer<br>* 7 - Indicator<br>* 8 - NetValue<br>* 10 - Pass<br>* 11 - PropertySurveyAnalysisReport<br>* 12 - ValueFinder<br>* 13 - ValuePoint<br>* 14 - ValuePoint4<br>* 15 - ValuePointPlus<br>* 16 - ValueSure<br>* 17 - ValueWizard<br>* 18 - ValueWizardPlus<br>* 19 - VeroIndexPlus<br>* 20 - VeroValue<br>* 21 - MTM<br>* 100 - AVMax<br>* 101 - CAValue<br>* 102 - CollateralMarketValue<br>* 103 - FraudGuard<br>* 104 - FREAllowedAVM<br>* 105 - I_AVM<br>* 106 - IVal<br>* 107 - PowerBase6<br>* 108 - RapidValue<br>* 109 - RealValue<br>* 110 - RealAssessment<br>* 111 - RealtorValuationModel<br>* 112 - Relar<br>* 113 - SiteXValue<br>* 114 - Vector<br>* 115 - Veros<br>* 116 - VeroValueAdvantage<br>* 117 - VeroValuePreferred |
| PropertyValuationUCDPDocumentIdentifier | String(20) | The property valuation UCDP identifer. |
| BedroomsUnit1 | NullableInteger | The number of bedrooms in unit 1 of the property. |
| BedroomsUnit2 | NullableInteger | The number of bedrooms in unit 2 of the property. |
| BedroomsUnit3 | NullableInteger | The number of bedrooms in unit 3 of the property. |
| BedroomsUnit4 | NullableInteger | The number of bedrooms in unit 4 of the property. |
| GrossRentUnit1 | NullableCurrency | The gross rent amount for unit 1 of the property. |
| GrossRentUnit2 | NullableCurrency | The gross rent amount for unit 2 of the property. |
| GrossRentUnit3 | NullableCurrency | The gross rent amount for unit 3 of the property. |
| GrossRentUnit4 | NullableCurrency | The gross rent amount for unit 4 of the property. |
| OriginalLoanGSEIdentifier | String(20) | The GSE identifier for the loan. |
| OriginalLoanOwner | Enum.LoanOwnerType | The original owner of the loan.<br><br>* 0 - NotAssigned<br>* 1 - Fannie<br>* 2 - Freddie<br>* 3 - Other<br>* 4 - Seller<br>* 5 - Unknown |
| AssessedValue | NullableCurrency | The assessed value of the subject property |
| CreditSaleIndicator | Boolean | Indicates whether the transaction is a credit sale as defined in TILA 226.2(a)(16). |
| UCDPFindingsStatusFannie | Enum.UCDPFindingsStatus | Findings status for UCDP submission to Fannie.<br><br>* 0 - NotAssigned<br>* 1 - Successful<br>* 2 - InProgress<br>* 4 - OverrideRequested<br>* 4 - OverrideRequested |
| UCDPFindingsStatusFreddie | Enum.UCDPFindingsStatus | Findings status for UCDP submission to Fannie.<br><br>* 0 - NotAssigned<br>* 1 - Successful<br>* 2 - InProgress<br>* 4 - OverrideRequested<br>* 4 - OverrideRequested |
| LegalDescShort | String(5000) | Short legal description. |
| PartialSFHA | Boolean | Indicates whether the building/mobile home is in a Special Flood Hazard Area. |
| FirstMortQMATRNotes | String(500) | First Mortgage QM / ATR Notes |
| SecondMortQMATRNotes | String(500) | Second Mortgage QM / ATR Notes |
| ULDDManufacturedWidthType | Enum.ULDDManufacturedWidthType | Width type of manufactured dwelling. For ULDD export.<br><br>* 0 - NotAssigned<br>* 1 - MultiWide<br>* 2 - SingleWide |
| ULDDPropertyValuationForm | Enum.ULDDPropertyValuationForm | Property valuation form type, for ULDD export.<br><br>* 0 - NotAssigned<br>* 1 - AppraisalUpdateAndOrCompletionReport<br>* 3 - DesktopUnderwriterPropertyInspectionReport<br>* 5 - ExteriorOnlyInspectionIndividualCondominiumUnitAppraisalReport<br>* 6 - ExteriorOnlyInspectionIndividualCooperativeInterestAppraisalReport<br>* 7 - ExteriorOnlyInspectionResidentialAppraisalReport<br>* 10 - IndividualCondominiumUnitAppraisalReport<br>* 11 - IndividualCooperativeInterestAppraisalReport<br>* 12 - LoanProspectorConditionAndMarketability<br>* 13 - ManufacturedHomeAppraisalReport<br>* 15 - OneUnitResidentialAppraisalFieldReviewReport<br>* 17 - SmallResidentialIncomePropertyAppraisalReport<br>* 18 - TwoToFourUnitResidentialAppraisal<br>* 19 - UniformResidentialAppraisalReport<br>* 20 - OneUnitResidentialAppraisalDeskReviewReport |
| ParsedHouseNumber | String(20) | The house number of the subject property |
| ParsedDirectionPrefix | String(10) | The directional prefix of the subject property street. Standard prefixes are E, W, N, S, NE, NW, SE, and SW |
| ParsedStreetName | String(50) | The street name of the subject property street. This field does not contain the house number, directional suffix, or street suffix. |
| ParsedStreetSuffix | String(20) | The street suffix of the parsed subject property street. Examples include Avenue, Street, and Drive |
| ParsedDirectionSuffix | String(10) | The directional suffix of the subject property street. Standard prefixes are E, W, N, S, NE, NW, SE, and SW |
| ParsedUnitNumber | String(20) | The unit number of the parsed subject property street address |
| DelayedSettlementDueToConstruction | Enum.YesNoNA | Indicates whether the property will have a delayed settlement due to construction of the home pursuant to 1026.19(e)(3)(iv)(F).<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| AppraisedValueStatusOV | Enum.AppraisedValueStatus | An override value to Indicate whether the appraised value is estimated or actual.<br><br>* 0 - NotAssigned<br>* 1 - Estimated<br>* 2 - Actual |
| LandLoanStatus | Enum.LandLoanStatus | Indicates the status of the land loan on a construction transaction<br><br>* 0 - NotAssigned<br>* 1 - LandOwnedFreeAndClear<br>* 2 - ExistingLandLoanToBeRefinanced<br>* 3 - LandToBePurchasedWithLoanProceeds |
| TRIDAltImpRepOption | Enum.TRIDAltImpRepOption | Indicates how Alterations, Improvements and Repairs are treated in the Cash to Close calculation on the Loan Estimate and Closing Disclosure<br><br>* 0 - IncludeInAdjustmentsAndOtherCredits<br>* 1 - TreatAsPartOfPurchasePrice<br>* 2 - OmitFromCashToCloseCalc |
| PartialSFHAStructureCount | NullableInteger | The number of buildings in the flood zone when the property is partially in a flood zone. |
| PreviousLoanNumber | String(50) | Previous loan number for a refinance transaction |
| FREAppraisalFormType | Enum.FREAppraisalFormType | FRE appraisal form selected by user.<br><br>* 0 - NotAssigned<br>* 1 - FNM1004FRE70<br>* 2 - FNM1004BFRE439<br>* 3 - FNM1004CFRE70B<br>* 4 - FNM1004DFRE442<br>* 6 - FNM1073FRE465<br>* 7 - FNM1075FRE466<br>* 8 - FNM1025FRE72<br>* 9 - FNM2000FRE1032<br>* 10 - FNM2000AFRE1072<br>* 11 - FNM2055FRE2055<br>* 12 - FNM2065<br>* 13 - FNM2075<br>* 14 - FNM2090<br>* 15 - FNM2095<br>* 18 - FRE2070<br>* 19 - Other |
| FREAppraisalFormTypeOther | String(50) | FRE appraisal form type other description. |
| ManufacturedHomeLandPropertyInterest | Enum.ManufacturedHomeLandPropertyInterest | HMDA field Manufactured Home Land Property Interest<br><br>* 0 - NotAssigned<br>* 1 - DirectOwnership<br>* 2 - IndirectOwnership<br>* 3 - PaidLeasehold<br>* 4 - UnpaidLeasehold<br>* 5 - NotApplicable |
| MultifamilyAffordableUnitsCount | NullableInteger | HMDA field Multifamily Affordable Units |
| ManufacturedHomeSecuredPropertyType | Enum.ManufacturedHomeSecuredPropertyType | Indicates whether the secured property includes the land on a loan for a manufactured home. Used for HMDA.<br><br>* 0 - NotAssigned<br>* 1 - ManufacturedHomeAndLand<br>* 2 - ManufacturedHomeAndNotLand<br>* 3 - NotApplicable |
| IsChattelLoan | Boolean | Indicates whether the loan is secured by chattel instead of real property. Used for NMLS call reporting. |
| PropertyHasNoAddress | Boolean | Indicates whether the identified property has no assigned address, for instance for vacant loan or new construction. |
| Lot | String(50) | Lot number for the subject propery. |
| Block | String(50) | Block number of the subject property. |
| ManufacturedHomeWidth | NullableCurrency | The total width of the manufactured home in feet |
| ManufacturedHomeLength | NullableCurrency | The total length of the manufactured home in feet |
| ManufacturedHomeAttachedToFoundation | Enum.YesNoNA | Indicates whether the manufactured home is attached to a permanent foundation<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ManufacturedHomeCondition | Enum.ManufacturedHomeCondition | Indicates whether the manufactured home is new or used<br><br>* 0 - NotAssigned<br>* 1 - New<br>* 2 - Used |
| ManufacturedHomeHUDCertLabelID1 | String(12) | The HUD certification label identifier (HUD tag number) for the first section of the home. |
| ManufacturedHomeHUDCertLabelID2 | String(12) | The HUD certification label identifier (HUD tag number) for the second section of the home. |
| ManufacturedHomeHUDCertLabelID3 | String(12) | The HUD certification label identifier (HUD tag number) for the third section of the home. |
| ManufacturedHomeMake | String(30) | The make of the manufactured home |
| ManufacturedHomeModel | String(30) | The model of the manufactured home |
| ManufacturedHomeSerialNo | String(50) | The serial number of the manufactured home |
| HasHomesteadExemption | Boolean | Indicates whether the subject property meets state homestead exemption requirements. |
| IsMixedUseProperty | Enum.YesNoNA | Mixed-Use Property. If you will occupy the property, will you set aside space within the property to operate your own business? (e.g., daycare facility, medical office, beauty/barber shop)<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| NetCashFlowDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled Rental Income on the Property You Want to Purchase. If a dollar amount is entered for the cash flow on the subject property then the box will not be checked even if the value of this field is true. |
| OtherLoansDNADesired | Boolean | Indicates whether Does Not Apply checkbox should be checked on the URLA section labeled Other New Mortgage Loans on the Property You are Buying or Refinancing. If there are one or more other loans then the box will not be checked even if the value of this field is true. |
| IsConversionOfLandContract | Boolean | Indicates whether the subject property is under a land contract or contract for deed that will be converted to a mortgage.&lt;BR&gt;Default=False |
| IsRenovation | Boolean | Indicates whether loan proceeds will be used in whole or in part to renovate the subject property&lt;BR&gt;Default=False |
| HasCleanEnergyLien | Boolean | Property is currently subject to a lien that could take priority over the first mortgage lien, such as a clean energy lien paid for through property taxes (e.g., the Property Assessed Clean Energy program). |
| LotAcquiredDate | NullableDate | The date the lot was acquired for construction loans |
| IndianCountryLandTenure | Enum.IndianCountryLandTenure | Indian Country Land Tenure on the URLA<br><br>* 0 - NotAssigned<br>* 1 - FeeSimpleOnAReservation<br>* 2 - IndividualTrustLandAllottedRestricted<br>* 3 - TribalTrustLandOnAReservation<br>* 4 - TribalTrustLandOffReservation<br>* 5 - AlaskaNativeCorporationLand |
| StreetContainsUnitNumberOV | Enum.YesNoNA | Override value for the indicator of whether the street address contains a unit number<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| LandValueType | Enum.LandValueType | Identifies whether the land value on line C of the details of transaction is the appraised value or the original value of the lot. Used on the 2021 URLA only.<br><br>* 0 - OmitLandValue<br>* 1 - AppraisedValueOfLot<br>* 2 - OriginalCostOfLot |
| PropertyDataID | String(50) | Property Data ID from the appraisal companies for Fannie Value Verify |
| IsUniqueProperty | Boolean | Unique property indicator |
| LatitudeLongitude | String(30) | Latitude and Longitude of the subject property. |
| VerifiedByUSPS | Enum.YesNoNA | Indicate whether subject property's address has been verified by USPS.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |

### [](#TOP)Loan

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| LoanID | Integer | GFId |
| FileDataID | Integer | ID of the Loan File |
| DisplayOrder | integer | Display Order |
| LinkedLoanID | NullableInteger |     |
| SellerBreakDown | boolean | Indicates whether the Seller Paid column is shown on the Closing Costs and Prepaids |
| LoanPurpose | Enum.LoanPurpose | Loan Purpose<br><br>* 0 - NotAssigned<br>* 1 - Purchase<br>* 2 - Refinance<br>* 3 - Construction<br>* 4 - ConstructionPerm<br>* 5 - Second<br>* 6 - Third<br>* 7 - PurchaseMoneySecond<br>* 8 - Other<br>* 9 - PurchaseMoneyThird<br>* 10 - RefiSecond<br>* 11 - RefiThird |
| LoanPurposeOther | string(50) | Loan Purpose Other |
| TreatConstAsRefi | boolean | Indicates whether a construction loan is treated as a refinance loan |
| RefiPurpNameOV | string(50) | Override value for the purpose of refinance |
| RefiPurpAU | Enum.RefiPurpAU | Purpose of refinance that gets transmitted to AU systems.<br><br>* 0 - NotAssigned<br>* 1 - CashOutDebtConsolidation<br>* 2 - CashOutHomeImprovement<br>* 3 - CashOutLimited<br>* 4 - CashOutOther<br>* 5 - NoCashOutFHAStreamlinedRefinance<br>* 6 - NoCashOutFREOwnedRefinance<br>* 7 - NoCashOutOther<br>* 8 - NoCashOutStreamlinedRefinance<br>* 9 - ChangeInRateTerm |
| RefiTypeFHA | Enum.RefiTypeFHA | Type of FHA refi<br><br>* 0 - NotAssigned<br>* 1 - StreamlinedWithAppraisal<br>* 2 - StreamlinedWithoutAppraisal<br>* 3 - NoCashOut<br>* 4 - CashOut<br>* 5 - SimpleRefinance |
| RefiTypeVA | Enum.RefiTypeVA | Type of VA refi<br><br>* 0 - NotAssigned<br>* 1 - IRRR<br>* 2 - Other |
| AmortizationType | Enum.AmortizationType | Amortization Type<br><br>* 0 - NotAssigned<br>* 1 - Fixed<br>* 2 - ARM<br>* 3 - GPM<br>* 4 - Other |
| AmortizationTypeDescOV | string(50) | Override value for Amortization Type Description for ARMs and Other loans |
| LoanProgramName | string(100) | Loan Program Name |
| PurPrice | NullableCurrency | Purchase Price |
| BaseLoan | NullableCurrency | Base Loan |
| LoanWith | NullableCurrency | Loan With MIP / Funding Fee |
| MIPFFPerc | NullableDouble | MIP / Funding Fee Percent |
| MIPFFPaidInCash | NullableCurrency | MIP / Funding Fee Paid In Cash |
| MIPFFPaidInCashPBSDesired | NullableCurrency | MIP / Funding Fee Paid In Cash - Amount Paid By Others (Seller or Lender) |
| MortgageType | Enum.MortgageType | Mortgage type<br><br>* 0 - NotAssigned<br>* 1 - VA<br>* 2 - FHA<br>* 3 - Conventional<br>* 4 - RHS<br>* 5 - Other<br>* 6 - HELOC<br>* 7 - StateAgency<br>* 8 - LocalAgency |
| MortgageTypeOther | string(50) | Other mortgage type description |
| BuyDowns | Enum.BuyDownType | Buy Downs<br><br>* 0 - None<br>* 1 - \_5\_4\_3\_2_1<br>* 2 - \_4\_3\_2\_1<br>* 3 - \_3\_2_1<br>* 4 - \_2\_1<br>* 5 - \_1\_0<br>* 6 - Compressed\_5\_4\_3\_2_1<br>* 7 - Compressed\_4\_3\_2\_1<br>* 8 - Compressed\_3\_2_1<br>* 9 - Compressed\_2\_1<br>* 10 - Compressed\_1\_0<br>* 11 - HalfStepFrom5<br>* 12 - HalfStepFrom4<br>* 13 - HalfStepFrom3<br>* 14 - HalfStepFrom2_5<br>* 15 - HalfStepFrom2<br>* 16 - HalfStepFrom1_5<br>* 17 - HalfStepFrom1<br>* 18 - HalfStepFrom0_5<br>* 19 - \_1\_1<br>* 20 - \_1\_1_1 |
| BalloonTerm | NullableInteger | Balloon |
| Term | NullableInteger | Term&lt;BR&gt;Default=360 |
| IntRate | NullableDouble | Note Rate |
| QualRateOV | NullableDouble | Qualifying Rate Override. If no value is entered then the note rate is used. |
| InterestOnlyPeriod | NullableInteger | Interest Only Period |
| PIOV | NullableCurrency | The overridden value for the principal and interest payment. |
| PropOther | NullableCurrency | Proposed Other Housing Expense |
| SubFiType | Enum.SubFiType | Subordinate Financing Type<br><br>* 0 - NotHELOC<br>* 1 - HELOC |
| SubFiIntOnly | boolean | Subordinate Financing Interest Only Indicator |
| SubFiBaseLoan | NullableCurrency | Subordinate Financing Base Loan Amount |
| SubFiIntRate | NullableCurrency | Subordinate Financing Interest Rate |
| SubFiTerm | NullableInteger | Subordinate Financing Term in Months |
| SubFiPIOV | NullableCurrency | Subordinate Financing Principal and Interest Override Value |
| MaxFirstRatio | NullableInteger | Sales Tools - Max First Ratio&lt;BR&gt;Default=28 |
| MaxSecondRatio | NullableInteger | Sales Tools - Max Second Ratio&lt;BR&gt;Default=36 |
| DesiredLTV | NullableInteger | Desired LTV&lt;BR&gt;Default=90 |
| ARMIndexNameOV | string(100) | Override value for the ARM Index Name |
| ARMIndexType | Enum.ARMIndexType | Specifies the type of index to be used to determine the interest rate at each adjustment.<br><br>* 0 - NotAssigned<br>* 1 - EleventhDistrictCostOfFunds<br>* 2 - OneYearTreasury<br>* 3 - ThreeYearTreasury<br>* 4 - SixMonthTreasury<br>* 5 - DailyCDRate<br>* 6 - FannieMae60DayRequiredNetYield<br>* 7 - FannieMaeLIBOR<br>* 8 - FederalCostOfFunds<br>* 9 - FreddieMac60DayRequiredNetYield<br>* 10 - FreddieMacLIBOR<br>* 11 - LIBOR<br>* 12 - MonthlyAverageCMT<br>* 13 - NationalAverageContractRateFHLBB<br>* 14 - NationalMonthlyMedianCostOfFunds<br>* 15 - TreasuryBillDailyAverage<br>* 16 - WallStreetJournalLIBOR<br>* 17 - WeeklyAverageCDRate<br>* 18 - WeeklyAverageCMT<br>* 19 - WeeklyAveragePrimeRate<br>* 20 - WeeklyAverageSMTI<br>* 21 - WeeklyAverageTAABD<br>* 22 - WeeklyAverageTAAI<br>* 23 - Other<br>* 24 - OneMonthLIBOR<br>* 25 - ThreeMonthLIBOR<br>* 26 - SixMonthLIBOR<br>* 27 - OneYearLIBOR<br>* 28 - FiveYearTreasury<br>* 29 - _30DayAverageSOFR<br>* 30 - _90DayAverageSOFR<br>* 31 - _180DayAverageSOFR<br>* 32 - WeeklyAverageCMTOneYear<br>* 33 - WeeklyAverageCMTThreeYear<br>* 34 - WeeklyAverageCMTFiveYear |
| ARMIndexPublished | string(200) | ARM Index Published In |
| ARMIndexValue | NullableDouble | ARM Index Current Value |
| ARMIndexValueForWeekEnding | NullableDate | ARM Index Value For Week Ending |
| ARMMargin | NullableDouble | ARM Margin |
| ARMAdjustCapFirst | NullableDouble | ARM Adjustment Cap - First Adjustment |
| ARMAdjustCapSubsequent | NullableDouble | ARM Adjustment Cap - Subsequent Adjustments |
| ARMFloor | NullableDouble | ARM Floor |
| ARMLifeCap | NullableDouble | ARM Life Cap |
| ARMRounding | Enum.ARMRounding | ARM Interest Rate Rounding&lt;BR&gt;Default=ARMRounding.UpToNearestEighth<br><br>* 0 - NoRounding<br>* 1 - NearestEighth<br>* 2 - UpToNearestEighth<br>* 3 - DownToNearestEighth<br>* 4 - NearestQuarter<br>* 5 - UpToNearestQuarter<br>* 6 - DownToNearestQuarter |
| ARMInterestRateChangesDescOV | String(250) | Override value for the description of how the interest rate changes - for the ARM disclosure |
| ARMPaymentChangesDescOV | String(250) | Override value for the description of how the payment changes - for the ARM disclosure |
| ARMMaxBalance | NullableDouble | Negative amortization ARM's - The maximum balance allowed as a percentage of the loan amount |
| ARMPaymentCap | NullableDouble | Negative amortization ARM's - Maximum percentage a payment can increase from one month to the next |
| ARMConversionOption | boolean | ARM conversion option |
| ARMNegAmDesc | string(100) | Description of negative amorization for the ARM disclosure |
| ARMDaysNotice | NullableInteger | Number of days notice required to be given to the borrower before the payment can be adjusted |
| ARMCommonRenewal | NullableInteger | Common renewal period |
| ARMNoAdjCap | boolean | If checked then the ARM has no adjustment caps |
| ARMIntRateFixedFor | NullableInteger | ARM's: Number of periods before the first interest rate adjustment |
| ARMIntRateAdjustAt | NullableInteger | ARM's: Number of periods between subsequent interest rate adjustments |
| ARMAddFeatures | string(500) | Description of additional ARM features - for the ARM disclosure |
| ARMCarryover | boolean | ARM interest rate carryover indicator |
| ARMCarryoverExample | string(1000) | ARM carryover example - for the ARM disclosure |
| ARMConversionCond | string(500) | ARM conversion conditions - for ARM disclosure |
| ARMConversionOn | string(50) | For ARM disclosure - You may only convert to a fixed interest rate on: |
| ARMConversionPeriod | string(500) | For ARM disclosure conversion option - ,and only during the following time period: |
| ARMConversionRate | string(500) | For ARM disclosure conversion option - ,Your new fixed interest rate will be determined by: |
| ARMHasNegAmFeature | Boolean |     |
| ARMPaymentAdjustPeriod | NullableInteger | Used on negative amortizing loans only |
| ARMRecastPeriod | NullableInteger | ARM recast period in months. Used for potential negative amortization loans. |
| ConstIntRate | NullableDouble | Interest rate during the construction period for construction-perm loans |
| ConstPeriod | NullableInteger | The construction period, in months, for construction-perm loans. |
| CPIncludeConstPeriodInTerm | boolean | For construction-perm loans: if true, the TIL will show the first month of construction as month number 1 in the loan. |
| CPCalcAdjFromDayOne | boolean | For construction-perm ARMS: if true then the construction period will be included when calculating when the ARM's first adjustment should be. |
| CPCollectNoIntDuringCP | boolean | For construction-perm loans: if true then no interest is collected during the construction period. |
| CPAdditionalTILText | string(200) | For construction-perm loans: this field constains additional text that is printed on the TIL |
| IsBiWeekly | boolean | Biweekly Loan Indicator |
| LoanProductType | Enum.LoanProductType | Loan Product Type<br><br>* 0 - Fixed<br>* 1 - ARM<br>* 3 - GPM<br>* 4 - NoPayment<br>* 5 - CustomProduct |
| GPMStartRate | NullableDouble | Starting interest rate for GPM loans |
| FHAProgram | Enum.FHAProgramType | FHA Section of Act<br><br>* 0 - NotAssigned<br>* 1 - _203b<br>* 2 - _203b2<br>* 3 - \_203b\_251<br>* 4 - _203k<br>* 5 - \_203k\_251<br>* 6 - _221d2<br>* 7 - \_221d2\_251<br>* 8 - _234c<br>* 9 - \_234c\_251<br>* 10 - _184<br>* 11 - _247<br>* 12 - _203h |
| HELOCMaxBalance | NullableCurrency | Starting with the 2021 URLA this field contains the HELOC credit limit for the subject loan. For earlier versions of the URLA this field contains the HELOC credit limit for all loans on the subject property, including concurrently closing and resubordinated loans. |
| MiCoveragePerc | NullableDouble | The percentage of the loan amount to be insured. |
| APR | NullableCurrency | Annual Percentage Rate |
| DesiredCCWithoutDPAndBDPBS | NullableCurrency | Closing costs paid by others (seller or lender). Does not include discount points or buydown funds. The actual calculated amount may be less if the total closing costs is less than this value. |
| DesiredDiscountPointsPBS | NullableCurrency | Discount points paid by others (seller or lender). The actual calculated amount may be less if the total discount points are less than this value. |
| DesiredBuydownFundsPBS | NullableCurrency | Buydowns funds paid by others (seller or lender). The actual calculated amount may be less if the total buydown funds are less than this value. |
| DesiredPPWithout902And905PBS | NullableCurrency | Prepaids paid by others (seller or lender). The actual calculated amount may be less if the total prepaids are less than this value. |
| PrepayPenaltyMemo | string(10000) | Prepayment Penalty Description |
| HazCoverageAmount | NullableCurrency | Hazard insurance - coverage amount |
| InterimInterestDays | NullableInteger | Interim Interest Days |
| InterimInterestPBSDesired | NullableCurrency | Interim Interest Paid by Others (Seller or Lender) |
| InterimInterestOV | NullableCurrency | Override value for interim interest |
| DailyInterestOV | NullableCurrency | Override value for daily interest calculation |
| MIMethod | Enum.MIMethod | MI Method&lt;BR&gt;Default=MIMethod.None<br><br>* 0 - MonthlyNonRefundable<br>* 1 - None<br>* 2 - LevelAnnual<br>* 3 - StandardAnnual<br>* 4 - SinglePremiumRefundable<br>* 5 - SinglePremiumNonRefundable<br>* 7 - LenderPaid<br>* 8 - SplitPremiumNonRefundable<br>* 9 - QMSinglePremium<br>* 10 - QMSplitPremium<br>* 11 - QMStandardAnnual<br>* 12 - MonthlyRefundable<br>* 13 - SplitPremiumRefundable |
| MILTVCutoffOV | NullableInteger | Override value for the LTV at which mortgage insurance cuts off |
| MILastMonth | NullableInteger | Last month during which MI is to be collected |
| MIAnnualPremPerc | NullableDouble | MI - annual premium as a percentage |
| MIAnnualPrem | NullableCurrency | Amount of the MI Annual Premium |
| MIMoPremPerc | NullableDouble | MI - monthly premium as a percentage - years 1 through 10 |
| MIMoPremPerc2 | NullableDouble | MI - monthly premium as a percentage - years 11 through 30 |
| MIRefundedOrCredited | Enum.MIRefundedOrCredited | Credited: MI will be credited to final payments; Refunded: MI will be refunded after MI terminates&lt;BR&gt;Default=MIRefundedOrCredited.Refunded<br><br>* 0 - Refunded<br>* 1 - Credited |
| Line1008AmountOV | NullableCurrency | Override value for aggregate escrow account adjustment |
| Line1007IncludeInPITI | Boolean | Indicates whether Line 1007 is included in the PITI |
| Line1008Name | String(50) | Line 1008 Name |
| Line1008AmountPBS | NullableCurrency | Amount of line 1008 paid by others (seller or lender) |
| GFEPrintProvidedByBroker | boolean | Indicates whether the following wording is printed on the GFE: 'This Good Faith Estimate is being provided by \[institution name\], a mortgage broker, and no lender has yet been obtained.' |
| GFEPrintYSPText | boolean | Indicates whether the yield spread premium text is printed on the GFE |
| GFEPrintProvider | boolean | Indicates whether the required providers text is printed on the GFE |
| YSPWordingOption | Enum.YSPWordingOption | Indicates how the broker fee is described: yield spread premium, mortgage broker fee, etc.<br><br>* 0 - MortgageBrokerFee<br>* 1 - PremiumReleaseFee<br>* 2 - YieldSpreadPremium<br>* 3 - Other |
| YSPWordingOther | String(250) | Contains the broker fee description when the Broker Fee Type is Other |
| YSPValueOption | Enum.YSPValueOption | Describes how the broker fee is displayed to the user: as a range, as a percentage amount or as a dollar amount.<br><br>* 0 - PercentRange<br>* 1 - PercentValue<br>* 2 - DollarRange<br>* 3 - DollarValue |
| YSPDollarLow | NullableCurrency | Indicates the lower dollar value for the broker fee if the broker fee is being represented as a dollar range. |
| YSPDollarHigh | NullableCurrency | Indicates the upper dollar value for the broker fee if the broker fee is being represented as a dollar range. Also represents the actual broker fee if the broker fee is being represented as a single dollar amount. |
| YSPPercLow | NullableCurrency | Indicates the lower percent value for the broker fee if the broker fee is being represented as a percent range. |
| YSPPercHigh | NullableCurrency | Indicates the upper percent value for the broker fee if the broker fee is being represented as a percent range. Also represents the actual broker fee if the broker fee is being represented as a single percent amount. |
| YSPProfit | NullableCurrency | The yield spread premium amount shown on the profitability screen. |
| CompDebtsToBePaidOffOV | NullableCurrency | Override value for Debts to Be Paid Off. For use on the comparison only. |
| TILStatus | Enum.TILStatus | Status of the TIL disclosure - preliminary or final<br><br>* 0 - NotAssigned<br>* 1 - Preliminary<br>* 2 - Final<br>* 3 - FinalWithEstimates |
| DemandFeature | Boolean | Indicates whether or not the loan has a demand feature |
| DemandFeatureDesc | String(255) | Description of the demand feature. |
| VariableRateFeature | Boolean | Indicates whether or not the loan has a variable rate feature |
| CollateralSecurity | Boolean | Collateral securing other loans with us may also secure this loan. |
| DepositAccounts | Boolean | Wording on the TIL: Your deposit accounts... |
| AssumptionOption | Enum.AssumptionOption | Indicates whether or not the loan is assumable.<br><br>* 0 - NotAssigned<br>* 1 - CannotAssume<br>* 2 - MayAssume |
| FilingRecFees | NullableCurrency | Amount of filing and recording fees. Shown on the TIL. |
| HazardInsRequired | Boolean | Indicates whether hazard insurance is required. Shown on the LE/TIL. |
| TILHazardInsOption | Enum.TILHazardInsOption | Indicates whether hazard insurance is required in a specific amount or for the full replacement value. Shown on the TIL.<br><br>* 0 - NotAssigned<br>* 1 - SpecificAmount<br>* 2 - ReplacementValue<br>* 3 - AmountOfLoan |
| HazardInsAvailFromLender | Enum.IsIsNotNA | Indicates whether hazard insurance is available from the lender. Shown on the TIL.<br><br>* 0 - NotAssigned<br>* 1 - _Is<br>* 2 - IsNot |
| HazardInsCost | NullableCurrency | Indicates the cost of hazard insurance if it is available from the lender. Shown on the TIL. |
| HazardInsTerm | NullableInteger | Indicates the coverage term of hazard insurance if it is available from the lender. Shown on the TIL. |
| LateChargeDays | NullableInteger | The number of days late before a late charge will be charged. |
| LateChargePerc | NullableCurrency | The late charge fee as a percentage percentage. |
| LateChargeBasis | Enum.LateChargeBasis | Indicates which amount the late charge will be charged on.<br><br>* 0 - NotAssigned<br>* 1 - OverDuePayment<br>* 2 - InterestPayment<br>* 3 - Payment<br>* 4 - PIPortion<br>* 5 - PaymentAndEscrows<br>* 6 - PIDue<br>* 7 - OverDuePI |
| LateChargeWording | Enum.LateChargeWording | Identifies which version of the late charge wording is used.<br><br>* 0 - Standard<br>* 1 - Custom |
| LateChargeCustomDesc | String(255) | Contains the late charge description when there is custom late charge wording. |
| APRDoesNotIncReqDep | Boolean | Indicates whether or not the APR includes the required deposit. |
| PrepaymentPenaltyOption | Enum.MayWillWillNot | Indicates whether or not there is a prepayment penalty<br><br>* 0 - NotAssigned<br>* 1 - May<br>* 2 - Will<br>* 3 - WillNot |
| RefundFinanceCharge | Enum.MayWillNot | Indicates whether the borrower may be entitled to a refund of part of the finance charge if the loan is paid off early.<br><br>* 0 - NotAssigned<br>* 1 - May<br>* 2 - WillNot |
| LockDays | NullableInteger | The number of days that the loan is locked for. |
| RepaymentType | Enum.RepaymentType | Loan Repayment Type<br><br>* 0 - NotAssigned<br>* 1 - InterestOnly<br>* 2 - NoNegativeAmortization<br>* 3 - PotentialNegativeAmortization<br>* 4 - ScheduledAmortization<br>* 5 - ScheduledNegativeAmortization |
| CCEstimateName | String(50) | Closing Cost Estimate Name |
| InterimIntDaysPerYearOV | Enum.InterimIntDaysPerYearOV | Override value for the number of days in a year for the purpose of calculating interim interest<br><br>* 0 - NotAssigned<br>* 1 - _360<br>* 2 - _365 |
| BDInterimIntCalcMethodOV | Enum.BDInterimIntCalcMethodOV | Override value for whether the note rate or the start rate will be used when calculating the interim interest on loans with buydowns<br><br>* 0 - NotAssigned<br>* 1 - NoteRate<br>* 2 - BuydownStartRate<br>* 3 - FullyIndexedRate |
| InterimIntDecimalsOV | Enum.InterimIntDecimalsOV | Override value for the number of decimal places to calculate interim interest to.<br><br>* 0 - NotAssigned<br>* 1 - _2Decimals<br>* 2 - _3Decimals<br>* 3 - _4Decimals |
| MaturityDate | NullableDate | Maturity date of the loan (last payment date) |
| _LTV | NullableCurrency | Calculated loan to value ratio. |
| _CLTV | NullableCurrency |     |
| _HCLTV | NullableCurrency |     |
| _PITI | NullableCurrency |     |
| _Profit | Decimal |     |
| _ProfitPercent | NullableCurrency |     |
| _ClosingCostsAllTotal | Decimal |     |
| _ClosingCostsAllPBS | Decimal |     |
| _ClosingCostsAllPBA | Decimal |     |
| _PrepaidsWith902And905Total | Decimal |     |
| _PrepaidsWith902And905PBS | Decimal |     |
| _PrepaidsWith902And905PBA | Decimal |     |
| _ProposedFirstMortPayment | NullableCurrency |     |
| _ProposedOtherFiPayment | NullableCurrency |     |
| _ProposedHazPayment | NullableCurrency |     |
| _ProposedPropTaxesPayment | NullableCurrency |     |
| _ProposedMIPayment | NullableCurrency |     |
| _ProposedHODPayment | NullableCurrency |     |
| _ProposedOtherPayment | NullableCurrency |     |
| _PI | NullableCurrency |     |
| _FirstRatio | NullableCurrency |     |
| _SecondRatio | NullableCurrency |     |
| _GapRatio | NullableCurrency |     |
| _LienPosition | Enum.LienPosition | * 0 - NotAssigned<br>* 1 - First<br>* 2 - Second<br>* 3 - Third |
| _DailyInterest | NullableCurrency |     |
| _InterimInterest | NullableCurrency |     |
| _TaxesAndInsurance | NullableCurrency |     |
| LoanProgramCode | String(50) | Loan Program Code |
| ARMPaymentAdjustPeriodInitial | NullableInteger |     |
| ARMNegAmStartRateOV | NullableCurrency | Starting rate for negative amortization loan |
| LockStartDate | NullableDateTime | Lock Start Date |
| LockExpirationDate | NullableDate | Lock Expiration Date |
| LockGuaranteedBy | Enum.LockGuaranteedByType | Entity backing the Locked Rate \[Lender \| Broker\]<br><br>* 0 - NotAssigned<br>* 1 - Lender<br>* 2 - Broker |
| LockFeePercent | NullableCurrency | Percentage of the Loan Amount charged to Lock the loan. |
| LockFeeAmount | NullableCurrency | The dollar amount charged to Lock the Loan |
| LockFloating | Boolean | True if the lock is floating, else False. |
| FirstPaymentDate | NullableDate | First Payment Date |
| LenderCaseNo | string(50) | Lender Case No |
| HMDALoanPurpose | Enum.HMDALoanPurpose | The HMDA loan purpose for loans reported to HMDA in 2017 or earlier. Also used for NMLS call reports.<br><br>* 0 - NotAssigned<br>* 1 - HomePurchase<br>* 2 - HomeImprovement<br>* 3 - Refinancing |
| HMDAPreapproval | Enum.HMDAPreapproval | * 0 - NotAssigned<br>* 1 - PreapprovalWasRequested<br>* 2 - PreapprovalWasNotRequested<br>* 3 - NotApplicable |
| HMDATypeOfPurchaser | Enum.TypeOfPurchaser | &lt;BR&gt;Default=TypeOfPurchaser.NotAssigned<br><br>* 0 - LoanWasNotOriginatedOrWasNotSoldInCalendarYear<br>* 1 - FannieMae<br>* 2 - GinnieMae<br>* 3 - FreddieMac<br>* 4 - FarmerMac<br>* 5 - PrivateSecuritization<br>* 6 - CommercialBankOrSavingBankOrSavingsAssociation<br>* 7 - LifeInsuranceCompanyOrCreditUnionOrMortgageBankOrFinanceCompany<br>* 8 - AffiliateInstitution<br>* 9 - OtherTypeOfPurchaser<br>* 71 - CreditUnionMortgageCompanyOrFinanceCompany<br>* 72 - LifeInsuranceCompany<br>* -1 - NotAssigned |
| HMDAHOEPAStatus | Enum.HOEPAStatus | * 0 - NotAssigned<br>* 1 - HOEPA<br>* 2 - NotHOEPA<br>* 3 - NotApplicable |
| HMDARateSpread | NullableCurrency |     |
| HMDARateSpreadNA | boolean |     |
| HMDADenialReason1 | Enum.DenialReason | HMDA denial reason 1<br><br>* 0 - NotAssigned<br>* 1 - DebtToIncomeRatio<br>* 2 - EmploymentHistory<br>* 3 - CreditHistory<br>* 4 - Collateral<br>* 5 - InsufficientCash<br>* 6 - UnverifiableInformation<br>* 7 - CreditApplicationIncomplete<br>* 8 - MortgageInsuranceDenied<br>* 9 - Other |
| HMDADenialReason2 | Enum.DenialReason | HMDA denial reason 2<br><br>* 0 - NotAssigned<br>* 1 - DebtToIncomeRatio<br>* 2 - EmploymentHistory<br>* 3 - CreditHistory<br>* 4 - Collateral<br>* 5 - InsufficientCash<br>* 6 - UnverifiableInformation<br>* 7 - CreditApplicationIncomplete<br>* 8 - MortgageInsuranceDenied<br>* 9 - Other |
| HMDADenialReason3 | Enum.DenialReason | HMDA denial reason 3<br><br>* 0 - NotAssigned<br>* 1 - DebtToIncomeRatio<br>* 2 - EmploymentHistory<br>* 3 - CreditHistory<br>* 4 - Collateral<br>* 5 - InsufficientCash<br>* 6 - UnverifiableInformation<br>* 7 - CreditApplicationIncomplete<br>* 8 - MortgageInsuranceDenied<br>* 9 - Other |
| HMDALienStatus | Enum.LienStatus | * 0 - NotAssigned<br>* 1 - FirstLien<br>* 2 - SubordinateLien<br>* 3 - NotSecuredByLien<br>* 4 - NotApplicable |
| _HMDALoanType | Enum.HMDALoanType | * 0 - NotAssigned<br>* 1 - Conventional<br>* 2 - FHAInsured<br>* 3 - VAGuaranteed<br>* 4 - FmHAInsured |
| _LoanAmountInThousands | String(8) |     |
| PrepayPenaltyTerm | NullableInteger |     |
| QualIntOnlyAtAmortizingPaymentOV | Enum.YesNoNA | Deprecated. Override value indicating whether loans with an interest only component should be qualified as if they are amortizing. This value is no longer used.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| _Line1008Amount | NullableCurrency |     |
| _Line1008AmountPBA | NullableCurrency |     |
| CA885FixedIntRate | NullableCurrency | CA 885: Note rate for the first scenario - Fixed Rate |
| CA885IntOnlyFirst5IntRate | NullableCurrency | CA 885: Note rate for the second scenario - Interest Only for First 5 Years |
| CA885FiveOneARMIntRate | NullableCurrency | CA 885: Note rate for the third scenario - 5-1 ARM |
| CA885IntOnlyFirst5ARMIntRate | NullableCurrency | CA 885: Note rate for the fourth scenario - Interest Only and Fixed for the First 5 years, then adjusts |
| CA885OptionPaymentIntRate1 | NullableCurrency | CA 885: Note rate for month 1 on the fifth scenario - Option Payment |
| CA885OptionPaymentIntRate2To60 | NullableCurrency | CA 885: Note rate for months 2 to 60 on the fifth scenario - Option Payment |
| CA885ProposedLoanExplanation | String(100) | CA 885: Explanation of Type of Proposed Loan Product |
| CA885Years1To5ExplanationOV | String(35) | CA 885: Explanation for Minimum Monthly Payment Years 1 - 5 |
| CA885Year6Explanation | String(35) | CA 885: Explanation for Monthly Payment in Year 6 with no change in rates |
| CA885Year6With2PercRiseExplanation | String(35) | CA 885: Explanation for Monthly Payment in Year 6 with a 2% rise in rates |
| CA885Year6With5PercRiseExplanation | String(35) | CA 885: Explanation for Monthly Payment in Year 6 with a 5% rise in rates |
| CA885PaymentYears1To5OV | NullableCurrency | CA 885: Override value for Minimum Monthly Payment years 1-5 |
| CA885PaymentYear6OV | NullableCurrency | CA 885: Override value for Monthly Payment years 6 with no rise in rates |
| CA885PaymentYear6With2PercRiseOV | NullableCurrency | CA 885: Override value for Monthly Payment years 6 with a 2% rise in rates |
| CA885PaymentYear6With5PercRiseOV | NullableCurrency | CA 885: Override value for Monthly Payment years 6 with a 5% rise in rates |
| CA885BalanceYear5OV | NullableCurrency | CA 885: Override value for the field How much will be owed after 5 years |
| InterimInterestPaidByOtherType | Enum.PaidByOtherType | Indicates who is paying the interim interest amount in the paid-by-others column<br><br>* 0 - Seller<br>* 1 - Lender<br>* 2 - ThirdParty<br>* 3 - Builder<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 7 - NonParentRelative<br>* 8 - Parent<br>* 9 - RealEstateAgent<br>* 10 - StateAgency<br>* 11 - UnrelatedFriend |
| MIPFFPaidInCashPaidByOtherType | Enum.PaidByOtherType | Indicates who is paying the MIP/FF Paid in Cash amount in the paid-by-others column<br><br>* 0 - Seller<br>* 1 - Lender<br>* 2 - ThirdParty<br>* 3 - Builder<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 7 - NonParentRelative<br>* 8 - Parent<br>* 9 - RealEstateAgent<br>* 10 - StateAgency<br>* 11 - UnrelatedFriend |
| Line1008PaidByOtherType | Enum.PaidByOtherType | Indicates who is paying the amount in the paid-by-others column on line 1008<br><br>* 0 - Seller<br>* 1 - Lender<br>* 2 - ThirdParty<br>* 3 - Builder<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 7 - NonParentRelative<br>* 8 - Parent<br>* 9 - RealEstateAgent<br>* 10 - StateAgency<br>* 11 - UnrelatedFriend |
| CA885CertifiedBy | String(50) | For Cerification section on Page 3 of the 885. |
| _IsClosingDocsLoan | Boolean | Indicates if the loan is the closing loan for this file. |
| _IsLoanOfRecord | Boolean | Indicates if the loan is the closing loan for this file, or the Active Loan if the closing loan does not exist. |
| RateSheetID | String(50) | The ID of the rate sheet in effect when the loan was locked |
| BuyPriceBase | NullableCurrency | Base price paid to the originator for the loan (i.e. 101.250) |
| _BuyPriceAdjustments | NullableCurrency | Sum of originator (buy-side) price adjustments to the loan price |
| _BuyPriceNet | NullableCurrency | Net originator (buy-side) price |
| BuyCommitmentNo | String(50) | Commitment number for the originator (buy-side) lock |
| ForbearanceAmount | NullableCurrency | The amount of any principal forbearance. Used for loan modifications only. |
| _FHAMaxLoanLimit | NullableCurrency | Maximum loan amount calculated for FHA loans. |
| EntityOnTILOption | Enum.EntityOnTILOption | Which entity's name should appear on the TIL.<br><br>* 0 - _Default<br>* 1 - ActiveCompany<br>* 2 - Lender<br>* 3 - Investor |
| MostRecentlyDisclosedAPR | NullableCurrency | Most recently disclosed APR. |
| _APRVariance | NullableCurrency | The difference between the current APR and the most recently disclosed APR. |
| GFEIntRateAvailThroughDate | NullableDateTime | The date through which the interest rate is available. This is the date shown in line 1 in the Important Dates section of the GFE. |
| GFEChargesAvailThroughDate | NullableDateTime | The date through which all of other settlement charges are available through. This is the date shown in line 2 in the Important Dates section of the GFE. |
| GFELockDaysBeforeSettlement | NullableInteger | The minimum number of days before settlement that the interest rate must be locked. This value is shown on line 4 in the Important Dates section of the GFE. |
| GFEShowTradeoffOptions | Boolean | Indicates whether the second and third columns of the tradeoff table on page 3 of the GFE should be completed. |
| GFETradeoffIntRate2 | NullableCurrency | The interest rate shown in column 2 of the tradeoff table |
| GFETradeoffIntRate3 | NullableCurrency | The interest rate shown in column 3 of the tradeoff table |
| GFEPrepaymentPenaltyMax | NullableCurrency | The maximum amount of the prepayment penalty. |
| GFEDelivered | Boolean | Indicates whether the LE/GFE has been delivered to the borrower |
| GFEInitialLoanAmountOV | NullableCurrency | Override of the initial GFE loan amount. |
| GFEPIMIInitialAmountOV | NullableCurrency | Override of the GFE PIMI initial amount |
| GFEPIMIIncludesPrincipalOV | Enum.YesNoNA | Override for whether the GFE PIMI includes principal or not.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEPIMIIncludesInterestOV | Enum.YesNoNA | Override for whether GFE PIMI includes interest or not.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEPIMIIncludesMIOV | Enum.YesNoNA | Override for whether the GFE PIMI includes MI or not.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEIntRateCanRiseOV | Enum.YesNoNA | Override for whether the GFE interest rate can rise or not.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEBalanceCanRiseOV | Enum.YesNoNA | Override for whether the GFE balance can rise or not.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEPIMICanRiseOV | Enum.YesNoNA | Override for whether the GFE PIMI can rise or not.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEIntRateFirstChangeIntervalDescOV | String(50) | Override for the GFE interest rate first change interval description. |
| GFEIntRateFirstChangeDateDescOV | String(50) | Override for the GFE interest rate first change date description. |
| GFEIntRateNextChangeIntervalDescOV | String(50) | Override for GFE interest rate next change interval description. |
| GFEIntRateAdjCapOV | NullableCurrency | Override for the GFE interest rate adjustment cap. |
| GFEIntRateMinOV | NullableCurrency | Override for the GFE interest rate minimum. |
| GFEIntRateMaxOV | NullableCurrency | Override for the GFE interest rate maximum. |
| GFEMaxBalanceOV | NullableCurrency | Override for the GFE maximum balance amount. |
| GFEPIMIFirstIncreaseIntervalDescOV | String(50) | Override for the GFE PIMI first increase interval description. |
| GFEPIMIFirstIncreaseDateDescOV | String(50) | Override for the GFE PIMI first increase date description. |
| GFEPIMIFirstIncreaseAmountOV | NullableCurrency | Override for the GFE PIMI first increase amount. |
| GFEPIMIMaxAmountOV | NullableCurrency | Override for the GFE PIMI maximum amount. |
| GFEBalloonPaymentOV | NullableCurrency | Override for the GFE balloon payment amount. |
| GFETradeoffCostChangePerc2 | NullableCurrency | The GFE tradeoff cost change percentage 2. |
| GFETradeoffCostChangePerc3 | NullableCurrency | The GFE tradeoff cost change percentage 3. |
| GFETradeoffCostChangeAmount2OV | NullableCurrency | Override for the GFE tradeoff cost change 2 amount. |
| GFETradeoffCostChangeAmount3OV | NullableCurrency | Override for the GFE tradeoff cost change 3 amount. |
| GFEEscrowAllPropTaxesOV | Enum.YesNoNA | Override for whether the GFE escrows all property taxes.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEEscrowAllInsuranceOV | Enum.YesNoNA | Override for whether the GFE escrows all insurance.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEEscrowOtherOV | Enum.YesNoNA | Override for whether the GFE escrows other.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEEscrowOtherDescOV | String(50) | Override for the GFE escrow other description. |
| NoCostLoan | Boolean | Indicates whether the loan is a no-cost loan where lender paid fees should be credited to the borrower in block 2 of the GFE. |
| GFEIntRateAvailThroughDateNA | Boolean | Indicates whether to display NA instead of the stored value.&lt;BR&gt;Default=False |
| GFELockDaysNA | Boolean | Indicates whether to display NA instead of the stored value.&lt;BR&gt;Default=False |
| GFELockDaysBeforeSettlementNA | Boolean | Indicates whether to display NA instead of the stored value.&lt;BR&gt;Default=False |
| InterimIntGFEDisclosedAmount | NullableCurrency | The amount of interim interest disclosed on the LE/GFE |
| MIPFFGFEDisclosedAmount | NullableCurrency | Amount of the MIP or Funding Fee disclosed on the LE/GFE |
| EscrowDepositGFEDisclosedAmount | NullableCurrency | The amount of the initial deposit to the escrow account as disclosed on the GFE |
| YSPAmount1 | NullableCurrency | Yield spread premium amount 1 |
| YSPAmount2 | NullableCurrency | Yield spread premium amount 2 |
| YSP_GFEDisclosedAmount1 | NullableCurrency | Yield spread premium amount disclosed on GFE 1 |
| YSP_GFEDisclosedAmount2 | NullableCurrency | Yield spread premium amount disclosed on GFE 2 |
| ChangedCircumstanceExplanation | String(32000) | Changed circumstance explanation |
| NoCostLenderCreditGFEDisclosedAmount | NullableCurrency | The amount disclosed on the GFE for the lender credit for no cost loans |
| GFEOwnersTitleNAWhenZeroOV | Enum.YesNoNA | Override for whether to display NA instead of the actual value.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PaidToBrokerAdjustment | NullableCurrency | Adjustment to the amount paid to the broker |
| PaidToLenderAdjustment | NullableCurrency | Adjustment to the amount paid to the lender |
| PaidToInvestorAdjustment | NullableCurrency | Adjustment to the amount paid to the investor |
| _PaidToBrokerTotal | NullableCurrency | Total amount paid to the broker |
| _PaidToLenderTotal | NullableCurrency | Total amount paid to the lender |
| _PaidToInvestorTotal | NullableCurrency | Total amount paid to the investor |
| _IsHPML | Enum.HPMLTestResult | Indicates whether the loan is a Higher Priced Mortgage Loan<br><br>* 0 - NotAssigned<br>* 1 - HPML<br>* 2 - NotHPML<br>* 3 - NotEvaluated<br>* 4 - Unknown |
| _IsActiveOrLinkedLoan | Boolean | Indicates whether the loan is the either the active loan or the linked loan associated with the active loan (for example a piggyback second or a first loan if the active loan is a piggyback second) |
| GFEZeroCreditOrChargeOption | Enum.GFEPointsOption | Option describing GFE block 2 fees.&lt;BR&gt;Default=GFEPointsOption.YouPayACharge<br><br>* 0 - YouPayACharge<br>* 1 - YouReceiveACredit<br>* 2 - IncludedInOurOriginationCharge |
| _GFEBlockOurOriginationCharge | Decimal | GFE Block 1 - Our origination charge |
| _GFEBlockCreditOrChargeForIntRate | Decimal | GFE Block 2 - Your credit or charge (points) for the specific interest rate chosen |
| _GFEBlockServicesLenderSelected | Decimal | GFE Block 3 - Required services that we select |
| _GFEBlockTitleServices | Decimal | GFE Block 4 - Title services and lenders title insurance |
| _GFEBlockOwnersTitle | Decimal | GFE Block 5 - Owners title insurance |
| _GFEBlockServicesYouCanShopFor | Decimal | GFE Block 6 - Required services that you can shop for |
| _GFEBlockRecordingCharges | Decimal | GFE Block 7 - Government recording charges |
| _GFEBlockTransferTaxes | Decimal | GFE Block 8 - Transfer taxes |
| _GFEBlockEscrowDeposit | NullableCurrency | GFE Block 9 - Initial deposit for your escrow account |
| _GFEBlockInterimInt | NullableCurrency | GFE Block 10 - Daily interest charges |
| _GFEBlockInsurancePremium | Decimal | GFE Block 11 - Homeowners insurance |
| _GFEAdjustedOriginationCharge | Decimal | GFE Block A - Your Adjusted Origination Charges |
| _GFESettlementChargesAllOther | Decimal | GFE Block B - Your Charges for All Other Settlement Services |
| _GFESettlementChargesTotal | Decimal | GFE Block A+B - Total Estimated Settlement Charges |
| _HUD1OurOriginationCharge | Decimal | HUD-1 Line 801 - Our origination charge |
| _HUD1CreditOrChargeForIntRate | Decimal | HUD-1 Line 802 - Your credit or charge (points) for the specific interest rate chosen |
| _HUD1AdjustedOriginationCharge | Decimal | HUD-1 Line 803 - Your adjusted origination charges |
| YSPPerc1 | NullableDouble | Yield Spread Premium percentage associated with Yield Spread Premium Amount 1 |
| YSPPerc2 | NullableDouble | Yield Spread Premium percentage associated with Yield Spread Premium Amount 2 |
| DailyInterestGFEDisclosed | NullableCurrency | Daily interest amount disclosed when LE/GFE was delivered. |
| InterimInterestDaysGFEDisclosed | NullableInteger | Interim interest number of days disclosed when the LE/GFE was delivered. |
| GFELockToSettlementDays | NullableInteger | Number of days between the lock date and the settlement date as disclosed on the GFE. This value is shown on line 3 in the Important Dates section of the GFE. |
| GFETermOV | NullableInteger | Term override for the 2010 GFE. |
| GFEHasBalloonPaymentOV | Enum.YesNoNA | Override for the 2010 GFE indicating whether the loan has a balloon payment.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FinanceCharge | NullableCurrency | The finance charge amount as shown on the CD/TIL. |
| TotalOfPayments | NullableCurrency | The total of payments amount as shown on the TIL. |
| LockExtension1Days | NullableInteger | Number of days for the first lock extension |
| LockExtension2Days | NullableInteger | Number of days for the second lock extension |
| BuySRP | NullableCurrency | Buy side service release premium |
| RefinanceCashOutAmount | NullableCurrency | Refinance Cash Out Amount |
| HELOCAnnualFee | NullableCurrency | Annual Fee charged on HELOC |
| ConstIntReserves | NullableCurrency | The amount of interest reserves charged on a construction or construction perm loan. |
| HELOCDrawAccessTerm | NullableInteger | The number of months during which the borrower can draw on the HELOC |
| PortfolioRefi | Boolean | Specifies that the loan is a refinancing portfolio loan.&lt;BR&gt;Default=False |
| HELOCTerminationFee | NullableCurrency | The fee amount charged when the HELOC transaction is paid off early. |
| GFEIntRateAvailableThroughDateExtra | String(30) | Displays extra date information about the GFE Interest Rate Available Through Date. |
| BuyPricedInvestor | String(50) | The investor whose pricing is shown on the buy side |
| _BuyProfitNet | NullableCurrency | Originator net profit (as shown on buy-side pricing) |
| UnextendedLockExpDate | NullableDate | The original lock expiration date before any extensions. |
| PPELockExpDate | NullableDate | The lock expiration date as calculated by a product and pricing engine (PPE) at the time a pricing request was made. This is not the actual lock expiration date. |
| PPETimePriced | NullableDateTime | The date and time that pricing information was retrieved from the product and pricing engine (PPE) |
| LockExtension3Days | NullableInteger | Number of days for the third lock extension |
| PricedLockDays | NullableInteger | Number of lock that the loan was priced at |
| ApprovedRate | NullableCurrency | The rate at which the loan was underwritten |
| LoanGUID | GUID | Loan GUID&lt;BR&gt;Default=GUID.NewGuid |
| InterimIntDayCountCalcMethodOV | Enum.InterimIntDayCountCalcMethodOV | Override value for the interim interest day count calculation method<br><br>* 0 - NotAssigned<br>* 1 - Actual<br>* 2 - _30 |
| IsNegAmLoanUnderTILA | Boolean | Indicates that the loan is a negative amortization loan under TILA section 12 CFR 1026.18(s)(7)(v) |
| IsPreferredRateLoan | Boolean | Indicates whether the loan has a preferred rate feature where the interest rate can increase after consummation based on an event such as terminating employment or failing to use a deposit account to make loan payments. |
| PreferredRateDiscount | NullableCurrency | The amount that the preferred interest rate is being discounted. |
| PreferredRateFixedForMonths | NullableInteger | The number of months that the preferred rate is locked in. |
| SharedEquityOrAppreciationOption | Enum.SharedEquityOrAppreciationOption | Specifies whether the loan has a shared equity or shared appreciation feature<br><br>* 0 - Neither<br>* 1 - SharedEquity<br>* 2 - SharedAppreciation |
| AntiSteeringCreditor | String(50) | The creditor shown on the anti-steering disclosure |
| AntiSteeringPointsAndFeesOV | NullableCurrency | Override value for the origination points or fees and discount points on the anti-steering disclosure. |
| ReverseMortgageType | Enum.ReverseMortgageType | Reverse mortgage type<br><br>* 0 - NotAReverseMortgage<br>* 1 - HECM_Standard<br>* 2 - HECM_Saver<br>* 3 - OtherReverseMortgage |
| ReverseMortgageLoanPurpose | Enum.ReverseMortgageLoanPurpose | Indicates whether or not the reverse mortgage was purchasing a new home<br><br>* 0 - NotAPurchase<br>* 1 - Purchase |
| _MCRFeesCollected | NullableCurrency | Mortgage Call Report - Fees collected based on the origination channel |
| MCRFeesCollectedOV | NullableCurrency | Mortgage Call Report - Fees collected override value |
| ExcludeFromHMDA | Boolean | Indicates whether the loan should be excluded from HMDA reporting |
| ExcludeFromNMLSCallReport | Boolean | Indicates whether the loan should be excluded from the NMLS Call Report |
| HELOCRepaymentTerm | NullableInteger | The period following the draw period during which the borrower must repay the HELOC |
| HELOCMinDrawAmount | NullableCurrency | The minimum amount of any draw on the HELOC |
| ExcludeFromRegulatorConnect | Boolean | Indicates whether the loan should be excluded from the Regulator Connect License Examination File (LEF) |
| LenderRegisteredDate | NullableDate | For brokered loans, the date the loan was registered with the lender. |
| ARMLookbackDays | NullableInteger | ARM look back day count. |
| IsRelocationLoan | Boolean | Indicates whether the loan is a relocation loan. |
| BalloonResetIndicator | Boolean | True if the ballon loan has already been reset. |
| LenderPaidMIInterestRateAdjustmentPercent | NullableCurrency | The percentage amount of MI being paid by the Lender. |
| ExtendableBalloonMaxTerm | NullableInteger | ULDD - The maximum number of months over which the extendable mortgage may be amortized. |
| CreditSaleDownPaymentOV | NullableCurrency | The override value for the amount of the downpayment on a credit sale transaction. |
| DOTOtherCreditAmount3 | NullableCurrency | Other Credit Amount 3 |
| DOTOtherCreditDescOV3 | string(50) | Override value for Other Credit Description 3 |
| DOTOtherCreditType3 | Enum.OtherCreditType | Type of other credit for the 3rd other credit<br><br>* 0 - NotAssigned<br>* 1 - CashDepositOnSalesContract<br>* 2 - SellerCredit<br>* 3 - LenderCredit<br>* 4 - RelocationFunds<br>* 5 - EmployerAssistedHousing<br>* 6 - LeasePurchaseFunds<br>* 7 - BorrowerPaidFees<br>* 8 - Other |
| DOTOtherCreditAmount4 | NullableCurrency | Other Credit Amount 4 |
| DOTOtherCreditDescOV4 | string(50) | Override value for Other Credit Description 4 |
| DOTOtherCreditType4 | Enum.OtherCreditType | Type of other credit for the 4th other credit<br><br>* 0 - NotAssigned<br>* 1 - CashDepositOnSalesContract<br>* 2 - SellerCredit<br>* 3 - LenderCredit<br>* 4 - RelocationFunds<br>* 5 - EmployerAssistedHousing<br>* 6 - LeasePurchaseFunds<br>* 7 - BorrowerPaidFees<br>* 8 - Other |
| GFELenderCreditLumpSumIncludedInDOT | Boolean | Indicates whether or not the lender credit from the GFE is included in the other credits section of the details of transaction. |
| Haz2CoverageAmount | NullableCurrency | Amount covered by Hazard Insurance 2 company. |
| _DOTLenderCreditAmount | NullableCurrency | The amount of the lender credit, as calculated from the itemized lender paid closing costs and prepaids |
| IsJumbo | Enum.YesNoNA | Indicates whether the loan amount exceeds the conforming loan limit.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsAltAOrSubprime | Boolean | Indicates whether the loan is an alt-a or subprime loan |
| IsOtherMortgageTypeGovLoan | Boolean | Indicates whether a loan whose mortgage type is Other is a government loan |
| NMLSInvestorTypeOV | Enum.NMLSInvestorType | Overide value for the NMLS Investor Type<br><br>* 0 - NotAssigned<br>* 1 - SoldToAgency<br>* 2 - SoldToOthersNonAffiliate<br>* 3 - SoldToOthersAffiliate<br>* 4 - KeptInPortfolio<br>* 5 - SoldWithSaleTreatment<br>* 6 - SoldWithoutSaleTreatment |
| _BuySRPAdjustments | NullableCurrency | Sum of originator (buy-side) SRP adjustments |
| _BuySRPNet | NullableCurrency | Net originator (buy-side) SRP |
| UndiscountedIntRate | NullableCurrency | The interest rate, after adjustments for LLPAs, that results in par pricing. |
| PPEPricedProductName | String(150) | The PPE product name of the product for which pricing applies |
| BonaFideDiscountPointsIndicator | Enum.BonaFideDiscountPointsIndicator | Indicates whether the discount points are bona fide according to state and/or GSE rules<br><br>* 0 - NotAssigned<br>* 1 - NotBonaFide<br>* 2 - BonaFideForStateTestsOnly<br>* 3 - BonaFideForGSETestsOnly<br>* 4 - BonaFideForStateAndGSETestsOnly<br>* 5 - BonaFideForFederalTestsOnly<br>* 6 - BodaFideForFederalAndStateTestsOnly<br>* 7 - BonaFideForFederalAndGSETestOnly<br>* 8 - BonaFideForAllTests |
| LockCanceledDate | NullableDateTime | Date the lock was canceled. |
| FannieARMPlanNo | String(10) | Fannie Mae ARM plan number. |
| ARMQualRateOption | Enum.ARMQualRateOption | Indicates how the ARM qualifying rate is calculated<br><br>* 0 - NotAssigned<br>* 1 - NoteRate<br>* 2 - MaxRateInFirst5Years<br>* 3 - RatePlus2OrFIR<br>* 4 - RateOrFIR<br>* 5 - RatePlus1<br>* 6 - RatePlus2OrRoundedFIR<br>* 7 - RateOrRoundedFIR |
| ATRAssessmentMethod | Enum.ATRAssessmentMethod | Determines how the ATR assessment tests are applied to the loan<br><br>* 0 - NotAssigned<br>* 1 - ATRNotQM<br>* 2 - QMGeneral<br>* 3 - QMTemporaryGSE<br>* 4 - QMTemporaryAgency<br>* 5 - QMSmallCreditor<br>* 6 - QMTemporaryBalloon<br>* 7 - QMBalloon<br>* 8 - QMGeneralV2<br>* 99 - NoneNotCovered<br>* 100 - NoneLoanProgramExempt |
| QMTestResult | Enum.QMTestResult | Indicates whether the loan passed the QM tests<br><br>* 0 - NotAssigned<br>* 1 - NotEvaluated<br>* 2 - Unknown<br>* 3 - Passed<br>* 4 - Failed<br>* 5 - PassedSafeHarbor<br>* 6 - PassedRebuttablePresumption |
| UndiscountedPrice | NullableCurrency | The price corresponding to the undiscounted rate. |
| BrokerCompAtTimeRateSetOV | NullableCurrency | An override value for the broker compensation at the time the interest rate was set. If no value is entered, the final broker compensation will be used. |
| ARMIndexValueAtTimeRateSetOV | NullableCurrency | An override value for the ARM index value at the time the interest rate is set |
| HCMTestResult | Enum.HCMTestResult | Indicates whether the loan passed the HCM tests<br><br>* 0 - NotAssigned<br>* 1 - NotEvaluated<br>* 2 - Unknown<br>* 3 - Passed<br>* 4 - Failed |
| PointsAndFees | NullableCurrency | Points and fees amount for section 32 - QM - HCM |
| HCM_APR | NullableCurrency | The HCM APR used only for running HCM tests. Reference 12 CFR 1026.32(a)(3). |
| IsJumboForHPML_OV | Enum.YesNoNA | Override value indicating whether the loan is a jumbo for the purpose of calculating HPML. If this field is blank then Loan.IsJumbo is used.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| BonaFideDiscountPointsPercOV | NullableCurrency | An override value indicating the amount of discount points that are bona fide for the points and fees test. |
| _QualRate | NullableCurrency |     |
| RegulatoryLockDateOV | NullableDate | The last date the borrower interest rate is set before consummation for the purposes of APOR, HMDA and ULDD. If a date is not entered, Loan.LockStartDate will be used. |
| ARMIndexValueIsLocked | Boolean | Indicates whether the ARM Index Value and ARM Index Week Ending Date should be updated when the loan program is re-selected. If this value is True, the index value and week ending date will only be updated if the ARM Index for the selected loan program is different than the ARM Index for the current loan program. |
| _OccupantFirstRatio | NullableCurrency | The ratio of occupant housing expense to occupant income. |
| _OccupantSecondRatio | NullableCurrency | The ratio of occupant debt to occupant income. |
| LockExpDateTimeOfDayOV | String(20) | An override value for the time of day that the interest rate lock expires. This value is normally calculated. |
| LenderCreditGFEDisclosedAmount | NullableCurrency | The amount of the lender credit disclosed on the loan estimate |
| UseAlternativeCashToCloseTable | Boolean | Indicates whether the alternative cash to close table should be used for transactions without a seller.&lt;BR&gt;Default=False |
| IntOnlyQualPaymentCalcOption | Enum.IntOnlyQualPaymentCalcOption | Indicates how the qualifying payment is calculated on loans with an interest only component<br><br>* 0 - Default<br>* 1 - AmortizingOverFullTerm<br>* 2 - AmortizingOverNonInterestOnlyTerm<br>* 3 - InterestOnly |
| TRIDLoanPurposeOV | Enum.TRIDLoanPurpose | Override value for the loan purpose shown in the Loan Estimate and Closing Disclosures<br><br>* 0 - NotAssigned<br>* 1 - Purchase<br>* 2 - Refinance<br>* 4 - Construction<br>* 8 - HomeEquityLoan |
| IsGrantLoan | Boolean | Used in conjunction with No Payment loans to indicate that the loan is forgiven at the end of the term. |
| Line1003ExcludeFromPITI | Boolean | Indicates whether prepaid item 1003 is excluded from the PITI.&lt;BR&gt;Default=False |
| LockExpDateTimeZoneCityOV | Enum.TimeZoneCity | The city identifier for the time zone for the date the rate lock expires on the Loan Estimate. This value is used by certain document preparation providers and is normally calculated based on the time zone abbreviation and the subject property state.<br><br>* 0 - NotAssigned<br>* 10 - NewYork<br>* 20 - Chicago<br>* 30 - Boise<br>* 40 - Phoenix<br>* 50 - LosAngeles<br>* 60 - Anchorage<br>* 70 - Honolulu<br>* 80 - Bermuda<br>* 90 - StJohns<br>* 100 - Marquesas<br>* 110 - PagoPago<br>* 120 - Caracas<br>* 130 - Halifax<br>* 140 - BuenosAires<br>* 150 - SouthGeorgia<br>* 160 - Azores<br>* 170 - Reykjavik<br>* 180 - London<br>* 190 - Guam<br>* 200 - SanJuan |
| ConstInitialDraw | NullableCurrency | Construction loan initial draw amount |
| CPCollectMIDuringConstPeriod | Boolean | Indicates whether mortgage insurance is collected during the construction period. |
| IsRescindableOV | Enum.YesNoNA | Override value for the indicator of whether the transaction is rescindable<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ConstructionPurpose | Enum.ConstructionPurpose | Purpose of construction loan (initial construction vs home improvement)<br><br>* 0 - NotAssigned<br>* 1 - InitialConstruction<br>* 2 - HomeImprovement |
| _IsRescindable | Boolean | Indicates whether the loan is rescindable |
| MilitaryAPR | NullableCurrency | The value of the Military APR (MAPR) if the loan is covered by the Military Lending Act. |
| _MilitaryAPRTestResult | Enum.MilitaryAPRTestResult | Indicates whether the loan is subject to the Military Lending Act and if so whether it complies with the Military APR limitation.<br><br>* 0 - NotAssigned<br>* 1 - NotCovered<br>* 2 - Unknown<br>* 3 - Passed<br>* 4 - Failed |
| HMDADenialReason4 | Enum.DenialReason | HMDA denial reason 4<br><br>* 0 - NotAssigned<br>* 1 - DebtToIncomeRatio<br>* 2 - EmploymentHistory<br>* 3 - CreditHistory<br>* 4 - Collateral<br>* 5 - InsufficientCash<br>* 6 - UnverifiableInformation<br>* 7 - CreditApplicationIncomplete<br>* 8 - MortgageInsuranceDenied<br>* 9 - Other |
| HMDALoanPurpose2 | Enum.HMDALoanPurpose2 | The HMDA loan purpose for loans reported to HMDA in 2018 or later.<br><br>* 0 - NotAssigned<br>* 1 - HomePurchase<br>* 2 - HomeImprovement<br>* 4 - Other<br>* 5 - NotApplicable<br>* 31 - Refinancing<br>* 32 - CashOutRefinancing |
| MIPFFFinancingCalcOption | Enum.MIPFFFinancingCalcOption | Determines whether the recommended values for Loan With MIP/FF and MIP/FF Paid In Cash should be calculated with the MIP/FF financed or not financed.<br><br>* 0 - Financed<br>* 1 - NotFinanced |
| ARMConversionStatus | Enum.ULDDARMConversionStatus | ULDD Conversion Status for ARM loans.<br><br>* 0 - NotAssigned<br>* 1 - Active<br>* 2 - Exercised<br>* 3 - Expired |
| RefiTypeURLAOV | Enum.RefiTypeURLA | Override value for the Refinance Type on the URLA<br><br>* 0 - NotAssigned<br>* 1 - NoCashOut<br>* 2 - LimitedCashOut<br>* 3 - CashOut |
| RefiProgramOV | Enum.RefiProgram | Override value for the Refinance Program on the URLA<br><br>* 0 - NotAssigned<br>* 1 - FullDocumentation<br>* 2 - InterestRateReduction<br>* 3 - StreamlinedWithoutAppraisal<br>* 4 - StreamlinedWithAppraisal<br>* 5 - Simple<br>* 6 - _203K<br>* 7 - RateTerm<br>* 20 - Other<br>* 21 - Blank |
| RefiProgramOther | String(20) | Description of the Refinance Program when Other is selected. |
| LTVCalcMethodOV | Enum.LTVCalcMethodOV | Override value for the LTV Calculation Method. When not overridden, the value comes from the loan program.<br><br>* 0 - NotAssigned<br>* 1 - Standard<br>* 2 - Rehab<br>* 3 - AppraisedValue |
| QMAPR | NullableCurrency | The QM APR for calculating the APOR Rate Spread when the ATR Assessment Method is QM - General v2. Reference 1026.43(b)(4) and 1026.43(e)(2)(vi) |
| ComparisonLoanOptions | Enum.ComparisonLoanOptions | Options that indicate how the loan comparison and other sales tools forms calculate various amounts.<br><br>* 0 - None<br>* 1 - CustomizeSubFi<br>* 2 - CustomizeCredits |
| HELOCDrawFee | NullableCurrency | The amount charged by the creditor for making a draw against the HELOC. |
| BuydownTreatment | Enum.BuydownTreatment | Indicates whether the buydown is treated as a step rate or a fixed rate on disclosures.<br><br>* 0 - StepRate<br>* 1 - NoAdjustments |

### [](#TOP)ClosingCost

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| CCID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| LoanID | NullableInteger |     |
| HUDLineNo | Enum.HUDCCLineNo | * 0 - NotAssigned<br>* 801 - _801<br>* 802 - _802<br>* 803 - _803<br>* 804 - _804<br>* 805 - _805<br>* 806 - _806<br>* 807 - _807<br>* 808 - _808<br>* 809 - _809<br>* 810 - _810<br>* 811 - _811<br>* 812 - _812<br>* 813 - _813<br>* 814 - _814<br>* 815 - _815<br>* 816 - _816<br>* 817 - _817<br>* 818 - _818<br>* 819 - _819<br>* 820 - _820<br>* 821 - _821<br>* 822 - _822<br>* 823 - _823<br>* 824 - _824<br>* 825 - _825<br>* 826 - _826<br>* 827 - _827<br>* 828 - _828<br>* 829 - _829<br>* 830 - _830<br>* 831 - _831<br>* 832 - _832<br>* 833 - _833<br>* 834 - _834<br>* 835 - _835<br>* 836 - _836<br>* 837 - _837<br>* 838 - _838<br>* 839 - _839<br>* 840 - _840<br>* 841 - _841<br>* 842 - _842<br>* 843 - _843<br>* 844 - _844<br>* 845 - _845<br>* 846 - _846<br>* 847 - _847<br>* 848 - _848<br>* 849 - _849<br>* 850 - _850<br>* 851 - _851<br>* 852 - _852<br>* 853 - _853<br>* 854 - _854<br>* 855 - _855<br>* 856 - _856<br>* 857 - _857<br>* 858 - _858<br>* 859 - _859<br>* 860 - _860<br>* 861 - _861<br>* 862 - _862<br>* 863 - _863<br>* 864 - _864<br>* 865 - _865<br>* 866 - _866<br>* 867 - _867<br>* 868 - _868<br>* 869 - _869<br>* 870 - _870<br>* 871 - _871<br>* 872 - _872<br>* 873 - _873<br>* 874 - _874<br>* 875 - _875<br>* 876 - _876<br>* 877 - _877<br>* 878 - _878<br>* 879 - _879<br>* 880 - _880<br>* 881 - _881<br>* 882 - _882<br>* 883 - _883<br>* 884 - _884<br>* 885 - _885<br>* 886 - _886<br>* 887 - _887<br>* 888 - _888<br>* 889 - _889<br>* 890 - _890<br>* 1101 - _1101<br>* 1102 - _1102<br>* 1103 - _1103<br>* 1104 - _1104<br>* 1105 - _1105<br>* 1106 - _1106<br>* 1107 - _1107<br>* 1108 - _1108<br>* 1109 - _1109<br>* 1110 - _1110<br>* 1111 - _1111<br>* 1112 - _1112<br>* 1113 - _1113<br>* 1114 - _1114<br>* 1115 - _1115<br>* 1116 - _1116<br>* 1117 - _1117<br>* 1118 - _1118<br>* 1119 - _1119<br>* 1120 - _1120<br>* 1121 - _1121<br>* 1122 - _1122<br>* 1123 - _1123<br>* 1124 - _1124<br>* 1125 - _1125<br>* 1126 - _1126<br>* 1127 - _1127<br>* 1128 - _1128<br>* 1129 - _1129<br>* 1130 - _1130<br>* 1131 - _1131<br>* 1132 - _1132<br>* 1133 - _1133<br>* 1134 - _1134<br>* 1135 - _1135<br>* 1201 - _1201<br>* 1202 - _1202<br>* 1203 - _1203<br>* 1204 - _1204<br>* 1205 - _1205<br>* 1206 - _1206<br>* 1207 - _1207<br>* 1208 - _1208<br>* 1209 - _1209<br>* 1210 - _1210<br>* 1211 - _1211<br>* 1212 - _1212<br>* 1213 - _1213<br>* 1214 - _1214<br>* 1215 - _1215<br>* 1301 - _1301<br>* 1302 - _1302<br>* 1303 - _1303<br>* 1304 - _1304<br>* 1305 - _1305<br>* 1306 - _1306<br>* 1307 - _1307<br>* 1308 - _1308<br>* 1309 - _1309<br>* 1310 - _1310<br>* 1311 - _1311<br>* 1312 - _1312<br>* 1313 - _1313<br>* 1314 - _1314<br>* 1315 - _1315<br>* 1316 - _1316<br>* 1317 - _1317<br>* 1318 - _1318<br>* 1319 - _1319<br>* 1320 - _1320<br>* 1321 - _1321<br>* 1322 - _1322<br>* 1323 - _1323<br>* 1324 - _1324<br>* 1325 - _1325<br>* 1326 - _1326<br>* 1327 - _1327<br>* 1328 - _1328<br>* 1329 - _1329<br>* 1330 - _1330<br>* 1331 - _1331<br>* 1332 - _1332<br>* 1333 - _1333<br>* 1334 - _1334<br>* 1335 - _1335 |
| PPFC | boolean |     |
| Points | NullableDouble |     |
| Name | String(50) |     |
| BorrowerAmount | NullableCurrency | Amount Paid by Borrower |
| SellerAmount | NullableCurrency | Amount Paid by Others (Seller or Lender) |
| POC | boolean | POC |
| IsPaidToBroker | Boolean | This field is no longer in use. Use PaidToType instead. Indicates whether or not the amount is paid to the broker. |
| PaidToBrokerSplit | NullableCurrency | This field is no longer in use. The portion of the closing cost which was paid to broker when the amount is split between the broker and others. |
| NotCounted | Boolean | If checked then the value is not counted in the closing cost totals and the APR calculation. |
| PaidToName | String(50) | The name of the party to which the fee is paid. |
| ClosingCostType | Enum.ClosingCostType | The type of fee associated with this closing cost.<br><br>* 0 - NotAssigned<br>* 1 - _203KDiscountOnRepairs<br>* 2 - _203KPermits<br>* 3 - _203KArchitecturalAndEngineeringFee<br>* 4 - _203KInspectionFee<br>* 5 - _203KSupplementalOriginationFee<br>* 6 - _203KConsultantFee<br>* 7 - _203KTitleUpdate<br>* 8 - AbstractOrTitleSearchFee<br>* 9 - AmortizationFee<br>* 10 - ApplicationFee<br>* 11 - AppraisalFee<br>* 12 - AssignmentFee<br>* 13 - AssignmentRecordingFee<br>* 14 - AssumptionFee<br>* 15 - AttorneyFee<br>* 16 - BondReviewFee<br>* 17 - CityCountyDeedTaxStampFee<br>* 18 - CityCountyMortgageTaxStampFee<br>* 19 - CLOAccessFee<br>* 20 - CommitmentFee<br>* 21 - CopyFaxFee<br>* 22 - CourierFee<br>* 23 - CreditReportFee<br>* 24 - DeedRecordingFee<br>* 25 - DocumentPreparationFee<br>* 26 - DocumentaryStampFee<br>* 27 - EscrowWaiverFee<br>* 28 - FloodCertification<br>* 29 - GeneralCounselFee<br>* 30 - InspectionFee<br>* 31 - LoanDiscountPoints<br>* 32 - LoanOriginationFee<br>* 33 - ModificationFee<br>* 34 - MortgageBrokerFee<br>* 35 - MortgageRecordingFee<br>* 36 - MunicipalLienCertificateFee<br>* 37 - MunicipalLienCertificateRecordingFee<br>* 38 - NewLoanAdministrationFee<br>* 39 - NotaryFee<br>* 40 - Other<br>* 41 - PestInspectionFee<br>* 42 - ProcessingFee<br>* 43 - RedrawFee<br>* 44 - RealEstateCommission<br>* 45 - ReinspectionFee<br>* 46 - ReleaseRecordingFee<br>* 47 - RuralHousingFee<br>* 48 - SettlementOrClosingFee<br>* 49 - StateDeedTaxStampFee<br>* 50 - StateMortgageTaxStampFee<br>* 51 - SurveyFee<br>* 52 - TaxRelatedServiceFee<br>* 53 - TitleExaminationFee<br>* 54 - TitleInsuranceBinderFee<br>* 55 - TitleInsuranceFee<br>* 56 - UnderwritingFee<br>* 57 - AppraisalDeskReviewFee<br>* 58 - AppraisalFieldReviewFee<br>* 59 - AssignmentEndorsementFee<br>* 60 - AttorneyFeeOther<br>* 61 - BankruptcyMonitoringFee<br>* 62 - BondFee<br>* 63 - CertificationFee<br>* 64 - ClosingProtectionLetterFee<br>* 65 - ComplianceAuditQualityControlFee<br>* 66 - DebtCancellationFee<br>* 67 - ElectronicDocumentDeliveryFee<br>* 68 - EscrowServiceFee<br>* 69 - FloodCertificationInitialFee<br>* 70 - FloodCertificationLifeOfLoanFee<br>* 71 - FundingWireOrDisbursementFee<br>* 72 - HELOCAnnualFee<br>* 73 - InspectionFeePostClosing<br>* 74 - InspectionFeePriorToClosing<br>* 75 - IntangibleTax<br>* 76 - MERSRegistrationFee<br>* 77 - MortgageInsuranceApplicationFee<br>* 78 - PayoffRequestFee<br>* 79 - RateLockFee<br>* 80 - ReconveyanceFee<br>* 81 - RecordingServiceFee<br>* 82 - SigningAgentFee<br>* 83 - SubescrowFee<br>* 84 - SubordinationFee<br>* 85 - SubordinationRecordingFee<br>* 86 - TieInFee<br>* 87 - TitleCourierFee<br>* 88 - TitleDocumentPreparationFee<br>* 89 - TitleEndorsementFee<br>* 90 - WarehousingFee<br>* 91 - WireTransferFee<br>* 92 - AccidentInsurancePremium<br>* 93 - CreditLifeInsurancePremium<br>* 94 - CreditPropertyInsurancePremium<br>* 95 - HealthInsurancePremium<br>* 96 - HighCostMortgagePreLoanCounselingFee<br>* 97 - LLPAFee<br>* 98 - LossOfIncomeInsurancePremium<br>* 99 - PrepaymentPenalty<br>* 100 - RealEstateCommissionBuyersBroker<br>* 101 - RealEstateCommissionSellersBroker |
| _TotalAmount | NullableCurrency |     |
| _PaidToBroker | NullableCurrency |     |
| _PaidToOthers | NullableCurrency |     |
| PaidByOtherType | Enum.PaidByOtherType | Indicates who is paying the amount in the paid-by-others column<br><br>* 0 - Seller<br>* 1 - Lender<br>* 2 - ThirdParty<br>* 3 - Builder<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 7 - NonParentRelative<br>* 8 - Parent<br>* 9 - RealEstateAgent<br>* 10 - StateAgency<br>* 11 - UnrelatedFriend |
| GFEDisclosedAmount | NullableCurrency | The amount disclosed on the most recent GFE |
| ProviderChosenByBorrower | Boolean | Indicates whether or not the provider was chosen by the borrower. |
| HUDLineNo2010 | Enum.HUDCCLineNo2010 | HUD line number for the 2010 version of the HUD1 settlement statement<br><br>* 801 - _801<br>* 802 - _802<br>* 804 - _804<br>* 805 - _805<br>* 806 - _806<br>* 807 - _807<br>* 808 - _808<br>* 809 - _809<br>* 810 - _810<br>* 811 - _811<br>* 812 - _812<br>* 813 - _813<br>* 814 - _814<br>* 815 - _815<br>* 816 - _816<br>* 817 - _817<br>* 818 - _818<br>* 819 - _819<br>* 820 - _820<br>* 821 - _821<br>* 822 - _822<br>* 823 - _823<br>* 824 - _824<br>* 825 - _825<br>* 826 - _826<br>* 827 - _827<br>* 828 - _828<br>* 829 - _829<br>* 830 - _830<br>* 831 - _831<br>* 832 - _832<br>* 833 - _833<br>* 834 - _834<br>* 835 - _835<br>* 836 - _836<br>* 837 - _837<br>* 838 - _838<br>* 839 - _839<br>* 840 - _840<br>* 841 - _841<br>* 842 - _842<br>* 843 - _843<br>* 844 - _844<br>* 845 - _845<br>* 846 - _846<br>* 847 - _847<br>* 848 - _848<br>* 849 - _849<br>* 850 - _850<br>* 851 - _851<br>* 852 - _852<br>* 853 - _853<br>* 854 - _854<br>* 855 - _855<br>* 856 - _856<br>* 857 - _857<br>* 858 - _858<br>* 859 - _859<br>* 860 - _860<br>* 861 - _861<br>* 862 - _862<br>* 863 - _863<br>* 864 - _864<br>* 865 - _865<br>* 866 - _866<br>* 867 - _867<br>* 868 - _868<br>* 869 - _869<br>* 870 - _870<br>* 871 - _871<br>* 872 - _872<br>* 873 - _873<br>* 874 - _874<br>* 875 - _875<br>* 876 - _876<br>* 877 - _877<br>* 878 - _878<br>* 879 - _879<br>* 880 - _880<br>* 881 - _881<br>* 882 - _882<br>* 883 - _883<br>* 884 - _884<br>* 885 - _885<br>* 886 - _886<br>* 887 - _887<br>* 888 - _888<br>* 889 - _889<br>* 890 - _890<br>* 1101 - _1101<br>* 1102 - _1102<br>* 1103 - _1103<br>* 1104 - _1104<br>* 1109 - _1109<br>* 1110 - _1110<br>* 1111 - _1111<br>* 1112 - _1112<br>* 1113 - _1113<br>* 1114 - _1114<br>* 1115 - _1115<br>* 1116 - _1116<br>* 1117 - _1117<br>* 1118 - _1118<br>* 1119 - _1119<br>* 1120 - _1120<br>* 1121 - _1121<br>* 1122 - _1122<br>* 1123 - _1123<br>* 1124 - _1124<br>* 1125 - _1125<br>* 1126 - _1126<br>* 1127 - _1127<br>* 1128 - _1128<br>* 1129 - _1129<br>* 1130 - _1130<br>* 1131 - _1131<br>* 1132 - _1132<br>* 1133 - _1133<br>* 1134 - _1134<br>* 1135 - _1135<br>* 1136 - _1136<br>* 1137 - _1137<br>* 1138 - _1138<br>* 1139 - _1139<br>* 1140 - _1140<br>* 1201 - _1201<br>* 1202 - _1202<br>* 1203 - _1203<br>* 1204 - _1204<br>* 1205 - _1205<br>* 1206 - _1206<br>* 1207 - _1207<br>* 1208 - _1208<br>* 1209 - _1209<br>* 1210 - _1210<br>* 1211 - _1211<br>* 1212 - _1212<br>* 1213 - _1213<br>* 1214 - _1214<br>* 1215 - _1215<br>* 1302 - _1302<br>* 1303 - _1303<br>* 1304 - _1304<br>* 1305 - _1305<br>* 1306 - _1306<br>* 1307 - _1307<br>* 1308 - _1308<br>* 1309 - _1309<br>* 1310 - _1310<br>* 1311 - _1311<br>* 1312 - _1312<br>* 1313 - _1313<br>* 1314 - _1314<br>* 1315 - _1315<br>* 1316 - _1316<br>* 1317 - _1317<br>* 1318 - _1318<br>* 1319 - _1319<br>* 1320 - _1320<br>* 1321 - _1321<br>* 1322 - _1322<br>* 1323 - _1323<br>* 1324 - _1324<br>* 1325 - _1325<br>* 1326 - _1326<br>* 1327 - _1327<br>* 1328 - _1328<br>* 1329 - _1329<br>* 1330 - _1330<br>* 1331 - _1331<br>* 1332 - _1332<br>* 1333 - _1333<br>* 1334 - _1334<br>* 1335 - _1335<br>* 1336 - _1336<br>* 1337 - _1337 |
| GFEBlock | Enum.GFEBlock | Indicates which block of the GFE the closing cost should be placed within.<br><br>* 1 - OurOriginationCharge<br>* 2 - CreditOrChargeForIntRate<br>* 3 - ServicesLenderSelected<br>* 4 - TitleServices<br>* 5 - OwnersTitleInsurance<br>* 6 - ServicesYouCanShopFor<br>* 7 - RecordingCharges<br>* 8 - TransferTaxes<br>* 99 - None |
| ResponsiblePartyType | Enum.ResponsiblePartyType | Indicates who is responsible for paying the fee<br><br>* 0 - Buyer<br>* 1 - Seller |
| PaidToType | Enum.PaidToType | Indicates the party to which the fee is being paid<br><br>* 1 - Lender<br>* 2 - Broker<br>* 3 - Investor<br>* 4 - Other<br>* 5 - AffiliateOfLender<br>* 6 - AffiliateOfBroker |
| NetFromWire | Boolean | Indicates whether or not the fee should be netted from the wire |
| _GLCode | String(20) | General Ledger Code |
| Financed | Boolean | Indicates whether the closing cost is financed into the loan amount.&lt;BR&gt;Default=False |
| PointsAndFeesAmountOV | NullableCurrency | An override for the amount to be included in the points and fees calculation. |
| TRIDBlock | Enum.TRIDBlock | Indicates which block of the TRID the closing cost should be placed within.<br><br>* 1 - OriginationCharges<br>* 2 - ServicesYouCannotShopFor<br>* 3 - ServicesYouCanShopFor<br>* 4 - RecordingFeesAndOtherTaxes<br>* 5 - TransferTaxes<br>* 6 - Other<br>* 7 - PostClosing<br>* 99 - None |
| IsOptionalOV | Enum.YesNoNA | Override value Indicating whether the item is displayed as optional on the Loan Estimate and Closing Disclosure.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GFEBaselineAmount | NullableCurrency | This field is no longer used. |
| BorrowerPOCAmountOV | NullableCurrency | Override value for the amount paid outside of closing by the borrower |
| SellerPOCAmountOV | NullableCurrency | Override value for the amount paid outside of closing by others (seller or lender) |

### [](#TOP)PrepaidItem

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| PrepaidItemID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| LoanID | NullableInteger |     |
| PrepaidItemType | Enum.PrepaidItemType | * 1 - HazardInsurance<br>* 2 - MortgageInsurance<br>* 3 - Line1003<br>* 4 - PropertyTaxes<br>* 5 - HOD<br>* 6 - FloodInsurance<br>* 7 - Line1007 |
| NameOV | string(50) | Name |
| Payment | NullableCurrency | Monthly payment |
| MonthsInReserve | NullableInteger | Number of months in reserve |
| MonthsInAdvance | NullableInteger | Number of months paid in advance |
| PremiumPOC | boolean | Indicates whether or not the premium is paid outside of closing |
| ReservesPOC | Boolean | Indicates whether or not the reserves are paid outside of closing |
| IncludeInPITI | boolean | Indicates whether the field Line1003Payment is included in the PITI calculation |
| ReservesPBSDesired | NullableCurrency | Amount paid in reserves paid by others (seller or lender). |
| PremiumPBSDesired | NullableCurrency | Amount of the premium paid by others (seller or lender) |
| DisbursementSched | Enum.EscrowDisbursementSched | * 0 - NotAssigned<br>* 1 - NotEscrowed<br>* 2 - Monthly<br>* 3 - Quarterly<br>* 4 - SemiAnnually<br>* 5 - Annually<br>* 6 - Other<br>* 7 - List |
| DisbursementStartPur | Enum.EscrowDisbursementStart | Starting month of disbursements for purchase loans<br><br>* 0 - NotAssigned<br>* 1 - January<br>* 2 - February<br>* 3 - March<br>* 4 - April<br>* 5 - May<br>* 6 - June<br>* 7 - July<br>* 8 - August<br>* 9 - September<br>* 10 - October<br>* 11 - November<br>* 12 - December<br>* 13 - ClosingDate |
| DisbursementStartRefi | Enum.EscrowDisbursementStart | Starting month of disbursements for refinance loans<br><br>* 0 - NotAssigned<br>* 1 - January<br>* 2 - February<br>* 3 - March<br>* 4 - April<br>* 5 - May<br>* 6 - June<br>* 7 - July<br>* 8 - August<br>* 9 - September<br>* 10 - October<br>* 11 - November<br>* 12 - December<br>* 13 - ClosingDate |
| DisbursementPeriods | String(26) |     |
| CushionOV | NullableInteger |     |
| PrequalPaymentOV | NullableCurrency |     |
| ReservesOV | NullableCurrency | Override values for the total reserves calculation |
| PremiumOV | NullableCurrency | Override value for the premium |
| _ReservesPBA | NullableCurrency |     |
| _ReservesPBS | NullableCurrency |     |
| _Premium | NullableCurrency |     |
| _PremiumPBA | NullableCurrency |     |
| _PremiumPBS | NullableCurrency |     |
| _Cushion | Integer |     |
| _CushionDollar | NullableCurrency |     |
| ReservesPaidByOtherType | Enum.PaidByOtherType | Indicates who is paying the reserves amount in the paid-by-others column<br><br>* 0 - Seller<br>* 1 - Lender<br>* 2 - ThirdParty<br>* 3 - Builder<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 7 - NonParentRelative<br>* 8 - Parent<br>* 9 - RealEstateAgent<br>* 10 - StateAgency<br>* 11 - UnrelatedFriend |
| PremiumPaidByOtherType | Enum.PaidByOtherType | Indicates who is paying the premium amount in the paid-by-others column<br><br>* 0 - Seller<br>* 1 - Lender<br>* 2 - ThirdParty<br>* 3 - Builder<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 7 - NonParentRelative<br>* 8 - Parent<br>* 9 - RealEstateAgent<br>* 10 - StateAgency<br>* 11 - UnrelatedFriend |
| DisbursementStartYear | NullableInteger | The year in which the first disbursement will be made. If not supplied, the year is calculated based on the first payment date. |
| MISMOPrepaidItemTypeOV | Enum.MISMOPrepaidItemType | Override value for the prepaid item type as defined by MISMO<br><br>* 0 - NotAssigned<br>* 1 - Assessment<br>* 2 - CityPropertyTax<br>* 3 - CountyPropertyTax<br>* 4 - EarthquakeInsurance<br>* 5 - FloodInsurance<br>* 6 - HazardInsurance<br>* 7 - MortgageInsurance<br>* 8 - Other<br>* 9 - SchoolPropertyTax<br>* 10 - TownPropertyTax<br>* 11 - VillagePropertyTax<br>* 12 - WindstormInsurance |
| PremiumGFEDisclosedAmount | NullableCurrency | The amount of the premium disclosed on the LE/GFE. |
| PremiumNetFromWire | Boolean | Indicates if the premium amount is netted from the wire. |
| QMATRNotes | String(500) | Notes for QM/ATR |
| PremiumPointsAndFeesAmountOV | NullableCurrency | Override for the amount of the premium that is included in the points and fees test. |
| ReservesPointsAndFeesAmountOV | NullableCurrency | Override for the amount of the reserves that is included in the points and fees test. |
| PremiumPaidToType | Enum.PaidToType | Indicates the party to which the premium is paid.<br><br>* 1 - Lender<br>* 2 - Broker<br>* 3 - Investor<br>* 4 - Other<br>* 5 - AffiliateOfLender<br>* 6 - AffiliateOfBroker |
| PeriodicPaymentAmount | NullableCurrency | Exact periodic payment amount for annual, semi-annual or quarterly payments. |
| _YearlyPayment | NullableCurrency | Yearly payment amount |
| PaidToNameOV | String(50) | Override value for the name of the company to which the fee is paid. |
| ReservesGFEDisclosedAmount | NullableCurrency | The amount of reserves disclosed on the loan estimate. |
| DisbursementList | String(2000) | A bar and tilde delimited string containing the list of escrow disbursement dates and amounts when the disbursement schedule is List. |

### [](#TOP)HELOCPeriod

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| HELOCPeriodID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| LoanID | NullableInteger |     |
| HELOCPeriodType | Enum.HELOCPeriodType | * 0 - InterestOnly<br>* 1 - Amortizing<br>* 2 - PercentOfBalance |
| Term | NullableInteger |     |
| Rate | NullableDouble |     |
| PaymentPercent | NullableDouble |     |

### [](#TOP)DocPackage

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| DocPackageID | Integer | Primary Key |
| FileDataID | Integer | Foreign key |
| VendorType | Enum.ESignVendorType | Identifies the E-Sign vendor<br><br>* 0 - NotAssigned<br>* 1 - ESignLive<br>* 2 - IDS<br>* 3 - DocuTech<br>* 4 - DocMagic |
| VendorPackageID | String(50) | The package ID assigned by the E-Sign vendor |
| Status | Enum.DocPackageStatus | The status of the e-sign package<br><br>* 0 - None<br>* 1 - SigningPending<br>* 2 - PartiallySigned<br>* 3 - FullyConsented<br>* 4 - Signed<br>* 6 - Archived<br>* 7 - Expired<br>* 8 - Inactive<br>* 9 - Declined<br>* 10 - Sent<br>* 11 - Draft<br>* 12 - OptedOut<br>* 13 - Completed<br>* 14 - eDelivered |
| CreatedDateTime | DateTime | The date and time the package was created |
| ExpirationDateTime | NullableDateTime | The date and time the package expires |
| CancelledDateTime | NullableDateTime | The date and time the package was cancelled by the sender |
| ComplianceDeliveryDeadline | NullableDate | The date by which delivery must occur to meet regulations. For the initial LE this date is three days after the application date. For disclosures required because of a CoC, this date is three days after the CoC change date. |
| EDeliveryDeadline | NullableDate | For disclosures that are e-delivered, the date by delivery must occur before the disclosures appear in a queue to be mailed. |
| PackageContents | Enum.DocPackageContents | Identifies the type of documents in the package<br><br>* 0 - None<br>* 1 - LoanEstimate<br>* 4 - LoanApplication<br>* 8 - ClosingDisclosure<br>* 16 - NoticeOfIntentToProceed |
| PackageName | String(100) | The name of the package |
| PackageTypeName | String(50) | The name of the package type |
| DeliveryMethod | Enum.DocPackageDeliveryMethod | Indicates how the package is delivered<br><br>* 0 - NotAssigned<br>* 1 - ESign<br>* 2 - ESignAndMail<br>* 3 - ESignOrMail<br>* 4 - EDelivery<br>* 5 - EDeliveryAndMail<br>* 6 - EDeliveryOrMail<br>* 7 - Mail<br>* 8 - SelfDisclosed |
| DeliveryNotRequired | Boolean | Indicates if delivery of the document is not required, for instance if the package was cancelled. |
| _DeliveryDate | NullableDate | The date the document package was delivered |
| _ReceivedDate | NullableDate | The date the document package was received |
| DocumentTypeCode | String(20) | The Document Type Code of the primary PDF in the package. If the package contains multiple document types then this value will be blank. |
| SenderUserName | String(50) | The user name of the user that sent the package |

### [](#TOP)DOT

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| DOTID | integer | DOT ID |
| FileDataID | Integer | ID of the Loan File |
| RefiDebtsToBePaidOffOV | NullableCurrency | Refinance Debts To Be Paid Off Override Value - Details of Transaction Line D |
| EstPrepaidsOV | NullableCurrency | Estimated Prepaids Override Value - Details of Transaction Line E |
| EstClosingCostsOV | NullableCurrency | Estimated Closing Costs Override Value - Details of Transaction Line F for the pre-2021 URLA |
| MIPFFTotalOV | NullableCurrency | PMI, MIP, Funding Fee, total amount. Override Value - Details of Transaction Line G |
| DiscountOV | NullableCurrency | Discount Override Value - Details of Transaction Line H for the pre-2021 URLA |
| TotalCostsOV | NullableCurrency | Override Value for - Details of Transaction Line I |
| ClosingCostsPaidBySellerOV | NullableCurrency | Closing Costs Paid By Seller Override Value - Details of Transaction Line K |
| CashFromToBorrowerOV | NullableCurrency | Cash From/To Borrower Override Value - Details of Transaction Line P |
| AppDepositAmount | NullableCurrency | Application Deposit Amount |
| AppDepositHeldBy | string(50) | Application Deposit Held By |
| EarnestMoneyAmount | NullableCurrency | Earnest Money Amount |
| EarnestMoneyHeldBy | string(50) | Earnest Money Held By |
| ExcludeSubFi | boolean | Indicates whether subordinate financing should be excluded from the details of transaction |
| _OtherCreditAmount5 | NullableCurrency |     |
| _OtherCreditDesc5 | String(50) |     |
| _OtherCreditDesc6 | String(50) |     |
| _OtherCreditAmount6 | NullableCurrency |     |
| _LineA | NullableCurrency |     |
| _LineB | NullableCurrency |     |
| _LineC | NullableCurrency |     |
| _LineD | NullableCurrency |     |
| _LineE | NullableCurrency |     |
| _LineF | NullableCurrency |     |
| _LineG | NullableCurrency |     |
| _LineH | NullableCurrency |     |
| _LineI | NullableCurrency |     |
| _LineJ | NullableCurrency |     |
| _LineK | NullableCurrency |     |
| _LineL1 | NullableCurrency |     |
| _LineL2 | NullableCurrency |     |
| _LineL3 | NullableCurrency |     |
| _LineL4 | NullableCurrency |     |
| _LineM | NullableCurrency |     |
| _LineN | NullableCurrency |     |
| _LineO | NullableCurrency |     |
| _LineP | NullableCurrency |     |
| _CashFromToBorrower | NullableCurrency | Cash From To Borrower |
| LECashToCloseAdjustmentAmount | NullableCurrency | An adjustment amount for the LE cash to close Adjustments and Other Credits. |
| LECashToCloseAdjustmentDesc | String(50) | The description of the adjustment amount for the LE cash to close Adjustments and Other Credits. |
| RefiSubPropLoansToBePaidOffOV | NullableCurrency | Override value for 'For Refinance: Balance of Mortgage Loans on the Property to be paid off in the Transaction' on the 2021 URLA |
| OtherDebtsToBePaidOffOV | NullableCurrency | Override value for 'Credit Cards and Other Debts Paid Off' on the 2021 URLA |
| BorrowerClosingCostsOV | NullableCurrency | Override value for 'Borrower Closing Costs (including Prepaid and Initial Escrow Payments)' on the 2021 URLA |
| DiscountPointsOV | NullableCurrency | Override value for 'Discount Points' on the 2021 URLA |
| EarnestMoneyOmitFromAUS | Boolean | Omit earnest monet from AUS requests.&lt;BR&gt;Default=False |

### [](#TOP)Fannie

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FannieID | integer | Fannie Record ID |
| FileDataID | Integer | ID of the Loan File |
| CaseFileID | String(30) | Case File ID |
| CommunityLendingProduct | Enum.FannieCLProduct | Community Lending Product (LMD-030)<br><br>* 0 - NotAssigned<br>* 4 - MyCommunityMortgage<br>* 6 - HFAAffordableAdvantage<br>* 7 - HFAPreferred<br>* 8 - HomeReady |
| CommSeconds | Enum.YesNoNA | Community Seconds Indicator (LMD-050)<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| NeighborsElig | Enum.YesNoNA | Fannie Neighbors Eligible (LMD-040)<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| MSA | String(40) | Metropolitan Statistical Area or County (LMD-020) |
| Recommendation | String(50) | Underwriting recommendation |
| InstitutionID | String(6) | Fannie Mae Institution ID |
| CommunitySecondsRepaymentSchedule | Enum.CommunitySecondsType | Community Seconds Repayment Structure LMD-035<br><br>* 0 - NotAssigned<br>* 1 - AnyPaymentRequiredWithinFirstFiveYears<br>* 2 - PaymentsDeferredFiveOrMoreYearsFullyForgiven<br>* 3 - PaymentsDeferredFiveOrMoreYearsNotFullyForgiven |
| UnderwritingRunDate | NullableDate |     |
| SellerNumber | String(50) | Number assigned by Fannie Mae to identify the seller. |
| CreditAgencyCode | Integer | Indicates the credit agency to use for this loan file.&lt;BR&gt;Default=0 |
| RefiOfConstructionLoan | Boolean | Refi of Construction Loan&lt;BR&gt;Default=False |
| HomebuyerEducationType | Enum.HomebuyerEducationType | Homebuyer education type<br><br>* 0 - NotAssigned<br>* 1 - HomeBuyerEducationComplete<br>* 2 - OneOnOneCounselingComplete |
| ProductDescription | Enum.FannieProductDescription | Identifies the Fannie Mae product description.<br><br>* 0 - NotAssigned<br>* 1 - StandardLCOR<br>* 2 - AffordableLTV<br>* 60 - Other |
| EnergyImpAmount | NullableCurrency | Energy improvement amount for Fannie export. |
| PACELoanPayoffAmount | NullableCurrency | PACE loan payoff amount for Fannie export. |
| ProductDescriptionOther | String(50) | Other product feature description on the URLA. Used when ProductDescription is Other. |
| IsSellerProvidingBelowMarketSubFi | Boolean | Indicates whether the seller is providing below market subordinate financing&lt;BR&gt;Default=False |
| SubmissionType | Enum.FannieSubmissionType | Fannie DO summission type.<br><br>* 0 - NotAssigned<br>* 1 - Preliminary<br>* 2 - Interim<br>* 3 - Final |
| LenderInstitutionIdentifier | String(20) | Lender institution identifier associated with last DO XIS submission. |
| PIWType | Enum.FanniePIWType | Appraisal waiver type.<br><br>* 0 - NotAssigned<br>* 1 - Eligible<br>* 2 - NotEligible |
| CUScore | NullableDouble | Fannie Mae CU Score |
| LSCCaseFileID | String(20) | Case File ID returned from LoanScorecard request. |
| LSCRecommendation | String(20) | Recommendation returned from LoanScorecard request. |
| DesktopAppraisalOption | Enum.FannieDesktopAppraisalOption | Desktop appraisal option for Fannie.<br><br>* 0 - NotAssigned<br>* 1 - Eligible<br>* 2 - PreviouslyEligible<br>* 3 - NoLongerEligible |
| CreditAgencyCodeSoftPull | Integer | Indicates the credit agency to use for soft pulls for this loan file.&lt;BR&gt;Default=0 |
| _UnderwritingType | Enum.FannieUnderwritingType | Type of last DU underwriting request.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - EarlyAssessment<br>* 2 - FullSubmission |

### [](#TOP)Freddie

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FreddieID | integer | Freddie Mac Id |
| FileDataID | Integer | ID of the Loan File |
| AffordableProgramId | Enum.AffordableProductType | FMAC Affordable Program Identifier&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - AffordableGold5<br>* 2 - AffordableGold97 |
| OfferingId | Enum.OfferingIdentifier | FMAC Offering Identifier&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 210 - Alt97<br>* 241 - HomePossible97<br>* 243 - HomePossibleNHSolution97<br>* 244 - HomePossible3PercCash<br>* 245 - HomePossibleNeighborhoodSolution3PercCash<br>* 250 - HomePossibleAdvantage<br>* 251 - HomePossibleAdvantageForHFAs<br>* 310 - ReliefRefinanceOpenAccess<br>* 320 - EnhancedReliefRefinance<br>* 330 - IncomeBasedDeedRestrictionsSurvive<br>* 331 - IncomeBasedDeedRestrictionsTerminate<br>* 332 - HeritageOne<br>* 900 - CHOICEHome<br>* 901 - CHOICERenovation<br>* 902 - GreenCHOICE<br>* 903 - HomeOne<br>* 904 - RefiPossible<br>* 905 - CommunityLandTrust<br>* 1000 - Other |
| OtherOfferingIdentifier | string(30) | FMAC Offering Identifier Other Description |
| OfferingId2 | Enum.OfferingIdentifier | FMAC Offering Identifier&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 210 - Alt97<br>* 241 - HomePossible97<br>* 243 - HomePossibleNHSolution97<br>* 244 - HomePossible3PercCash<br>* 245 - HomePossibleNeighborhoodSolution3PercCash<br>* 250 - HomePossibleAdvantage<br>* 251 - HomePossibleAdvantageForHFAs<br>* 310 - ReliefRefinanceOpenAccess<br>* 320 - EnhancedReliefRefinance<br>* 330 - IncomeBasedDeedRestrictionsSurvive<br>* 331 - IncomeBasedDeedRestrictionsTerminate<br>* 332 - HeritageOne<br>* 900 - CHOICEHome<br>* 901 - CHOICERenovation<br>* 902 - GreenCHOICE<br>* 903 - HomeOne<br>* 904 - RefiPossible<br>* 905 - CommunityLandTrust<br>* 1000 - Other |
| OtherOfferingIdentifier2 | string(30) | FMAC Offering Identifier Other Description |
| OfferingId3 | Enum.OfferingIdentifier | FMAC Offering Identifier&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 210 - Alt97<br>* 241 - HomePossible97<br>* 243 - HomePossibleNHSolution97<br>* 244 - HomePossible3PercCash<br>* 245 - HomePossibleNeighborhoodSolution3PercCash<br>* 250 - HomePossibleAdvantage<br>* 251 - HomePossibleAdvantageForHFAs<br>* 310 - ReliefRefinanceOpenAccess<br>* 320 - EnhancedReliefRefinance<br>* 330 - IncomeBasedDeedRestrictionsSurvive<br>* 331 - IncomeBasedDeedRestrictionsTerminate<br>* 332 - HeritageOne<br>* 900 - CHOICEHome<br>* 901 - CHOICERenovation<br>* 902 - GreenCHOICE<br>* 903 - HomeOne<br>* 904 - RefiPossible<br>* 905 - CommunityLandTrust<br>* 1000 - Other |
| OtherOfferingIdentifier3 | string(30) | FMAC Offering Identifier Other Description |
| LoanDocumentationType | Enum.LoanDocumentationType | FMAC Documentation Type&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - NoDepositVerification<br>* 2 - NoEmploymentOrIncomeVerification<br>* 3 - FullDocumentation |
| BuildingStatusType | Enum.BuildingStatusType | FMAC Building Status Type&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Proposed<br>* 2 - SubstantiallyRehabilitated<br>* 3 - UnderConstruction<br>* 4 - Existing<br>* 5 - AlterationImprovementRepair<br>* 6 - Complete<br>* 7 - Other |
| OriginationProcessingPoint | Enum.CaseStateType | FMAC Case State Type&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Application<br>* 2 - FinalDisposition<br>* 3 - PostClosingQualityControl<br>* 4 - Prequalification<br>* 5 - Underwriting<br>* 6 - Other |
| LoanKeyNumber | string(50) | FMAC Loan Key Number |
| EvaluationStatusType | string(50) | FMAC Loan Transaction Number |
| NumberOfSubmissions | NullableInteger | Number of times submitted |
| EvaluationDate | NullableDateTime | Evaluation Date |
| CreditRiskType | string(50) | Credit Risk Classification Type |
| RepositorySource | string(50) | Credit Score Repository Source |
| EvaluationType | string(50) | Evaluation Type |
| SubmissionDate | NullableDate | Submission Date |
| PurchaseEligibility | string(50) | Purchase Eligibility |
| InitialLTV | NullableCurrency | Initial LTV Calc'ed by LP |
| TransactionNumber | string(50) | Transaction Number Assigned by LP |
| InitialTLTV | NullableCurrency | Initial Total LTV Calc'ed by LP |
| DocumentClassification | string(50) |     |
| RiskGrade | string(10) | Assigned by 3rd party rating agency |
| LossCoverageEstimate | NullableCurrency |     |
| MIDecisioin | string(50) | Insurance Decision |
| CreditScore | NullableInteger | Credit Score |
| CreditRiskComment | string(50) |     |
| RepositoryReason | string(50) |     |
| BuydownContributor | Enum.BuyDownContributor | Freddie Mac Buydown Contributor<br><br>* 0 - NotAssigned<br>* 1 - Seller<br>* 2 - Builder<br>* 3 - Borrower<br>* 4 - LenderPremiumFinanced<br>* 5 - Other<br>* 6 - Parent<br>* 7 - NonParentRelative<br>* 8 - UnrelatedFriend<br>* 9 - Employer |
| SellerNumber | string(50) |     |
| TPONumber | string(50) |     |
| NOTP | string(50) |     |
| ConstructionPurpose | Enum.ConstructionPurposeType | * 0 - NotAssigned<br>* 1 - FREOneClosingConstructionToPermanent<br>* 2 - FRETwoClosingConstructionToPermanent<br>* 3 - FREConstructionCompletedAfterApplication |
| FREReserves | NullableCurrency |     |
| LoanIdentifier | string(50) |     |
| TransactionIdentifier | string(50) |     |
| LenderRegistrationNumber | string(50) |     |
| CreditReferenceNo | String(50) |     |
| NewConstruction | Enum.NewConstructionType | * 0 - NotAssigned<br>* 1 - NewlyBuilt<br>* 2 - ConstructionConversion |
| CPMProjectID | String(50) | CPM Project ID for Freddie 1008. |
| PropertyCategoryType | Enum.AUS_PropertyCategoryType | * 0 - NotAssigned<br>* 1 - Attached<br>* 2 - Church<br>* 3 - CommercialNonResidential<br>* 4 - CommercialResidential<br>* 5 - Detached<br>* 6 - Farm<br>* 7 - HighRise<br>* 8 - LandAndLots<br>* 9 - LowRise<br>* 10 - Manufactured<br>* 11 - ManufacturedMultiWide<br>* 12 - ManufacturedSingleWide<br>* 13 - MobileHome<br>* 14 - Modular<br>* 15 - Other<br>* 16 - SiteBuilt<br>* 17 - Stacked<br>* 18 - TownhouseRowhouse |
| OwnershipType | Enum.AUS_PropertyOwnershipType | * 0 - NotAssigned<br>* 1 - Condominium<br>* 2 - CondominiumHotel<br>* 3 - Cooperative<br>* 4 - Timeshare<br>* 5 - Other |
| OriginationProcessingPointOther | String(50) | Allows user to enter a new Processing Point if 'Other' is selected. |
| PropertyCategoryTypeOther | String(50) |     |
| OwnershipTypeOther | String(50) |     |
| BuydownContributorOther | String(50) |     |
| BuildingStatusTypeOther | String(50) |     |
| OrderMergedCredit | boolean | &lt;BR&gt;Default=false |
| FHABorrowerClosingCosts | NullableCurrency | FHA Borrower Paid Closing Costs. |
| FHAFinancedDiscountPoints | NullableCurrency |     |
| VAResidualIncome | NullableCurrency |     |
| CreditAgencyCode | String(50) | Indicates the Freddie Mac credit agency code to use for this loan file. |
| CreditAffiliateCode | String(50) | Indicates the credit affiliate code to use for this loan file. |
| FREMonthsInReserveOV | NullableInteger | Overrides the FREMonthsInReserve calculated value. |
| AppraisalMethodType | Enum.FREAppraisalMethodType | Freddie appraisal method type.<br><br>* 0 - NotAssigned<br>* 1 - None<br>* 2 - AutomatedValuationModel<br>* 3 - BrokerPriceOpinion<br>* 4 - DriveBy<br>* 5 - EmployeeRelocationCouncil2001<br>* 6 - FNM1004<br>* 7 - FNM1025<br>* 8 - FNM1073<br>* 9 - FNM2055Exterior<br>* 10 - FNM2055InteriorAndExterior<br>* 11 - FNM2065<br>* 12 - FRE2070Exterior<br>* 13 - FRE2070Interior<br>* 14 - FNM2075<br>* 15 - FNM2095Exterior<br>* 16 - FNM2095InteriorAndExterior<br>* 17 - Form261805<br>* 18 - Form268712<br>* 19 - FullAppraisal<br>* 20 - PriorAppraisalUsed<br>* 21 - TaxValuation<br>* 100 - DesktopAppraisal<br>* 101 - Estimation<br>* 102 - FieldReview |
| PIWType | Enum.FreddiePIWType | Appraisal waiver type.<br><br>* 0 - NotAssigned<br>* 1 - Eligible<br>* 2 - NotEligible<br>* 3 - Unavailable |
| LCAScore | NullableDouble | Freddie LCA Score |
| DesktopAppraisalOption | Enum.FreddieDesktopAppraisalOption | Desktop appraisal option for Freddie.<br><br>* 0 - NotAssigned<br>* 1 - Eligible<br>* 2 - PreviouslyEligible<br>* 3 - NoLongerEligible |
| DeedRestrictionTerm | NullableInteger | Term of deed restriction. |
| HFAIdentifier | String(50) | Identifier assigned by Freddie Mac to Housing Finance Agency |
| ADUCount | NullableInteger | The total number of Accessory Dwelling Units on the subject property. |

### [](#TOP)Party

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| PartyID | Integer | Cardex ID |
| FileDataID | Integer | ID of the Loan File |
| CategoryID | Enum.ContactCat | Contact ID<br><br>* 0 - NotAssigned<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 3 - LoanCloser<br>* 4 - Underwriter<br>* 10 - Lender<br>* 11 - MortgageeForInsurance<br>* 12 - FHASponsoringLender<br>* 13 - FHAOriginatingLender<br>* 20 - RealEstateAgent<br>* 21 - ListingAgent<br>* 22 - SellingAgent<br>* 25 - BuilderOrSeller<br>* 26 - Warrantor<br>* 31 - HazardInsuranceCompany<br>* 32 - MortgageInsuranceCompany<br>* 33 - FloodInsuranceCompany<br>* 34 - FloodDeterminationCompany<br>* 40 - TitleCompany<br>* 42 - Appraiser<br>* 44 - EscrowCompany<br>* 46 - SurveyCompany<br>* 48 - CreditBureau<br>* 59 - Attorney<br>* 60 - BorrowerAttorney<br>* 61 - SellerAttorney<br>* 62 - LenderAttorney<br>* 70 - Inspector<br>* 71 - PestInspector<br>* 80 - Creditor<br>* 81 - Bank<br>* 82 - Employer<br>* 83 - Landlord<br>* 84 - LoanSeller<br>* 85 - Investor<br>* 86 - Contractor<br>* 99 - Borrower<br>* 101 - OpenHouseAgent<br>* 102 - OtherUser<br>* 103 - ReferralSource<br>* 104 - HomeOwnersAssoc<br>* 105 - SettlementLocation<br>* 106 - OtherUser2<br>* 107 - OtherUser3<br>* 108 - OtherUser4<br>* 109 - MortgageeForTitle<br>* 110 - Broker<br>* 111 - Appraiser2<br>* 112 - TaxServiceCompany<br>* 113 - HazardInsuranceCompany2<br>* 114 - Trustee<br>* 115 - FHAAgent<br>* 116 - FHAPostClosingMortgageeRep<br>* 117 - FHAMortgageeRep<br>* 501 - OtherParty1<br>* 502 - OtherParty2<br>* 503 - OtherParty3<br>* 504 - OtherParty4<br>* 505 - OtherParty5<br>* 600 - Opener<br>* 601 - DocDrawer<br>* 602 - QualityControl<br>* 603 - Compliance<br>* 604 - Shipper<br>* 605 - LockDesk<br>* 606 - Accounting<br>* 607 - Servicing<br>* 608 - Insuring<br>* 609 - Secondary<br>* 610 - OtherUser5<br>* 611 - OtherUser6<br>* 612 - OtherUser7<br>* 613 - OtherUser8<br>* 614 - OtherUser9<br>* 615 - OtherUser10<br>* 616 - OtherUser11<br>* 617 - OtherUser12<br>* 618 - OtherUser13<br>* 619 - OtherUser14<br>* 620 - OtherUser15<br>* 621 - OtherUser16<br>* 622 - OtherUser17<br>* 623 - OtherUser18<br>* 624 - OtherUser19<br>* 625 - OtherUser20<br>* 626 - OtherUser21<br>* 627 - OtherUser22<br>* 628 - OtherUser23<br>* 629 - OtherUser24<br>* 630 - OtherUser25 |
| FirstName | string(50) | First Name |
| MiddleName | string(50) | Middle Name |
| LastName | string(50) | Last Name |
| Title | string(50) | Title |
| Company | string(100) | Company Name |
| Street | string(50) | Street |
| City | string(50) | City |
| State | string(2) | State |
| Zip | string(9) | Zip |
| EMail | string(250) | EMail |
| WorkPhone | string(20) | Work Phone |
| HomePhone | string(20) | Home Phone |
| MobilePhone | string(20) | Mobile Phone |
| OtherPhone | string(20) | Other Phone |
| Pager | string(20) | Pager |
| Fax | string(20) | Fax |
| LicenseNo | string(50) | License No |
| CHUMSNo | string(50) | CHUMSNo |
| FHAOrigOrSponsorID | string(50) | FHA Lender / Sponsor ID |
| BranchID | string(20) | Branch ID |
| Notes | string(2000) | Notes |
| ContactNMLSID | String(50) | NMLS ID for the individual |
| CompanyNMLSID | String(50) | NMLS ID for the company |
| LockToUser | Boolean | Indicates whether the party information is locked to the user. |
| CompanyEIN | String(9) | Company EIN (tax id). |
| MobilePhoneSMSGateway | String(40) | SMS gateway for sending text messages to the mobile phone |
| CompanyLicenseNo | String(50) | License number of the company |
| WirePrimaryBankName | String(100) | Wire instructions - bank name |
| WirePrimaryBankStreet | String(50) | Wire instructions - bank street address |
| WirePrimaryBankCity | String(50) | Wire instructions - bank city |
| WirePrimaryBankState | String(2) | Wire instructions - bank state |
| WirePrimaryBankZip | String(9) | Wire instructions - bank zip code |
| WirePrimaryABANo | String(9) | Wire instructions - ABA number |
| WirePrimaryAccountNo | String(22) | Wire instructions - account number |
| WireFCTBankName | String(100) | Wire instructions - further credit to - bank name |
| WireFCTBankStreet | String(50) | Wire instructions - further credit to - bank street address |
| WireFCTBankCity | String(50) | Wire instructions - further credit to - bank city |
| WireFCTBankState | String(2) | Wire instructions - further credit to - bank state |
| WireFCTBankZip | String(9) | Wire instructions - further credit to - bank zip code |
| WireFCTABANo | String(9) | Wire instructions - further credit to - ABA number |
| WireFCTAccountNo | String(22) | Wire instructions - further credit to - account number |
| SyncData | Boolean | Indicates whether the party data is synchronized when the loan data is synchronized.&lt;BR&gt;Default=False |
| EAndOPolicyExpirationDate | NullableDate | The date that the errors and omissions policy expires |
| LicensingAgencyCode | String(20) | Code that identifies the licensing agency |
| EMail2 | String(250) | Second email address for this party. |
| EMail3 | String(250) | Third email address for this party. |

### [](#TOP)PartyMisc

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| PartyMiscID | Integer | Unique ID |
| FileDataID | Integer | ID of the Loan File |
| HazPolicyNo | String(50) | Hazard Insurance policy number. |
| HazEffectiveDate | NullableDate | Hazard Insurance effective date. |
| HazRenewalDate | NullableDate | Hazard Insurance renewal date. |
| HazInsTypeEarthquake | Boolean | Is there earthquake insurance?&lt;BR&gt;Default=False |
| HazInsTypeFlood | Boolean | Is there flood insurance?&lt;BR&gt;Default=False |
| HazInsTypeHazard | Boolean | Is there Hazard Insurance?&lt;BR&gt;Default=False |
| HazInsTypeWindStorm | Boolean | Is there wind or storm insurance?&lt;BR&gt;Default=False |
| HazInsEscrowed | Enum.YesNoNA | Tells us whether insurance is escrowed.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| EscrowAccountNo | String(50) | Escrow account number |
| WaiveEscrowAmended | Boolean | Indicates whether the escrow waiver request has been amended. |
| PropTaxesEscrowed | Enum.YesNoNA | Indicates whether property taxes are escrowed.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FloodAccountNo | String(50) | Flood insurance account number. |
| MICertificateNo | String(50) | Mortgage Insurance certificate number. |
| MIPerCov | NullableInteger | Mortgage insurance percent coverage value. |
| TitleAccountNo | String(50) | Title account number |
| MortgageeClause | String(100) | Mortgagee clause text. |
| LenderVesting | String(50) |     |
| LenderGovLaws | String(50) |     |
| FloodInsRequired | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FloodInsNFIPType | Enum.FloodNFIPType | * 0 - NotParticipatingInNFIP<br>* 1 - RegularProgram<br>* 2 - EmergencyProgram<br>* 3 - Probation<br>* 4 - Suspended<br>* 5 - Unknown<br>* 6 - Other<br>* 7 - Blank |
| FloodInsZone | String(6) | Flood insurance zone code. |
| FloodInsApplicationDate | NullableDate |     |
| FloodInsCommunity | String(50) |     |
| FloodInsInfoObtainedFrom | String(50) |     |
| FloodInsNFIPMapPanelDate | NullableDate |     |
| FloodInsDeterminationDate | NullableDate |     |
| ReferralFee | NullableCurrency | Referral fee amount. Used on the NY Application Log. |
| TitleOrderSurvey | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| TitleOrderPayoffs | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ShowFirstAndSecondOnTitleOrder | Boolean | &lt;BR&gt;Default=False |
| FloodCoverageAmount | NullableCurrency | Used on the VA Certificate of Loan Disbursement 26-1820 |
| TitleUnderwriter | String(50) | Name of company for who HUD line 1108 is paid to. |
| _LoanOfficerLicenseExpDate | NullableDate | Stores the calculated Loan Officer's license expiration date. |
| CompanyLicenseNoOV | String(50) | Override for the Company license number. |
| CompanyNMLSIDOV | String(50) | Override for the Company NMLS id number. |
| BranchLicenseNoOV | String(50) | Override for the Branch license number. |
| BranchNMLSIDOV | String(50) | Override for the Branch NMLS id number. |
| _CompanyLicenseNo | String(50) | Stores the calculated value for the Company license number. |
| _CompanyNMLSID | String(50) | Stores the calculated value for the Company NMLS id number. |
| _CompanyLicenseExpirationDate | NullableDate | Stores the calculated value for the Company license expiration date. |
| _BranchLicenseNo | String(50) | Stores the calculated value of the Branch license number. |
| _BranchNMLSID | String(50) | Stores the calculated value of the Branch NMLS id number. |
| _BranchLicenseExpirationDate | NullableDate | Stores the calculated value of the Branch license expiration date. |
| SupervisoryAppraiserLicenseNumber | String(50) | License Number of the Appraisal Supervisor. |
| CompanyEINOV | String(9) | Override of company EIN (tax id). |
| _CompanyEIN | String(9) | Calculated company EIN (tax id). |
| InvestorCode | String(50) | Investor Code |
| MICompanyNameType | Enum.MICompanyNameType | ULDD - MI company name type.<br><br>* 0 - NotAssigned<br>* 1 - CMG<br>* 2 - Essent<br>* 3 - Genworth<br>* 4 - MGIC<br>* 6 - PMI<br>* 7 - Radian<br>* 8 - RMIC<br>* 9 - Triad<br>* 10 - UGI<br>* 100 - CAHLIF<br>* 101 - MDHousing<br>* 102 - MIF<br>* 103 - SONYMA<br>* 104 - Amerin<br>* 106 - CMGPreSep94<br>* 107 - Commonwealth<br>* 109 - RMIC_NC<br>* 110 - Verex<br>* 111 - WiscMtgAssr<br>* 112 - NMI<br>* 113 - Enact |
| Haz2PolicyNo | String(50) | Hazard Insurance2 policy number. |
| Haz2EffectiveDate | NullableDate | Hazard Insurance2 effective date. |
| Haz2RenewalDate | NullableDate | Hazard Insurance2 renewal date. |
| Haz2InsType | Enum.HazardInsType | The general type(s) of hazard(s) the insurance covers.<br><br>* 0 - NotAssigned<br>* 1 - Hazard<br>* 2 - Flood<br>* 4 - WindOrStorm<br>* 8 - Earthquake |
| FloodInsCounty | String(50) | The county or counties on the flood determination certificate |
| FloodInsCommunityNo | String(6) | The six digit NFIP community number |
| NFIPMapIdentifier | String(11) | The 11 digit NFIP map number |
| NFIPLetterOfMapDate | NullableDate | The date that the LOMA/LOMR letter was issued |
| NFIPMapIndicator | Enum.YesNoNA | Indicates whether the NFIP map covers the building or mobile home<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FloodInsIsInProtectedArea | Boolean | Indicates whether the building/mobile home is in a Coastal Barrier Resources Area (CBRA) or Otherwise Protected Area (OPA) |
| FloodInsProtectedAreaDesigDate | NullableDate | The date the area was designated a CBRA or OPA area |
| FloodInsIsLifeOfLoan | Enum.YesNoNA | Indicates whether contract is Life of Loan<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FloodCertificationIdentifier | String(50) | The flood certificate number |
| NFIPCommunityParticipationStartDate | NullableDate | The date that the community began participation in the Regular Program |
| NFIPFloodDataRevisionType | Enum.NFIPFloodDataRevisionType | Indicates whether a LOMA or LOMR has been issued.<br><br>* 0 - NotAssigned<br>* 1 - LOMA<br>* 2 - LOMR |
| TitleReportDate | NullableDate | Title report date. |
| TitleReportItems | String(50) | Approved title report items. |
| TitleReportEndorsements | String(50) | ALTA endorsements. |
| BuilderOrSellerIsNonPersonEntity | Boolean | Check if the Builder/Seller party is a non-person entity. |
| CreditAltLenderCaseNo | String(50) | Alt. case No. |
| ClosingAgentType | Enum.ClosingAgentType | Indicates which party is the closing agent<br><br>* 0 - NotAssigned<br>* 1 - TitleCompany<br>* 2 - EscrowCompany |
| ServicerCode | String(50) | The code of the servicer for this loan file |
| WireSpecialInstructions | String(500) | Special wire instructions |
| TrusteeFeePercent | NullableCurrency | Percentage fee charged by Trustee party. |
| Seller1CDSignatureMethod | Enum.CDSignatureMethod | Seller 1 CD Signature Method<br><br>* 0 - NotAssigned<br>* 1 - NoSignatureLine<br>* 2 - Wet<br>* 3 - Digital<br>* 4 - Image<br>* 5 - Text<br>* 6 - Other |
| Seller1CDSignatureMethodOtherDesc | String(35) | Seller 1 CD Signature Method other description |
| _LoanOfficerLicenseStartDate | NullableDate | Stores the calculated Loan Officer's license start date. |
| _CompanyLicenseStartDate | NullableDate | Stores the calculated value for the Company license start date. |
| _BranchLicenseStartDate | NullableDate | Stores the calculated value of the Branch license start date. |
| MIUnderwritingType | Enum.MIUnderwritingType | Indicates whether the MI underwriting is delegated or non-delegated.<br><br>* 0 - NotAssigned<br>* 1 - Delegated<br>* 2 - NonDelegated |
| MISpecialProgramCode | String(50) | The special program code or special deal code for the MI order |
| FloodEffectiveDate | NullableDate | The effective date of the flood insurance policy |
| FloodRenewalDate | NullableDate | The renewal date of the flood insurance policy |
| EducationBorrowerID | NullableInteger | Identifies which borrower has taken the homeownership education class. |
| CounselingBorrowerID | NullableInteger | Identifies which borrower has taken the housing counseling class. |

### [](#TOP)Task

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| TaskID | Integer | ID of the task |
| FileDataID | Integer | Foreign Key |
| DateCreated | DateTime | Date the task was created |
| DateDue | NullableDateTime | Date and time the task is due by. |
| Description | String(1510) | Description of the task. |
| DateCompleted | NullableDateTime | Date the tasks was completed. |
| CompletedBy | String(50) | Person who completed the task. |
| Notes | String(20000) | Notes related to the task. |
| AssignedUserRole | Enum.UserRole | UserRole the task is assigned to.<br><br>* 0 - None<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 4 - Other<br>* 8 - Other2<br>* 16 - Other3<br>* 32 - Other4<br>* 64 - Opener<br>* 128 - Underwriter<br>* 256 - DocDrawer<br>* 512 - Closer<br>* 1024 - QualityControl<br>* 2048 - Compliance<br>* 4096 - Shipper<br>* 8192 - LockDesk<br>* 16384 - Accounting<br>* 32768 - Servicing<br>* 65536 - Insuring<br>* 131072 - Secondary<br>* 262144 - Other5<br>* 524288 - Other6<br>* 1048576 - Other7<br>* 2097152 - Other8<br>* 4194304 - Other9<br>* 8388608 - Other10<br>* 16777216 - Other11<br>* 33554432 - Other12<br>* 67108864 - Other13<br>* 134217728 - Other14<br>* 268435456 - Other15<br>* 536870912 - Other16<br>* 1073741824 - Other17<br>* 2147483648 - Other18<br>* 4294967296 - Other19<br>* 8589934592 - Other20<br>* 17179869184 - Other21<br>* 34359738368 - Other22<br>* 68719476736 - Other23<br>* 137438953472 - Other24<br>* 274877906944 - Other25<br>* 549755813887 - EveryoneDefined<br>* 4611686018427387903 - Everyone |
| CreatedBy | String(50) | The username of the user that created the task |
| VisibleToUserRoles | Enum.UserRole | Indicates which users can see the task<br><br>* 0 - None<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 4 - Other<br>* 8 - Other2<br>* 16 - Other3<br>* 32 - Other4<br>* 64 - Opener<br>* 128 - Underwriter<br>* 256 - DocDrawer<br>* 512 - Closer<br>* 1024 - QualityControl<br>* 2048 - Compliance<br>* 4096 - Shipper<br>* 8192 - LockDesk<br>* 16384 - Accounting<br>* 32768 - Servicing<br>* 65536 - Insuring<br>* 131072 - Secondary<br>* 262144 - Other5<br>* 524288 - Other6<br>* 1048576 - Other7<br>* 2097152 - Other8<br>* 4194304 - Other9<br>* 8388608 - Other10<br>* 16777216 - Other11<br>* 33554432 - Other12<br>* 67108864 - Other13<br>* 134217728 - Other14<br>* 268435456 - Other15<br>* 536870912 - Other16<br>* 1073741824 - Other17<br>* 2147483648 - Other18<br>* 4294967296 - Other19<br>* 8589934592 - Other20<br>* 17179869184 - Other21<br>* 34359738368 - Other22<br>* 68719476736 - Other23<br>* 137438953472 - Other24<br>* 274877906944 - Other25<br>* 549755813887 - EveryoneDefined<br>* 4611686018427387903 - Everyone |
| SendNotification | Boolean | Indicates whether notification messages should be sent when the task is completed |
| NotificationUserRoles | Enum.UserRole | Indicates which users are notified when the task is complete<br><br>* 0 - None<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 4 - Other<br>* 8 - Other2<br>* 16 - Other3<br>* 32 - Other4<br>* 64 - Opener<br>* 128 - Underwriter<br>* 256 - DocDrawer<br>* 512 - Closer<br>* 1024 - QualityControl<br>* 2048 - Compliance<br>* 4096 - Shipper<br>* 8192 - LockDesk<br>* 16384 - Accounting<br>* 32768 - Servicing<br>* 65536 - Insuring<br>* 131072 - Secondary<br>* 262144 - Other5<br>* 524288 - Other6<br>* 1048576 - Other7<br>* 2097152 - Other8<br>* 4194304 - Other9<br>* 8388608 - Other10<br>* 16777216 - Other11<br>* 33554432 - Other12<br>* 67108864 - Other13<br>* 134217728 - Other14<br>* 268435456 - Other15<br>* 536870912 - Other16<br>* 1073741824 - Other17<br>* 2147483648 - Other18<br>* 4294967296 - Other19<br>* 8589934592 - Other20<br>* 17179869184 - Other21<br>* 34359738368 - Other22<br>* 68719476736 - Other23<br>* 137438953472 - Other24<br>* 274877906944 - Other25<br>* 549755813887 - EveryoneDefined<br>* 4611686018427387903 - Everyone |
| NotificationOtherEmail | String(200) | The email addresses of other users to be notified when the task is completed |
| NotificationMessage | String(500) | The text of the message that is sent when the task is completed. Used for non-borrowers. |
| NotificationParties | Enum.TaskNotificationPartyBitFlag | Indicates which parties should be emailed when the task is completed<br><br>* 0 - None<br>* 1 - Borrower<br>* 2 - Appraiser<br>* 4 - TitleCompany<br>* 8 - EscrowCompany<br>* 16 - ListingAgent<br>* 32 - SellingAgent<br>* 64 - SettlementCompany |
| CreatedByUserRole | Enum.UserRole | The role of the user that created the task<br><br>* 0 - None<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 4 - Other<br>* 8 - Other2<br>* 16 - Other3<br>* 32 - Other4<br>* 64 - Opener<br>* 128 - Underwriter<br>* 256 - DocDrawer<br>* 512 - Closer<br>* 1024 - QualityControl<br>* 2048 - Compliance<br>* 4096 - Shipper<br>* 8192 - LockDesk<br>* 16384 - Accounting<br>* 32768 - Servicing<br>* 65536 - Insuring<br>* 131072 - Secondary<br>* 262144 - Other5<br>* 524288 - Other6<br>* 1048576 - Other7<br>* 2097152 - Other8<br>* 4194304 - Other9<br>* 8388608 - Other10<br>* 16777216 - Other11<br>* 33554432 - Other12<br>* 67108864 - Other13<br>* 134217728 - Other14<br>* 268435456 - Other15<br>* 536870912 - Other16<br>* 1073741824 - Other17<br>* 2147483648 - Other18<br>* 4294967296 - Other19<br>* 8589934592 - Other20<br>* 17179869184 - Other21<br>* 34359738368 - Other22<br>* 68719476736 - Other23<br>* 137438953472 - Other24<br>* 274877906944 - Other25<br>* 549755813887 - EveryoneDefined<br>* 4611686018427387903 - Everyone |
| TaskSecurity | Enum.TaskSecurity | Specifies the security on the task<br><br>* 0 - NoOneCanEdit<br>* 1 - CreatorCanEdit<br>* 2 - AssigneeCanEditDueDate<br>* 3 - AnyoneCanEdit |
| NotificationMessageBorrower | String(500) | The notification message used for messages sent to the borrower |
| TaskPriority | Enum.TaskPriority | Priority of the Task&lt;BR&gt;Default=TaskPriority.Medium<br><br>* 0 - High<br>* 1 - Medium<br>* 2 - Low |
| TaskTemplateID | NullableInteger | The task template ID of the task template used to create the task, if any. |
| OverrideDescription | Boolean | Allows the description to be overridden when the task is tied to a condition or needed item.&lt;BR&gt;Default=False |

### [](#TOP)NeededItem

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| NeededItemID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| DisplayOrder | integer | Display Order |
| TaskType | Enum.TaskType | Item needed task type (Appraisal, Title, Flood, VOE, etc.)<br><br>* 0 - NeededItem<br>* 1 - VOR<br>* 2 - VOE<br>* 3 - VOD<br>* 4 - VOL<br>* 5 - VOM<br>* 6 - VOP<br>* 7 - Appraisal<br>* 8 - Title<br>* 9 - Flood<br>* 10 - Escrow<br>* 11 - Hazard<br>* 12 - MI<br>* 13 - Credit<br>* 14 - Survey<br>* 15 - Appraisal2<br>* 16 - Hazard2 |
| NeededItemType | Enum.NeededItemType(50) | Type of Item Needed (Processing, Closing, etc.)<br><br>* 0 - Processing<br>* 1 - Approval<br>* 2 - CommitmentLetter<br>* 3 - EscrowInstructions<br>* 4 - Closing<br>* 5 - Funding<br>* 6 - SecondaryMarketing<br>* 7 - Cancellation<br>* 100 - CustomStage1<br>* 101 - CustomStage2<br>* 102 - CustomStage3<br>* 103 - CustomStage4 |
| Description | string(1500) | Description |
| NeededFromBorrower | boolean | Indicates whether or not the item is to be supplied by the borrower. |
| DateOrdered | NullableDate | Date Ordered |
| DateVerified | NullableDate | Date Received |
| DateDueDays | NullableInteger | Number of Days Until the Item is Due |
| DateDue | NullableDate | Date Due |
| OrderedBy | string(50) | User name of user who ordered the verification. |
| VerifiedBy | string(50) | User name of user who verified the verification. |
| DateExpirationDays | NullableInteger | Number of Days Until the Item Expires |
| DateExpiration | NullableDate | Expiration Date |
| FollowUpFlag | Enum.FollowUpFlagNeededItem | Follow Up Flag<br><br>* 0 - NotAssigned<br>* 1 - RedFlag<br>* 2 - BlueFlag<br>* 3 - YellowFlag<br>* 4 - GreenFlag<br>* 5 - OrangeFlag<br>* 6 - PurpleFlag |
| ResidenceID | NullableInteger |     |
| EmployerID | NullableInteger |     |
| AssetID | NullableInteger |     |
| DebtID | NullableInteger |     |
| DeliveryMethod | Enum.NeededItemDeliveryMethod | Method of delivery (Mail, Email, Fax, etc.)<br><br>* 0 - NotAssigned<br>* 1 - Mail<br>* 2 - EMail<br>* 3 - Fax<br>* 4 - Courier |
| NeededItemMatrixName | String(50) | Name of the NeededItemMatrix this item is assigned to. |
| DateSubmitted | NullableDate | Date the item was submitted, |
| SubmittedBy | String(50) | Who submitted the item. |
| DateCleared | NullableDate | Date the item was cleared. |
| ClearedBy | String(50) | Who cleared the item. |
| AssignedTo | Enum.UserRole | Which user role the item is assigned to.<br><br>* 0 - None<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 4 - Other<br>* 8 - Other2<br>* 16 - Other3<br>* 32 - Other4<br>* 64 - Opener<br>* 128 - Underwriter<br>* 256 - DocDrawer<br>* 512 - Closer<br>* 1024 - QualityControl<br>* 2048 - Compliance<br>* 4096 - Shipper<br>* 8192 - LockDesk<br>* 16384 - Accounting<br>* 32768 - Servicing<br>* 65536 - Insuring<br>* 131072 - Secondary<br>* 262144 - Other5<br>* 524288 - Other6<br>* 1048576 - Other7<br>* 2097152 - Other8<br>* 4194304 - Other9<br>* 8388608 - Other10<br>* 16777216 - Other11<br>* 33554432 - Other12<br>* 67108864 - Other13<br>* 134217728 - Other14<br>* 268435456 - Other15<br>* 536870912 - Other16<br>* 1073741824 - Other17<br>* 2147483648 - Other18<br>* 4294967296 - Other19<br>* 8589934592 - Other20<br>* 17179869184 - Other21<br>* 34359738368 - Other22<br>* 68719476736 - Other23<br>* 137438953472 - Other24<br>* 274877906944 - Other25<br>* 549755813887 - EveryoneDefined<br>* 4611686018427387903 - Everyone |
| OrderedTaskID | NullableInteger | Task ID for theTask associated with Needed Item to be Ordered |
| ReceivedTaskID | NullableInteger | Task ID for theTask associated with Needed Item to be Received |
| SubmittedTaskID | NullableInteger | Task ID for theTask associated with Needed Item to be Submitted |
| ClearedTaskID | NullableInteger | Task ID for theTask associated with Needed Item to be Cleared |
| FollowUpDate | NullableDateTime | Date to follow-up on the needed item. |

### [](#TOP)Condition

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ConditionID | Integer |     |
| FileDataID | Integer | ID of loan file this item is associated with. |
| DisplayOrder | Integer | Sets the order the items appear in the program. |
| ConditionNo | NullableInteger | The unique ID for this item within this loan file. |
| _Description | String(1500) | The text that describes this item. |
| ConditionStage | Enum.ConditionStage | The condition stage this item belongs to.&lt;BR&gt;Default=ConditionStage.PriorToDocs<br><br>* 1 - PriorToDocs<br>* 2 - PriorToFunding<br>* 4 - PriorToPurchase<br>* 8 - PostFunding<br>* 16 - TrailingDocs<br>* 32 - Suspense<br>* 64 - CustomStage1<br>* 128 - CustomStage2<br>* 256 - CustomStage3<br>* 512 - CustomStage4 |
| IsInternal | Boolean | True if this item is handled internally, rather than externally. |
| FollowUpFlag | Enum.FollowUpFlagCondition | The follow up flag value for this item.<br><br>* 0 - NotAssigned<br>* 1 - RedFlag<br>* 2 - BlueFlag<br>* 3 - YellowFlag<br>* 4 - GreenFlag<br>* 5 - OrangeFlag<br>* 6 - PurpleFlag |
| RequestedDate | NullableDate | Date the item was ordered. |
| RequestedBy | String(50) | User who ordered the item. |
| RequestedTaskID | NullableInteger | Task associated with the ordered state of the item. |
| ReceivedDate | NullableDate | Date the item was received. |
| ReceivedBy | String(50) | User who received the item. |
| ReceivedTaskID | NullableInteger | Task associated with the received state of the item. |
| SubmittedDate | NullableDate | Date the item was submitted. |
| SubmittedBy | String(50) | User who submitted the item. |
| SubmittedTaskID | NullableInteger | Task associated with the submitted state of the item. |
| ClearedDate | NullableDate | Date the item was cleared. |
| ClearedBy | String(50) | User who cleared the item. |
| ClearedTaskID | NullableInteger | Task associated with the cleared state of the item. |
| FollowUpDate | NullableDateTime | Date and time the item was followed up. |
| IsAdHoc | Boolean | True if the condition is ad hoc. |
| ConditionClassCode | String(20) | Code that identifies the condition class |
| DescriptionTemplate | String(1500) | The template text used to generate the condition description. |
| ConditionDescriptionType | Enum.ConditionDescriptionType | Type of description (editable, not editable, custom question).<br><br>* 0 - Editable<br>* 1 - NotEditable<br>* 2 - CustomQuestion |
| ConditionTypeCode | String(20) | A code describing the type of condition (asset, income, etc) |
| _ConditionTypeAndNo | String(30) | The condition type and condition number combined (i.e. INC-324) |
| ExceptionRequestedBy | String(50) | The username of the user who requested the exception |
| DateExceptionRequested | NullableDate | The date the exception was requested |
| ExceptionStatus | Enum.ConditionExceptionStatus | The status of the exception request<br><br>* 0 - NotAssigned<br>* 1 - ApprovedByLender<br>* 2 - ApprovedByInvestor<br>* 3 - DeniedByLender<br>* 4 - DeniedByInvestor<br>* 5 - WaivedNotRequired<br>* 6 - PendingWithLender<br>* 7 - PendingWithInvestor |
| ResponsibleParty | Enum.ContactCat | Indicates the party that is responsible for satisfying the condition<br><br>* 0 - NotAssigned<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 3 - LoanCloser<br>* 4 - Underwriter<br>* 10 - Lender<br>* 11 - MortgageeForInsurance<br>* 12 - FHASponsoringLender<br>* 13 - FHAOriginatingLender<br>* 20 - RealEstateAgent<br>* 21 - ListingAgent<br>* 22 - SellingAgent<br>* 25 - BuilderOrSeller<br>* 26 - Warrantor<br>* 31 - HazardInsuranceCompany<br>* 32 - MortgageInsuranceCompany<br>* 33 - FloodInsuranceCompany<br>* 34 - FloodDeterminationCompany<br>* 40 - TitleCompany<br>* 42 - Appraiser<br>* 44 - EscrowCompany<br>* 46 - SurveyCompany<br>* 48 - CreditBureau<br>* 59 - Attorney<br>* 60 - BorrowerAttorney<br>* 61 - SellerAttorney<br>* 62 - LenderAttorney<br>* 70 - Inspector<br>* 71 - PestInspector<br>* 80 - Creditor<br>* 81 - Bank<br>* 82 - Employer<br>* 83 - Landlord<br>* 84 - LoanSeller<br>* 85 - Investor<br>* 86 - Contractor<br>* 99 - Borrower<br>* 101 - OpenHouseAgent<br>* 102 - OtherUser<br>* 103 - ReferralSource<br>* 104 - HomeOwnersAssoc<br>* 105 - SettlementLocation<br>* 106 - OtherUser2<br>* 107 - OtherUser3<br>* 108 - OtherUser4<br>* 109 - MortgageeForTitle<br>* 110 - Broker<br>* 111 - Appraiser2<br>* 112 - TaxServiceCompany<br>* 113 - HazardInsuranceCompany2<br>* 114 - Trustee<br>* 115 - FHAAgent<br>* 116 - FHAPostClosingMortgageeRep<br>* 117 - FHAMortgageeRep<br>* 501 - OtherParty1<br>* 502 - OtherParty2<br>* 503 - OtherParty3<br>* 504 - OtherParty4<br>* 505 - OtherParty5<br>* 600 - Opener<br>* 601 - DocDrawer<br>* 602 - QualityControl<br>* 603 - Compliance<br>* 604 - Shipper<br>* 605 - LockDesk<br>* 606 - Accounting<br>* 607 - Servicing<br>* 608 - Insuring<br>* 609 - Secondary<br>* 610 - OtherUser5<br>* 611 - OtherUser6<br>* 612 - OtherUser7<br>* 613 - OtherUser8<br>* 614 - OtherUser9<br>* 615 - OtherUser10<br>* 616 - OtherUser11<br>* 617 - OtherUser12<br>* 618 - OtherUser13<br>* 619 - OtherUser14<br>* 620 - OtherUser15<br>* 621 - OtherUser16<br>* 622 - OtherUser17<br>* 623 - OtherUser18<br>* 624 - OtherUser19<br>* 625 - OtherUser20<br>* 626 - OtherUser21<br>* 627 - OtherUser22<br>* 628 - OtherUser23<br>* 629 - OtherUser24<br>* 630 - OtherUser25 |
| Notes | String(10000) | Notes concerning the condition |
| RecordingDate | NullableDate | The date the trailing document was recorded. |
| ExpirationDate | NullableDate | The date that the condition approval expires |
| NeededFromBorrower | Boolean | Indicates that the condition is to be supplied by the borrower. |
| FannieConditionID | String(50) | Fannie Mae Condition ID |
| FreddieConditionID | String(50) | Freddie Mac Condition ID |

### [](#TOP)AUSRun

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| AUSRunID | Integer | Primary key |
| FileDataID | Integer | Foreign key |
| UserName | String(50) | User name of the user running the AUS |
| AUSSystem | Enum.HMDA_AUSSystem | AUS system<br><br>* 0 - NotAssigned<br>* 1 - DU<br>* 2 - LP<br>* 3 - TOTALScorecard<br>* 4 - GUS<br>* 5 - Other<br>* 6 - NotApplicable<br>* 7 - InternalProprietarySystem |
| AUSSystemOther | String(255) | The name of the AUS system if Other is selected for AUSSystem |
| AUSResult | Enum.HMDA_AUSResult | AUS result<br><br>* 0 - NotAssigned<br>* 1 - ApproveEligible<br>* 2 - ApproveIneligible<br>* 3 - ReferEligible<br>* 4 - ReferIneligible<br>* 5 - ReferWithCaution<br>* 6 - OutOfScope<br>* 7 - Error<br>* 8 - Accept<br>* 9 - Caution<br>* 10 - Ineligible<br>* 11 - Incomplete<br>* 12 - Invalid<br>* 13 - Refer<br>* 14 - Eligible<br>* 15 - UnableToDetermineOrUnknown<br>* 16 - Other<br>* 17 - NotApplicable<br>* 18 - AcceptEligible<br>* 19 - AcceptIneligible<br>* 20 - AcceptUnableToDetermine<br>* 21 - ReferWithCautionEligible<br>* 22 - ReferWithCautionIneligible<br>* 23 - ReferUnableToDetermine<br>* 24 - ReferWithCautionUnableToDetermine |
| AUSResultOther | String(255) | The AUS result name if Other is selected for AUSResult |
| DateRun | NullableDateTime | The date and time the AUS system was run |
| MortgageType | Enum.MortgageType | The mortgage type that was submitted to the AUS system<br><br>* 0 - NotAssigned<br>* 1 - VA<br>* 2 - FHA<br>* 3 - Conventional<br>* 4 - RHS<br>* 5 - Other<br>* 6 - HELOC<br>* 7 - StateAgency<br>* 8 - LocalAgency |
| AUSGateway | Enum.AUSGateway | The AUS System that produced the results.<br><br>* 0 - NotAssigned<br>* 1 - DU<br>* 2 - LP<br>* 3 - DU_PreQual |
| AUSDisplayResult | String(50) | AUS Results in display format. |

### [](#TOP)EmbeddedDoc

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| EmbeddedDocID | Integer | Embedded Document ID |
| FileDataID | Integer | ID of the Loan File |
| DisplayOrder | Integer | Display Order |
| EmbeddedDocType | integer | Stored Document Type |
| DateCreated | DateTime | Date document was created |
| Description | string(200) | Document description |
| FileExtension | string(10) | File extension (type) of document |
| Data | EmbeddedData | Document data |
| ReportType | string(25) | Type of report ordered |
| NameOnReport | string(100) | Borrower names on credit report |
| Viewable | Boolean | Is document viewable |
| ThirdPartyID | String(50) | Contains the vendor code for OSO interfaces. |
| ssn | string(50) | SSN of the borrower associated with this document (credit interfaces). |
| GUID | GUID | Uniquely identifies the document&lt;BR&gt;Default=GUID.NewGuid |
| DocStorageMethod | Enum.DocStorageMethod | Indicates if the document is embedded (default) or stored on disk.<br><br>* 0 - Embedded<br>* 1 - Linked |
| NeededItemID | NullableInteger | Links the document to a NeededItem. |
| DocStorageSource | Enum.DocStorageSource | Method used to add the document to the loan file.<br><br>* 0 - _Interface<br>* 1 - PrintDialog<br>* 2 - ManuallyAdded<br>* 3 - AutomaticallyAdded<br>* 4 - DocPrep<br>* 5 - DocPrepESign<br>* 6 - DocPrepEDisclosure<br>* 7 - DocPrepFulfillment<br>* 8 - DocPrepSecureEmail<br>* 9 - ESignImport |
| DocReportType | Enum.ReportType | Report type of the built-in document that was printed to generate this stored document.<br><br>* 0 - NotAssigned<br>* 1 - PrivacyNotice<br>* 2 - PMIGeneric1<br>* 3 - PMIGeneric2<br>* 4 - PMIFixed<br>* 5 - PMIARM<br>* 6 - PMILender<br>* 7 - CertAuth<br>* 8 - SigAuth<br>* 9 - BrokerContractA<br>* 10 - BrokerContractB<br>* 11 - BrokerContractC<br>* 12 - BrokerContractD<br>* 13 - BrokerFeeDisc<br>* 14 - ServicingDisclosure<br>* 15 - RequiredProviders<br>* 16 - CBAD<br>* 17 - TILDefs<br>* 18 - ECOA<br>* 19 - FairLendingNotice<br>* 20 - LockInAgreement<br>* 21 - LockInCondition<br>* 22 - PrepaymentPenalty<br>* 23 - Section32<br>* 24 - ARMDisclosurePg1<br>* 25 - ARMDisclosurePg2<br>* 26 - ARMDisclosureFHA<br>* 27 - ARMWorstCase<br>* 28 - FHAAmendClause<br>* 29 - FHANoticeToAssumption<br>* 30 - FHARealEstateCert<br>* 31 - FHAEnergyBenefits<br>* 32 - FHAAppraisedValue<br>* 33 - FHAHomeInspection<br>* 34 - FHALeadPaint1<br>* 35 - FHALeadPaint2<br>* 36 - FHAImportantNotice1<br>* 37 - FHAImportantNotice2<br>* 38 - FHAInformedChoice<br>* 39 - VADebtQuestionnaire<br>* 40 - VACounselingChecklist<br>* 41 - VAFederalCollection<br>* 43 - VAEligibilityApp<br>* 44 - VAEligibilityInstr<br>* 46 - VARights<br>* 47 - App1<br>* 48 - App2<br>* 49 - App3<br>* 50 - App4<br>* 51 - AppAssets<br>* 52 - AppDebts<br>* 53 - AppEmp<br>* 54 - AppLandlords<br>* 55 - AppREO<br>* 56 - AppRes<br>* 57 - AppAssetsAll<br>* 58 - AppDebtsAll<br>* 59 - ProcessingLog<br>* 60 - GiftLetter<br>* 61 - ItemsNeeded<br>* 62 - ItemsNeededBor<br>* 63 - ItemsNeededSecondaryMarketing<br>* 64 - ItemsNeededApproval<br>* 65 - ItemsNeededClosing<br>* 66 - ItemsNeededCancellation<br>* 67 - ItemsNeededEscrowInstructions<br>* 68 - ItemsNeededCommitmentLetter<br>* 69 - ItemsNeededFunding<br>* 70 - IRS4506TPage1<br>* 71 - IRS4506TPage2<br>* 72 - IRS1098<br>* 73 - LoanCommitPage1<br>* 74 - LoanCommitPage2<br>* 75 - ClosingInstPage1<br>* 76 - ClosingInstPage2<br>* 77 - OrderOutAppraisal<br>* 78 - OrderOutEscrow<br>* 79 - OrderOutFlood<br>* 80 - OrderOutHazard<br>* 81 - OrderOutTitle<br>* 82 - OrderOutSurvey<br>* 83 - Parties<br>* 84 - TransmittalSummary<br>* 85 - PatriotActDocumentation<br>* 86 - VOE<br>* 87 - VOD<br>* 88 - VOM<br>* 89 - VOL<br>* 90 - VOP<br>* 91 - VOR<br>* 92 - ActionTaken1<br>* 93 - ActionTaken2<br>* 94 - CreditDenial<br>* 95 - AppSummary<br>* 96 - GFE<br>* 97 - ItemizationOfAmountFinanced<br>* 98 - Notes<br>* 99 - ConversationLog<br>* 100 - CA883Pg1<br>* 101 - CA883Pg2<br>* 106 - FHA203KWorksheet1<br>* 107 - FHA203KWorksheet2<br>* 108 - HMDASummary<br>* 109 - HMDATransmittal<br>* 110 - VALoanAnalysis<br>* 111 - VALoanAnalysisDebts<br>* 112 - VAIntRateRed<br>* 113 - VALoanSummary1<br>* 114 - VALoanSummary2<br>* 115 - FHAVAAddendum1<br>* 116 - FHAVAAddendum2<br>* 117 - FHAVAAddendum3<br>* 118 - FHAVAAddendum4<br>* 120 - JointCredit<br>* 121 - FloodDisasterProtectionAct<br>* 123 - FHAUWMortCert<br>* 124 - VAVerifBenefits<br>* 125 - CACreditScore<br>* 126 - CAConsumerCaution<br>* 127 - GAOfficialCode<br>* 128 - RIAppraisal<br>* 129 - RIChoice<br>* 130 - TXExtCredit1<br>* 131 - TXExtCredit2<br>* 132 - TXExtCredit3<br>* 133 - TXExtCreditSP1<br>* 134 - TXExtCreditSP2<br>* 135 - TXExtCreditSP3<br>* 138 - VANotification<br>* 139 - CAFairLending<br>* 145 - MDFinance<br>* 146 - MABrokerDisc<br>* 147 - MA184Sec17B<br>* 148 - MAConsumerGuidePg1<br>* 149 - MAConsumerGuidePg2<br>* 150 - SCDisclosure<br>* 151 - VAValue1<br>* 157 - FHAPurAddendum1<br>* 158 - FHAPurAddendum2<br>* 159 - FHACondCommitment1<br>* 160 - FHACondCommitment2<br>* 161 - FHACondCommitment3<br>* 162 - FHACondCommitment4<br>* 163 - FHACondCommitment5<br>* 164 - FHACondCommitment6<br>* 165 - PrequalLetter<br>* 166 - AggEscrowTrial<br>* 167 - AggEscrowFinal<br>* 168 - Prequalify<br>* 169 - PrequalifyDetail<br>* 170 - RentVsOwn<br>* 171 - Comparison<br>* 172 - ComparisonDetail<br>* 173 - OpenHouseFlyer<br>* 174 - RefiPlanner<br>* 175 - AmScheduleMonthly<br>* 176 - AmScheduleAnnual<br>* 177 - AmScheduleYearEnd<br>* 178 - AmScheduleFiscalYearEnd<br>* 179 - TIL<br>* 180 - TILSchedule<br>* 181 - CashFlow1<br>* 182 - CashFlow2<br>* 183 - TrustAccount<br>* 184 - FACTAct1<br>* 185 - FACTAct2<br>* 186 - TXBroker1<br>* 187 - TXBroker2<br>* 188 - TXBroker3<br>* 189 - HMDALAR<br>* 190 - StandardManRep<br>* 191 - StandardManRep2<br>* 192 - HMDAWarnings<br>* 193 - LFI<br>* 194 - Profitability<br>* 195 - WaiveEscrow<br>* 196 - HUD1A<br>* 197 - HUD1Page1<br>* 198 - HUD1Page2<br>* 199 - SPApp1<br>* 200 - SPApp2<br>* 201 - SPApp3<br>* 202 - SPApp4<br>* 203 - SPApp5<br>* 204 - SPApp6<br>* 205 - SPAppAssets<br>* 206 - SPAppAssetsAll<br>* 207 - SPAppDebts<br>* 208 - SPAppDebtsAll<br>* 209 - SPAppEmp<br>* 210 - SPAppREO<br>* 211 - SPAppRes<br>* 212 - DebtConsolidation<br>* 214 - NYPreAppDisclosure1<br>* 215 - NYPreAppDisclosure2<br>* 216 - NYPreAppDisclosure3<br>* 217 - NYPreAppDisclosure4<br>* 224 - NYPreAppLenderDisclosure1<br>* 225 - NYPreAppLenderDisclosure2<br>* 226 - NYPreAppLenderDisclosure3<br>* 227 - NYPreAppLenderDisclosure4<br>* 228 - ClosingTIL<br>* 229 - ClosingTILDefs<br>* 230 - ClosingAmSchedule<br>* 231 - ClosingAggEscrowFinal<br>* 232 - ClosingAggEscrowTrial<br>* 233 - ClosingItemizationOfAmountFi<br>* 234 - ClosingInstPage1_HUD1<br>* 235 - ClosingSection32<br>* 236 - FHAComplianceInspection1<br>* 237 - FHAComplianceInspection2<br>* 238 - HUD1Page1Borrower<br>* 239 - HUD1Page1Seller<br>* 240 - HUD1Page2Borrower<br>* 241 - HUD1Page2Seller<br>* 242 - AuditLogEvents<br>* 243 - AuditLogData<br>* 244 - ValidationRuleErrors<br>* 245 - AuditLogFieldModifications<br>* 246 - AuditLogObjectModifications<br>* 248 - PrintLog<br>* 249 - VVOE<br>* 250 - PatriotActDisclosure<br>* 251 - NYApplicationLog<br>* 252 - FieldNotes<br>* 253 - Cardex<br>* 254 - FLAntiCoercion<br>* 255 - CA885Pg1<br>* 256 - CA885Pg2<br>* 257 - CA885Pg3<br>* 258 - CA885Pg4<br>* 259 - CA883Pg3<br>* 260 - FHAMCAW2008Pg1<br>* 261 - FHAMCAW2008Pg2<br>* 262 - ItemsNeededCustomStage1<br>* 263 - ItemsNeededCustomStage2<br>* 264 - ItemsNeededCustomStage3<br>* 265 - ItemsNeededCustomStage4<br>* 266 - HUD1Page1Mock<br>* 267 - HUD1Page2Mock<br>* 268 - HUD1AMock<br>* 269 - VACertOfDisbursement<br>* 271 - OrderOutAppraisal2<br>* 272 - EmbeddedDocHTML<br>* 273 - VARateReductionCert<br>* 275 - LossMitigationTransmittal<br>* 276 - EmbeddedDocPDF<br>* 277 - EmbeddedDocTXT<br>* 278 - EmbeddedDocXML<br>* 279 - EmbeddedDocImage<br>* 280 - GFE2010Page1<br>* 281 - GFE2010Page2<br>* 282 - GFE2010Page3<br>* 283 - HUD1_2010Page1<br>* 284 - HUD1_2010Page2<br>* 285 - HUD1_2010Page3<br>* 286 - ClosingCostEstimate<br>* 287 - ShoppableProviders<br>* 288 - ChangedCircumstances<br>* 289 - GFEAcknowledgement<br>* 290 - FHAIdentityCertification<br>* 291 - HUD1A_2010Page1<br>* 292 - HUD1A_2010Page2<br>* 293 - GFENoticeOfIntentToProceed<br>* 294 - HUD1\_2010\_Signatures<br>* 295 - HUD1\_2010\_OurOrigCharge<br>* 296 - GFEFeeWorksheet<br>* 297 - CA882Pg1<br>* 298 - CA882Pg2<br>* 299 - GFENewHomeStatement<br>* 300 - SSA89<br>* 301 - VAReqVeteranStatus<br>* 302 - RiskBasedPricingDisclosure1<br>* 304 - ABAD<br>* 305 - FHA203KBorrowersAcknowledgement<br>* 308 - CA8832010Pg1<br>* 309 - CA8832010Pg2<br>* 310 - FundingWorksheet<br>* 311 - AntiSteeringDisclosure<br>* 312 - EmbeddedDocWord<br>* 313 - AppLetter1<br>* 314 - AppLetter2<br>* 315 - AppLetter3<br>* 316 - AppLetter4<br>* 317 - AppLetter5<br>* 318 - AppLetterAssets<br>* 319 - AppLetterDebts<br>* 320 - AppLetterEmp<br>* 321 - AppLetterLandlords<br>* 322 - AppLetterREO<br>* 323 - AppLetterRes<br>* 324 - AppLetterAssetsAll<br>* 325 - AppLetterDebtsAll<br>* 326 - OrderOutHazard2<br>* 327 - LoanApproval<br>* 328 - FinalTIL<br>* 329 - FinalItemizationOfAmountFi<br>* 330 - FinalAggEscrowFinal<br>* 331 - FinalAggEscrowTrial<br>* 332 - FinalAmSchedule<br>* 333 - FinalSection32<br>* 335 - TILLetter1<br>* 336 - TILLetter2<br>* 337 - ECOALetter1<br>* 338 - ECOALetter2<br>* 339 - AppCreditAliasCont<br>* 340 - AppLetterCreditAliasCont<br>* 341 - FeeDetails<br>* 342 - IncomeDebtWorksheet<br>* 343 - IncomeDetails<br>* 344 - CounselingAgency<br>* 345 - ComplianceSummary<br>* 350 - LoanEstimate1<br>* 351 - LoanEstimate2<br>* 352 - LoanEstimate3<br>* 360 - ClosingDisclosure1<br>* 361 - ClosingDisclosure2<br>* 362 - ClosingDisclosure3<br>* 363 - ClosingDisclosure4<br>* 364 - ClosingDisclosure5<br>* 365 - CashFlow3<br>* 367 - LoanEstimateAddendum<br>* 369 - ClosingDisclosureAddendum<br>* 370 - CureDetails<br>* 371 - TRIDProvidersAndServices<br>* 372 - ClosingCostEstimateALT<br>* 373 - ECOAAppraisalNotice<br>* 374 - LoanEstimate3NoSignatures<br>* 375 - LoanEstimateAddendumNoSignatures<br>* 376 - ClosingDisclosure5NoSignatures<br>* 377 - ClosingDisclosureAddendumNoSignatures<br>* 378 - ClosingDisclosureSeller1<br>* 379 - ClosingDisclosureSeller2<br>* 380 - ClosingDisclosureSellerAddendum<br>* 381 - DisclosureLogHistory<br>* 382 - MAPRDisclosure<br>* 383 - AppGMIAddendum<br>* 384 - PayHistory<br>* 385 - TXRefiHELToNonHEL<br>* 386 - AddressVerification<br>* 387 - VACashOutRefiInitial<br>* 388 - VACashOutRefiFinal<br>* 389 - TransmittalSummary2018<br>* 390 - TaxpayerConsent<br>* 391 - IRS4506CPage1<br>* 392 - IRS4506CPage2<br>* 393 - CAMarriedDisc<br>* 394 - OHECOA<br>* 395 - RIArson<br>* 396 - FHAAddendumURLA<br>* 397 - ClosingCostEstimateV2<br>* 398 - SCIF1103<br>* 399 - SPSCIF1103<br>* 400 - URLABorrower<br>* 401 - URLACoborrower<br>* 402 - URLALender<br>* 403 - URLAUnmarriedAddendum<br>* 404 - URLAContinuationSheet<br>* 425 - SPURLABorrower<br>* 426 - SPURLACoborrower<br>* 427 - SPURLALender<br>* 428 - SPURLAUnmarriedAddendum<br>* 429 - SPURLAContinuationSheet<br>* 500 - CAAppraisalNotice<br>* 501 - ConsentToPullCredit<br>* 502 - FloodDisasterSpecialNotice |
| DocReportGUID | GUID | Unique id of the custom document or report that was printed to generate this stored document.&lt;BR&gt;Default=GUID.Empty |
| ConditionID | NullableInteger | Links the document to a Condition. |
| DocumentTypeCode | String(20) | The code that identifies to documents document type |
| DocumentCategoryCode | String(30) | Document Category Code |
| MetaData | EmbeddedData | Additional data associated with the document, that is not a part of the normal document format. |
| Internal | Boolean | Determines if the document is used internally.&lt;BR&gt;Default=False |
| Status | Enum.DocumentStatus | Status of document.&lt;BR&gt;Default=DocumentStatus.NotReviewed<br><br>* 0 - NotReviewed<br>* 1 - Approved<br>* 2 - Inactive<br>* 3 - Incomplete<br>* 4 - MissingPages<br>* 5 - Unacceptable<br>* 6 - Duplicate<br>* 7 - Illegible<br>* 8 - ReadyToShip<br>* 9 - Reviewed |
| Outdated | Boolean | Indicates whether or not the document is outdated. |
| ExpirationDate | NullableDate | Document Expiration Date |
| DocPackageID | NullableInteger | Identifies the document package associated with this document |
| VersionInfo | String(50) | Contains information used to identify which version of the document has been stored. |
| IsAutoIndexingRequired | Boolean | Indicates whether the document should be autoindexed. This value is for internal use only and should not be modified. |
| AUSRunID | NullableInteger | Links the document to a AUSRun. |

### [](#TOP)CustomValue

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| CustomValueID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| CustomValueType | Enum.CustomValueType | Indicates whether the custom value is system defined or user defined&lt;BR&gt;Default=CustomValueType.System<br><br>* 0 - System<br>* 1 - User |
| Name | string(100) |     |
| Value | string(2000) |     |

### [](#TOP)ExtendedTextValue

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ExtendedTextValueID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| Name | String(50) | The extended value name |
| Value | String(800) | Text value |

### [](#TOP)ExtendedDateValue

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ExtendedDateValueID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| Name | String(50) | The extended value name |
| Value | NullableDate | Date value |

### [](#TOP)ExtendedBooleanValue

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ExtendedBooleanValueID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| Name | String(50) | The extended value name |
| Value | Boolean | Boolean Value |

### [](#TOP)ExtendedDecimalValue

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ExtendedDecimalValueID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| Name | String(50) | The extended value name |
| Value | NullableCurrency | Decimal Value |

### [](#TOP)CreditDenial

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| CreditDenialID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| CreditNoCreditFile | Boolean | No Credit File |
| CreditNumberOfReferences | boolean | Insufficient Number of Credit References Provided |
| CreditInsufficientFiles | boolean | Insufficient Credit Files |
| CreditLimitedExperience | boolean | Limited Credit Experience |
| CreditUnableToVerifyReferences | boolean | Unable To Verify Credit References |
| CreditGarnishment | boolean | Garnishment, Attachment, Foreclosure, Collection Action or judgement |
| CreditJudgment | boolean | Judgment Repossession or Suit |
| CreditExcessiveObligation | boolean | Excessive Obligations in Relation to Income |
| CreditPaymentRecordPreviousMtg | boolean | Unacceptable Payment Record on Previous Mortgage |
| CreditLackOfCashReserves | boolean | Lack of Cash Reserves |
| CreditDelinquentObligationOthers | boolean | Delinquent Past or Present Credit Obligations with Others |
| CreditBankruptcy | boolean | Bankruptcy Past or Present |
| CreditTypeOfReference | boolean | Unacceptable Type of Credit References Provided |
| CreditPoorPerformanceUs | boolean | Poor Credit Performance with Us |
| EmpUnableToVerify | boolean | Unable to Verify Employment |
| EmpLength | boolean | Length of Employment |
| EmpTempOrIrregular | boolean | Temporary or Irregular Employment |
| IncInsufficientForAmount | boolean | Insufficient Income for Amount of Credit Requested |
| IncUnableToVerify | boolean | Unable to Verify Income |
| IncExcessiveObligations | boolean | Excessive Obligations in Relation to Income |
| ResTemporary | boolean | Temporary Residence |
| ResLength | boolean | Length of Residence |
| ResUnableToVerify | boolean | Unable to Verify Residence |
| DeniedHUD | boolean | Department of Housing and Urban Development |
| DeniedVa | boolean | Department of Veterans Affairs |
| DeniedFannie | boolean | Federal National Mortgage Association |
| DeniedFreddie | boolean | Federal Home Loan Mortgage Corporation |
| DeniedOther | boolean | Other |
| DeniedOtherDesc | string(50) | Description |
| OtherInsufficientFundsToClose | boolean | Insufficient Funds to Close the loan |
| OtherCreditApplicationIncomplete | boolean | Credit Application Incomplete |
| OtherValueOrTypeOfCollateral | boolean | Value or Type of Collateral not Sufficient |
| OtherUnacceptableProperty | boolean | Unacceptable Property |
| OtherInsufficientDataProperty | boolean | Insufficient Data - Property |
| OtherUnacceptableAppraisal | boolean | Unacceptable Appraisal |
| OtherUnacceptalbeLeasehold | boolean | Unacceptable Leasehold Estate |
| OtherTermsAndConditions | boolean | We do not grant credit to any applicant on the terms and conditions you have requested. |
| OtherSpecify | boolean | Other, specify: |
| OtherDescription | string(200) |     |
| ActionTakenDescription | string(300) |     |
| AccountDescription | string(150) |     |
| CompanyName | string(50) |     |
| CompanyStreet | string(50) |     |
| CompanyCity | string(50) |     |
| CompanyState | string(2) |     |
| CompanyZip | string(9) |     |
| CompanyPhone | string(20) |     |
| CreditDecision1 | boolean | Credit Decision Option 1 |
| CreditDecision2 | boolean | Credit Decision Option 2 |
| NoticeDeliveryMethod | Enum.CreditDenialDeliveryType | Method used to deliver this Notice<br><br>* 0 - NotAssigned<br>* 1 - Mailed<br>* 2 - Delivered<br>* 3 - Emailed |
| PreparedBy | String(50) |     |
| Equifax | boolean | Deprecated. In previous versions this was used to determine whether the Equifax address printed on the credit denial |
| Experian | boolean | Deprecated. In previous versions this was used to determine whether the Experian address printed on the credit denial |
| TransUnion | boolean | Deprecated. In previous versions this was used to determine whether the TransUnion address printed on the credit denial |
| CreditNumberOfInquiries | Boolean | Number of Recent Inquiries on Credit Bureau Report |

### [](#TOP)RequiredProvider

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| RequiredProviderID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| DisplayOrder | integer |     |
| Company | string(50) | Company name |
| Street | string(50) | Company street |
| City | string(50) | Company city |
| State | string(2) | State |
| Zip | string(9) | Company zip code |
| WorkPhone | string(20) | Company work phone |
| NatureRel | string(100) | Nature of business relationship |
| HUDLineNo | string(10) | HUD line number |

### [](#TOP)Conversation

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ConversationID | Integer | Conversation ID |
| FileDataID | Integer | ID of the Loan File |
| ConversationTime | NullableDateTime | The date and time that the conversation took place |
| TalkedTo | string(50) | Name of person talked to. |
| FollowUpFlag | Enum.FollowUpFlagConversation | * 0 - NotAssigned<br>* 1 - RedFlag<br>* 2 - BlueFlag<br>* 3 - YellowFlag<br>* 4 - GreenFlag<br>* 5 - OrangeFlag<br>* 6 - PurpleFlag |
| Notes | String(10000) | Notes describing the conversation |
| AlertFlag | Enum.AlertFlag | * 0 - NotAssigned<br>* 1 - RedAlert<br>* 3 - YellowAlert |
| AlertUserRoles | Enum.UserRole | User roles who will be alerted by this item.&lt;BR&gt;Default=UserRole.Everyone<br><br>* 0 - None<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 4 - Other<br>* 8 - Other2<br>* 16 - Other3<br>* 32 - Other4<br>* 64 - Opener<br>* 128 - Underwriter<br>* 256 - DocDrawer<br>* 512 - Closer<br>* 1024 - QualityControl<br>* 2048 - Compliance<br>* 4096 - Shipper<br>* 8192 - LockDesk<br>* 16384 - Accounting<br>* 32768 - Servicing<br>* 65536 - Insuring<br>* 131072 - Secondary<br>* 262144 - Other5<br>* 524288 - Other6<br>* 1048576 - Other7<br>* 2097152 - Other8<br>* 4194304 - Other9<br>* 8388608 - Other10<br>* 16777216 - Other11<br>* 33554432 - Other12<br>* 67108864 - Other13<br>* 134217728 - Other14<br>* 268435456 - Other15<br>* 536870912 - Other16<br>* 1073741824 - Other17<br>* 2147483648 - Other18<br>* 4294967296 - Other19<br>* 8589934592 - Other20<br>* 17179869184 - Other21<br>* 34359738368 - Other22<br>* 68719476736 - Other23<br>* 137438953472 - Other24<br>* 274877906944 - Other25<br>* 549755813887 - EveryoneDefined<br>* 4611686018427387903 - Everyone |
| FollowUpDate | NullableDateTime |     |

### [](#TOP)CA883

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| CA883ID | integer | Unique ID for this object. |
| FileDataID | Integer | ID of the Loan File |
| BrokerFee | NullableCurrency | Broker Fee Amount for California brokers |
| HasAdditionalComp | Enum.YesNoNA | Indicates whether the broker is receiving additional compensation from the lender.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| AdditionalComp | NullableCurrency | Additional compensation amount for Califormia brokers. |
| CreditDisabilityInsAmount | NullableCurrency | Amount assigned to first Credit Life or Disability Insurance amount field. |
| PrepayPenaltyOption | Enum.CAPrepayPenaltyOption | Which prepayment penalty type we're using.<br><br>* 0 - NotAssigned<br>* 1 - None<br>* 2 - Other<br>* 3 - LoanPrincipal |
| PrepayPenaltyPrincipalOption | Enum.CAPrepayPenaltyPrincipalOption | Whether prepayment penalty of principal is based on the original balance or the unpaid balance of the loan.<br><br>* 0 - NotAssigned<br>* 1 - OriginalBalance<br>* 2 - UnpaidBalance |
| PrepayPenaltyMonths | NullableInteger | Number of months of interest the prepaymant penalty should not exceed. |
| BrokerFundedOption | Enum.CABrokerFundedOption | Whether the broker may, will, or will not make the loan wholly or in part through broker controlled funds.<br><br>* 0 - NotAssigned<br>* 1 - May<br>* 2 - Will<br>* 3 - WillNot |
| OmitLandAndAlts | Boolean | Omit Land and Alterations from details of transaction |
| OmitMIPFF | Boolean | Omit MIP / Funding Fee from details of transaction |
| OmitSubFi | Boolean | Omit subordinate financing from the details of transaction calculation |
| OmitPaidBySeller | Boolean | Omit paid by seller from details of transaction |
| OmitOtherCredits | Boolean | Omit other credits from the details of transaction calculation |
| OtherDeduction | NullableCurrency | Other deduction |
| OtherDeductionText | String(50) | Other deduction description |
| PrepayPenaltyOtherDescription | String(240) | Explanation of prepayment penalty option. |
| HasLimitedDocumentation | Boolean | Indicates whether loan is being processed with limited documentation of the borrower's income and/or assets. |
| PrepayPenaltyTerm | NullableInteger | Number of months into the loan the prepayment penalty is in effect. |
| PrepayPenaltyMaxAmount | NullableCurrency | Maximum amount borrower could be charged for prepayment of the loan. |

### [](#TOP)IRSForm4506

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| IRSForm4506ID | integer | IRS Form 4506 ID |
| FileDataID | Integer | ID of the Loan File |
| BorrowerID | NullableInteger | Borrower ID |
| FilingStatus | Enum.IRSFilingStatus(50) | IRS filing status (joint, separate)<br><br>* 0 - NotAssigned<br>* 1 - Jointly<br>* 2 - NotJointly |
| LastReturnStreet | string(50) | Street address used on last tax return filed. |
| LastReturnCity | string(50) | City used on last filed tax return. |
| LastReturnState | string(2) | State used on last filed tax return. |
| LastReturnZip | string(9) | Zip Code used on last filed tax return. |
| ThirdPartyName | string(100) | Name of third party who this information is being sent to. |
| ThirdPartyStreet | string(50) | Street address of third party who this information is being sent to. |
| ThirdPartyCity | string(50) | City of third party who this information is being sent to. |
| ThirdPartyState | string(2) | State of third party who this information is being sent to. |
| ThirdPartyZip | string(9) | Zip code of third party who this information is being sent to. |
| ThirdPartyPhone | string(20) | Phone number of third party who this information is being sent to. |
| TaxFormRequested | string(20) | Which tax form number is being requested. |
| TaxPeriod1 | string(10) | A tax period information is being requested for. |
| TaxPeriod2 | string(10) | A tax period information is being requested for. |
| TaxPeriod3 | string(10) | A tax period information is being requested for. |
| TaxPeriod4 | string(10) | A tax period information is being requested for. |
| ReturnTranscript | Boolean | Indicates whether a Return Transcript is being requested on line 6 a. |
| AccountTranscript | Boolean | Indicates whether an AccountTranscript is being requested on line 6 b. |
| RecordOfAccount | Boolean | Indicates whether a Record of Account is being requested on line 6 c. |
| VerificationOfNonFiling | Boolean | Indicates whether the Verification of NonFiling box is checked on line 7. |
| FormW2EtcTranscript | Boolean | Indicates whether transcripts for forms W2, Form 1099 series, Form 1098 series or Form 5498 series are being requested on line 8. |
| PhoneOV | String(10) | Override value for phone number of tax payer. If no override value is specified then the borrower's home phone number is used. |
| OverrideReturnName | Boolean | True if the coresponding field is being overridden.&lt;BR&gt;Default=False |
| OverrideSpouse | Boolean | True if the coresponding field is being overridden.&lt;BR&gt;Default=False |
| OverrideCurrentName | Boolean | True if the coresponding field is being overridden.&lt;BR&gt;Default=False |
| OverrideCurrentAddress | Boolean | True if the coresponding field is being overridden.&lt;BR&gt;Default=False |
| ReturnFirstNameOV | String(50) | Return first name override value. |
| ReturnMiddleNameOV | String(50) | Return middle name override value. |
| ReturnLastNameOV | String(50) | Return last name override value. |
| ReturnSuffixOV | String(10) | Return name suffix override value. |
| ReturnSSNOV | String(20) | Return name SSN override value. |
| SpouseFirstNameOV | String(50) | Spouse first name override value. |
| SpouseMiddleNameOV | String(50) | Spouse middle name override value. |
| SpouseLastNameOV | String(50) | Spouse last name override value. |
| SpouseSuffixOV | String(10) | Spouse name suffix override value. |
| SpouseSSNOV | String(20) | Spouse SSN override value. |
| CurrentFirstNameOV | String(50) | Current first name override value. |
| CurrentMiddleNameOV | String(50) | Current middle name override value. |
| CurrentLastNameOV | String(50) | Current last name override value. |
| CurrentSuffixOV | String(10) | Current name suffix override value. |
| CurrentStreetOV | String(50) | Current street override value. |
| CurrentCityOV | String(50) | Current city override value. |
| CurrentStateOV | String(2) | Current state override value. |
| CurrentZipOV | String(9) | Current zip code override value. |
| TRVForm1 | Enum.IRS4506TFormType(20) | The type of form being requested<br><br>* 0 - NotAssigned<br>* 1 - _1040<br>* 2 - \_1040\_Stated<br>* 3 - _1065<br>* 4 - _1120<br>* 5 - W2<br>* 6 - _1099 |
| TRVForm2 | Enum.IRS4506TFormType(20) | The type of form being requested<br><br>* 0 - NotAssigned<br>* 1 - _1040<br>* 2 - \_1040\_Stated<br>* 3 - _1065<br>* 4 - _1120<br>* 5 - W2<br>* 6 - _1099 |
| TRVForm3 | Enum.IRS4506TFormType(20) | The type of form being requested<br><br>* 0 - NotAssigned<br>* 1 - _1040<br>* 2 - \_1040\_Stated<br>* 3 - _1065<br>* 4 - _1120<br>* 5 - W2<br>* 6 - _1099 |
| TRVForm1Year1 | NullableInteger | The year the form is being requested for |
| TRVForm1Year2 | NullableInteger | The year the form is being requested for |
| TRVForm1Year3 | NullableInteger | The year the form is being requested for |
| TRVForm1Year4 | NullableInteger | The year the form is being requested for |
| TRVForm2Year1 | NullableInteger | The year the form is being requested for |
| TRVForm2Year2 | NullableInteger | The year the form is being requested for |
| TRVForm2Year3 | NullableInteger | The year the form is being requested for |
| TRVForm2Year4 | NullableInteger | The year the form is being requested for |
| TRVForm3Year1 | NullableInteger | The year the form is being requested for |
| TRVForm3Year2 | NullableInteger | The year the form is being requested for |
| TRVForm3Year3 | NullableInteger | The year the form is being requested for |
| TRVForm3Year4 | NullableInteger | The year the form is being requested for |
| DVOrderId1 | String(50) | DataVerify Order Id for first form |
| DVOrderId2 | String(50) | DataVerify Order Id for second form |
| DVOrderId3 | String(50) | DataVerify Order Id for third form |
| IdentityTheft | Boolean | True if any of the years being requested had reported identity theft. |
| IRSForm4506Guid | GUID | Unique identifier for each record&lt;BR&gt;Default=GUID.Empty |
| ThirdPartyMailboxID | String(50) | The SOR mailbox ID of the IVES participant |
| PrintedNameOV | String(100) | Override value for the primary taxpayers printed name as shown on the signature line. |
| SpousePrintedNameOV | String(100) | Override value for the spouses printed name as shown on the signature line. |
| Title | String(50) | The primary taxpayers title as shown on the signature line. |
| ThirdPartyParticipantID | String(20) | The IVES Participant ID Number |
| ClientName | String(100) | Client name. |
| ClientStreet | String(50) | Client street. |
| ClientCity | String(50) | Client city. |
| ClientState | String(2) | Client state. |
| ClientZip | String(9) | Client zip. |
| ClientPhone | String(10) | Client phone. |
| WageIncomeTranscriptForm1 | String(10) | The first form number in the wage and income transcript section. |
| WageIncomeTranscriptForm2 | String(10) | The second form number in the wage and income transcript section. |
| WageIncomeTranscriptForm3 | String(10) | The third form number in the wage and income transcript section. |
| WageIncomeTranscriptPrimary | Boolean | Indicates whether wage and income transcripts are being requested for the primary tax payer listed. |
| WageIncomeTranscriptSpouse | Boolean | Indicates whether wage and income transcripts are being requested for the spouse. |
| TaxPeriodRequestedDate1 | NullableDate | The ending date of the first year or period for which the transcript is requested. |
| TaxPeriodRequestedDate2 | NullableDate | The ending date of the second year or period for which the transcript is requested. |
| TaxPeriodRequestedDate3 | NullableDate | The ending date of the third year or period for which the transcript is requested. |
| TaxPeriodRequestedDate4 | NullableDate | The ending date of the fourth year or period for which the transcript is requested. |
| PrimarySignerIsAuthorizedRep | Boolean | Indicates whether the primary taxpayer is an authorized representative. |
| SpouseSignerIsAuthorizedRep | Boolean | Indicates whether the spouse is an authorized representative. |

### [](#TOP)IRSForm1098

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| IRSForm1098ID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| AddressOption | Enum.IRSAddressOption | * 0 - DefaultOption<br>* 1 - CurrentResidence<br>* 2 - SubjectProperty |
| AccountNumber | String(50) |     |
| MortgageInterest | NullableCurrency |     |
| Points | NullableCurrency |     |
| Refund | NullableCurrency |     |
| MIP | NullableCurrency |     |
| OutstandingPrincipalOnJanFirst | NullableCurrency | The value in the field Outstanding Mortgage Principal |

### [](#TOP)Transmittal

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| TransmittalID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| IsPropType1UnitOV | Enum.YesNoNA | If OverridePropType is checked, then this field determines whether '1 unit' is checked.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsPropType2To4UnitsOV | Enum.YesNoNA | Deprecated. Value was used on the transmittal prior to 2021.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsPropTypeCondoOV | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsPropTypePUDOV | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsPropTypeCoopOV | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsPropTypeManuOV | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsPropTypeSinglewideOV | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsPropTypeMultiwideOV | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| AmortTypeOV | Enum.TransAmortType | Override value for the amortization type<br><br>* 0 - NotAssigned<br>* 1 - FixedMonthly<br>* 2 - FixedBiweekly<br>* 3 - ARM<br>* 4 - Other |
| AmortTypeDescOV | string(50) |     |
| LoanPurposeOV | Enum.TransLoanPurp | * 0 - NotAssigned<br>* 1 - Purchase<br>* 2 - CashOutRefi<br>* 3 - LimitedCashOutRefiFannie<br>* 4 - NoCashOutRefiFreddie<br>* 5 - HomeImprovement<br>* 6 - ConstructionToPermanent |
| OriginatorType | Enum.OriginatorType | Originator Type<br><br>* 0 - NotAssigned<br>* 2 - Seller<br>* 3 - Broker<br>* 4 - Correspondent |
| BrokerName | String(100) | Broker Name |
| GrossIncomeBorOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| GrossIncomeCoBorsOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| GrossIncomeTotalOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| OtherIncomeBorOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| OtherIncomeCoBorsOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| OtherIncomeTotalOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| CashFlowIncomeBorOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| CashFlowIncomeCoBorsOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| CashFlowIncomeTotalOV | NullableCurrency | Override value for the positive cash flow on the subject property |
| TotalIncomeBorOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| TotalIncomeCoBorsOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| TotalIncomeTotalOV | NullableCurrency | Override value for the grand total income |
| FirstRatioOV | NullableCurrency |     |
| SecondRatioOV | NullableCurrency |     |
| GapRatioOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| LTVOV | NullableCurrency |     |
| CLTVOV | NullableCurrency |     |
| HCLTVOV | NullableCurrency |     |
| AppraisalType | Enum.TransAppraisalType | Appraisal Type<br><br>* 0 - NotAssigned<br>* 1 - ExteriorAndInterior<br>* 2 - ExteriorOnly<br>* 3 - NoAppraisal |
| AppraisalFormNo | String(50) | Appraisal Form Number |
| RiskAssessmentMethod | Enum.TransRiskAssessmentMethod | Risk Assesment Method<br><br>* 0 - NotAssigned<br>* 1 - Manual<br>* 2 - DU<br>* 3 - LP<br>* 4 - OtherAUS<br>* 5 - Assetwise<br>* 6 - Capstone<br>* 7 - Clues<br>* 8 - ECS<br>* 9 - Strategyware<br>* 10 - Zippy<br>* 11 - GUS<br>* 12 - FirstMortgageCreditScore |
| RiskAssessmentMethodOther | String(50) | Other Risk Assesment Method |
| AUSRecommendation | String(50) | AUS Recommendation |
| AUSFileID | String(50) | AUS File ID |
| DocumentClassification | String(50) | Override value for Freddie Mac Document Classification |
| RepCreditScore | NullableInteger | Representative Credit Score |
| PrimaryResFirstMortPIOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| PrimaryResSecondMortPIOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| PrimaryResHazOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| PrimaryResPropTaxesOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| PrimaryResMIOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| PrimaryResHODOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| PrimaryResLeaseOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| PrimaryResOtherHousingExpOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| PrimaryResPITIOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| SubPropNetCashFlowNegOV | NullableCurrency | Deprecated. Value was used on the transmittal prior to 2021. |
| AllOtherPaymentsOV | NullableCurrency |     |
| TotalAllPaymentsOV | NullableCurrency |     |
| FundsReqToCloseOV | NullableCurrency |     |
| VerifiedAssetsOV | NullableCurrency |     |
| MonthsInReserveOV | NullableInteger |     |
| SalesConcessionsPercOV | NullableCurrency |     |
| UWCom | String(10000) | Underwriter Comments |
| QualRateOption | Enum.TransQualRateOption | Qualifying Rate Option<br><br>* 0 - NotAssigned<br>* 1 - NoteRate<br>* 2 - AboveNoteRate<br>* 3 - BelowNoteRate<br>* 4 - BoughtDownRate<br>* 5 - Other |
| SellerNo | String(50) | Seller Number |
| InvestorLoanNo | String(50) | Investor Loan Number |
| SellerLoanNo | String(50) | Seller Loan Number |
| MasterCommitmentNo | String(50) | Master Commitment Number |
| ContractNo | String(50) | Contract Number |
| ContractSignatureDate | NullableDate | Contract Signature Date |
| RequiredMonthsInResOV | NullableInteger | Override value for the number of months of reserves required. Used on the application summary |
| SpecialFeatureCode01 | String(3) | ULDD - Investor feature code. |
| SpecialFeatureCode02 | String(3) | ULDD - Investor feature code. |
| SpecialFeatureCode03 | String(3) | ULDD - Investor feature code. |
| SpecialFeatureCode04 | String(3) | ULDD - Investor feature code. |
| SpecialFeatureCode05 | String(3) | ULDD - Investor feature code. |
| SpecialFeatureCode06 | String(3) | ULDD - Investor feature code. |
| SpecialFeatureCode07 | String(3) | ULDD - Investor feature code. |
| SpecialFeatureCode08 | String(3) | ULDD - Investor feature code. |
| SpecialFeatureCode09 | String(3) | ULDD - Investor feature code. |
| SpecialFeatureCode10 | String(3) | ULDD - Investor feature code. |
| _MonthsInReserve | NullableInteger | Months In Reserve |
| UseCommentsAddendum | Boolean | Indicates whether underwriting comments are displayed on an addendum page. |
| InterestedPartyContributions | NullableCurrency | Interested Party Contributions |
| IncomeNetRentalOV | NullableCurrency | Override value for net rental income |
| SubPropFirstMortPIOV | NullableCurrency | Override value for the first mortgage P and I payment on the subject property |
| SubPropOtherFinancingPIOV | NullableCurrency | Override value for the P and I payment for all subordinate liens on the subject property |
| SubPropOtherPaymentOV | NullableCurrency | Override value for the other component of the PITI on the subject property |

### [](#TOP)HMDA

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| HMDAID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| PropertyType | Enum.HMDAPropertyType | * 0 - NotAssigned<br>* 1 - OneToFourFamily<br>* 2 - ManufacturedHousing<br>* 3 - MultiFamilyDwelling |
| ActionDate | NullableDate |     |
| ActionTaken | Enum.ActionTaken | * 0 - NotAssigned<br>* 1 - LoanOriginated<br>* 2 - ApplicationApprovedButNotAccepted<br>* 3 - ApplicationDeniedByFinancialInstitution<br>* 4 - ApplicationWithdrawnByApplicant<br>* 5 - FileClosedForIncompleteness<br>* 6 - LoanPurchasedByYourInstitution<br>* 7 - PreapprovalRequestDeniedByFinancialInstitution<br>* 8 - PreapprovalRequestApprovedButNotAccepted |
| CountyCode | string(3) |     |
| CensusTract | string(7) |     |
| GrossAnnualIncomeNA | boolean |     |
| StateCodeNA | boolean |     |
| ApplicationDateNA | boolean |     |
| CountyCodeNA | boolean |     |
| CensusTractNA | boolean |     |
| MSANoNA | boolean |     |
| _ApplicantEthnicity | Enum.HMDAEthnicity | Applicant ethnicity. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - HispanicOrLatino<br>* 2 - NotHispanicOrLatino<br>* 3 - NotProvided<br>* 4 - NotApplicable<br>* 5 - NoCoApplicant<br>* 11 - Mexican<br>* 12 - PuertoRican<br>* 13 - Cuban<br>* 14 - OtherHispanicOrLatino |
| _CoApplicantEthnicity | Enum.HMDAEthnicity | Co-applicant ethnicity. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - HispanicOrLatino<br>* 2 - NotHispanicOrLatino<br>* 3 - NotProvided<br>* 4 - NotApplicable<br>* 5 - NoCoApplicant<br>* 11 - Mexican<br>* 12 - PuertoRican<br>* 13 - Cuban<br>* 14 - OtherHispanicOrLatino |
| _ApplicantRace1 | Enum.HMDARace | Applicant race 1. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _ApplicantRace2 | Enum.HMDARace | Applicant race 2. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _ApplicantRace3 | Enum.HMDARace | Applicant race 3. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _ApplicantRace4 | Enum.HMDARace | Applicant race 4. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _ApplicantRace5 | Enum.HMDARace | Applicant race 5. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _CoApplicantRace1 | Enum.HMDARace | Co-applicant race 1. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _CoApplicantRace2 | Enum.HMDARace | Co-applicant race 2. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _CoApplicantRace3 | Enum.HMDARace | Co-applicant race 3. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _CoApplicantRace4 | Enum.HMDARace | Co-applicant race 4. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _CoApplicantRace5 | Enum.HMDARace | Co-applicant race 5. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - AmericanIndian<br>* 2 - Asian<br>* 3 - Black<br>* 4 - PacificIslander<br>* 5 - White<br>* 6 - NotProvided<br>* 7 - NotApplicable<br>* 8 - NoCoApplicant<br>* 21 - AsianIndian<br>* 22 - Chinese<br>* 23 - Filipino<br>* 24 - Japanese<br>* 25 - Korean<br>* 26 - Vietnamese<br>* 27 - OtherAsian<br>* 41 - NativeHawaiian<br>* 42 - GuamanianOrChamorro<br>* 43 - Samoan<br>* 44 - OtherPacificIslander |
| _ApplicantSex | Enum.HMDAGender | Applicant sex. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - Male<br>* 2 - Female<br>* 3 - NotProvided<br>* 4 - NotApplicable<br>* 5 - NoCoApplicant<br>* 6 - MaleAndFemale |
| _CoApplicantSex | Enum.HMDAGender | Co-applicant sex. Used for loans with an action date prior to January 1 2018.<br><br>* 0 - NotAssigned<br>* 1 - Male<br>* 2 - Female<br>* 3 - NotProvided<br>* 4 - NotApplicable<br>* 5 - NoCoApplicant<br>* 6 - MaleAndFemale |
| _Occupancy | Enum.HMDAOccupancy | * 0 - NotAssigned<br>* 1 - OwnerOccupied<br>* 2 - NotOwnerOccupied<br>* 3 - NotApplicable |
| _GrossAnnualIncomeInThousands | String(4) |     |
| _ApplicationDate | String(10) |     |
| _CountyCodeDisplay | String(3) |     |
| _CensusTractDisplay | String(7) |     |
| _MSANo | String(5) |     |
| _StateCode | String(2) |     |
| DenialReasonOther | String(255) | Description of denial reason if Other is selected |
| AUSResult1 | Enum.HMDA_AUSResult | HMDA AUS result 1<br><br>* 0 - NotAssigned<br>* 1 - ApproveEligible<br>* 2 - ApproveIneligible<br>* 3 - ReferEligible<br>* 4 - ReferIneligible<br>* 5 - ReferWithCaution<br>* 6 - OutOfScope<br>* 7 - Error<br>* 8 - Accept<br>* 9 - Caution<br>* 10 - Ineligible<br>* 11 - Incomplete<br>* 12 - Invalid<br>* 13 - Refer<br>* 14 - Eligible<br>* 15 - UnableToDetermineOrUnknown<br>* 16 - Other<br>* 17 - NotApplicable<br>* 18 - AcceptEligible<br>* 19 - AcceptIneligible<br>* 20 - AcceptUnableToDetermine<br>* 21 - ReferWithCautionEligible<br>* 22 - ReferWithCautionIneligible<br>* 23 - ReferUnableToDetermine<br>* 24 - ReferWithCautionUnableToDetermine |
| AUSResult2 | Enum.HMDA_AUSResult | HMDA AUS result 2<br><br>* 0 - NotAssigned<br>* 1 - ApproveEligible<br>* 2 - ApproveIneligible<br>* 3 - ReferEligible<br>* 4 - ReferIneligible<br>* 5 - ReferWithCaution<br>* 6 - OutOfScope<br>* 7 - Error<br>* 8 - Accept<br>* 9 - Caution<br>* 10 - Ineligible<br>* 11 - Incomplete<br>* 12 - Invalid<br>* 13 - Refer<br>* 14 - Eligible<br>* 15 - UnableToDetermineOrUnknown<br>* 16 - Other<br>* 17 - NotApplicable<br>* 18 - AcceptEligible<br>* 19 - AcceptIneligible<br>* 20 - AcceptUnableToDetermine<br>* 21 - ReferWithCautionEligible<br>* 22 - ReferWithCautionIneligible<br>* 23 - ReferUnableToDetermine<br>* 24 - ReferWithCautionUnableToDetermine |
| AUSResult3 | Enum.HMDA_AUSResult | HMDA AUS result 3<br><br>* 0 - NotAssigned<br>* 1 - ApproveEligible<br>* 2 - ApproveIneligible<br>* 3 - ReferEligible<br>* 4 - ReferIneligible<br>* 5 - ReferWithCaution<br>* 6 - OutOfScope<br>* 7 - Error<br>* 8 - Accept<br>* 9 - Caution<br>* 10 - Ineligible<br>* 11 - Incomplete<br>* 12 - Invalid<br>* 13 - Refer<br>* 14 - Eligible<br>* 15 - UnableToDetermineOrUnknown<br>* 16 - Other<br>* 17 - NotApplicable<br>* 18 - AcceptEligible<br>* 19 - AcceptIneligible<br>* 20 - AcceptUnableToDetermine<br>* 21 - ReferWithCautionEligible<br>* 22 - ReferWithCautionIneligible<br>* 23 - ReferUnableToDetermine<br>* 24 - ReferWithCautionUnableToDetermine |
| AUSResult4 | Enum.HMDA_AUSResult | HMDA AUS result 4<br><br>* 0 - NotAssigned<br>* 1 - ApproveEligible<br>* 2 - ApproveIneligible<br>* 3 - ReferEligible<br>* 4 - ReferIneligible<br>* 5 - ReferWithCaution<br>* 6 - OutOfScope<br>* 7 - Error<br>* 8 - Accept<br>* 9 - Caution<br>* 10 - Ineligible<br>* 11 - Incomplete<br>* 12 - Invalid<br>* 13 - Refer<br>* 14 - Eligible<br>* 15 - UnableToDetermineOrUnknown<br>* 16 - Other<br>* 17 - NotApplicable<br>* 18 - AcceptEligible<br>* 19 - AcceptIneligible<br>* 20 - AcceptUnableToDetermine<br>* 21 - ReferWithCautionEligible<br>* 22 - ReferWithCautionIneligible<br>* 23 - ReferUnableToDetermine<br>* 24 - ReferWithCautionUnableToDetermine |
| AUSResult5 | Enum.HMDA_AUSResult | HMDA AUS result 5<br><br>* 0 - NotAssigned<br>* 1 - ApproveEligible<br>* 2 - ApproveIneligible<br>* 3 - ReferEligible<br>* 4 - ReferIneligible<br>* 5 - ReferWithCaution<br>* 6 - OutOfScope<br>* 7 - Error<br>* 8 - Accept<br>* 9 - Caution<br>* 10 - Ineligible<br>* 11 - Incomplete<br>* 12 - Invalid<br>* 13 - Refer<br>* 14 - Eligible<br>* 15 - UnableToDetermineOrUnknown<br>* 16 - Other<br>* 17 - NotApplicable<br>* 18 - AcceptEligible<br>* 19 - AcceptIneligible<br>* 20 - AcceptUnableToDetermine<br>* 21 - ReferWithCautionEligible<br>* 22 - ReferWithCautionIneligible<br>* 23 - ReferUnableToDetermine<br>* 24 - ReferWithCautionUnableToDetermine |
| AUSSystem1 | Enum.HMDA_AUSSystem | HMDA AUS system 1<br><br>* 0 - NotAssigned<br>* 1 - DU<br>* 2 - LP<br>* 3 - TOTALScorecard<br>* 4 - GUS<br>* 5 - Other<br>* 6 - NotApplicable<br>* 7 - InternalProprietarySystem |
| AUSSystem2 | Enum.HMDA_AUSSystem | HMDA AUS system 2<br><br>* 0 - NotAssigned<br>* 1 - DU<br>* 2 - LP<br>* 3 - TOTALScorecard<br>* 4 - GUS<br>* 5 - Other<br>* 6 - NotApplicable<br>* 7 - InternalProprietarySystem |
| AUSSystem3 | Enum.HMDA_AUSSystem | HMDA AUS system 3<br><br>* 0 - NotAssigned<br>* 1 - DU<br>* 2 - LP<br>* 3 - TOTALScorecard<br>* 4 - GUS<br>* 5 - Other<br>* 6 - NotApplicable<br>* 7 - InternalProprietarySystem |
| AUSSystem4 | Enum.HMDA_AUSSystem | HMDA AUS system 4<br><br>* 0 - NotAssigned<br>* 1 - DU<br>* 2 - LP<br>* 3 - TOTALScorecard<br>* 4 - GUS<br>* 5 - Other<br>* 6 - NotApplicable<br>* 7 - InternalProprietarySystem |
| AUSSystem5 | Enum.HMDA_AUSSystem | HMDA AUS system 5<br><br>* 0 - NotAssigned<br>* 1 - DU<br>* 2 - LP<br>* 3 - TOTALScorecard<br>* 4 - GUS<br>* 5 - Other<br>* 6 - NotApplicable<br>* 7 - InternalProprietarySystem |
| AUSResultOtherDesc | String(50) | Description of other AUS result |
| AUSSystemOther | String(50) | Name of the AUS system when Other is selected. |
| PropertyValueNA | Boolean | Indicates whether the property value is not applicable for HDMA reporting |
| Term | NullableInteger | The term used for HMDA reporting |
| TermNA | Boolean | Indicates whether the term is not applicable. |
| TotalLoanCosts | NullableCurrency | Total loan costs for HMDA reporting |
| TotalLoanCostsNA | Boolean | Indicates whether the total loan costs are not applicable for HMDA reporting |
| TotalPointsAndFees | NullableCurrency | Total points and fees for HMDA reporting |
| TotalPointsAndFeesNA | Boolean | Indicates whether the total points and fees are not applicable for HMDA reporting |
| OriginationCharges | NullableCurrency | Origination charges for HMDA reporting |
| OriginationChargesNA | Boolean | Indicates whether the origination charges are not applicable for HMDA reporting |
| DiscountPoints | NullableCurrency | Discount points for HMDA reporting |
| DiscountPointsNA | Boolean | Indicates whether the discount points are not applicable for HMDA reporting |
| LenderCredits | NullableCurrency | Lender credits for HMDA reporting |
| LenderCreditsNA | Boolean | Indicates whether the lender credits are not applicable for HMDA reporting |
| InterestRate | NullableCurrency | Interest rate for HMDA reporting |
| InterestRateNA | Boolean | Indicates whether the interest rate is not applicable for HMDA reporting |
| DTIRatio | NullableCurrency | The DTI ratio for HMDA reporting |
| DTIRatioNA | Boolean | Indicates whether the DTI ratio is not applicable for HMDA reporting |
| CLTV | NullableCurrency | The cumulative loan to value ratio for HMDA reporting |
| CLTV_NA | Boolean | Indicates whether the CLTV is not applicable for HMDA reporting |
| IntroductoryRatePeriod | NullableInteger | The introductory rate period for HMDA reporting |
| IntroductoryRatePeriodNA | Boolean | Indicates whether the introductory rate period is not applicable for HMDA reporting |
| HasBalloonPayment | Boolean | Indicates whether the loan has a balloon payment |
| HasInterestOnlyPayments | Boolean | Indicates whether the loan has interest only payments |
| HasOtherNonAmortizingFeature | Boolean | Indicates whether the loan has any other non-amortizing features |
| _ApplicantGMICombined | String(250) | Combined governement monitoring information for the applicant |
| _CoApplicantGMICombined | String(250) | Combined governement monitoring information for the co-applicant |
| ApplicantAge | NullableInteger | The age of the applicant as reported for HMDA. The value 8888 means Not Applicable. |
| CoApplicantAge | NullableInteger | The age of the co-applicant as reported for HMDA. The value 8888 means Not Applicable. The value 9999 means there is no co-applicant. |
| ApplicantCreditScore | NullableInteger | The applicant credit score as reported for HMDA. The value 8888 means Not Applicable. The value 9999 means there is no co-applicant. |
| ApplicantCreditScoreModel | Enum.HMDACreditScoreModel | The applicant credit score model for HMDA reporting.<br><br>* 0 - NotAssigned<br>* 1 - EquifaxBeacon5Dot0<br>* 2 - ExperianFairIsaac<br>* 3 - FICORiskScoreClassic04<br>* 4 - FICORiskScoreClassic98<br>* 5 - VantageScore2Dot0<br>* 6 - VantageScore3Dot0<br>* 7 - MoreThanOne<br>* 8 - Other<br>* 9 - NotApplicable<br>* 10 - NoCoApplicant<br>* 11 - FICOScore9<br>* 12 - FICOScore8<br>* 13 - FICOScore10<br>* 14 - FICOScore10T<br>* 15 - VantageScore4Dot0 |
| ApplicantCreditScoreModelOther | String(50) | The applicant other credit score model description for HMDA reporting |
| CoApplicantCreditScore | NullableInteger | The co-applicant credit score as reported for HMDA. The value 8888 means Not Applicable. The value 9999 means there is no co-applicant. |
| CoApplicantCreditScoreModel | Enum.HMDACreditScoreModel | The co-applicant credit score model for HMDA reporting.<br><br>* 0 - NotAssigned<br>* 1 - EquifaxBeacon5Dot0<br>* 2 - ExperianFairIsaac<br>* 3 - FICORiskScoreClassic04<br>* 4 - FICORiskScoreClassic98<br>* 5 - VantageScore2Dot0<br>* 6 - VantageScore3Dot0<br>* 7 - MoreThanOne<br>* 8 - Other<br>* 9 - NotApplicable<br>* 10 - NoCoApplicant<br>* 11 - FICOScore9<br>* 12 - FICOScore8<br>* 13 - FICOScore10<br>* 14 - FICOScore10T<br>* 15 - VantageScore4Dot0 |
| CoApplicantCreditScoreModelOther | String(50) | The co-applicant other credit score model description for HMDA reporting |
| PropertyValue | NullableCurrency | The property value for HMDA reporting. Usually the amount used to calculate the LTV. |
| MLO\_NMLSID\_NA | Boolean | Indicates that the MLO NMLS ID is not applicable for HMDA reporting |
| PrepaymentPenaltyNA | Boolean | Indicates that the prepayment penalty is not applicable for HMDA reporting |
| LoanAmount | NullableCurrency | Loan Amount for HMDA reporting. Used for loans with an action date on or after January 1 2018. |
| IsPartiallyExemptFromHMDA | Boolean | Indicates whether the loan is partially exempt from HMDA reporting |
| InitiallyPayableToYourInstitutionOV | Enum.HMDAInitiallyPayableToYourInstitution | Override value for the field Initially Payable to Your Institution<br><br>* 0 - NotAssigned<br>* 1 - InitiallyPayableToYourInstitution<br>* 2 - NotInitiallyPayableToYourInstitution<br>* 3 - NotApplicable |

### [](#TOP)FHA

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FHAID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| MIPRefund | NullableCurrency |     |
| EnergyImp | NullableCurrency | Allowable energy improvements (line A6 on the 203K) |
| SectionOfActOV | String(50) | Override text for the FHA Section of Act |
| ReasonableValue | NullableCurrency | Reasonable value |
| FHALoanPurpose | Enum.FHALoanPurpose | FHA Loan purpose specified on HUD/VA Addendum<br><br>* 0 - NotAssigned<br>* 1 - PurHomePrevOccupied<br>* 2 - FinanceImprvToProperty<br>* 3 - Refinance<br>* 4 - PurNewCondo<br>* 5 - PurExistingCondo<br>* 6 - PurHomeNotPrevOccupied<br>* 7 - ConstructHome<br>* 8 - FinanceCoopPur<br>* 9 - VAPurManufHome<br>* 10 - VAPurManufHomeAndLot<br>* 11 - VARefiManufHomeToPurLot<br>* 12 - VARefiManufHomeAndLot |
| CreditDataAgent | String(250) | Names of others who may have helped with the application. |
| ReasonableValueType | Enum.FHAReasonableValueType | Type of reasonable value being applied.<br><br>* 0 - NotAssigned<br>* 1 - DeterminedByVA<br>* 2 - DeterminedByFHA |
| ReceivedLeadPaintNotice | Enum.YesNoNA | Did borrower receive a lead paint notice?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ApprovedOrModified | Enum.FHAApprovalType | Used on HUD Addendum Page 3 (Approved or Modified)<br><br>* 0 - NotAssigned<br>* 1 - Approved<br>* 2 - Modified |
| ModifiedLoanWith | NullableCurrency | LoanWith amount used in FHA modification for approval. Used on HUD Addendum Page 3. |
| ModifiedIntRate | NullableCurrency | FHA modified int rate used on HUD Addendum Page 3 |
| ModifiedTerm | NullableInteger | FHA modified term used on HUD Addendum Page 3 |
| ModifiedPayment | NullableCurrency | FHA modified monthly payment amount used on HUD Addendum Page 3. |
| ModifiedUFMIP | NullableCurrency | FHA modified Upfront MI premium amount used on HUD Addendum Page 3. |
| ModifiedMIPayment | NullableCurrency | FHA modified MI monthly payment used on HUD Addendum Page 3. |
| ModifiedMITerm | NullableInteger | FHA modified MI Term used on HUD Addendum Page 3. |
| ProposedConstInCompliance | Boolean | Used on HUD Addendum Page Additional Condition #1 |
| NewConstComplete | Boolean | Used on HUD Addendum Page 3 for Additional Condition #2 |
| BuildersWarrantyReq | Boolean | Used on HUD Addendum Page 3 for Additional Condition #3 |
| PropertyHas10YearWarranty | Boolean | Used on HUD Addendum Page 3 for Additional Condition #4 |
| CodeInspectionReq | Boolean | Used on HUD Addendum Page 3 for Additional Condition #5 |
| OONotRequired | Boolean | Used on HUD Addendum Page 3 for Additional Condition #5 |
| HighLTVForNonOOInMilitary | Boolean | Used on HUD Addendum Page 3 for Additional Condition #6 |
| OtherCondition | Boolean | Used on HUD Addendum Page 3 for Additional Condition #8 |
| OtherConditionDesc | String(1000) | Used on HUD Addendum Page 3 for Other Condition description text. |
| ScorecardRating | Enum.FHAScorecardRating | Used on HUD Addendum Page 3 for Scorecard Rating.<br><br>* 0 - NotAssigned<br>* 1 - Accept<br>* 2 - ReferOrCaution |
| MortgageeRep | String(50) | Used on HUD Addendum Page 3 for name of Mortgagee Rep. |
| DEUnderwriter | String(50) | Used on HUD Addendum Page 3 for DE Underwriter name. |
| DUCHUMSID | String(50) | Used on HUD Addendum Page 3 for DE Underwriter's CHUMSID. |
| MortgageeHasFinancialRel | Enum.YesNoNA | Used on HUD Addendum page 3 for Mortgagee has financial relationship question.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PropertyJuris | string(100) |     |
| HasWaterSupplyOrSewageSys | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| Section221D2CodeLetter | string(50) |     |
| MCC | NullableCurrency | Mortgage credit certificate |
| MaxLoanLTVFactorOV | NullableDouble | Override value for the LTV factor that determines the maximum mortgage amount (purchase form only) |
| MIDurationMonthsOV | NullableInteger | Override value for the duration of annual premium in months |
| IsSponsoredOrigination | Boolean | Is the loan a sponsored origination? |
| MaxLoanCanExceedCountyLimitML2011_29 | Boolean | Indicates whether the maximum loan amount can exceed the county limits pursuant to mortgagee letter 2011-29 |
| OrigFHAEndorsementDate | NullableDate | The original FHA endorsement date |
| AllConditionsSatisfied | Boolean | Used on new HUD Addendum Page 3 for Additional Conditions |
| URLAAddendumRoleOfOfficerOV | Enum.UserRole(50) | Override value for the role of the Title of Officer of Lender/Mortgagee on the HUD-92900-A<br><br>* 0 - None<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 4 - Other<br>* 8 - Other2<br>* 16 - Other3<br>* 32 - Other4<br>* 64 - Opener<br>* 128 - Underwriter<br>* 256 - DocDrawer<br>* 512 - Closer<br>* 1024 - QualityControl<br>* 2048 - Compliance<br>* 4096 - Shipper<br>* 8192 - LockDesk<br>* 16384 - Accounting<br>* 32768 - Servicing<br>* 65536 - Insuring<br>* 131072 - Secondary<br>* 262144 - Other5<br>* 524288 - Other6<br>* 1048576 - Other7<br>* 2097152 - Other8<br>* 4194304 - Other9<br>* 8388608 - Other10<br>* 16777216 - Other11<br>* 33554432 - Other12<br>* 67108864 - Other13<br>* 134217728 - Other14<br>* 268435456 - Other15<br>* 536870912 - Other16<br>* 1073741824 - Other17<br>* 2147483648 - Other18<br>* 4294967296 - Other19<br>* 8589934592 - Other20<br>* 17179869184 - Other21<br>* 34359738368 - Other22<br>* 68719476736 - Other23<br>* 137438953472 - Other24<br>* 274877906944 - Other25<br>* 549755813887 - EveryoneDefined<br>* 4611686018427387903 - Everyone |

### [](#TOP)FHA203K

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FHA203KID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| HUDOwned | Enum.FHA203KHUDOwnedType | Type of HUD ownership.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No<br>* 3 - Yes100 |
| CommitmentStage | Enum.FHA203KCommitmentStage | Commitment Stage<br><br>* 0 - NotAssigned<br>* 1 - Conditional<br>* 2 - Firm |
| OccupancyType | Enum.FHA203KOccupancyType | Occupancy Type<br><br>* 0 - NotAssigned<br>* 1 - OwnerOccupant<br>* 2 - Nonprofit<br>* 3 - GovernmentAgency |
| PurchaseDate | NullableDate | Purchase Date if owned less than 6 months |
| EscrowCommitment | Boolean | Escrow Commitment |
| ExistingDebt | NullableCurrency | Existing debt amount. |
| AsIsValue | NullableCurrency | As Is Value |
| AfterImprovedValue | NullableCurrency | After Improved Value |
| BorClosingCostsOV | NullableCurrency | Overide value for the borrower's closing costs |
| ContingencyPerc | NullableDouble | Contingency percent |
| ContingencyPaidInCash | NullableCurrency | Contingency funds paid in cash |
| CostOfRepairs | NullableCurrency | Total Cost of Repairs |
| InspectionCount | NullableInteger | Number of inspections |
| InspectionCost | NullableCurrency | Cost per inspection |
| TitleUpdateCount | NullableInteger | Number of title updates |
| TitleUpdateCost | NullableCurrency | Cost per title update |
| MonthsEscrowed | NullableInteger | Months Escrowed |
| MortgagePayment | NullableCurrency | Monthly mortgage payment |
| ArchAndEngFees | NullableCurrency | Architectural and engineering fees |
| ConsultantFees | NullableCurrency | Independent consultant fees |
| PermitsAndOtherFees | NullableCurrency | Permits and Other Fees |
| ReviewerMiles | NullableInteger | Plan review number of miles |
| ReviewerCostPerMile | NullableCurrency | Plan reviewer, cost per mile |
| ReviewerOtherFee | NullableCurrency | Plan review fee not covered in mileage costs |
| WaiveSuppOrigFee | Boolean | Indicates whether the supplemental origination fee is waived |
| SuppOrigFeeOV | NullableCurrency | Override value for the supplemental origination fee |
| DiscoutOnRepairs | NullableDouble | Discount points on repair costs and fees |
| AllowableDownPayment | NullableCurrency | Allowable down payment for HUD owned properties |
| PurRequiredInvOV | NullableCurrency | Override value for statutory investment required |
| PurMaxMortOV | NullableCurrency | Override value for maximum mortgage amount on purchase loans |
| AllowableFinPrepaids | NullableCurrency | Allowable financed prepaids |
| DiscountOnLoan | NullableDouble | Discount percent on loan amount |
| DiscountLoanBasis | NullableCurrency | Loan amount upon which discount points are applied (line D1) |
| LineD4OV | NullableCurrency | Override value for line D5 (old form) |
| LineE1OV | NullableCurrency | Override value for line E1 (old form) |
| LineE2OV | NullableCurrency | Override value for line E2 (old form) |
| TotalEscrowedFunds | NullableCurrency | Total escrowed funds |
| Remarks | String(1000) | Remarks |
| ShowDiscountInDollars | Boolean | Indicates whether or not the discount points will be shown as a percentage or as a dollar amount |
| DETitle | String(50) | Title of the direct underwriter |
| StreamlinedK | Boolean | Indicates whether the FHA loan is Streamlined (k)&lt;BR&gt;Default=False |
| FeasibilityStudyFee | NullableCurrency | Amount of feasibility study fee. |
| PurInducements | NullableCurrency | Purchase inducement amount. |
| LeadBasedPaintCredit | NullableCurrency | Amount for lead-based paint credit. |
| MortgageLimit | NullableCurrency | Mortgage limit amount. |
| InitialBaseMortgageOV | NullableCurrency | Override for amount of initial base mortgage. |
| SolarWindCost | NullableCurrency | Cost of solar/wind installation. |
| MaterialCostForItemsOrderedPrepaid | NullableCurrency | Initial draw material cost amount for items ordered and prepaid for, |
| MaterialCostForItemsOrderedNotPrepaid | NullableCurrency | Initial draw material cost amount for items ordered and not prepaid for, |
| FHA203KType | Enum.FHA203KType | Type of FHA 203K (Standard, Limited).<br><br>* 0 - NotAssigned<br>* 1 - Standard<br>* 2 - Limited |
| DrawArchAndEngFees | NullableCurrency | Draw amount for architectural and engineering fees |
| DrawPermitsAndOtherFees | NullableCurrency | Draw amount for permit and other fees |
| DrawSuppOrigFee | NullableCurrency | Draw amount for origination fees |
| DrawDiscountPointsAndFees | NullableCurrency | Draw amount for dicount points and fees |
| PropertyAcquired | Enum.FHAPropertyAcquired | Describes when property was acquired for FHA 203K purposes.<br><br>* 0 - NotAssigned<br>* 1 - LessThan12BeforeCaseAssignment<br>* 2 - MoreThan12BeforeCaseAssignment<br>* 3 - LessThan12InheritanceOrGift |
| _InitialBaseMortgage | NullableCurrency | Amount of initial base mortgage. |
| DiscountPointsAndFeesOV | NullableCurrency | Override for discount points and fees. |
| ContingencyTotalOV | NullableCurrency | Override for ContingencyTotal calculated value. |

### [](#TOP)FHAForms

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FHAFormsID | Integer | Unique ID |
| FileDataID | Integer | ID of the Loan File |
| FairAnalysis | Enum.YesNoNA | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FairAnalysisComments | String(1000) | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report. |
| QualityComments | String(1000) | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report. |
| ComparablesAcceptable | Enum.YesNoNA | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ComparablesComments | String(1000) | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report. |
| AdjustmentsAcceptable | Enum.YesNoNA | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| AdjustmentsComments | String(1000) | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report. |
| ValueAcceptable | Enum.YesNoNA | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ValueShouldBeCorrected | Enum.YesNoNA | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ValueForFHAPurposes | NullableCurrency | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report. |
| ValueCorrectionComments | String(1000) | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report. |
| RepairConditions | String(1000) | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report. |
| OtherAppraisalComments | String(1000) | Deprecated; was previously used on HUD-54114, Analysis of Appraisal Report. |
| ActionDate | NullableDate | FHA Conditional Commitment property. |
| CommitmentIssuedBy | String(100) | FHA Conditional Commitment - Commitment issued by |
| CommitmentIssued | NullableDate | FHA Conditional Commitment property |
| CommitmentExpires | NullableDate | FHA Conditional Commitment property |
| IsEligibleForMaxFi | Enum.IsIsNotNA | FHA Conditional Commitment property.<br><br>* 0 - NotAssigned<br>* 1 - _Is<br>* 2 - IsNot |
| HasAssuranceOfComp | Boolean | FHA Conditional Commitment - check box for 'Assurance of Completion' |
| AssuranceCompAmount | NullableCurrency | FHA Conditional Commitment property. |
| HasAdditionaltemsAttached | Boolean | FHA Conditional Commitment property. |
| AdditionalConditions | String(400) | FHA Conditional Commitment property. |
| ConditionsOnBackApply | Boolean | FHA Conditional Commitment - check box for 'See the following conditions on back' |

### [](#TOP)FHAMCAW

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FHAMCAWID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| ConstructionType | Enum.FHAMCAWConstructionType | Type of construction: existing or proposed<br><br>* 0 - NotAssigned<br>* 1 - Existing<br>* 2 - Proposed<br>* 3 - _New |
| StatutoryInvReqOV | NullableCurrency | Override value for statutory investment requirement (purchase form only, line 10d) |
| RequiredAdjustmentsOV | NullableCurrency | Override value for required adjustements (purchase form only, line 11b) |
| SalesConcessionsOV | NullableCurrency | Override value for sales concessions (refi form only, line 10d) |
| MortgageBasisOV | NullableCurrency | Override value for mortgage basis (refi form only, line 10e) |
| Refi10F1OV | NullableCurrency | Override value for line 10f1 (refi form only) |
| Refi10F2OV | NullableCurrency | Override value for line 10f2 (refi form only) |
| RefiRequiredInvestmentOV | NullableCurrency | Override value for required investment (refi form only, line 10h) |
| MinDownPaymentOV | NullableCurrency | Override value for minimum down payment (purchase form only, line 12a) |
| DiscountNotFinancedOV | NullableCurrency | Override value for discount points paid by borrower (10i / 12c) |
| PrepaidsNotFinancedOV | NullableCurrency | Override value for prepayable expenses paid by borrower (10j / 12b) |
| NonFinanceableRepairsOV | NullableCurrency | Non financable repairs and improvements (purchase form only, line 12d) |
| NonRealtyOV | NullableCurrency | Override value for Non-Realty and Other items (10L purchase / 12F purchase) |
| TotalCashToCloseOV | NullableCurrency | Override value for total requirements / total cash to close (10m / 12g) |
| OtherCreditsOV | NullableCurrency | Override value for other credits (10n / 12h) |
| OtherCreditsCashOpt | boolean | Indicates if the other credits will be paid in cash (refi form only, line 10n) |
| OtherCreditsOtherOpt | boolean | Indicates if the other credits will be paid in 'other' (refi form only, line 10n) |
| CashToCloseOV | NullableCurrency | Override value for amount to be paid (refi form only, line 10o) |
| AmountToBePaidCashOpt | boolean | Indicates if the amount to be paid will be paid in cash (refi form only, line 10o) |
| AmountToBePaidOtherOpt | boolean | Indicates if the amount to be paid will be paid in 'other' (refi form only, line 10o) |
| AvailableAssetsOV | NullableCurrency | Override value for available assets (10p / 12j) |
| SecondMortgageSource | String(50) | Source of second mortgage (purchase form only, line 12k) |
| SecondMortgageOV | NullableCurrency | Override value for second mortgage proceeds (10q / 12k) |
| BasePayBorOV | NullableCurrency | Override value for borrower's base pay (11a / 13a) |
| OtherEarningsBorOV | NullableCurrency | Override value for borrower's other earnings (11b / 13b) |
| BasePayCoBorOV | NullableCurrency | Override value for coborrower's base pay (11c / 13c) |
| OtherEarningsCoBorOV | NullableCurrency | Override value for coborrower's other earnings (11d / 13d) |
| NetRealEstateIncomeOV | NullableCurrency | Override value for net income from real estate (11e / 13e) |
| GrossMonthlyIncomeOV | NullableCurrency | Override value for gross monthly income (11f / 13f) |
| LTVOV | NullableCurrency | Override value for LTV calculation (14a / 16a) |
| FirstRatioOV | NullableCurrency | Override value for the first ratio (14b / 16b) |
| SecondRatioOV | NullableCurrency | Override value for the second ratio (14c / 16c) |
| CreditCharacteristics | Enum.FHAMCAWBorrowerRating | Borrower rating for credit characteristics (15a / 17a)<br><br>* 0 - NotAssigned<br>* 1 - Acceptable<br>* 2 - Reject |
| AdequacyOfIncome | Enum.FHAMCAWBorrowerRating | Borrower rating for adequacy of effective Income (15b / 17b)<br><br>* 0 - NotAssigned<br>* 1 - Acceptable<br>* 2 - Reject |
| StabilityOfIncome | Enum.FHAMCAWBorrowerRating | Borrower rating for stability of effective Income (15c / 17c)<br><br>* 0 - NotAssigned<br>* 1 - Acceptable<br>* 2 - Reject |
| AdequacyOfAssets | Enum.FHAMCAWBorrowerRating | Borrower rating for adequacy of available assets (15d / 17d)<br><br>* 0 - NotAssigned<br>* 1 - Acceptable<br>* 2 - Reject |
| TotalCCOption | Enum.FHAMCAWTotalCCOption | Indicates what values to include in the total closing costs (line 5c)<br><br>* 0 - ClosingCosts<br>* 1 - ClosingCostsPlusDiscountPoints<br>* 2 - Other |
| TotalCCOtherAmount | NullableCurrency | Other value (override value) for the total closing costs (line 5c). This value is used if Other is selected. |
| PurchasedWithinOneYear | Boolean | Indicates whether the property was purchased less than one year preceding the loan application |
| WeatherizationCosts | NullableCurrency | Weatherization costs |
| IncCCInExistingDebt | Boolean | Indicates whether closing costs will be included in the existing debt calculation. |
| IncDPInExistingDebt | Boolean | Indicates whether discount points will be included in the existing debt calculation. |
| IncPPInExistingDebt | Boolean | Indicates whether prepaids will be included in the existing debt calculation. |
| OtherExistingDebtAmount | NullableCurrency | Other amount to be included in the existing debt calculation. |
| Remarks | String(10000) | Remarks |
| OrigCaseNoAssignedOnOrAfterJuly142008 | Boolean | For refis of FHA loans - True if the case number on the original loan was assigned on or after July 14 2008&lt;BR&gt;Default=False |
| NetRealEstateIncomeCoBorsOV | NullableCurrency | Override value for net income from real estate for co-borrowers (92900-LT) |
| AmortTypeOV | Enum.FHAMCAWAmortType | Override for the amortization type on the 92900-LT.<br><br>* 0 - NotAssigned<br>* 1 - FixedRateMonthlyPayments<br>* 2 - ARM |
| SecondMortgageOtherDesc | String(50) | Description of the other secondary financing type. |
| SecondMortgageSourceType | Enum.FHAMCAWGiftType | Type of source for the secondary financing.<br><br>* 0 - NotAssigned<br>* 1 - Government<br>* 2 - NP<br>* 3 - Family<br>* 4 - Other |
| Gift1SourceType | Enum.FHAMCAWGiftType | Source type for the first gift.<br><br>* 0 - NotAssigned<br>* 1 - Government<br>* 2 - NP<br>* 3 - Family<br>* 4 - Other |
| Gift1OtherDesc | String(50) | Description for the first gift other type. |
| Gift2Source | String(50) | Source/EIN of the second gift. |
| Gift2SourceType | Enum.FHAMCAWGiftType | Source type for the second gift.<br><br>* 0 - NotAssigned<br>* 1 - Government<br>* 2 - NP<br>* 3 - Family<br>* 4 - Other |
| Gift2OtherDesc | String(50) | Description of the send gift other type. |
| Gift2Amount | NullableCurrency | Amount of the second gift. |
| SellerFundedDAP | Enum.YesNoNA | Tells whether the loan has seller funded DAP.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| CLTVOV | NullableCurrency | Override value for CLTV calculation (92900-LT). |
| SellerContributionOV | NullableCurrency | Override value for seller paid contribution. |
| MonthsInReserveFunds | NullableInteger | Number of months of funds in reserve. |
| ScoredByTOTAL | Enum.YesNoNA | * 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| RiskClass | Enum.FHAMCAWRiskClass | * 0 - NotAssigned<br>* 1 - AA<br>* 2 - Refer |
| AppraisalReviewerCHUMSNo | String(50) | CHUMS # of appraisal reviewer. |
| PropertyTypeOV | Enum.FHAMCAWPropertyType | Override for property type on the 92900-LT.<br><br>* 0 - NotAssigned<br>* 1 - _1Unit<br>* 2 - _2Units<br>* 3 - _3To4Units<br>* 4 - Condominium<br>* 5 - Coop<br>* 6 - ManufacturedHousing |
| SourceOfFunds | String(50) | Source of funds item on the FHA MCAW 92900-LT |
| EnergyEfficientMortgage | Boolean | Additional loan purpose designation for FHA 92900-LT&lt;BR&gt;Default=False |
| BuildingOnOwnLand | Boolean | Additional loan purpose designation for FHA 92900-LT&lt;BR&gt;Default=False |
| LoanPurposeOther | Boolean | Additional loan purpose designation for FHA 92900-LT&lt;BR&gt;Default=False |
| LoanPurposeOtherDesc | String(50) | Description for loan purpose other on FHA 92900-LT |
| IntRateBuydownOV | Enum.YesNoNA | Override for the Int Rate Buydown amortization value.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| CaseNoAssignmentPeriod | Enum.FHACaseNoAssignmentPeriod | Indicates when the FHA Agency Case number was assigned<br><br>* 0 - Before\_07\_14_2008<br>* 1 - \_07\_14\_2008\_To\_09\_30_2008<br>* 2 - \_10\_01\_2008\_To\_12\_31_2008<br>* 3 - OnOrAfter\_01\_01_2009<br>* 4 - OnOrAfter\_04\_05_2010<br>* 5 - OnOrAfter\_10\_04_2010<br>* 6 - OnOrAfter\_04\_18_2011<br>* 7 - OnOrAfter\_04\_09_2012<br>* 8 - OnOrAfter\_06\_11_2012<br>* 9 - OnOrAfter\_04\_01_2013<br>* 10 - OnOrAfter\_06\_03_2013<br>* 11 - OnOrAfter\_01\_26_2015<br>* 12 - OnOrAfter\_10\_01_2016<br>* 13 - OnOrAfter\_01\_27_2017<br>* 14 - OnOrAfter\_09\_01_2019<br>* 15 - OnOrAfter\_03\_20_2023 |
| ClosingCostsAndPrepaidsPBAOV | NullableCurrency | Override value for the Closing Costs line in the Borrower Funds to Close section on the 92900-LT. |

### [](#TOP)VA

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| VAID | Integer | Unique ID for this object. |
| FileDataID | Integer | ID of the Loan File |
| VeteranBorrowerID | NullableInteger |     |
| VATitleVested | Enum.VATitleVested | How the title will be vested for VA loan.<br><br>* 0 - NotAssigned<br>* 1 - Veteran<br>* 2 - VeteranSpouse<br>* 3 - Other<br>* 4 - VeteranAndVeteran<br>* 5 - VeteranAndNonVeteran |
| VATitleVestedOtherDesc | String(30) | Description set when TitleVested 'Other' is used. |
| DateOfApproval | NullableDate | Date of approval used in HUD/VA Addendum Page 3. |
| DateApprovalExpires | NullableDate | Date approval expires property used in HUD/VA Addendum Page 3 |
| HasVADebt | Enum.DoDoNotNA | * 0 - NotAssigned<br>* 1 - _Do<br>* 2 - _DoNot |
| CashFromVeteran | NullableCurrency | Used on Line2 of the VA Interest Rate Reduction Worksheet. |
| IRRRCCPlusPPOV | NullableCurrency | Used on Line 8 of the VA Interest Rate Reduction Worksheet. |
| Maintenance | NullableCurrency |     |
| Utilities | NullableCurrency |     |
| DownPaymentOV | NullableCurrency | Override value for the cash down payment amount (line 3 on the VA Loan Analysis) |
| LiquidAssetsOV | NullableCurrency | Override value for liquid assets (line 7 on the VA Loan Analysis) |
| UtilitiesIncludedInPresPITI | Enum.YesNoNA | Indicates whether or not utilities are included in the present housing expense - line 9 on the VA Loan Analysis<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| SpecialAssessments | NullableCurrency | Special assessments - line 18 on the VA Loan Analysis |
| PastCreditRecord | Enum.VAPastCreditRecord | Indicates whether past credit is satisfactory. Line 46 on the VA Loan Analysis.<br><br>* 0 - NotAssigned<br>* 1 - Satisfactory<br>* 2 - NotSatisfactory |
| MeetCreditStandards | Enum.YesNoNA | Indicates whether the loan meets the VA credit standards. Line 47 on the VA Loan Analysis.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| LoanAnalysisRemarks | String(1000) | VA Loan Analysis remarks - line 48. |
| Line36OtherDeductionsDesc | String(50) | Description for VA Analysis line 36 (Other Deductions) |
| Line39OtherIncomesDesc | String(50) | Description for line 39 of VA Loan Analysis (Other Incomes) |
| Line44SupportBalanceOV | NullableCurrency |     |
| HaveFiledClaim | Enum.HaveHaveNot | Tells us whether the applicant has filed a VA claim forn.<br><br>* 0 - NotAssigned<br>* 1 - Have<br>* 2 - HaveNot |
| CertMailingStreet | String(50) | Used if the Request for a Certificate of Eligibility is to be mailed to an address other than the Veteran's current residence. |
| CertMailingCity | String(50) | Used if the Request for a Certificate of Eligibility is to be mailed to an address other than the Veteran's current residence. |
| CertMailingState | String(2) | Used if the Request for a Certificate of Eligibility is to be mailed to an address other than the Veteran's current residence. |
| CertMailingZip | String(10) | Used if the Request for a Certificate of Eligibility is to be mailed to an address other than the Veteran's current residence. |
| VeteranHasDisability | Enum.YesNoNA | Used on the Request for a Certificate of Eligibility.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| LoanDisburementReportDate | NullableDate | Date of Loan Disbursement. Used on the VA Certificate of Loan Disbursement 26-1820. |
| RelativeName | String(100) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| RelativeStreet | String(50) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| RelativeCity | String(50) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| RelativeState | String(2) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| RelativeZip | String(10) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| RelativePhone | String(20) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| IssuanceOfEvidence | Enum.VAIssuanceOfEvidType | Used on the VA Certificate of Loan Disbursement 26-1820<br><br>* 0 - NotAssigned<br>* 1 - Guaranty<br>* 2 - Insurance |
| FullyPaidOutDate | NullableDate | Used on the VA Certificate of Loan Disbursement 26-1820 |
| LienTypeOther | String(50) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| UnpaidSpecialAssessments | NullableCurrency | Used on the VA Certificate of Loan Disbursement 26-1820 |
| AnnualMaintenanceAssessment | NullableCurrency | Used on the VA Certificate of Loan Disbursement 26-1820 |
| NonRealtyAcquired | String(200) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| AdditionalSecurity | String(200) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| WithheldAmountDepositType | Enum.VAWithheldAmountDepositType | Used on the VA Certificate of Loan Disbursement 26-1820<br><br>* 0 - NotAssigned<br>* 1 - Escrow<br>* 2 - EarmarkedAccount |
| ConstructionCompletedProperly | boolean | Used on the VA Certificate of Loan Disbursement 26-1820 |
| ApprovedUnderwriter | String(150) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| VetHasNotBeenDischarged | boolean | Obsolete - Used on the VA Certificate of Loan Disbursement 26-1820 prior to the October 2022 Revision. |
| OmitGovInfoFromLoanDisb | boolean | Used on the VA Certificate of Loan Disbursement 26-1820 |
| ApproxAnnualAssessmentOV | NullableCurrency | Used on the VA Certificate of Loan Disbursement 26-1820 |
| LienTypeOV | Enum.VALienType | Used on the VA Certificate of Loan Disbursement 26-1820<br><br>* 0 - NotAssigned<br>* 1 - First<br>* 2 - Second<br>* 3 - FirstChattel<br>* 4 - Unsecured<br>* 5 - Other |
| AmountWithheldFromProceeds | NullableCurrency | Used on the VA Certificate of Loan Disbursement 26-1820 |
| ApproxAnnualRealEstateTaxesOV | NullableCurrency | Used on the VA Certificate of Loan Disbursement 26-1820 |
| PreviousLoanAmount | NullableCurrency | Used on the VA Rate Reduction Certificate |
| PreviousTerm | NullableInteger | Used on the VA Rate Reduction Certificate |
| PreviousMonthlyPI | NullableCurrency | Used on the VA Rate Reduction Certificate |
| PreviousIntRate | NullableDouble | Used on the VA Rate Reduction Certificate |
| ShowLendersCert | Enum.LendersCertType | Used on the VA Rate Reduction Certificate&lt;BR&gt;Default=LendersCertType.Hide<br><br>* 0 - NotAssigned<br>* 1 - ShowChecked<br>* 2 - ShowUnChecked<br>* 3 - Hide |
| PreviousVALoanNo | String(50) | Used on the VA Rate Reduction Certificate |
| PrevLoanClosed | NullableDate | Used on the VA Rate Reduction Certificate |
| PreviousMonthlyPITI | NullableCurrency | Used on the VA Rate Reduction Certificate |
| ActiveDutyDayFollowingSeperation | Enum.YesNoNA | Were you on active military duty on the day following the date of seperation indicated in the papers submitted.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| VeteranStatusFileRef | String(200) | File Reference |
| ServedUnderAnotherName | Boolean | True if the veteran served under different name(s).&lt;BR&gt;Default=False |
| OtherNamesUsedDuringMilitaryService | String(200) | Other name(s) used during military service. |
| BorrowerHadPreviousVALoan | Boolean | True if the veteran has previously had a VA loan.&lt;BR&gt;Default=False |
| PrevLoanMoreThan30DaysLateInPast6Mo | Enum.YesNoNA | Indicates whether the veteran has been more than 30 days past due on the original loan in the past 6 months.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| RecommendedAction | Enum.VARecommendedAction | Indicates whether the application is recommended for approval or disapproval as indicated in section F of the VA Loan Analysis<br><br>* 0 - NotAssigned<br>* 1 - Approved<br>* 2 - Disapproved |
| FinalAction | Enum.VAFinalAction | Indicates the final action on the loan application as shown in field 51 of the VA Loan Analysis.<br><br>* 0 - NotAssigned<br>* 1 - ApproveApplication<br>* 2 - RejectApplication |
| CRVValue | NullableCurrency | Field 48A (Value) from the VA Loan Analysis worksheet |
| CRVExpirationDate | NullableDate | Field 48B (Expiration Date) from the VA Loan Analysis worksheet |
| CRVEconomicLife | NullableInteger | Field 48C (Economic Life) from the VA Loan Analysis worksheet |
| PreviousLoanType | Enum.VACashOutRefiLoanType | The type of previous loan as shown on the cash out refi certification<br><br>* 0 - NotAssigned<br>* 1 - Fixed<br>* 2 - ARM<br>* 3 - HybridARM<br>* 4 - OtherFixed<br>* 5 - OtherARM |
| PreviousLoanTypeOtherDesc | String(50) | The description of the previous loan type when Other is selected on the cash out refi certification |
| PreviousTotalOfPIAndMIPayments | NullableCurrency | The sum total of the remaining PI and MI payments on the existing loan as shown on the cash out refi certification |
| NTBEliminatesMI | Boolean | Indicates whether the new loan eliminates monthly mortgage insurance, whether public or private, or monthly guaranty insurance |
| NTBIncreasesResidualIncome | Boolean | Indicates whether the new loan results in an increase in the borrowerb s monthly residual income |
| NTBRefinancesConstLoan | Boolean | Indicates whether the new loan refinances an interim loan to construct, alter, or repair the primary home |
| VACashOutRefiType | Enum.VACashOutRefiType | Indicates whether the refi is a Type I or Type II refi.<br><br>* 0 - NotAssigned<br>* 1 - TypeI<br>* 2 - TypeII |
| OmitSpouseESignSignatureForm1802 | Boolean | Indicates whether the borrowerb s spouse should e-sign VA Form 26-1820.&lt;BR&gt;Default=False |
| PurposeOfLoan | Enum.VAPurposeOfLoan | Used on the VA Certificate of Loan Disbursement 26-1820<br><br>* 0 - NotAssigned<br>* 1 - InterestRateReductionRefinance<br>* 2 - CashOutRefinance<br>* 3 - ConstructionTwoClosing<br>* 4 - ConstructionOneClosing<br>* 5 - AlterationAndRepair<br>* 6 - PurchaseManufacturedNPA<br>* 7 - PurchaseCondo<br>* 8 - PurchaseMultiUnit<br>* 9 - PurchaseExisting |
| IRRRRDiscountPointsFinanced | NullableCurrency | Used on the VA Certificate of Loan Disbursement 26-1820 |
| IsModifiedRefinancedLoan | Enum.YesNoNA | Used on the VA Certificate of Loan Disbursement 26-1820<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ModifiedInterestRate | NullableDouble | Used on the VA Certificate of Loan Disbursement 26-1820 |
| ModifiedTerm | NullableInteger | Used on the VA Certificate of Loan Disbursement 26-1820 |
| EnergyImprovementItems | String(250) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| EscrowCompletionItems | String(250) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| ApprovedUnderwriterID | String(50) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| CertificateOfEligibilityCondition | Enum.VACertificateOfEligibilityCondition | Used on the VA Certificate of Loan Disbursement 26-1820<br><br>* 0 - NotAssigned<br>* 1 - VetNotDischarged<br>* 2 - ReservistNotDischarged<br>* 3 - SpouseStatusNotChanged |
| COERemarks | String(2000) | Remarks shown on the VA-26-1880 document. |

### [](#TOP)VALoanSummary

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| VALoanSummaryID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| EntitlementCode | String(50) | Entitlement code (line 7) |
| EntitlementAmount | NullableCurrency | Entitlement amount (line 8) |
| VAServiceBranch | Enum.VAServiceBranch | Branch of service (line 9)<br><br>* 0 - NotAssigned<br>* 1 - Army<br>* 2 - Navy<br>* 3 - AirForce<br>* 4 - MarineCorps<br>* 5 - CoastGuard<br>* 6 - Other |
| VAMilitaryStatus | Enum.VAMilitaryStatus | Military status (line 10)<br><br>* 0 - NotAssigned<br>* 1 - SeparatedFromService<br>* 2 - InService |
| VALoanProcedure | Enum.VALoanProcedure | Loan procedure (line 12)<br><br>* 0 - NotAssigned<br>* 1 - Automatic<br>* 2 - AutoIRRRL<br>* 3 - VAPriorApproval |
| VALoanPurpose | Enum.VALoanPurpose | VA loan purpose (line 13)<br><br>* 0 - NotAssigned<br>* 1 - Home<br>* 2 - ManufacturedHome<br>* 3 - Condominium<br>* 4 - AlterationsOrImprovements<br>* 5 - Refinance |
| VALoanCode | Enum.VALoanCode | Loan code (line 14)<br><br>* 0 - NotAssigned<br>* 1 - Purchase<br>* 2 - IRRRL<br>* 3 - CashOutRefi<br>* 4 - ManufacturedHomeRefi<br>* 5 - RefiOver90PercentOfRV |
| VAMortgageType | Enum.VAMortgageType | VA mortgage type (line 15)<br><br>* 0 - NotAssigned<br>* 1 - RegularFixedPayment<br>* 2 - GPMNeverToExceedNOV<br>* 3 - OtherGPMs<br>* 4 - GEM<br>* 5 - TemporaryBuydown<br>* 6 - HybridARM<br>* 7 - ARM |
| VAHybridARMType | Enum.VAHybridARMType | VA hybrid ARM type (line 16)<br><br>* 0 - NotAssigned<br>* 1 - \_3\_1<br>* 2 - \_5\_1<br>* 3 - \_7\_1<br>* 4 - \_10\_1 |
| VAOwnershipType | Enum.VAOwnershipType | VA ownership type (line 17)<br><br>* 0 - NotAssigned<br>* 1 - Sole<br>* 2 - JointTwoOrMoreVeterans<br>* 3 - JointVeteranAndNonVeteran |
| EnergyImpAmount | NullableCurrency | Amount of energy improvements (line 21) |
| EnergyImpNone | Boolean | Energy improvements - none (line 21) |
| EnergyImpSolar | Boolean | Energy improvements - Installation of Solar Heating/Cooling (line 21) |
| EnergyImpReplacement | Boolean | Energy improvements - Replacement of a Major System (line 21) |
| EnergyImpAddition | Boolean | Energy improvements - Addition of a New Feature (line 21) |
| EnergyImpInsulation | Boolean | Energy improvements - Insulation, Caulking, Weatherstripping, etc. (line 21) |
| EnergyImpOther | Boolean | Energy improvements - Other Improvements (line 21) |
| VAPropertyType | Enum.VAPropertyType | VA property type (line 23)<br><br>* 0 - NotAssigned<br>* 1 - Neither<br>* 2 - PUD<br>* 3 - Condominium |
| VAAppraisalType | Enum.VAAppraisalType | VA appraisal type (line 24)<br><br>* 0 - NotAssigned<br>* 1 - IND<br>* 2 - MCRV<br>* 3 - LAPP<br>* 4 - MBL<br>* 5 - HUD<br>* 6 - PMC |
| VAStructureType | Enum.VAStructureType | Structure type (line 25)<br><br>* 0 - NotAssigned<br>* 1 - ConventionalConstruction<br>* 2 - SinglewideMH<br>* 3 - DoublewideMH<br>* 4 - MHLotOnly<br>* 5 - PrefabricatedHome<br>* 6 - CondominiumConversion |
| VAPropertyDesignation | Enum.VAPropertyDesignation | Property designation (line 26)<br><br>* 0 - NotAssigned<br>* 1 - ExistingOrUsed<br>* 2 - AppraisedAsProposedConstruction<br>* 3 - NewExistingNeverOccupied<br>* 4 - EnergyImprovements |
| MCRVNo | String(50) | MCRV number (line 28) |
| VAManufacturedHomeType | Enum.VAManufacturedHomeType | Manufactured home type (line 29)<br><br>* 0 - NotAssigned<br>* 1 - OtherNotMH<br>* 2 - MHOnlyRentedSpace<br>* 3 - MHOnlyVeteranOwned<br>* 4 - MHOnPermanentFoundation |
| LenderSARID | String(50) | Lender's SAR ID number (line 38) |
| SARIssueDate | NullableDate | Date SAR issued notification of value (line 41) |
| AdjustedBySAR | Enum.YesNoNA | IF PROCESSED UNDER LAPP, WAS THE FEE APPRAISER'S ORIGINAL VALUE ESTIMATE CHANGED OR REPAIR RECOMMENDATIONS REVISED, OR DID THE SAR OTHERWISE MAKE SIGNIFICANT ADJUSTMENTS? (line 45)<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ProcessedWithAUS | Enum.YesNoNA | Indicates whether the loan was processed under a VA recognized automated underwriting system (line 46A)<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| VAAUSSystem | Enum.VAAUSSystem | AUS system used (line 46B)<br><br>* 0 - NotAssigned<br>* 1 - LP<br>* 2 - DU<br>* 3 - PMIAURA<br>* 4 - CLUES<br>* 5 - ZIPPY |
| VARiskClassification | Enum.VARiskClassification | Risk classification (line 46C)<br><br>* 0 - NotAssigned<br>* 1 - Approve<br>* 2 - Refer |
| VAMedianCreditScore | NullableInteger | Median credit score for the veteran (line 47) |
| ResidualIncomeGuideline | NullableCurrency | Residual income guideline (line 51 on the VA Loan Summary, line 44 on the VA Loan Analysis) |
| ConsiderSpouseIncome | Enum.YesNoNA | Spouse income considered (line 53)<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| SpouseIncome | NullableCurrency | Spouse income amount (if considered) (line 54) |
| TotalDiscountOption | Enum.ShowDollarOrPercentOrBoth | Indicates if total discount points are shown as a dollar amount, percentage or both (line 55)<br><br>* 0 - ShowBoth<br>* 1 - ShowDollarAmount<br>* 2 - ShowPercentage |
| VeteranDiscountOption | Enum.ShowDollarOrPercentOrBoth | Indicates if veteran paid discount points are shown as a dollar amount, percentage or both (line 55)<br><br>* 0 - ShowBoth<br>* 1 - ShowDollarAmount<br>* 2 - ShowPercentage |
| VAFundingFeeExempt | Enum.VAFundingFeeExempt | Indicates whether the veteran is exempt from the funding fee (line 59)<br><br>* 0 - NotAssigned<br>* 1 - Exempt<br>* 2 - NotExempt |
| OriginalVALoanNo | String(50) | Paid in full VA loan number (line 60 - IRRRL refi's only) |
| OriginalLoanAmount | NullableCurrency | Original loan amount (line 61 - IRRRL refi's only) |
| OriginalIntRate | NullableCurrency | Original loan interest rate (line 62 - IRRRL refi's only) |
| VALoanSummaryRemarks | String(1000) |     |
| VADiscountPoints | NullableCurrency |     |
| VADiscountAmount | NullableCurrency |     |
| VADiscountPointVeteran | NullableCurrency |     |
| VADiscountAmountVeteran | NullableCurrency |     |
| VAPriorLoanType | Enum.VAPriorLoanType | VA Prior Loan type used on the VA Form 26-0286 Loan Summary<br><br>* 0 - NotAssigned<br>* 1 - FHAFixed<br>* 2 - FHA\_ARM\_HARM<br>* 3 - ConventionalFixed<br>* 4 - ConventionalARM_HARM<br>* 5 - ConventionalInterestOnly<br>* 6 - VAFixed<br>* 7 - VA\_ARM\_HARM<br>* 8 - Other |

### [](#TOP)VAValue

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| VAValueID | Integer | Unique ID |
| FileDataID | Integer | ID of the Loan File |
| TitleLimits | String(190) | Text describing subject property title limits. |
| FirmName | String(50) | Name of Company making the request. |
| FirmStreet | String(50) | Street address of company making the request. |
| FirmCityStateZip | String(50) | City, state and zipcode of company making the request. |
| FirmComments | String(200) | Comments about firm making the request. |
| LotDimensions | String(50) | Dimensions of subject property lot. |
| LotSqFootage | NullableInteger | Square footage of lot. |
| LotAcreage | NullableDouble | Acreage of the lot. |
| IsIrregular | Boolean | Is the lot irregularly shaped? |
| IsAcres | Boolean | Is lot acreage supplied? |
| ElectricUtil | Enum.VAUtilityType | What type of electric utility does the property have?<br><br>* 0 - NotAssigned<br>* 1 - _Public<br>* 2 - Community<br>* 3 - Individual |
| GasUtil | Enum.VAUtilityType | What type of gas service does the property have?<br><br>* 0 - NotAssigned<br>* 1 - _Public<br>* 2 - Community<br>* 3 - Individual |
| WaterUtil | Enum.VAUtilityType | What type of water service does the property have?<br><br>* 0 - NotAssigned<br>* 1 - _Public<br>* 2 - Community<br>* 3 - Individual |
| SewerUtil | Enum.VAUtilityType | What type of sanitary sewer service does the property have?<br><br>* 0 - NotAssigned<br>* 1 - _Public<br>* 2 - Community<br>* 3 - Individual |
| HasRange | Boolean | Does property have a range or oven? |
| HasRefrigerator | Boolean | Does property have a refrigerator? |
| HasDishwasher | Boolean | Does property have a dishwasher? |
| HasWasher | Boolean | Does property have a washer? |
| HasDryer | Boolean | Does property have a dryer? |
| HasDisposal | Boolean | Does property have a garbage disposal? |
| HasVentFan | Boolean | Does property have a vent fan? |
| HasCarpet | Boolean | Does property have wall-to-wall carpeting? |
| HasOtherEquip | Boolean | DEPRICATED - Does property have other equipment to mention? |
| OtherEquipDesc | String(30) | DEPRICATED - Description of other equipment. |
| BuildingStatus | Enum.VABuildingStatus | What is the building's status?<br><br>* 0 - NotAssigned<br>* 1 - Proposed<br>* 2 - Existing<br>* 3 - UnderConstruction<br>* 4 - AltImpRep<br>* 5 - Other |
| BuildingType | Enum.VABuildingType | What is the VA building type?<br><br>* 0 - NotAssigned<br>* 1 - Detached<br>* 2 - SemiDetached<br>* 3 - Row<br>* 4 - AptUnit |
| FactoryFab | Enum.YesNoNA | Is building factory fabricated?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| NoBuildings | NullableInteger | Number of buildings on the property. |
| NoLivingUnits | NullableInteger | Number of living units on the property. |
| StreetAccess | Enum.VAAccessType | What type of street access does the property have?<br><br>* 0 - NotAssigned<br>* 1 - _Private<br>* 2 - _Public |
| StreetMaint | Enum.VAAccessType | What type of street maintenance access does the property have?<br><br>* 0 - NotAssigned<br>* 1 - _Private<br>* 2 - _Public |
| Warranty | Enum.YesNoNA | Is a construction warranty included with the property?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| WarrantyProgram | String(50) | Name of warranty program. |
| WarrantyExpires | String(20) | Date at which warranty expires. |
| ConstCompleted | String(20) | Year construction was completed. |
| Owner | String(50) | Name of owner of property. |
| PropertyOccupancy | Enum.VAPropertyOccupancy | Type of occupancy for this property.<br><br>* 0 - NotAssigned<br>* 1 - OccupiedByOwner<br>* 2 - NeverOccupied<br>* 3 - Vacant<br>* 4 - OccupiedByTenant |
| Rent | NullableCurrency | Amount of rent. |
| OccupantName | String(30) | Name of occupant |
| OccupantPhone | String(10) | Phone number of occupant. |
| BrokerName | String(30) | Name of broker. |
| BrokerPhone | String(20) | Phone number of Broker. |
| InspectionDate | String(20) | DEPRICATED - Date property can be available for inspection. |
| CanInspectAM | Boolean | DEPRICATED - Can property be inspected before noon? |
| CanInspectPM | Boolean | DEPRICATED - Can property be inspected after noon? |
| KeysAt | String(50) | Address keys are at. |
| InstNo | String(50) | Inst number. |
| InspectionBy | Enum.VAInspectionBy | DEPRICATED - Who is doing the inspection? (FHA, VA, None)<br><br>* 0 - NotAssigned<br>* 1 - FHA<br>* 2 - VA<br>* 3 - NoneMade |
| Plans | Enum.VAPlansType | DEPRICATED - What plan type is being used?<br><br>* 0 - NotAssigned<br>* 1 - FirstSubmission<br>* 2 - RepeatCase |
| PlansCaseNo | String(50) | DEPRICATED - Previous case number. |
| Comments | String(1000) | DEPRICATED - General comments |
| Taxes | NullableCurrency | Real estate taxes. |
| MineralRightsReserved | Enum.YesNoNA | Are mineral rights reserved for this property?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| MineralRightsExpl | String(50) | Explanation of mineral rights. |
| LeaseType | Enum.VALeaseType | Type of lease.<br><br>* 0 - NotAssigned<br>* 1 - _99Years<br>* 2 - Renewable<br>* 3 - HUDVAApproved |
| LeaseExpires | String(20) | Year lease expires. |
| GroundRent | NullableCurrency | Annual ground rent. |
| PurLotSep | Enum.YesNoNA | Was lot purchased separately?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ContractAttached | Enum.YesNoNA | Is there a contract attached?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ContractNo | String(50) | DEPRICATED - Previous contract number. |
| UseLoanValue | Enum.VAUseLoanValue | Which loan value are we using (Base or LoanWith).<br><br>* 0 - NotAssigned<br>* 1 - BaseLoan<br>* 2 - LoanWithPMI |
| Signature | Enum.VASignatureType | Who is signing the request.<br><br>* 0 - NotAssigned<br>* 1 - Mortgagee<br>* 2 - Builder<br>* 3 - Seller<br>* 4 - Other |
| RequestorTitle | String(50) | Title of person making this request. |
| RequestorPhone | String(20) | Phone number of person making this request. |
| AssignmentDate | String(20) | Date of assignment. |
| OmitBuilder | Boolean | True if Builder party is to be omitted (because it's really a seller) |
| FirmEmail | String(250) | Firm E-Mail Address |
| PointOfContactInfo | String(500) | Applicable Point of Contact Information |
| BuilderVAID | String(50) | VA Builder ID Number |
| AppraisalTypeOV | Enum.VAValueAppraisalType | Override of appraisal type for VA 26-1805 form.<br><br>* 0 - NotAssigned<br>* 1 - Purchase<br>* 2 - Refinance<br>* 3 - Liquidation<br>* 4 - Other |
| LoanUse | Enum.VAValueLoanUseType | Loan use value for use on VA 26-1805 form.<br><br>* 0 - NotAssigned<br>* 1 - Renovation<br>* 2 - Construction<br>* 3 - EEM<br>* 4 - Other |
| BuilderOrSeller | Enum.VAValueBuilderOrSeller | Indicates whether section 2 information is a Builder or Seller.<br><br>* 0 - NotAssigned<br>* 1 - Builder<br>* 2 - Seller |
| WorksNights | Enum.YesNoNA | Does the borrower work nights?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PetsOnPremises | Enum.YesNoNA | Are there pets on the premises?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HouseAlarm | Enum.YesNoNA | Is there a house alarm system?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| GatedCommunity | Enum.YesNoNA | Is it a gated community?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| SpecialEnergyEfficiency | Enum.YesNoNA | Is there a special energy efficiency feature?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| SpecialInstructionsOrInvoiceInfo | String(300) | Special instructions or invoice information. |
| NoOfPagesUploadedSalesContract | NullableInteger | Number of sales contract pages uploaded. |
| TidewaterPOCName | String(50) | Tidewater POC name. |
| TidewaterPOCPhone | String(20) | Tidewater POC phone number. |
| TidewaterPOCEmail | String(50) | Tidewater POC email address. |
| SponsorType | Enum.VAValueSponsorType | Type of sponsor.<br><br>* 0 - NotAssigned<br>* 1 - Lender<br>* 2 - Servicer |
| CanAAPPBeUtilized | Enum.YesNoNA | Indicates whether AAPP can be utilized.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| LenderPOCName | String(100) | Lender POC name. |
| LenderPOCPhone | String(20) | Lender POC phone number. |
| LenderPOCEmail | String(250) | Lender POC email address. |
| VeteranBorrowerPOCName | String(100) | Veteran/Borrower POC name. |
| VeteranBorrowerPOCPhone | String(20) | Veteran/Borrower POC phone number. |
| VeteranBorrowerPOCEmail | String(250) | Veteran/Borrower POC email address. |
| BuilderSalesOfficePOCName | String(100) | Builder sales office POC name. |
| BuilderSalesOfficePOCPhone | String(20) | Builder sales office POC phone number. |
| BuilderSalesOfficePOCEmail | String(250) | Builder sales office POC email address. |

### [](#TOP)SelfEmpInc

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| SelfEmpIncID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| BorrowerID | NullableInteger |     |
| DisplayOrder | Integer |     |
| YTDTotalAddBack | NullableCurrency | Deprecated. No longer used on form. |
| YTDPercOwnership | NullableCurrency | Deprecated. No longer used on form. |
| YTDTotalNetProfit | NullableCurrency | Deprecated. No longer used on form. |
| YTDSalaryAndDraws | NullableCurrency | Deprecated. No longer used on form. |
| Form1040OtherIncDesc | string(50) | Deprecated. No longer used on form. |
| HasInterestInBus | Boolean | Deprecated: SelfEmpInc.HasInterestInBus |
| IsEmpByFamily | Boolean | Deprecated: SelfEmpInc.IsEmpByFamily |
| IsPaidCommission | Boolean | Deprecated: SelfEmpInc.IsPaidCommission |
| HasRentalProp | Boolean | Deprecated: SelfEmpInc.HasRentalProp |
| HasVariableInc | Boolean | Deprecated: SelfEmpInc.HasVariableInc |
| CanDocInc | Boolean | Deprecated: SelfEmpInc.CanDocInc |
| HasAdequateLiquidity | Boolean | Deprecated: SelfEmpInc.HasAdequateLiquidity |
| HasPositiveSales | Boolean | Deprecated: SelfEmpInc.HasPositiveSales |
| BusinessName | String(100) | Name of the business in which the borrower is self-employed. |

### [](#TOP)SelfEmpIncYear

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| SelfEmpIncYearID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| SelfEmpIncID | NullableInteger |     |
| DisplayOrder | Integer |     |
| Year | NullableInteger |     |
| Months | NullableInteger |     |
| Form1040TotalIncome | NullableCurrency | Deprecated. No longer used on form. |
| Form1040Wages | NullableCurrency |     |
| Form1040TaxExemptInt | NullableCurrency | Deprecated. No longer used on form. |
| Form1040Refunds | NullableCurrency | Deprecated. No longer used on form. |
| Form1040NonrecAlimony | NullableCurrency | Deprecated. No longer used on form. |
| Form1040SchedDInc | NullableCurrency | Deprecated. No longer used on form. |
| Form1040PensionDist | NullableCurrency | Deprecated. No longer used on form. |
| Form1040SchedEInc | NullableCurrency | Deprecated. No longer used on form. |
| Form1040NonrecUnemp | NullableCurrency | Deprecated. No longer used on form. |
| Form1040SocialSec | NullableCurrency | Deprecated. No longer used on form. |
| Form1040NonrecOtherInc | NullableCurrency | Deprecated. No longer used on form. |
| Form1040OtherInc | NullableCurrency | Deprecated. No longer used on form. |
| Form2106Exp | NullableCurrency | Deprecated. No longer used on form. |
| Form2106Dep | NullableCurrency | Deprecated. No longer used on form. |
| SchedBNonrecInt | NullableCurrency |     |
| SchedBNonrecDiv | NullableCurrency |     |
| SchedCNonrecOther | NullableCurrency |     |
| SchedCDepletion | NullableCurrency |     |
| SchedCDepreciation | NullableCurrency |     |
| SchedCMeals | NullableCurrency |     |
| SchedCBusUseOfHome | NullableCurrency |     |
| SchedCAmort | NullableCurrency |     |
| SchedDCapGains | NullableCurrency |     |
| Form4787CapGains | NullableCurrency | Deprecated. No longer used on form. |
| Form6252Principal | NullableCurrency | Deprecated. No longer used on form. |
| SchedERent | NullableCurrency |     |
| SchedEExp | NullableCurrency |     |
| SchedEAmort | NullableCurrency | Deprecated: SelfEmpIncYear.SchedEAmort |
| SchedEIns | NullableCurrency | Deprecated: SelfEmpIncYear.SchedEIns |
| SchedFCoop | NullableCurrency |     |
| SchedFOther | NullableCurrency |     |
| SchedFDepreciation | NullableCurrency |     |
| SchedFDepletion | NullableCurrency |     |
| SchedFBusUseOfHome | NullableCurrency |     |
| ParterK1OrdInc | NullableCurrency | Deprecated. No longer used on form. |
| ParterK1NetInc | NullableCurrency |     |
| ParterK1Payments | NullableCurrency | Deprecated. No longer used on form. |
| SCorpK1OrdInc | NullableCurrency | Deprecated. No longer used on form. |
| SCorpK1NetInc | NullableCurrency |     |
| Form1065Pass | NullableCurrency |     |
| Form1065Other | NullableCurrency |     |
| Form1065Depreciation | NullableCurrency |     |
| Form1065Depletion | NullableCurrency |     |
| Form1065Amort | NullableCurrency |     |
| Form1065Notes | NullableCurrency |     |
| Form1065Meals | NullableCurrency |     |
| Form1065Percent | NullableCurrency |     |
| Form1120SOther | NullableCurrency |     |
| Form1120SDepreciation | NullableCurrency |     |
| Form1120SDepletion | NullableCurrency |     |
| Form1120SAmort | NullableCurrency |     |
| Form1120SNotes | NullableCurrency |     |
| Form1120SMeals | NullableCurrency |     |
| Form1120SPercent | NullableCurrency | Deprecated: SelfEmpIncYear.Form1120Percent |
| Form1120Inc | NullableCurrency |     |
| Form1120Tax | NullableCurrency |     |
| Form1120Gains | NullableCurrency |     |
| Form1120Other | NullableCurrency |     |
| Form1120Depreciation | NullableCurrency |     |
| Form1120Depletion | NullableCurrency |     |
| Form1120Amort | NullableCurrency |     |
| Form1120OpLoss | NullableCurrency |     |
| Form1120Notes | NullableCurrency |     |
| Form1120Meals | NullableCurrency |     |
| Form1120Percent | NullableCurrency |     |
| Form1120DivPaid | NullableCurrency |     |
| Form1040IRADist | NullableCurrency | Deprecated. No longer used on form. |
| SchedEDepletion | NullableCurrency | Sched E Depletion |
| PartnerK1Dist | NullableCurrency | Deprecated. No longer used on form. |
| SCorpK1Dist | NullableCurrency | Deprecated. No longer used on form. |
| Form1065OrdInc | NullableCurrency | Form 1065 - Ordinary Income (Loss), Net Rental Real Estate Income (Loss), Other Net Rental Income (Loss) |
| Form1065Dist | NullableCurrency | Deprecated. No longer used on form. |
| Form1065Payments | NullableCurrency | Form 1065 Guaranteed Payments to Partner |
| Form1120SOrdInc | NullableCurrency | Form 1120S Ordinary Income (Loss), Net Rental Real Estate Income (Loss), Other Net Rental Income (Loss) |
| Form1120SDist | NullableCurrency | Deprecated. No longer used on form. |
| Form1040OtherGains | NullableCurrency | Deprecated. No longer used on form. |
| SchedCProfitLoss | NullableCurrency | Amount of profit/loss from Schedule C. |
| SchedFProfitLoss | NullableCurrency | Amount of profit/loss from Schedule F. |

### [](#TOP)SalesTools

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| SalesToolsID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| ComparisonLoanPurp | Enum.ComparisonLoanPurp | Indicates the purpose of loan (purchase vs refi) in the comparison.<br><br>* 0 - Purchase<br>* 1 - Refinance |
| ComparisonID1 | NullableInteger |     |
| ComparisonID2 | NullableInteger |     |
| ComparisonID3 | NullableInteger |     |
| PrequalID1 | NullableInteger |     |
| PrequalID2 | NullableInteger |     |
| PrequalID3 | NullableInteger |     |
| IncomeOV | NullableCurrency | Override value for monthly income on the Prequal |
| DebtsOV | NullableCurrency | Override value for monthly debts on the Prequal |
| DesiredPITI | NullableCurrency | Desired PITI on the Prequal |
| ComparisonComments | String(1000) | Comments that print at the bottom of the comparison |
| OpenHousePropertyDesc | String(1000) | Description of the subject property for the open house flyer. |
| OpenHouseComments | String(1000) | Comments that print at the bottom of the open house flyer. |
| OpenHousePicture | String(250) | Identifies the file name and path of the picture used on the flyer. |
| OpenHousePartyCat | Enum.ContactCat | Which party is being used for the source of the presenter properties in the UI and report.&lt;BR&gt;Default=ContactCat.ListingAgent<br><br>* 0 - NotAssigned<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 3 - LoanCloser<br>* 4 - Underwriter<br>* 10 - Lender<br>* 11 - MortgageeForInsurance<br>* 12 - FHASponsoringLender<br>* 13 - FHAOriginatingLender<br>* 20 - RealEstateAgent<br>* 21 - ListingAgent<br>* 22 - SellingAgent<br>* 25 - BuilderOrSeller<br>* 26 - Warrantor<br>* 31 - HazardInsuranceCompany<br>* 32 - MortgageInsuranceCompany<br>* 33 - FloodInsuranceCompany<br>* 34 - FloodDeterminationCompany<br>* 40 - TitleCompany<br>* 42 - Appraiser<br>* 44 - EscrowCompany<br>* 46 - SurveyCompany<br>* 48 - CreditBureau<br>* 59 - Attorney<br>* 60 - BorrowerAttorney<br>* 61 - SellerAttorney<br>* 62 - LenderAttorney<br>* 70 - Inspector<br>* 71 - PestInspector<br>* 80 - Creditor<br>* 81 - Bank<br>* 82 - Employer<br>* 83 - Landlord<br>* 84 - LoanSeller<br>* 85 - Investor<br>* 86 - Contractor<br>* 99 - Borrower<br>* 101 - OpenHouseAgent<br>* 102 - OtherUser<br>* 103 - ReferralSource<br>* 104 - HomeOwnersAssoc<br>* 105 - SettlementLocation<br>* 106 - OtherUser2<br>* 107 - OtherUser3<br>* 108 - OtherUser4<br>* 109 - MortgageeForTitle<br>* 110 - Broker<br>* 111 - Appraiser2<br>* 112 - TaxServiceCompany<br>* 113 - HazardInsuranceCompany2<br>* 114 - Trustee<br>* 115 - FHAAgent<br>* 116 - FHAPostClosingMortgageeRep<br>* 117 - FHAMortgageeRep<br>* 501 - OtherParty1<br>* 502 - OtherParty2<br>* 503 - OtherParty3<br>* 504 - OtherParty4<br>* 505 - OtherParty5<br>* 600 - Opener<br>* 601 - DocDrawer<br>* 602 - QualityControl<br>* 603 - Compliance<br>* 604 - Shipper<br>* 605 - LockDesk<br>* 606 - Accounting<br>* 607 - Servicing<br>* 608 - Insuring<br>* 609 - Secondary<br>* 610 - OtherUser5<br>* 611 - OtherUser6<br>* 612 - OtherUser7<br>* 613 - OtherUser8<br>* 614 - OtherUser9<br>* 615 - OtherUser10<br>* 616 - OtherUser11<br>* 617 - OtherUser12<br>* 618 - OtherUser13<br>* 619 - OtherUser14<br>* 620 - OtherUser15<br>* 621 - OtherUser16<br>* 622 - OtherUser17<br>* 623 - OtherUser18<br>* 624 - OtherUser19<br>* 625 - OtherUser20<br>* 626 - OtherUser21<br>* 627 - OtherUser22<br>* 628 - OtherUser23<br>* 629 - OtherUser24<br>* 630 - OtherUser25 |
| PlannerPICurrent | NullableCurrency | Current PI override value used by Refi Planner sales tool. |
| PlannerPIProposed | NullableCurrency | Proposed PI override value used by Refi Planner sales tool. |
| PlannerClosingCosts | NullableCurrency | Closing Costs override value used by Refi Planner sales tool. |
| CalcFlood | Boolean | If checked then flood insurance is calculated on the prequal and rent vs own |
| ShowTotalSavings | Boolean | Show the Total Savings on the Debt Consolidation screen&lt;BR&gt;Default=False |
| CashToBorrower | NullableCurrency |     |
| DebtConsolidationComments | string(1000) | Comments that print at the bottom of the Debt Consolidation Worksheet |
| ShowPIOnly | Boolean | Show the P&I instead of PITI amount on the Debt Consolidation screen&lt;BR&gt;Default=False |
| ComparisonShowAPR | Boolean | &lt;BR&gt;Default=True |
| OpenHouseShowAPR | Boolean | &lt;BR&gt;Default=True |
| DebtConsolidationShowAPR | Boolean | &lt;BR&gt;Default=True |
| OpenHousePictureAgent | String(250) | Identifies the file name and path of the agent's picture used on the flyer. |
| OpenHousePictureLO | String(250) | Identifies the file name and path of the loan officer's picture used on the flyer. |
| AntiSteeringID1 | NullableInteger | Identifies the loan in the first position on the Anti-Steering disclosure |
| AntiSteeringID2 | NullableInteger | Identifies the loan in the second position on the Anti-Steering disclosure |
| AntiSteeringID3 | NullableInteger | Identifies the loan in the third position on the Anti-Steering disclosure |
| AntiSteeringID4 | NullableInteger | Identifies the loan in the fourth position on the Anti-Steering disclosure |
| AntiSteeringChoiceExplanation | String(1000) | Describes why the borrower chose the loan |
| AntiSteeringOption4Title | String(50) | The column title for the loan option shown in the fourth column. |
| AntiSteeringSelection | Enum.AntiSteeringOptionType | Indicates which option the borrower has selected on the anti-steering disclosure<br><br>* 0 - NotAssigned<br>* 1 - LowestInterestRate<br>* 2 - LowestInterestRateWithNoRiskyFeatures<br>* 3 - LowestPointsAndFees<br>* 4 - Other |

### [](#TOP)MiscForms

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| MiscFormsID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| MBCBrokerRepresents | Enum.BrokerRepresents | Mortgage Broker Contract - Who the broker represents<br><br>* 0 - NotAssigned<br>* 1 - IRepresentYou<br>* 2 - IRepresentYouBut<br>* 3 - IDoNotRepresentYou |
| MBCShopOption | Enum.BrokerShopOption | Mortgage Broker Contract - Indiates whether the broker will show from among lenders or will use a single lender.<br><br>* 0 - ManyLenders<br>* 1 - OneLender |
| MBCNumberOfLenders | NullableInteger | Mortgage Broker Contract - Number of lenders from which the broker will shop. |
| MBCCompAmount | String(50) |     |
| MBCCompNoGreaterThan | String(50) |     |
| MBCPoints | String(50) |     |
| MBCBorFee | String(50) |     |
| MBCLenderFee | String(50) |     |
| FLBANetProceedsOV | NullableCurrency | Florida Mortgage Broker Agreement - overide value for estimated net proceeds |
| FLBABrokerageFeeOV | NullableCurrency | Florida Mortgage Broker Agreement - overide value for the mortgage brokerage fee. |
| FLBAAppDepositOV | NullableCurrency | Florida Mortgage Broker Agreement - application deposit amount |
| FLBAThirdPartyFee | NullableCurrency | Florida Mortgage Broker Agreement - third party fee amount |
| FLBAIsAppDepositRefundable | Boolean | Florida Mortgage Broker Agreement - Indicates whether or not the application deposit is refundable |
| MANoteExpDate | String(50) | MA Only - The approximate expiration date of the note |
| MAAppFee | NullableCurrency |     |
| FLECBrokerName | String(50) | Name of company acting as the broker or lender for this loan. |
| NYAdvisedDesc1OV | String(200) | NY Pre Application Disclosure |
| NYAdvisedDesc2OV | string(200) | NY Pre Application Disclosure |
| NYProcessingAssistantTextOV | string(200) | NY Pre Application Disclosure |
| NYLenderFees | boolean | NY Pre Application Disclosure&lt;BR&gt;Default=False |
| NYLenderFeesPercent | string(10) | NY Pre Application Disclosure |
| NYLenderFeesDollar | string(10) | NY Pre Application Disclosure |
| NYLenderFeesPoints | string(10) | NY Pre Application Disclosure |
| NYFeeUnkown | boolean | NY Pre Application Disclosure&lt;BR&gt;Default=false |
| NYFeeUnknownPoints | string(10) | NY Pre Application Disclosure |
| NYFeesFromLoan | boolean | NY Pre Application Disclosure&lt;BR&gt;Default=false |
| NYFeesFromLoanPercent | string(10) | NY Pre Application Disclosure |
| NYFeesFromLoanDollar | string(10) | NY Pre Application Disclosure |
| NYFeesDirect | boolean | NY Pre Application Disclosure&lt;BR&gt;Default=false |
| NYFeesDirectCommitment | string(10) | NY Pre Application Disclosure |
| NYFeesDirectClosing | string(10) | NY Pre Application Disclosure |
| NYFeesDirectPercent | string(10) | NY Pre Application Disclosure |
| NYFeesDirectDollar | string(10) | NY Pre Application Disclosure |
| NYApplicationFeeOV | NullableCurrency | NY Pre Application Disclosure |
| NYAppraisalFeeOV | NullableCurrency | NY Pre Application Disclosure |
| NYCreditFeeOV | NullableCurrency | NY Pre Application Disclosure |
| NYApplicationFeeRefundableOV | string(300) | NY Pre Application Disclosure |
| NYRefundDesc1OV | string(200) | NY Pre Application Disclosure |
| NYRefundDesc2OV | string(200) | NY Pre Application Disclosure |
| NYProcFeeOV | NullableCurrency | NY Pre Application Disclosure |
| NYFeeDivisionName1 | string(100) | NY Pre Application Disclosure |
| NYFeeDivisionName2 | string(100) | NY Pre Application Disclosure |
| NYFeeDivisionFee1 | String(10) | NY Pre Application Disclosure |
| NYFeeDivisionFee2 | string(10) | NY Pre Application Disclosure |
| NYFeeDivisionFee3 | string(10) | NY Pre Application Disclosure |
| NYFeeDivisionFee4 | string(10) | NY Pre Application Disclosure |
| NYContactName | String(50) | NY Pre Application Disclosure |
| NYContactPhone | String(50) | NY Pre Application Disclosure |
| NYContactPhoneCollect | String(50) | NY Pre Application Disclosure |
| NYContactPhoneTollFree | String(50) | NY Pre Application Disclosure |
| NYDispositionStatusOV | String(50) | Override for Disposition Status on the NY Application Log |
| NYDispositionDateOV | NullableDate | Override for Disposition Date on the NY Application Log |
| NYBrokerFeeAmountLender | NullableCurrency | Broker fee paid by lender on the NY Application Log |
| NYBrokerFeeAmountBorrower | NullableCurrency | Broker fee paid by borrower on the NY Application Log |
| NYBrokerFeeAmountOther1 | NullableCurrency | Broker fee paid by other party (1) on the NY Application Log |
| NYBrokerFeeAmountOther2 | NullableCurrency | Broker fee paid by other party (2) on the NY Application Log |
| NYBrokerFeeDescOther1 | String(50) | Broker fee description paid by other party (1) on the NY Application Log |
| NYBrokerFeeDescOther2 | String(50) | Broker fee description paid by other party (2) on the NY Application Log |
| SSA89AgentOV | String(500) | The company agent on the Authorization for Release of SSN. |
| FLInfoDisclosureBranchPhoneOV | String(16) | Override for contact phone that appears on the disclosure. |
| SSA89CompanyOption | Enum.SSA89CompanyOption | Identifies which company is displayed on the SSA-89 form.<br><br>* 0 - Default<br>* 1 - UserName<br>* 2 - Lender |

### [](#TOP)TrustAccountItem

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| TrustAccountItemID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| CheckNo | NullableInteger |     |
| CheckDate | NullableDate |     |
| Description | String(100) |     |
| Payment | NullableCurrency |     |
| Deposit | NullableCurrency |     |

### [](#TOP)TXForms

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| TXFormsID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| BrokerOrLO | String(150) | Broker or Loan Officer Name |
| SubmitToLender | Boolean |     |
| IndependentContractor | Boolean |     |
| ActingAsFollows | Boolean |     |
| ActingAsFollowsText | String(255) |     |
| RetailPrice | Boolean |     |
| WholesaleOptions | Boolean |     |
| FeeAmount | NullableCurrency |     |
| ApplicationFee | NullableCurrency |     |
| ProcessingFee | NullableCurrency |     |
| AppraisalFee | NullableCurrency |     |
| CreditReportFee | NullableCurrency |     |
| AUFee | NullableCurrency |     |
| OtherFee1Desc | String(50) |     |
| OtherFee1Amount | NullableCurrency |     |
| OtherFee2Desc | String(50) |     |
| OtherFee2Amount | NullableCurrency |     |
| NonRefundableAmount | NullableCurrency |     |
| LicensedEntity | String(150) |     |
| LicenseNo | String(50) |     |
| PricingBasedOnCustomFlag | Boolean | Indicates whether Our pricing for your loan is based upon is checked. |
| PricingBasedOnCustomDesc | String(200) | The description when the Our pricing for your loan is based upon checkbox is checked. |
| EstFeesShownOnGFEFlag | Boolean | Indicates whether the estimated fees which we will charge will be as shown on the good faith estimate... |

### [](#TOP)CustomFields

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| CustomFieldsID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| Field01 | String(2000) | Custom field 1 |
| Field02 | String(2000) | Custom field 2 |
| Field03 | String(2000) | Custom field 3 |
| Field04 | String(2000) | Custom field 4 |
| Field05 | String(2000) | Custom field 5 |
| Field06 | String(2000) | Custom field 6 |
| Field07 | String(2000) | Custom field 7 |
| Field08 | String(2000) | Custom field 8 |
| Field09 | String(2000) | Custom field 9 |
| Field10 | String(2000) | Custom field 10 |
| Field11 | String(2000) | Custom field 11 |
| Field12 | String(2000) | Custom field 12 |
| Field13 | String(2000) | Custom field 13 |
| Field14 | String(2000) | Custom field 14 |
| Field15 | String(2000) | Custom field 15 |
| Field16 | String(2000) | Custom field 16 |
| Field17 | String(2000) | Custom field 17 |
| Field18 | String(2000) | Custom field 18 |
| Field19 | String(2000) | Custom field 19 |
| Field20 | String(2000) | Custom field 20 |
| Field21 | String(2000) | Custom field 21 |
| Field22 | String(2000) | Custom field 22 |
| Field23 | String(2000) | Custom field 23 |
| Field24 | String(2000) | Custom field 24 |
| Field25 | String(2000) | Custom field 25 |
| Field26 | String(2000) | Custom field 26 |
| Field27 | String(2000) | Custom field 27 |
| Field28 | String(2000) | Custom field 28 |
| Field29 | String(2000) | Custom field 29 |
| Field30 | String(2000) | Custom field 30 |
| Field31 | String(2000) | Custom field 31 |
| Field32 | String(2000) | Custom field 32 |
| Field33 | String(2000) | Custom field 33 |
| Field34 | String(2000) | Custom field 34 |
| Field35 | String(2000) | Custom field 35 |
| Field36 | String(2000) | Custom field 36 |
| Field37 | String(2000) | Custom field 37 |
| Field38 | String(2000) | Custom field 38 |
| Field39 | String(2000) | Custom field 39 |
| Field40 | String(2000) | Custom field 40 |
| Field41 | String(2000) | Custom field 41 |
| Field42 | String(2000) | Custom field 42 |
| Field43 | String(2000) | Custom field 43 |
| Field44 | String(2000) | Custom field 44 |
| Field45 | String(2000) | Custom field 45 |
| Field46 | String(2000) | Custom field 46 |
| Field47 | String(2000) | Custom field 47 |
| Field48 | String(2000) | Custom field 48 |
| Field49 | String(2000) | Custom field 49 |
| Field50 | String(2000) | Custom field 50 |
| Field51 | String(2000) | Custom field 51 |
| Field52 | String(2000) | Custom field 52 |
| Field53 | String(2000) | Custom field 53 |
| Field54 | String(2000) | Custom field 54 |
| Field55 | String(2000) | Custom field 55 |
| Field56 | String(2000) | Custom field 56 |
| Field57 | String(2000) | Custom field 57 |
| Field58 | String(2000) | Custom field 58 |
| Field59 | String(2000) | Custom field 59 |
| Field60 | String(2000) | Custom field 60 |
| Field61 | String(2000) | Custom field 61 |
| Field62 | String(2000) | Custom field 62 |
| Field63 | String(2000) | Custom field 63 |
| Field64 | String(2000) | Custom field 64 |
| Field65 | String(2000) | Custom field 65 |
| Field66 | String(2000) | Custom field 66 |
| Field67 | String(2000) | Custom field 67 |
| Field68 | String(2000) | Custom field 68 |
| Field69 | String(2000) | Custom field 69 |
| Field70 | String(2000) | Custom field 70 |
| Field71 | String(2000) | Custom field 71 |
| Field72 | String(2000) | Custom field 72 |
| Field73 | String(2000) | Custom field 73 |
| Field74 | String(2000) | Custom field 74 |
| Field75 | String(2000) | Custom field 75 |
| Field76 | String(2000) | Custom field 76 |
| Field77 | String(2000) | Custom field 77 |
| Field78 | String(2000) | Custom field 78 |
| Field79 | String(2000) | Custom field 79 |
| Field80 | String(2000) | Custom field 80 |
| Field81 | String(2000) | Custom field 81 |
| Field82 | String(2000) | Custom field 82 |
| Field83 | String(2000) | Custom field 83 |
| Field84 | String(2000) | Custom field 84 |
| Field85 | String(2000) | Custom field 85 |
| Field86 | String(2000) | Custom field 86 |
| Field87 | String(2000) | Custom field 87 |
| Field88 | String(2000) | Custom field 88 |
| Field89 | String(2000) | Custom field 89 |
| Field90 | String(2000) | Custom field 90 |
| Field91 | String(2000) | Custom field 91 |
| Field92 | String(2000) | Custom field 92 |
| Field93 | String(2000) | Custom field 93 |
| Field94 | String(2000) | Custom field 94 |
| Field95 | String(2000) | Custom field 95 |
| Field96 | String(2000) | Custom field 96 |
| Field97 | String(2000) | Custom field 97 |
| Field98 | String(2000) | Custom field 98 |
| Field99 | String(2000) | Custom field 99 |
| Field100 | String(2000) | Custom field 100 |
| Field101 | String(2000) | Custom field 101 |
| Field102 | String(2000) | Custom field 102 |
| Field103 | String(2000) | Custom field 103 |
| Field104 | String(2000) | Custom field 104 |
| Field105 | String(2000) | Custom field 105 |
| Field106 | String(2000) | Custom field 106 |
| Field107 | String(2000) | Custom field 107 |
| Field108 | String(2000) | Custom field 108 |
| Field109 | String(2000) | Custom field 109 |
| Field110 | String(2000) | Custom field 110 |
| Field111 | String(2000) | Custom field 111 |
| Field112 | String(2000) | Custom field 112 |
| Field113 | String(2000) | Custom field 113 |
| Field114 | String(2000) | Custom field 114 |
| Field115 | String(2000) | Custom field 115 |
| Field116 | String(2000) | Custom field 116 |
| Field117 | String(2000) | Custom field 117 |
| Field118 | String(2000) | Custom field 118 |
| Field119 | String(2000) | Custom field 119 |
| Field120 | String(2000) | Custom field 120 |
| Field121 | String(2000) | Custom field 121 |
| Field122 | String(2000) | Custom field 122 |
| Field123 | String(2000) | Custom field 123 |
| Field124 | String(2000) | Custom field 124 |
| Field125 | String(2000) | Custom field 125 |
| Field126 | String(2000) | Custom field 126 |
| Field127 | String(2000) | Custom field 127 |
| Field128 | String(2000) | Custom field 128 |
| Field129 | String(2000) | Custom field 129 |
| Field130 | String(2000) | Custom field 130 |
| Field131 | String(2000) | Custom field 131 |
| Field132 | String(2000) | Custom field 132 |
| Field133 | String(2000) | Custom field 133 |
| Field134 | String(2000) | Custom field 134 |
| Field135 | String(2000) | Custom field 135 |
| Field136 | String(2000) | Custom field 136 |
| Field137 | String(2000) | Custom field 137 |
| Field138 | String(2000) | Custom field 138 |
| Field139 | String(2000) | Custom field 139 |
| Field140 | String(2000) | Custom field 140 |
| Field141 | String(2000) | Custom field 141 |
| Field142 | String(2000) | Custom field 142 |
| Field143 | String(2000) | Custom field 143 |
| Field144 | String(2000) | Custom field 144 |
| Field145 | String(2000) | Custom field 145 |
| Field146 | String(2000) | Custom field 146 |
| Field147 | String(2000) | Custom field 147 |
| Field148 | String(2000) | Custom field 148 |
| Field149 | String(2000) | Custom field 149 |
| Field150 | String(2000) | Custom field 150 |
| Field151 | String(2000) | Custom field 151 |
| Field152 | String(2000) | Custom field 152 |
| Field153 | String(2000) | Custom field 153 |
| Field154 | String(2000) | Custom field 154 |
| Field155 | String(2000) | Custom field 155 |
| Field156 | String(2000) | Custom field 156 |
| Field157 | String(2000) | Custom field 157 |
| Field158 | String(2000) | Custom field 158 |
| Field159 | String(2000) | Custom field 159 |
| Field160 | String(2000) | Custom field 160 |
| Field161 | String(2000) | Custom field 161 |
| Field162 | String(2000) | Custom field 162 |
| Field163 | String(2000) | Custom field 163 |
| Field164 | String(2000) | Custom field 164 |
| Field165 | String(2000) | Custom field 165 |
| Field166 | String(2000) | Custom field 166 |
| Field167 | String(2000) | Custom field 167 |
| Field168 | String(2000) | Custom field 168 |
| Field169 | String(2000) | Custom field 169 |
| Field170 | String(2000) | Custom field 170 |
| Field171 | String(2000) | Custom field 171 |
| Field172 | String(2000) | Custom field 172 |
| Field173 | String(2000) | Custom field 173 |
| Field174 | String(2000) | Custom field 174 |
| Field175 | String(2000) | Custom field 175 |
| Field176 | String(2000) | Custom field 176 |
| Field177 | String(2000) | Custom field 177 |
| Field178 | String(2000) | Custom field 178 |
| Field179 | String(2000) | Custom field 179 |
| Field180 | String(2000) | Custom field 180 |
| Field181 | String(2000) | Custom field 181 |
| Field182 | String(2000) | Custom field 182 |
| Field183 | String(2000) | Custom field 183 |
| Field184 | String(2000) | Custom field 184 |
| Field185 | String(2000) | Custom field 185 |
| Field186 | String(2000) | Custom field 186 |
| Field187 | String(2000) | Custom field 187 |
| Field188 | String(2000) | Custom field 188 |
| Field189 | String(2000) | Custom field 189 |
| Field190 | String(2000) | Custom field 190 |
| Field191 | String(2000) | Custom field 191 |
| Field192 | String(2000) | Custom field 192 |
| Field193 | String(2000) | Custom field 193 |
| Field194 | String(2000) | Custom field 194 |
| Field195 | String(2000) | Custom field 195 |
| Field196 | String(2000) | Custom field 196 |
| Field197 | String(2000) | Custom field 197 |
| Field198 | String(2000) | Custom field 198 |
| Field199 | String(2000) | Custom field 199 |
| Field200 | String(2000) | Custom field 200 |
| Field201 | String(2000) | Custom field 201 |
| Field202 | String(2000) | Custom field 202 |
| Field203 | String(2000) | Custom field 203 |
| Field204 | String(2000) | Custom field 204 |
| Field205 | String(2000) | Custom field 205 |
| Field206 | String(2000) | Custom field 206 |
| Field207 | String(2000) | Custom field 207 |
| Field208 | String(2000) | Custom field 208 |
| Field209 | String(2000) | Custom field 209 |
| Field210 | String(2000) | Custom field 210 |
| Field211 | String(2000) | Custom field 211 |
| Field212 | String(2000) | Custom field 212 |
| Field213 | String(2000) | Custom field 213 |
| Field214 | String(2000) | Custom field 214 |
| Field215 | String(2000) | Custom field 215 |
| Field216 | String(2000) | Custom field 216 |
| Field217 | String(2000) | Custom field 217 |
| Field218 | String(2000) | Custom field 218 |
| Field219 | String(2000) | Custom field 219 |
| Field220 | String(2000) | Custom field 220 |
| Field221 | String(2000) | Custom field 221 |
| Field222 | String(2000) | Custom field 222 |
| Field223 | String(2000) | Custom field 223 |
| Field224 | String(2000) | Custom field 224 |
| Field225 | String(2000) | Custom field 225 |
| Field226 | String(2000) | Custom field 226 |
| Field227 | String(2000) | Custom field 227 |
| Field228 | String(2000) | Custom field 228 |
| Field229 | String(2000) | Custom field 229 |
| Field230 | String(2000) | Custom field 230 |
| Field231 | String(2000) | Custom field 231 |
| Field232 | String(2000) | Custom field 232 |
| Field233 | String(2000) | Custom field 233 |
| Field234 | String(2000) | Custom field 234 |
| Field235 | String(2000) | Custom field 235 |
| Field236 | String(2000) | Custom field 236 |
| Field237 | String(2000) | Custom field 237 |
| Field238 | String(2000) | Custom field 238 |
| Field239 | String(2000) | Custom field 239 |
| Field240 | String(2000) | Custom field 240 |
| Field241 | String(2000) | Custom field 241 |
| Field242 | String(2000) | Custom field 242 |
| Field243 | String(2000) | Custom field 243 |
| Field244 | String(2000) | Custom field 244 |
| Field245 | String(2000) | Custom field 245 |
| Field246 | String(2000) | Custom field 246 |
| Field247 | String(2000) | Custom field 247 |
| Field248 | String(2000) | Custom field 248 |
| Field249 | String(2000) | Custom field 249 |
| Field250 | String(2000) | Custom field 250 |
| Field251 | String(2000) | Custom field 251 |
| Field252 | String(2000) | Custom field 252 |
| Field253 | String(2000) | Custom field 253 |
| Field254 | String(2000) | Custom field 254 |
| Field255 | String(2000) | Custom field 255 |
| Field256 | String(2000) | Custom field 256 |
| Field257 | String(2000) | Custom field 257 |
| Field258 | String(2000) | Custom field 258 |
| Field259 | String(2000) | Custom field 259 |
| Field260 | String(2000) | Custom field 260 |
| Field261 | String(2000) | Custom field 261 |
| Field262 | String(2000) | Custom field 262 |
| Field263 | String(2000) | Custom field 263 |
| Field264 | String(2000) | Custom field 264 |
| Field265 | String(2000) | Custom field 265 |
| Field266 | String(2000) | Custom field 266 |
| Field267 | String(2000) | Custom field 267 |
| Field268 | String(2000) | Custom field 268 |
| Field269 | String(2000) | Custom field 269 |
| Field270 | String(2000) | Custom field 270 |
| Field271 | String(2000) | Custom field 271 |
| Field272 | String(2000) | Custom field 272 |
| Field273 | String(2000) | Custom field 273 |
| Field274 | String(2000) | Custom field 274 |
| Field275 | String(2000) | Custom field 275 |
| Field276 | String(2000) | Custom field 276 |
| Field277 | String(2000) | Custom field 277 |
| Field278 | String(2000) | Custom field 278 |
| Field279 | String(2000) | Custom field 279 |
| Field280 | String(2000) | Custom field 280 |
| Field281 | String(2000) | Custom field 281 |
| Field282 | String(2000) | Custom field 282 |
| Field283 | String(2000) | Custom field 283 |
| Field284 | String(2000) | Custom field 284 |
| Field285 | String(2000) | Custom field 285 |
| Field286 | String(2000) | Custom field 286 |
| Field287 | String(2000) | Custom field 287 |
| Field288 | String(2000) | Custom field 288 |
| Field289 | String(2000) | Custom field 289 |
| Field290 | String(2000) | Custom field 290 |
| Field291 | String(2000) | Custom field 291 |
| Field292 | String(2000) | Custom field 292 |
| Field293 | String(2000) | Custom field 293 |
| Field294 | String(2000) | Custom field 294 |
| Field295 | String(2000) | Custom field 295 |
| Field296 | String(2000) | Custom field 296 |
| Field297 | String(2000) | Custom field 297 |
| Field298 | String(2000) | Custom field 298 |
| Field299 | String(2000) | Custom field 299 |
| Field300 | String(2000) | Custom field 300 |
| Field301 | String(2000) | Custom field 301 |
| Field302 | String(2000) | Custom field 302 |
| Field303 | String(2000) | Custom field 303 |
| Field304 | String(2000) | Custom field 304 |
| Field305 | String(2000) | Custom field 305 |
| Field306 | String(2000) | Custom field 306 |
| Field307 | String(2000) | Custom field 307 |
| Field308 | String(2000) | Custom field 308 |
| Field309 | String(2000) | Custom field 309 |
| Field310 | String(2000) | Custom field 310 |
| Field311 | String(2000) | Custom field 311 |
| Field312 | String(2000) | Custom field 312 |
| Field313 | String(2000) | Custom field 313 |
| Field314 | String(2000) | Custom field 314 |
| Field315 | String(2000) | Custom field 315 |
| Field316 | String(2000) | Custom field 316 |
| Field317 | String(2000) | Custom field 317 |
| Field318 | String(2000) | Custom field 318 |
| Field319 | String(2000) | Custom field 319 |
| Field320 | String(2000) | Custom field 320 |
| Field321 | String(2000) | Custom field 321 |
| Field322 | String(2000) | Custom field 322 |
| Field323 | String(2000) | Custom field 323 |
| Field324 | String(2000) | Custom field 324 |
| Field325 | String(2000) | Custom field 325 |
| Field326 | String(2000) | Custom field 326 |
| Field327 | String(2000) | Custom field 327 |
| Field328 | String(2000) | Custom field 328 |
| Field329 | String(2000) | Custom field 329 |
| Field330 | String(2000) | Custom field 330 |
| Field331 | String(2000) | Custom field 331 |
| Field332 | String(2000) | Custom field 332 |
| Field333 | String(2000) | Custom field 333 |
| Field334 | String(2000) | Custom field 334 |
| Field335 | String(2000) | Custom field 335 |
| Field336 | String(2000) | Custom field 336 |
| Field337 | String(2000) | Custom field 337 |
| Field338 | String(2000) | Custom field 338 |
| Field339 | String(2000) | Custom field 339 |
| Field340 | String(2000) | Custom field 340 |
| Field341 | String(2000) | Custom field 341 |
| Field342 | String(2000) | Custom field 342 |
| Field343 | String(2000) | Custom field 343 |
| Field344 | String(2000) | Custom field 344 |
| Field345 | String(2000) | Custom field 345 |
| Field346 | String(2000) | Custom field 346 |
| Field347 | String(2000) | Custom field 347 |
| Field348 | String(2000) | Custom field 348 |
| Field349 | String(2000) | Custom field 349 |
| Field350 | String(2000) | Custom field 350 |
| Field351 | String(2000) | Custom field 351 |
| Field352 | String(2000) | Custom field 352 |
| Field353 | String(2000) | Custom field 353 |
| Field354 | String(2000) | Custom field 354 |
| Field355 | String(2000) | Custom field 355 |
| Field356 | String(2000) | Custom field 356 |
| Field357 | String(2000) | Custom field 357 |
| Field358 | String(2000) | Custom field 358 |
| Field359 | String(2000) | Custom field 359 |
| Field360 | String(2000) | Custom field 360 |
| Field361 | String(2000) | Custom field 361 |
| Field362 | String(2000) | Custom field 362 |
| Field363 | String(2000) | Custom field 363 |
| Field364 | String(2000) | Custom field 364 |
| Field365 | String(2000) | Custom field 365 |
| Field366 | String(2000) | Custom field 366 |
| Field367 | String(2000) | Custom field 367 |
| Field368 | String(2000) | Custom field 368 |
| Field369 | String(2000) | Custom field 369 |
| Field370 | String(2000) | Custom field 370 |
| Field371 | String(2000) | Custom field 371 |
| Field372 | String(2000) | Custom field 372 |
| Field373 | String(2000) | Custom field 373 |
| Field374 | String(2000) | Custom field 374 |
| Field375 | String(2000) | Custom field 375 |
| Field376 | String(2000) | Custom field 376 |
| Field377 | String(2000) | Custom field 377 |
| Field378 | String(2000) | Custom field 378 |
| Field379 | String(2000) | Custom field 379 |
| Field380 | String(2000) | Custom field 380 |
| Field381 | String(2000) | Custom field 381 |
| Field382 | String(2000) | Custom field 382 |
| Field383 | String(2000) | Custom field 383 |
| Field384 | String(2000) | Custom field 384 |
| Field385 | String(2000) | Custom field 385 |
| Field386 | String(2000) | Custom field 386 |
| Field387 | String(2000) | Custom field 387 |
| Field388 | String(2000) | Custom field 388 |
| Field389 | String(2000) | Custom field 389 |
| Field390 | String(2000) | Custom field 390 |
| Field391 | String(2000) | Custom field 391 |
| Field392 | String(2000) | Custom field 392 |
| Field393 | String(2000) | Custom field 393 |
| Field394 | String(2000) | Custom field 394 |
| Field395 | String(2000) | Custom field 395 |
| Field396 | String(2000) | Custom field 396 |
| Field397 | String(2000) | Custom field 397 |
| Field398 | String(2000) | Custom field 398 |
| Field399 | String(2000) | Custom field 399 |
| Field400 | String(2000) | Custom field 400 |
| Field401 | String(2000) | Custom field 401 |
| Field402 | String(2000) | Custom field 402 |
| Field403 | String(2000) | Custom field 403 |
| Field404 | String(2000) | Custom field 404 |
| Field405 | String(2000) | Custom field 405 |
| Field406 | String(2000) | Custom field 406 |
| Field407 | String(2000) | Custom field 407 |
| Field408 | String(2000) | Custom field 408 |
| Field409 | String(2000) | Custom field 409 |
| Field410 | String(2000) | Custom field 410 |
| Field411 | String(2000) | Custom field 411 |
| Field412 | String(2000) | Custom field 412 |
| Field413 | String(2000) | Custom field 413 |
| Field414 | String(2000) | Custom field 414 |
| Field415 | String(2000) | Custom field 415 |
| Field416 | String(2000) | Custom field 416 |
| Field417 | String(2000) | Custom field 417 |
| Field418 | String(2000) | Custom field 418 |
| Field419 | String(2000) | Custom field 419 |
| Field420 | String(2000) | Custom field 420 |
| Field421 | String(2000) | Custom field 421 |
| Field422 | String(2000) | Custom field 422 |
| Field423 | String(2000) | Custom field 423 |
| Field424 | String(2000) | Custom field 424 |
| Field425 | String(2000) | Custom field 425 |
| Field426 | String(2000) | Custom field 426 |
| Field427 | String(2000) | Custom field 427 |
| Field428 | String(2000) | Custom field 428 |
| Field429 | String(2000) | Custom field 429 |
| Field430 | String(2000) | Custom field 430 |
| Field431 | String(2000) | Custom field 431 |
| Field432 | String(2000) | Custom field 432 |
| Field433 | String(2000) | Custom field 433 |
| Field434 | String(2000) | Custom field 434 |
| Field435 | String(2000) | Custom field 435 |
| Field436 | String(2000) | Custom field 436 |
| Field437 | String(2000) | Custom field 437 |
| Field438 | String(2000) | Custom field 438 |
| Field439 | String(2000) | Custom field 439 |
| Field440 | String(2000) | Custom field 440 |
| Field441 | String(2000) | Custom field 441 |
| Field442 | String(2000) | Custom field 442 |
| Field443 | String(2000) | Custom field 443 |
| Field444 | String(2000) | Custom field 444 |
| Field445 | String(2000) | Custom field 445 |
| Field446 | String(2000) | Custom field 446 |
| Field447 | String(2000) | Custom field 447 |
| Field448 | String(2000) | Custom field 448 |
| Field449 | String(2000) | Custom field 449 |
| Field450 | String(2000) | Custom field 450 |
| Field451 | String(2000) | Custom field 451 |
| Field452 | String(2000) | Custom field 452 |
| Field453 | String(2000) | Custom field 453 |
| Field454 | String(2000) | Custom field 454 |
| Field455 | String(2000) | Custom field 455 |
| Field456 | String(2000) | Custom field 456 |
| Field457 | String(2000) | Custom field 457 |
| Field458 | String(2000) | Custom field 458 |
| Field459 | String(2000) | Custom field 459 |
| Field460 | String(2000) | Custom field 460 |
| Field461 | String(2000) | Custom field 461 |
| Field462 | String(2000) | Custom field 462 |
| Field463 | String(2000) | Custom field 463 |
| Field464 | String(2000) | Custom field 464 |
| Field465 | String(2000) | Custom field 465 |
| Field466 | String(2000) | Custom field 466 |
| Field467 | String(2000) | Custom field 467 |
| Field468 | String(2000) | Custom field 468 |
| Field469 | String(2000) | Custom field 469 |
| Field470 | String(2000) | Custom field 470 |
| Field471 | String(2000) | Custom field 471 |
| Field472 | String(2000) | Custom field 472 |
| Field473 | String(2000) | Custom field 473 |
| Field474 | String(2000) | Custom field 474 |
| Field475 | String(2000) | Custom field 475 |
| Field476 | String(2000) | Custom field 476 |
| Field477 | String(2000) | Custom field 477 |
| Field478 | String(2000) | Custom field 478 |
| Field479 | String(2000) | Custom field 479 |
| Field480 | String(2000) | Custom field 480 |
| Field481 | String(2000) | Custom field 481 |
| Field482 | String(2000) | Custom field 482 |
| Field483 | String(2000) | Custom field 483 |
| Field484 | String(2000) | Custom field 484 |
| Field485 | String(2000) | Custom field 485 |
| Field486 | String(2000) | Custom field 486 |
| Field487 | String(2000) | Custom field 487 |
| Field488 | String(2000) | Custom field 488 |
| Field489 | String(2000) | Custom field 489 |
| Field490 | String(2000) | Custom field 490 |
| Field491 | String(2000) | Custom field 491 |
| Field492 | String(2000) | Custom field 492 |
| Field493 | String(2000) | Custom field 493 |
| Field494 | String(2000) | Custom field 494 |
| Field495 | String(2000) | Custom field 495 |
| Field496 | String(2000) | Custom field 496 |
| Field497 | String(2000) | Custom field 497 |
| Field498 | String(2000) | Custom field 498 |
| Field499 | String(2000) | Custom field 499 |
| Field500 | String(2000) | Custom field 500 |

### [](#TOP)HUD1

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| HUD1ID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| LoanID | NullableInteger | Loan ID of the Closing Docs / HUD1 loan. |
| FileNo | String(50) | HUD File number assigned to this file. |
| MortgageType | Enum.HUD1MortgageType | This field has been deprecated and is not used on the new (2010) HUD1.<br><br>* 0 - NotAssigned<br>* 1 - VA<br>* 2 - FHA<br>* 3 - Conventional<br>* 4 - RHS |
| BuilderOrSellerTIN | String(50) | TIN number assigned to the seller. |
| SettlementAgentTIN | String(50) | Escrow TIN number |
| SettlementText | String(500) |     |
| InterimInterestDateFrom | NullableDate |     |
| InterimInterestDateTo | NullableDate |     |
| MIMonthsOV | NullableInteger |     |
| LenderCoverage | NullableCurrency |     |
| Line905Desc | String(100) | This field has been deprecated and is not used on the new (2010) HUD1. |
| OwnersCoverage | NullableCurrency |     |
| Line1501Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1501Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1502Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1502Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1503Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1503Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1504Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1504Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1505Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1505Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1506Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1506Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1507Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1507Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1508Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1508Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1509Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1509Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1510Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1510Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1511Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1511Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1512Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1512Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1513Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1513Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1514Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1514Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| Line1515Name | String(50) | (HUD-1A only) Disbursement item name. |
| Line1515Amount | NullableCurrency | (HUD-1A only) Disbursement item amount. |
| LoanAmountOption | Enum.LoanAmountOption | (HUD1A only, line 1600 base loan or loan with MIP/FF)<br><br>* 0 - BaseLoan<br>* 1 - LoanWith |
| CashFromBorrower | NullableCurrency | (HUD1A only, line 1601) |
| Line1008MonthsInReserve | NullableInteger | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line1008Payment | NullableCurrency | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line1107ItemNumbers | String(50) | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line1108ItemNumbers | String(50) | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line102Amount | NullableCurrency |     |
| Line104Desc | String(50) |     |
| Line104Amount | NullableCurrency |     |
| Line105Desc | String(50) |     |
| Line105Amount | NullableCurrency |     |
| Line106DateFrom | NullableDate |     |
| Line106DateTo | NullableDate |     |
| Line106Amount | NullableCurrency |     |
| Line107DateFrom | NullableDate |     |
| Line107DateTo | NullableDate |     |
| Line107Amount | NullableCurrency |     |
| Line108DateFrom | NullableDate |     |
| Line108DateTo | NullableDate |     |
| Line108Amount | NullableCurrency |     |
| Line109Desc | String(50) |     |
| Line109Amount | NullableCurrency |     |
| Line110Desc | String(50) |     |
| Line110Amount | NullableCurrency |     |
| Line111Desc | String(50) |     |
| Line111Amount | NullableCurrency |     |
| Line112Desc | String(50) |     |
| Line112Amount | NullableCurrency |     |
| TotalFromBorrowerOV | NullableCurrency | OV value for line 120. |
| Line201Amount | NullableCurrency |     |
| Line202Amount | NullableCurrency |     |
| Line203Amount | NullableCurrency |     |
| Line204Desc | String(50) |     |
| Line204Amount | NullableCurrency |     |
| Line204PaidByOthers | Boolean | This field has been deprecated and is not used on the new (2010) HUD1.&lt;BR&gt;Default=False |
| Line205Desc | String(50) |     |
| Line205Amount | NullableCurrency |     |
| Line205PaidByOthers | Boolean | This field has been deprecated and is not used on the new (2010) HUD1.&lt;BR&gt;Default=False |
| Line206Desc | String(50) |     |
| Line206Amount | NullableCurrency |     |
| Line206PaidByOthers | Boolean | This field has been deprecated and is not used on the new (2010) HUD1.&lt;BR&gt;Default=False |
| Line207Desc | String(50) |     |
| Line207Amount | NullableCurrency |     |
| Line207PaidByOthers | Boolean | This field has been deprecated and is not used on the new (2010) HUD1.&lt;BR&gt;Default=False |
| Line208Desc | String(50) |     |
| Line208Amount | NullableCurrency |     |
| Line208PaidByOthers | Boolean | This field has been deprecated and is not used on the new (2010) HUD1.&lt;BR&gt;Default=False |
| Line209Desc | String(50) |     |
| Line209Amount | NullableCurrency |     |
| Line209PaidByOthers | Boolean | This field has been deprecated and is not used on the new (2010) HUD1.&lt;BR&gt;Default=False |
| Line210DateFrom | NullableDate |     |
| Line210DateTo | NullableDate |     |
| Line210Amount | NullableCurrency |     |
| Line211DateFrom | NullableDate |     |
| Line211DateTo | NullableDate |     |
| Line211Amount | NullableCurrency |     |
| Line212DateFrom | NullableDate |     |
| Line212DateTo | NullableDate |     |
| Line212Amount | NullableCurrency |     |
| Line213Desc | String(50) |     |
| Line213Amount | NullableCurrency |     |
| Line214Desc | String(50) |     |
| Line214Amount | NullableCurrency |     |
| Line215Desc | String(50) |     |
| Line215Amount | NullableCurrency |     |
| Line216Desc | String(50) |     |
| Line216Amount | NullableCurrency |     |
| Line217Desc | String(50) |     |
| Line217Amount | NullableCurrency |     |
| Line218Desc | String(50) |     |
| Line218Amount | NullableCurrency |     |
| Line219Desc | String(50) |     |
| Line219Amount | NullableCurrency |     |
| TotalByBorrowerOV | NullableCurrency |     |
| TotalSettlementBorrowerOV | NullableCurrency |     |
| Line402Amount | NullableCurrency |     |
| Line403Desc | String(50) |     |
| Line403Amount | NullableCurrency |     |
| Line404Desc | String(50) |     |
| Line404Amount | NullableCurrency |     |
| Line405Desc | String(50) |     |
| Line405Amount | NullableCurrency |     |
| Line406DateFrom | NullableDate |     |
| Line406DateTo | NullableDate |     |
| Line406Amount | NullableCurrency |     |
| Line407DateFrom | NullableDate |     |
| Line407DateTo | NullableDate |     |
| Line407Amount | NullableCurrency |     |
| Line408DateFrom | NullableDate |     |
| Line408DateTo | NullableDate |     |
| Line408Amount | NullableCurrency |     |
| Line409Desc | String(50) |     |
| Line409Amount | NullableCurrency |     |
| Line410Desc | String(50) |     |
| Line410Amount | NullableCurrency |     |
| Line411Desc | String(50) |     |
| Line411Amount | NullableCurrency |     |
| Line412Desc | String(50) |     |
| Line412Amount | NullableCurrency |     |
| TotalFromSellerOV | NullableCurrency | OV value for line 120. |
| Line501Amount | NullableCurrency |     |
| Line503Amount | NullableCurrency |     |
| Line504Amount | NullableCurrency |     |
| Line505Amount | NullableCurrency |     |
| Line506Desc | String(50) |     |
| Line506Amount | NullableCurrency |     |
| Line507Desc | String(50) |     |
| Line507Amount | NullableCurrency |     |
| Line508Desc | String(50) |     |
| Line508Amount | NullableCurrency |     |
| Line509Desc | String(50) |     |
| Line509Amount | NullableCurrency |     |
| Line510DateFrom | NullableDate |     |
| Line510DateTo | NullableDate |     |
| Line510Amount | NullableCurrency |     |
| Line511DateFrom | NullableDate |     |
| Line511DateTo | NullableDate |     |
| Line511Amount | NullableCurrency |     |
| Line512DateFrom | NullableDate |     |
| Line512DateTo | NullableDate |     |
| Line512Amount | NullableCurrency |     |
| Line513Desc | String(50) |     |
| Line513Amount | NullableCurrency |     |
| Line514Desc | String(50) |     |
| Line514Amount | NullableCurrency |     |
| Line515Desc | String(50) |     |
| Line515Amount | NullableCurrency |     |
| Line516Desc | String(50) |     |
| Line516Amount | NullableCurrency |     |
| Line517Desc | String(50) |     |
| Line517Amount | NullableCurrency |     |
| Line518Desc | String(50) |     |
| Line518Amount | NullableCurrency |     |
| Line519Desc | String(50) |     |
| Line519Amount | NullableCurrency |     |
| TotalReductionsSellerOV | NullableCurrency |     |
| TotalSettlementSellerOV | NullableCurrency |     |
| Line700Perc | NullableCurrency | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line700Perc2 | NullableCurrency | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line700Perc3 | NullableCurrency | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line700PercText | String(20) | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line700BaseLoanTier1 | NullableCurrency | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line700BaseLoanTier2 | NullableCurrency | This field has been deprecated and is not used on the new (2010) HUD1. |
| Line700TotalOV | NullableCurrency |     |
| Line701Amount | NullableCurrency |     |
| Line701PaidTo | String(100) |     |
| Line702Amount | NullableCurrency |     |
| Line702PaidTo | String(100) |     |
| Line703PBA | NullableCurrency |     |
| Line703PBS | NullableCurrency |     |
| Line704Desc | String(100) |     |
| Line704PBA | NullableCurrency |     |
| Line704PBS | NullableCurrency |     |
| TotalBorrowerChargesOV | NullableCurrency |     |
| TotalSellerChargesOV | NullableCurrency |     |
| AgentPortionOfTitlePrem | NullableCurrency | The agents portion of the title insurance premium |
| UnderwriterPortionOfTitlePrem | NullableCurrency | The underwriter's portion of the title insurance premium |
| TitleCompanyNameOV | String(50) | Override for Title Company Name for who HUD line 1107 is paid to. |
| OmitLenderPaidFee | Boolean | HUD1 Omit Lender Paid Fee&lt;BR&gt;Default=False |
| Line102NameOV | String(50) | HUD Line 102 Name Override |
| SellerCredit | NullableCurrency | The final amount of the seller credit for non-itemized amounts. |
| PersonalPropertyAmount | NullableCurrency | The sale price of any personal property included in the sale |
| AssumedLoanAmount | NullableCurrency | The value of the field Existing Loan(s) Assumed or Taken Subject To |
| SellerPayoffOfFirstMort | NullableCurrency | The payoff amount of the sellers first mortgage |
| SellerPayoffOfSecondMort | NullableCurrency | The payoff amount of the sellers second mortgage |
| DebtsToBePaidOffDescOV | String(50) | Override value for the debts to be paid off description (line K04 on the Closing Disclosure) |
| ExcessDeposit | NullableCurrency | The amount of the excess deposit due from seller |
| CureOV | NullableCurrency | Override value for the tolerance cure |
| CustomaryRecitals | String(10000) | Customary recitals to print on the closing disclosure addendum. |
| SeeAdditionalPagesBorTrans | Boolean | Indicates whether a notice to see additional pages is printed in the Borrower Transaction subsection of the Summaries of Transaction section. |
| SeeAdditionalPagesSellerTrans | Boolean | Indicates whether a notice to see additional pages is printed in the Seller Transaction subsection of the Summaries of Transaction section. |
| Cure | NullableCurrency | The amount of any required tolerance cure. Applies to TRID loans only. This value is calculated and should not be set directly. |
| CureTestResult | Enum.CureTestResult | The result of the test to determine if there is a tolerance cure.<br><br>* 0 - NotAssigned<br>* 1 - NotATRIDLoan<br>* 2 - LENotDelivered<br>* 3 - NoCure<br>* 4 - Cure |
| TRIDPayoffSourceForCD | Enum.TRIDPayoffSourceForCD | Indicates the source of the data for the payoffs on the Closing Disclosure: the debts on the loan application or the closing payoffs table<br><br>* 0 - DebtsOnApplication<br>* 1 - ClosingPayoffsTable |
| CDOmitSellerInfo | Boolean | Indicates whether the seller information should be omitted from the Sellers Transaction section on page 3 of the closing disclosure. |
| SellerCreditDueFromSellerOV | NullableCurrency | Override value for the amount of the seller credit due from the seller. |

### [](#TOP)NYAppLogFee

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| NYAppLogFeeID | Integer |     |
| FileDataID | Integer | ID of the Loan File |
| DisplayOrder | Integer | Sets the order the items appear in the program. |
| FeeType | Enum.NYAppLogFeeType | * 0 - Received<br>* 1 - Distributed |
| Purpose | String(50) |     |
| FeeAmount | NullableCurrency |     |
| FeeDate | NullableDate |     |
| Description | String(400) |     |

### [](#TOP)FieldNote

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FieldNoteID | Integer |     |
| FileDataID | Integer |     |
| ObjectTableName | String(50) |     |
| FieldName | String(50) |     |
| RecordBaseID | Integer |     |
| FollowUpFlag | Enum.FollowUpFlagFieldNote | &lt;BR&gt;Default=YellowFlag<br><br>* 0 - NotAssigned<br>* 1 - RedFlag<br>* 2 - BlueFlag<br>* 3 - YellowFlag<br>* 4 - GreenFlag<br>* 5 - OrangeFlag<br>* 6 - PurpleFlag |
| FollowUpDate | NullableDateTime |     |
| AlertFlag | Enum.AlertFlag | * 0 - NotAssigned<br>* 1 - RedAlert<br>* 3 - YellowAlert |
| AlertUserRole | Enum.UserRole | User roles who will be alerted by this item.&lt;BR&gt;Default=UserRole.Everyone<br><br>* 0 - None<br>* 1 - LoanOfficer<br>* 2 - LoanProcessor<br>* 4 - Other<br>* 8 - Other2<br>* 16 - Other3<br>* 32 - Other4<br>* 64 - Opener<br>* 128 - Underwriter<br>* 256 - DocDrawer<br>* 512 - Closer<br>* 1024 - QualityControl<br>* 2048 - Compliance<br>* 4096 - Shipper<br>* 8192 - LockDesk<br>* 16384 - Accounting<br>* 32768 - Servicing<br>* 65536 - Insuring<br>* 131072 - Secondary<br>* 262144 - Other5<br>* 524288 - Other6<br>* 1048576 - Other7<br>* 2097152 - Other8<br>* 4194304 - Other9<br>* 8388608 - Other10<br>* 16777216 - Other11<br>* 33554432 - Other12<br>* 67108864 - Other13<br>* 134217728 - Other14<br>* 268435456 - Other15<br>* 536870912 - Other16<br>* 1073741824 - Other17<br>* 2147483648 - Other18<br>* 4294967296 - Other19<br>* 8589934592 - Other20<br>* 17179869184 - Other21<br>* 34359738368 - Other22<br>* 68719476736 - Other23<br>* 137438953472 - Other24<br>* 274877906944 - Other25<br>* 549755813887 - EveryoneDefined<br>* 4611686018427387903 - Everyone |
| Notes | String(10000) |     |

### [](#TOP)OSOResult

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| OSOResultID | Integer | OSO Results Primary Key |
| FileDataID | Integer | ID of the Loan File |
| VendorCode | String(20) | Identifies the vendor interface that this result applies to. |
| Description | String(4000) | A description of the result. |
| ResultDate | DateTime | The date the results were obtained. |

### [](#TOP)PriceAdjustment

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| PriceAdjustmentID | Integer | Primary Key |
| FileDataID | Integer | Foreign key |
| LoanID | NullableInteger | Contains Null for investor price adjustments, otherwise contains the ID of the loan (for buy-side price adjustments) |
| Description | String(500) | Description of the pricing adjustment |
| Side | Enum.PriceAdjustmentSide | Price adjustment side (buy side or sell side)<br><br>* 1 - Buy<br>* 2 - Sell |
| PricePercent | NullableCurrency | The amount the price should be adjusted (i.e. -0.125 indicates the price should be lowered by 0.125) |
| IntRatePercent | NullableCurrency | The amount of the interest rate adjustment (i.e. 0.250 indicates that the interest rate should be 0.25 higher than the base interest rate) |
| FeeAmount | NullableCurrency | The amount of the fee in dollars |
| DisplayOrder | Integer | Determines the order in which the items appear in a list |
| PPEGenerated | Boolean | Flag indicating whether the adjustment was generated buy a Product and Pricing Engine.&lt;BR&gt;Default=False |
| MarginPercent | NullableCurrency | The amount by which the margin is adjusted |
| Notes | String(500) | Notes concerning the adjustment |
| PriceAdjustmentType | Enum.PriceAdjustmentType | Identifies the type of price adjustment (standard or SRP)<br><br>* 0 - StandardPriceAdjustment<br>* 1 - SRPPriceAdjustment |

### [](#TOP)VAServiceData

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| VAServiceDataID | Integer |     |
| FileDataID | Integer |     |
| ActiveServiceDateFrom | NullableDate | Date service started. Used on the VA Request for a Certificate of Eligibility |
| ActiveServiceDateTo | NullableDate | Date service was ended. Used on the VA Request for a Certificate of Eligibility |
| VeteransName | String(100) | Veteran's Name. Used on the VA Request for a Certificate of Eligibility |
| ServiceNo | String(50) | Veteran's Service Number. Used on the VA Request for a Certificate of Eligibility |
| ServiceBranch | String(50) | Veteran's Branch of Service. Used on the VA Request for a Certificate of Eligibility. |
| MilitaryServiceType | Enum.MilitaryServiceType | Type of service (Active or Reserve / National Guard).&lt;BR&gt;Default=ActiveService<br><br>* 0 - ActiveService<br>* 1 - ReserveOrNationalGuardService |
| MilitaryOfficerOrEnlisted | Enum.MilitaryOfficerOrEnlistedType | Designates if the veteran served as an officer or enlisted.<br><br>* 0 - NotAssigned<br>* 1 - Officer<br>* 2 - Enlisted |

### [](#TOP)VAPreviousLoan

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| VAPreviousLoanID | Integer |     |
| FileDataID | Integer |     |
| VAPreviousLoanType | Enum.VAPrevLoanType | VA Previous Loan Type. Used on the VA Reqeust for a Certificate of Eligibility<br><br>* 0 - NotAssigned<br>* 1 - Home<br>* 2 - Refinance<br>* 3 - ManufacturedHome<br>* 4 - Direct |
| Street | String(50) | Previous Loan subject property street. Used on the VA Request for a Certificate of Eligibility |
| City | String(50) | Previous Loan subject property city. Used on the VA Request for a Certificate of Eligibility |
| State | String(2) | Previous Loan subject property state. Used on the VA Request for a Certificate of Eligibility |
| Zip | String(10) | Previous Loan subject property zip. Used on the VA Request for a Certificate of Eligibility |
| DateOfLoan | NullableDate | Previous Loan Date of Loan. Used on the VA Request for a Certificate of Eligibility |
| PropertyStillOwned | Enum.YesNoNA | Previous Loan subject property still owned. Used on the VA Request for a Certificate of Eligibility<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| DateOfSale | NullableDate | Previous Loan subject property Date of Sale. Used on the VA Request for a Certificate of Eligibility |
| VALoanNo | String(50) | Previous Loan VA Loan Number. Used on the VA Request for a Certificate of Eligibility |

### [](#TOP)HAMP

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| HAMPID | Integer | Home Affordable Modification - Primary Key |
| FileDataID | Integer | Foriegn key to FileDataID |
| HardshipExplanation | String(10000) | Explanation of the hardship |
| PreviouslyModifiedUnderHAMP | Enum.YesNoNA | Indicates whether or not the loan was previously modified under HMP<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| DateOfImminentDefault | NullableDate | Indicates when the loan is expected to become in defaults. Applicable if the loan flagged for imminent default, |
| Chapter7DischargeAndDidNotReaffirmMortgage | Enum.YesNoNA | Indicates that the borrower(s) have received a Chapter 7 bankruptcy discharge in a case involving the first lien mortgage and did not reaffirm the mortgage debt under applicable law<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| CurrentLoanHasEscrowAccount | Enum.YesNoNA | Indicates whether or not the existing loan has an associated escrow account<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ImminentDefaultDetermined | Enum.YesNoNA | Indicates whether or not the underwriter has determined the loan will default imminently.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ImminentDefaultExplanation | String(10000) | Explanation of why the loan was determined to be in (or not in) imminent default |
| OriginalNoteDate | NullableDate | The date of the original note |
| ServicerLoanNumber | String(50) | The servicer's loan number |
| EscrowShortageAmount | NullableCurrency | The escrow shortage amount, as it appears on the workout plan cover letter. |
| SolicitationDeadlineOV | NullableDate | The override date for the soliciation due date (normally 14 days from the date the workout plan was sent). |
| IsMERSMortgageeOfRecord | Enum.YesNoNA | Indicates whether or not MERS is the mortgagee of record<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsMBSLoan | Enum.YesNoNA | Indicates that the loan is part of an MBS pool.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| MBSRequestedRemovalDate | NullableDate | The date that the loan was requested to be removed from the MBS pool |
| MBSActualRemovalDate | NullableDate | The date that the loan was actually removed from the MBS pool |
| OriginalIntRate | NullableCurrency | The interest rate on the unmodified loan |
| OriginalRemainingTerm | NullableInteger | The remaining term on the unmodified loan |
| EligibleForHARP | Enum.YesNoNA | Indicates whether or not the loan is eligible for a Home Affordable Refinance<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| OwnerOfMortgage | Enum.HAMPOwnerOfMortgage | Indicates who owns the loan (Fannie, Freddie or Other)<br><br>* 0 - NotAssigned<br>* 1 - FannieMae<br>* 2 - FreddieMac<br>* 3 - Private<br>* 4 - Portfolio<br>* 5 - GNMA |
| OtherHardshipApproved | Enum.YesNoNA | Indicates whether an Other type of hardship has been approved by the investor.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IncomeVerified | Boolean | Indicates whether or not the borrowers income has been verified |
| DocRequestSentDate | NullableDate | The date that a request for documentation was sent to the borrower |
| DocRequestDueByDate | NullableDate | The date that the borrowers documentation is due by |
| PaymentPostedDate1 | NullableDate | The date that the first trial payment was posted |
| PaymentPostedDate2 | NullableDate | The date that the second trial payment was posted |
| PaymentPostedDate3 | NullableDate | The date that the third trial payment was posted |
| PaymentPostedDate4 | NullableDate | The date that the fourth trial payment was posted |
| PaymentReceivedAmount1 | NullableCurrency | The amount paid by the borrower for the first trial period payment |
| PaymentReceivedAmount2 | NullableCurrency | The amount paid by the borrower for the second trial period payment |
| PaymentReceivedAmount3 | NullableCurrency | The amount paid by the borrower for the third trial period payment |
| PaymentReceivedAmount4 | NullableCurrency | The amount paid by the borrower for the fourth trial period payment |
| EscrowAccountEstablished | Boolean | Indicates whether or not an escrow account has been established |
| NPVDate | NullableDate | Date the NPV value was obtained from the NPV Model. |
| NPVResultPreMod | NullableCurrency | Dollar amount provided by the NPV model pre-modification. |
| NPVResultPostMod | NullableCurrency | Dollar amount provided by the NPV model post-modification. |
| IncomeUsedInTrialPlan | NullableCurrency | The amount of borrowers income used to generate the payment used on the trial period plan |
| TrialPlanIncomeType | Enum.HAMPTrialPlanIncomeType | Indicates whether the trial period plan was provided to the borrower based on verified income or stated income.<br><br>* 0 - NotAssigned<br>* 1 - StatedIncome<br>* 2 - VerifiedIncome |
| TrialPlanSentDate | NullableDate | The date the trial period plan was sent |
| ModEffectiveDate | NullableDate | The first payment due date of the modified mortgage |
| MarketSurveyRateOV | NullableCurrency | The Freddie Mac Weekly Primary Mortgage Market Survey Rate for 30-year fixed-rate mortgage conforming loans. |
| ModAgreementPrepDate | NullableDate | The date the modification agreement is prepared |
| ModAgreementSentDate | NullableDate | The date that the modification agreement was sent |
| ModAgreementDueDate | NullableDate | The date the modification agreement is due back from the borrower(s) |
| ModAgreementDueExtensionDate | NullableDate | The date the modification agreement is due back from the borrower(s) - as extended |
| ModAgreementReceivedDate | NullableDate | The date the modification agreement was received from the borrower(s) |
| SchedModEffectiveDate | NullableDate | The date the modification agreement is scheduled to go into effect |
| ModRequiresRecordingOV | Enum.YesNoNA | Override value indicating whether the modification requires recording<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| TrialPlanReceivedDate | NullableDate | The date the trial plan was received from the borrower(s) |
| DocRequestReceivedDate | NullableDate | The date that the documenation was received from the borrower(s) |
| ValueAnalysisDate | NullableDate | The date that the value analysis was performed |
| CurrentLPIDate | NullableDate | Date of current last payment installment (before modification) |
| UPBBeforeMod | NullableCurrency | The amount of the unpaid principal balance prior to modification. |
| OtherContributions | NullableCurrency | If there are any amounts contributed by other parties such as Hazard Insurance for a Hazard Claim, they must be reported here |
| AttorneyFeesNotInEscrow | NullableCurrency | Estimated legal fee not in escrow for advances capitalization and liquidation expense calculation must be reported here if applicable |
| EscrowShortageForAdvances | NullableCurrency | If there are any Escrow advance amounts to be capitalized, they must be reported here |
| OtherAdvances | NullableCurrency | If there are Other advances for advances capitalization, they must be reported here |
| BorrowerContributions | NullableCurrency | If the borrower is contributing any amountsthey must be reported here |
| InterestOwedOrPaymentNotReported | NullableCurrency | If there is Interest owed/received but not reported for interest capitalization, this field must be populated. Negative amount reflects interest owed |
| PrincipalPaymentOrOwedNotReported | NullableCurrency | Amount of Principal payment or owed that has not been reported to Fannie Mae. Negative amount reflects payment owed. This field at minimum will include the principal portion of the Trial payments. |
| DelinquentInterest | NullableCurrency | Delinquent interest for interest capitalization. It is the amount of delinquent interest from the delinquent loan's LPI date to the workout execution date. For loan modification, it is one month prior to the modified term effective date. |
| ModServicingFeePercent | NullableCurrency | Percentage of Servicing Fee after loan modification |
| ModOfficerSignatureDate | NullableDate | Servicer sign off on the modification at the officer level |
| AllowCustomWaterfall | Boolean | Indicates whether or not the file uses a custom HAMP waterfall or not&lt;BR&gt;Default=False |
| CustomWaterfallName | String(50) | Name of custom waterfall |
| UnderlyingTrustID | String(9) | This is the CUSIP associated with the security. A unique identification number assigned to a security by CUSIP (Committee on Uniform Security Identification Procedures) for trading. |
| ProgramType | Enum.HAMPProgramType | Indicates whether the modification is being processed as a delinquent loan or an imminent default loan.<br><br>* 0 - NotAssigned<br>* 1 - Delinquent<br>* 2 - ImminentDefault<br>* 3 - DIL<br>* 5 - ShortSale<br>* 7 - Current<br>* 8 - SecondLien<br>* 9 - Tier2HMPDefault<br>* 10 - Tier2HMPImminentDefault<br>* 11 - Tier2Current |
| TrialPlanExecutionDateBor | NullableDate | The date the borrower signs the trial period plan |
| TrialPlanExecutionDateServicer | NullableDate | The date the servicer signs the trial period plan |
| ModAgreementExecutionDateBor | NullableDate | The date the borrower signs the modification agreement |
| ModAgreementExecutionDateServicer | NullableDate | The date the servicer signs the modification agreement |
| SubmissionStatus | Enum.HAMPSubmissionStatus | Status of the HMP modification<br><br>* 0 - NotAssigned<br>* 1 - Trial<br>* 2 - BorrowerDisqualifiedObsolete<br>* 3 - OfficialModification<br>* 4 - ForeclosureMitigationObsolete<br>* 5 - TrialCancel<br>* 6 - OfficialCorrection<br>* 7 - OfficialCancel<br>* 8 - SSOrDILNotification<br>* 9 - SSLoanSetup<br>* 10 - DILLoanSetup<br>* 11 - HAFACancel<br>* 12 - HAFACorrection<br>* 13 - SSOrDILExtension |
| HAMPMortgageType | Enum.HAMPMortgageType | The mortgage type of the original loan<br><br>* 0 - NotAssigned<br>* 1 - FHA<br>* 2 - VA<br>* 3 - ConventionalWithPMI<br>* 4 - ConventionalWithoutPMI |
| HAMPLienType | Enum.HAMPLienType | The lien type of the original loan<br><br>* 0 - NotAssigned<br>* 1 - FirstLien<br>* 2 - SecondLien |
| OriginalTerm | NullableInteger | Term of the original mortgage |
| OriginalBalloonTerm | NullableInteger | Balloon loan term for the original mortgage. |
| EscrowPaymentBeforeModOV | NullableCurrency | Override value for the escrow payment amount before modification |
| EscrowPaymentAfterModOV | NullableCurrency | Override value for the escrow payment amount after modification |
| DisbursementForgiven | NullableCurrency | The amount of any forgiven disbursement for advances capitalization |
| HousingExpenseBeforeModOV | NullableCurrency | Override value for the monthly housing expense before modification. This must be Principal, Interest, Taxes, Insurance, and Association Dues |
| HousingExpenseAfterModOV | NullableCurrency | Override value for the monthly housing expense after modification. This must be Principal, Interest, Taxes, Insurance, and Association Dues |
| ValuationAnalysisMethod | Enum.HAMPValuationAnalysisMethod | Type of value analysis (appraisal, AVM, etc).<br><br>* 0 - NotAssigned<br>* 1 - FullAppraisal<br>* 2 - LimitedAppraisalExterior<br>* 3 - BPOExterior<br>* 4 - DesktopValuation<br>* 5 - AVM_GSE<br>* 6 - Other<br>* 7 - BPOInterior<br>* 8 - LimitedAppraisalInterior<br>* 9 - AVM_Other |
| PropertyConditionCode | Enum.HAMPPropertyConditionCode | Indicates the condition of the subject property (i.e. Excellent, Good, Fair, etc)<br><br>* 0 - NotAssigned<br>* 1 - Excellent<br>* 2 - Good<br>* 3 - Fair<br>* 4 - Poor<br>* 5 - Condemned<br>* 6 - Inaccessible |
| LPIDateAfterMod | NullableDate | Last Payment Installment Date after modification |
| PrincipalForgiveness | NullableCurrency | The amount of any principal forgiveness. Contains the principal reduction amount if AcceptedSolutionType=PRAWaterfall |
| SubordinateLienPaydownCode | Enum.YesNoNA | Indicates whether subordinate liens been paid off or paid down<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| SubordinateLienPaydownAmount | NullableCurrency | The amount of paydown or payoff of subordinate liens |
| TrialPeriodPayment | NullableCurrency | The monthly payment amount during the trial period |
| PaymentPostedDate5 | NullableDate | The date that the fifth trial payment was posted |
| PaymentReceivedAmount5 | NullableCurrency | The amount paid by the borrower for the fifth trial period payment |
| EscrowCushionAmount | NullableCurrency | Escrow cushion amount. |
| DelinquencyHardshipReason | Enum.HAMPDelinquencyHardshipReason | Reason for hardship<br><br>* 0 - NotAssigned<br>* 1 - DeathOfBorrower<br>* 2 - IllnessOfPrincipalBorrower<br>* 3 - IllnessOfBorrowerFamilyMember<br>* 4 - DeathOfBorrowerFamilyMember<br>* 5 - MaritalDifficulties<br>* 6 - CurtailmentOfIncome<br>* 7 - ExcessiveObligation<br>* 8 - AbandonmentOfProperty<br>* 9 - DistantEmploymentTransfer<br>* 10 - PropertyProblem<br>* 11 - InabilityToSellProperty<br>* 12 - InabilityToRentProperty<br>* 13 - MilitaryService<br>* 14 - Other<br>* 15 - Unemployment<br>* 16 - BusinessFailure<br>* 17 - CasualtyLoss<br>* 18 - EnergyEnvironmentCosts<br>* 19 - ServicingProblems<br>* 20 - PaymentAdjustment<br>* 21 - PaymentDispute<br>* 22 - TransferOfOwnershipPending<br>* 23 - Fraud<br>* 24 - UnableToContactBorrower<br>* 25 - Incarceration |
| IntRateCapOV | NullableCurrency | Override value for the interest rate cap |
| OriginalProductType | Enum.HAMPProductType | * 0 - NotAssigned<br>* 1 - ARM<br>* 2 - FixedRate<br>* 3 - StepRate<br>* 4 - OneStepVariable<br>* 5 - TwoStepVariable<br>* 6 - ThreeStepVariable<br>* 7 - FourStepVariable<br>* 8 - FiveStepVariable<br>* 9 - SixStepVariable<br>* 10 - SevenStepVariable<br>* 11 - EightStepVariable<br>* 12 - NineStepVariable<br>* 13 - TenStepVariable<br>* 14 - ElevenStepVariable<br>* 15 - TwelveStepVariable<br>* 16 - ThirteenStepVariable<br>* 17 - FourteenStepVariable |
| HAMPOccupancyCode | Enum.HAMPOccupancyCode | A code identifying the occupancy by the borrower of the subject property<br><br>* 0 - NotAssigned<br>* 1 - Vacant<br>* 2 - BorrowerOccupied<br>* 3 - TenantOccupied<br>* 4 - Unknown<br>* 5 - OccupiedByUnknown |
| RecordationRequired | Enum.YesNoNA | Indicates whether the modification agreements must be recorded<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| OriginalPI | NullableCurrency | Current principal and interest payment on the original unmodified loan. |
| ExtendTrialPeriodByOneMonth | Boolean | Indicates whether the trial period is being extended by one month due to late payments |
| OtherHardshipRequired | Enum.YesNoNA | Indicates whether an Other Hardship needs to be approved by the GSE<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| EscrowAccountCannotBeEst | Enum.YesNoNA | Indicates whether an escrow account cannot be established under applicable law<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| SubAgreementOrTitlePolRequired | Enum.YesNoNA | Indicates whether a subordination agreement or title policy is required<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| NoteMayBeAssumed | Enum.YesNoNA | Indicates whether the note may be assumed<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| PaymentDueDate1 | NullableDate | The date the first trial period payment is due |
| PaymentDueDate2 | NullableDate | The date the second trial period payment is due |
| TrialPlanPrepDate | NullableDate | The date the trial period plan was prepared |
| OriginalLoanHasPrepayPenalty | Enum.YesNoNA | Indicates whether or not the original loan has a prepayment penalty<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| NPVDataCollectionDate | NullableDate | The Data Collection Date as specified for the NPV test |
| FirstPaymentDateAtOrigination | NullableDate | The estimated date the first payment was made on the loan after origination. |
| LoanAmountAtOrigination | NullableCurrency | The face value on the note at origination (i.e., the amount borrowed by the mortgagor). |
| IntRateAtOrigination | NullableCurrency | The interest rate of the loan at origination. |
| OriginalPurPrice | NullableCurrency | The original purchase price of the home securing the mortgage |
| AppraisedValueAtOrigination | NullableCurrency | The appraised value at the time of origination |
| OriginalProductTypeNPV | Enum.HAMPProductTypeNPV | Indicates whether the original loan was an ARM, Fixed Rate, or Interest Only<br><br>* 0 - NotAssigned<br>* 1 - ARM<br>* 2 - FixedRateMortgage<br>* 3 - InterestOnly |
| ARMResetDate | NullableDate | The date on which the next ARM reset is due to occur. |
| FeesReimbursedByInvestor | NullableCurrency | Fees that will be reimbursed by the investors, including notary fees, property valuation, and other required fees. |
| MIPartialClaimAmount | NullableCurrency | Amount paid by the MI at the time of the modification. |
| _PaymentDueDate3 | NullableDate | The date the third trial period payment is due |
| _PaymentDueDate4 | NullableDate | The date the fourth trial period payment is due |
| _PaymentDueDate5 | NullableDate | The date the fifth trial period payment is due |
| _TrialPeriodPaymentCountAsExtended | Integer | The total number of trial period payments, including any extra payment if the trial period was extended. |
| _ModIntRateCap | NullableCurrency(3) | The maximum interest rate on the modified mortgage |
| _ModMaturityDate | NullableDate | The maturity date of the modified mortgage |
| ReportedTrial | Boolean | Indicates whether the trial period setup was reported. |
| ReportedModification | Boolean | Indicates whether the final modification was reported. |
| ReportedPayment2 | Boolean | Indicates whether the second trial period payment was reported |
| ReportedPayment3 | Boolean | Indicates whether the third trial period payment was reported |
| ReportedPayment4 | Boolean | Indicates whether the fourth trial period payment was reported |
| ReportedPayment5 | Boolean | Indicates whether the fifth trial period payment was reported |
| ReportedBorrowerDisqualified | Boolean | Indicates whether or not a loan setup was reported with the submission status of Borrower Disqualified |
| ReportedForeclosureMit | Boolean | Indicates whether or not a loan setup was reported with the submission status of Foreclosure Mitigation |
| ReportedCancel | Boolean | Indicates whether or not a loan setup was reported with the submission status of Cancel |
| OriginalMaturityDate | NullableDate | The maturity date of the loan before modification |
| FirstPaymentDateNotFirstOfMonth | Boolean | Indicates whether or not the first payment date of the unmodified loan was not of the first day of the month |
| ARMResetIntRate | NullableCurrency | The expected interest rate on an ARM loan at the next ARM reset date given the reset date is within the next 6 months. May be an approximation based on current index values. |
| ForeclosureReferralDate | NullableDate | The date that the mortgage was referred to an attorney for the purpose of initiating foreclosure proceedings. This date should reflect the referral date of currently active foreclosure process. Loans cured from foreclosure should not have a referral date. |
| ProjectedForeclosureSaleDate | NullableDate | Projected date for foreclosure sale of subject property. |
| _PeriodCount | Integer | The number of steps in the step schedule. |
| _IncentiveMonthly | Decimal | The monthly incentive amount for the servicer and borrower. |
| ExtendModEffectiveDateByOneMonth | Boolean | Indicates whether the modification agreement effective date was extended due to the borrower paying the final trial period payment late. |
| NPVModelVersion | Enum.HAMPNPVModelVersion | The version number of the NPV model<br><br>* 0 - NotAssigned<br>* 1 - Version1_0<br>* 2 - Version2_0<br>* 3 - Version3_0<br>* 4 - Version4_0<br>* 5 - Version5_0 |
| HAMPPropertyType | Enum.HAMPPropertyType | HAMP property type<br><br>* 0 - NotAssigned<br>* 1 - SingleFamily1To4Units<br>* 2 - CondoOrPUD<br>* 3 - Coop<br>* 4 - MobileHome<br>* 5 - ZeroLotLine<br>* 6 - Unknown |
| HMDADataNotAvailable | Boolean | Indicates whether or not HMDA data (race/ethnicity/gender) is available. |
| NPVModelType | Enum.HAMPNPVModelType | Indicates the type of NPV model that has been run, if any.<br><br>* 0 - NotAssigned<br>* 1 - BaseNPVModelTreasuryHosted<br>* 2 - BaseNPVModelServicerHosted<br>* 3 - NPVModelNotYetExecuted<br>* 4 - NPVNotRequired<br>* 5 - BaseNPVModelServicerHostedAndNPVPreviouslyReported<br>* 6 - NPVDataNotAvailable |
| HMDAConsentProvided | Enum.YesNoNA | Indicates whether or not the August 2009 version of the hardship affidavit was provided by the borrower<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| TrialNotApprovedReasonCode | Enum.HAMPTrialNotApprovedReasonCode | Specifies the reason why a borrower was not offered or did not accept a trial plan.<br><br>* 0 - NotAssigned<br>* 1 - IneligibleMortgage<br>* 2 - CurrentDTILessThan31<br>* 3 - PropertyNotOwnerOccupied<br>* 4 - OtherIneligibleProperty<br>* 5 - InvestorGuarantorNotParticipating<br>* 6 - BKCourtDeclined<br>* 7 - NegativeNPV<br>* 8 - OfferNotAccepted<br>* 9 - DefaultNotImminent<br>* 10 - PreviousOfficialHAMPModification<br>* 11 - LoanPaidOffOrReinstated<br>* 12 - ExcessiveForbearance<br>* 13 - RequestIncomplete<br>* 18 - ErrorCorrection<br>* 19 - UnemploymentForbearancePlan<br>* 20 - FederallyDeclaredDisaster<br>* 21 - ApplicationDiscrepancy<br>* 24 - DoddFrankCertNonCompliance<br>* 25 - IneligibleBorrower<br>* 26 - IneligibleRentalProperty<br>* 27 - InsufficientMoPayRed<br>* 28 - PostModDTIOutsideRange<br>* 29 - NoChangeInCircumstance |
| TrialFalloutReasonCode | Enum.HAMPTrialFalloutReasonCode | Specifies the reason why a borrower fell out or withdrew from the trial or completed the trial and did not enter the official modification.<br><br>* 0 - NotAssigned<br>* 1 - IneligibleMortgage<br>* 2 - CurrentDTILessThan31<br>* 3 - PropertyNotOwnerOccupied<br>* 4 - OtherIneligibleProperty<br>* 7 - NegativeNPV<br>* 8 - OfferNotAccepted<br>* 11 - LoanPaidOffOrReinstated<br>* 12 - ExcessiveForbearance<br>* 13 - RequestIncomplete<br>* 14 - TrialPlanDefault<br>* 18 - ErrorCorrection<br>* 19 - UnemploymentForbearancePlan<br>* 20 - FederallyDeclaredDisaster<br>* 21 - ApplicationDiscrepancy<br>* 23 - WaiverCancellations<br>* 24 - DoddFrankCertNonCompliance<br>* 30 - TransferToNonParticipatingEntity |
| LoanDocsOmittedEscrowProvisions | Enum.YesNoNA | Indicates whether the original loan documents did not include standard Fannie Mae/Freddie Mac Uniform Instrument provisions for escrow items<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ReportedOfficialCorrection | Boolean | Indicates whether or not a loan setup was reported with the submission status of 'Official Correction'.&lt;BR&gt;Default=False |
| ReportedOfficialCancel | Boolean | Indicates whether or not a loan setup was reported with the submission status of 'Official Cancel'.&lt;BR&gt;Default=False |
| ReportedHMDAData | Boolean | True if you want to report HMDA data via the HAMP report.&lt;BR&gt;Default=False |
| FHAPriorPartialClaimAmount | NullableCurrency | Prior used partial claim amount for FHA loans |
| UPBorrowerRequestDate | NullableDate | UP - Date borrower requested consideration for UP |
| UPForbearancePlanEffectiveDate | NullableDate | UP - Forbearance Plan Effective Date |
| UPForbearancePlanNoticeSentDate | NullableDate | UP - Date that the Forbearance Plan Notice was sent |
| UPForbearancePlanExpirationDate | NullableDate | UP - Date that the forbearance plan expires |
| UPForbearancePlanTerm | NullableInteger | UP - The term of the forbearance plan in months |
| UPPaymentAmount | NullableCurrency | UP - The amount of the monthly payment under the forbearance plan, including principal, interest, and escrow payment |
| UPNotes | String(10000) | UP - Notes concerning the UP forbearance plan |
| UPCompletedDisposition | Enum.HAMPUPCompletedDisposition | UP - The disposition of a completed UP plan<br><br>* 0 - NotAssigned<br>* 1 - HardshipResolvedThroughReemployment<br>* 2 - HAMPTrialOffered<br>* 3 - OtherModificationOffered<br>* 4 - ShortSaleOffered<br>* 5 - DeedInLieuOffered<br>* 6 - ForeclosurePending<br>* 7 - Reinstatement<br>* 8 - Other |
| UPInvestor | Enum.HAMPUPInvestor | UP - Investor type<br><br>* 0 - NotAssigned<br>* 1 - PLS<br>* 2 - Portfolio |
| UPSource | Enum.HAMPUPSource | UP - Source of the UP plan<br><br>* 0 - NotAssigned<br>* 1 - NewRequest<br>* 2 - CancelledHAMPTrial |
| UPStatus | Enum.HAMPUPStatus | UP - Status of the forbearance plan<br><br>* 0 - NotAssigned<br>* 1 - UPEvaluation<br>* 2 - UPNotApproved<br>* 3 - UPActive<br>* 4 - UPCompletedUnemploymentEnded<br>* 5 - UPCompletedFPTermExpired<br>* 6 - UPCancelledDueToNonPaymentOrNonCompliance |
| UPBenefitsStartDate | NullableDate | UP - Date unemployment benefits started |
| UPBenefitsEndDate | NullableDate | UP - Date unemployment benefits ended (or scheduled to end) |
| UPUnemploymentStartDate | NullableDate | UP - Date borrower became unemployed |
| _UPPaymentReductionPerc | NullableCurrency | UP - Percentage reduction in mortgage payment |
| UPRequestConfirmationDate | NullableDate | UP - Date the servicer sent confirmation that the borrower requested an UP forbearance |
| UPEligibilityDeterminationDate | NullableDate | UP - Date the servicer determined whether borrower was eligible for UP |
| UPNonApprovalNoticeSentDate | NullableDate | UP - Date servicer sent a notice of non-approval |
| UPTotalMonthlyPayment | NullableCurrency | UP - Total monthly payment amount during forbearance, including principal, interest, taxes, insurance and HOD |
| MinimumNetReturnAmount | NullableCurrency | HAFA - The minimum acceptable net proceeds amount that the investor is willing to accept. |
| MIWaiverCode | Enum.HAFAMIWaiverCode | HAFA - Indicates if a mortgage insurer will approve the transaction and waive collection.<br><br>* 0 - NotAssigned<br>* 1 - WaiverApproved<br>* 2 - WaiverNotApproved<br>* 3 - NoMortgageInsurance |
| PropertyListPrice | NullableCurrency | HAFA - Property list price for a short sale. |
| PropertyVacancyDate | NullableDate | HAFA - Date the property must be vacated. |
| SSCancellationReasonCode | Enum.HAFACancellationReasonCode | HAFA - Indicates why a short sale was canceled<br><br>* 0 - NotAssigned<br>* 1 - AgreementExpiration<br>* 2 - AgreementTermination<br>* 3 - NotificationCancellation<br>* 4 - LoanSetupCancellation<br>* 5 - ServicingTransferOfHAMPLoan<br>* 6 - PayoffOfHAMPLoan<br>* 7 - Other |
| DILCancellationReasonCode | Enum.HAFACancellationReasonCode | HAFA - Indicates why a deed-in-lieu was canceled.<br><br>* 0 - NotAssigned<br>* 1 - AgreementExpiration<br>* 2 - AgreementTermination<br>* 3 - NotificationCancellation<br>* 4 - LoanSetupCancellation<br>* 5 - ServicingTransferOfHAMPLoan<br>* 6 - PayoffOfHAMPLoan<br>* 7 - Other |
| SSOrDILReasonCode | Enum.HAFAReasonCode | HAFA - Indicates the reason for entering the short sale or deed-in-lieu.<br><br>* 0 - NotAssigned<br>* 1 - DoesNotQualifyForTrialPeriodPlan<br>* 2 - DoesNotSuccessfullyCompleteTrialPeriodPlan<br>* 3 - IsDelinquentOnHAMPModification<br>* 4 - RequestsSSOrDIL |
| _SubLienReimbursementAmount | NullableCurrency | HAFA - Total amount paid to subordinate lien holders. |
| TotalAllowableCostAmount | NullableCurrency | HAFA - Total allowable selling costs that may be deducted from gross sale price at closing. |
| TransactionClosingDate | NullableDate | HAFA - The date the short sale or deed-in-lieu transaction was completed. |
| SSAgreementExpirationDate | NullableDate | HAFA - Date the short sale expires. |
| DILAgreementExpirationDate | NullableDate | HAFA - Date the deed-in-lieu expires. |
| SSAgreementIssueDate | NullableDate | HAFA - Date the short sale was issued. |
| DILAgreementIssueDate | NullableDate | HAFA - Date the deed-in-lieu was issued. |
| LoanDelinquencyType | Enum.HAFALoanDelinquencyType | HAFA - Indicates loan delinquency type at evaluation.<br><br>* 0 - NotAssigned<br>* 1 - _Default<br>* 2 - ImminentDefault<br>* 3 - Current |
| FinalUPBAmount | NullableCurrency | HAFA - The final unpaid principal balance amount at closing. |
| SSBorExecutionDate | NullableDate | HAFA - The date the borrower signs the short sale. |
| DILBorExecutionDate | NullableDate | HAFA - The date the borrower signs the deed-in-lieu. |
| SSOrDILReasonDate | NullableDate | Date the short sale or deed-in-lieu transaction reason was established. |
| SSAgreementDueDate | NullableDate | HAFA - The date the short sale agreement is due from the borrower(s). |
| HardshipAffidavitRequired | Boolean | HAFA - Is a Hardship Affidavit required? (Y/N) |
| PartialPaymentAmount | NullableCurrency | HAFA - Partial payment required during short sale agreement period. |
| FirstPartialPaymentDueDate | NullableDate | HAFA - Date the first partial payment is due. |
| AlternateRSSASentDate | NullableDate | HAFA - Date the alternate RSS agreement was sent. |
| AlternateRSSADueDate | NullableDate | HAFA - Date the alternate RSS agreement is due. |
| HAFASolicitationSentDate | NullableDate | HAFA - Date the solicitation letter was sent. |
| HAFAEvaluationDate | NullableDate | HAFA - Date the HAFA evaluation was completed. |
| HAFAEvaluationExplanation | String(1000) | HAFA - Explanation of HAFA evaluation conclusions. |
| ShortSaleStatus | Enum.HAFAShortSaleStatus | HAFA - Status of the short sale.<br><br>* 0 - NotAssigned<br>* 1 - Extended1<br>* 2 - Extended2<br>* 3 - InitialPeriod<br>* 4 - Closed<br>* 5 - Expired<br>* 6 - Terminated<br>* 7 - NotQualified<br>* 8 - WaivedForDIL |
| InvestorApprovalWithForeclosure | Enum.YesNoNA | HAFA - Investor approval with foreclosure.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HAFATitleNotes | String(1000) | HAFA - Title notes. |
| EstOtherAllowableCosts | NullableCurrency | HAFA - Block amount other estimated allowable costs. |
| MANPPerc | NullableCurrency | HAFA - Percent of current value or list price for MANP calculation. |
| MANPBasis | Enum.HAFAMANPBasisType | HAFA - Basis for MANP calculation (list price or value).<br><br>* 0 - ListPrice<br>* 1 - Value |
| MarginForListPrice | NullableCurrency | HAFA - Margin added to MANP plus allowable costs for list price. |
| ListPriceHistory | String(1000) | HAFA - List price history. |
| ExtensionPeriod | NullableInteger | HAFA - Marketing extension period. |
| ExtensionHistory | String(1000) | HAFA - Marketing extension history. |
| RSSAReceivedDate | NullableDate | HAFA - Date RSSA was recieved. |
| PurchaseOfferAmount | NullableCurrency | HAFA - Current purchase offer amount. |
| PurchaseOfferHistory | String(1000) | HAFA - Purchase offer history. |
| PurchaseOfferApproved | Enum.YesNoNA | HAFA - Current purchase offer approved?<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| D4LEvaluated | Boolean | HAFA - Evaluated for D4L? (Y/N) |
| D4LAccepted | Boolean | HAFA - D4L accepted? (Y/N) |
| D4LReleaseOfClaimsReceived | Boolean | HAFA - General release of claims received? (Y/N) |
| AcceptedSolutionType | Enum.HAMPAcceptedSolutionType | Indicates whether the solution reflects the standard waterfall or PRA waterfall<br><br>* 0 - StandardWaterfall<br>* 1 - PRAWaterfall |
| AltUPBAfterMod | NullableCurrency | The alternate solution unpaid principal balance. (If AcceptedSolutionType is PRAWaterfall then this value is for the StandardWaterfall and vice-versa) |
| AltIntRateAfterMod | NullableCurrency | The alternate solution Interest Rate. (If AcceptedSolutionType is PRAWaterfall then this value is for the StandardWaterfall and vice-versa) |
| AltTermAfterMod | NullableInteger | The alternate solution term in months. (If AcceptedSolutionType is PRAWaterfall then this value is for the StandardWaterfall and vice-versa) |
| AltForbearance | NullableCurrency | The alternate solution forbearance amount. (If AcceptedSolutionType is PRAWaterfall then this value is for the StandardWaterfall and vice-versa) |
| AltPrincipalReduction | NullableCurrency | The alternate solution principal reduction amount. (If AcceptedSolutionType is PRAWaterfall then this value is for the StandardWaterfall and vice-versa) |
| MaxMonthsPastDueInPast12Months | NullableInteger | The maximum number of months that the loan was past due in the preceding 12 month period. |
| NPVResultPreModPRA | NullableCurrency | The pre-modification NPV for the PRA alternative |
| NPVResultPostModPRA | NullableCurrency | The post-modification NPV for the PRA alternative |
| SubLienReimbursementAmountOV | NullableCurrency | HAFA - Override for total amount paid to subordinate lien holders. |
| SSCancellationDate | NullableDate | HAFA - The date the short sale was cancelled. |
| RSSADeclinedDidNotComply | Boolean | HAFA - RSSA was declined because of non-compliance issues. |
| RSSADeclinedDidNotComplyText | String(500) | HAFA - Text for why the RSSA offer was declined because of compliance issues. |
| RSSADeclinedNotComplete | Boolean | HAFA - RSSA was declined because the RSSA was not complete and/or fully executed. |
| RSSADeclinedProceedsInsufficient | Boolean | HAFA - RSSA declined because net proceeds were insufficient. |
| RSSADeclinedOtherText | String(500) | HAFA - Text for why the RSSA offer was declined for other reasons. |
| RSSADeclinedOther | Boolean | HAFA - RSSA was declined for other reasons. |
| RSSANotCompletedContract | Boolean | HAFA - RSSA not completed because an executed sales contract or addendum was not provided. |
| RSSANotCompletedBuyersDoc | Boolean | HAFA - RSSA not completed because the contract was missing buyer's documentation. |
| RSSAInsufficientSalesPrice | Boolean | HAFA - Contract sales price is below list price stated in SSA. |
| RSSAInsufficientNetProceeds | Boolean | HAFA - Net proceeds amount is less than acceptable proceeds stated on SSA. |
| RSSAInsufficientExConcessions | Boolean | HAFA - Excessive financial concessions. |
| RSSAInsufficientExCommisions | Boolean | HAFA - Excessive Commisions. |
| RSSAInsufficientExClosingCosts | Boolean | HAFA - Excessive closing costs. |
| RSSAInsufficientExSubLienObligations | Boolean | HAFA - Excessive sub lien or mortgage obligations. |
| PartialPaymentStartDate | NullableDate | HAFA - Start date of partial payment. |
| DILCancelledDate | NullableDate | HAFA - The date the deed-in-lieu was cancelled. |
| DILAgreementDueDate | NullableDate | HAFA - The date the deed-in-lieu agreement is due from the borrower(s). |
| MarketingPeriodExpirationDate | NullableDate | HAFA - Date the marketing period expires. |
| SalesCommissionPerc | NullableCurrency | HAFA - Percent of list price or appraised value used to calculate sales commission on short sales. |
| SalesCommission | NullableCurrency | HAFA - Sales commission amount for this short sale.. |
| HAMPDelinquencyTypeCode | Enum.HAMPDelinquencyTypeCode | HAMP delinquency duration type.<br><br>* 0 - NotAssigned<br>* 1 - LessThan6MonthsInLast12Months<br>* 2 - GreaterThan6MonthsInLast12Months |
| ForbearancePlanType | Enum.HAMPForbearancePlanType | HAMP - The type of forbearance plan.<br><br>* 0 - NotAssigned<br>* 1 - Unemployment<br>* 2 - FederallyDeclaredDisaster<br>* 3 - UnemploymentAndFederallyDeclaredDisaster |
| PrincipalReductionAlternativeCode | Enum.HAMPPrincipalReductionAlternativeCode | HAMP - Type of alternative principal reduction.<br><br>* 0 - NotAssigned<br>* 1 - NoPRAStandardWaterfall<br>* 2 - PRAWaterfallIncentedForgiveness<br>* 3 - PRAWaterfallNonincentedForgiveness |
| RestrictionForAltWaterfallTypeCode | Enum.HAMPRestrictionForAltWaterfallTypeCode | HAMP - Type of restriction for alternative waterfall.<br><br>* 0 - NotAssigned<br>* 1 - InvestorDoesNotAllow |
| SupplementaryAssistCode | Enum.HAMPSupplementaryAssistCode | HAMP - Type of supplementary assistance.<br><br>* 0 - NotAssigned<br>* 1 - None<br>* 2 - HardestHitFund |
| _UPPaymentReductionAmount | NullableCurrency | HAMP - The amount of the existing monthly mortgage payment that is not required to be paid during the UP forbearance period. |
| SSCancellationNotes | String(1000) | HAFA - Short Sale Cancellation Notes |
| AlternateRSSAExpirationDate | NullableDate | HAFA - Date the Alternate RSSA expires. |
| FirstLienHELOCWithRightToNewFunds | Enum.YesNoNA | Indicates whether the original loan was a first lien home equity loan or line of credit and the borrower has the right to borrow new funds.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| WeServiceSecondLien | Boolean | We service a second mortgage loan on the property indicator&lt;BR&gt;Default=False |

### [](#TOP)VAAuthorizedAgent

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| VAAuthorizedAgentID | Integer | Used on the VA Certificate of Loan Disbursement 26-1820 |
| FileDataID | Integer | Used on the VA Certificate of Loan Disbursement 26-1820 |
| VAAuthorizedAgentName | String(100) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| Street | String(50) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| City | String(50) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| State | String(2) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| Zip | String(10) | Used on the VA Certificate of Loan Disbursement 26-1820 |
| VAFunction | String(100) | Used on the VA Certificate of Loan Disbursement 26-1820 |

### [](#TOP)RequestLog

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| RequestLogID | Integer | Primary Key |
| FileDataID | Integer | Foreign key to FileDataID |
| RequestLogType | Enum.HAMPRequestLogType | Identifies the type of request<br><br>* 0 - NotAssigned<br>* 1 - NPV<br>* 2 - HMPLoanSetupTrial<br>* 3 - HMPLoanSetupFinal<br>* 4 - HMPTrialPayment2<br>* 5 - HMPTrialPayment3<br>* 6 - HMPTrialPayment4<br>* 7 - HMPTrialPayment5<br>* 8 - HMPHmdaNpv<br>* 9 - HAFAShortSaleNotification<br>* 10 - HAFADILNotification<br>* 11 - HAFAShortSaleLoanSetup<br>* 12 - HAFADILLoanSetup<br>* 13 - HAFACancelTermination |
| RequestDate | NullableDateTime | The date the request was made |
| Data | String(20000) | The request data |
| UserName | String(50) | The user name of the user making the request |
| BatchCode | String(20) | Identifies the batch that the request is a part of |
| Version | String(20) | The version used to create this item. |

### [](#TOP)ShoppableProvider

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ShoppableProviderID | integer |     |
| FileDataID | Integer | ID of the Loan File |
| DisplayOrder | integer |     |
| ServicesProvided | string(100) | Service(s) provided by the company. |
| Company | string(100) | Company name |
| Street | string(50) | Company street |
| City | string(50) | Company city |
| State | string(2) | State |
| Zip | string(9) | Company zip code |
| WorkPhone | string(20) | Company work phone |
| Email | String(250) | Email address |
| HUDCCLineNo | Enum.HUDCCLineNo | Identifies the closing cost associated with this provider<br><br>* 0 - NotAssigned<br>* 801 - _801<br>* 802 - _802<br>* 803 - _803<br>* 804 - _804<br>* 805 - _805<br>* 806 - _806<br>* 807 - _807<br>* 808 - _808<br>* 809 - _809<br>* 810 - _810<br>* 811 - _811<br>* 812 - _812<br>* 813 - _813<br>* 814 - _814<br>* 815 - _815<br>* 816 - _816<br>* 817 - _817<br>* 818 - _818<br>* 819 - _819<br>* 820 - _820<br>* 821 - _821<br>* 822 - _822<br>* 823 - _823<br>* 824 - _824<br>* 825 - _825<br>* 826 - _826<br>* 827 - _827<br>* 828 - _828<br>* 829 - _829<br>* 830 - _830<br>* 831 - _831<br>* 832 - _832<br>* 833 - _833<br>* 834 - _834<br>* 835 - _835<br>* 836 - _836<br>* 837 - _837<br>* 838 - _838<br>* 839 - _839<br>* 840 - _840<br>* 841 - _841<br>* 842 - _842<br>* 843 - _843<br>* 844 - _844<br>* 845 - _845<br>* 846 - _846<br>* 847 - _847<br>* 848 - _848<br>* 849 - _849<br>* 850 - _850<br>* 851 - _851<br>* 852 - _852<br>* 853 - _853<br>* 854 - _854<br>* 855 - _855<br>* 856 - _856<br>* 857 - _857<br>* 858 - _858<br>* 859 - _859<br>* 860 - _860<br>* 861 - _861<br>* 862 - _862<br>* 863 - _863<br>* 864 - _864<br>* 865 - _865<br>* 866 - _866<br>* 867 - _867<br>* 868 - _868<br>* 869 - _869<br>* 870 - _870<br>* 871 - _871<br>* 872 - _872<br>* 873 - _873<br>* 874 - _874<br>* 875 - _875<br>* 876 - _876<br>* 877 - _877<br>* 878 - _878<br>* 879 - _879<br>* 880 - _880<br>* 881 - _881<br>* 882 - _882<br>* 883 - _883<br>* 884 - _884<br>* 885 - _885<br>* 886 - _886<br>* 887 - _887<br>* 888 - _888<br>* 889 - _889<br>* 890 - _890<br>* 1101 - _1101<br>* 1102 - _1102<br>* 1103 - _1103<br>* 1104 - _1104<br>* 1105 - _1105<br>* 1106 - _1106<br>* 1107 - _1107<br>* 1108 - _1108<br>* 1109 - _1109<br>* 1110 - _1110<br>* 1111 - _1111<br>* 1112 - _1112<br>* 1113 - _1113<br>* 1114 - _1114<br>* 1115 - _1115<br>* 1116 - _1116<br>* 1117 - _1117<br>* 1118 - _1118<br>* 1119 - _1119<br>* 1120 - _1120<br>* 1121 - _1121<br>* 1122 - _1122<br>* 1123 - _1123<br>* 1124 - _1124<br>* 1125 - _1125<br>* 1126 - _1126<br>* 1127 - _1127<br>* 1128 - _1128<br>* 1129 - _1129<br>* 1130 - _1130<br>* 1131 - _1131<br>* 1132 - _1132<br>* 1133 - _1133<br>* 1134 - _1134<br>* 1135 - _1135<br>* 1201 - _1201<br>* 1202 - _1202<br>* 1203 - _1203<br>* 1204 - _1204<br>* 1205 - _1205<br>* 1206 - _1206<br>* 1207 - _1207<br>* 1208 - _1208<br>* 1209 - _1209<br>* 1210 - _1210<br>* 1211 - _1211<br>* 1212 - _1212<br>* 1213 - _1213<br>* 1214 - _1214<br>* 1215 - _1215<br>* 1301 - _1301<br>* 1302 - _1302<br>* 1303 - _1303<br>* 1304 - _1304<br>* 1305 - _1305<br>* 1306 - _1306<br>* 1307 - _1307<br>* 1308 - _1308<br>* 1309 - _1309<br>* 1310 - _1310<br>* 1311 - _1311<br>* 1312 - _1312<br>* 1313 - _1313<br>* 1314 - _1314<br>* 1315 - _1315<br>* 1316 - _1316<br>* 1317 - _1317<br>* 1318 - _1318<br>* 1319 - _1319<br>* 1320 - _1320<br>* 1321 - _1321<br>* 1322 - _1322<br>* 1323 - _1323<br>* 1324 - _1324<br>* 1325 - _1325<br>* 1326 - _1326<br>* 1327 - _1327<br>* 1328 - _1328<br>* 1329 - _1329<br>* 1330 - _1330<br>* 1331 - _1331<br>* 1332 - _1332<br>* 1333 - _1333<br>* 1334 - _1334<br>* 1335 - _1335 |
| FirstName | String(50) | First name of the contact |
| MiddleName | String(50) | Middle name of the contact |
| LastName | String(50) | Last name of the contact |

### [](#TOP)LockHistory

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| LoanLockRequestID | Integer | Unique ID that identifies this row for us. |
| FileDataID | Integer | The ID of the File we are associated with. |
| LockRequestType | Enum.LockRequestType | The type of lock request (new, relock, etc.)<br><br>* 0 - NotAssigned<br>* 1 - NewLock<br>* 2 - LockExtension<br>* 3 - Relock<br>* 4 - Renegotiation<br>* 5 - LockCancellation<br>* 6 - LockRequestedInPPE<br>* 7 - Snapshot<br>* 8 - CurrentState<br>* 9 - BestExInPPE<br>* 10 - ChangedInPPE<br>* 11 - LockAcceptedInPPE<br>* 12 - LockCancelledInPPE<br>* 13 - LockRejectedInPPE<br>* 14 - RegisteredInPPE<br>* 15 - UpdatedInPPE |
| LockRequestStatus | Enum.LockRequestStatus | The status of the lock request (open, confirmed, rejected).<br><br>* 0 - Accepted<br>* 1 - Rejected<br>* 2 - NotAssigned |
| LockDays | NullableInteger | Number of days before the lock request expires. |
| LockExtension1Days | NullableInteger | Number of days for the first lock extension |
| LockExtension2Days | NullableInteger | Number of days for the second lock extension |
| IntRate | NullableCurrency | The interest rate assigned to this lock request. |
| BuyPriceNet | NullableCurrency | Net originator (buy-side) price |
| Notes | String(10000) | Comments relating to this lock request. |
| LoanProgramCode | String(50) | Loan Program Code for the locked loan |
| LockRequestTime | NullableDateTime | The time that the lock request was initiated |
| ProcessedTime | NullableDateTime | The date and time that the lock request was processed |
| LockExpirationDate | NullableDate | The lock expiration date |
| LoanAmount | NullableCurrency | The loan amount locked |
| MortgageType | Enum.MortgageType | Mortgage type (conventional, FHA, VA, etc)<br><br>* 0 - NotAssigned<br>* 1 - VA<br>* 2 - FHA<br>* 3 - Conventional<br>* 4 - RHS<br>* 5 - Other<br>* 6 - HELOC<br>* 7 - StateAgency<br>* 8 - LocalAgency |
| LockExtension3Days | NullableInteger | Number of days for the third lock extension |
| BaseLoan | NullableCurrency | Base Loan Amount |
| CreditScore | NullableInteger | Credit Score |
| LTV | NullableCurrency | LTV |
| CLTV | NullableCurrency | CLTV |
| HCLTV | NullableCurrency | HCLTV |
| SecondRatio | NullableCurrency | Second Ratio |
| WaiveEscrow | Enum.EscrowWaiverType | Escrows&lt;BR&gt;Default=EscrowWaiverType.NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - WaiveBoth<br>* 2 - NotWaived<br>* 3 - WaiveTaxesOnly<br>* 4 - WaiveInsuranceOnly |
| OccupancyType | Enum.OccupancyType | Occupancy&lt;BR&gt;Default=OccupancyType.NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - PrimaryResidence<br>* 2 - SecondaryResidence<br>* 3 - InvestmentProperty |
| LoanPurpose | Enum.LoanPurpose | Loan Purpose&lt;BR&gt;Default=LoanPurpose.NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Purchase<br>* 2 - Refinance<br>* 3 - Construction<br>* 4 - ConstructionPerm<br>* 5 - Second<br>* 6 - Third<br>* 7 - PurchaseMoneySecond<br>* 8 - Other<br>* 9 - PurchaseMoneyThird<br>* 10 - RefiSecond<br>* 11 - RefiThird |
| RefiType | Enum.RefiTypeConsolidated | Refi Type&lt;BR&gt;Default=RefiTypeConsolidated.NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - CashOutDebtConsolidation<br>* 2 - CashOutHomeImprovement<br>* 3 - CashOutLimited<br>* 4 - CashOutOther<br>* 5 - NoCashOutFHAStreamlinedRefinance<br>* 6 - NoCashOutFREOwnedRefinance<br>* 7 - NoCashOutOther<br>* 8 - NoCashOutStreamlinedRefinance<br>* 9 - ChangeInRateTerm<br>* 101 - FHAStreamlinedWithAppraisal<br>* 102 - FHAStreamlinedWithoutAppraisal<br>* 103 - FHANoCashOut<br>* 104 - FHACashOut<br>* 105 - FHASimpleRefinance<br>* 201 - VAIRRR<br>* 202 - VAOther |
| BuyPriceBase | NullableCurrency | Buy Side Base Price |
| BuySRP | NullableCurrency | Buy Side SRP |
| BuyPriceAdjustments | NullableCurrency | Buy Side Total Adjustments |
| PropertyType | Enum.SubjectPropertyType | Property Type&lt;BR&gt;Default=SubjectPropertyType.NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Detached<br>* 2 - Attached<br>* 3 - Condominium<br>* 4 - HighRiseCondo<br>* 5 - DetachedCondo<br>* 6 - PUD<br>* 7 - Cooperative<br>* 8 - Manufactured<br>* 9 - Manufactured\_Condo\_PUD_COOP<br>* 10 - ManufacturedSinglewide<br>* 11 - ManufacturedMultiwide<br>* 12 - Other<br>* 13 - VacantLand<br>* 14 - ManufacturedMHAdvantage |
| SubPropStreet | String(50) | Street |
| SubPropCity | String(50) | City |
| SubPropState | String(2) | State |
| SubPropZip | String(9) | Zip |
| SubPropCounty | String(50) | County |
| SubPropNoUnits | NullableInteger | Units |
| SubPropStories | NullableInteger | Stories |
| BorFirstName | String(50) | Borrower First Name |
| BorLastName | String(50) | Borrower Last Name |
| AppraisedValue | NullableCurrency | Appraised Value |
| SubFiBaseLoan | NullableCurrency | Subordinate Financing |
| FirstTimeHomeBuyer | Enum.YesNoNA | First Time Home Buyer&lt;BR&gt;Default=YesNoNA.NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| SelfEmployed | Boolean | Self Employed&lt;BR&gt;Default=False |
| CashFromToBorrower | NullableCurrency | Cash From/To Borrower |
| MonthsInReserve | NullableInteger | Months in Reserve |
| HasNonOccCoBorrower | Boolean | Non Occupying Co-Borrower |
| UserName | String(50) | User name associated with this item. |
| LockCanceledDate | NullableDateTime | Date lock canceled. |
| ARMMargin | NullableCurrency | ARM Margin |
| RefiCashOutAmount | NullableCurrency | Cash out amount for a refi |
| Term | NullableInteger | Loan Term |
| PricedInvestor | String(50) | Priced investor |
| CoBorFirstName | String(50) | Co-borrower first name |
| CoBorLastName | String(50) | Co-borrower last name |
| LoanProductType | Enum.LockHistoryLoanProductType | Loan product type - amortization type<br><br>* 0 - NotAssigned<br>* 1 - Fixed<br>* 2 - ARM<br>* 3 - GPM<br>* 4 - NoPayment<br>* 5 - HELOC |
| PurPrice | NullableCurrency | Purchase price / estimated value |
| LoanProgramName | String(100) | Loan program name |
| LockStartDate | NullableDateTime | Date locked |
| RiskAssessmentMethod | Enum.TransRiskAssessmentMethod | The risk assessment method (DU, LP, Manual, etc)<br><br>* 0 - NotAssigned<br>* 1 - Manual<br>* 2 - DU<br>* 3 - LP<br>* 4 - OtherAUS<br>* 5 - Assetwise<br>* 6 - Capstone<br>* 7 - Clues<br>* 8 - ECS<br>* 9 - Strategyware<br>* 10 - Zippy<br>* 11 - GUS<br>* 12 - FirstMortgageCreditScore |
| BuyCommitmentNo | String(50) | Commitment number for the originator (buy-side) lock |
| DiscountPoints | NullableCurrency | Discount points. |
| DebtServiceCoverageRatio | NullableCurrency | Debt service coverage ratio |

### [](#TOP)Secondary

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| SecondaryID | Integer | Primary Key |
| FileDataID | Integer | Foreign key |
| PAUnpaidPrincipalBalance | NullableCurrency | The amount of unpaid principal balance purchased by the investor as stated on the purchase advice. This is the note loan amount less any principal payments made by the borrower before the loan is sold to the investor. |
| PANetPrice | NullableCurrency | The net price paid by the investor as stated on the purchase advice |
| PAPremiumOrDiscountOV | NullableCurrency | Override value for the dollar amount of the premium or discount paid by the investor as stated on the purchase advice |
| _PAPremiumOrDiscount | NullableCurrency | The dollar amount of the premium or discount paid by the investor as stated on the purchase advice |
| PA_SRPPerc | NullableCurrency | The SRP percent paid by the investor as stated on the purchase advice |
| PA_SRPAmountOV | NullableCurrency | Override value for the SRP dollar amount paid by the investor as stated on the purchase advice |
| \_PA\_SRPAmount | NullableCurrency | The SRP dollar amount paid by the investor as stated on the purchase advice |
| PAEscrowBalance | NullableCurrency | Escrow balance due to the investor as stated on the purchase advice. The value is typically entered as a negative number. |
| PAInterestDays | NullableInteger | Days of interest due to the investor as stated on the purchase advice. A negative value indicates that interest is due to the investor. A positive value indicates interest is owned by the investor. |
| PAInterestAmount | NullableCurrency | Interest netted from investor wire, as stated on the purchase advice. A negative value indicates that interest is due to the investor. A positive value indicates interest is owned by the investor. |
| PABuydownFunds | NullableCurrency | Buydown funds due to the investor as stated on the purchase advice. Entered as a negative value. |
| PAOtherFees | NullableCurrency | Total of all other investor fees as shown on the purchase advice |
| PARollFee | NullableCurrency | Roll fee for late delivery as shown on the purchase advise |
| PANotes | String(10000) | Notes concerning the purchase advice |
| _PAWireAmount | NullableCurrency | The investor wire amount as shown on the purchase advice |
| FundingWireAdjustmentDesc1 | String(50) | Description of adjustment amount for the funding wire - line 1 |
| FundingWireAdjustmentAmount1 | NullableCurrency | The amount of the adjustment to the funding wire - line 1 |
| FundingWireAdjustmentDesc2 | String(50) | Description of adjustment amount for the funding wire - line 2 |
| FundingWireAdjustmentAmount2 | NullableCurrency | The amount of the adjustment to the funding wire - line 2 |
| FundingWireAmount | NullableCurrency | The amount of funds wired to fund the loan |
| WarehouseAdvanceAmount | NullableCurrency | The amount of the warehouse advance |
| _WarehouseHaircut | NullableCurrency | The warehouse haircut: the difference between the funding wire amount and the warehouse advance amount |
| WarehouseLoanNo | String(50) | Warehouse lender loan number |
| Hedged | Boolean | Indicates whether or not the loan has been hedged |
| InvestorFirstPaymentDate | NullableDate | The date that the investor is scheduled to receive the first payment from the borrower. |
| InvestorCommitmentNo | String(50) | Investor Commitment Number |
| InvestorCommitmentType | Enum.CommitmentType | Investor Commitment Type<br><br>* 0 - NotAssigned<br>* 1 - BestEfforts<br>* 2 - SingleLoanMandatory<br>* 3 - DirectTrade<br>* 4 - AOT<br>* 5 - CoIssue<br>* 6 - Securitization<br>* 7 - BulkTrade |
| InvestorCommitmentDate | NullableDateTime | Date and time that the commitment was made with the investor |
| InvestorCommitmentExpirationDate | NullableDate | The expiration date of the investor commitment |
| InvestorLockDays | NullableInteger | The number of days that the loan was locked with the investor |
| InvestorLockExtension1Days | NullableInteger | Investor lock: number of days for the first lock extension |
| InvestorLockExtension2Days | NullableInteger | Investor lock: number of days for the second lock extension |
| InvestorRateSheetID | String(50) | An identification number for the investor rate sheet in effect when the investor lock was made |
| InvestorPriceBase | NullableCurrency | Base investor price |
| InvestorSRP | NullableCurrency | The base SRP paid by the investor. For the net SRP use InvestorSRPNet instead. |
| _InvestorPriceAdjustments | NullableCurrency | Sum of investor price adjustments |
| _InvestorPriceNet | NullableCurrency | Net investor price (base price plus SRP plus adjustments) |
| _PricingGainPercent | NullableCurrency | Marketing gain or loss: difference between the investor net price (sell side) and the originator net price (buy side) |
| InvestorRegisteredDate | NullableDate | Date the loan was registered with the investor |
| InvestorIntRate | NullableCurrency | The interest rate on the investor / sell side. |
| InvestorLoanProgramCode | String(150) | Investor Loan Program Code |
| UWNotes | String(10000) | Underwriting notes |
| MandatoryInvestor | String(50) | Investor that the loan must be delivered to, as determined by underwriting. |
| ExcludedInvestor | String(50) | Investor that the loan cannot be delivered to, as determined by underwriting. |
| PricedInvestor | String(50) | The investor whose pricing is shown on the sell-side of the secondary screen. For best efforts this will be the same as the final investor; for mandatory this will be the BestX investor. |
| _InvestorProfitNet | NullableCurrency | Net profit as shown on the sell-side. This is not the final net profit on the loan. |
| _PricingGainAmount | NullableCurrency | Secondary Gain/Loss Amount: sell-side net profit (Investor Profit Net) less buy-side net profit (Loan.Buy Profit Net) |
| InvestorLockExtension3Days | NullableInteger | Investor lock: number of days for the third lock extension |
| _CreditedPrincipal | NullableCurrency | Total amount of principal credited (from loan payments made by borrower) |
| _CreditedInterest | NullableCurrency | Total amount of interest credited (from loan payments made by borrower) |
| _CreditedEscrowFunds | NullableCurrency | Total amount of escrows funds credited (from loan payments made by borrower). Includes MI. |
| _CreditedBuydownFunds | NullableCurrency | Total amount of buydown funds credited (from loan payments made by borrower) |
| _CreditedLateFees | NullableCurrency | Total amount of late fees credited (from loan payments made by borrower) |
| _CreditedTotal | NullableCurrency | Total amount of all credits (from loan payments made by borrower) |
| _PaidAmountTotal | NullableCurrency | Total amount of all loan payments made by borrower |
| WarehouseLenderCode | String(50) | Warehouse lender |
| OtherAUSCaseNo | String(50) | Case number for other automated underwriting system (AUS) |
| OtherAUSSubmissionDate | NullableDateTime | Submission date for other automated underwriting system (AUS) |
| OtherAUSRecommendation | String(50) | Recommendation issued by an other automated underwriting system (AUS) |
| FundingType | Enum.FundingType | Funding type: wet, dry, table<br><br>* 0 - NotAssigned<br>* 1 - Wet<br>* 2 - Dry<br>* 3 - Table |
| AppDepositIsNettedFromWire | Boolean | Indicates whether or not the application deposit is netted from the investor wire |
| NextRateAdjustmentEffectiveDate | NullableDate | ULDD - The date on which the next interest rate adjustment goes into effect. |
| InvestorCollateralProgram | Enum.InvestorCollateralProgramType | ULDD - Type of investor collateral used.<br><br>* 0 - NotAssigned<br>* 1 - DURefiPlusPropertyFieldworkWaiver<br>* 2 - DUPropertyInspectionReportForm2075<br>* 3 - Level1PropertyInspectionWaiver<br>* 4 - PropertyInspectionAlternative<br>* 5 - PropertyInspectionWaiver<br>* 6 - Form2070<br>* 7 - Form2075<br>* 8 - AutomatedCollateralEvaluation<br>* 9 - PropertyDataCollection<br>* 10 - ValueAcceptance |
| InvestorRemittanceType | Enum.InvestorRemittanceType | ULDD - The remittance type assigned to the investor.<br><br>* 0 - NotAssigned<br>* 1 - ActualInterestActualPrincipal<br>* 2 - ScheduledInterestActualPrincipal<br>* 3 - ScheduledInterestScheduledPrincipal |
| LoanComments | String(1000) | ULDD - Comments about the loan. |
| ARMCurrentIntRate | NullableCurrency | ULDD - The interest rate for the current period in the amortization schedule. |
| GSELoanProgramIdentifier | Enum.GSELoanProgramType | ULDD - First type of loan program specified for GSE delivery.<br><br>* 0 - NotAssigned<br>* 1 - LoanFirstTimeHomebuyer<br>* 2 - Alt97<br>* 3 - AlternativeFullInformation<br>* 4 - AMinusMortgage<br>* 5 - BuilderOrDeveloperAffiliated<br>* 6 - ConstructionConversion<br>* 7 - CorrAdvantageLoan<br>* 8 - DecliningBalanceCoOwnershipInitiative<br>* 9 - DisasterReliefProgram<br>* 10 - DreaMaker<br>* 11 - EnergyConservation<br>* 12 - FREOwnedCondoProject<br>* 13 - HomeOpportunity<br>* 14 - HomePossible3PercentCash<br>* 15 - HomePossible97<br>* 16 - HomePossibleMCM3PercentCash<br>* 17 - HomePossibleMCM97<br>* 18 - HomePossibleNeighborhoodSolution3PercentCash<br>* 19 - HomePossibleNeighborhoodSolution97<br>* 20 - HomePossibleNeighborhoodSolutionMCMCS3PercentCash<br>* 21 - HomePossibleNeighborhoodSolutionMCMCS97<br>* 22 - LoansToFacilitateREOSales<br>* 23 - LongTermStandBy<br>* 24 - MortgageRevenueBond<br>* 25 - MortgageRewardsProgram<br>* 26 - MurabahaMortgage<br>* 27 - Negotiated97PercentLTVLoanProgram<br>* 28 - NewlyBuiltHomeMortgage<br>* 29 - NoFeeMortgagePlus<br>* 30 - NeighborhoodChampions<br>* 31 - OptimumMortgageProgram<br>* 32 - RecourseGuaranteedByThirdParty<br>* 33 - Renovation<br>* 34 - SolarInitiative<br>* 35 - ShortTermStandBy<br>* 36 - HomePossibleMortgage<br>* 37 - HomePossibleMCM<br>* 38 - HomePossibleNeighborhoodSolutionMortgage<br>* 39 - HomePossibleMCMCS<br>* 40 - HomePossibleAdvantageMortgage<br>* 42 - ChattelMortgage<br>* 43 - CHOICEHome<br>* 44 - CHOICERenoEXpress<br>* 45 - CHOICERenoEXpressDTSArea<br>* 46 - CHOICERenovation<br>* 47 - CHOICERenovationMortgageWithRecourse<br>* 48 - CommunityLandTrust<br>* 49 - GreenCHOICE<br>* 50 - GreenCHOICEToPayOffOutstandingEnergyDebt<br>* 51 - HFAAdvantage<br>* 52 - HFAPreferred<br>* 53 - HomePossibleAdvantageHFA<br>* 54 - IncomeBasedDeedRestrictionsSurvive<br>* 55 - IncomeBasedDeedRestrictionsTerminate<br>* 56 - BorrowSmart<br>* 57 - HeritageOne |
| GSELoanProgramIdentifier2 | Enum.GSELoanProgramType | ULDD - Second type of loan program specified for GSE delivery.<br><br>* 0 - NotAssigned<br>* 1 - LoanFirstTimeHomebuyer<br>* 2 - Alt97<br>* 3 - AlternativeFullInformation<br>* 4 - AMinusMortgage<br>* 5 - BuilderOrDeveloperAffiliated<br>* 6 - ConstructionConversion<br>* 7 - CorrAdvantageLoan<br>* 8 - DecliningBalanceCoOwnershipInitiative<br>* 9 - DisasterReliefProgram<br>* 10 - DreaMaker<br>* 11 - EnergyConservation<br>* 12 - FREOwnedCondoProject<br>* 13 - HomeOpportunity<br>* 14 - HomePossible3PercentCash<br>* 15 - HomePossible97<br>* 16 - HomePossibleMCM3PercentCash<br>* 17 - HomePossibleMCM97<br>* 18 - HomePossibleNeighborhoodSolution3PercentCash<br>* 19 - HomePossibleNeighborhoodSolution97<br>* 20 - HomePossibleNeighborhoodSolutionMCMCS3PercentCash<br>* 21 - HomePossibleNeighborhoodSolutionMCMCS97<br>* 22 - LoansToFacilitateREOSales<br>* 23 - LongTermStandBy<br>* 24 - MortgageRevenueBond<br>* 25 - MortgageRewardsProgram<br>* 26 - MurabahaMortgage<br>* 27 - Negotiated97PercentLTVLoanProgram<br>* 28 - NewlyBuiltHomeMortgage<br>* 29 - NoFeeMortgagePlus<br>* 30 - NeighborhoodChampions<br>* 31 - OptimumMortgageProgram<br>* 32 - RecourseGuaranteedByThirdParty<br>* 33 - Renovation<br>* 34 - SolarInitiative<br>* 35 - ShortTermStandBy<br>* 36 - HomePossibleMortgage<br>* 37 - HomePossibleMCM<br>* 38 - HomePossibleNeighborhoodSolutionMortgage<br>* 39 - HomePossibleMCMCS<br>* 40 - HomePossibleAdvantageMortgage<br>* 42 - ChattelMortgage<br>* 43 - CHOICEHome<br>* 44 - CHOICERenoEXpress<br>* 45 - CHOICERenoEXpressDTSArea<br>* 46 - CHOICERenovation<br>* 47 - CHOICERenovationMortgageWithRecourse<br>* 48 - CommunityLandTrust<br>* 49 - GreenCHOICE<br>* 50 - GreenCHOICEToPayOffOutstandingEnergyDebt<br>* 51 - HFAAdvantage<br>* 52 - HFAPreferred<br>* 53 - HomePossibleAdvantageHFA<br>* 54 - IncomeBasedDeedRestrictionsSurvive<br>* 55 - IncomeBasedDeedRestrictionsTerminate<br>* 56 - BorrowSmart<br>* 57 - HeritageOne |
| GSELoanProgramIdentifier3 | Enum.GSELoanProgramType | ULDD - Third type of loan program specified for GSE delivery.<br><br>* 0 - NotAssigned<br>* 1 - LoanFirstTimeHomebuyer<br>* 2 - Alt97<br>* 3 - AlternativeFullInformation<br>* 4 - AMinusMortgage<br>* 5 - BuilderOrDeveloperAffiliated<br>* 6 - ConstructionConversion<br>* 7 - CorrAdvantageLoan<br>* 8 - DecliningBalanceCoOwnershipInitiative<br>* 9 - DisasterReliefProgram<br>* 10 - DreaMaker<br>* 11 - EnergyConservation<br>* 12 - FREOwnedCondoProject<br>* 13 - HomeOpportunity<br>* 14 - HomePossible3PercentCash<br>* 15 - HomePossible97<br>* 16 - HomePossibleMCM3PercentCash<br>* 17 - HomePossibleMCM97<br>* 18 - HomePossibleNeighborhoodSolution3PercentCash<br>* 19 - HomePossibleNeighborhoodSolution97<br>* 20 - HomePossibleNeighborhoodSolutionMCMCS3PercentCash<br>* 21 - HomePossibleNeighborhoodSolutionMCMCS97<br>* 22 - LoansToFacilitateREOSales<br>* 23 - LongTermStandBy<br>* 24 - MortgageRevenueBond<br>* 25 - MortgageRewardsProgram<br>* 26 - MurabahaMortgage<br>* 27 - Negotiated97PercentLTVLoanProgram<br>* 28 - NewlyBuiltHomeMortgage<br>* 29 - NoFeeMortgagePlus<br>* 30 - NeighborhoodChampions<br>* 31 - OptimumMortgageProgram<br>* 32 - RecourseGuaranteedByThirdParty<br>* 33 - Renovation<br>* 34 - SolarInitiative<br>* 35 - ShortTermStandBy<br>* 36 - HomePossibleMortgage<br>* 37 - HomePossibleMCM<br>* 38 - HomePossibleNeighborhoodSolutionMortgage<br>* 39 - HomePossibleMCMCS<br>* 40 - HomePossibleAdvantageMortgage<br>* 42 - ChattelMortgage<br>* 43 - CHOICEHome<br>* 44 - CHOICERenoEXpress<br>* 45 - CHOICERenoEXpressDTSArea<br>* 46 - CHOICERenovation<br>* 47 - CHOICERenovationMortgageWithRecourse<br>* 48 - CommunityLandTrust<br>* 49 - GreenCHOICE<br>* 50 - GreenCHOICEToPayOffOutstandingEnergyDebt<br>* 51 - HFAAdvantage<br>* 52 - HFAPreferred<br>* 53 - HomePossibleAdvantageHFA<br>* 54 - IncomeBasedDeedRestrictionsSurvive<br>* 55 - IncomeBasedDeedRestrictionsTerminate<br>* 56 - BorrowSmart<br>* 57 - HeritageOne |
| ARMCurrentPIPayment | NullableCurrency | ULDD - The current PI payment from the amortization schedule. |
| AggregateLoanCurtailmentAmountOV | NullableCurrency | ULDD - The total amount of additional principal paid since origination. |
| GSERefinanceProgramType | Enum.GSERefinanceProgramType | ULDD - The refinance program specified for GSE delivery.<br><br>* 0 - NotAssigned<br>* 1 - DisasterResponse<br>* 2 - DURefiPlus<br>* 3 - RefiPlus<br>* 4 - FREOwnedStreamlinedRefinance<br>* 6 - ReliefRefinanceOpenAccess<br>* 7 - ReliefRefinanceSameServicer<br>* 8 - StreamlinedReliefRefinance<br>* 9 - TexasEquity<br>* 10 - HighLTVRefi<br>* 11 - EnhancedReliefRefinance |
| DeliquentPaymentsOverPast12MonthsCount | NullableInteger | ULDD - The number of deliquent payments received over the last 12 months. |
| CreditScoreImpairmentType | Enum.CreditScoreImpairmentType | ULDD - Credit scrore impairment type.<br><br>* 0 - NotAssigned<br>* 1 - InsufficientCreditHistory<br>* 2 - SignificantErrorsScore |
| ULDDDestination | Enum.ULDDDestinationType | ULDD - delivery destination (Fannie, Freddie, etc.)<br><br>* 0 - NotAssigned<br>* 1 - Fannie<br>* 2 - Freddie |
| ARMIndexSource | Enum.ULDDARMIndexSourceType | ULDD- ARM index source type.<br><br>* 0 - NotAssigned<br>* 7 - LIBOROneYearWSJDaily<br>* 21 - SixMonthLIBOR_WSJDaily<br>* 27 - WeeklyFiveYearTreasurySecuritiesConstantMaturityFRBH15<br>* 28 - WeeklyOneYearTreasurySecuritiesConstantMaturityFRBH15<br>* 31 - WeeklyThreeYearTreasurySecuritiesConstantMaturityFRBH15<br>* 101 - _30DayAverageSOFR |
| FannieARMIndexSource | Enum.FannieARMIndexSourceType | ULDD - Fannie-specific ARM index source type.<br><br>* 0 - NotAssigned<br>* 1 - _6MonthTreasuryBillAuctionHighMonthlyAverage<br>* 2 - _1YearTreasuryConstantMaturitiesMonthlyAverage<br>* 3 - _3YearTreasuryConstantMaturitiesMonthlyAverage<br>* 4 - _5YearTreasuryConstantMaturitiesMonthlyAverage<br>* 5 - NationalAverageContractMortgageRateForThePurchaseOfPreviouslyOccupiedHomes<br>* 6 - _6MonthTreasuryBillAuctionHighDiscountRate<br>* 7 - _1YearTreasuryConstantMaturitiesWeeklyAverage<br>* 8 - _3YearTreasuryConstantMaturitiesWeeklyAverage<br>* 9 - _5YearTreasuryConstantMaturitiesWeeklyAverage<br>* 10 - _6MonthMoneyMarketComBankWeekly<br>* 11 - FHLBB11thDistrictCostOfFundsMonthlyAverage<br>* 12 - _10YearTreasuryConstantMaturitiesWeeklyAverage<br>* 13 - NationalMonthlyMedianCostOfFundsRateMonthlyAverage<br>* 14 - _6MonthTreasuryBillAuctionHighInvestmentRate<br>* 15 - _11thDistrictDailyGuarRate30DayCom5Yr<br>* 16 - _5YearFHLBNYAdvanceRateDaily<br>* 17 - _6MonthTreasuryBillSecondaryMarketWeeklyAverage<br>* 18 - _2YearTreasuryConstantMaturitiesWeeklyAverage<br>* 19 - CumulativeAverageforthePrevious4WeeksWeeklyAverage6MonthAuctionHighInvestmentRate<br>* 20 - CumulativeAverageforthePrevious26WeeksWeeklyAverage<br>* 21 - _1MonthWallStreetJournalLIBORRateMonthly<br>* 22 - FHFB11thDistrictCOFCumulativeAverageForThePrevious12Months<br>* 23 - WallStreetJournalPrimeRate<br>* 24 - _1YearTreasuryBill364DayDiscountRateWeeklyAuctionAverage<br>* 25 - _7YearTreasuryConstantMaturitiesWeeklyAverage<br>* 26 - _1YearFHLBBostonAdvanceRateDaily<br>* 27 - FederalReserve6MonthCDRateDaily<br>* 28 - SemiAnnualCOFforCaliforniaSemiannualAverage<br>* 29 - _6MonthCDsSecondaryMarketWeeklyAverage<br>* 30 - CumulativeAverageForThePrevious12MonthOfThe6MonthTBillMonthlyAverage<br>* 31 - Blend50PercentFRM50PercentWeekly1YearTreasurySecurityWeeklyAverage<br>* 32 - Blend75PercentFRM25PercentWeekly1YearTreasurySecurityWeeklyAverage<br>* 33 - _6MonthCDsSecondaryMarketMonthlyAverage<br>* 34 - CumulativeAverageForThePrevious12Months1YearTreasurySecurityMonthlyAverage<br>* 35 - _6MonthWallStreetJournalLIBORRateMonthlyAverage<br>* 36 - SemiAnnualCOFforthe11thDistrictSemiannualAverage<br>* 37 - QuarterlyAverageOfTheFederalCOFI<br>* 38 - MonthlyAverageOfTheWeeklyAverage1YearTreasurySecurityMonthlyAverage<br>* 39 - NationalAverageEffectiveRateoOfAllMortgageloansMonthlyAverage<br>* 40 - WallStreetJournal6MonthLIBOR<br>* 41 - FreddieMac30Year60DayRequiredNetYieldsDaily<br>* 42 - _6MonthWallStreetJournalLIBORRateDaily<br>* 43 - _1MonthWallStreetJournalLIBORRateDaily<br>* 44 - _3MonthWallStreetJournalLIBORRateMonthly<br>* 45 - _1MonthCDRateSecondaryMarketWeeklyAverage<br>* 46 - _6MonthBritishBankersAssociationLIBORRateMonthly<br>* 47 - _6MonthTBillAuctionHighDiscountRate<br>* 48 - _3MonthBritishBankersAssociationLIBORRateMonthly<br>* 49 - _1MonthBritishBankersAssociationLIBORRateMonthly<br>* 50 - _1YearTreasuryConstantMaturitiesMonthlyAverageCumulativeAveragefortheprevious12MonthsMonthlyAverage<br>* 51 - _30year60DayConventionalFixedRateDaily<br>* 52 - _1YearWallStreetJournalLIBORRateDaily<br>* 53 - FreddieMacCostofFunds<br>* 54 - _12MonthRollingAverageOfThe3MonthCD<br>* 55 - _6MonthTreasuryConstantMaturitiesWeeklyAverage<br>* 56 - _30DayFRMConvPostedYieldAA<br>* 57 - _30DayFRMConvPostedYieldSA<br>* 58 - _60DayFRMConvPostedYieldAA<br>* 59 - _60DayFRMConvPostedYieldSA<br>* 60 - _6MonthTreasuryConstantMaturitySecDaily<br>* 61 - _3MonthWallStreetJournalLIBORrateDaily<br>* 62 - WellsFargoPrimeRateOnBloomberg<br>* 63 - _1MonthBritishBankersAssociationLIBOROnBloomberg<br>* 64 - _3MonthBritishBankersAssociationLIBOROnBloomberg<br>* 65 - _1YearWallStreetJournalLIBORRateMonthly<br>* 66 - _10YearTreasuryConstantMaturityMonthly<br>* 67 - _1YearCMTMonthlyLast4WeeksofWeekly<br>* 68 - _5YearCMTMonthlyLast4WeeksofWeekly<br>* 69 - _1MonthTreasuryConstantMaturityWeekly<br>* 70 - _6MonthBritishBankersLIBORDaily<br>* 71 - WellsFargoCostofSavingsMonthly<br>* 72 - CumulativeAverageforthePrevious4WeeksWeeklyAverage6MonthAuctionHighDiscRate<br>* 73 - _1YearTreasuryBill364DayDiscountRateMonthly<br>* 74 - _30DayAverageSOFR |
| AUSRecommendationOV | Enum.AUSRecommendationType(100) | ULDD - AUS recommendation.<br><br>* 0 - NotAssigned<br>* 1 - ApproveEligible<br>* 2 - ApproveIneligible<br>* 3 - EAIEligible<br>* 4 - EAIIEligible<br>* 5 - EAIIIEligible<br>* 6 - EAIIIIneligible<br>* 7 - EAIIIneligible<br>* 8 - EAIIneligible<br>* 9 - _Error<br>* 10 - OutofScope<br>* 11 - ReferEligible<br>* 12 - ReferIneligible<br>* 13 - ReferWithCautionIV<br>* 14 - Unknown<br>* 15 - ReferWithCaution<br>* 100 - A1Accept<br>* 101 - A2Accept<br>* 102 - Accept<br>* 103 - Approve<br>* 104 - Caution<br>* 105 - C1Caution<br>* 106 - C2Caution<br>* 107 - CautionEligibleForAMinus |
| CCFundsType1 | Enum.ULDDClosingCostFundsType | ULDD - Type of item commonly used for payment of closing costs.<br><br>* 0 - NotAssigned<br>* 1 - BridgeLoan<br>* 2 - CashOnHand<br>* 3 - CheckingSavings<br>* 4 - Contribution<br>* 5 - CreditCard<br>* 6 - GiftFunds<br>* 7 - Grant<br>* 9 - PremiumFunds<br>* 10 - SecuredLoan<br>* 11 - SweatEquity<br>* 12 - UnsecuredBorrowedFunds<br>* 13 - EquityOnSoldProperty<br>* 14 - ForgivableSecuredLoan<br>* 100 - AggregatedRemainingTypes<br>* 101 - SecondaryFinancingClosedEnd<br>* 102 - SecondaryFinancingHELOC<br>* 103 - EquityOnSubjectProperty<br>* 104 - LifeInsuranceCashValue<br>* 105 - LotEquity<br>* 106 - RentWithOptionToPurchase<br>* 107 - RetirementFunds<br>* 108 - SaleOfChattel<br>* 109 - StocksAndBonds<br>* 110 - TradeEquity<br>* 111 - TrustFunds |
| CCSourceType1 | Enum.ULDDClosingCostSourceType | ULDD - Identifies the source or contributor of funds used for the closing cost.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 2 - CommunityNonProfit<br>* 3 - Employer<br>* 4 - FederalAgency<br>* 5 - Lender<br>* 6 - LocalAgency<br>* 8 - PropertySeller<br>* 9 - Relative<br>* 10 - ReligiousNonProfit<br>* 11 - StateAgency<br>* 100 - AggregatedRemainingSourceTypes<br>* 101 - FHLBAffordableHousingProgram<br>* 102 - USDARuralHousing |
| CCFundAmount1 | NullableCurrency | ULDD - Closing cost amount assoiacted with this fund type. |
| CCFundsType2 | Enum.ULDDClosingCostFundsType | ULDD - Type of item commonly used for payment of closing costs.<br><br>* 0 - NotAssigned<br>* 1 - BridgeLoan<br>* 2 - CashOnHand<br>* 3 - CheckingSavings<br>* 4 - Contribution<br>* 5 - CreditCard<br>* 6 - GiftFunds<br>* 7 - Grant<br>* 9 - PremiumFunds<br>* 10 - SecuredLoan<br>* 11 - SweatEquity<br>* 12 - UnsecuredBorrowedFunds<br>* 13 - EquityOnSoldProperty<br>* 14 - ForgivableSecuredLoan<br>* 100 - AggregatedRemainingTypes<br>* 101 - SecondaryFinancingClosedEnd<br>* 102 - SecondaryFinancingHELOC<br>* 103 - EquityOnSubjectProperty<br>* 104 - LifeInsuranceCashValue<br>* 105 - LotEquity<br>* 106 - RentWithOptionToPurchase<br>* 107 - RetirementFunds<br>* 108 - SaleOfChattel<br>* 109 - StocksAndBonds<br>* 110 - TradeEquity<br>* 111 - TrustFunds |
| CCSourceType2 | Enum.ULDDClosingCostSourceType | ULDD - Identifies the source or contributor of funds used for the closing cost.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 2 - CommunityNonProfit<br>* 3 - Employer<br>* 4 - FederalAgency<br>* 5 - Lender<br>* 6 - LocalAgency<br>* 8 - PropertySeller<br>* 9 - Relative<br>* 10 - ReligiousNonProfit<br>* 11 - StateAgency<br>* 100 - AggregatedRemainingSourceTypes<br>* 101 - FHLBAffordableHousingProgram<br>* 102 - USDARuralHousing |
| CCFundAmount2 | NullableCurrency | ULDD - Closing cost amount assoiacted with this fund type. |
| CCFundsType3 | Enum.ULDDClosingCostFundsType | ULDD - Type of item commonly used for payment of closing costs.<br><br>* 0 - NotAssigned<br>* 1 - BridgeLoan<br>* 2 - CashOnHand<br>* 3 - CheckingSavings<br>* 4 - Contribution<br>* 5 - CreditCard<br>* 6 - GiftFunds<br>* 7 - Grant<br>* 9 - PremiumFunds<br>* 10 - SecuredLoan<br>* 11 - SweatEquity<br>* 12 - UnsecuredBorrowedFunds<br>* 13 - EquityOnSoldProperty<br>* 14 - ForgivableSecuredLoan<br>* 100 - AggregatedRemainingTypes<br>* 101 - SecondaryFinancingClosedEnd<br>* 102 - SecondaryFinancingHELOC<br>* 103 - EquityOnSubjectProperty<br>* 104 - LifeInsuranceCashValue<br>* 105 - LotEquity<br>* 106 - RentWithOptionToPurchase<br>* 107 - RetirementFunds<br>* 108 - SaleOfChattel<br>* 109 - StocksAndBonds<br>* 110 - TradeEquity<br>* 111 - TrustFunds |
| CCSourceType3 | Enum.ULDDClosingCostSourceType | ULDD - Identifies the source or contributor of funds used for the closing cost.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 2 - CommunityNonProfit<br>* 3 - Employer<br>* 4 - FederalAgency<br>* 5 - Lender<br>* 6 - LocalAgency<br>* 8 - PropertySeller<br>* 9 - Relative<br>* 10 - ReligiousNonProfit<br>* 11 - StateAgency<br>* 100 - AggregatedRemainingSourceTypes<br>* 101 - FHLBAffordableHousingProgram<br>* 102 - USDARuralHousing |
| CCFundAmount3 | NullableCurrency | ULDD - Closing cost amount assoiacted with this fund type. |
| CCFundsType4 | Enum.ULDDClosingCostFundsType | ULDD - Type of item commonly used for payment of closing costs.<br><br>* 0 - NotAssigned<br>* 1 - BridgeLoan<br>* 2 - CashOnHand<br>* 3 - CheckingSavings<br>* 4 - Contribution<br>* 5 - CreditCard<br>* 6 - GiftFunds<br>* 7 - Grant<br>* 9 - PremiumFunds<br>* 10 - SecuredLoan<br>* 11 - SweatEquity<br>* 12 - UnsecuredBorrowedFunds<br>* 13 - EquityOnSoldProperty<br>* 14 - ForgivableSecuredLoan<br>* 100 - AggregatedRemainingTypes<br>* 101 - SecondaryFinancingClosedEnd<br>* 102 - SecondaryFinancingHELOC<br>* 103 - EquityOnSubjectProperty<br>* 104 - LifeInsuranceCashValue<br>* 105 - LotEquity<br>* 106 - RentWithOptionToPurchase<br>* 107 - RetirementFunds<br>* 108 - SaleOfChattel<br>* 109 - StocksAndBonds<br>* 110 - TradeEquity<br>* 111 - TrustFunds |
| CCSourceType4 | Enum.ULDDClosingCostSourceType | ULDD - Identifies the source or contributor of funds used for the closing cost.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 2 - CommunityNonProfit<br>* 3 - Employer<br>* 4 - FederalAgency<br>* 5 - Lender<br>* 6 - LocalAgency<br>* 8 - PropertySeller<br>* 9 - Relative<br>* 10 - ReligiousNonProfit<br>* 11 - StateAgency<br>* 100 - AggregatedRemainingSourceTypes<br>* 101 - FHLBAffordableHousingProgram<br>* 102 - USDARuralHousing |
| CCFundAmount4 | NullableCurrency | ULDD - Closing cost amount assoiacted with this fund type. |
| SellerLoanIdentifier | String(30) | ULDD - Loan identifier assigned by the seller. |
| DocumentCustodianIdentifier | String(50) | ULDD - The Document Custodian's identifier. |
| ServicerIdentifier | String(50) | ULDD - The Servicer's identifier. |
| ConstructionMethod | Enum.ULDDConstructionMethod | ULDD - Subject property construction method type.<br><br>* 0 - NotAssigned<br>* 1 - Manufactured<br>* 3 - Modular<br>* 6 - SiteBuilt |
| ULDD_UPBAmountOV | NullableCurrency | ULDD - Value for unpaid principal balance amount overridden by user. |
| LoanAcquisitionScheduledUPBAmount | NullableCurrency | ULDD - The unpaid principal balance as of the scheduled loan acquisition date. |
| DownPaymentAmount1 | NullableCurrency | ULDD - Down payment amount 1. |
| DownPaymentSource1 | Enum.ULDD_DownPaymentSource | ULDD - Source of down payment for amount 1.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 3 - CommunityNonProfit<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 8 - OriginatingLender<br>* 11 - Relative<br>* 12 - ReligiousNonProfit<br>* 13 - StateAgency<br>* 1000 - AggregatedRemainingSourceTypes<br>* 1001 - FHLBAffordableHousingProgram<br>* 1002 - USDARuralHousing |
| DownPaymentType1 | Enum.ULDD_DownPaymentType | ULDD - Type of down payment for amount 1.<br><br>* 0 - NotAssigned<br>* 1 - BridgeLoan<br>* 2 - CashOnHand<br>* 6 - EquityOnSoldProperty<br>* 7 - EquityOnSubjectProperty<br>* 8 - GiftFunds<br>* 9 - LifeInsuranceCashValue<br>* 10 - LotEquity<br>* 12 - RentWithOptionToPurchase<br>* 13 - RetirementFunds<br>* 14 - SaleOfChattel<br>* 15 - SecuredBorrowedFunds<br>* 16 - StocksAndBonds<br>* 17 - SweatEquity<br>* 18 - TradeEquity<br>* 19 - TrustFunds<br>* 20 - UnsecuredBorrowedFunds<br>* 23 - ForgivableSecuredLoan<br>* 29 - CheckingSavings<br>* 31 - Grant<br>* 1000 - AggregatedRemainingTypes<br>* 1001 - SecondaryFinancingClosedEnd<br>* 1002 - SecondaryFinancingHELOC |
| DownPaymentAmount2 | NullableCurrency | ULDD - Down payment amount 2. |
| DownPaymentSource2 | Enum.ULDD_DownPaymentSource | ULDD - Source of down payment for amount 2.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 3 - CommunityNonProfit<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 8 - OriginatingLender<br>* 11 - Relative<br>* 12 - ReligiousNonProfit<br>* 13 - StateAgency<br>* 1000 - AggregatedRemainingSourceTypes<br>* 1001 - FHLBAffordableHousingProgram<br>* 1002 - USDARuralHousing |
| DownPaymentType2 | Enum.ULDD_DownPaymentType | ULDD - Type of down payment for amount 2.<br><br>* 0 - NotAssigned<br>* 1 - BridgeLoan<br>* 2 - CashOnHand<br>* 6 - EquityOnSoldProperty<br>* 7 - EquityOnSubjectProperty<br>* 8 - GiftFunds<br>* 9 - LifeInsuranceCashValue<br>* 10 - LotEquity<br>* 12 - RentWithOptionToPurchase<br>* 13 - RetirementFunds<br>* 14 - SaleOfChattel<br>* 15 - SecuredBorrowedFunds<br>* 16 - StocksAndBonds<br>* 17 - SweatEquity<br>* 18 - TradeEquity<br>* 19 - TrustFunds<br>* 20 - UnsecuredBorrowedFunds<br>* 23 - ForgivableSecuredLoan<br>* 29 - CheckingSavings<br>* 31 - Grant<br>* 1000 - AggregatedRemainingTypes<br>* 1001 - SecondaryFinancingClosedEnd<br>* 1002 - SecondaryFinancingHELOC |
| DownPaymentAmount3 | NullableCurrency | ULDD - Down payment amount 3. |
| DownPaymentSource3 | Enum.ULDD_DownPaymentSource | ULDD - Source of down payment for amount 3.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 3 - CommunityNonProfit<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 8 - OriginatingLender<br>* 11 - Relative<br>* 12 - ReligiousNonProfit<br>* 13 - StateAgency<br>* 1000 - AggregatedRemainingSourceTypes<br>* 1001 - FHLBAffordableHousingProgram<br>* 1002 - USDARuralHousing |
| DownPaymentType3 | Enum.ULDD_DownPaymentType | ULDD - Type of down payment for amount 3.<br><br>* 0 - NotAssigned<br>* 1 - BridgeLoan<br>* 2 - CashOnHand<br>* 6 - EquityOnSoldProperty<br>* 7 - EquityOnSubjectProperty<br>* 8 - GiftFunds<br>* 9 - LifeInsuranceCashValue<br>* 10 - LotEquity<br>* 12 - RentWithOptionToPurchase<br>* 13 - RetirementFunds<br>* 14 - SaleOfChattel<br>* 15 - SecuredBorrowedFunds<br>* 16 - StocksAndBonds<br>* 17 - SweatEquity<br>* 18 - TradeEquity<br>* 19 - TrustFunds<br>* 20 - UnsecuredBorrowedFunds<br>* 23 - ForgivableSecuredLoan<br>* 29 - CheckingSavings<br>* 31 - Grant<br>* 1000 - AggregatedRemainingTypes<br>* 1001 - SecondaryFinancingClosedEnd<br>* 1002 - SecondaryFinancingHELOC |
| DownPaymentAmount4 | NullableCurrency | ULDD - Down payment amount 4. |
| DownPaymentSource4 | Enum.ULDD_DownPaymentSource | ULDD - Source of down payment for amount 4.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 3 - CommunityNonProfit<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 8 - OriginatingLender<br>* 11 - Relative<br>* 12 - ReligiousNonProfit<br>* 13 - StateAgency<br>* 1000 - AggregatedRemainingSourceTypes<br>* 1001 - FHLBAffordableHousingProgram<br>* 1002 - USDARuralHousing |
| DownPaymentType4 | Enum.ULDD_DownPaymentType | ULDD - Type of down payment for amount 4.<br><br>* 0 - NotAssigned<br>* 1 - BridgeLoan<br>* 2 - CashOnHand<br>* 6 - EquityOnSoldProperty<br>* 7 - EquityOnSubjectProperty<br>* 8 - GiftFunds<br>* 9 - LifeInsuranceCashValue<br>* 10 - LotEquity<br>* 12 - RentWithOptionToPurchase<br>* 13 - RetirementFunds<br>* 14 - SaleOfChattel<br>* 15 - SecuredBorrowedFunds<br>* 16 - StocksAndBonds<br>* 17 - SweatEquity<br>* 18 - TradeEquity<br>* 19 - TrustFunds<br>* 20 - UnsecuredBorrowedFunds<br>* 23 - ForgivableSecuredLoan<br>* 29 - CheckingSavings<br>* 31 - Grant<br>* 1000 - AggregatedRemainingTypes<br>* 1001 - SecondaryFinancingClosedEnd<br>* 1002 - SecondaryFinancingHELOC |
| BuydownContributor | Enum.ULDDBuydownContributor | ULDD - Buydown contributor type selected by user.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 2 - Lender<br>* 100 - InterestedThirdParty |
| SecondMortgageType | Enum.SecondMortgageType | This field is deprecated and is no longer in use.<br><br>* 0 - None<br>* 1 - ConcurrentlyClosing<br>* 2 - Resubordinated |
| GuaranteeFeeAddOnIndicator | Boolean | ULDD - True if there is a guarantee fee add on. |
| LoanBuyupBuydownBasisPointNumber | NullableCurrency | ULDD - Basis point number for the loan buy-up or buy-down. |
| LoanBuyupBuydownType | Enum.LoanBuyupBuydownType | ULDD - The type of loan buy-up or buy-down selected.<br><br>* 0 - NotAssigned<br>* 1 - Buydown<br>* 2 - Buyup<br>* 3 - BuyupBuydownDoesNotApply |
| ConstructionLoanIndicator | Boolean | ULDD - True if this is a construction loan. |
| ConstToPermClosingType | Enum.ConstToPermClosingType | ULDD - Closing type of construction to permanent loan.<br><br>* 0 - NotAssigned<br>* 1 - OneClosing<br>* 2 - TwoClosing |
| ConstToPermClosingFeatureType | Enum.ConstToPermClosingFeatureType | ULDD - Closing feature type for construction to permament loans.<br><br>* 0 - NotAssigned<br>* 1 - AutomaticConversion<br>* 2 - ModificationAgreement<br>* 3 - NewNote |
| ConstToPermFirstPaymentDueDate | NullableDate | ULDD - Due date of first payment for contruction to permanent loan. |
| ProjectClassificationOV | Enum.ULDDProjectClassification | ULDD - Project classification selected.<br><br>* 0 - NotAssigned<br>* 1 - A<br>* 2 - B<br>* 3 - C<br>* 4 - E<br>* 5 - F<br>* 6 - G<br>* 7 - P<br>* 8 - Q<br>* 9 - R<br>* 10 - S<br>* 11 - T<br>* 12 - U<br>* 13 - V<br>* 14 - _1<br>* 15 - _2<br>* 100 - CondominiumProjectManagerReview<br>* 101 - ExemptFromReview<br>* 102 - FHA_Approved<br>* 103 - FullReview<br>* 104 - ProjectEligibilityReviewService<br>* 105 - StreamlinedReview |
| ProjectAttachmentTypeOV | Enum.ULDDProjectAttachmentType | ULDD - Override of type of attachment of units within a project building.<br><br>* 0 - NotAssigned<br>* 1 - Attached<br>* 2 - Detached |
| AttachmentTypeOV | Enum.ULDDAttachmentType | ULDD - Override of type of attachment between units in the subject property.<br><br>* 0 - NotAssigned<br>* 1 - Attached<br>* 2 - Detached<br>* 3 - SemiDetached |
| FanniePayeeIdentifierOV | String(9) | ULDD - Override of Payee party identifier used for Fannie export. |
| ULDDSectionOfActTypeOV | Enum.ULDDSectionOfActType | ULDD - Override value for Section of Act.<br><br>* 0 - NotAssigned<br>* 1 - _184<br>* 2 - _201S<br>* 3 - _201SD<br>* 4 - _201U<br>* 5 - _201UD<br>* 6 - _203B<br>* 7 - _203B2<br>* 8 - _203B241<br>* 9 - _203B251<br>* 10 - _203H<br>* 11 - _203I<br>* 12 - _203K<br>* 13 - _203K241<br>* 14 - _203K251<br>* 15 - _213<br>* 16 - _220<br>* 17 - _221<br>* 18 - _221D2<br>* 19 - _221D2251<br>* 20 - _222<br>* 21 - _223E<br>* 22 - _233<br>* 23 - _234C<br>* 24 - _234C251<br>* 25 - _235<br>* 26 - _237<br>* 27 - _240<br>* 28 - _245<br>* 29 - _247<br>* 30 - _248<br>* 31 - _251<br>* 32 - _255<br>* 33 - _256<br>* 34 - _257<br>* 35 - _3703<br>* 36 - _3703D<br>* 37 - _3703D2<br>* 38 - _3710<br>* 39 - _3711<br>* 40 - _502<br>* 41 - _8 |
| LastPaidInstallmentDueDateOV | NullableDate | ULDD - Override value for the last paid installment due date. |
| LTVBaseOV | NullableCurrency | ULDD - Override for base LTV to be exported. |
| LTVOV | NullableCurrency | ULDD - Override for LTV value to be exported. |
| CLTVOV | NullableCurrency | ULDD - Override for combined LTV to be exported. |
| HCLTVOV | NullableCurrency | ULDD - Override for combined HELOC LTV to be exported. |
| MIAbsenceReason | Enum.PrimaryMIAbsenceReason | ULDD - MI absence reason<br><br>* 0 - NotAssigned<br>* 4 - MICanceledBasedOnCurrentLTV<br>* 5 - NoMIBasedOnOriginalLTV<br>* 100 - IndemnificationInLieuOfMI<br>* 101 - NoMIBasedOnMortgageBeingRefinanced<br>* 102 - RecourseInLieuOfMI<br>* 103 - NoMIBasedOnInvestorRequirements |
| OFCEscrowFunds | NullableCurrency | ULDD - Other funds collected at closing - Escrow funds amount. |
| OFCBuydown | NullableCurrency | ULDD - Other funds collected at closing - Buydown amount. |
| OFCAdvancedPITIPayment | NullableCurrency | ULDD - Other funds collected at closing - Advanced PITI payment amount. |
| OFCPrincipalCurtailment | NullableCurrency | ULDD - Other funds collected at closing - Principal curtailment amount. |
| LastUsedAdHocConditionNo | NullableInteger | Last number used when creating an Ad-Hoc condition for this loan file. |
| ServicingOption | Enum.ServicingOption | Indicates whether the loan is sold with servicing retained or released<br><br>* 0 - NotAssigned<br>* 1 - ServicingReleased<br>* 2 - ServicingRetained |
| InvestorARMMargin | NullableCurrency | The ARM margin on the investor / sell side. |
| _InvestorSRPAdjustments | NullableCurrency | Sum of investor SRP adjustments |
| _InvestorSRPNet | NullableCurrency | Net investor SRP (base SRP plus SRP adjustments) |
| _UnpaidPrincipalBalance | NullableCurrency | The current UPB on the file. |
| InterimInterestNotNetFunded | Boolean | If True then the interim interest is not net funded. |
| InvestorPPEPricedProductName | String(150) | The PPE product name of the product for which pricing applies |
| InvestorPPETimePriced | NullableDateTime | The date and time that the sell side (investor) pricing was calculated by the PPE |
| _EscrowBalanceAtClosing | Decimal | The escrow account balance at closing. Includes MI. |
| _EscrowBalanceCurrent | Decimal | Escrow account balance at closing, plus any amounts paid into the escrow account, less any amounts paid out of the escrow account. Includes MI. |
| _BuydownFundsAtClosing | Decimal | Buydown funds balance at closing. |
| _BuydownFundsCurrent | Decimal | Budown funds balance at closing, less any adjustments for payments received. |
| HedgeCancellationDate | NullableDate | The date hedging was removed from the loan. |
| _PricingGainAmountPercent | NullableCurrency | Secondary Gain/Loss Percent: Gain/Loss dollar amount (Pricing Gain Amount) divided by the total loan amount |
| NotaryCounty | String(50) | County the notary is located in. |
| MarginTotalPerc | NullableCurrency | The total margin percent (aka markup percent) for the loan. |
| MarginTotal | NullableCurrency | The total margin (aka markup) for the loan. |
| WarehouseAdvancePerc | NullableCurrency | Warehouse advance amount percent |
| _CreditedMI | NullableCurrency | Total amount of mortgage insurance credited (from loan payments made by borrower) |
| _MICurrent | Decimal | MI balance at closing, plus any amounts paid into the escrow account, less any amounts paid out of the escrow account. |
| ServicingPrincipalAmountTransferred | NullableCurrency | The amount of principal transferred to the servicer |
| ServicingEscrowAmountTransferred | NullableCurrency | The amount of escrow funds transferred to the servicer |
| ServicingBuydownAmountTransferred | NullableCurrency | The amount of buydown funds transferred to the servicer |
| ServicerLoanNumber | String(30) | The loan number assigned by the servicer |
| WarehouseInterestRate | NullableCurrency | The interest rate charged by the warehouse bank |
| _WarehouseInterestAmount | NullableCurrency | The amount of interest paid to the warehouse bank |
| WarehouseOtherFeeName | String(25) | Warehouse other fee name |
| WarehouseOtherFeeAmount | NullableCurrency | The amount of other warehouse fees |
| WarehouseAdvanceDate | NullableDate | The date funds were withdrawn from the warehouse line to fund the loan |
| WarehousePayoffDate | NullableDate | The date the warehouse loan was paid off |
| WarehouseBatchNo | String(20) | Warehouse line batch number |
| EscrowDepositNotNetFunded | Boolean | Indicates whether the escrow deposit is not net funded |
| MIPFFNotNetFunded | Boolean | Indicates whether the MIP / FF is not net funded |
| InsuranceFeeAmount | NullableCurrency | Amount of the insurance fee. |
| PMICheckNo | String(22) | The check number on the PMI check. |
| TotalMortgagedProperties | NullableInteger | Total number of mortgaged properties owned by the borrower(s). |
| DeclaredSecondRatio | NullableCurrency | The total DTI /second ratio as entered by the user, typically only for correspondent loans. This is not the calculated DTI / second ratio. |
| DeclaredMonthsInReserve | NullableInteger | The number of months in reserve as entered by the user, typically only for correspondent loans. This is not the calculated months in reserve. |
| DeclaredCashOutAmount | NullableCurrency | The cash out amount as entered by the user, typically only for correspondent loans. This is not the calculated cash out amount that appears in the details of transaction. |
| DeclaredNonOccCobor | Boolean | The non-occupying coborrower indicator as entered by the user, typically only for correspondent loans. This is not the value derived from the borrowers' declarations. |
| WarehouseAdvanceCalcMethod | Enum.WarehouseAdvanceCalcMethod | Warehouse Advance Calculation Method<br><br>* 0 - WireAmount<br>* 1 - LoanAmount |
| FinalAPR | NullableCurrency | The final APR disclosed at closing |
| FinalFinanceCharge | NullableCurrency | The final finance charge disclosed at closing |
| LumpSumLenderCreditIsNettedFromWire | Boolean | Indicates whether the lump sum lender credit is netted from the wire |
| CDCureIsNettedFromWire | Boolean | Indicates whether the closing disclosure cure is netted from the wire |
| RepriceNeededDateAndTime | NullableDateTime | The date and time the loan was flagged to be repriced. |
| TotalLiabilitiesMonthlyPaymentAmountOV | NullableCurrency | Override for TotalLiabilitiesMonthlyPaymentAmount calculation. |
| TotalMonthlyProposedHousingExpenseAmountOV | NullableCurrency | Override for TotalMonthlyProposedHousingExpenseAmount calculation. |
| LoanAffordableIndicatorOV | Enum.YesNoNA | Allows user to override the LoanAffordableIndicator value.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| _LoanAffordableIndicator | Boolean | Indicates whether the loan is 'affordable'. Can be overridden.&lt;BR&gt;Default=False |
| PortfolioRefiPrepaymentPenaltyPaid | Boolean | Indicates whether the borrower paid a prepayment penalty to refinance a portfolio loan. |
| IncomeVerified | Enum.YesNoNA | Indicates whether the borrower income has been verified.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| UPBPurchased | NullableCurrency | The amount of the unpaid principal balance at the time the loan was purchased. Used for correspondent and mini-corr channels. |
| MonthsSincePreviousRefi | NullableInteger | The number of months that have elapsed since a previous refinance of the subject property |
| IsExistingHCL | Enum.YesNoNA | Indicates whether the existing loan is a high cost loan.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| ENoteIndicator | Enum.YesNoNA | Indicates that an eNote is used as part of this loan.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FannieWarehouseIdentifierOV | String(50) | ULDD - Override of Warehouse party identifier used for Fannie export. |
| FreddieWarehouseIdentifierOV | String(50) | ULDD - Override of Warehouse party identifier used for Freddie export. |
| PricingLastUpated | NullableDateTime | Indicates when the price was last updated in the product and pricing engine. |
| InvestorPricingLastUpated | NullableDateTime | Indicates when the price was last updated in the product and pricing engine. |
| AmountDueToBrokerAtFundingOV | NullableCurrency | Allows user to override Secondary.AmountDueToBrokerAtFunding calculated value. |
| FinalTotalOfPayments | NullableCurrency | The final total of payments disclosed at closing on the CD or TIL. |
| EscrowBalanceAtDelivery | NullableCurrency | Escrow balance at delivery time. |
| OBLeadSource | Enum.OBLeadSource | OB Lead source option names<br><br>* 0 - NotAssigned<br>* 1 - Option1<br>* 2 - Option2<br>* 3 - Option3<br>* 4 - Option4<br>* 5 - Option5<br>* 6 - Option6<br>* 7 - Option7<br>* 8 - Option8<br>* 9 - Option9<br>* 10 - Option10<br>* 11 - Option11<br>* 12 - Option12<br>* 13 - Option13<br>* 14 - Option14<br>* 15 - Option15<br>* 16 - Option16<br>* 17 - Option17<br>* 18 - Option18<br>* 19 - Option19<br>* 20 - Option20 |
| BankruptcyOutcomeType | Enum.BankruptcyOutcomeType | Bankruptcy outcome types<br><br>* 0 - Not_Applicable<br>* 1 - Discharged<br>* 2 - Dismissed<br>* 3 - Open_Pending |
| BankruptcySeasoningType | Enum.BankruptcySeasoningType | Bankruptcy seasoning types<br><br>* 0 - Not_Applicable<br>* 1 - \_1\_12_Months<br>* 2 - \_13\_24_Months<br>* 3 - \_25\_36_Months<br>* 4 - \_37\_48_Months<br>* 5 - \_49\_60_Months<br>* 6 - More\_than\_Five\_Years\_Ago |
| BankruptcyTypeOV | Enum.BankruptcyChapterType | Override for bankruptcy types<br><br>* 0 - NotAssigned<br>* 1 - ChapterSeven<br>* 2 - ChapterEleven<br>* 4 - ChapterTwelve<br>* 8 - ChapterThirteen |
| IsDebtConsolidation | Boolean | Debt consolidation indicator |
| HousingEventSeasoningType | Enum.HousingEventSeasoningType | Housing event seasoning types<br><br>* 0 - Not_Applicable<br>* 1 - \_1\_12_Months<br>* 2 - \_13\_24_Months<br>* 3 - \_25\_36_Months<br>* 4 - \_37\_48_Months<br>* 5 - \_49\_60_Months<br>* 6 - More\_than\_Five\_Years\_Ago |
| HousingEventType | Enum.HousingEventType | Housing event types<br><br>* 0 - None<br>* 1 - Deed\_In\_Lieu<br>* 2 - Foreclosure<br>* 3 - Modification<br>* 5 - Short_Sale |
| IncomeVerificationType | Enum.IncomeVerificationType | Income verification types<br><br>* 0 - Full_Doc<br>* 1 - \_1\_Year\_Alt\_Doc<br>* 2 - \_2\_Year\_Alt\_Doc<br>* 3 - Asset_Related<br>* 4 - Business\_Bank\_Stmt\_1\_Mo<br>* 5 - Business\_Bank\_Stmt\_3\_Mos<br>* 6 - Business\_Bank\_Stmt\_6\_Mos<br>* 7 - Business\_Bank\_Stmt\_12\_Mos<br>* 8 - Business\_Bank\_Stmt\_18\_Mos<br>* 9 - Business\_Bank\_Stmt\_24\_Mos<br>* 10 - Investor_DSCR<br>* 11 - Investor\_No\_Ratio<br>* 12 - Personal\_Bank\_Stmt\_1\_Mo<br>* 13 - Personal\_Bank\_Stmt\_3\_Mos<br>* 14 - Personal\_Bank\_Stmt\_6\_Mos<br>* 15 - Personal\_Bank\_Stmt\_12\_Mos<br>* 16 - Personal\_Bank\_Stmt\_18\_Mos<br>* 17 - Personal\_Bank\_Stmt\_24\_Mos<br>* 18 - Restricted_Stock<br>* 19 - Written_VOE<br>* 20 - Stated<br>* 21 - OneYear1099<br>* 22 - TwoYear1099<br>* 23 - PLOneYear<br>* 24 - PLTwoYear<br>* 25 - NoIncomeVerification |
| Count30DayMortgageLatesPast12Mo | NullableInteger | Number of 30 day mortgage lates in 12 months |
| Count60DayMortgageLatesPast12Mo | NullableInteger | Number of 60 day mortgage lates in 12 months |
| Count90DayMortgageLatesPast12Mo | NullableInteger | Number of 90 day mortgage lates in 12 months |
| Count120DayMortgageLatesPast12Mo | NullableInteger | Number of 120 day mortgage lates in 12 months |
| Count30DayMortgageLatesPast13To24Mo | NullableInteger | Number of 30 day mortgage lates in 13 to 24 months |
| Count60DayMortgageLatesPast13To24Mo | NullableInteger | Number of 60 day mortgage lates in 13 to 24 months |
| Count90DayMortgageLatesPast13To24Mo | NullableInteger | Number of 90 day mortgage lates in 13 to 24 months |
| Count120DayMortgageLatesPast13To24Mo | NullableInteger | Number of 120 day mortgage lates in 13 to 24 months |
| CalcLockExpDateFromDateRequested | Boolean | Indicates whether the lock expiration date is calculated from the date it was requested. If unchecked, it is calculated from the date accepted.&lt;BR&gt;Default=False |
| EnergyTypeGeothermal | Boolean | ULDD b  Energy component of energy improvement program. |
| EnergyTypeOther | Boolean | ULDD b  Energy component of energy improvement program. |
| EnergyTypeSolar | Boolean | ULDD b  Energy component of energy improvement program. |
| EnergyTypeWindTurbine | Boolean | ULDD b  Energy component of energy improvement program. |
| DebtServiceCoverageRatio | NullableCurrency | Debt service coverage ratio |
| BytePriceRequireManualLockReview | Boolean | If checked future lock desk actions will require manual review and processing by a lock desk user. |
| IsTableFunded | Boolean | Indicates whether the loan was table funded as defined by the NMLS call report |

### [](#TOP)Closing

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ClosingID | Integer | Primary Key |
| FileDataID | Integer | Foreign key |
| NotaryName | String(50) | Name of notary |
| PropertyTaxDesc | String(50) | Tax message. |
| PropertyTaxYearDesc | String(20) | Tax year description (ex. 12/13). |
| TrustName | String(300) | Trust description. |
| TrustType | Enum.TrustType | Type of trust.<br><br>* 0 - NotAssigned<br>* 1 - Irrevocable<br>* 2 - Revocable<br>* 3 - IllinoisLandTrust<br>* 4 - Other<br>* 5 - OtherLandTrust |
| TrustTypeOtherDescription | String(50) | Description of trust type when 'Other' is selected. |
| TrustEstablishedDate | NullableDate | Date the trust was established. |
| TrustState | String(2) | The state in which the trust was established. |
| TrustName2 | String(300) | Second trust description. |
| TrustType2 | Enum.TrustType | Type of second trust.<br><br>* 0 - NotAssigned<br>* 1 - Irrevocable<br>* 2 - Revocable<br>* 3 - IllinoisLandTrust<br>* 4 - Other<br>* 5 - OtherLandTrust |
| TrustTypeOtherDescription2 | String(50) | Description of second trust type when 'Other' is selected. |
| TrustEstablishedDate2 | NullableDate | Date the second trust was established. |
| TrustState2 | String(2) | The state in which the second trust was established. |
| VestingDescription | String(500) | Vesting description. |
| LoanProceedsTo | Enum.LoanProceedsToType | The type of entity the loan proceeds are from.<br><br>* 0 - NotAssigned<br>* 1 - Borrower<br>* 2 - ClosingCompany<br>* 3 - TitleCompany |
| RefiOriginalCreditorIncrease | Enum.YesNoNA | If true then the refinance is with the original creditor and the loan amount has been increased. Used to trigger an H-9 rescission form with certain document preparation vendors.&lt;BR&gt;Default=NotAssigned<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| CDSplitDisclosureIndicator | Enum.YesNoNA | CD Split Disclosure Indicator<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| CDMainEmbeddedDocID | NullableInteger | CD Main Embedded Doc ID |
| CDSellerEmbeddedDocID | NullableInteger | CD Seller Embedded Doc ID |
| TexasA6Status | Enum.TexasA6Status | Indicates the Texas A6 status of the previous and new loan.<br><br>* 0 - NotAssigned<br>* 1 - NonA6ToNonA6<br>* 2 - NonA6ToA6<br>* 3 - A6ToNonA6<br>* 4 - A6ToA6 |

### [](#TOP)LoanPayment

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| LoanPaymentID | Integer | Primary Key |
| FileDataID | Integer | Foreign Key |
| DisplayOrder | Integer | Display order |
| DueDate | NullableDate | Payment due date |
| AmountDue | NullableCurrency | Amount due from the borrower |
| ReceivedDate | NullableDate | Date payment was received from the borrower |
| DepositedDate | NullableDate | Date check was deposited |
| AmountPaid | NullableCurrency | Payment amount received from the borrower |
| CheckNo | String(50) | Check number |
| CreditedPrincipal | NullableCurrency | Amount credited to principal |
| CreditedInterest | NullableCurrency | Amount credited to interest |
| CreditedEscrowFunds | NullableCurrency | Amount credited to escrow funds. Includes MI. |
| CreditedBuydownFunds | NullableCurrency | Amount credited to buydown funds |
| CreditedLateFees | NullableCurrency | Amount credited to late fees |
| _CreditedTotal | NullableCurrency | Total of all credited amounts (principal, interest, escrows, buydown funds, and late charges) |
| Notes | String(10000) | Notes about the payment |
| LoanPaymentType | Enum.LoanPaymentType | Indicates whether the entry is a payment or a disbursement<br><br>* 0 - Payment<br>* 1 - Disbursement |
| CreditedMI | NullableCurrency | Amount credited to MI |
| PayorPayee | String(50) | The payor or payee |
| CreditedEscrowExclMI | NullableCurrency | Amount credited to escrow funds, excluding MI |

### [](#TOP)RelatedLoan

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| RelatedLoanID | Integer | Unique ID for this item. |
| FileDataID | Integer | File this RelatedLoan is associated with, |
| LienPriorityType | Enum.RelatedLoanLienPosition | The related loan's lien priority.<br><br>* 0 - NotAssigned<br>* 1 - First<br>* 2 - Second<br>* 3 - Third<br>* 4 - Fourth |
| AmortizationType | Enum.MISMOAmortizationType | Related loan's amortization type.<br><br>* 0 - NotAssigned<br>* 1 - AdjustableRate<br>* 2 - Fixed<br>* 3 - GEM<br>* 4 - GPM<br>* 5 - OtherAmortizationType<br>* 6 - GraduatedPaymentARM<br>* 7 - RateImprovementMortgage<br>* 8 - ReverseMortgage<br>* 9 - Step |
| MortgageType | Enum.MortgageType | Mortgage type of the related loan.<br><br>* 0 - NotAssigned<br>* 1 - VA<br>* 2 - FHA<br>* 3 - Conventional<br>* 4 - RHS<br>* 5 - Other<br>* 6 - HELOC<br>* 7 - StateAgency<br>* 8 - LocalAgency |
| NoteDate | NullableDate | the note date of the related loan. |
| NoteAmount | NullableCurrency | The note amount of the related loan. |
| BalloonTerm | NullableInteger | If value > 0, loan is considered to have a balloon feature. |
| LoanMaturityPeriodCount | NullableInteger | The number of periods left before the related loan reaches maturity. |
| ScheduledFirstPaymentDate | NullableDate | The related loan's scheduled first payment date. |
| UnpaidBalance | NullableCurrency | Current unpaid balance of the related loan. For ULDD delivery this is the balance at the time the ULDD file is created. |
| HELOCBalance | NullableCurrency | Current HELOC balance amount. For ULDD delivery this is the balance at the time the ULDD file is created. |
| HELOCMaxBalance | NullableCurrency | Maximum balanace amount of the HELOC. |
| AmortizationTypeOtherDesc | String(50) | Description of 'Other' amortization type. |
| MortgageTypeOtherDesc | String(50) | Description of 'Other' mortgage type. |
| IsConcurrentlyClosing | Boolean | Indicates if the related loan is closing at the same time as the subject loan |
| IsTiedToLinkedLoan | Boolean | Tells us if this item has its data set by a linked loan. |
| LoanAffordableIndicator | Enum.YesNoNA | Indicates the related loan is a loan affordable loan.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| IsHELOC | Boolean | Indicates whether the loan is a HELOC |
| CreditorName | String(100) | The creditor to which the note is payable |
| CreditorIsAnIndividual | Boolean | Indicates if the creditor is a natural person |
| FundsSourceType | Enum.RelatedLoanFundsSourceType | Identifies the type of creditor<br><br>* 0 - NotAssigned<br>* 1 - CommunityNonProfit<br>* 2 - FederalAgency<br>* 3 - Institutional<br>* 4 - Lender<br>* 5 - LocalAgency<br>* 6 - NonParentRelative<br>* 7 - NonProfitInstrumentalityOfGovernment<br>* 8 - Parent<br>* 9 - Relative<br>* 10 - ReligiousNonProfit<br>* 11 - StateAgency<br>* 12 - UnmarriedPartner<br>* 13 - UnrelatedFriend<br>* 14 - Employer<br>* 15 - PropertySeller |
| IsPaymentDeferredForFirstFiveYears | Boolean | Indicates that the payment is deferred for the first five years. Applies only to Loan Affordable loans. |
| MonthlyPayment | NullableCurrency | The monthly payment on the loan |
| BalanceAtClosing | NullableCurrency | The unpaid balance of the loan at the time the subject loan closes. For concurrently closing loans this should be the same as the note loan amount. |
| IsCashOutExcludedFromPPE | Boolean | Indicates that proceeds from this related loan will not be included in any cash-to-borrower transmitted to a Pricing Eligibility engine. |
| IntRate | NullableCurrency | Interest rate for the loan. |

### [](#TOP)Markup

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| MarkupID | Integer | Primary Key |
| FileDataID | Integer | Foreign Key |
| Description | String(100) | Description of the margin (aka markup) for the loan. |
| MarkupPercent | NullableCurrency | The percent the margin (aka markup). |
| MarkupAmount | NullableCurrency | The dollar amount of the margin (aka markup). |

### [](#TOP)Snapshot

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| SnapshotID | Integer | Unique ID for this item. |
| FileDataID | Integer | File this item is associated with. |
| SnapshotDateAndTime | NullableDateTime | Date and time the snapshot was taken. |
| OldStatus | Enum.LoanStatus | The loan status before the snapshot was taken.<br><br>* 0 - NotAssigned<br>* 1 - Prequal<br>* 2 - CreditOnly<br>* 3 - InProcessing<br>* 4 - Submitted<br>* 5 - Approved<br>* 6 - Resubmitted<br>* 7 - Declined<br>* 8 - InClosing<br>* 9 - Closed<br>* 10 - Canceled<br>* 11 - Lead<br>* 12 - Suspended<br>* 13 - DocsSigned<br>* 14 - Funded<br>* 15 - Purchased<br>* 16 - ClearToClose<br>* 17 - DocsSent<br>* 18 - CollateralSent<br>* 19 - Shipped<br>* 51 - CustomStatus1<br>* 52 - CustomStatus2<br>* 53 - CustomStatus3<br>* 54 - CustomStatus4<br>* 55 - CustomStatus5<br>* 56 - CustomStatus6<br>* 57 - CustomStatus7<br>* 58 - CustomStatus8<br>* 59 - CustomStatus9<br>* 60 - CustomStatus10<br>* 61 - CustomStatus11<br>* 62 - CustomStatus12<br>* 63 - CustomStatus13<br>* 64 - CustomStatus14<br>* 65 - CustomStatus15<br>* 66 - CustomStatus16<br>* 67 - CustomStatus17<br>* 68 - CustomStatus18<br>* 69 - CustomStatus19<br>* 70 - CustomStatus20<br>* 71 - CustomStatus21<br>* 72 - CustomStatus22<br>* 73 - CustomStatus23<br>* 74 - CustomStatus24<br>* 75 - CustomStatus25<br>* 76 - CustomStatus26<br>* 77 - CustomStatus27<br>* 78 - CustomStatus28<br>* 79 - CustomStatus29<br>* 80 - CustomStatus30 |
| NewStatus | Enum.LoanStatus | The loan status after the snapshot was taken.<br><br>* 0 - NotAssigned<br>* 1 - Prequal<br>* 2 - CreditOnly<br>* 3 - InProcessing<br>* 4 - Submitted<br>* 5 - Approved<br>* 6 - Resubmitted<br>* 7 - Declined<br>* 8 - InClosing<br>* 9 - Closed<br>* 10 - Canceled<br>* 11 - Lead<br>* 12 - Suspended<br>* 13 - DocsSigned<br>* 14 - Funded<br>* 15 - Purchased<br>* 16 - ClearToClose<br>* 17 - DocsSent<br>* 18 - CollateralSent<br>* 19 - Shipped<br>* 51 - CustomStatus1<br>* 52 - CustomStatus2<br>* 53 - CustomStatus3<br>* 54 - CustomStatus4<br>* 55 - CustomStatus5<br>* 56 - CustomStatus6<br>* 57 - CustomStatus7<br>* 58 - CustomStatus8<br>* 59 - CustomStatus9<br>* 60 - CustomStatus10<br>* 61 - CustomStatus11<br>* 62 - CustomStatus12<br>* 63 - CustomStatus13<br>* 64 - CustomStatus14<br>* 65 - CustomStatus15<br>* 66 - CustomStatus16<br>* 67 - CustomStatus17<br>* 68 - CustomStatus18<br>* 69 - CustomStatus19<br>* 70 - CustomStatus20<br>* 71 - CustomStatus21<br>* 72 - CustomStatus22<br>* 73 - CustomStatus23<br>* 74 - CustomStatus24<br>* 75 - CustomStatus25<br>* 76 - CustomStatus26<br>* 77 - CustomStatus27<br>* 78 - CustomStatus28<br>* 79 - CustomStatus29<br>* 80 - CustomStatus30 |
| SnapshotType | Enum.SnapshotType | The snapshot type (UW, etc.)<br><br>* 0 - Underwriting |

### [](#TOP)SnapshotFieldValue

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| SnapshotFieldValueID | Integer | Unique ID for this item. |
| FileDataID | Integer | The file this item is associated with. |
| SnapshotID | Integer | The Snapshot this item belongs to. |
| TableAndFieldName | String(100) | The db table and column this item ia tracking. |
| FieldValue | String(7000) | The value of the field at the time the snapshot was taken. |

### [](#TOP)AdditionalParty

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| AdditionalPartyID | Integer | Unique ID for this item. |
| FileDataID | Integer | The ID of the file this item is assocated with. |
| DisplayOrder | Integer | Display order. |
| AdditionalPartyType | Enum.AdditionalPartyType | Type of the additional party.<br><br>* 0 - Trustee<br>* 1 - Beneficiary<br>* 2 - Grantor<br>* 3 - NonBorrowerOnTitle<br>* 4 - AdditionalSeller |
| FirstName | String(50) | First name of the person this party is assigned to. |
| MiddleName | String(50) | Middle name of the person this party is assigned to. |
| LastName | String(50) | Last name of the person this party is assigned to. |
| Generation | String(10) | Name suffix of the person this party is assigned to. |
| IsNonPersonEntity | Boolean | Set if the party is a non-person entity. |
| NonPersonEntityName | String(100) | Name of the non-person entity the party is assigned to. |
| POAFirstName | String(50) | First name of the POA the party is assigned to. |
| POAMiddleName | String(50) | Middle name of the POA the party is assigned to. |
| POALastName | String(50) | Last name of the POA the party is assigned to. |
| POAGeneration | String(10) | Name suffix of the POA the party is assigned to. |
| POASigningCapacity | String(100) | Signing capacity of the POA assigned to this party. |
| NonPersonEntitySigner | String(100) | Name of non-person entity signer. |
| CreditAliases | String(500) | AKAs for non borrowers on title. |
| TrustNo | Enum.TrustNo | Indicates whether this is the first or second trust.<br><br>* 0 - First<br>* 1 - Second |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |
| Street | string(50) | Street |
| City | string(50) | City |
| State | string(2) | State |
| Zip | string(9) | Zip |
| SSN | String(50) | SSN for a non-person on title party. |
| DOB | NullableDate | Date of birth for a non-person on title party. |
| WorkPhone | String(20) | Work phone number for a non-person on title party. |
| HomePhone | String(50) | Home phone number for a non-person on title party. |
| MobilePhone | String(20) | Mobilek phone number for a non-person on title party. |
| Fax | String(50) | Fax number for a non-person on title party. |
| Email | String(50) | Email address for a non-person on title party. |
| MobilePhoneSMSGateway | String(40) | SMS gateway for sending text messages to the mobile phone. |
| PrintSigLineOnClosingDisclosureOV | Enum.YesNoNA | Override value that indicates whether the signature line prints on the Closing Disclosure for a Non-Borrower on Title.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| CDSignatureMethod | Enum.CDSignatureMethod | CD Signature Method<br><br>* 0 - NotAssigned<br>* 1 - NoSignatureLine<br>* 2 - Wet<br>* 3 - Digital<br>* 4 - Image<br>* 5 - Text<br>* 6 - Other |
| CDSignatureMethodOtherDesc | String(35) | CD Signature Method other description |

### [](#TOP)ClosingProration

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ClosingProrationID | Integer | Primary key |
| FileDataID | Integer | Foreign key |
| DisplayOrder | Integer | The order in which items appear on the list |
| Section | Enum.TRIDSummariesOfTransactionSection | The section of the summaries of transaction that the item belongs to<br><br>* 0 - DueFromBor<br>* 1 - DueToSeller<br>* 2 - PaidByOrOnBehalfOfBor<br>* 3 - DueFromSeller |
| ItemType | Enum.ProrationItemEnum | Identifies the type of proration item (city tax, county tax, etc)<br><br>* 0 - NotAssigned<br>* 1 - BoroughPropertyTax<br>* 2 - CityPropertyTax<br>* 3 - CondominiumAssociationDues<br>* 4 - CondominiumAssociationSpecialAssessment<br>* 5 - CooperativeAssociationDues<br>* 6 - CooperativeAssociationSpecialAssessment<br>* 7 - CountyPropertyTax<br>* 8 - DistrictPropertyTax<br>* 9 - EarthquakeInsurancePremium<br>* 10 - FloodInsurancePremium<br>* 11 - GroundRent<br>* 12 - HailInsurancePremium<br>* 13 - HazardInsurancePremium<br>* 14 - HomeownersAssociationDues<br>* 15 - HomeownersAssociationSpecialAssessment<br>* 16 - HomeownersInsurancePremium<br>* 17 - InterestOnLoanAssumption<br>* 18 - MortgageInsurancePremium<br>* 19 - Other<br>* 20 - PastDuePropertyTax<br>* 21 - RentFromSubjectProperty<br>* 22 - StatePropertyTax<br>* 23 - TownPropertyTax<br>* 24 - Utilities<br>* 25 - VolcanoInsurancePremium<br>* 26 - WindAndStormInsurancePremium |
| DescriptionOV | String(50) | Override value for the description of the item as printed on the closing disclosure |
| POC | Boolean | Indicates if the amount is paid outside of closing |
| Amount | NullableCurrency | The amount of the proration item |
| PaidFromDate | NullableDate | The date from which the proration starts |
| PaidToDate | NullableDate | The date through which the proration applies |
| LineNumber | NullableInteger | The line number of the item as displayed on the closing disclosure |

### [](#TOP)ClosingAdjustment

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ClosingAdjustmentID | Integer | Primary key |
| FileDataID | Integer | Foreign key |
| DisplayOrder | Integer | The order in which items appear on the list |
| Section | Enum.TRIDSummariesOfTransactionSection | The section of the summaries of transaction that the item belongs to<br><br>* 0 - DueFromBor<br>* 1 - DueToSeller<br>* 2 - PaidByOrOnBehalfOfBor<br>* 3 - DueFromSeller |
| ItemType | Enum.ClosingAdjustmentItemEnum | Identifies the type of closing adjustment (gift funds, tenant security deposit, etc.)<br><br>* 0 - NotAssigned<br>* 1 - FuelCosts<br>* 2 - Gift<br>* 3 - Grant<br>* 5 - Other<br>* 6 - ProceedsOfSubordinateLiens<br>* 7 - RebateCredit<br>* 8 - RelocationFunds<br>* 9 - RentFromSubjectProperty<br>* 10 - RepairCompletionEscrowHoldback<br>* 11 - Repairs<br>* 12 - SatisfactionOfSubordinateLien<br>* 14 - SellersEscrowAssumption<br>* 15 - SellersMortgageInsuranceAssumption<br>* 16 - Services<br>* 18 - SweatEquity<br>* 19 - TenantSecurityDeposit<br>* 20 - TradeEquity<br>* 21 - UnpaidUtilityEscrowHoldback<br>* 22 - PayoffOfDelinquentTaxes<br>* 23 - PayoffOfHELOC<br>* 24 - PayoffOfTaxes<br>* 25 - PayoffOfTaxLien<br>* 26 - PayoffOfThirdPositionMortgageLien<br>* 27 - PayoffOfCollectionsJudgmentsAndLiens<br>* 28 - PayoffOfDeferredStudentLoan<br>* 29 - PayoffOfGarnishments<br>* 30 - PayoffOfInstallment<br>* 31 - PayoffOfOpen30DayChargeAccount<br>* 32 - PayoffOfPersonalLoan<br>* 33 - PayoffOfRevolving<br>* 34 - PayoffOfUnsecuredHomeImprovementLoan<br>* 35 - PayoffOfOtherLiability<br>* 36 - AlterationsImprovementsAndRepairs<br>* 37 - PrincipalReduction<br>* 38 - PrincipalReductionToSatisfyCure |
| DescriptionOV | String(50) | Override value for the description of the item as printed on the closing disclosure |
| POC | Boolean | Indicates whether the item is paid outside of closing |
| Amount | NullableCurrency | The dollar amount of the closing adjustment |
| PaidByName | String(100) | The name of the individual or organization paying the item |
| PaidByType | Enum.ClosingAdjustmentItemPaidByEnum(100) | The type of entity paying the item<br><br>* 0 - NotAssigned<br>* 1 - Broker<br>* 2 - Buyer<br>* 3 - Correspondent<br>* 4 - Lender<br>* 5 - Seller<br>* 6 - ThirdParty |
| PaidByNonPersonEntity | Boolean | Indicates if the entity paying the item is a non-person entity |
| SubSection | Enum.ClosingAdjustmentItemSubSection | Identifies the desired subsection for the closing adjustment<br><br>* 0 - Adjustments<br>* 1 - OtherFinancing<br>* 2 - OtherCredits |
| PrincipalAmountOfLoan | NullableCurrency | The principal amount of any simultaneous financing |
| LineNumber | NullableInteger | The line number of the item as displayed on the closing disclosure |

### [](#TOP)ClosingPayoff

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ClosingPayoffID | Integer | Primary key |
| FileDataID | Integer | Foreign key to file table |
| DisplayOrder | Integer | Identifies the order in which items in the table are displayed |
| LiabilityType | Enum.ClosingPayoffLiabilityType | The type of liability being paid off<br><br>* 0 - NotAssigned<br>* 1 - CollectionsJudgmentsAndLiens<br>* 2 - DeferredStudentLoan<br>* 3 - DelinquentTaxes<br>* 4 - FirstPositionMortgageLien<br>* 5 - Garnishments<br>* 6 - HELOC<br>* 7 - Installment<br>* 8 - Open30DayChargeAccount<br>* 9 - Other<br>* 10 - PersonalLoan<br>* 11 - Revolving<br>* 12 - SecondPositionMortgageLien<br>* 13 - Taxes<br>* 14 - TaxLien<br>* 15 - ThirdPositionMortgageLien<br>* 16 - UnsecuredHomeImprovementLoanInstallment<br>* 17 - UnsecuredHomeImprovementLoanRevolving<br>* 18 - MortgageLoan |
| LiabilityTypeOtherDesc | String(50) | A description of the liability type when the liability type is Other |
| DescriptionOV | String(100) | A description of the liability as displayed on the closing disclosure |
| IsSecuredBySubProp | Enum.YesNoNA | Indicates whether the liability is secured by the subject property. Only applicable for certain liability types.<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| HeldByName | String(100) | The name of the entity that the liability is held by. In the case of a credit this field contains the name of the entity that the credit is paid to. |
| PayoffAmount | NullableCurrency | The dollar amount of the payoff. In the case of a credit this amount is the amount of the credit expressed as a negative number. |
| PrepaymentPenaltyAmount | NullableCurrency | The amount of any prepayment penalty |
| ClosingPayoffType | Enum.ClosingPayoffType | Indicates whether the item is a payoff of a credit<br><br>* 0 - Payoff<br>* 1 - Credit |
| ClosingAdjustmentItemEnum | Enum.ClosingAdjustmentItemEnum | The type of adjustment when the payoff type is Credit<br><br>* 0 - NotAssigned<br>* 1 - FuelCosts<br>* 2 - Gift<br>* 3 - Grant<br>* 5 - Other<br>* 6 - ProceedsOfSubordinateLiens<br>* 7 - RebateCredit<br>* 8 - RelocationFunds<br>* 9 - RentFromSubjectProperty<br>* 10 - RepairCompletionEscrowHoldback<br>* 11 - Repairs<br>* 12 - SatisfactionOfSubordinateLien<br>* 14 - SellersEscrowAssumption<br>* 15 - SellersMortgageInsuranceAssumption<br>* 16 - Services<br>* 18 - SweatEquity<br>* 19 - TenantSecurityDeposit<br>* 20 - TradeEquity<br>* 21 - UnpaidUtilityEscrowHoldback<br>* 22 - PayoffOfDelinquentTaxes<br>* 23 - PayoffOfHELOC<br>* 24 - PayoffOfTaxes<br>* 25 - PayoffOfTaxLien<br>* 26 - PayoffOfThirdPositionMortgageLien<br>* 27 - PayoffOfCollectionsJudgmentsAndLiens<br>* 28 - PayoffOfDeferredStudentLoan<br>* 29 - PayoffOfGarnishments<br>* 30 - PayoffOfInstallment<br>* 31 - PayoffOfOpen30DayChargeAccount<br>* 32 - PayoffOfPersonalLoan<br>* 33 - PayoffOfRevolving<br>* 34 - PayoffOfUnsecuredHomeImprovementLoan<br>* 35 - PayoffOfOtherLiability<br>* 36 - AlterationsImprovementsAndRepairs<br>* 37 - PrincipalReduction<br>* 38 - PrincipalReductionToSatisfyCure |
| PaidBy | String(100) | The name of the entity that is paying the credit when the payoff type is Credit. |
| PaidByNonPersonEntity | Boolean | Indicates that the entity paying the credit is a non-person entity |
| IncludePPPInPointsAndFees | Boolean | If true then the prepayment penalty amount is included in the points and fees for QM and HCM tests.&lt;BR&gt;Default=False |
| POC | Boolean | Indicates that the item is paid outside of closing |
| PrincipalAmountOfLoan | NullableCurrency | The principal amount of any simultaneous financing |

### [](#TOP)DisclosureLogEntry

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| DisclosureLogEntryID | Integer | Primary key |
| FileDataID | Integer | Foreign key to the FileData table |
| Form | Enum.TRIDForm | Indicates which form was disclosed (Loan Estimate or Closing Disclosure)<br><br>* 0 - LoanEstimate<br>* 1 - ClosingDisclosure |
| DeliveryDate | NullableDate | The delivery date of the disclosures. This field is used to calculate the disclosure timing requirements. |
| DeliveryDateAndTime | NullableDateTime | The date and time the documents were delivered to the borrower. This field is used to determine which Loan Estimate is the most recent. |
| DeliveryMethod | Enum.GFEDeliveryMethod | The method used to delivery the disclosures<br><br>* 0 - NotAssigned<br>* 1 - InPerson<br>* 2 - Mailed<br>* 3 - EMailed<br>* 4 - Faxed<br>* 5 - ESigned<br>* 6 - EDelivered |
| ReceivedDate | NullableDate | The date the disclosures were received by the borrowers |
| APR | NullableCurrency | The APR at the time of the disclosure |
| Product | String(80) | The product name as it appears on page 1 of the Loan Estimate or Closing Disclosure |
| HasPrepaymentPenalty | Enum.YesNoNA | Indicates if the loan had a prepayment penalty at the time of disclosure<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| FinanceCharge | NullableCurrency | The finance charge at the time of the disclosure |
| PurPrice | NullableCurrency | The purchase price at the time of the disclosure |
| LoanAmount | NullableCurrency | The Loan Amount at the time of the disclosure |
| IntRate | NullableCurrency | The interest rate at the time of the disclosure |
| TotalClosingCostsUnrounded | NullableCurrency | The amount of the unrounded closing costs at the time of disclosure |
| TotalClosingCostsRounded | NullableCurrency | The amount of the total closing costs as rounded and displayed on the loan estimate |
| ClosingCostsFinanced | NullableCurrency | The unrounded amount of the Closing Costs Financed at the time of the disclosure |
| FundsFromBor | NullableCurrency | The unrounded amount of the Funds from Borrower at the time of the disclosure |
| Deposit | NullableCurrency | The amount of the Deposit at the time of the disclosure |
| FundsForBor | NullableCurrency | The unrounded amount of the Funds for Borrower at the time of the disclosure |
| SellerCredits | NullableCurrency | The amount of the Seller Credits at the time of the disclosure |
| AdjustmentAndOtherCredits | NullableCurrency | The amount of Adjustments and Other Credits at the time of the disclosure |
| PayoffsAndPayments | NullableCurrency | The amount of the Payoffs and Payments at the time of the disclosure |
| LenderCredits | NullableCurrency | The amount of the Lender Credits at the time of the disclosure |
| AlternativeCashToCloseTableUsed | Boolean | Indicates if the disclosure was made using the alternative cash to close table. |
| TotalLoanCostsUnrounded | NullableCurrency | The amount of the Total Loan Costs that would have appeared on the Loan Estimate if the value was not rounded. |
| TotalOtherCostsUnrounded | NullableCurrency | The amount of the Total Other Costs that would have appeared on the Loan Estimate if the value was not rounded. |
| DisclosureRevisionType | Enum.DisclosureRevisionType | Identifies the type of revision<br><br>* 0 - NotAssigned<br>* 1 - Initial<br>* 2 - Revision<br>* 3 - RevisionWithNewWaitingPeriod |
| UserName | String(50) | The user name of the user that created the log entry. |
| ClosingCostsExpirationDate | NullableDate | The date that the closing costs expire as indicated on page 1 of the Loan Estimate |
| ClosingCostsExpirationTimeOfDay | String(20) | The time of day that the closing costs expire as indicated on page 1 of the Loan Estimate |
| LockExpirationDate | NullableDate | Lock Expiration Date |
| LockExpirationTimeOfDay | String(20) | Lock Expiration Time of Day |
| DocPackageID | NullableInteger | Identifies the document package associated with this disclosure log entry |
| ClosingCostsFinancedRounded | NullableCurrency | The rounded amount of the Closing Costs Financed at the time of the disclosure |
| OriginationCharges | NullableCurrency | The origination charges from section A of the Closing Cost Details |
| DiscountPoints | NullableCurrency | The discount points from line 01 of section A of the Closing Cost Details |
| IssuedDate | NullableDate | The date the LE or CD was issued. |
| FundsFromBorRounded | NullableCurrency | The rounded amount of the Funds from Borrower at the time of the disclosure |
| FundsForBorRounded | NullableCurrency | The rounded amount of the Funds for Borrower at the time of the disclosure |
| LoanProgramName | String(100) | Loan Program Name |
| LoanProgramCode | String(50) | Loan Program Code |
| Borrowers | String(2000) | A delimited list of borrower information (SSNs or names) that allow borrower additions or deletions to be identified. Also includes non-borrowers-on-title for CDs when the non-borrowers-on-title are included on the CD. |
| TotalOfPayments | NullableCurrency | Total of Payments. |
| LEDueDate | NullableDate | The date the LE is due. |

### [](#TOP)COCLogEntry

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| COCLogEntryID | Integer | Unique ID for this item. |
| FileDataID | Integer | The ID of the file this item is assocated with. |
| DisplayOrder | Integer | Determine the order these items are displayed in. |
| COCReasonName | String(200) | The change of circumstance reason name. |
| EntryDate | NullableDateTime | The date the CoC log entry was created. |
| UserName | String(50) | The user name of the user that created the CoC entry. |
| FeeDetails | String(32000) | The CoC fee details. |
| Notes | String(32000) | The CoC notes. |
| ChangeDate | NullableDate | The date the creditor received the information regarding the change of circumstance. |
| Category | Enum.COCReasonCategory | Identifies the type of change<br><br>* 0 - NotAssigned<br>* 1 - COCAffectingSettlementCharges<br>* 2 - COCAffectingEligibility<br>* 3 - ConsumerRequest<br>* 4 - RateLock<br>* 5 - ExpirationOfLE<br>* 6 - DelayedSettlementOnConstructionLoan<br>* 7 - NoReasonNeeded<br>* 8 - NotAValidCOC |
| COCReasonCode | String(50) | The Change of Circumstance Reason Code |
| DisclosureLogEntryID | NullableInteger | Foreign key to the disclosure log entry |

### [](#TOP)FeeLogEntry

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FeeLogEntryID | Integer | Primary Key |
| FileDataID | Integer | Foreign key to the FileData table |
| COCLogEntryID | NullableInteger | Foreign key to the COC log entry |
| LoanID | Integer | Foreign key to the loan associated with the log entry |
| FeeType | Enum.UpdatableFeeType | Identifies the type of fee (closing cost, prepaid premium, etc)<br><br>* 0 - None<br>* 1 - ClosingCost<br>* 2 - PrepaidPremium<br>* 3 - InterimInterest<br>* 4 - MIPFF<br>* 5 - EscrowDeposit<br>* 6 - YSP1<br>* 7 - YSP2<br>* 8 - NoCostLoanLenderCredit<br>* 9 - PrepaidReserves<br>* 10 - LenderCredit |
| HUDCCLineNo | Enum.HUDCCLineNo | Identifies the HUD Line Number for Closing Costs<br><br>* 0 - NotAssigned<br>* 801 - _801<br>* 802 - _802<br>* 803 - _803<br>* 804 - _804<br>* 805 - _805<br>* 806 - _806<br>* 807 - _807<br>* 808 - _808<br>* 809 - _809<br>* 810 - _810<br>* 811 - _811<br>* 812 - _812<br>* 813 - _813<br>* 814 - _814<br>* 815 - _815<br>* 816 - _816<br>* 817 - _817<br>* 818 - _818<br>* 819 - _819<br>* 820 - _820<br>* 821 - _821<br>* 822 - _822<br>* 823 - _823<br>* 824 - _824<br>* 825 - _825<br>* 826 - _826<br>* 827 - _827<br>* 828 - _828<br>* 829 - _829<br>* 830 - _830<br>* 831 - _831<br>* 832 - _832<br>* 833 - _833<br>* 834 - _834<br>* 835 - _835<br>* 836 - _836<br>* 837 - _837<br>* 838 - _838<br>* 839 - _839<br>* 840 - _840<br>* 841 - _841<br>* 842 - _842<br>* 843 - _843<br>* 844 - _844<br>* 845 - _845<br>* 846 - _846<br>* 847 - _847<br>* 848 - _848<br>* 849 - _849<br>* 850 - _850<br>* 851 - _851<br>* 852 - _852<br>* 853 - _853<br>* 854 - _854<br>* 855 - _855<br>* 856 - _856<br>* 857 - _857<br>* 858 - _858<br>* 859 - _859<br>* 860 - _860<br>* 861 - _861<br>* 862 - _862<br>* 863 - _863<br>* 864 - _864<br>* 865 - _865<br>* 866 - _866<br>* 867 - _867<br>* 868 - _868<br>* 869 - _869<br>* 870 - _870<br>* 871 - _871<br>* 872 - _872<br>* 873 - _873<br>* 874 - _874<br>* 875 - _875<br>* 876 - _876<br>* 877 - _877<br>* 878 - _878<br>* 879 - _879<br>* 880 - _880<br>* 881 - _881<br>* 882 - _882<br>* 883 - _883<br>* 884 - _884<br>* 885 - _885<br>* 886 - _886<br>* 887 - _887<br>* 888 - _888<br>* 889 - _889<br>* 890 - _890<br>* 1101 - _1101<br>* 1102 - _1102<br>* 1103 - _1103<br>* 1104 - _1104<br>* 1105 - _1105<br>* 1106 - _1106<br>* 1107 - _1107<br>* 1108 - _1108<br>* 1109 - _1109<br>* 1110 - _1110<br>* 1111 - _1111<br>* 1112 - _1112<br>* 1113 - _1113<br>* 1114 - _1114<br>* 1115 - _1115<br>* 1116 - _1116<br>* 1117 - _1117<br>* 1118 - _1118<br>* 1119 - _1119<br>* 1120 - _1120<br>* 1121 - _1121<br>* 1122 - _1122<br>* 1123 - _1123<br>* 1124 - _1124<br>* 1125 - _1125<br>* 1126 - _1126<br>* 1127 - _1127<br>* 1128 - _1128<br>* 1129 - _1129<br>* 1130 - _1130<br>* 1131 - _1131<br>* 1132 - _1132<br>* 1133 - _1133<br>* 1134 - _1134<br>* 1135 - _1135<br>* 1201 - _1201<br>* 1202 - _1202<br>* 1203 - _1203<br>* 1204 - _1204<br>* 1205 - _1205<br>* 1206 - _1206<br>* 1207 - _1207<br>* 1208 - _1208<br>* 1209 - _1209<br>* 1210 - _1210<br>* 1211 - _1211<br>* 1212 - _1212<br>* 1213 - _1213<br>* 1214 - _1214<br>* 1215 - _1215<br>* 1301 - _1301<br>* 1302 - _1302<br>* 1303 - _1303<br>* 1304 - _1304<br>* 1305 - _1305<br>* 1306 - _1306<br>* 1307 - _1307<br>* 1308 - _1308<br>* 1309 - _1309<br>* 1310 - _1310<br>* 1311 - _1311<br>* 1312 - _1312<br>* 1313 - _1313<br>* 1314 - _1314<br>* 1315 - _1315<br>* 1316 - _1316<br>* 1317 - _1317<br>* 1318 - _1318<br>* 1319 - _1319<br>* 1320 - _1320<br>* 1321 - _1321<br>* 1322 - _1322<br>* 1323 - _1323<br>* 1324 - _1324<br>* 1325 - _1325<br>* 1326 - _1326<br>* 1327 - _1327<br>* 1328 - _1328<br>* 1329 - _1329<br>* 1330 - _1330<br>* 1331 - _1331<br>* 1332 - _1332<br>* 1333 - _1333<br>* 1334 - _1334<br>* 1335 - _1335 |
| PrepaidItemType | Enum.PrepaidItemType | Identifies the type of prepaid item for prepaid premiums and prepaid reserves<br><br>* 1 - HazardInsurance<br>* 2 - MortgageInsurance<br>* 3 - Line1003<br>* 4 - PropertyTaxes<br>* 5 - HOD<br>* 6 - FloodInsurance<br>* 7 - Line1007 |
| Points | NullableCurrency | The points percent amount |
| BorrowerAmount | NullableCurrency | The amount paid by the borrower |
| SellerAmount | NullableCurrency | The amount paid by the seller or lender |
| POC | Boolean | Indicates whether the fee is paid outside of closing |
| BorrowerPOCAmountOV | NullableCurrency | Override value for the amount paid by the borrower outside of closing |
| SellerPOCAmountOV | NullableCurrency | Override value for the amount paid by the seller or lender outside of closing |
| PaidByOtherType | Enum.PaidByOtherType | Indicates whether amounts paid by others are paid by the seller or lender<br><br>* 0 - Seller<br>* 1 - Lender<br>* 2 - ThirdParty<br>* 3 - Builder<br>* 4 - Employer<br>* 5 - FederalAgency<br>* 6 - LocalAgency<br>* 7 - NonParentRelative<br>* 8 - Parent<br>* 9 - RealEstateAgent<br>* 10 - StateAgency<br>* 11 - UnrelatedFriend |
| PeriodicPaymentAmount | NullableCurrency | The monthly payment for prepaids or the daily interest for interim interest |
| CountOfPeriods | NullableInteger | The number of months paid for prepaids or the number of days of daily interest for interim interest |
| ResponsiblePartyType | Enum.ResponsiblePartyType | Identifies the responsible party<br><br>* 0 - Buyer<br>* 1 - Seller |
| FeeLogEntryType | Enum.FeeLogEntryType | The type of log entry<br><br>* 0 - InitialLE<br>* 1 - COC |
| FinancedAmount | NullableCurrency | Financed amount. Used only for upfront MIP / funding fee. |
| LumpSumAmount | NullableCurrency | Lump sum amount. Applicable for lender credits only. |
| ItemizedAmount | NullableCurrency | Itemized amount. Applicable for lender credits only. |

### [](#TOP)FieldHistoryEntry

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FieldHistoryEntryID | Integer | Primary Key |
| FileDataID | Integer | Foreign key |
| FieldHistoryEntryType | Enum.FieldHistoryEntryType | Identifies the type of log entry - initial value vs modified value<br><br>* 0 - InitialLogEntry<br>* 1 - ValueModified |
| DateModified | DateTime | The date and time that the field was modified |
| DecimalValue | NullableCurrency | The field value |
| FieldHistoryFieldType | Enum.FieldHistoryFieldType | Identifies the field being stored<br><br>* 0 - NoteLoanAmount |

### [](#TOP)DocSigner

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| DocSignerID | Integer | Primary key |
| FileDataID | Integer | Foreign key |
| DocPackageID | Integer | Foreign key |
| BorrowerID | NullableInteger | Identifies the borrower |
| FullName | String(150) | The borrower's full name as it appears on the document |
| EMail | String(100) | The signer's email address |
| ConsentedDateTime | NullableDateTime | The date and time the borrower consented to have the package delivered electronically |
| SignedDateTime | NullableDateTime | The date and time the signer signed the package |
| HardCopyMailedDateTime | NullableDateTime | The date and time that physical documents were mailed to the signer |
| VendorSignerID | String(50) | An ID that identifies the signer with the e-sign vendor |
| ConsentRevokedDateTime | NullableDateTime | The date and time the borrower revoked consent to receive documents electronically. |
| HardCopyReceivedDate | NullableDate | The date and time that the borrower received the hard-copy documents as demonstrated by evidence. |
| PartyType | Enum.DocSignerPartyType | The type of signer - borrower, non-borrower on title, or loan officer.<br><br>* 0 - None<br>* 1 - Borrower<br>* 2 - NonBorrowerOnTitle<br>* 3 - LoanOfficer |
| AdditionalPartyID | NullableInteger | Identifies the non-borrower on title |
| ConsentPreviouslyObtained | Boolean | Indicates whether consent to receive electronic disclosures was previously obtained. |
| IsLockedOut | Boolean | Indicates whether the signer is locked out due to too many failed authentication attempts |
| InvitationEmailBounced | Boolean | Indicates whether the invitation email sent to the signer bounced due to a delivery failure. |

### [](#TOP)ServiceOrder

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ServiceOrderID | Integer | Unique ID for these items. |
| FileDataID | Integer | The ID of the loan file this item is associated with. |
| VendorType | Enum.ServiceOrderVendorType | Type of service vendor.<br><br>* 0 - NotAssigned<br>* 1 - Formfree<br>* 2 - Placeholder<br>* 3 - DataVerifySSA89<br>* 4 - DataVerify<br>* 5 - CoreLogic<br>* 6 - AdvancedData<br>* 7 - Avantus<br>* 8 - BankVOD<br>* 9 - Blend<br>* 10 - Chronos<br>* 11 - Partners<br>* 12 - Finicity<br>* 13 - FinLocker<br>* 14 - FirstAmerican<br>* 15 - Informative<br>* 16 - MeridianLink<br>* 17 - NCS<br>* 18 - Plaid<br>* 19 - PointServ<br>* 20 - PrivateEyes<br>* 21 - QuestSoft<br>* 22 - SharperLending<br>* 23 - Universal<br>* 24 - VeriTax<br>* 25 - BlendLabs<br>* 26 - EWS<br>* 27 - FannieMaeQA<br>* 28 - Sharper<br>* 29 - Yodlee<br>* 30 - CreditPlus<br>* 31 - AdvantageCredit<br>* 32 - BlendIncome<br>* 33 - Covius<br>* 34 - Truework<br>* 35 - Experian<br>* 36 - Argyle<br>* 100 - FF<br>* 101 - BLND<br>* 102 - FNCY<br>* 103 - EFX<br>* 104 - LNBM<br>* 105 - PLAD<br>* 106 - YODL<br>* 107 - PSRV<br>* 108 - CRLC<br>* 109 - LCFT<br>* 110 - BLNI<br>* 111 - EXPN<br>* 112 - HLCN<br>* 113 - ACIR<br>* 114 - TRUV<br>* 9999 - Other |
| VendorTypeOtherName | String(35) | Name of vendor when type is 'Other'. |
| ReferenceNumber | String(50) | Reference number of item as supplied to Fannie Mae. This may be different than the order number. |
| BorrowerID | NullableInteger | Foreign key to the borrower table |
| OrderNumber | String(50) | The order number as supplied by the vendor. |
| VerificationType | Enum.ServiceOrderVerificationType | Verification type for Freddie service orders.<br><br>* 0 - Asset<br>* 1 - Income<br>* 110 - TaxTranscript |

### [](#TOP)FileIdentifier

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| FileIdentifierID | Integer | Primary key |
| FileDataID | Integer | Foreign key |
| FileIdentifierType | Enum.FileIdentifierType | The entity this file identifier is associated with.<br><br>* 0 - NotAssigned |
| Value | String(50) | The file identifier for this entity. |

### [](#TOP)Expense

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| ExpenseID | Integer | Unique id for this item |
| FileDataID | Integer | Loan file ID |
| BorrowerID | Integer | Borrower ID |
| ExpenseType | Enum.ExpenseType | Type of expense.<br><br>* 0 - NotAssigned<br>* 1 - Alimony<br>* 2 - ChildSupport<br>* 3 - SeparateMaintenance<br>* 4 - JobRelatedExpenses<br>* 5 - Other |
| OtherDesc | String(80) | Other expense description. |
| MoPayment | NullableCurrency | Monthly payment amount. |
| PaymentsLeft | NullableInteger | Number of payments left. |
| QMATRNotes | String(500) | QM ATR Notes for the expense. |
| Notes | String(500) | General notes for the expense. |
| AccountHeldByType | Enum.AccountHeldByType | Indicates if the account is held solely by the indicated borrower or jointly by both borrowers on the application<br><br>* 0 - NotAssigned<br>* 1 - Jointly<br>* 2 - Individually |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |

### [](#TOP)Gift

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| GiftID | Integer | Unique id for this item |
| FileDataID | Integer | Loan file ID |
| BorrowerID | Integer | Borrower ID |
| AssetType | Enum.GiftAssetType | Asset type of gift or grant<br><br>* 0 - NotAssigned<br>* 1 - GiftOfCash<br>* 2 - GiftOfPropertyEquity<br>* 3 - Grant |
| GiftAmount | NullableCurrency | Amount of gift or grant |
| DepositedStatus | Enum.GiftDepositedStatus | Indicates the gift is included in the value of an asset account being reported by borrower<br><br>* 0 - NotAssigned<br>* 1 - Deposited<br>* 2 - NotDeposited |
| Source | Enum.GiftSource | The party providing the gift or grant<br><br>* 0 - NotAssigned<br>* 1 - CommunityNonProfit<br>* 2 - Employer<br>* 3 - FederalAgency<br>* 4 - LocalAgency<br>* 5 - NonParentRelative<br>* 6 - Other<br>* 7 - Parent<br>* 8 - Relative<br>* 9 - ReligiousNonProfit<br>* 10 - StateAgency<br>* 11 - UnmarriedPartner<br>* 12 - UnrelatedFriend<br>* 13 - Lender |
| DonorRelationshipToBorrowerDesc | String(50) | The description of relationship of the doner to the borrower (e.g. Mother, Father, etc.) |
| DonorName1 | String(50) | The name of the person or entity providing the gift |
| DonorName2 | String(50) | The name of a second person or entity providing the gift |
| DonorStreet | String(50) | Street of the gift donor |
| DonorCity | String(50) | City of the gift donor |
| DonorState | string(2) | State of the gift donor |
| DonorZip | string(9) | Zip code of the gift donor |
| DonorPhone | string(20) | Phone number of the gift donor |
| DonorAccountInstitution | String(50) | The institution at which the donors gift funds are deposited |
| DonorInstitutionAddress | String(100) | The address of the institution at which the donors gift funds are deposited |
| DonorAccountNo | String(30) | The account number of the donors account |
| FundsProvidedAtClosing | Enum.YesNoNA | Indicates whether or not the funds will be provided at closing<br><br>* 0 - NotAssigned<br>* 1 - Yes<br>* 2 - No |
| TransferDate | NullableDate | The date that the funds were transfered to the borrower |
| SourceOtherDesc | String(80) | Description of the gift source when Other is selected |
| AccountHeldByType | Enum.AccountHeldByType | Indicates if the gift or grant is held solely by the indicated borrower or jointly by both borrowers on the application<br><br>* 0 - NotAssigned<br>* 1 - Jointly<br>* 2 - Individually |
| SyncGuid | GUID | Value used for synchronization&lt;BR&gt;Default=GUID.Empty |

### [](#TOP)PurchaseCredit

|     |     |     |
| --- | --- | --- |
| **Field Name** | **Data Type** | **Comment** |
| PurchaseCreditID | Integer | Primary Key |
| FileDataID | Integer | Loan file ID |
| DisplayOrder | Integer | Display order |
| PurchaseCreditType | Enum.PurchaseCreditType | Purchase credit type<br><br>* 0 - NotAssigned<br>* 1 - EmployerAssistedHousing<br>* 2 - LeasePurchaseFund<br>* 3 - Other<br>* 4 - Rebate<br>* 5 - RelocationFunds<br>* 6 - SweatEquity<br>* 7 - TradeEquityFromPropertySwap<br>* 8 - LotEquity<br>* 9 - ClosingCosts |
| Source | Enum.PurchaseCreditSource | Purchase credit source<br><br>* 0 - NotAssigned<br>* 1 - BorrowerPaidOutsideClosing<br>* 2 - BuilderDeveloper<br>* 3 - Employer<br>* 4 - FederalAgency<br>* 5 - Lender<br>* 6 - LocalAgency<br>* 7 - NonParentRelative<br>* 8 - Other<br>* 9 - Parent<br>* 10 - PropertySeller<br>* 11 - RealEstateAgent<br>* 12 - StateAgency<br>* 13 - UnrelatedFriend<br>* 14 - EmployerAffiliate<br>* 15 - LenderAffiliate<br>* 16 - OtherInterestedParty |
| Amount | NullableCurrency | Amount of credit |
| DescriptionOV | String(50) | Override value for the description of the purchase credit |
| OmitFromOtherAssets | Boolean | Indicates whether the item should be excluded from the Other Assets section of the URLA. |