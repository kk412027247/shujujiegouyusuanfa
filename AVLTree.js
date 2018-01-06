function AVLTree(){
  const Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  const insertNode = function(node, element){
    if(node === null){
      node= new Node(element);
    }else if(element < node.key){
      node.left = insertNode(node.left, element);
      if(node.left !== null){
        if(heightNode(node.left) - heightNode(node.right) > 1){
          if(element < node.left.key){
            node = rotationLL(node);
          }else{
            node = rotationLR(node);
          }
        }
      }
    }else if(element>node.key){
      node.right = insertNode(node.right, element);
      if(node.right !== null){
        if(heightNode(node.left) - heightNode(node.right) < 1){
          if(element > node.right.key){
            node = rotationRR(node);
          }else{
            node = rotationRL(node);
          }
        }
      }
    }
    return node;
  };

  const heightNode = function(node){
    if(node === null){
      return -1;
    }else{
      return Math.max(heightNode(node.left),
        heightNode(node.right))+1;
    }
  };

  const rotationRR = function(node){
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  };

  const rotationLL = function(node){
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  };

  const rotationLR = function(node){
    node.left = rotationRR(node.left);
    return rotationLL(node);
  };

  const rotationRL = function(node){
    node.right = rotationLL(node.right);
    return rotationRR(node)
  }
}
