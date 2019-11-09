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


