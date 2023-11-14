const LinkedList = require('./LinkedList');
const Node = require('./Node');

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
    .fill(null)      //Array methods .fill() and .map() that are used to fill the array with placeholder values of null which are then replaced by empty linked lists.
    .map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;  //Initialize hashCode variable to 0
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i); //The hashCode += allows the hashing function to avoid generating duplicate hashCodes if keys have the same characters in different orders, such as bat and tab
    }
    return hashCode % this.hashmap.length; //module returns an index
  }

  assign(key, value) {    //Takes a key-value pair and store the value at a particular index
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    if (linkedList.head === null) {
      linkedList.addToHead({key, value});
      return;
    }
    let current = linkedList.head;
    while (current) {      //iterate over the linked list to find the tail using a while loop.
      if (current.data.key === key) {
        current.data = {key, value};
      }
      if (!current.getNextNode()) {
        const newNode = new Node({ key, value });
        current.setNextNode(newNode);
        break;
      }
      current = current.getNextNode();
    }

  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    let current = this.hashmap[arrayIndex].head;
    while (current) {
      if (current.data.key === key) {
        console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
        return current.data.value;
      }
      current = current.next;
    }
    return null;
  }
}
  
module.exports = HashMap;
  

/*const myHashMap = new HashMap(3);  //HashMap with size of 3
console.log(myHashMap.hash('id'));
console.log(myHashMap.hash('id'));


const employees = new HashMap(3);
employees.assign('34-567', 'Mara');
console.log(employees.retrieve('34-567'));


const glossary = new HashMap(3);
glossary.assign('semordnilap', 'Words that form different words when reversed');
console.log(glossary.retrieve('semordnilap'));


//Example of a collision.  The keys though different genearate the same index => 0.
const parkInventory = new HashMap(2);
parkInventory.assign('reed', 'marsh plant');
parkInventory.assign('deer', 'forest animal');
console.log(parkInventory.retrieve('reed'));
console.log(parkInventory.retrieve('deer'));*/