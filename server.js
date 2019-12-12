const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(()=> {
    const server = express();

    server.get('/about',(req,res) => {
        //todo fix about server redirection
        console.log('about')
        return app.render(req,res,'/about',req.query);
    })

    server.get('/posts/:id',(req,res) => {
        return app.render(req,res,'/posts',{id:req.params.id});
    })

    server.get('*', (req,res) => {
        return handle(req, res);
    })

    server.listen(3001,err => {

        if(err) throw err;

        console.log('Ready on http://localhost:3001');
    })
})

.catch(ex => {
    console.error(err.stack);
    process.exit(1)
})