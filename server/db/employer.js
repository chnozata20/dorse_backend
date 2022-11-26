const pool = require('./index');

let dorsedb = {};

dorsedb.callEmployerAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM dorsedb.employer`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.callEmployerById = (id) => {
    return new Promise((resolve, reject) => {
        // pool.query(`SELECT * FROM dorsedb.employer WHERE id = ${id}`, (err, results) => {//it can be hacked
        pool.query(`SELECT * FROM dorsedb.employer WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

dorsedb.callEmployerByUsernameAndPassword = (username, password) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM dorsedb.employer
        WHERE dorsedb.employer.username = ? and dorsedb.employer.password = ?;
          `,
        [username, password],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  };

dorsedb.addEmployer = (employer) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO dorsedb.employer SET ?`, [employer], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.updateEmployer = (employer, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE dorsedb.employer SET ? WHERE id = ?`,[employer,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.deleteEmployer = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM dorsedb.employer WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = dorsedb;