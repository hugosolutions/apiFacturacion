const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware JSON
app.use(express.json());

// Rutas
const enviarFacturaRoute = require("./routes/enviarFactura");
const consultarFacturaRoute = require("./routes/consultarFactura");

app.use("/enviarFactura", enviarFacturaRoute);
app.use("/consultarFactura", consultarFacturaRoute);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de Facturación funcionando ✅");
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

