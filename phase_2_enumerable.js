Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const newArr = [];
  this.myEach(function(el){
    newArr.push(callback(el));
  });
  return newArr;
};
// Array.prototype.myMap = function(callback) {
//   const newArr = [];
//   for(let i = 0; i < this.length; i++){
//     newArr.push(callback(this[i]));
//   }
//   return newArr;
// };
Array.prototype.myReduce = function(callback, initialValue) {
  let sum = 0;
  if (initialValue) {
    sum += initialValue[0];
  }
  this.myEach(function(el){
    sum += el;
  });
  return sum;
};
