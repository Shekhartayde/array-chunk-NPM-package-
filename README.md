# array-chunk-NPM-package

Command : npm i @shekhartayde/array-chunk


1) import { __chunk } from '@shekhartayde/array-chunk'
   const arr=[2,45,3,5,6,76,4,2,1,3,4,23]
   console.log(__chunk(arr,5))
   
   provides => [ [ 2, 45, 3, 5, 6 ], [ 76, 4, 2, 1, 3 ], [ 4, 23 ] ]
   
   
2) import { __compact } from '@shekhartayde/array-chunk' 
    // removes falsey elements from array
    __compact([1,2,undefined,4,false,0,5,NaN])
    => [1,2,4,5]
