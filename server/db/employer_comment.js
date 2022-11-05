const pool = require('./index');

let dorsedb = {};

dorsedb.callEmployerCommentAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM dorsedb.employer_comment`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.callEmployerCommentById = (id) => {
    return new Promise((resolve, reject) => {
        // pool.query(`SELECT * FROM dorsedb.employer_comment WHERE id = ${id}`, (err, results) => {//it can be hacked
        pool.query(`SELECT * FROM dorsedb.employer_comment WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

dorsedb.addEmployerComment = (employer_comment) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO dorsedb.employer_comment SET ?`, [employer_comment], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.updateEmployerComment = (employer_comment, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE dorsedb.employer_comment SET ? WHERE id = ?`,[employer_comment,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.deleteEmployerComment = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM dorsedb.employer_comment WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = dorsedb;