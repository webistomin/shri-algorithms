const bracketsPairs = (str) => {
  const brackets = {
    '(' : ')',
    '<' : '>',
    '{' : '}',
    '[' : ']',
  };
  
  const stack = [];
  
  for (let char of str) {
    if (char in brackets) {
      stack.push(char)
    } else if (Object.values(brackets).includes(char)) {
      if (stack[stack.length - 1] !==  Object.keys(brackets).find(key => brackets[key] === char)) {
        return false
      } else {
        stack.pop();
      }
    }
  }
  
  return stack.length === 0;
};

console.log(bracketsPairs('(hello)')); // true
console.log(bracketsPairs('(hello}')); // false
console.log(bracketsPairs('((({hello})))')); // true
console.log(bracketsPairs('{(0})')); // false
console.log(bracketsPairs('{(0')); // false
