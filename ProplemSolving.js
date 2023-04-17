// Even Or Odd function :
function evenOrOdd(number) {
  return number % 2 == 0? "Even" : "Odd"
}

console.log(evenOrOdd(7))
console.log(evenOrOdd(4))


//Return the number (count) of vowels in the given string. --  We will consider a, e, i, o, u as vowels.

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
