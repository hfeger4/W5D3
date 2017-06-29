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
    let answer = exponent(base, exp / 2);
    return answer * answer ;
  }
  else {
    let answer = base * (exponent(base, (exp - 1)/2));
    return answer * answer ;
  }
}

function fibonacci(n){
  if (n < 3) return [1, 1].slice(0, n);

  let fibs = fibonacci(n-1);
  fibs.push(fibs[fibs.length -1] + fibs[fibs.length - 2]);
  return fibs;
}


function bsearch(nums,target){
  if (nums.length === 0) {
    return -1;
  }
  let probe_index = Math.floor(nums.length/2);
  if (target === nums[probe_index]){
    return probe_index;
  }
  else if(target < nums[probe_index]){
    return bsearch(nums.slice(0,probe_index), target);
  }
  else{
    let sub_answer = bsearch(nums.slice(probe_index+1), target);

    return (probe_index + 1 + sub_answer);
  }
}

function mergeSort(array) {
  if (array.length === 1){
    return array;
  }

  let midPoint = Math.floor(array.length/2);
  let left = array.slice(0,midPoint);
  let right = array.slice(midPoint+1);
  let sorted_left = mergeSort(left);
  let sorted_right = mergeSort(right);
  merge(sorted_left,sorted_right);
}

function merge(left, right){
  let mergedArray = [];
  while ((left.length !== 0) || (right.length !== 0))  {
    if (left[0] < right[0]){
      mergedArray.push(left.shift);
    } else{
      mergedArray.push(right.shift);
      }
  }
  return (mergedArray + left + right);
}
