const express = require('express');
const db = require('../db/employer');
const router = express.Router();

router.get('/all', async (req, res, next) => {
    try {
        let result = await db.callEmployerAll();
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let result = await db.callEmployerById(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
})

router.post("/", async (req, res, next) => {
    try {
        let result = await db.addEmployer(req.body);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.patch("/:id", async (req, res, next) => {
    try{
        let result = await db.updateEmployer(req.body, req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        let result = await db.deleteEmployer(req.params.id);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})
module.exports = router;