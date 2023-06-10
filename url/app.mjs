import http from 'http'
import app from './src/index.mjs';
import os from 'os'

const server =  http.createServer(app);

const port = 6001

server.listen(port, () =>{
    console.log(`this is users ~ listening on port ${port} from ${os.hostname}`);
})