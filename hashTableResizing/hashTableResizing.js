/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value){
    if(storageLimit / (size + 1 ) > 0.75) storageLimit *= 2;

    var index = hashFn(key, storageLimit);
    var bucket = storage[index];

    if(!bucket){

     storage[index] = value;
     bucket = [];
   }
   var present = false;

   for(var i = 0; i < bucket.length; i++){
    var tuple = bucket[i]; 
    if(tuple[0] === key){
      present = true;
      tuple[1] = value;
      size++;
      break;
    } 
  }

  if(!present){
    bucket.push(key,value)
  }
  return storage[index]
  };




  result.retrieve = function(key,callback){
    callback = callback || function(x){ return x;}
    var index = hashFn(key,storageLimit);
    var bucket = storage[index];

    for(var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      if(tuple[0] === key){
         callback(tuple[1]);
      } 
    } 
  };

  result.remove = function(key){
    if(storageLimit / (size - 1 ) > 0.75) storageLimit /= 2;
    result.retrieve(key, function(value){
      size--;
      delete value;
    })
  };
  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var hashFn = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
