// Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
var guestList = ["Luffy", "Eren", "Goku"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hey ".concat(guest, ", I would be delighted if you attend the grand dinner party at my house on 25th of February at 9:00PM."));
}
console.log("\nHey everyone, I found a bigger dining table so I will be inviting more people.\n");
guestList.unshift("Kaneki");
var index = Math.floor(guestList.length / 2);
guestList.splice(index, 0, "Ichigo");
guestList.push("Natsu");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Salam ".concat(guest, ", Please be sure to attend the dinner party at my home tomorrow."));
}
var numberOfGuests = guestList.length;
console.log("\nWe are inviting a total of ".concat(numberOfGuests, " guests"));
