// "abc"
	['a','b','c']

	//we need to take each element out, and combine it with a remaining element. then we need to do that again, (and again and again)


//solution
	function allAnagrams(string){
		var els = string.split("");
		var results = {};

		function recur(curr, remainder){
			if(!remainder.length){
				var solution = current.join("")
				if(!results[solution]){results[solution] = true}
			} else {
				for(var i = 0; i < remainder.length; i++){
					var tempRemainder = remainder.slice();
					var piece = tempRemainder.splice(i,1)[0];
					recur(current.concat(piece), tempRemainder)
				}
			}
		}
		recur([],els)
		return Object.keys(results);
	}


//other method to explore

function allAnagrams (string) {
  var strArr = string.split("");
  var solutionArray = [];
  var count = 0;
  function recur(arr, idx){
    arr = arr || [];
    var i = 0
    if(arr.length === strArr.length){
      var x = arr.join("");
      solutionArray.push(x);
    } else {
    
      for(var i = 0; i < strArr.length; i++){
        count++;
        if(i === idx || strArr[i] === strArr[idx]) continue;
          recur(arr.concat.call(arr,strArr[i]), i)
      }
    }
  }
    recur();

    return solutionArray;
}
 