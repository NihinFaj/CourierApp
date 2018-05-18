export class TransactionHistory {
    constructor (
        public postingTellerId: string,
        public transDate: string,
        public transSeq1: string,
        public origtTransSeq1: string,
        public reference: string,
        public narration: string,
        public valueDate: string,
        public amountDebit: string,
        public amountCredit: string,
        public channel: string,
        public explCode: string,
        public origtBraCode: string) {}
}

export class UserResponseModel {
    constructor (
        public StatusCode: number,
        // public Message: TransactionHistory[],
        public Message: string,
        public Error: string,
        public AuthToken: string) {}
}