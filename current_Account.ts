import {Account}  from './Account';
import {IAccount} from './IAccount'; 

 class Current_Account extends Account implements IAccount{
    constructor(public  account_no:number,public blance:number,public data_of_oppening:Date){
        super(account_no,blance);
    }
     debitAmount(number){
       return this.blance -number ;
    }
    creaditAmount(number){
        return this.blance + number;
    }
    getBlance(){
        return this.blance;
    }
    addCustomer(num){
        return "customer added ";
    }
    removeCustomer(num){
        return "customer deleted";
    }
}