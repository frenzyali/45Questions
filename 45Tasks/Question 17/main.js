// Question 17: Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.
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
console.log("\nI am really sorry and embarassed to say that the dining table broke and I can only invite two people now.\n");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("I am sorry that I won't be able to invite ".concat(removedGuest, " to the dinner."));
}
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var n = guestList_3[_b];
    console.log("".concat(n, ", You are still invited!"));
}
while (guestList.length > 0) {
    guestList.pop();
}
console.log(guestList);
