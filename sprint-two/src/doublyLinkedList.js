var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity: O(1) - constant
  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }

    newNode.previous = list.tail;
    list.tail = newNode;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);

    if (list.tail === null) {
      list.tail = newNode;
    } else {
      list.head.previous = newNode;
    }
    
    newNode.next = list.head;
    list.head = newNode;

  };

  // Time complexity: O(1) - constant
  list.removeHead = function() {
    var removedItem = list.head.value;
    list.head = list.head.next;
    if (list.head !== null) {
      list.head.previous = null;  
    }
    
    return removedItem;
  };

  list.removeTail = function(value) {
    var removedItem = list.tail.value;
    list.tail = list.tail.previous;
    if (list.tail !== null) {
      list.tail.next = null;  
    }
    return removedItem;   
  };

  // Time complexity: O(n) - linear
  list.contains = function(target, node) {
    var node = node || list.head;
    
    if (node.value === target) {
      return true;
    } else {
      if (node.next !== null) {
        node = node.next;
        return list.contains(target, node);
      } else {
        return false;
      }
    }

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  list.  

 */
