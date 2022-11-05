const pool = require('./index');

let dorsedb = {};

dorsedb.callDriverCommentAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM dorsedb.driver_comment`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.callDriverCommentById = (id) => {
    return new Promise((resolve, reject) => {
        // pool.query(`SELECT * FROM dorsedb.driver_comment WHERE id = ${id}`, (err, results) => {//it can be hacked
        pool.query(`SELECT * FROM dorsedb.driver_comment WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

dorsedb.addDriverComment = (driver_comment) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO dorsedb.driver_comment SET ?`, [driver_comment], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.updateDriverComment = (driver_comment, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE dorsedb.driver_comment SET ? WHERE id = ?`,[driver_comment,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.deleteDriverComment = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM dorsedb.driver_comment WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = dorsedb;