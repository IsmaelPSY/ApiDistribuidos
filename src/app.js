// Importando
const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const config = require("./config");


// Routes
const usersRoutes = require("./users/users.routes").router
const authRoutes = require('./auth/auth.routes').router


// Iniciando la aplicacion
const app = express();

// Permitir CORS
app.use(cors())

// Permitir formato JSON
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.status(200).json({
      message: "Welcome to APi authentication"
  })
})

app.use("/api/v1/users",usersRoutes );
app.use("/api/v1/auth", authRoutes);

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`)
})

module.exports = { app };


