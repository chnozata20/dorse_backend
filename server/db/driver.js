const pool = require('./index');

let dorsedb = {};

dorsedb.callDriverAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM dorsedb.driver`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.callDriverById = (id) => {
    return new Promise((resolve, reject) => {
        // pool.query(`SELECT * FROM dorsedb.driver WHERE id = ${id}`, (err, results) => {//it can be hacked
        pool.query(`SELECT * FROM dorsedb.driver WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

dorsedb.callDriverByUsernameAndPassword = (username, password) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM dorsedb.driver
        WHERE dorsedb.driver.username = ? and dorsedb.driver.password = ?;
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

dorsedb.addDriver = (driver) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO dorsedb.driver SET ?`, [driver], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.updateDriver = (driver, id) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE dorsedb.driver SET ? WHERE id = ?`,[driver,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

dorsedb.deleteDriver = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM dorsedb.driver WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = dorsedb;