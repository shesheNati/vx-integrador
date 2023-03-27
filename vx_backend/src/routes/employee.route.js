const express = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");
const employeeRouter = express.Router();
const {
  findAllEmployee,
  createEmployee,
  findEmployeeById,
  deleteEmployeeById,
  updateEmployeeById,
} = require("../controller/employee.controller");

employeeRouter.get("/", findAllEmployee);
employeeRouter.get("/:id", findEmployeeById);
employeeRouter.post(
  "/",
  [
    check("first_name", "el nombre es requerido")
      .trim()
      .exists()
      .not()
      .isEmpty()
      .isString(),
    check("last_name", "el apellido es requerido")
      .trim()
      .exists()
      .not()
      .isEmpty()
      .isString(),
    check("cuit", "el cuit es requerido")
      .exists()
      .trim()
      .not()
      .isEmpty()
      .isString(),
    check("team_id", "team_id requerido").exists().trim().not().isEmpty(),
    check("join_date", " join_date es requerido")
      .trim()
      .exists()
      .not()
      .isEmpty(),
    check("rol", " rol es requerido")
      .trim()
      .exists()
      .not()
      .isEmpty()
      .isString(),
    validarCampos,
  ],
  createEmployee
);
employeeRouter.put("/:id", updateEmployeeById);
employeeRouter.delete("/:id", deleteEmployeeById);

module.exports = employeeRouter;
