const pool = require('./index');

let dorsedb = {};

dorsedb.callMemberRequestAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM dorsedb.member_request`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.callMemberRequestById = (id) => {
    return new Promise((resolve, reject) => {
        // pool.query(`SELECT * FROM dorsedb.member_request WHERE id = ${id}`, (err, results) => {//it can be hacked
        pool.query(`SELECT * FROM dorsedb.member_request WHERE idmember_request_id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

dorsedb.addMemberRequest = (member_request) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO dorsedb.member_request SET ?`, [member_request], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.updateMemberRequest = (member_request, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE dorsedb.member_request SET ? WHERE idmember_request_id = ?`,[member_request,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.deleteMemberRequest = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM dorsedb.member_request WHERE idmember_request_id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = dorsedb;