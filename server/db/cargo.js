const pool = require('./index');

let dorsedb = {};

dorsedb.callCargoAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM dorsedb.cargo`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.callCargoById = (id) => {
    return new Promise((resolve, reject) => {
        // pool.query(`SELECT * FROM dorsedb.cargo WHERE id = ${id}`, (err, results) => {//it can be hacked
        pool.query(`SELECT * FROM dorsedb.cargo WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

dorsedb.addCargo = (cargo) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO dorsedb.cargo SET ?`, [cargo], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.updateCargo = (cargo, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE dorsedb.cargo SET ? WHERE id = ?`,[cargo,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.deleteCargo = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM dorsedb.cargo WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = dorsedb;