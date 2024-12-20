const express = require("express");
const cors = require("cors");
const viajesRoutes = require("./routes/viajesRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/viajes", viajesRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
