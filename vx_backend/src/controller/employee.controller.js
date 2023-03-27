const assetModel = require("../model/asset.model");
const employeeModel = require("../model/employee.model");

const findAllEmployee = async (req, res) => {
  try {
    const filtros = req.query
    console.log(filtros)

    const employees = await employeeModel.findAllEmployee(filtros);

    res.status(200).json({ data: employees });
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};

const findEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await employeeModel.findById(id);

    res.status(200).json({ employee });
  } catch (error) {
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};

const createEmployee = async (req, res) => {
  try {
    const values = { ...req.body };

    const { cuit } = values;

    const existCuit = await employeeModel.findByCuit(cuit);
    if (existCuit) {
      return res
        .status(400)
        .json({ msg: "ya existe un empleado con ese cuit" });
    }

    const result = await employeeModel.createEmployee(values);

    const { insertId } = result;

    const employee = await employeeModel.findById(insertId);

    res.status(200).json({ data: employee });
  } catch (error) {
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};

const updateEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const existemployee = await employeeModel.findById(id);

    if (!existemployee) {
      return res.status(400).json({ msg: "no existe un empleado con ese id" });
    }

    const values = { ...req.body };

    await employeeModel.updateById(id, values);

    const employee = await employeeModel.findById(id);

    res.status(200).json({ employee });
  } catch (error) {
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};

const deleteEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const existemployee = await employeeModel.findById(id);

    if (!existemployee) {
      return res
        .status(400)
        .json({ msg: "no existe un empleado con ese id", ok: false });
    }

    await employeeModel.deleteById(id);

    await assetModel.resetByEmployeeId(id);

    return res
      .status(200)
      .json({ mensaje: `usuario ${id} eliminado`, ok: true });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Algo salió mal", error: error, ok: false });
  }
};

module.exports = {
  findAllEmployee: findAllEmployee,
  createEmployee: createEmployee,
  findEmployeeById: findEmployeeById,
  deleteEmployeeById: deleteEmployeeById,
  updateEmployeeById: updateEmployeeById,
};
