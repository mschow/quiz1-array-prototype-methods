'use strict';

module.exports = function doubleArray(numArray) {
  numArray = numArray.map(function (elem){
    return elem * 2;
  });
  return numArray;
};
