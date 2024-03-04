// Question 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order -has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var locations = ["Japan", "Brazil", "Antartica", "Croatia", "Korea"];
console.log("Original order:", locations);
console.log("Alphabetical order:", locations.slice().sort());
console.log("Original order:", locations);
console.log("Reverse alphabetical order:", locations.slice().sort().reverse());
console.log("Original order:", locations);
locations.reverse();
console.log("Reversed order:", locations);
locations.reverse();
console.log("Back to original order:", locations);
locations.sort();
console.log("Sorted in alphabetical order:", locations);
locations.sort().reverse();
console.log("Sorted in reverse alphabetical order:", locations);
