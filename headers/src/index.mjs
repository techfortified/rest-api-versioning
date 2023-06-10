import express from 'express';
import os from 'os'
import cors from 'cors';

const app = express();
app.use(cors({origin: '*'}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const getVersion = (req, res, next) =>{
    const version = req.version || req.headers['accept-version'];
    if(!version) {
        req.version = "v1"
        return next();
    }
    req.version = version
    return next();
}
app.use(getVersion)
app.get('/', (req, res) => {
    return res.send(`Welcome to HEADERS VERSIONING! API VERSION ${req.version} from ${os.hostname}`);
});

app.get('/api/users/:id', (req, res) => {
    const version = req.version
    if(version === "v2"){
        return controllerV2(req, res)
    } 
    return controllerV1(req, res)
});



const controllerV1 = (req, res) => {
    res.json({version: req.version, message: `Welcome version ${req.version}`, data: {address: "New york", id: 2, username: "john"}, status: 200, error: false});
}

const controllerV2 = (req, res) => {
    res.json({version: req.version, message: `Welcome version ${req.version}`, data: {address: "New york", id: 2, username: "john", email: "john@email.com", account: {accountNumber: 283927390, balance: 738294.4738}}, status: 200, error: false});
}


export default app;