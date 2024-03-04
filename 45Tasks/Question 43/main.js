// Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the 
// function make_great() with a copy of the array of magicians’ names. Because the original 
// array will be unchanged, return the new array and store it in a separate array. Call 
// show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_names = ["Harry Houdini", "David Copperfield", "Doug Henning", "Derren Brown"];
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var copyMagicians = __spreadArray([], magician_names, true);
var greatMagicians = make_great(copyMagicians);
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);