// Question 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a 
// website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var account_names = ["John", "Ali", "Admin", "Michael", "Eric"];
for (var _i = 0, account_names_1 = account_names; _i < account_names_1.length; _i++) {
    var account = account_names_1[_i];
    if (account == "Admin") {
        console.log("Hello Admin, would you like to view the report?");
    }
    else {
        console.log("Hello ".concat(account, ", how are you doing today?"));
    }
}
