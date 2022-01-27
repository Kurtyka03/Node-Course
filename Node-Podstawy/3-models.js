// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

console.log(data)

sayHi(data.items[1])
sayHi(data.singlePerson.name)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

/*

PS C:\Users\kurty\Desktop\Node-Course> node 3-models.js
the sum is: 15
{ items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
Hallo item2
Hallo bob
Hallo susan
Hallo John
Hallo peter

*/