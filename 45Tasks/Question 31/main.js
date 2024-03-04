// Question 31: No Users: Add an if test to Exercise 28 to make sure the list of 
// users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var account_names = ["John", "Ali", "Admin", "Michael", "Eric"];
if (account_names.length > 0) {
    for (var _i = 0, account_names_1 = account_names; _i < account_names_1.length; _i++) {
        var account = account_names_1[_i];
        if (account == "Admin") {
            console.log("Hello Admin, would you like to view the report?");
        }
        else {
            console.log("Hello ".concat(account, ", how are you doing today?"));
        }
    }
}
else {
    console.log("We need to find some users!");
}
account_names = [];
if (account_names.length > 0) {
    for (var _a = 0, account_names_2 = account_names; _a < account_names_2.length; _a++) {
        var account = account_names_2[_a];
        if (account == "Admin") {
            console.log("Hello Admin, would you like to view the report?");
        }
        else {
            console.log("Hello ".concat(account, ", how are you doing today?"));
        }
    }
}
else {
    console.log("We need to find some users!");
}
