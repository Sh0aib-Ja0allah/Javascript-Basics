// Even Or Odd function :
function evenOrOdd(number) {
  return number % 2 == 0? "Even" : "Odd"
}
console.log("\n-------------------------------")
console.log("# the check of even or odd number is :")
console.log(evenOrOdd(7))
console.log(evenOrOdd(4))
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
console.log(getCount("Jadallah"))
console.log(getCount("abracadabra"))
console.log("-------------------------------")
