'use strict';

module.exports = function hasString(inputArray) {
  var hasString = inputArray.some(function(elem){
    return typeof elem == 'string';
  });
  return hasString;
};
