const array = [1, 5, 6, 2, 10, 22, 423, 12];
const array2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        const temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
};

// [ 1,  2,  5, 6, 10, 12, 22, 423 ]
bubbleSort(array);
console.log(array);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
bubbleSort(array2);
console.log(array2);
