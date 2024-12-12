require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const errorMiddleware = require("./middleware/errorMiddleware");
const authRoute = require("./routes/authRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorMiddleware);

app.use("/api/auth", authRoute);

mongoose
  .connect(
    "mongodb+srv://admin:admin@reforcoadm.io4nj.mongodb.net/reforco-backend?retryWrites=true&w=majority&appName=reforcoAdm"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("O servidor esta rodando na porta 3000");
    });
    app.get("/", (req, res) => {
      res.send("O servidor esta rodando na porta 3000");
    });
    console.log("Servidor conectado ao MongoDB");
  })

  .catch((error) => {
    console.log(error);
  });
