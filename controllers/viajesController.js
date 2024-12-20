const pool = require("../config/database");

const obtenerViajes = async () => {
  const result = await pool.query("SELECT * FROM viajes");
  return result.rows;
};

const agregarViaje = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2)";
  const values = [destino, presupuesto];
  const result = await pool.query(consulta, values);
  return result.rowCount;
};

const modificarPresupuesto = async (presupuesto, id) => {
  const consulta = "UPDATE viajes SET presupuesto = $1 WHERE id = $2";
  const values = [presupuesto, id];
  await pool.query(consulta, values);
};

const eliminarViaje = async (id) => {
  const consulta = "DELETE FROM viajes WHERE id = $1";
  const values = [id];
  await pool.query(consulta, values);
};

module.exports = {
  obtenerViajes,
  agregarViaje,
  modificarPresupuesto,
  eliminarViaje,
};
