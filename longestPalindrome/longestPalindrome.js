/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function(string) {
	var longestCount = 0;
	var longestArr = [];
	var arrStr = string.split("");



	for(var i = 0, length = arrStr.length; i < length; i++){
		if(i > length-i) break;
		if(arrStr[i] === arrStr[length-i]){
			if(checkBetween(arrStr.slice( i + 1 ,arrStr.length - i - 1))){
				if(longestArr.length > arrStr.slice( i , arrStr.length - i).length){
					longestArr = arrStr.slice( i , arrStr.length - i);
					break;
				}
			}

		}
	}
	return longestArr;
};



function checkBetween(arr, fI, bI){
	if(fI > bI) return true;
	if(arr[fI] === arr[bI]){
		console.log(fI, bI)
		return checkBetween( arr.slice( fI + 1 , arr.length - fI - 1 ), fI + 1, arr.length - fI - 1)
	}
}