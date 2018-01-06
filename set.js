// function Set(){
//   let items= {};
//   // this.has = function(value){
//   //   return value in items;
//   // }
//   this.has = function(value){
//     return items.hasOwnProperty(value)
//   };
//
//   this.add = function(value){
//     if(!this.has(value)){
//       items[value]=value;
//       return true;
//     }else{
//       return false;
//     }
//   };
//
//   this.remove = function(value){
//     if(this.has(value)){
//       delete items[value];
//       return true;
//     }
//     return false;
//   };
//
//   this.print = function(){
//     console.log(items)
//   };
//   this.clear = function(){
//     items = {}
//   };
//
//   this.size = function(){
//     return Object.keys(items).length
//   };
//   this.values = function(){
//     return Object.values(items)
//
//   };
//
//   this.union = function(otherSet){
//     let unionSet = new Set();
//     let values = this.values();
//     for(let i =0; i<values.length; i++){
//       unionSet.add(values[i])
//     }
//     values = otherSet.values();
//     for(let i=0; i<values.length; i++){
//       unionSet.add(values[i])
//     }
//
//     return unionSet;
//   };
//
//   this.intersection = function(otherSet){
//     let intersectionSet = new Set();
//     this.values().forEach(value=>{
//       if(otherSet.has(value)){
//         intersectionSet.add(value)
//       }
//     });
//     return intersectionSet;
//   };
//   this.difference = function(otherSet){
//     const differenceSet = new Set();
//     this.values().forEach(value=>{
//       if(!otherSet.has(value)){
//         differenceSet.add(value)
//       }
//     });
//     return differenceSet;
//   };
//
//   this.subset = function(otherSet){
//     if(this.size()>otherSet.size()){
//       return false;
//     }else{
//       return this.values().every(value=>otherSet.has(value))
//     }
//   }
//
//
//  }

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
console.log(setA.values());
console.log(setA.has(1));
console.log(setA.size);
setA.values().next()

let setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);







