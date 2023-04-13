const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  exchange: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
});

const stock = mongoose.model("stock", StockSchema);
module.exports = stock;
