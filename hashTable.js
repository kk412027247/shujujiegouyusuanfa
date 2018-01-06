function HashTable(){
  const table = [];
  const loseloseHashCode = key => [...key].reduce((pre,cur)=>cur.charCodeAt()+pre,0) ;
  const ValuePair = function(key,value){
   this.key = key;
   this.value = value;
   this.toString = function(){
     return `[${this.key} - ${this.value}]`
   }
  };

  this.put = (key, value) =>{
    const position = loseloseHashCode(key);
    if(table[position] === undefined){
      table[position] = new ValuePair(key, value)
    }else{
      let index = position+1;
      while(table[index] !== undefined){
        index++;
      }
      table[index] = new ValuePair(key,value)
    }

  };

  this.get = key => {
    const position = loseloseHashCode(key);
    if(table[position] !== undefined){
      if(table[position].key === key){
        return table[position].value
      }else{
        let index = position + 1;
        while(table[index].key !== key){
          index++
        }
        return table[index];
      }
    }else{
      return undefined;
    }
  };

  this.remove = key => {
    const position = loseloseHashCode(key);
    if(table[position] !== undefined){
      if(table[position].key === key){
        table[position] = undefined;
      }else{
        let index = position + 1;
        while(table[index].key !== key){
          index++
        }
       table[index] = undefined;
      }
    }else{
      return undefined;
    }
  };



  this.print = () => {
    table.forEach((item,index) => console.log(index+':'+item.key+item.value))
  }
}

const hash = new HashTable();

hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');
// const start = Date.now();
// hash.print();
// console.log(Date.now() - start);
// console.log(hash.get('Sue').toString());


const map = new Map();
map.set('Gandalf','gandlf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');

console.log(map.has('Gandalf'));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.get('Tyrion'));
