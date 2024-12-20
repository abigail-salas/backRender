const express = require("express");
const {
  obtenerViajes,
  agregarViaje,
  modificarPresupuesto,
  eliminarViaje,
} = require("../controllers/viajesController");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const viajes = await obtenerViajes();
    res.json(viajes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los viajes" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { destino, presupuesto } = req.body;
    await agregarViaje(destino, presupuesto);
    res.send("Viaje agregado con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el viaje" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { presupuesto } = req.query;
  try {
    await modificarPresupuesto(presupuesto, id);
    res.send("Presupuesto modificado con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al modificar el presupuesto" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await eliminarViaje(id);
    res.send("Viaje eliminado con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el viaje" });
  }
});

module.exports = router;
