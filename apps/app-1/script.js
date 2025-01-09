// Banking system

//database
const accounts = []

//create account
function creatAccount(name, initialDeposit) {
    if(initialDeposit < 0) {
        console.log("Initial Deposit must be postive");
        return ;
    }

    const account = {
        id: accounts.length + 1,
        name:name,
        balance:initialDeposit
    }

    accounts.push(account);
    console.log(`Account created successfully for ${name} the balance is : ${initialDeposit}`);
}

// deposit
function deposit(accountId, amount){
    //get id from database
    const account = accounts.find(acc => acc.id === accountId)
    if(!account) {
        console.log("Account not found");
        return ;
    }

    if(amount <= 0){
        console.log("Amount must be postive");
        return ;
    }

    account.balance += amount // balance = balance + amount
    console.log(`Deposit is success :${amount} the new balance is :${account.balance}`); 
}

//withdraw

function withdraw(accountId, amount){
    const account = accounts.find(acc => acc.id === accountId)

    if(!account){
        console.log("Account not find");
        return;
    }

    if(amount <= 0){
        console.log("amount must be postive");
        return;
    }

    if(amount > account.balance){
        console.log("Insufficient balnace");
        return;
    }

    account.balance -= amount // balance = balance - amount
    console.log(`Withdraw is ${amount} and new balance is ${account.balance}`);
}

function checkBalance(accountId){
    const account = accounts.find(acc => acc.id === accountId)

    if(!account){
        console.log("account not found");
        return;
    }

    console.log(`Name is ${account.name} and balance is ${account.balance}`);
}

//view accounts

function viewAccounts() {
    if (accounts.length === 0){
        console.log("Not accounts");
        return;
    }

    console.log("All Accounts:");
    accounts.forEach(account => {
        console.log(`The Id is ${account.id} account name is ${account.name} the balance is ${account.balance}`);
    })
}


creatAccount("Amin Amgad", 1000)
deposit(1, 500)
withdraw(1, 600)
checkBalance(1)
deposit(1, 750)
checkBalance(1)


creatAccount("Karim Fathy", 900)
deposit(2, 3098)
withdraw(2, 678)
checkBalance(2)
deposit(2, 5667)
checkBalance(2)
viewAccounts()
