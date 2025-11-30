const express = require("express");
const router = express.Router();
const { crearFactura } = require("../utils/generarFactura"); // importa la función
const { subirXMLaDrive } = require("./enviarXMLGoogleDirve"); // importa la función


router.post("/", async (req, res) => {
  try {
    const datosFactura = req.body;

    const xml = crearFactura(datosFactura);

    const respuesta = await subirXMLaDrive(
      xml,
      "anulacion_0001.xml",
      "Cliente_001",
      "anulaciones"
    );
    // const xml = datosFactura;
    console.log("Datos de la factura recibidos:", datosFactura);


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



