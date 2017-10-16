//// Implementation using Object

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
// Time complexity - O(1)
Graph.prototype.addNode = function(node) {
  if (!this.nodes.hasOwnProperty(node)) {
    this.nodes[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// Time complexity - O(n)
Graph.prototype.contains = function(node) {
  return (this.nodes.hasOwnProperty(node));
};

// Removes a node from the graph.
// Time complexity - O(n) where n is number of nodes connected to deleted edge multiplied by the number of nodes connected to those nodes
Graph.prototype.removeNode = function(node) {
  var connectedNodes = this.nodes[node];

  delete this.nodes[node];

  for (var i = 0; i < connectedNodes.length; i++) {
    var edges = this.nodes[connectedNodes[i]];
    this._deleteEdge(edges, node);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Time complexity - O(n) where n is the number of nodes connected to fromNode
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
// Time complexity - O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
// Time complexity - O(n) where n is number of nodes connected to fromNode and toNode
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  var fromNodeEdges = this.nodes[fromNode];
  var toNodeEdges = this.nodes[toNode];

  this._deleteEdge(fromNodeEdges, toNode);
  this._deleteEdge(toNodeEdges, fromNode);

};

// Time complexity - O(n) where n is number of nodes connected to fromNode and toNode
Graph.prototype._deleteEdge = function(edgesArr, node) {
  var index = edgesArr.indexOf(node);
  return edgesArr.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
// Time complexity - O(n) where n is the total number of nodes
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this.nodes);
  return nodes.forEach(cb);
};


///// Implementation using Arrays ////

// Instantiate a new graph
var GraphArrays = function() {
  this.nodes = [];
  this.edges = []; 

};

// Add a node to the graph, passing in the node's value.
// Time complexity - O(1)
GraphArrays.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// Time complexity - O(n)
GraphArrays.prototype.contains = function(node) {
  return (this.nodes.indexOf(node) > -1);
};

// Removes a node from the graph.
// Time complexity - O(n)
GraphArrays.prototype.removeNode = function(node) {
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
// Time complexity - O(n)
GraphArrays.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  this.edges.forEach(function(edge) {
    
    if ((edge.indexOf(fromNode) > -1) && (edge.indexOf(toNode) > -1)) {
      result = true;
    }
  });
  return result; 
};

// Connects two nodes in a graph by adding an edge between them.
// Time complexity - O(1)
GraphArrays.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
// // Time complexity - O(n)
GraphArrays.prototype.removeEdge = function(fromNode, toNode) {
  
  for (var i = this.edges.length - 1; i > -1; i--) {
    if ((this.edges[i].indexOf(fromNode) > -1) && (this.edges[i].indexOf(toNode) > -1)) {
      this.edges.splice(i);
      return;
    }
  }  
};

// Pass in a callback which will be executed on each node of the graph.
// Time complexity - O(n)
GraphArrays.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the Time complexity of the above functions?
 */


