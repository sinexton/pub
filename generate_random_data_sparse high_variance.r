#!/usr/bin/env Rscript

n <- 7
result <- c()
for ( i in 0:( n-1 ) ){
	for ( i2 in 0:( 2^i-1 ) ){
		r <- sample(0:( 2^(n-i)-1 ),1)
		result <- c( result, r )
	}
}
result <- sample( result )

print( result )
