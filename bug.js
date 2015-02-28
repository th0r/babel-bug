var map = new Map();

// throws "undefined is not a function" in every node.js or io.js
map.add('key', 'val');

// throws "undefined is not a function" in every node.js or io.js
console.log(map.values());