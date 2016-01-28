'use strict';

module.exports = function even(numArray) {
  numArray = numArray.filter(function(elem){
    return elem % 2 == 0;
  });
  return numArray;
};
