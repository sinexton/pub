#!/usr/bin/env python3

import random

n = 7
result = []
for i in range( n ):
	for i2 in range( 2**i ):
		result.append( random.randint( 0, 2**(n-i) - 1 ))
random.shuffle( result )

print( result )
