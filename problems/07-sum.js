'use strict';

module.exports = function sum(numArray) {
  var addedArray = numArray.reduce(function(prevNum, curNum){
    if(typeof curNum === 'string'){
    return prevNum;
  } else {
    return prevNum + curNum;
  };
}, 0);
  return addedArray;
};
