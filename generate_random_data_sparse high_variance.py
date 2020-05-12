#!/usr/bin/env python3

import random
p = 10
q = 2
result = []
for i in range( p ):
	for i2 in range( q**i ):
		result.append( random.randint( 0, q**(p-i) - 1 ))
random.shuffle(result)
