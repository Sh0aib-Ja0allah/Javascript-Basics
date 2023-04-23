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

console.log("\n-----------------------------")
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
console.log( " 16       => " , digitalRoot(16))           //   7
console.log( " 942      => " , digitalRoot(942))          //   6
console.log( " 132189   => " , digitalRoot(132189))       //   6
console.log( " 493193   => " , digitalRoot(493193))       //   2
console.log("-----------------------------")

console.log("\nEnd")
