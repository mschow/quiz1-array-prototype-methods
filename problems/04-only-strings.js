'use strict';

module.exports = function onlyStrings(inputArray) {
  inputArray = inputArray.filter(function(elem){
    return typeof elem == 'string';
  });
  return inputArray;
};
