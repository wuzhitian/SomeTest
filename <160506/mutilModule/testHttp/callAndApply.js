/**
 * Created by wuzhitian on 16/4/15.
 */
'use strict';
function aa(a, b, c){
    console.log("aaaaa: ", a, b, c);
}

function bb(){
    aa.apply(null, arguments);
}

bb(1,2,3);