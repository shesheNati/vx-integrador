const connection = require("../config/db.config");

const findAllEmployee = async () => {
  const rows = await connection
    .query("SELECT * FROM employee")
    .spread((rows) => rows);

  return rows;
};

const createEmployee = async (values) => {
  const { first_name, last_name, cuit, team_id, join_date, rol } = values;

  console.log(values);

  const result = await connection
    .query(
      "INSERT INTO employee(first_name, last_name, cuit, team_id, join_date, rol) values(?, ?, ?, ?, ?, ?)",
      [first_name, last_name, cuit, team_id, join_date, rol]
    )
    .spread((result) => result);

  return result;
};

const findById = async (id) => {
  const rows = await connection
    .query("select * from employee where employee_id = ?", [id])
    .spread((rows) => rows);
  return rows.length > 0 ? rows[0] : null;
};

const findByCuit = async (cuit) => {
  const rows = await connection
    .query("select * from employee where cuit = ?", [cuit])
    .spread((rows) => rows);
  return rows.length > 0 ? rows[0] : null;
};

const updateById = async (id, employee) => {
  const rows = await connection
    .query("UPDATE  `employee` SET ? WHERE `employee_id` = ?", [employee, id])
    .spread((rows) => rows);
  return rows;
  // return rows.length > 0 ? rows[0] : []
};

const deleteById = async (id) => {
  const rows = await connection
    .query("DELETE FROM `employee` WHERE `employee_id` = ?", [id])
    .spread((rows) => rows);
  return rows.length > 0 ? rows[0] : [];
};

module.exports = {
  findAllEmployee: findAllEmployee,
  createEmployee: createEmployee,
  findById: findById,
  deleteById: deleteById,
  updateById: updateById,
  findByCuit: findByCuit,
};
