#!/usr/bin/env Rscript

p <- 7
q <- 2
result <- c()
for ( i in 0:(p-1) ){
	for ( i2 in 0:(q^i-1) ){
		r <- sample(0:( q^(p-i)-1 ),1)
		result <- c( result, r )
	}
}
result <- sample( result )
print( result )
