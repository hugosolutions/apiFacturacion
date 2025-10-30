const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mensaje: "Aquí irá la lógica para consultar el estado de la factura" });
});

module.exports = router;
