// controller for stock to get stock data from database and tweleve data from api
const Stock = require("../model/Stock");

//get all stock data of a country using twelvedata api
const axios = require("axios");

const apiKey = "58382bf8370949938e75268bd9445e08";
// e.g., USA, UK, CAN

const getAllStocksOfCountry = async (req, res) => {
  const country = req.params.country;
  const apiUrl = `https://api.twelvedata.com/stocks?country=${country}&source=docs&apikey=${apiKey}`;
  axios
    .get(apiUrl)
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

//get stock data using twelvedata api
const getStockData = async (req, res) => {
  const symbol = req.params.symbol;
  // const apiUrl = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${apiKey}`;
  const apiUrl = `https://api.twelvedata.com/time_series?apikey=${apiKey}&interval=1min&symbol=${symbol}`;
  axios
    .get(apiUrl)
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

//add stock to database
const addStock = async (req, res) => {
  const stock = new Stock({
    name: req.body.name,
    type: req.body.type,
    country: req.body.country,
    exchange: req.body.exchange,
    currency: req.body.currency,
    symbol: req.body.symbol,
  });
  try {
    const newStock = await stock.save();
    res.status(201).json(newStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//get all stock data from database
const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getAllStocksOfCountry = getAllStocksOfCountry;
module.exports.getStockData = getStockData;
module.exports.addStock = addStock;
module.exports.getAllStocks = getAllStocks;
