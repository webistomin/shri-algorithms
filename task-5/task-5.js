const bracketsPairs = (str) => {
  const bracketsPair = {
    ')' : '(',
    '>' : '<',
    '}' : '{'
  };
  
  const openBrackets = ['(', '<', '{'];
  const closeBrackets = [')', '>', '}'];
  const stack = [];
  
  for (let char of str) {
    
    if (openBrackets.includes(char)) {
      stack.push(char)
    }
    
    if (closeBrackets.includes(char)) {
      if (stack[stack.length - 1] !== bracketsPair[char]) {
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
