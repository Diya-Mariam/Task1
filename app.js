const express = require('express');

const exphbs = require('express-handlebars')

const app = express();

const routes = require('./router/taskRoutes')

app.engine('hbs', exphbs.engine( { extname: 'hbs'} ));
app.set('view engine', 'hbs');

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/', routes);


app.listen(5000, ()=> console.log('server started'))