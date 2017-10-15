

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

// Time complexity - Average O(1), worst O(n)
HashTable.prototype.insert = function(k, v) {
  // get the index for the given key
  // get the bucket stored at index
  // if our bucket is undefined
  // set the value of the bucket with the current pair (nested in another array)
  // if our bucket at index is not undefined
  // loop through each item in bucket
  // to see if any of the keys match k
  // if the keys match, replace the value with v
  // otherwise push the new key value pair to this bucket

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var oldVal = tuple[1];
      tuple[1] = v;
      return oldVal;
    }
  }

  bucket.push([k, v]);
  this._size++;
  this._storage.set(index, bucket);

  console.log(bucket);

  if (this._size > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }

  return undefined;

};

// Time complexity - Average O(1), worst O(n)
HashTable.prototype.retrieve = function(k) {
  // get the index for the given k
  // get the bucket at that index
  // if the bucket is not undefined
  // loop through each pair in the bucket
  // if any of the stored keys match k, return the value
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];;
  var result;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      result = tuple[1];
    }
  }

  return result; 
};

// Time complexity - Average O(1), worst O(n)
HashTable.prototype.remove = function(k) {
  // get index for given k
  // get bucket at given index
  // if bucket is not undefined
  // loop through each pair in the bucket
  // if the key matches k
  // remove pair from bucket
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        this._size--;
      }
    }
  }

  if (this._size < this._limit * 0.25) {
    this._resize(this._limit / 2);
  }

};

HashTable.prototype._resize = function(newLimit) {
  // store old hashTable storage
  // Create new limitedArray
  // Iterate through each item in old hash table
    // Add item to new hashTable 

  var oldHashTable = this._storage;
  
  // min size of 8, return if nothing to do!
  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) { return; }

  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._size = 0;

  
  oldHashTable.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
    }
  }.bind(this));
};



var hash = new HashTable;
//console.log(JSON.stringify(hash._storage));
hash.insert('cat', 'fiesty');
hash.insert('dog', 'happy');
hash.insert('fox', 'quick');
console.log(JSON.stringify(hash));
hash._resize(16);
//console.log(hash.retrieve('dog'));
// hash.remove('dog');
//console.log(hash.retrieve('dog'));
console.log(JSON.stringify(hash._storage));

/*
 * Complexity: What is the time complexity of the above functions?
 */


