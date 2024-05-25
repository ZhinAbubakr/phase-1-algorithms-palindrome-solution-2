function isPalindrome(word) {
  // Write your algorithm here
  // Reverse the word and compare it to the original word
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  1. Split the word into an array of characters.
  2. Reverse the array of characters.
  3. Join the reversed array back into a string.
  4. Compare the reversed string to the original string.
  5. Return true if they are the same, otherwise return false.
*/

/*
  Add written explanation of your solution here
  The function checks if the input string is a palindrome by reversing the string and comparing it to the original string. If the reversed string is the same as the original string, the function returns true, indicating that the input string is a palindrome. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
