import express from 'express';
import os from 'os'
import routes from './routes/index.mjs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const getVersion = (req, res, next) =>{
    console.log(req.url)
    const strArr = req.url.split('/')
    const version = strArr[2];
    if(!version) {
        req.version = "1"
        return next();
    }
    req.version = version
    return next();
}
app.use(getVersion)
app.get('/', (req, res) => {
    return res.send(`Welcome to URL VERSIONING! from ${os.hostname}`);
});
app.use('/api/', routes)

export default app;