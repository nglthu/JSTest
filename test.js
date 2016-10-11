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
}
var move = function(){
	this.loc ++;
}

var amy = carlike({},1);
amy.move();
console.log(amy.loc);