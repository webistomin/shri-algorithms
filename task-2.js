const array = [1, 5, 6, 2, 10, 22, 423, 12];
const array2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    let temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }
};

// [ 1,  2,  5, 6, 10, 12, 22, 423 ]
selectionSort(array);
console.log(array);


 // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
selectionSort(array2);
console.log(array2);
