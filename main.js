// Question: 2
// let message = "Ali";
// console.log("Hey " + message + ", Would you like to learn some programming?");
// Question: 3
// let Name = "Ali Hussain";
// console.log(Name.toLowerCase());
// console.log(Name.toUpperCase());
// console.log(Name[0].toUpperCase()+Name[1]+Name[2] + " " + Name[4].toUpperCase()+Name[5]+Name[6]+Name[7]+Name[8]+Name[9]+Name[10]);
// Question: 4
// console.log('Kiyomi Takada once said, "The only true fear is the fear of the unknown."');
// Question: 5
// let AuthorName = "Sun Tzu";
// let Quote = "In order to know your enemy, you must become your enemy";
// console.log(`${AuthorName} once said, "${Quote}"`);
// Question: 6
// let Name = 'Ali Hussain';
// console.log("\t"+Name+"\t\n"+Name);
// Question: 7
// console.log(2 + 6);
// console.log(11 - 3);
// console.log(4 * 2);
// console.log(16 / 2);
// Question: 9
// let FavoriteNumber = 27;
// console.log("This is my favorite number: " + FavoriteNumber);
// Question: 10
// Comment for Program 3: This program takes the value in the variable and converts it to lowercase, uppercase and titlecase by using the following code
// let Name = "Ali Hussain";
// console.log(Name.toLowerCase());
// console.log(Name.toUpperCase());
// console.log(Name[0].toUpperCase()+Name[1]+Name[2] + " " + Name[4].toUpperCase()+Name[5]+Name[6]+Name[7]+Name[8]+Name[9]+Name[10]);
// Comment for Program 5: This program takes two values and prints them with the name of the Author and their quote with proper punctuation.
// let AuthorName = "Sun Tzu";
// let Quote = "In order to know your enemy, you must become your enemy";
// console.log(AuthorName + ' once said,' + ' "' + Quote + '."');
// Question: 11
// let names = ["Ali", "John", "Ayan", "Ammar"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// Question: 12
// let names = ["Ali", "John", "Ayan", "Ammar"];
// for (let n of names){
//     console.log(`Hello ${n}, have a great day!`);
// }
// Question: 13
// let items = ["Honda Civic", "Ninja H2R", "Audi R6", "Mercedes S Class"];
// for (let n of items){
//     if (n === "Honda Civic"){
//         console.log("The engine of Honda Civic is very modern.");
//     } else if (n === "Ninja H2R"){
//         console.log("Ninja H2R is one of the fastest motorcycles in the world.");
//     } else if (n === "Audi R6"){
//         console.log("Audi R6 is one of the most famous cars of Audi.");
//     } else if (n === "Mercedes S Class"){
//         console.log("The interior of Mercedes S Class is super comfortable");
//     }
// }
// Question: 14
// let guestList = ["Luffy", "Naruto", "Goku"];
// for (let guest of guestList){
//      console.log(`Hello ${guest}, please be sure to attend the dinner on 24th of February at 8:00PM sharp.`);
//  }
// Qustion: 15
// let guestList = ["Luffy", "Naruto", "Goku"];
//  for (let guest of guestList){
//       console.log(`Hello ${guest}, please be sure to attend the dinner on 24th of February at 8:00PM sharp.`);
//   }
// console.log("\n\nUnfortunately, Naruto will not be able to attend the dinner party.\n\n");
// guestList[1] = "Eren";
// for (let guest of guestList){
//     console.log(`Hey ${guest}, I would be delighted if you attend the grand dinner party at my house on 25th of February at 9:00PM.`);
// }
// Question: 16
// let guestList = ["Luffy", "Eren", "Goku"];
//  for (let guest of guestList){
//       console.log(`Hey ${guest}, I would be delighted if you attend the grand dinner party at my house on 25th of February at 9:00PM.`);
//   }
// console.log("\nHey everyone, I found a bigger dining table so I will be inviting more people.\n");
// guestList.unshift("Kaneki");
// let index = Math.floor(guestList.length / 2);
// guestList.splice(index, 0, "Ichigo");
// guestList.push("Natsu");
// for (let guest of guestList){
//     console.log(`Salam ${guest}, Please be sure to attend the dinner party at my home tomorrow.`);
// }
// Question: 17
// let guestList = ["Luffy", "Eren", "Goku"];
//  for (let guest of guestList){
//       console.log(`Hey ${guest}, I would be delighted if you attend the grand dinner party at my house on 25th of February at 9:00PM.`);
//   }
// console.log("\nHey everyone, I found a bigger dining table so I will be inviting more people.\n");
// guestList.unshift("Kaneki");
// let index = Math.floor(guestList.length / 2);
// guestList.splice(index, 0, "Ichigo");
// guestList.push("Natsu");
// for (let guest of guestList){
//     console.log(`Salam ${guest}, Please be sure to attend the dinner party at my home tomorrow.`);
// }
// console.log("\nI am really sorry and embarassed to say that the dining table broke and I can only invite two people now.\n");
// while (guestList.length > 2) {
//     let removedGuest = guestList.pop();
//     console.log(`I am sorry that I won't be able to invite ${removedGuest} to the dinner.`);
// }
// for (let n of guestList){
//     console.log(`${n}, You are still invited!`);
// }
// while (guestList.length > 0) {
//     guestList.pop();
// }
// console.log(guestList);
// Question: 18
// let locations = ["Japan", "Brazil", "Antartica", "Croatia", "Korea"];
// console.log("Original order:", locations);
// console.log("Alphabetical order:", locations.slice().sort());
// console.log("Original order:", locations);
// console.log("Reverse alphabetical order:", locations.slice().sort().reverse());
// console.log("Original order:", locations);
// locations.reverse();
// console.log("Reversed order:", locations);
// locations.reverse();
// console.log("Back to original order:", locations);
// locations.sort();
// console.log("Sorted in alphabetical order:", locations);
// locations.sort().reverse();
// console.log("Sorted in reverse alphabetical order:", locations);
// Question: 19
// let guestList = ["Luffy", "Eren", "Goku"];
//  for (let guest of guestList){
//       console.log(`Hey ${guest}, I would be delighted if you attend the grand dinner party at my house on 25th of February at 9:00PM.`);
//   }
// console.log("\nHey everyone, I found a bigger dining table so I will be inviting more people.\n");
// guestList.unshift("Kaneki");
// let index = Math.floor(guestList.length / 2);
// guestList.splice(index, 0, "Ichigo");
// guestList.push("Natsu");
// for (let guest of guestList){
//     console.log(`Salam ${guest}, Please be sure to attend the dinner party at my home tomorrow.`);
// }
// let numberOfGuests: number = guestList.length;
// console.log(`\nWe are inviting a total of ${numberOfGuests} guests`);
// Question: 20
// let ProgrammingLanguagues = ["C++", "JavaScript", "Python", "C#", "Swift", "TypeScript"]
// for (let language in ProgrammingLanguagues){
//     console.log(ProgrammingLanguagues[language]);
// }
// Question: 21
// let car = {
//     model: "Civic",
//     company: "Honda",
//     year: "2022"
// };
// console.log(car);
// Question: 22
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[3]);
// gives "undefined" as output which can be considered as index error in typescript.
// Question: 23
// let myName = "Ali";
// console.log("Is myName == 'Ali'? I predict true");
// console.log(myName == 'Ali');
// let myAge = 16;
// console.log("Is myAge == '14'? I predict false");
// console.log(myAge == 14);
// let myGender = "Male";
// console.log("Is myGender == 'Male'? I predict true");
// console.log(myGender == 'Male');
// let myNationality = "Pakistani";
// console.log("Is myNationality == 'Dutch'? I predict false");
// console.log(myNationality == 'Dutch');
// let myReligion = "Islam";
// console.log("Is myReligion == 'Islam'? I predict True");
// console.log(myReligion == 'Islam');
// let myWeight = 62;
// console.log("Is myWeight == '50'? I predict false");
// console.log(myWeight == 50);
// let myHeight = "5'11";
// console.log("Is myHeight == '5'11'? I predict True");
// console.log(myHeight == "5'11");
// let myHobby = "Gaming";
// console.log("Is myHobby == 'Sports'? I predict false");
// console.log(myHobby == 'Sports');
// let mySkinColor = "Brown";
// console.log("Is mySkinColor == 'Brown'? I predict true");
// console.log(mySkinColor == 'Brown');
// let myLanguage = "Urdu";
// console.log("Is myLanguage == 'German'? I predict false");
// console.log(myLanguage == 'German');
// Question: 24
// let myName = "Syed Ali Hussain";
// if(myName == "Syed Ali Hussain"){
//     console.log("Hello Syed Ali Hussain");
// }else{
//     console.log("Hello unknown person");
//  }
// if(myName.toLowerCase() == "Syed Ali Hussain"){
//     console.log("Hello Syed Ali Hussain");
// }else{
//     console.log("Hello syed ali hussain of lowercase");
// }
// let myAge = 16;
// if(myAge >= 10){
//     console.log("You are eligible for the ride");
// }else{
//     console.log("You aren't eligible for the ride");
// }
// if(myAge >= 18){
//     console.log("You are eligible for the driving license");
// }else{
//     console.log("You aren't eligible for the driving license");
// }
// let myWeight = 62;
// if(myAge <= 17 && myWeight <= 70){
//     console.log("You are eligible for the dodging car");
// }else{
//     console.log("You are not eligible for the dodging car");
// }
// if(myAge <= 13 && myWeight <= 45){
//     console.log("You are eligible for the bouncy castle");
// }else{
//     console.log("You are not eligible for the bouncy castle");
// }
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// // let isPineapplePresent: boolean = false;
// // for (let fruit of fruits) {
// //     if (fruit === "Pineapple") {
// //         isPineapplePresent = true;
// //         break; 
// //     }
// // }
// // if (isPineapplePresent) {
// //     console.log("Pineapple is in the array.");
// // } else {
// //     console.log("Pineapple is not in the array.");
// // }
// let isApplePresent: boolean = false;
// for (let fruit of fruits) {
//     if (fruit === "Apple") {
//         isApplePresent = true;
//         break; // Once found, no need to continue iterating
//     }
// }
// if (isApplePresent) {
//     console.log("Apple is in the array.");
// } else {
//     console.log("Apple is not in the array.");
// }
// Question: 25
// let alien_color = "Green"
// if(alien_color == "Green"){
//     console.log("The player just earned five points");
// }
// if(alien_color == "red"){
// }
// Question: 26
// let alien_color = "Yellow"
// if (alien_color == "Green") {
//     console.log("The player just earned five points");
// } else {
//     console.log("The player just earned ten points");
// }
// if(alien_color == "Yellow"){
//     console.log("The player just earned five points");
// }else{
//     console.log("The player just earned ten points");
// }
// Question: 27
// let alien_color = "Green"
// if(alien_color == "Green"){
//     console.log("The player just earned five points");
// }else if(alien_color == "Yellow"){
//     console.log("The player just earned ten points");
// }else if(alien_color == "Red"){
//     console.log("The player just earned fifteen points");
// }
// alien_color = "Yellow"
// if(alien_color == "Green"){
//     console.log("The player just earned five points");
// }else if(alien_color == "Yellow"){
//     console.log("The player just earned ten points");
// }else if(alien_color == "Red"){
//     console.log("The player just earned fifteen points");
// }
// alien_color = "Red"
// if(alien_color == "Green"){
//     console.log("The player just earned five points");
// }else if(alien_color == "Yellow"){
//     console.log("The player just earned ten points");
// }else if(alien_color == "Red"){
//     console.log("The player just earned fifteen points");
// }
// Question: 28
// let age = 15;
// if(age < 2){
//     console.log("The person is a baby");
// }else if(age >= 2 && age <= 4){
//     console.log("The person is a toddler");
// }else if(age >= 4 && age <= 13){
//     console.log("The person is a kid");
// }else if(age >= 13 && age <= 20){
//     console.log("The person is a teenager");
// }else if(age >= 20 && age <= 65){
//     console.log("The person is an adult");
// }else if(age >= 65){
//     console.log("The person is an elder");
// }
// Question: 29
// let favourite_fruits = ["Apple", "Grapes", "Pineapple"];
// for(let fruit of favourite_fruits){
//     if(fruit == "Banana"){
//         console.log("You really like bananas");
//     }else if(fruit == "Apple"){
//         console.log("You really like apples");
//     }else if(fruit == "Mango"){
//         console.log("You really like mangoes");
//     }else if(fruit == "Pineapple"){
//         console.log("You really like pineapples");
//     }else if(fruit == "Grapes"){
//         console.log("You really like grapes");
//     }
// }
// Question: 30
// let account_names = ["John", "Ali", "Admin", "Michael", "Eric"];
// for(let account of account_names){
//     if(account == "Admin"){
//         console.log("Hello Admin, would you like to view the report?");
//     }else{
//         console.log(`Hello ${account}, how are you doing today?`);
//     }
// }
// Question: 31
// let account_names = ["John", "Ali", "Admin", "Michael", "Eric"];
// if (account_names.length > 0) {
//     for (let account of account_names) {
//         if (account == "Admin") {
//             console.log("Hello Admin, would you like to view the report?");
//         } else {
//             console.log(`Hello ${account}, how are you doing today?`);
//         }
//     }
// } else {
//     console.log("We need to find some users!");
// }
// Question: 32
// let current_users = ["Ali", "Hasan", "Ahmad", "Junaid", "Maroof"];
// let new_users = ["Dabeer", "Hasan", "Ahmad", "Aamir", "Saif"];
// for (let user of new_users){
//     let SameUsernamefound = false;
//     for(let existingUser of current_users){
//         if(user === existingUser){
//             SameUsernamefound = true;
//             break;
//         }
//     }
//     if (SameUsernamefound){    // ==> This code checks if SameUsernameFound boolean is true or false, 
//  if it is true then it executes the if BLOCK and if it is false
// then it executes the ELSE BLOCK
//         console.log(`The username ${user} is not available`);
//     }else{
//         console.log(`The username ${user} is available`);
//     }
// }
// Question: 33
// let numbers: number[] = [1,2,3,4,5,6,7,8,9];
// for(let num of numbers){
//     if(num == 1){
//         console.log(`${num}st`);
//     }else if(num == 2){
//         console.log(`${num}nd`);
//     }else if(num == 3){
//         console.log(`${num}rd`);
//     }else{
//         console.log(`${num}th`);
//     }
// }
// Question: 34
// let favourite_pizza : string[] = ["Deep Dish Pizza", "Fajita Pizza", "Pepperoni Pizza"];
// for(let pizza of favourite_pizza){
//     console.log(`I really like to eat ${pizza}.`);
// }
// console.log("I really like to eat pizza and it's one of my favourite type of dishes. I really love eating pizza alot.\n");
// console.log("I really like eating types of pizza which have thick crust like deep dish pizza and pizza's which contain alot of meat.\n");
// console.log("I really love eating pizza");
// Question: 35
// let animal_list: string[] = ["Lion", "Cheetah", "Wolf"];
// for(let animal of animal_list){
//     if(animal == "Lion"){
//         console.log("Lion is the King of the Jungle.");
//     }else if(animal == "Cheetah"){
//         console.log("Cheetah is the fastest land animal in the world.");
//     }else{
//         console.log("Wolf is known for their ability to blend in with their prey.");
//     }
// }
// console.log("The common characteristic between these animals is that they are all ferocious and dangerous wild animals that should be treated with utmost care.");
// Question: 36
// function make_shirt(size: string, message: string): void{
//     console.log(`You are trying to create a shirt with size "${size}" and the message that goes on it is: ${message}`);
// }
// make_shirt("Large", "Hello, Syed Ali Hussain");
// Question: 37
// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`You are trying to create a shirt with size "${size}" and the message that goes on it is : "${message}"`);
// }
// // Making a large shirt with the default message
// make_shirt();
// // Making a medium shirt with the default message
// make_shirt("Medium");
// // Making a shirt of any size with a different message
// make_shirt("Small", "Hello, TypeScript!");
// Question: 38
// function describe_city(city_name: string, country_name: string = "Pakistan"): void{
//     console.log(`${city_name} is situated in ${country_name}`);
// }
// describe_city("Karachi");
// describe_city("Istanbul", "Turkey");
// describe_city("Jeddah", "Saudia Arab");
// Question: 39
// function city_country(city_name: string, country_name: string): void{
//     console.log(`${city_name}, ${country_name}`);
// }
// city_country("Karachi", "Pakistan");
// city_country("Dubai", "United Arab Emirates");
// city_country("Tokyo", "Japan");
// Question: 40
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     let album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title,
//     };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// let album1 = make_album("Artist 1", "Album 1", 10);
// let album2 = make_album("Artist 2", "Album 2");
// let album3 = make_album("Artist 3", "Album 3", 15);
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Question: 41
// let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Doug Henning", "Derren Brown"];
// function show_magicians(magicians: string[]): void{
//     for(let magician of magicians){
//         console.log(magician)
//     }
// }
// show_magicians(magician_names);
// Question: 42
// let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Doug Henning", "Derren Brown"];
// function make_great(magicians: string[]): void{
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] += " the Great";
// }
// }
// function show_magicians(magicians: string[]): void{
//     for(let magician of magicians){
//         console.log(magician)
//     }
// }
// make_great(magician_names)
// show_magicians(magician_names);
// Question: 43
// let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Doug Henning", "Derren Brown"];
// function make_great(magicians: string[]): string[] {
//     let greatMagicians: string[] = [];
//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians.push(magicians[i] + " the Great");
//     }
//     return greatMagicians;
// }
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
// let copyMagicians: string[] = [...magician_names];
// let greatMagicians: string[] = make_great(copyMagicians);
// console.log("Original Magicians:");
// show_magicians(magician_names);
// console.log("\nGreat Magicians:");
// show_magicians(greatMagicians);
// Question: 44
// function orderSandwich(...items: string[]): void {
//     console.log("Syed Ali Hussain will be making a sandwhich with the following items: ");
//     items.forEach(item => console.log("- " + item));
//     console.log("Enjoy your sandwich!\n");
// }
// orderSandwich('Grilled Beef', 'Cheese', 'Lettuce');
// orderSandwich('Turkey', 'Swiss Cheese');
// orderSandwich('Nutella', 'Butter');
// Question: 45
// type Car = {
//     manufacturer_car: string;
//     model_car: string;
//     color_car?: string;
//     year_car?: number;
// };
// function generate_car(manufacturer: string, model_name: string, color?: string, year?: number): Car{
//     let Car: Car = {
//         manufacturer_car: manufacturer,
//         model_car: model_name
//     };
//     if(color !== undefined){
//         Car.color_car = color;
//     }
//     if(year !== undefined){
//         Car.year_car = year;
//     }
//     return Car;
// }
// let Car1 = generate_car("Honda", "Civic");
// let Car2 = generate_car("Toyota", "Corolla", "Black", 2017);
// console.log(Car1);
// console.log(Car2);
