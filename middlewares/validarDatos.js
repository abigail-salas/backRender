const validarViaje = (req, res, next) => {
  const { destino, presupuesto } = req.body;
  if (!destino || !presupuesto) {
    return res
      .status(400)
      .json({ error: "Destino y presupuesto son obligatorios" });
  }
  if (isNaN(presupuesto) || presupuesto <= 0) {
    return res
      .status(400)
      .json({ error: "Presupuesto debe ser un número positivo" });
  }
  next();
};

module.exports = { validarViaje };
