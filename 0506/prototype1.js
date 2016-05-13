/**
 * Created by wuzhitian on 16/5/6.
 */
// 组合继承
'use strict';

function Mother(age){
    this.age = age;
    this.hobby = ['running', 'football'];
}

Mother.prototype.showAge = function(){
    console.log(this.age);
}

function Person(name, age){
    Mother.call(this, age);
    this.name = name;
}

Person.prototype = new Mother();
Person.prototype.constructor = Person;
Person.prototype.showName = function(){
    console.log(this.name);
}

var p1 = new Person("Jack", 20);
p1.hobby.push("backetball");

var p2 = new Person("Mark", 18);


var aa = 0;