const pool = require('./index');

let dorsedb = {};

dorsedb.callTrailerAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM dorsedb.trailer`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.callTrailerById = (id) => {
    return new Promise((resolve, reject) => {
        // pool.query(`SELECT * FROM dorsedb.trailer WHERE id = ${id}`, (err, results) => {//it can be hacked
        pool.query(`SELECT * FROM dorsedb.trailer WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

dorsedb.addTrailer = (trailer) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO dorsedb.trailer SET ?`, [trailer], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.updateTrailer = (trailer, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE dorsedb.trailer SET ? WHERE id = ?`,[trailer,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.deleteTrailer = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM dorsedb.trailer WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = dorsedb;