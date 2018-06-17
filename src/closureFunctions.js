// greetingFactory takes in an initial string that is stored and returns a function.
// The returned function should take in the name of the person to greet and return
// a complete greeting in the form of "{greeting}, {person}"

// EXAMPLE
// var helloGreeting = greeting('Hello');
// helloGreeting('Sam'); // 'Hello, Sam'
// var holaGreeting = greeting('Hola');
// holaGreeting('Shi-Hao'); // 'Hola, Shi-Hao'

var greetingFactory = function(greeting) {
  // INSERT CODE HERE
  return function(name){
  	return greeting + ', ' + name;
  }
}

// sumCalculator takes in an initial number that is stored and returns a function
// that continues adding to the stored value. The function returned by
// sumCalculator should take as many numbers as passed in, sum them to the
// stored value, and return the new total

// EXAMPLE
// var calculatorOne = sumCalculator(25);
// var calculatorTwo = sumCalculator(10);

// calculatorOne(1, 3) // 29
// calculatorTwo() // 10
// calculatorOne(1, 1, 4, 5) // 40
// calculatorTwo() // 10

var sumCalculator = function(initialValue) {
  // INSERT CODE HERE
   var store = initialValue;
  return function () {
  	if (arguments) {
  		var argsArr = Array.prototype.slice.call(arguments,0);
      //console.log(argsArr);
  		argsArr.forEach(function(elem){
  			store = store + elem;
        
  		});
      return store;
  	} else {
  		return store;
  	}
  }
}

// coinFlipTally should generate a storage object, take no arguments, and 
// return another object with two methods, makeCoinFlip and checkTally. The returned 
// object should contain no other properties

// makeCoinFlip should make a 50/50 coin flip, adding to a tally, and returning 
// 'heads' or 'tails'.
// checkTally should return a storage object containing the coin flips.

// example storage object format:
// {
//   heads: 4,
//   tails: 2
// }

// EXAMPLE

// var gameTally = coinFlipTally();
// gameTally.makeCoinFlip(); // returns 'heads' or 'tails'
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added

var coinFlipTally = function() {
  // INSERT CODE HERE
var storage = {};
 storage.heads  = 0;
 storage.tails = 0;
 extend (storage, storageMethods);
 return storage;
}

 var extend = function (ob1, ob2){
   for (var key in ob2){
     ob1[key]=ob2[key];
   }
   return ob1;
 };

storageMethods = {
	makeCoinFlip : function () {
    var num = Math.floor(Math.random() * Math.floor(2));
    console.log(num);
    if(num === 1) {
    this.heads++;
    //return heads;
    } else {
    this.tails++;
    	//return tails;
    }
	},
  checkTally : function(){
  	return this;
  }


};










module.exports = {
  greetingFactory: greetingFactory,
  sumCalculator: sumCalculator,
  coinFlipTally: coinFlipTally
}