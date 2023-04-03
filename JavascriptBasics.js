/*
Javascript is a dynamic programming language, which we can declare a variable and change it's data type later ...
    Data type : 
        - undefined, null, boolean, string, symbol, number and object.
*/

var myName = "Shoaib"
myName = 8

let ourName = "Shoaib Jadallah"

const pi = 3.14 // this variable data can not be changed ...

var variable; // variable assigned ...
var variable2 = 15; // variable assigned, declared and initialized in one line ...

console.log(variable) // this allows us to show the value of variable in the console ...

//  javascript is a case sensitives variables names ...

var num1 = 1;
var num2 = 2;
var sum = num1+ num2;

console.log(sum)  // the summation of the previous two variables = 3

/*
Sum = +

deference = -

mul = *

divide = /

add one = ++
*/ 

var decimalNumber = 5.7; // here we had created a decimal number ...

multiply = 2.0 * 2.5; // this = 5.0

// the remainder value equals => 

var remained;
remained = 11 % 2; // this = 1, which it's the remained value of dividing 11 on 2 ...

var num = 5;
num += 5; // this = 10, which it's a shortcut ...(-=), (+=), (*=) and (/=) ...
//  all the previous was a shortcuts to easy coding ..

//  declare a string variable ...
var StringVariable = "Hello world, I'm a string variable."
var doubleQuotedString = 'Hello world, I am a "Double quotes" string.'

/*
\' => single quote
\" => double quote
\n => line skip
\t => tab skip
\b => breakSpace skip
*/

var str1 = "the first string,"
var str2 = "\b the second string."

var strSum = str1 + str2;  // here we concatenate the two strings with each others ...

//  to find the length of a string variable ...
lengthOfStr1 = 0;
lengthOfStr1 = str1.length
console.log(lengthOfStr1)  // the length of str1 variable = ??

firstLetterOfStr1 = "";
firstLetterOfStr1 = str1[0];
console.log(firstLetterOfStr1)  // the first letter of str1 is = (t) ...

lastLetterOfStr2 = str2[str2.length - 1] // the length starts from 1 and the index starts from 0 so we need to -1 to have the last character ...

