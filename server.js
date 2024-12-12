require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const errorMiddleware = require("./middleware/errorMiddleware");
const authRoute = require("./routes/authRoute");

const app = express();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const API_URL = process.env.API_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorMiddleware);

app.use('/api/auth', authRoute);

mongoose.connect(MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
    console.log("API:", API_URL);
  });

  app.get("/", (req, res) => {
    res.send("Servidor conectado ao MongoDB");
  });
}); 
