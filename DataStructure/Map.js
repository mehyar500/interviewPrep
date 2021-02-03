var Map = function() {
  this.collection = {};
  // change code below this line
  this.add = (key,value)=>{
    this.collection[key] = value;
    return this.collection[key];
  };
  this.remove = (key)=>{
    if(this.collection.hasOwnProperty(key)){
      this.collection.delete(key);
    }
  };
  this.get = (key)=>{
    return this.collection[key];
  };
  this.has = (item)=>{
    return (this.collection.hasOwnProperty(item));
 };
 this.values = ()=>{
   let ar = [];
   for(let v in this.collection){
	   ar.push(this.collection[v]);
   }
   return ar;
 }; 
  this.size = ()=>(Object.keys(this.collection).length);
  this.clear = ()=>{
    this.collection = {};
  };
  // change code above this line
};
