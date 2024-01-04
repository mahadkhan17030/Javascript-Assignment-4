// // Chapter 21
// // 1
// var userInput=prompt("Enter a word")
// var allLower=userInput.toLowerCase()

// // 2
// var x = "ANYTHING"
// x=x.toLowerCase();

// // 3
//  var y = "anything"
// y=y.toUpperCase();

// // 4
// var a='ANYTHING'
// var b = a.toLowerCase()

// // 5
// var arr=["anything","ANYTHING"]
// var arr1=arr[1].toLowerCase();

// // 6
//  alert(y);

// // 7
// var cityName="kaRachi"
// var cityName1=cityName.slice(0,1)
// var cityName2=cityName.slice(1)
// var cityName=cityName1.toUpperCase()+cityName2.toLowerCase();
// console.log(cityName)

// // Chapter 22-25
// // 1
// var sameWords="captain"
// var a1=sameWords.slice(1,3)

// // 2
// var lengthOfString=sameWords.length.toString()

// // 3
// var animal="elephant"
// var seg=animal.slice(2,6)

// // 4
// var length=animal.length
// console.log(length)

// // 5
// var animal="monkey"
// var length1=animal.length
// var segment=animal.slice(1,5)

// // 6
// var text="To be or not to be"
// var indx=text.indexOf("be")
// console.log(indx)

// // 7
// var text="To be or not to be"
// var indx=text.lastIndexOf("be")
// console.log(indx)

// // 8
// var word='GO'
// var index=word.indexOf("g")

// // 9
// if(word[ndex]=="G"){
//     console.log("word found")
// }

// // 10
// var string="abcde"
// var b=string.charAt(2)

// // 11
// var text="Be the one and only"
// var cha=text.charAt(9)

// // 12
// var str="Be the one and only"
// var index=str.length-1
// var x=str[index]

// // 13
// var text=prompt("Enter text")
// var cha=text[4]

// // 14
// if (str[3]==t){
//     console.log("word found")
// }

// // 15
// var arr=[]
// for(var i=0;i=str.length;i++){
//      arr[i]=str[i]
// }
// console.log(arr)

// // 16
// var str="1,2,3,4,5"
// var newStr=str.replace("1","one")

// // 17
//  var str="Be the one and only"
//  var newStr=str.replaceAll("o","1")

// // Chapter 26
// // 1
// var a=12.8735
// var b=Math.round(a)

// // 2
// var a=12.4245
// var b=Math.round(a)

// // 3
// var a=12.8735
// var b=Math.floor(a)

// // 4
// var origNum=prompt("Enter a decimal number")
// var x=Math.round(origNum)

// // 5
// var a=0.5
// var b=Math.floor(a)

// // Chapter 27
// // 1
// var a=Math.random()
// var b=Math.ceil(a*50)

// // 2
// var num=Math.random()

// // 3
// var a=Math.random()
// var b=Math.ceil(a*6)

// // 4
// var a = Math.random();
// var b = Math.round(a)
// if (b == 1) {
// console.log("head")
// }
// else {
//    console.log("tail")
// }

// // Chapter 28-29
// // 1
// By function parseInt() (But it also apply the Math.floor() function on integer)
// By adding + sign to String
// By function Number()
// By function parseFloat() 

// // 2
// var str="123"
// var num=Number(str)

// // 3
// var str="123"
// var num=parseFloat(str)

// // 4
// By applying function typeOf() or by checking its colour in console box

// // 5
// By applying toString() function

// // 6
// var num1=42
// var num2=toString(num1)

// // 7
// var num3="3.14"
// var num4=Number(num3)

// // Chapter 30
// // 1
// var num5=Math.random()
// var num6=num5.toFixed(4)

// // 2
// var num7=Math.random()
// var num8=Number(num7.toFixed(2))

// // 3
// var num9=12.35
// var num10=toString(num9)

// var a=typeof(num10)
// if(num10.indexOf<5){
//     console.log("Word consists of 4 digits")
// }

// // 4
// var num11=Math.random()
// var num12=toString(num11.toFixed(2))

// // Chapter 31-34
// // 1
// var dObj = new Date();

// // 2
// var dStr = new Date().toString();

// // 3
// var d=

