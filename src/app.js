const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const amantesRoutes = require("./routes/amantes.routes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/amantes", amantesRoutes);

app.listen(3000, () =>
  console.log("API corriendo en http://localhost:3000")
);