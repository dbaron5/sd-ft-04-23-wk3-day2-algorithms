function palindromeChecker(str) {
  return str === str.split("").reverse().join("");
}

console.log(palindromeChecker("racecar"));
console.log(palindromeChecker("book"));
console.log(palindromeChecker("tacocat"));
