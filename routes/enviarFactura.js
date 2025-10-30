const express = require("express");
const router = express.Router();
const { crearFactura } = require("../utils/facturaGenerator"); // importa la función

router.post("/", async (req, res) => {
  try {
    const datosFactura = req.body;

    const xml = crearFactura(datosFactura);

    // Puedes guardar el XML o retornarlo directamente
    res.json({
      status: "ok",
      mensaje: "Factura generada correctamente",
      xml: xml,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      mensaje: "Error al generar la factura",
      error: error.message,
    });
  }
});

module.exports = router;
