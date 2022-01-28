const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type': 'text/html'})
    const url = req.url
    if(url === '/'){
        console.log(req.url);
        res.write('<h1>home Page</h1>')
        res.end()
    }
    else if(url === '/about'){
        console.log(req.url);
        res.write('<h1>about Page</h1>')
        res.end()
    }
    else{
        console.log(req.url);
        res.write('<h1>Page dosnt exist</h1>')
        res.end()
    }
})

server.listen(5000)