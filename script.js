'use strict';

var string = prompt('Введите строку на русском языке');
function countVowels(s) {
  s = s.toLowerCase().split('');
  var count = 0;
  var vowels = { а: 0, е: 0, ё: 0, и: 0, о: 0, у: 0, ы: 0, э: 0, ю: 0, я: 0 };
  function findVowels(v) {
    if (v in vowels) {
      count++;
    }
    return count;
  }
  s.forEach(findVowels);//или s.forEach(v=>if (v in vowels) count++; return count;);
  return count;
}


function getNumWord(num, word1, word2, word5) {
  var dd = num % 100;
  if ((dd >= 11) && (dd <= 19))
    return word5;
  var d = num % 10;
  if (d == 1)
    return word1;
  if ((d >= 2) && (d <= 4))
    return word2;
  return word5;
}

console.log('В вашей строке ' + countVowels(string) + getNumWord(countVowels(string), ' гласная', ' гласные', ' гласных'));