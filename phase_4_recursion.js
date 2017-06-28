function range(start, end) {
  if (start === end) {
    return [];
  }

  let r = range(start, end - 1);
  r.push(end - 1);
  return r;
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let sum = arr[0];
  let r = sumRec(arr.slice(1,arr.length));
  sum += r;
  return sum;
}

function exponent(base, exp){
  if (exp === 0 ){
    return 1;
  }

  return base * exponent(base, exp - 1);
}

function exponent(base, exp){
  if (exp === 0 ){
    return 1;
  }
  if (exp === 1){
    return base;
  }
  if (exp%2 === 0) {
    return (exponent(base, exp / 2))^2;
  else
  }
  return base * exponent(base, exp - 1);
}
