var gold = {
	a: 1
};
console.log(gold.a)
	//one time copying
	//var blue=extends({},gold);
	//console.log(blue);
	//on-going copying
var rose = Object.create(gold);
gold.z = 2;
console.log(rose.a);
console.log(rose.z);
console.log(rose.toString());
//binding function
var carlike = function (obj, loc) {
	obj.loc = loc;
	obj.move = move;
	//can be moved move inside function
	//obj.move = function(){
	//	obj.loc++
	//}
	return obj;
};
var move = function () {
	this.loc++;
};
var amy = carlike({}, 1);
amy.move();
console.log(amy.loc);
//function object
var makeAnObject = function () {
	return function () {}; //return function object
};
var obj1 = makeAnObject();
var obj2 = makeAnObject();
//return false, different identity
console.log("function object:", (obj1 === obj2));
//Class-contractor-method
/*
var Car = function(loc){
	obj ={loc : loc};
	obj.moveTest = moveTest();
	obj.on = on();
	obj.off = off();
};

//implement method for class
var moveTest = function(){
	this.loc++;
	
	;
};

var on = function(){
	console.log("testing:");
	
};

var off = function(){
	console.log("test implement method");
};

var ben = new Car(5);
ben.moveTest;
console.log(ben.loc);
ben.on;
ben.off;
*/
var Car = function (loc) {
	this.loc = loc;
	return this;
};
Car.prototype.moveCar = function () {
	this.loc++;
	console.log("Test Movecar method");
};
/*Car.prototype = {
	on: function () {
		console.log("Test ON method");
	}
	, off: function () {
		console.log("test OFF method");
	}
};*/
var ben = new Car(5);
console.log(" constructor" + ben.constructor);
/*ben.on();
ben.off();*/
ben.moveCar();
//sub class and class

var Van = function(loc){
	Car.call(this, loc);
	
	
};
Van.prototype = Object.create(Car.prototype);
Van.prototype.call = function (){
	console.log("Test Van call method:")
};
var van = new Van(5);
van.moveCar;
van.call();