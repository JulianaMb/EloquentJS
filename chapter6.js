//A vector type

class Vec{
	constructor(x, y){
    	this.x = x;
        this.y = y;
    }
  
  	plus(vec){
     	 return new Vec(this.x+(vec.x), this.y+(vec.y)); 
    }
    minus(vec){
     	 return new Vec(this.x-(vec.x), this.y-(vec.y)); 
    }
    get length(){
    	return Math.sqrt((this.x*this.x)+(this.y*this.y))
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//Groups 

class Group {
  constructor(){
  	this.values = []; 
  }
  
  add(item){
    if (!this.has(item)) this.values.push(item);
  }
  
  delete(item) {
    if (this.has(item)) this.values.splice(this.values.indexOf(item), 1);
  }
  
  has(item){
  	return this.values.indexOf(item) === -1 ? false : true; 
  }
  
  static from(input){
    let nGroup = new Group();
    for (let i of input)
      nGroup.add(i);
    
    return nGroup;
  }
  
}

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Group Iterator
class Group {
  constructor(){
  	this.values = []; 
  }
  
  add(item){
    if (!this.has(item)) this.values.push(item);
  }
  
  delete(item) {
    if (this.has(item)) this.values.splice(this.values.indexOf(item), 1);
  }
  
  has(item){
  	return this.values.indexOf(item) === -1 ? false : true; 
  }
  
  [Symbol.iterator](){
  	return new GroupIterator(this.values); 
  }

  static from(input){
    let nGroup = new Group();
    for (let i of input)
      nGroup.add(i);
    
    return nGroup;
  }
  
}

class GroupIterator {
  constructor(group) {
    this.count = 0;
    this.group = group;
  }

  next() {
    if (this.count == this.group.length) return {done: true};
	let value = this.group[this.count];
    this.count++;

    return {value, done: false};
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

//borrowing a method
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "hasOwnProperty"));
// → true
