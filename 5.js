const BinarySearchTree = require('./BinarySearchTree');

const bst = new BinarySearchTree();

bst.insert(25);
bst.insert(15);
bst.insert(50);
bst.insert(10);
bst.insert(24);
bst.insert(35);
bst.insert(70);
bst.insert(4);
bst.insert(12);
bst.insert(18);
bst.insert(31);
bst.insert(44);
bst.insert(66);
bst.insert(90);
bst.insert(22);

function inOrder(bst) {
  //Check for null entry
  if (bst == null) {
    return null;
  } else {
    //Set an array to contain the result
    let result = [];
    //Set a recursive function that intakes the BST
    traverseBST = (node) => {
      //"Short circuit evaluation"
      //If node.left exists, pass node.left recursively
      node.left && traverseBST(node.left);
      //Push node.key to the result array
      result.push(node.key);
      //If node.right exists, pass it recursively
      node.right && traverseBST(node.right);
    };

    traverseBST(bst);
    return result;
  }
}

function preOrder(bst) {
  //Check for null entry
  if (bst == null) {
    return null;
  } else {
    //Set an array to contain the result
    let result = [];
    //Set a recursive function that intakes the BST
    traverseBST = (node) => {
      //"Short circuit evaluation"
      //Push node.key to the result array
      result.push(node.key);
      //If node.left exists, pass node.left recursively
      node.left && traverseBST(node.left);

      //If node.right exists, pass it recursively
      node.right && traverseBST(node.right);
    };

    traverseBST(bst);
    return result;
  }
}

function postOrder(bst) {
  //Check for null entry
  if (bst == null) {
    return null;
  } else {
    //Set an array to contain the result
    let result = [];
    //Set a recursive function that intakes the BST
    traverseBST = (node) => {
      //"Short circuit evaluation"

      //If node.left exists, pass node.left recursively
      node.left && traverseBST(node.left);

      //If node.right exists, pass it recursively
      node.right && traverseBST(node.right);
      //Push node.key to the result array
      result.push(node.key);
    };

    traverseBST(bst);
    return result;
  }
}

console.log(inOrder(bst));
console.log(preOrder(bst));
console.log(postOrder(bst));
