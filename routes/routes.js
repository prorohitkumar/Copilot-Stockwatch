const express = require("express");
const router = express.Router();
const StockController = require("../controller/StockController");

//get all stock data of a country using twelvedata api
router.get("/stocks/:country", StockController.getAllStocksOfCountry);
//get stock data using twelvedata api
router.get("/stock/:symbol", StockController.getStockData);
//add stock to database
router.post("/stock", StockController.addStock);
//get all stock data from database
router.get("/stock", StockController.getAllStocks);

module.exports = router;
