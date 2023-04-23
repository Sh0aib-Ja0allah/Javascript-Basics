console.log("Start")

// Even Or Odd function :

function evenOrOdd(number) {
  return number % 2 == 0? "Even" : "Odd"
}
console.log("\n-------------------------------")
console.log("# the check of even or odd number is :")
console.log( " 7   => " , evenOrOdd(7))
console.log( " 4   => " , evenOrOdd(4))
console.log("-------------------------------")

//Return the number (count) of vowels in the given string. --  We will consider a, e, i, o, u as vowels for this Kata (but not y).

function getCount(str) {
    const vowelCharacters = ['a', 'i', 'e', 'u', 'o'];
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowelCharacters.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log("\n-------------------------------")
console.log("# Number of vowel characters is :")
console.log( " Jadallah      => " , getCount("Jadallah"))
console.log( " abracadabra   => " , getCount("abracadabra"))
console.log("-------------------------------")

/* 
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16      -->  1 + 6 = 7
    942     -->  9 + 4 + 2 = 15              -->  1 + 5 = 6
    132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
    493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitalRoot(n) {
    if(n < 10){
        return n
    }else{
        let result = 0
        while (n > 0){
            result += n%10
            n = Math.floor(n/10)
        }
        return digitalRoot(result)
    }
}
console.log("\n-----------------------------")
console.log("# A Recursive function to return the digits sum of a number :")
console.log( " 16       => " , digitalRoot(16))           //   7
console.log( " 942      => " , digitalRoot(942))          //   6
console.log( " 132189   => " , digitalRoot(132189))       //   6
console.log( " 493193   => " , digitalRoot(493193))       //   2
console.log("-----------------------------")

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/gi, '');
  }

console.log("\n-----------------------------")
console.log("# Function to return a string without it's vowel letters :")
console.log( " This website is for losers LOL!   => " , disemvowel("This website is for losers LOL!"))      //  Ths wbst s fr lsrs LL!
console.log("-----------------------------")

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
  let sum = 0
  for(let i = 0; i < number; i++){
    if(i%3 == 0 || i%5 == 0){
      sum += i
    }
  }
  return sum
}

console.log("\n-----------------------------")
console.log("# Function to return the sum of the numbers \n that can divide ( 3 or 5 ) :")
console.log( " 10    => " , solution(10))      //   23
console.log( " 20    => " , solution(20))      //   78
console.log( " 200   => " , solution(200))     //   9168
console.log("-----------------------------")

console.log("\nEnd")
