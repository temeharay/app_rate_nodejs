const express = require('express');
const app = require('../../app');
const router = express.Router();
const envmw = process.env.env_name;
const appname = process.env.appname;

router.get('/appname', (req, res, next) => {
    console.log('app name: '+appname);
    res.status(200).json({
        message: 'app name is rate node js'
    });
});
router.get('/magicword', (req, res, next) => {
    console.log('magic word: '+envmw);
    res.status(200).json({
        message: envmw+' - magic word is aprika daprika booooo!'
    });
});

module.exports = router;