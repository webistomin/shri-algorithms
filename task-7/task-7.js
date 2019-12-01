const binarySearch = (list, item) => {
  let left = 0;
  let right = list.length - 1;
  let mid = null;
  let guess = null;
  
  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    guess = list[mid];
    
    if (guess === item) {
      return mid;
    } else if (guess < item) {
      left = mid - 1;
    } else {
      right = mid + 1;
    }
  }
  
  return null;
};

console.log('index: ', binarySearch([1,3,5,7,8,9,10,11,12,13,14,15,16], 5));
console.log('index: ', binarySearch([1,3,5,7,8,9,10,11,12,13,14,15,16], 15));
