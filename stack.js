// function Stack (){
//   let items =[];
//   this.push = function(element){
//     items.push(element)
//   };
//   this.pop = function(){
//     items.pop();
//   };
//   this.peek = function(){
//     return items[items.length-1]
//   };
//   this.isEmpty = function(){
//     return items.length === 0;
//   };
//   this.size = function(){
//     return items.length;
//   };
//   this.clear = function(){
//     items = [];
//   };
//   this.print = function(){
//     console.log(items.toString())
//   }
// }

// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(5);
// stack.push(8);
// console.log(stack.peek());
// stack.push(11);
// console.log(stack.size());
// stack.push(15);
// stack.pop();
// stack.pop();
// console.log(stack.size());
// stack.print();

//es6 class symbol 建立不会冲突的属性名以及 类。
// let _items = Symbol('_item');
// class Stack {
//   constructor(){
//     this[_items]= [];
//   }
//   push(element){
//     this[_items].push(element)
//   };
//   pop(){
//     this[_items].pop();
//   };
//   peek(){
//     return this[_items][this[_items].length-1]
//   };
//   isEmpty(){
//     return this[_items].length === 0
//   };
//   size (){
//     return this[_items].length ;
//   };
//   clear (){
//     this[_items] = []
//   };
//   print (){
//     console.log(this[_items].toString())
//   }
// }


//WeakMap 实现类;
const Stack = (function(){
  const items = new WeakMap();
  class Stack {
    constructor(){
      items.set(this,[])
    }
    push(element){
      items.get(this).push(element)
    };
    pop(){
      return items.get(this).pop()

    };
    peek(){
      return items.get(this)[items.get(this).length-1]
    };
    isEmpty(){
      return items.get(this).length === 0
    };
    size (){
      return items.get(this).length ;
    };
    clear (){
      items.set(this,[])
    };
    print (){
      console.log(items.get(this).toString())
    }
  }
  return Stack;
})();



// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(5);
// stack.push(8);
// console.log(stack.peek());
// stack.push(11);
// console.log(stack.size());
// stack.push(15);
// stack.pop();
// stack.pop();
// console.log(stack.size());
// stack.print();

module.exports = Stack;