// // 4
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var dayIndex = dayNames.indexOf(d);
// if (dayIndex !== -1) {
//     alert("The current day is: " + d + "\nIndex in the array: " + dayIndex);
// } else {
//     alert("The current day is not found in the array.");
// }

// // 5

// // 6
// var later = new Date(2020, 11, 0);

// // 7
// var myDate = new Date(1992, 1, 2);

// // 8
// alert(new Date('1980-01-01').getTime());

// // 9
// var myDate = new Date();
// myDate.setFullYear(2023)

// // 11
// function setDayOfWeek(2011, 11, 3, 5) {
//      var targetDate = new Date(2011, 11 - 1, 3);
//     var dayDifference = 5 - targetDate.getDay();
//     targetDate.setDate(targetDate.getDate() + dayDifference);
//     return targetDate;
// }

// // Chapter 35-37
// // 1
// function displayAlert() {}

// // 2
// function askName(){
//    var userName=prompt("Enter our name")
// }

// // 3
// function combination(){
//    displayAlert()
//    askName()
// }

// // 4
// function call(){
// var userName=prompt("Enter your name")
// alert(userName)}
// call()

// // 5
// function concat(a, b, c, variable, str, num) {
// }
// var myVariable = "abc";
// var myString = "def";
// var myNumber = 123;
// concat('a', 'b', 'c', myVariable, myString, myNumber);

// // 6
// var concatenatedValue = concatenateAndAssign("Hello, ", "world!");
// console.log(concatenatedValue);

// // 7
// var multiplicationResult = multiplyAndAssign(2, 3, 4);
// console.log(multiplicationResult);

// // 8,10,11
// function calculateAverage(numbers) {
   // if (numbers.length === 0) {
     //   return 0; 
   // }
   // var sum = numbers.reduce(function (a,b) {
   //     return a + b;
   // }, 0);
   // var average = sum / numbers.length;
  //  return average;
// }

// // 9
// function addNumbers(a, b) {
   // var sum = a + b;
   // return sum;
// }

// // 12
// function letterCounts(word) {
   // var counts = {};
   // var lowerCaseWord = word.toLowerCase();
   // for (var i = 0; i < lowerCaseWord.length; i++) {
       // var letter = lowerCaseWord[i];
       // if (letter.match(/[a-z]/)) {
       //     counts[letter] = (counts[letter] || 0) + 1;
     //   }
   // }
   // return counts;
// }

// // 13
// function setYearInDate(dateObject, year) {
   // if (!(dateObject instanceof Date)) {
     //   console.error("Invalid Date object provided.");
   //     return;
//     }

    // // 14
  //  var birthdate = new Date("2005-11-14");
// var currentDate=new Date()
   // var age = currentDate.getFullYear() - birthdate.getFullYear();

    // // 15
   // function isWordInArray(word, array) {
       // var lowercaseWord = word.toLowerCase();
       // var lowercaseArray = array.map(function (element) {
         //   return element.toLowerCase();
       // });
     //   return lowercaseArray.includes(lowercaseWord);
   // }

// // 16
// function repeatLetter(letter) {
  //  return letter.repeat(10);
// }

// // 17
// function reverseArray(arr) {
  //  return arr.reverse();
// }

// // Chapter 38
// // 1
// function demonstrateLocalVariable() {
//     var localVar = "I am a local variable";
//     console.log(localVar);
//     localVar = "Updated value";
//     console.log(localVar);
// }
// demonstrateLocalVariable();

// //  2
// var globalVar = "I am a global variable";
// function modifyGlobalVariable() {
//      globalVar = "I am a modified local variable";
//     console.log(globalVar);
// }
// modifyGlobalVariable();
// console.log(globalVar);

// // Chapter 39-40
// // 1
// var status = "success";

// switch (status) {
//     case "success":
//         console.log("Operation was successful.");
//         break;
//     case "warning":
//         console.log("There is a warning.");
//         break;
//     case "error":
//         console.log("An error occurred.");
//         break;
//     default:
//         console.log("Unknown status.");
// }

// // 2
// var cityName = prompt("Enter the city name:");
// switch (cityName.toLowerCase()) {
//     case "new york":
//         console.log("You entered New York.");
//         break;
//     case "los angeles":
//         console.log("You entered Los Angeles.");
//         break;
//     case "london":
//         console.log("You entered London.");
//         break;
//     default:
//         console.log("Sorry, we don't have information for the entered city.");
// }