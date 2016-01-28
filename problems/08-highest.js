'use strict';

module.exports = function highest(numArray) {
  var highestNum = numArray.reduce(function(prevNum, curNum) {
      if(typeof prevNum !== 'number') {
        return curNum;
      } else if(typeof curNum !== 'number') {
        return prevNum;
      } else {
        return prevNum > curNum ? prevNum: curNum;
      }
    }, null);
  return highestNum;
}
