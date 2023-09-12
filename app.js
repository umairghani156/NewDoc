// When we put  values of an array with[] it gives priority to the
// following numbers to come
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function myName() {
     var numbers = num[0,2,3,4];//<== This one I'm talking about
     console.log(numbers);
}
// We can add one or multiple values in an empty array by using function 
var arr = [];
function myName(name,num,name1) {//<== here you can further add into the parameters
    console.log(name,num,name1) //<== here value are passing by coming from parameters to down
   arr[arr.length]= name;
   console.log(arr.length)
   arr[arr.length]= num;
   arr[arr.length]= name1;

}
myName("Umair", 23,"Ahmed");// ^ These arguments go up to the parameters 
console.log(arr)
// There are also possible way to use function for taking input from the user
function printName(name) {
    document.write(name);
}
var name = prompt("Enter your name");
printName(name); // <== Soon as input is taken from user it passes to the argument

// Function with return 
function myFunc() { 
    return 12 * 10; // Return throws the value outside the function and
}                   // it doesn't let us to implement after putting itself
console.log(myFunc());