function wordBlanks(myNoun, myAdj, myVerb, myAdverb){
    var result = "";
    result += "the " + myAdj + " " + myNoun + " " + myVerb + " " + myAdverb

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly")) // the result = the big dog ran quickly ... 

var array = ["name", "id"]; // string array ...
var array2 = ["name", 1]; // numbers array ...

var nestedArray = [["arr1", 1], ["arr2", 2]]; // mixed multi dim array ...

console.log(array[0])  // will see => "name"
console.log(array2[1]) // will see => 1

console.log(nestedArray[0][0]) // will show => "arr1"


modifyArray1FirstElement = "Shoaib"; // array = ["name", "id"] => array = ["shoaib", "id"]
array[0] = modifyArray1FirstElement
console.log(array[0]) // array[0] = "shoaib" ...

pushToArray = ["data Pushed", "data", 55];
array.push(pushToArray)  // this function push used to insert data to the array ...
console.log(array) // array = ["shoaib", "id", ["data Pushed", "data", 55]] ...

//  to delete a data from your array use .pop() function ...

var myPoppedData;
myPoppedData = array.pop()  // myPoppedData = ["data Pushed", "data", 55]

console.log(myPoppedData) // ["data Pushed", "data", 55]
console.log(array) // array = ["Shoaib", "id"] => so the last element from this array was deleted ...

//  to remove the first element from your array you need to use .shift() function ...

var myShiftedData;
myShiftedData = array.shift() // myShiftedData = "Shoaib"

console.log(myShiftedData) // "Shoaib"
console.log(array) // array => ["id"] : it only have one element remained ...

// .unshift() function is used like the .push() function to add an element to the array but it will be added to the beginning of the array...
var myUnShiftedData;
myUnShiftedData = myShiftedData;
array.unshift(myUnShiftedData);  // it's restore the element = "Shoaib" to the array and it becomes array = ["Shoaib", "id"] ...

console.log(array) // array = ["Shoaib", "id"] ...
console.log(myUnShiftedData) // it's = "Shoaib" ...
//  the .unshift() function add the data to the beginning of the array ...


/*
variables :
    - Global variable ...
    - Local variable  ...
*/
// - Global variable ...
var GlobalVariable = ""; // it can be used in all of your javascript code ( any where ) ...

function variable (){
    // - Local variable ...
    var LocalVariable = ""; // here is the local variable is just been used in its scope ( the function scope here ... )
    console.log("Here is a function to Show the Local variable.")
}

// if the local variable and the global variable was had the same name like :

var ourVariable = "Global variable";

function variable2 (){
    var ourVariable = "Local variable";
    console.log("our function to show the local and global variables with the same name ...")
    // the function will use the local variable that = "local variable" ...
    console.log(ourVariable) // "local variable" ...
}

//  the if statement  ...

function testEqual(value1, value2){
    if (value1 == value2){
        return true;
    }
    else{
        return false;
    }
}
console.log(testEqual(10, 12)) // will returns => false, Because of 10 != 12 ...

console.log(testEqual(15, 15)) // will returns => true, Because of 15 = 15 ...

function testEvenOrOdd (value) {
    if( value % 2 == 0){
        return `ths value =>  ${value} is an Even number.`
    }
    else{
        return `ths value =>  ${value} is an Odd number.`
    }
}
console.log(testEvenOrOdd(15)) // will returns => ths value =>  15 is an Odd number.

function showDataOfStudent (Name, Age, GPA, Graduated) {
    if(Graduated){
        return `Hello ${Name}, With Age ${Age} and GPA = ${GPA}, you had Graduated from your course, well done.`
    }
    else{
        return `Hello ${Name}, With Age ${Age} and GPA = ${GPA}, you had not Graduate from your course, Have a Good day and try in the next semester, Good luck.`
    }
}

console.log(showDataOfStudent("Shoaib Jadallah", 23, 2.8, true))
console.log(showDataOfStudent("Ayed Rabaya", 23, 3.1, false))

//  the === sign is used to compare with value and type, Not like the == sign which used to compare with value only.

/*
Greater than or less than : 
    - Greater => ( > ) ...
    - Less => ( < ) ...
    - Greater than or Equal => ( >= ) ...
    - Less than or Equal => ( <= ) ...
*/

function CheckGreaterOrLess (value1, value2) {
    if (value1 > value2) {
        return `the value ${value1} is Greater than the value ${value2}.`
    }
    else if (value1 < value2){
        return `the value ${value1} is Smaller than the value ${value2}.`
    }
    else{
        return `these two values value1 => ${value1}, value2 => ${value2}, Were equals.`
    }
}

console.log("\n", CheckGreaterOrLess(20, 10), "\n") // Greater ...
console.log(CheckGreaterOrLess(10, 20), "\n") // Less ...
console.log(CheckGreaterOrLess(20, 20), "\n") // Equals ...

// the nested if statements :

function NestedIfStatements(age, graduated) {
    if(age > 22) {
        if(graduated){
            return `he is graduated`
        }
        else{
            return `he is not graduated`
        }
    }
    else{
        return `your age is less than the wanted age`
    }
}

console.log(NestedIfStatements(25, true), "\n")  // he is graduated ...
console.log(NestedIfStatements(28, false), "\n")  // he is not graduated ...
console.log(NestedIfStatements(15, true), "\n")  // your age is less than the wanted age ...

//  Start of using Switch Statement : ...

function caseInSwitch (val){
    var answer = "";
    switch (val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gama";
            break;
        case 4:
            answer = "Delta";
            break;
        default:
            answer = "- Error with : Wrong Data inserted.";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1), "\n"); // the case 1 => Alpha
console.log(caseInSwitch(6), "\n"); // the default statement => - Error with : Wrong Data inserted..

//  BlackJack Card counting function ...

var count = 0;

function cardCountingFunction (card) {
    
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count-- ;
            break;
    }
    
    var holdBet = "Hold";
    if (count > 0) {
        holdBet = "Bet";
    }

    return `the count is = ( ${count} ) ${holdBet}`
}

