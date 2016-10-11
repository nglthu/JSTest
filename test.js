var gold={a:1};
console.log(gold.a)

//one time copying
//var blue=extends({},gold);
//console.log(blue);

//on-going copying
var rose=Object.create(gold);
gold.z=2;
console.log(rose.a);
console.log(rose.z);
console.log(rose.toString());

//binding function
var carlike=function(obj, loc){
	obj.loc=loc;
	
	obj.move =  move;
	return obj;
};
var move = function(){
	this.loc ++;
};

var amy = carlike({},1);
amy.move();
console.log(amy.loc);

//function object
var makeAnObject = function () {
	return function(){};//return function object
};
var obj1 =  makeAnObject();
var obj2 = makeAnObject();
//return false, different identity
console.log("function object:",(obj1===obj2));