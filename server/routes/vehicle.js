const express = require('express');
const db = require('../db/vehicle');
const router = express.Router();

router.get('/all', async (req, res, next) => {
    try {
        let result = await db.callVehicleAll();
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let result = await db.callVehicleById(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
})

router.post("/", async (req, res, next) => {
    try {
        let result = await db.addVehicle(req.body);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.patch("/:id", async (req, res, next) => {
    try{
        let result = await db.updateVehicle(req.body, req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        let result = await db.deleteVehicle(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})
module.exports = router;