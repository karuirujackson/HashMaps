class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }

    hash(key) {
      let hashCode = 0;  //Initialize hashCode variable to 0
      for (let i = 0; i < key.length; i++) {
        hashCode += hashCode + key.charCodeAt(i); //The hashCode += allows the hashing function to avoid generating duplicate hashCodes if keys have the same characters in different orders, such as bat and tab
      }
      return hashCode % this.hashmap.length;
    }

    assign(key, value) {
      const arrayIndex = this.hash(key);
      this.hashmap[arrayIndex] = value;
    }
}
  
module.exports = HashMap;
  

const myHashMap = new HashMap(3);
console.log(myHashMap.hash('id'));
console.log(myHashMap.hash('id'));


const employees = new HashMap(3);
employees.assign('34-567', 'Mara');
console.log(employees.hashmap);