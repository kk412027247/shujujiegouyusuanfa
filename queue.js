// function Queue(){
//   let items = [];
//   this.enqueue = function(element){
//     items.push(element)
//   };
//   this.dequeue = function(){
//     items.shift()
//   };
//   this.front = function(){
//     return items[0]
//   };
//   this.isEmpty = function(){
//     return items.length === 0
//   };
//   this.size = function(){
//     return items.length
//   };
//   this.print = function(){
//     console.log(items.toString())
//   }
// }

const Queue = (function(){
  const items = new WeakMap();
  class Queue{
    constructor(){
      items.set(this, [])
    }
    enqueue(element){
       items.get(this).push(element)
    };
    dequeue(){
      return items.get(this).shift()
    };
    front(){
      return items.get(this)[0]
    };
    isEmpty (){
      return items.get(this).length === 0
    };
    size (){
      return items.get(this).length
    };
    print (){
      console.log(items.get(this).toString())
    }
  }
  return Queue;
})();

module.exports = Queue;

const queue = new Queue();
queue.enqueue(`John`);
queue.enqueue(`Jack`);
queue.enqueue(`Camila`);
queue.dequeue();
queue.dequeue();
//queue.print();

function PriorityQueue(){
  let items = [];
  
  function QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority){
    let queueElement = new QueueElement(element, priority);
    let added = false;
    
    for(let i=0; i<items.length; i++){
      if(queueElement.priority < items[i].priority){
        items.splice(i,0,queueElement);
        added = true;
        break;
      }
    }
    if(!added){
      items.push(queueElement);
    }
    this.print = function(){
      for(let i=0; i<items.length; i++){
        console.log(`${items[i].element}-${items[i].priority}`)
      }
    }
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John',2);
priorityQueue.enqueue('Jack',1);
priorityQueue.enqueue('Camila',1);
//priorityQueue.print();

function hotPotato(nameList, num){
  const queue = new Queue();
  for(let i=1; i<nameList.length; i++){
    queue.enqueue(nameList[i]);
  }
  let eliminated = '';
  while(queue.size()>1){
    for (let i=0; i<num;i++){
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue();
    console.log(eliminated+'it out')
  }
  return queue.dequeue()
}

// const names = ['John','Jack','Camila','Ingrid','Carl'];
// const winner = hotPotato(names,3);
//console.log('winner: ',winner);
