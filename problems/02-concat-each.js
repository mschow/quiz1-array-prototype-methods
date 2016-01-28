'use strict';

module.exports = function concatEach(strArray, prefix) {
  var concatArray = strArray.map(function(elem){
    return prefix + elem;
  });
  return concatArray;
};
