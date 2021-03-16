class BankAccount{
    constructor(name, bank_account_number, account_balance, account_type, ifsc){
        this.name = name
        this.bank_account_number = bank_account_number
        this.account_balance =  account_balance
        this.account_type = account_type
        this.ifsc = ifsc
    }

    getdetails(){
        return `Name: ${this.name}\n
                Account Balance: ${this.account_balance}`
    }

    getavgBalance(){
        return `Name: ${this.name}\n
                MAB: ${this.account_balance.reduce((sum,item)=>sum+item)/this.account_balance.length}`
    }
}

const BankAccount1 = new BankAccount('Nikhil Prasad', 112345, [1300, 22000, 5600], 'Salary', 'HDFC0234')

console.log(BankAccount1.getdetails())
console.log(BankAccount1.getavgBalance())