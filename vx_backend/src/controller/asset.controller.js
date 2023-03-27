const assetModel = require("../model/asset.model");
const employeeModel = require("../model/employee.model");

const findAllAsset = async (req, res) => {
  try {
    const filtros = req.query
    console.log(filtros)


    const assets = await assetModel.findAllAsset(filtros);

    res.status(200).json({ data: assets });
  } catch (error) {
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};

const findAssetById = async (req, res) => {
  try {
    const { id } = req.params;

    const asset = await assetModel.findById(id);

    res.status(200).json({ asset });
  } catch (error) {
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};

const findAssetsByEmployeeId = async (req, res) => {
  try {
    const { id } = req.params;

    const assets = await assetModel.findAssetsByEmployeeId(id);

    res.status(200).json({ assets });
  } catch (error) {
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};

const createAsset = async (req, res) => {
  try {
    const values = { ...req.body };

    const { employee_id } = values;
    const existemployee = await employeeModel.findById(employee_id);

    if (!existemployee) {
      return res.status(400).json({ msg: "no existe un empleado con ese id" });
    }

    const result = await assetModel.createAsset(values);

    const { insertId } = result;

    const asset = await assetModel.findById(insertId);

    res.status(200).json({ data: asset });
  } catch (error) {
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};
const updateAssetById = async (req, res) => {
  try {
    const { id } = req.params;

    const existAsset = await assetModel.findById(id);

    if (!existAsset) {
      return res.status(400).json({ msg: "no existe un asset con ese id" });
    }

    const values = { ...req.body };

    await assetModel.updateById(id, values);

    const asset = await assetModel.findById(id);

    res.status(200).json({ asset });
  } catch (error) {
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};

const deleteAssetById = async (req, res) => {
  try {
    const { id } = req.params;

    const existAsset = await assetModel.findById(id);

    if (!existAsset) {
      return res
        .status(400)
        .json({ msg: "no existe un asset con ese id", ok: false });
    }

    await assetModel.deleteById(id);

    res.status(200).json({ mensaje: `asset ${id} eliminado`, ok: true });
  } catch (error) {
    res.status(500).json({ msg: "Algo salió mal", error: error });
  }
};

module.exports = {
  findAllAsset: findAllAsset,
  createAsset: createAsset,
  findAssetById: findAssetById,
  deleteAssetById: deleteAssetById,
  updateAssetById: updateAssetById,
  findAssetsByEmployeeId: findAssetsByEmployeeId,
};
