// Question 12: Greetings: Start with the array you used in Exercise 11, but instead of just 
// printing each person’s name, print a message to them. The text of each message should 
// be the same, but each message should be personalized with the person’s name.
var names = ["Ali", "John", "Ayan", "Ammar"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log("Hello ".concat(n, ", have a great day!"));
}
