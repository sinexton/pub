#!/usr/bin/env ruby

n = 7
p n.times.map{|i| ( 2**i ).times.map{ rand( 2**(n-i) ) }}.flatten.shuffle
