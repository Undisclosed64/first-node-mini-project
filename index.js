const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.setHeader('Content-Type','text/html');
  res.send('<h1>Hi,welcome to the home page!</h1>')
});

app.get('/about',(req,res) => {
    res.setHeader('Content-Type','text/html');
    res.send('<h1>This is about page!</h1>')
})


app.get('/contact-me',(req,res) => {
    res.setHeader('Content-Type','text/html');
    res.send('<h1>This is contact me page!</h1>')
})

app.listen(port, () => {
  console.log(`Sever listening on port ${port}`)
});
