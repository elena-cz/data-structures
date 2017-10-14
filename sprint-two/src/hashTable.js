

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // Get index for key
  // Get bucket at index
  // Check if bucket does not exist (is undefined) 
  // Add bucket at index --> []
  // If bucket exisits
  // If key already exists in bucket
  // Change value at key
  // Insert key value in the bucket

  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    bucket = [[k, v]];
    this._storage.set(index, bucket);
    console.log(bucket);  
  } else {
    bucket.forEach(function(tuple) {
      if (tuple[0] === k) {
        tuple[1] = v;
      } else {
        bucket.push([k, v]);
      }
    });
  }
  
  
  
};

HashTable.prototype.retrieve = function(k) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var res;
  if (bucket !== undefined) {
    bucket.forEach(function(tuple) {
      if (tuple[0] === k) {
        res = tuple[1];
      }
    }); 
    return res; 
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var res;
  if (bucket !== undefined) {
    bucket.forEach(function(tuple, idx) {
      if (tuple[0] === k) {
        bucket.splice(idx);
      }
    });   
  }
};


var hash = new HashTable;
//console.log(JSON.stringify(hash._storage));
hash.insert('cat', 'fiesty');
hash.insert('dog', 'happy');
hash.insert('fox', 'quick');
console.log(hash._storage);
//console.log(hash.retrieve('dog'));
hash.remove('dog');
//console.log(hash.retrieve('dog'));


/*
 * Complexity: What is the time complexity of the above functions?
 */


