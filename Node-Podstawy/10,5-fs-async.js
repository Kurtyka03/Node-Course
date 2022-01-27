const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/firest.txt','utf-8', (err, res) =>{
    if(err){
        console.log(err);
        return
    }
    const first = res;
    readFile('./content/secend.txt', 'utf-8', (err, res) =>{
        if(err){
            console.log(err);
            return
        }
        const secend = res
        writeFile('./content/wynik.txt',`
        here is result ${first}, ${secend}`,{flag: 'a'}
        ,(err,res)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')

/*

readFile('./content/firest.txt','utf-8', (err, res) =>{
    if(err){
        console.log(err);
        return
    }
    console.log(res);
})

PS C:\Users\kurty\Desktop\Node-Course> node app.js
<Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 66 69 6c 65>
PS C:\Users\kurty\Desktop\Node-Course> node app.js
hello this is first file

jesli nie ma utf-8 wysle buffer-a


*/