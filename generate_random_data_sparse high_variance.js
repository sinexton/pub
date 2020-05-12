#!/usr/bin/env node

var p = 7;
var q = 2;
var temp = [];
var i;
for (i = 0; i < p; i++) {
	var i2;
	for (i2 = 0; i2 < Math.pow(q,i); i2++) {
		var r = Math.floor( Math.random() * Math.pow(q,p-i) );
		temp.push( r );
	}
}
var result = [];
while ( temp.length > 0 ){
	var i = Math.floor(Math.random() * temp.length );
	var v = temp.splice( i, 1 )[0];
	result.push( v );
}
console.log( result );
