const account_id = 13343
let account_email = "itsmeishan14@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu"//we can also decalare by these way also varibale
 let accountState;
// account_id = 2
/*
Prefer not to use var 
because of issue in blcok scope and functional scope
*/
account_email="abc@gmail.com"
accountPassword="3343"
// console.log(account_id);//not allowed in constant
console.log(account_id);
console.log(account_email);
console.log(accountPassword);
console.table([accountPassword,account_email,accountCity,accountState])