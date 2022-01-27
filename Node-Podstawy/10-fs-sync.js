const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/firest.txt', 'utf-8')
const secend = readFileSync('./content/secend.txt', 'utf-8')

console.log(first, secend);

writeFileSync(
    './content/wynik.txt',
     `here is result ${first}, ${secend}`,{flag:'a'}
    )