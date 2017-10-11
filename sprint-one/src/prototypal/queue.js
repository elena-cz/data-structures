var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = 0;

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;

};


queueMethods.dequeue = function() {
  if (this.last > this.first) {
    var removedItem = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return removedItem;
  }

};

queueMethods.size = function() {
  return (this.last - this.first);


};

