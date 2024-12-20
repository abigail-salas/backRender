const pool = require("../config/database");

const createTables = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS viajes (
            id SERIAL PRIMARY KEY,
            destino VARCHAR(255) NOT NULL,
            presupuesto INT NOT NULL
        );
      `);
    console.log('Tabla "viajes" creada correctamente.');
  } catch (error) {
    console.error("Error al crear la tabla:", error);
  }
};

const insertData = async () => {
  try {
    await pool.query(`
        INSERT INTO viajes (destino, presupuesto) VALUES
        ('París', 150000),
        ('Londres', 120000),
        ('Nueva York', 180000),
        ('Tokio', 200000),
        ('Sídney', 220000),
        ('Roma', 100000),
        ('Barcelona', 95000),
        ('Berlín', 110000),
        ('Bangkok', 85000),
        ('Dubái', 250000),
        ('Ciudad de México', 60000),
        ('Buenos Aires', 70000),
        ('Toronto', 130000),
        ('El Cairo', 90000),
        ('Delhi', 75000),
        ('Cape Town', 125000),
        ('Moscú', 115000),
        ('Seúl', 140000),
        ('Singapur', 210000),
        ('Estambul', 95000);
      `);
    console.log("Datos iniciales insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar datos:", error);
  }
};

const setupDatabase = async () => {
  await createTables();
  await insertData();
  pool.end();
};

setupDatabase();
