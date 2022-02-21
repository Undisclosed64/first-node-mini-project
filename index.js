const url = require('url');
const fs = require("fs");
const http = require("http");

const port = process.env.port || 8000;

//create an http server
const server = http.createServer((req,res) => {
    const parseUrl = url.parse(req.url,true);
    const fileToShow = '.' + parseUrl.pathname + '.html';

//main if else block
if(fileToShow === './.html'){
    fs.readFile('./index.html',(error,showHome)=>{
if(error){
    console.log(error)
} else {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write(showHome);
    res.end();
}
    })

} else {
    fs.readFile(fileToShow,(err,data) => {
        if(err){
        //open the 404 page
    fs.readFile('./404.html',(err,content) => {
        if (err) {
            console.error(err);
            res.setHeader('Content-Type','text/html');
            res.write('Something went wrong!');
            res.end();
          } else {
              res.statusCode = 200;
          res.setHeader('Content-Type','text/html');
          res.write(content);
          res.end();
          }
    })


//if there's no err,open the respective file
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end()
        }
    })
}
 })

server.listen(port,()=> {
    console.log(`server running at port ${port}`);
});