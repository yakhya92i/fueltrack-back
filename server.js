const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

require("dotenv").config()

//connection to the database
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log(" connection to the db"))
.catch((err)=> console.log(err));

const app = express();

const PORT = process.env.PORT || 5001
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRoute = require('./routes/userRoutes');
const orderRoute = require('./routes/ordersRoutes');
const productRoute = require("./routes/productsRoutes");
const authRoute = require("./routes/authRoutes");

app.use("/api/products", productRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
// app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});