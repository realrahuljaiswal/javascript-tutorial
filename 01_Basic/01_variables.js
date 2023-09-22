const accountId = 7448
let accountEmail = 'rahulkumar@gmail.com'
var accountPassword = '1234567890'
accountCity = 'Lucknow'
let accountState;

//accountId = 7 not allowed because its constant
accountEmail = 'realrahuljaiswal@gmail.com'
accountPassword = "0987654321"
accountCity = 'sonebhadra'
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/*
Prefer not to use var
because issue of block scope and functional scope
*/
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

