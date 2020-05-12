#!/usr/bin/env ruby

p = 7
q = 2
p p.times.map{|i| ( q**i ).times.map{ rand( q**(p-i) ) }}.flatten.shuffle
