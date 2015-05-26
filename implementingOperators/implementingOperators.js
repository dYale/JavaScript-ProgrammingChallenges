// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
	var result = 0;
	if(y < 0){
		y *= -1; 	
		x *= -1;
	}

	if(x === 0 || y === 0){
		return 0;
	}

	if(y === 1) return x;
	if(x === 1) return y;

	for (var i = 0; i < y; i++){
		result += x;
	}


	return result;
};


var divide = function(x, y) {
	var count = 0;
	var decrement = 0;

	for(var i = 0; i < y; y++){
		if( decrement - y > 0){
			count++;
			decrement -= y;
		}
	}
	return count;
};



var modulo = function(x, y) {
	
	while(x - y >= 0){
	    
			x -= y;
		}
	return x;
};