cardCountingFunction(2);   // 
cardCountingFunction(3);   // 
cardCountingFunction(7);   // 
cardCountingFunction("K"); // 
cardCountingFunction("A"); // 
console.log(cardCountingFunction(4)); // the result will be => the count is = ( 1 ) Bet

//  the objects lesson : ...

var ourDog = {
    "name": "dog",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!",],
}; // thats how we create our object named ourDog ....

//  object accessing ...

var nameValue = ourDog.name;
var legsCount = ourDog.legs;

console.log(nameValue) // dog
console.log(legsCount) // 4

// OR ...
console.log(ourDog.friends) // ["Everything!"]

var tailsProperty = "tails";

var tailsCount = ourDog[tailsProperty]; // access the object using the variables ...
console.log(tailsCount) // the result = 1 ...

// to add a new property to your object in javascript just use : ...
ourDog.bark = "bow-bow"; // this property were added to our dog object ...

// to delete a property from an object in javascript just use ( delete ) keyword like : ...
delete ourDog.bark;  // and this property were deleted from ourDog object ...

//  we can use the objects like the dictionaries in python programming language ...
function PhoneticLookup (value) {
    
    var result = "";
    
    var lookup = {
        "Alpha" : 1,
        "Beta" : 2,
        "Gamma" : 3,
    }

    result = lookup[value];
    return result;
}

console.log(PhoneticLookup("Alpha")); // 1

//  javascript nested objects : ...
var myStorage = {
    "car" : {
        "inside" : {
            "gloves-box" : "maps",
            "passenger-seat" : "crumbs",
        },
        "outside" : {
            "trunk" : "jack",
        },
    }
};

var gloveBoxContents = myStorage.car.inside["gloves-box"];
console.log(gloveBoxContents) // "maps" ...

// Record collection Challenge ...

var collection = {
    "2548" : {
        "album" : "Slippery when wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "let it Rock",
            "you give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [ 
          "1999", 
          "Little Red Corvette" 
        ]
      },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  
    if(value === ""){
        delete collection[id][prop];
    }
    else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [] // if it's exists we will make it equal itself if does not will create it and make it equal an empty array ...
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }

    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

// javascript while loops ...

var myNewArray = [];

var i = 0;
while(i < 5) {
  myNewArray.push(i);
  i++;
}

console.log(myNewArray) // [0, 1, 2, 3, 4]

// javascript for loops ...

var ourNewArray = [];

for (var i = 0; i < 5; i++) {
  ourNewArray.push(i);
}

console.log(ourNewArray) // [0, 1, 2, 3, 4]

function EvenOrOddNumbersInRange (k_Value) {
    
    var oddArray = [];
    var EvenArray = [];

    for(i = 1; i<= k_Value; i++){
        if(i % 2 == 1){
            oddArray.push(i);
        }
        else if(i % 2 == 0){
            EvenArray.push(i);
        }
    }
    return `the odd numbers from 1 to ${k_Value} is : ${oddArray},\n the even numbers from 1 to ${k_Value} is : ${EvenArray}.\n`
}

console.log(EvenOrOddNumbersInRange(15));

//  Math.Random() function ... it's used to have a random numbers ...

// it will written in this shape =>  Math.random();

function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
  
ourRandomRange(1, 9);

// ParseInt function ...

function convertToInteger (StringData) {

    return parseInt(StringData);

}

console.log(convertToInteger("56")); // returns 56 number not string ...


// conditional ternary operator ...
/* 
    Shape :
        condition ? Statement-If-True : Statement-If-False;
*/

function checkEqual2 (value1, value2) {
    return value1===value2 ? true : false;
}

console.log(checkEqual2("Shoaib", "Shoaib")); // True ...
console.log(checkEqual2("Shoaib", "Ayed")); // False ...
console.log(checkEqual2(123, 123)); // True ...
console.log(checkEqual2("123", 123)); // False ...

// Multi conditional ternary operators : ...

/* 
    Shape :
        condition ? Statement-If-True : SecondCondition ? SecondStatement-if-true : SecondStatement-if-false ;
*/

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
  
checkSign(10);
console.log(checkSign(15)); // positive ...

// Done ...