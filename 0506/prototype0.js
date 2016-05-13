/**
 * Created by wuzhitian on 16/5/6.
 */
'use strict';

function Person(name){
    this.name = name;
}
function Mother(){
    this.age = 34;
    this.name = "MMM";
    this.home = ["AAA", "BBB"];
}
Mother.prototype = {
    age: 18,
    hair: "yellow",
    home: ["CCC", "DDD"]
}

Person.prototype = new Mother();

var p1 = new Person("p1");
var p2 = new Person("p2");
p1.home[0] = "GGG";

////////////////////////////////////
//原型可以修改, 但是不能覆盖;
Person.prototype.lastName = "UUUU";
Person.prototype = {
    age: 99999,
    name: "Person"
};
////////////////////////////////////



var aa = 0;

