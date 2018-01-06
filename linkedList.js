function LinkedList(){
  
  const Node = function(element){
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function (element){
    const node = new Node(element);
    let current;
    if(head === null){
      head = node;
    }else{
      current = head;
      while(current.next){
        current = current.next
      }
      current.next = node;
    }
    length++;
  };

  this.insert = function(position, element){
    if(position>=0 && position<=length){
      let node = new Node(element),
        current = head,
        previous,
        index = 0;
      if(position === 0){
        node.next = current ;
        head = node;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    }else{
      return false;
    }

  };

  this.removeAt = function(position){
    if(position > -1 && position < length){
      let current = head,
        previous,
        index = 0;
      if (position === 0){
        head = current.next;
      } else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    }else{
      return null;
    }
  };

  this.toString = function(){
    let current = head,
      string = '';
    while (current){
      string+= current.element + (current.next ? 'n' : '');
      current = current.next;
    }
    return string;
  };

  this.print = function(){
    console.log(this.toString())
  };
  this.indexOf = function(element){
    let current = head,
    index = 0;
    while(current){
      if(element === current.element){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };
  this.remove = function(element){
    const index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.isEmpty = function(){
    return length === 0;
  };
  this.size = function(){
    return length;
  };
  this.getHead = function(){
    return head;
  }
}

const list = new LinkedList();
list.append(15);
list.append(10);
list.append(20);
list.append(30);
list.removeAt(1);
list.remove(30);
list.print();
console.log(list.indexOf(151));
console.log(list.isEmpty());
console.log(list.getHead().element);

function DouBlyLinkedList(){

  const Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  let length = 0;
  let head = null;
  let tail = null;

  this.insert = function(position, element){
    if(position>=0 && position <= length){
      const node = new Node(element);
      let current = head,
        previous,
        index = 0;
      if(position === 0){
        if(!head){
          head = node;
          tail = node;
        }else{
          node.next = current;
          current.prev = node;
          head = node;
        }
      }else if(position === length){
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    } else{
      return false;
    }
  };

  this.removeAt = function(position){
    if(position > -1 && position < length){
      let current = head,
        previous,
        index = 0;
      if(position ===0){
        head = current.next;
        if(length ===1 ){
          tail =null;
        }else{
          head.prev = null
        }
      }else if (position ===
        length -1){
        current = tail;
        tail = current.prev;
        tail.next = null;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;

      }
      length --;
      return current.element;
    }else{
      return null;
    }
  }


}
