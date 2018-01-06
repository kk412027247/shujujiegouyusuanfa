function Dictionary(){
  let items = {};

  this.has = function(key){
    return items.hasOwnProperty(key)
  };

  this.set = function(key,value){
    items[key]=value;
  };

  this.delete = function(key){
    if(this.has(key)){
      delete items[key];
      return true;
    }else{
      return false;
    }
  };

  this.get = function(key){
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function(){
    return Object.values(items);
  };

  this.keys = function(){
    return Object.keys(items)
  };

  this.getItems = function(){
    return items;
  }
}

module.exports = Dictionary;

// const dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'johnsnow@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com');
//
// console.log(dictionary.has('Gandalf'));
//
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Tyrion'));
// dictionary.delete('John');
//
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.getItems());
