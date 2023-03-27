const express = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");
const assetRouter = express.Router();
const {
  findAllAsset,
  createAsset,
  findAssetById,
  deleteAssetById,
  updateAssetById,
  findAssetsByEmployeeId,
} = require("../controller/asset.controller");

assetRouter.get("/", findAllAsset);
assetRouter.get("/:id", findAssetById);
assetRouter.get("/employee_id/:id", findAssetsByEmployeeId);
assetRouter.post(
  "/",
  [
    check("employee_id", "employee_id es requerido")
      .trim()
      .exists()
      .not()
      .isEmpty(),
    check("name").trim().exists().not().isEmpty().isString(),
    check("type").trim().exists().not().isEmpty(),
    check("code").trim().isInt().exists().not().isEmpty(),
    check("marca").trim().exists().not().isEmpty(),
    check("description").trim().exists().not().isEmpty(),
    check("purchase_date").trim().exists().not().isEmpty(),
    validarCampos,
  ],
  createAsset
);
assetRouter.delete("/:id", deleteAssetById);
assetRouter.put("/:id", updateAssetById);

module.exports = assetRouter;
