const express = require('express');
const db = require('../db/cargo');
const router = express.Router();

router.get('/all', async (req, res, next) => {
    try {
        let result = await db.callCargoAll();
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let result = await db.callCargoById(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
})

router.get('/city/:city', async (req, res, next) => {
    try {
        let result = await db.callCargoByCity(req.params.city);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
})

router.post("/", async (req, res, next) => {
    try {
        let result = await db.addCargo(req.body);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.patch("/:id", async (req, res, next) => {
    try{
        let result = await db.updateCargo(req.body, req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        let result = await db.deleteCargo(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})
module.exports = router;