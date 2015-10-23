var longestPalindrome = function(string) {
	var longestArr = [];
	var arrStr = string.split("");


	for(var i = 0, length = arrStr.length; i < length; i++){
		var revIdx = length - i - 1;

		if(i > length-i) break;
		  if(arrStr[i] === arrStr[revIdx]){
			if(isPalindrome(arrStr.slice( i ,arrStr.length - i),i,revIdx)){		
				longestArr = arrStr.slice( i , arrStr.length - i);
				break;
			}
		}
	}
	return longestArr.join("");
};




function isPalindrome(arr, frontIdx, backIdx){

  for(var i = frontIdx; i < arr.length; i++)
	if(i > backIdx - i){
	  return true;
	} else if (arr[i] === arr[backIdx - i]){
 	  continue;
	} else {
	  break;
	}
}