Array.prototype.bubblesort = function() {
    for (let i = 0; i < (this.length-1) ; i++){
      for (let j = (i+1); j < this.length; j++){
        if (this[i] > this[j]){
          let temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }
  return this;
};

String.prototype.substrings = function() {
  const newArr = [];
    for (let i = 0; i < this.length; i++){
      for (let j = (i+1); j < (this.length + 1); j++){
        newArr.push(this.split('').slice(i, j));
    }
  }
return newArr;
};
