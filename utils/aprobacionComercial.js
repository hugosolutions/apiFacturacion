const express = require("express");
const router = express.Router();
const { crearFactura } = require("./generarFactura"); // importa la función
const { subirXMLaDrive } = require("./enviarXMLGoogleDirve"); // importa la función

const {
  INDENT_aux1,
  INDENT_aux2,
  INDENT_aux4,
  INDENT_aux6,
  INDENT_aux8,
  INDENT_aux10,
  formatNumberDecimal16y2,
  formatNumberDecimal16y3,
  formatNumberDecimal16y4,
  formatNumberDecimal3y4,
  formatNumberDecimal3y2
} = require("./functionsUtils");







function crearDetalleAprobacionComercial(data) {
  const lines = [];

  lines.push(`${INDENT_aux4}<DetalleAprobacionComercial>`);

  if (data.Version)
    lines.push(`${INDENT_aux6}<Version>${data.Version}</Version>`);

  if (data.RNCEmisor)
    lines.push(`${INDENT_aux6}<RNCEmisor>${data.RNCEmisor}</RNCEmisor>`);

  if (data.eNCF)
    lines.push(`${INDENT_aux6}<eNCF>${data.eNCF}</eNCF>`);

  if (data.FechaEmision)
    lines.push(`${INDENT_aux6}<FechaEmision>${data.FechaEmision}</FechaEmision>`);

  if (data.MontoTotal)
    lines.push(`${INDENT_aux6}<MontoTotal>${data.MontoTotal}</MontoTotal>`);

  if (data.RNCComprador)
    lines.push(`${INDENT_aux6}<RNCComprador>${data.RNCComprador}</RNCComprador>`);

  if (data.Estado)
    lines.push(`${INDENT_aux6}<Estado>${data.Estado}</Estado>`);

  // Solo si Estado = 2 (Rechazado)
  if (data.Estado == 2 && data.DetalleMotivoRechazo)
    lines.push(`${INDENT_aux6}<DetalleMotivoRechazo>${data.DetalleMotivoRechazo}</DetalleMotivoRechazo>`);

  if (data.FechaHoraAprobacionComercial)
    lines.push(`${INDENT_aux6}<FechaHoraAprobacionComercial>${data.FechaHoraAprobacionComercial}</FechaHoraAprobacionComercial>`);

  lines.push(`${INDENT_aux4}</DetalleAprobacionComercial>`);

  // Signature (subnodo) — placeholder o contenido real
  // Espera que data.Signature contenga el XML de Signature ya formado (string) o un objeto a procesar.
  if (data.Signature) {
    // Si ya tienes la cadena XML de la firma, insértala tal cual (sin escaparla)
    // Suponemos que data.Signature es una cadena con <Signature>...</Signature>
    // Para mantener identación consistente, la dividimos por líneas y añadimos INDENT_aux4
    const sigLines = String(data.Signature).split("\n").map(l => l.trim()).filter(l => l.length > 0);
    sigLines.forEach(l => lines.push(`${INDENT_aux4}${l}`));
  } else {
    // Placeholder: se puede reemplazar por la función de firmado real
    lines.push(`${INDENT_aux4}<Signature>`);
    lines.push(`${INDENT_aux6}<!-- Firma digital del data de Recibo (insertar aquí el XML de Signature generado por tu proceso de firmado) -->`);
    lines.push(`${INDENT_aux4}</Signature>`);
  }

  return lines.join("\n");
}



const datosAprobado = {
  Version: "1.0",
  RNCEmisor: "101010101",
  eNCF: "E310000000457",
  FechaEmision: "2025-02-12",
  MontoTotal: "2500.75",
  RNCComprador: "202020202",
  Estado: 1, // 1 = Aprobado
  FechaHoraAprobacionComercial: "12-02-2025 16:45:10",

  Signature: `
<Signature>
  <SignedInfo>
    <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
    <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
  </SignedInfo>
  <SignatureValue>XYZ987654321ABC</SignatureValue>
</Signature>
`
};


const datosRechazado = {
  Version: "1.0",
  RNCEmisor: "101010101",
  eNCF: "E310000000458",
  FechaEmision: "2025-02-12",
  MontoTotal: "1850.00",
  RNCComprador: "202020202",
  Estado: 2, // 2 = Rechazado
  DetalleMotivoRechazo: "El monto facturado no coincide con la orden de compra.",
  FechaHoraAprobacionComercial: "12-02-2025 17:03:21",

  Signature: `
<Signature>
  <SignedInfo>
    <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
    <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
  </SignedInfo>
  <SignatureValue>AAA111BBB222CCC</SignatureValue>
</Signature>
`
};




// async function main() {
//   const xml = crearDetalleAprobacionComercial(datosRechazado);

//   const respuesta = await subirXMLaDrive(
//     xml,
//     "aprobacion_0001.xml",
//     "Cliente_001",
//     "Aprobaciones"
//   );

//   console.log(respuesta);
// }

// main();

