import {Account} from "./Account";
class Current_Account extends Account {

    debitAmount(number){
       return this.blance -number ;
    }
    creaditAmount(number){
        return this.blance + number;
    }
    getBlance(){
        return this.blance;
    }
    minBlance(){
        return this.blance /4;
    }
  
}

let acc = new Current_Account(1,8230485235);
let creadit = acc.creaditAmount(2000);
let debit   = acc.debitAmount(200);
let blance  = acc.getBlance();

