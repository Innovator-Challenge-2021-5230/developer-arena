const express = require('express');

const mockData = require('../model/data/todo.json');

function routes(){
    const router = express.Router();
    router.get('/gettodo', (req, res) => {
        try{
            res.json(mockData);
        }catch(e){
            console.error(e);
            res.status(500).send(e);
        }
    });
    return router;
}

module.exports = routes;