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

/*
 * Complexity: What is the time complexity of the above functions?
 */
