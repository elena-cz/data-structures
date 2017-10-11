var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;




};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter ++;

};

stackMethods.pop = function() {
  var current = this.counter;
  if (current > 0) {
    var removedItem = this.storage[current - 1];
    delete this.storage[current - 1 ];
    this.counter--;
    return removedItem;
  }
  

};

stackMethods.size = function() {
  return this.counter;
  

};


