/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function(string) {
	var longestArr = [];
	var arrStr = string.split("");


	for(var i = 0, length = arrStr.length; i < length; i++){
		for(var j = arrStr.length - 1; j > i; j--)

		if(arrStr[i] === arrStr[j]){
				console.log('passed', i, j)
			if(isPalindrome(arrStr.slice( i , arrStr.length - i).join(""))){	
				var currentArr = arrStr.slice( i , arrStr.length - i)

				if(longestArr.length < currentArr.length){
					longestArr = currentArr; 
			}
		}
	}
}
	return longestArr.join("");
};




function isPalindrome(arr){
 // refactor to just do a string compare, remove for loop split.rev.join
	console.log('checkin Pal', arr)
  var rev = arr.split("").reverse().join("");
  return arr === rev;
}


