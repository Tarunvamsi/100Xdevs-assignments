/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const lowercase =str.toLowerCase();
  let  charfreq=0;
  for (const char of lowercase){
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
      charfreq += 1;

    }
    
  }
  return charfreq;
}

module.exports = countVowels;