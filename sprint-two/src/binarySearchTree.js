var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


// Time complexity -
BinarySearchTree.prototype.insert = function(value) {
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
     
  if (value > this.value) {
    console.log(this.right + 'right');
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    console.log(this.left + 'left');
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }


};

// Time complexity -
BinarySearchTree.prototype.contains = function() {
  //

};

// Time complexity -
BinarySearchTree.prototype.depthFirstLog = function() {
  //

};



// Testing

var ourTree = new BinarySearchTree(8);
console.log(ourTree + 'ourTree');
ourTree.insert(5); 
ourTree.insert(10); 
ourTree.insert(11); 
ourTree.insert(4); 




/*
 * Complexity: What is the time complexity of the above functions?
 */
