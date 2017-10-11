var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if (counter > 0) {
    
      var removedItem = storage[counter - 1];
      delete storage[counter - 1];
      counter--;
      return removedItem;
    }
  };

  someInstance.size = function() {
    var getKeys = Object.keys(storage);
    return getKeys.length; 
  };

  return someInstance;
};
