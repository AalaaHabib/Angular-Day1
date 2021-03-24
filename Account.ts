export  abstract class Account {
    account_no: number;
    blance: number;
    
    constructor(account_no: number,blance:number) {
        this.account_no = account_no;
        this.blance=blance;
    }

    abstract debitAmount(number): number;
    abstract creaditAmount(number): number;
    abstract getBlance(): number;
}

