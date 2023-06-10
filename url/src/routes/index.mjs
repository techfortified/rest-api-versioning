import express from 'express';

const router = express.Router();

router.get('/v1/users/:id', (req, res) => {
    return res.json({version: req.version, message: `Welcome version ${req.version}`, data: {address: "New york", id: 2, username: "john"}, status: 200, error: false});
});


router.get('/v2/users/:id', (req, res) => {
    return res.json({version: req.version, message: `Welcome version ${req.version}`, data: {address: "New york", id: 2, username: "john", email: "john@email.com", account: {accountNumber: 283927390, balance: 738294.4738}}, status: 200, error: false});
});


export default router;