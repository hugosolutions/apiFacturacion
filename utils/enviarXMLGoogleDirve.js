const axios = require("axios");
const { create } = require("xmlbuilder2");

async function subirXMLaDrive(xmlString, archivo, cliente, tipo) {
  const url = "https://script.google.com/macros/s/AKfycbxVgZ7hg7_p6VagfroYP6NYyBopdG-ibEpcsBSUMC1DMYBK3GRbYRxDNUfT8bJALvrc/exec";

  const payload = {
    xmlContent: xmlString,
    fileName: archivo,
    cliente: cliente,
    tipo: tipo  // ejemplo: "anulacion", "factura", "acuse"
  };

  const res = await axios.post(url, payload);
  return res.data;
}

module.exports = { subirXMLaDrive };
