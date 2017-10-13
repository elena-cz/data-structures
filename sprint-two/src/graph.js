

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = []; 

};

// Add a node to the graph, passing in the node's value.
// time complexity - O(1)
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// time complexity - O(n)
Graph.prototype.contains = function(node) {
  return (this.nodes.indexOf(node) > -1);
};

// Removes a node from the graph.
// time complexity - O(n)
Graph.prototype.removeNode = function(node) {
  // [[3, 2], [1, 4], [4, 2]
  // check each item in edges array to see if node is included
  // if node is included, delete item
  
  var nodeIndex = this.nodes.indexOf(node);
  this.nodes.splice(nodeIndex);  

  for (var i = this.edges.length - 1; i > -1; i--) {
    if (this.edges[i].indexOf(node) > -1) {
      this.edges.splice(i);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// time complexity - O(n)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  this.edges.forEach(function(edge) {
    
    if ((edge.indexOf(fromNode) > -1) && (edge.indexOf(toNode) > -1)) {
      result = true;
    }
  });
  return result; 
};

// Connects two nodes in a graph by adding an edge between them.
// time complexity - O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
// // time complexity - O(n)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  for (var i = this.edges.length - 1; i > -1; i--) {
    if ((this.edges[i].indexOf(fromNode) > -1) && (this.edges[i].indexOf(toNode) > -1)) {
      this.edges.splice(i);
      return;
    }
  }  
};

// Pass in a callback which will be executed on each node of the graph.
// time complexity - O(n)
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


