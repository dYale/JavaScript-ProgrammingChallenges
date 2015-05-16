/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/
  
var bind = function(func, obj) {

	if(typeof func !== function){
		console.log('wrong!');
	} else {
		return function(){
		var args= array.prototype.slice.call(arguments);
		return func.apply(obj, obj.concat.(args))
							}
						}
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(


	if(typeof this !== function){
		throw new TypeError "CONDITIONER IS BETTER!";
	} else {
		var that = this;
		var internal = function(){
		var arg = array.prototype.slice.call(arguments, 1);
		return that.apply(obj ? obj : this,
								arg.concat.(Array.prototype.slice.call(arguments)))
							}

	}
	return internal;
) {
  // TODO: Your code here
};
