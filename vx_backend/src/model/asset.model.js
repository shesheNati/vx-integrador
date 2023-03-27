const connection = require("../config/db.config");

const findAllAsset = async () => {
  const rows = await connection
    .query("SELECT * FROM asset")
    .spread((rows) => rows);

  return rows;
};

const createAsset = async (values) => {
  const { employee_id, name, type, code, marca, description, purchase_date } =
    values;

  console.log(values);

  const result = await connection
    .query(
      "INSERT INTO asset( employee_id, name, type, code, marca, description, purchase_date) values( ?, ?, ?, ?, ?, ?, ?)",
      [employee_id, name, type, code, marca, description, purchase_date]
    )
    .spread((result) => result);

  return result;
};

const findById = async (id) => {
  const rows = await connection
    .query("select * from asset where asset_id = ?", [id])
    .spread((rows) => rows);
  return rows.length > 0 ? rows[0] : null;
};

const findAssetsByEmployeeId = async (id) => {
  const rows = await connection
    .query("select * from asset where employee_id = ?", [id])
    .spread((rows) => rows);
  return rows;
};

const updateById = async (id, asset) => {
  const rows = await connection
    .query("UPDATE  `asset` SET ? WHERE `asset_id` = ?", [asset, id])
    .spread((rows) => rows);
  return rows;
  // return rows.length > 0 ? rows[0] : []
};

const deleteById = async (id) => {
  const rows = await connection
    .query("DELETE FROM `asset` WHERE `asset_id` = ?", [id])
    .spread((rows) => rows);
  return rows.length > 0 ? rows[0] : [];
};

const resetByEmployeeId = async (id) => {
  const rows = await connection
    .query("UPDATE  `asset` SET employee_id = 0 WHERE `employee_id` = ?", [id])
    .spread((rows) => rows);
  return rows;
  // return rows.length > 0 ? rows[0] : []
};

module.exports = {
  findAllAsset: findAllAsset,
  createAsset: createAsset,
  findById: findById,
  deleteById: deleteById,
  updateById: updateById,
  findAssetsByEmployeeId: findAssetsByEmployeeId,
  resetByEmployeeId: resetByEmployeeId,
};
