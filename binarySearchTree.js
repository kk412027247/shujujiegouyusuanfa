function BinarySearchTree(){
  const Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };
  let root = null;

  this.insert = function(key){
    const newNode = new Node(key);
    if(root === null){
      root = newNode;
    }else{
      insertNode(root, newNode)
    }
  };

  const insertNode = function(node, newNode){
    if(newNode.key<node.key){
      if(node.left === null){
        node.left = newNode;
      }else{
        insertNode(node.left, newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode;
      }else{
        insertNode(node.right, newNode)
      }
    }
  };
  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root, callback);
  } ;
  const inOrderTraverseNode = function(node, callback){
    if(node !== null){
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root, callback);
  };

  const preOrderTraverseNode = function(node, callback){
    if(node !== null){
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  this.postOrderTraverse = function(callback){
    postOrderTraverseNode(root, callback)
  };

  const postOrderTraverseNode = function(node, callback){
    if(node !== null){
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  this.min = function(){
    return minNode(root);
  } ;

  const minNode = function(node){
    if(node){
      while(node && node.left !== null){
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  this.max = function(){
    return maxNode(root)
  };

  const maxNode = function(node){
    if(node){
      while(node && node.right !== null){
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  this.search = function(key){
    return searchNode(root, key);
  };

  const searchNode = function(node, key){
    if(node === null){
      return false;
    }
    if(key < node.key){
      return searchNode(node.left, key)
    }else if(key > node.key){
      return searchNode(node.right, key)
    }else{
      return true;
    }
  };

  this.remove = function(key){
    root = removeNode(root, key)
  };

  const removeNode = function(node, key){
    if(node === null){
      return null;
    }
    if(key<node.key){
      node.left = removeNode(node.left, key);
      return node;
    }else if(key > node.key){
      node.right = removeNode(node.right, key);
      return node;
    }else{
      if(node.left === null && node.right === null){
        node = null;
        return node;
      }
      if(node.left === null){
        node = node.right;
        return node;
      }else if(node.right === null){
        node = node.left;
        return node;
      }
      const aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right ,aux.key);
      return node;
    }
  };

  const findMinNode = function(node){
    while(node && node.left !== null){
      node = node.left;
    }
    return node;
  }

}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(6);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);




tree.inOrderTraverse(console.log);
tree.preOrderTraverse(console.log);
tree.postOrderTraverse(console.log);
console.log(tree.min(), tree.max());
console.log(tree.search(5));
tree.remove(5);
console.log(tree.search(5));

