const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
// establecemos la conexion con la base de datos mongodb a partir de express y accederemos a todos su datos a partir de la variable app que nos permitira crear el servidor
mongoose.set("strictQuery", false);
mongoose.connect(DB, () => {
  console.log("Connected to MongoDB");
});
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("se ha conectado a la base de datos");
  });

const server = app.listen(5000, () => {
  console.log(`La app esta corriendo en el serviod 500`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name);
  console.log("error");
  server.close(() => {
    process.exit(1);
  });
});
module.exports = mongoose;
module.exports = dotenv;
