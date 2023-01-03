const express = require('express');
const db = require('../db/cargo_request');
const router = express.Router();

router.get('/all', async (req, res, next) => {
    try {
        let result = await db.callCargoRequestAll();
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let result = await db.callCargoRequestById(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
})

router.get('/employerid/:id', async (req, res, next) => {
    try {
        let result = await db.callCargoRequestByEmployerId(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
})

router.get('/driverid/:id', async (req, res, next) => {
    try {
        let result = await db.callCargoRequestByDriverId(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
})

router.post("/", async (req, res, next) => {
    try {
        let result = await db.addCargoRequest(req.body);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.patch("/:id", async (req, res, next) => {
    try{
        let result = await db.updateCargoRequest(req.body, req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        let result = await db.deleteCargoRequest(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})
module.exports = router;