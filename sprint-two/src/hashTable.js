

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
  
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    bucket = [[k, v]];
    this._size++;
    this._storage.set(index, bucket);
    console.log(bucket);  
  } else {
    bucket.forEach(function(tuple) {
      if (tuple[0] === k) {
        tuple[1] = v;
      } else {
        bucket.push([k, v]);
        this._size++;
      }
    });
  }
};

// Time complexity - Average O(1), worst O(n)
HashTable.prototype.retrieve = function(k) {
  // get the index for the given k
  // get the bucket at that index
  // if the bucket is not undefined
  // loop through each pair in the bucket
  // if any of the stored keys match k, return the value
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
  if (bucket !== undefined) {
    // bucket.forEach(function(tuple, idx) {
    //   if (tuple[0] === k) {
    //     bucket.splice(idx, 1);
    //     this._size--;
    //   }
    // }.bind(this));   
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        this._size--;
      }
    }
  }
};



// var hash = new HashTable;
// //console.log(JSON.stringify(hash._storage));
// hash.insert('cat', 'fiesty');
// hash.insert('dog', 'happy');
// hash.insert('fox', 'quick');
// console.log(hash._storage);
// //console.log(hash.retrieve('dog'));
// hash.remove('dog');
// //console.log(hash.retrieve('dog'));


/*
 * Complexity: What is the time complexity of the above functions?
 */


