/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 * 
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail.value;   //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(value){
	this.value = value;
	this.head = 0;
	this.tail = 0;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){

	this.tail++;
	this[this.tail] = new this.makeNode(value);
};

LinkedList.prototype.removeHead = function(){

	var temp = this[this.head];
	this.head++;
	return temp.value;
};


LinkedList.prototype.contains = function(value){
	for(var val in this){
		if(val === this[val].value){
			return true;
		}
	}
	return false;
};

LinkedList.prototype.makeNode = function(value){

	this.value = value;
    this.next = null;

};
