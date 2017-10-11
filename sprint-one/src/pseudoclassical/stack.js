var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;

};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    var removedItem = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter--;
    return removedItem;

  }

};

Stack.prototype.size = function() {
  return this.counter;

};


