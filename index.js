// setup express nodejs server and mongoose
const express = require("express");
const mongoose = require("mongoose");

// setup express nodejs server
const app = express();
const port = 3000;

// setup mongoose
const db = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/stock", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// setup express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup routes
const routes = require("./routes/routes");
app.use("/", routes);

//integrate frontend with backend
app.use(express.static("./views"));
app.get("/", (req, res) => {
  res.sendFile("./views/index.html");
});

//configure cors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:4200/",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

//start express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
