const pool = require('./index');

let dorsedb = {};

dorsedb.callVehicleAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM dorsedb.vehicle`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.callVehicleById = (id) => {
    return new Promise((resolve, reject) => {
        // pool.query(`SELECT * FROM dorsedb.vehicle WHERE id = ${id}`, (err, results) => {//it can be hacked
        pool.query(`SELECT * FROM dorsedb.vehicle WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

dorsedb.addVehicle = (vehicle) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO dorsedb.vehicle SET ?`, [vehicle], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.updateVehicle = (vehicle, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE dorsedb.vehicle SET ? WHERE id = ?`,[vehicle,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.deleteVehicle = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM dorsedb.vehicle WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = dorsedb;