// Question 15: Changing Guest List: You just heard that one of your guests can’t make the 
// dinner, so you need to send out a new set of invitations. You’ll have to think of someone else 
// to invite.
var guestList = ["Luffy", "Naruto", "Goku"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello ".concat(guest, ", please be sure to attend the dinner on 24th of February at 8:00PM sharp."));
}
console.log("\n\nUnfortunately, Naruto will not be able to attend the dinner party.\n\n");
guestList[1] = "Eren";
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Hey ".concat(guest, ", I would be delighted if you attend the grand dinner party at my house on 25th of February at 9:00PM."));
}
