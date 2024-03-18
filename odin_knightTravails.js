class Node {
  constructor(value, pred) {
    this.value = value;
    this.prev = pred;
  }
}

function knightTravails(start, end) {
  let nodes = [];
  let states = [];
  nodes.push(new Node(end, null));
  let currNode;

  while (!startState(nodes, start)) {
    currNode = nodes.shift();
    let moves = knightMoves(currNode.value);
    for (let i = 0; i < moves.length; i++) {
      states.push(moves[i]);
    }

    while (states.length > 0) {
      let curr = new Node(states.shift(), currNode);
      nodes.push(curr);
    }
  }
  printPath(start, currNode);
}

function knightMoves(input) {
  let possibleMoves = [];
  possibleMoves.push(
    [input[0] - 2, input[1] + 1],
    [input[0] - 2, input[1] - 1],
    [input[0] - 1, input[1] + 2],
    [input[0] - 1, input[1] - 2],
    [input[0] + 1, input[1] + 2],
    [input[0] + 1, input[1] - 2],
    [input[0] + 2, input[1] + 1],
    [input[0] + 2, input[1] - 1]
  );

  possibleMoves = possibleMoves.filter((e) => {
    if (e[0] < 8 && e[0] >= 0 && e[1] < 8 && e[0] >= 0) {
      return e;
    }
  });
  return possibleMoves;
}

function startState(states, start) {
  for (let i = 0; i < states.length; i++) {
    if (states[i].value[0] == start[0] && states[i].value[1] == start[1]) {
      return true;
    }
  }
  return false;
}

function printPath(start, test) {
  let path = [start];
  while (test !== null) {
    path.push(test.value);
    test = test.prev;
  }
  let stringpath = "";
  let i = 0;
  while (i <= path.length - 1) {
    if (i == path.length - 1) {
      stringpath += "[" + path[i] + "]";
    } else {
      stringpath += "[" + path[i] + "]" + " -> ";
    }
    i++;
  }
  console.log(
    "The shortest path is " +
      stringpath +
      " with distance " +
      (path.length - 1) +
      ""
  );
}

let test = knightTravails([2, 3], [4, 6]);
