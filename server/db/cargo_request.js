const pool = require("./index");

let dorsedb = {};

dorsedb.callCargoRequestAll = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT cargo.id as cargoId, DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS startDate , DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS endDate, cargo.vehicleType, cargo.trailerType,cargo.tonnage, cargo.volume,cargo.cargoType,cargo.paymentType,cargo.price,cargo.distance,
      cargo.width,cargo.lenght,cargo.height,p1.id as startPointId, p1.city as startCity, p1.countie as startCountie, p1.neighbourhood as startNeighbourhood, p1.street as startStreet, p1.no as startNo, 
      p2.id as endPointId, p2.city as endCity, p2.countie as endCountie, p2.neighbourhood as endNeighbourhood, p2.street as endStreet, p2.no as endNo,
      id_cargo_requests as request_id, driver_id, employerId as employer_id, status, driver.*, vehicle.id as vehicle_id, vehicle.plate, vehicle.model, vehicle.chassisNumber, vehicle.brand,
      trailer.capacity as trailer_capacity, trailer.id as trailer_id, trailer.length as trailer_length, trailer.model as trailer_model, trailer.type as trailer_type, trailer.width as trailer_width
      FROM dorsedb.cargo as cargo, dorsedb.point as p1, dorsedb.point as p2, dorsedb.cargo_requests as request, dorsedb.driver as driver, dorsedb.vehicle as vehicle, dorsedb.trailer as trailer
      WHERE cargo.startPointId=p1.id and cargo.endPointId=p2.id and request.cargo_id=cargo.id and driver_id=driver.id and vehicle.driverId=driver.id and vehicle.trailerId=trailer.id;`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

dorsedb.callCargoRequestById = (id) => {
  return new Promise((resolve, reject) => {
    // pool.query(`SELECT * FROM dorsedb.cargo WHERE id = ${id}`, (err, results) => {//it can be hacked
    pool.query(
      `SELECT cargo.id as cargoId, DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS startDate , DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS endDate, cargo.vehicleType, cargo.trailerType,cargo.tonnage, cargo.volume,cargo.cargoType,cargo.paymentType,cargo.price,cargo.distance,
      cargo.width,cargo.lenght,cargo.height,p1.id as startPointId, p1.city as startCity, p1.countie as startCountie, p1.neighbourhood as startNeighbourhood, p1.street as startStreet, p1.no as startNo, 
      p2.id as endPointId, p2.city as endCity, p2.countie as endCountie, p2.neighbourhood as endNeighbourhood, p2.street as endStreet, p2.no as endNo,
      id_cargo_requests as request_id, driver_id, employerId as employer_id, status, driver.*, vehicle.id as vehicle_id, vehicle.plate, vehicle.model, vehicle.chassisNumber, vehicle.brand,
      trailer.capacity as trailer_capacity, trailer.id as trailer_id, trailer.length as trailer_length, trailer.model as trailer_model, trailer.type as trailer_type, trailer.width as trailer_width
      FROM dorsedb.cargo as cargo, dorsedb.point as p1, dorsedb.point as p2, dorsedb.cargo_requests as request, dorsedb.driver as driver, dorsedb.vehicle as vehicle, dorsedb.trailer as trailer
      WHERE cargo.startPointId=p1.id and cargo.endPointId=p2.id and request.cargo_id=cargo.id and driver_id=driver.id and vehicle.driverId=driver.id and vehicle.trailerId=trailer.id and request.id_cargo_requests = ?;`,
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

dorsedb.callCargoRequestByEmployerId = (id) => {
  return new Promise((resolve, reject) => {
    // pool.query(`SELECT * FROM dorsedb.cargo WHERE id = ${id}`, (err, results) => {//it can be hacked
    pool.query(
      `SELECT cargo.id as cargoId, DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS startDate , DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS endDate, cargo.vehicleType, cargo.trailerType,cargo.tonnage, cargo.volume,cargo.cargoType,cargo.paymentType,cargo.price,cargo.distance,
      cargo.width,cargo.lenght,cargo.height,p1.id as startPointId, p1.city as startCity, p1.countie as startCountie, p1.neighbourhood as startNeighbourhood, p1.street as startStreet, p1.no as startNo, 
      p2.id as endPointId, p2.city as endCity, p2.countie as endCountie, p2.neighbourhood as endNeighbourhood, p2.street as endStreet, p2.no as endNo,
      id_cargo_requests as request_id, driver_id, employerId as employer_id, status, driver.*, vehicle.id as vehicle_id, vehicle.plate, vehicle.model, vehicle.chassisNumber, vehicle.brand,
      trailer.capacity as trailer_capacity, trailer.id as trailer_id, trailer.length as trailer_length, trailer.model as trailer_model, trailer.type as trailer_type, trailer.width as trailer_width
      FROM dorsedb.cargo as cargo, dorsedb.point as p1, dorsedb.point as p2, dorsedb.cargo_requests as request, dorsedb.driver as driver, dorsedb.vehicle as vehicle, dorsedb.trailer as trailer
      WHERE cargo.startPointId=p1.id and cargo.endPointId=p2.id and request.cargo_id=cargo.id and driver_id=driver.id and vehicle.driverId=driver.id and vehicle.trailerId=trailer.id and employerId = ?;
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

dorsedb.callCargoRequestByDriverId = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT cargo.id as cargoId, DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS startDate , DATE_FORMAT(cargo.startDate, '%Y-%m-%d') AS endDate, cargo.vehicleType, cargo.trailerType,cargo.tonnage, cargo.volume,cargo.cargoType,cargo.paymentType,cargo.price,cargo.distance,
      cargo.width,cargo.lenght,cargo.height,p1.id as startPointId, p1.city as startCity, p1.countie as startCountie, p1.neighbourhood as startNeighbourhood, p1.street as startStreet, p1.no as startNo, 
      p2.id as endPointId, p2.city as endCity, p2.countie as endCountie, p2.neighbourhood as endNeighbourhood, p2.street as endStreet, p2.no as endNo,
      id_cargo_requests as request_id, driver_id, employerId as employer_id, status, driver.*, vehicle.id as vehicle_id, vehicle.plate, vehicle.model, vehicle.chassisNumber, vehicle.brand,
      trailer.capacity as trailer_capacity, trailer.id as trailer_id, trailer.length as trailer_length, trailer.model as trailer_model, trailer.type as trailer_type, trailer.width as trailer_width
      FROM dorsedb.cargo as cargo, dorsedb.point as p1, dorsedb.point as p2, dorsedb.cargo_requests as request, dorsedb.driver as driver, dorsedb.vehicle as vehicle, dorsedb.trailer as trailer
      WHERE cargo.startPointId=p1.id and cargo.endPointId=p2.id and request.cargo_id=cargo.id and driver_id=driver.id and vehicle.driverId=driver.id and vehicle.trailerId=trailer.id and driver_id = ?;
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

dorsedb.addCargoRequest = (cargoRequest) => {
  return new Promise((resolve, reject) => {
    pool.query(`INSERT INTO dorsedb.cargo_requests SET ?`, [cargoRequest], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

dorsedb.updateCargoRequest = (cargoRequest, id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE dorsedb.cargo_requests SET ? WHERE id_cargo_requests = ?`,
      [cargoRequest, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

dorsedb.deleteCargoRequest = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `DELETE FROM dorsedb.cargo_requests as request 
      WHERE request.id_cargo_requests=?;
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
module.exports = dorsedb;
