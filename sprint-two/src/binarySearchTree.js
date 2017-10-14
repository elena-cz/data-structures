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

// Time complexity - Linear O(n)
binaryTreeMethods.breadthFirstLog = function(cb, nodes) {
  // if nodes in undefined then parents should equal [this]
  // set parents equal to nodes
  // if the length of nodes is greater than 0 
      //create empty children array
      //for each parent node 
        //call the callback on each nodes value
        // if left exists push to children
        // if right exists push to children
      // call breadthFirstLog on children
  var parents = nodes;
  if (parents === undefined) {
    parents = [this];
  } else {
    parents = nodes;
  }

  if (parents.length > 0) {
    var children = [];
    parents.forEach(function(parentNode) {
      cb(parentNode.value);
      if (parentNode.left) {
        children.push(parentNode.left);
      }
      if (parentNode.right) {
        children.push(parentNode.right);
      }
    });
    binaryTreeMethods.breadthFirstLog(cb, children);
  }
  

};



// Testing

// var ourTree = new BinarySearchTree(8);
// ourTree.insert(5); 
// ourTree.insert(10); 
// ourTree.insert(11); 
// ourTree.insert(4); 
// ourTree.insert(6);
// ourTree.insert(1);  

// var array = [];
// var func = function(value) { array.push(value); };

// ourTree.breadthFirstLog(func);
// console.log(array);



/*
 * Complexity: What is the time complexity of the above functions?
 */
