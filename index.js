const express = require('express');
const app = express();
const routes = require('./src/routes/crud-route');
const mongoService =require('./src/dataaccess/dataaccess');
const port = 4001;

app.use(express.json());
app.use(routes);

mongoService.connect().then(()  => {
    app.listen(port,() => {
        console.log('app is listening on port: ', port);
        });
}).catch(err => {
 console.log('mongo connection failed');
});


