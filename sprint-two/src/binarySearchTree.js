var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(binaryTreeMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

var binaryTreeMethods = {};

// Time complexity - O(log(n)
binaryTreeMethods.insert = function(value) {
  // Create new tree for value
  // if value > nodeValue, then go right
    // if rightNode is null
      // asign rightNode to  ewNode
    // if rightNode is not null
      // call insert on rightNod
  // else go left  
    // if leftNode is null
      // assign leftNode to newNode
    // if leftNode is not null
     // call insert on leftNode
     
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newNode = new BinarySearchTree(value);
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
};

// Time complexity - Linear O(n)
binaryTreeMethods.contains = function(value) {
  // if value equals nodeValue
    // return true
  // otherwise if value is less than nodeValue AND node exists
    // then call contains with leftNode value
  // otherwise if value is greater than value at rightNode and rightNode exists
    // then call contains on rightNode value
  // else return false
  if (value === this.value) {
    return true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  } else {
    return false;
  }

};

// Time complexity - Linear O(n)
binaryTreeMethods.depthFirstLog = function(cb) {
  // call callback on value
  // if right exists
    // call depthFirstLog on rightNode
  // if left exists
   // call depthFirstLog on leftNode

  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }   

};



// Testing

// var ourTree = new BinarySearchTree(8);
// console.log(JSON.stringify(ourTree));
// ourTree.insert(5); 
// ourTree.insert(10); 
// ourTree.insert(11); 
// ourTree.insert(4); 
// console.log(JSON.stringify(ourTree));

// console.log(typeof BinarySearchTree.insert);




/*
 * Complexity: What is the time complexity of the above functions?
 */
