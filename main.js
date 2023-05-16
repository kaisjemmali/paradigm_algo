function checkPalindrome(string) {
  let newString = string.split("").reverse().join("");

  if (string === newString) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("abba"));
console.log(checkPalindrome("hello"));
console.log(checkPalindrome("madam"));
