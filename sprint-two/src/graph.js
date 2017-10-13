

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = []; 

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodes.indexOf(node) > -1);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // [[3, 2], [1, 4], [4, 2]
  // check each item in edges array to see if node is included
  // if node is included, delete item
  
  var nodeIndex = this.nodes.indexOf(node);
  this.nodes.splice(nodeIndex);  

  // for (var i = this.edges.length - 1; i > -1; i--) {
  //   if (edge.indexOf(node) > -1) {
  //     this.edges.splice(i);
  //   }
  // }

  this.edges.forEach(function(edge, index) {
    if (edge.indexOf(node) > -1) {
      this.edges.splice(index);
    }
  });

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  this.edges.forEach(function(edge) {
    if ((edge.indexOf(fromNode) > -1) && (edge.indexOf(toNode) > -1)) {
      return true;
    } else {
      return false;
    }

  });
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges.forEach(function(edge, index) {
    if (edge.includes(fromNode) && edge.includes(toNode)) {
      this.edges.splice(index);
      return;
    } 

  });
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


