const http = require('http');
const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const ENV = process.env.env_name || 'default enviroment';

const server = http.createServer(app);

server.listen(PORT, ()=> {
    console.log('Runnin enviroment: ' + ENV);
    console.log('Server listening at port: ' + PORT);
});