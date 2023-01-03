const pool = require("./index");

let dorsedb = {};

dorsedb.callDriverAll = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM dorsedb.driver`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

dorsedb.callDriverVehicleTrailerAll = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT dorsedb.driver.id as driver_id, driver.*, vehicle.id as vehicle_id, vehicle.plate, vehicle.model, vehicle.chassisNumber, vehicle.brand,
        trailer.capacity as trailer_capacity, trailer.id as trailer_id, trailer.length as trailer_length, trailer.model as trailer_model, trailer.type as trailer_type, trailer.width as trailer_width
        FROM dorsedb.driver as driver, dorsedb.vehicle as vehicle, dorsedb.trailer as trailer
        WHERE vehicle.driverId=driver.id and vehicle.trailerId=trailer.id;`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

dorsedb.callDriverById = (id) => {
  return new Promise((resolve, reject) => {
    // pool.query(`SELECT * FROM dorsedb.driver WHERE id = ${id}`, (err, results) => {//it can be hacked
    pool.query(
      `SELECT * FROM dorsedb.driver WHERE id = ?`,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
};

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
        return resolve(results[0]);
      }
    );
  });
};

dorsedb.addDriver = (driver) => {
  return new Promise((resolve, reject) => {
    pool.query(`INSERT INTO dorsedb.driver SET ?`, [driver], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

dorsedb.updateDriver = (driver, id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE dorsedb.driver SET ? WHERE id = ?`,
      [driver, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

dorsedb.deleteDriver = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `DELETE FROM dorsedb.cargo_requests as request 
        WHERE request.driver_id=?;
        `,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        pool.query(
          `UPDATE dorsedb.cargo as cargo
            SET driverId=NULL 
            WHERE cargo.employerId = ?;`,
          [id],
          (err, results) => {
            if (err) {
              return reject(err);
            }
            pool.query(
              `DELETE FROM dorsedb.vehicle as vehicle
                WHERE vehicle.driverId = ?;`,
              [id],
              (err, results) => {
                if (err) {
                  return reject(err);
                }
                pool.query(
                  `DELETE FROM dorsedb.driver as driver
                    WHERE driver.id = ?;`,
                  [id],
                  (err, results) => {
                    if (err) {
                      return reject(err);
                    }
                    return resolve(results);
                  }
                );
              }
            );
          }
        );
      }
    );
  });
};
module.exports = dorsedb;
