// Implementation using object

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};
// time complexity - 0(1)
setPrototype.add = function(item) {
  if (!this._storage.hasOwnProperty(item)) {
    this._storage[item] = undefined;
  }  
};

// time complexity - O(1)
setPrototype.contains = function(item) {
  return (this._storage.hasOwnProperty(item));
};

//// time complexity -O(1)
setPrototype.remove = function(item) {
  var deletedItem = this._storage[item];
  delete this._storage[item];
  return this._storage[item];
};


/// Implementation using array

/*
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};
// time complexity - 0(n)
setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }  
};

// time complexity - O(n)
setPrototype.contains = function(item) {
  return (this._storage.indexOf(item) > -1);
};

//// time complexity -O(n)
setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  this._storage.splice(index);
};
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
