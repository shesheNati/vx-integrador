const rootRouter = require("express").Router();
const employeeRoutes = require("./employee.route");
const assetRoutes = require("./asset.route");

// rutas
rootRouter.use("/employee", employeeRoutes);
rootRouter.use("/asset", assetRoutes);

module.exports = rootRouter;
