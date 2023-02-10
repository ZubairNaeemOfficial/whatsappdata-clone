    const http= require('http') ;
    const express= require('express');
 const logger= require( 'morgan');
 const cors=require('cors')
    const bodyParser=require( 'body-parser');
const route=require('./server/routes/form')

    const hostname = '127.0.0.1';
    const port = 8000;
    const app = express() // setup express application
    const server = http.createServer(app);

    app.use(logger('dev')); // log requests to the console

    // Parse incoming requests data
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use("/",route)
    app.get('*', (req, res) => res.status(200).send({
      message: 'Welcome to the default API route',
    }));

    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });