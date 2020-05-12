#!/usr/bin/env node

var n = 7;
var temp = [];
var i;
for ( i = 0; i < n; i++ ) {
	var i2;
	for ( i2 = 0; i2 < Math.pow( 2, i ); i2++ ) {
		var r = Math.floor( Math.random() * Math.pow( 2, n-i ));
		temp.push( r );
	}
}
var result = [];
while ( temp.length > 0 ){
	var i = Math.floor( Math.random() * temp.length );
	var v = temp.splice( i, 1 )[0];
	result.push( v );
}

console.log( result );
