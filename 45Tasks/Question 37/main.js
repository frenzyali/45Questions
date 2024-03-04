// Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by 
// default with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
// with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You are trying to create a shirt with size \"".concat(size, "\" and the message that goes on it is : \"").concat(message, "\""));
}
// Making a large shirt with the default message
make_shirt();
// Making a medium shirt with the default message
make_shirt("Medium");
// Making a shirt of any size with a different message
make_shirt("Small", "Hello, TypeScript!");
