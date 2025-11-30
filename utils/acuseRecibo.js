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


// Crear DetalleAcuseRecibo



function crearDetalleAcuseRecibo(acuse) {
  const lines = [];

  lines.push(`${INDENT_aux2}<DetalleAcusedeRecibo>`);

  // Versión (valor esperado "1.0")
  if (acuse.Version !== undefined && acuse.Version !== null)
    lines.push(`${INDENT_aux4}<Version>${acuse.Version}</Version>`);
  else
    lines.push(`${INDENT_aux4}<Version>1.0</Version>`); // valor por defecto según spec

  if (acuse.RNCEmisor)
    lines.push(`${INDENT_aux4}<RNCEmisor>${acuse.RNCEmisor}</RNCEmisor>`);

  if (acuse.RNCComprador)
    lines.push(`${INDENT_aux4}<RNCComprador>${acuse.RNCComprador}</RNCComprador>`);

  if (acuse.eNCF)
    lines.push(`${INDENT_aux4}<eNCF>${acuse.eNCF}</eNCF>`);

  // Estado: 0 -> Recibido, 1 -> No recibido
  if (acuse.Estado !== undefined && acuse.Estado !== null)
    lines.push(`${INDENT_aux4}<Estado>${acuse.Estado}</Estado>`);

  // CodigoMotivoNoRecibido: condicional a Estado == 1
  if ((acuse.Estado === 1 || acuse.Estado === "1") && (acuse.CodigoMotivoNoRecibido !== undefined && acuse.CodigoMotivoNoRecibido !== null))
    lines.push(`${INDENT_aux4}<CodigoMotivoNoRecibido>${acuse.CodigoMotivoNoRecibido}</CodigoMotivoNoRecibido>`);

  // Fecha y Hora de generación del acuse (dd-MM-AAAA HH:mm:ss)
  if (acuse.FechaHoraAcuseRecibo)
    lines.push(`${INDENT_aux4}<FechaHoraAcuseRecibo>${acuse.FechaHoraAcuseRecibo}</FechaHoraAcuseRecibo>`);

  

  lines.push(`${INDENT_aux2}</DetalleAcusedeRecibo>`);

  // Signature (subnodo) — placeholder o contenido real
  // Espera que acuse.Signature contenga el XML de Signature ya formado (string) o un objeto a procesar.
  if (acuse.Signature) {
    // Si ya tienes la cadena XML de la firma, insértala tal cual (sin escaparla)
    // Suponemos que acuse.Signature es una cadena con <Signature>...</Signature>
    // Para mantener identación consistente, la dividimos por líneas y añadimos INDENT_aux4
    const sigLines = String(acuse.Signature).split("\n").map(l => l.trim()).filter(l => l.length > 0);
    sigLines.forEach(l => lines.push(`${INDENT_aux4}${l}`));
  } else {
    // Placeholder: se puede reemplazar por la función de firmado real
    lines.push(`${INDENT_aux4}<Signature>`);
    lines.push(`${INDENT_aux6}<!-- Firma digital del Acuse de Recibo (insertar aquí el XML de Signature generado por tu proceso de firmado) -->`);
    lines.push(`${INDENT_aux4}</Signature>`);
  }

  return lines.join("\n");
}

// Helper opcional para crear un Signature placeholder (si prefieres llamarlo)
function crearSignaturePlaceholder() {
  return `<Signature>
  <!-- Inserte aquí la firma digital -->
</Signature>`;
}


const datosFactura = {
  Encabezado: {
    RNCEmisor: "101010101",
    RNCComprador: "202020202",
    TipoComprobante: "31",
    FechaEmision: "2025-02-10"
  },

  DetallesItems: [
    {
      NumeroLinea: 1,
      Descripcion: "Producto de prueba",
      Cantidad: 1,
      PrecioUnitario: 100.00,
      MontoTotal: 100.00
    }
  ],

  Subtotales: [
    {
      CodigoSubtotal: 1,
      MontoSubtotal: 100.00
    }
  ],

  DescuentosORecargos: [],

  Paginacion: {
    Pagina: 1,
    TotalPaginas: 1
  },

  InformacionReferencia: {
    TipoReferencia: "01",
    Descripcion: "Prueba interna"
  },

  Firma: {
    FirmaDigital: "ABCDEF123456"  // esta la puedes ignorar si no la usas aún
  },

  // ESTE ES EL NODO QUE VAS A PROBAR
  DetalleAcusedeRecibo: {
    Version: "1.0",
    RNCEmisor: "101010101",
    RNCComprador: "202020202",
    eNCF: "E310000000001",
    Estado: 1,                     // 1 = No recibido
    CodigoMotivoNoRecibido: 3,    // Código correcto si Estado = 1
    FechaHoraAcuseRecibo: "10-02-2025 14:25:32",

    // Firma real o placeholder
    Signature: `
<Signature>
  <SignedInfo>
    <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
    <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
  </SignedInfo>
  <SignatureValue>XYZ123ABC</SignatureValue>
</Signature>
`
  }
};



// async function main() {
//   const xml = crearDetalleAcuseRecibo(datosFactura);

//   const respuesta = await subirXMLaDrive(
//     xml,
//     "acuse_0001.xml",
//     "Cliente_001",
//     "Acuse"
//   );

//   console.log(respuesta);
// }

// main();
