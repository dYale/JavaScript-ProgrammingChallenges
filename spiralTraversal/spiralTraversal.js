/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var matrix = matrix.split('')
	var size = matrix.length;
	var singleSize = matrix[0].length;
	var spiralArray = [];



  //for top row, push into results array
  for( var i  = 0 ; i < singleSize; i++){
    for( var j = 0 ;  i < singleSize; i++){
    spiralArray.push(matrix[i][j])
    }
  }
  
//for right column, make sure to check for length
  for( var i  = 0 ; i < singleSize; i++){
    //+1 because we have already sliced over the shared index
    spiralArray.push(matrix[ j + 1 ][singleSize]);
  };



  //for bottom row, iterate backwards

  for()





    //2 loops iterating over the matrix, not nested.
    //a function  that calls all 4 in sequence..w
    //will have to nest some multiple time to enable last index identification.
    // start and copy entire first row
    //start at [j][i]

  }


};
