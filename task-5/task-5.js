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
