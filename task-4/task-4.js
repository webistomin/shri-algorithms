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
