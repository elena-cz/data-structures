var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// Time complexity: Constant - O(1)
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);  
  return child;
};

// Time complexity: Linear - O(n)
treeMethods.contains = function(target) {
  var result = false;

  if (this.value === target) {
    result = true;
  } 
  var children = this.children;
  if (children.length > 0) {  
  //   for (var i = 0; i < children.length; i++) {
  //     var childResults = children[i].contains(target);
  //     result = result || childResults;
  //   }
    children.forEach(function(child) {
      var childResults = child.contains(target);
      result = result || childResults;
    });
  }
  return result;

};






/*
 * Complexity: What is the time complexity of the above functions?
 */
