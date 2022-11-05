const pool = require('./index');

let dorsedb = {};

dorsedb.callPointAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM dorsedb.point`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.callPointById = (id) => {
    return new Promise((resolve, reject) => {
        // pool.query(`SELECT * FROM dorsedb.point WHERE id = ${id}`, (err, results) => {//it can be hacked
        pool.query(`SELECT * FROM dorsedb.point WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

dorsedb.addPoint = (point) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO dorsedb.point SET ?`, [point], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.updatePoint = (point, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE dorsedb.point SET ? WHERE id = ?`,[point,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.deletePoint = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM dorsedb.point WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = dorsedb;