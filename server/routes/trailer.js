const express = require('express');
const db = require('../db/trailer');
const router = express.Router();

router.get('/all', async (req, res, next) => {
    try {
        let result = await db.callTrailerAll();
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let result = await db.callTrailerById(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
})

router.post("/", async (req, res, next) => {
    try {
        let result = await db.addTrailer(req.body);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.patch("/:id", async (req, res, next) => {
    try{
        let result = await db.updateTrailer(req.body, req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        let result = await db.deleteTrailer(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})
module.exports = router;