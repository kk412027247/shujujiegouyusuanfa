const Dictionary = require('./dictionary');
const Queue = require('./queue');
const Stack = require('./stack');

function Graph(){
  const vertices = [];
  const adjList = new Dictionary() ;

  this.addVertex = function(v){
    vertices.push(v);
    adjList.set(v,[])
  };

  this.addEdge = function(v,w){
    adjList.get(v).push(w);
    adjList.get(w).push(v)
  };

  this.toString = function(){
    return vertices.reduce((pre,curr)=>(
       pre + curr+ ' -> ' +adjList.get(curr).reduce((_pre,_curr)=>_pre+ ' ' + _curr  ) + '\n'
    ),'')
  };

  const initializeColor = function(){
    return vertices.reduce((pre,cur)=> {
      pre[cur]='white';
      return pre
    } ,[])
  };

  this.bfs = function (v,callback){
    const color = initializeColor(),
      queue = new Queue();
    queue.enqueue(v);
    while(!queue.isEmpty()){
      const u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u]='grey';
      neighbors.forEach(w=>{
        if(color[w]==='white'){
          color[w] = 'grey';
          queue.enqueue(w)
        }
      });
      color[u] = 'black';
      if(callback){
        callback(u)
      }
    }
  };

  this.BFS = function(v){
    const color = initializeColor(),
          queue = new Queue,
          d = [],
          pred = [];
    queue.enqueue(v);

    vertices.forEach(_vertices=>{
      d[_vertices] = 0;
      pred[_vertices] = null;
    });

    while(!queue.isEmpty()){
      const u = queue.dequeue(),
            neighbors = adjList.get(u);
      color[u] = 'grey';
      neighbors.forEach(w=>{
        if(color[w] === 'white'){
          color[w] = 'grey';
          d[w] = d[u]+1;
          pred[w] = u;
          queue.enqueue(w)
        }
      });
      color[u] = 'black';
    }
    return{
      distances:d,
      predecessors: pred,
    }
  };

  this.dfs = function(callback){
    const color = initializeColor();
    vertices.forEach(v=>{
      if(color[v] === 'white'){
        dfsVisit(v,color,callback)
      }
    })
  };

  const dfsVisit = function(u, color, callback){
    color[u] = 'grey';
    if(callback){
      callback(u)
    }
    const neighbors = adjList.get(u);
    neighbors.forEach(w=>{
      if(color[w] === 'white'){
        dfsVisit(w, color, callback)
      }
    });
    color[u] = 'black';
  };

  let time = 0;
  this.DFS = function(){
    const color = initializeColor(),
      d=[],
      f=[],
      p=[];
    vertices.forEach(v=>{
      f[v]=0;
      d[v]=0;
      p[v]=null;
    });
    vertices.forEach(v=>{
      if(color[v] === 'white'){
        DFSVisit(v, color, d, f, p)
      }
    });
    return{
      discovery:d,
      finished:f,
      predecessors:p,
    }
  };
  const DFSVisit = function(u, color, d, f, p){
    console.log('discovered '+ u);
    color[u] = 'grey';
    d[u] = ++time;
    const neighbors = adjList.get(u);
    neighbors.forEach(w=>{
      if(color[w] === 'white'){
        p[w] = u;
        DFSVisit(w, color, d, f, p)
      }
    });
    color[u] = 'back';
    f[u] = ++time;
    console.log('explored '+u)
  }

}

// const graph = new Graph();
// const myVertices = ['A','B','C','D','E','F','G','H','I'];
//
// myVertices.forEach(vertices=>graph.addVertex(vertices));
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');

//console.log(graph.toString());


// function printNode(value){
//   console.log('Visited vertex: '+ value)
// }

//graph.bfs(myVertices[0],printNode);

//const shortestPathA = graph.BFS(myVertices[0]);
//console.log(shortestPathA);

// const fromVertex = myVertices[0];
// myVertices.forEach((toVertex,index)=>{
//   if(index === 0) return;
//   path = new Stack();
//   for (let v=toVertex; v!== fromVertex;
//        v=shortestPathA.predecessors[v]) {
//     path.push(v);
//   }
//   path.push(fromVertex);
//   let s = path.pop();
//   while(!path.isEmpty()){
//     s += ' - ' + path.pop();
//   }
//   console.log(s);
// });


//graph.dfs(printNode);

const graph = new Graph();
const myVertices = ['A','B','C','D','E','F'];
myVertices.forEach(v=>graph.addVertex(v));
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
const result = graph.DFS();
console.log(result);
