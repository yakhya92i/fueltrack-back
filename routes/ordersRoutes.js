const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersControllers");

//--------method get all Orderss--------------
router.get("/allOrders", ordersController.getOrders);
//--------method get an orders----------------
router.get("/anOrders/:id", ordersController.getOrder);
//---------method post a new orders-------------
router.post("/newOrders", ordersController.createOrders);
//-------------method update an orders---------------
router.put("/updateOrders/:id", ordersController.updateOrders);
//--------------method delete an orders------------------
router.delete("/deleteOrders/:id", ordersController.deleteOrders);

module.exports = router;