# Хакатон по алгоритмам

## 1. Сортировка пузырьком
```js
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
```

## 2. Сортировка выбором
```js
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
```

## 3. Поиск в глубину

```js
const obj = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    }
  },
  right: {
    value:3,
    left: {
      value: 6,
    },
    right: {
      value: 7
    }
  }
};

const walk = (graph) => {
  if (graph.left) {
    walk(graph.left);
  }
  
  if (graph.right) {
    walk(graph.right);
  }
  
  console.log(graph.value);
};


// 4 5 2 6 7 3 1
walk(obj);
```

## 4. Поиск в ширину
```js
const obj = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    }
  },
  right: {
    value:3,
    left: {
      value: 6,
    },
    right: {
      value: 7
    }
  }
};

const walk = (graph) => {
  const stack = [];
  stack.push(graph);
  
  while (stack.length) {
    let node = stack.shift();
    console.log(node.value);
  
    if (node.left) {
      walk(node.left)
    }
  
    if (node.right) {
      walk(node.right)
    }
  }
};

walk(obj);
```

## 5. Баланс скобок
```js
const bracketsPairs = (str) => {
  const openBracketsPair = {
    '(' : ')',
    '<' : '>',
    '{' : '}'
  };
  
  const closeBracketsPair = {
    ')' : '(',
    '>' : '<',
    '}' : '{'
  };
  
  const stack = [];
  
  for (let char of str) {
    
    if (char in openBracketsPair) {
      stack.push(char)
    }
    
    if (char in closeBracketsPair) {
      if (stack[stack.length - 1] !== closeBracketsPair[char]) {
        return false
      } else {
        stack.pop();
      }
    }
  }
  
  return stack.length <= 0;
};

console.log(bracketsPairs('(hello)')); // true
console.log(bracketsPairs('(hello}')); // false
console.log(bracketsPairs('((({hello})))')); // true
console.log(bracketsPairs('{(0})')); // false
console.log(bracketsPairs('{(0')); // false
```

## 6. Поиск простых чисел
```js
const isPrime = (number) => {
  for (let i = 3; Math.pow(i, 2) <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
};

let cache = new Map();

const getAllPrimes = (n) => {
  let result = [2];
  
  if (n < 2) {
    return [];
  }
  
  if (n === 2) {
    return result;
  }
  
  if (!cache.has(n)) {
    for (let i = 3; i <= n; i += 2) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    cache.set(n, result);
    console.log('set cache');
    return result;
  } else {
    console.log('load from cache');
    return cache.get(n)
  }
};
```
