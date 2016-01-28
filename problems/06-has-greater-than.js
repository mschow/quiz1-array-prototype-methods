'use strict';

module.exports = function hasGreaterThan(numArray, max) {
  var isGreaterThan = numArray.some(function(elem){
      return elem > max;
  });
  return isGreaterThan;
};
