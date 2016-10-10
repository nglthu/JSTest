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