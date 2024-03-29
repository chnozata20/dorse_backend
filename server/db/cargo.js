const pool = require("./index");

let dorsedb = {};

dorsedb.callCargoAll = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT cargo.id as cargoId, DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS startDate , DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS endDate, cargo.vehicleType, cargo.trailerType,cargo.tonnage,cargo.volume,cargo.cargoType,cargo.paymentType,cargo.price,cargo.distance,
      cargo.width,cargo.lenght,cargo.height,p1.id as startPointId, p1.city as startCity, p1.countie as startCountie, p1.neighbourhood as startNeighbourhood, p1.street as startStreet, p1.no as startNo, 
      p2.id as endPointId, p2.city as endCity, p2.countie as endCountie, p2.neighbourhood as endNeighbourhood, p2.street as endStreet, p2.no as endNo 
      FROM dorsedb.cargo as cargo, dorsedb.point as p1, dorsedb.point as p2
      WHERE cargo.startPointId=p1.id and cargo.endPointId=p2.id;
            `,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

dorsedb.callCargoById = (id) => {
  return new Promise((resolve, reject) => {
    // pool.query(`SELECT * FROM dorsedb.cargo WHERE id = ${id}`, (err, results) => {//it can be hacked
    pool.query(
      `SELECT cargo.id as cargoId, DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS startDate , DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS endDate, cargo.vehicleType, cargo.trailerType,cargo.tonnage,cargo.volume,cargo.cargoType,cargo.paymentType,cargo.price,cargo.distance,
      cargo.width,cargo.lenght,cargo.height,p1.id as startPointId, p1.city as startCity, p1.countie as startCountie, p1.neighbourhood as startNeighbourhood, p1.street as startStreet, p1.no as startNo, 
      p2.id as endPointId, p2.city as endCity, p2.countie as endCountie, p2.neighbourhood as endNeighbourhood, p2.street as endStreet, p2.no as endNo 
      FROM dorsedb.cargo as cargo, dorsedb.point as p1, dorsedb.point as p2
      WHERE cargo.startPointId=p1.id and cargo.endPointId=p2.id and cargo.id = ?;`,
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

dorsedb.callCargoByEmployerId = (id) => {
  return new Promise((resolve, reject) => {
    // pool.query(`SELECT * FROM dorsedb.cargo WHERE id = ${id}`, (err, results) => {//it can be hacked
    pool.query(
      `SELECT cargo.id as cargoId, DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS startDate , DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS endDate, cargo.vehicleType, cargo.trailerType,cargo.tonnage,cargo.volume,cargo.cargoType,cargo.paymentType,cargo.price,cargo.distance,
      cargo.width,cargo.lenght,cargo.height,p1.id as startPointId, p1.city as startCity, p1.countie as startCountie, p1.neighbourhood as startNeighbourhood, p1.street as startStreet, p1.no as startNo, 
      p2.id as endPointId, p2.city as endCity, p2.countie as endCountie, p2.neighbourhood as endNeighbourhood, p2.street as endStreet, p2.no as endNo 
      FROM dorsedb.cargo as cargo, dorsedb.point as p1, dorsedb.point as p2
      WHERE cargo.startPointId=p1.id and cargo.endPointId=p2.id and employerId = ?;
      `,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

dorsedb.callCargoByCity = (city) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT cargo.id as cargoId, DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS startDate , DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS endDate, cargo.vehicleType, cargo.trailerType,cargo.tonnage,cargo.volume,cargo.cargoType,cargo.paymentType,cargo.price,cargo.distance,
      cargo.width,cargo.lenght,cargo.height,p1.id as startPointId, p1.city as startCity, p1.countie as startCountie, p1.neighbourhood as startNeighbourhood, p1.street as startStreet, p1.no as startNo, 
      p2.id as endPointId, p2.city as endCity, p2.countie as endCountie, p2.neighbourhood as endNeighbourhood, p2.street as endStreet, p2.no as endNo 
      FROM dorsedb.cargo as cargo, dorsedb.point as p1, dorsedb.point as p2
      WHERE cargo.startPointId=p1.id and cargo.endPointId=p2.id and (p1.city = ? or p2.city = ? );
        `,
      [city, city],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

dorsedb.addCargo = (cargo) => {
  return new Promise((resolve, reject) => {
    pool.query(`INSERT INTO dorsedb.cargo SET ?`, [cargo], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

dorsedb.updateCargo = (cargo, id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE dorsedb.cargo SET ? WHERE id = ?`,
      [cargo, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

dorsedb.deleteCargo = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `DELETE FROM dorsedb.cargo WHERE id = ?`,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
module.exports = dorsedb;
