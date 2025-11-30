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




function crearEncabezadoAnulacion(data) {
  const lines = [];

  lines.push(`${INDENT_aux4}<Encabezado>`);

  if (data.Version)
    lines.push(`${INDENT_aux6}<Version>${data.Version}</Version>`);

  if (data.RncEmisor)
    lines.push(`${INDENT_aux6}<RncEmisor>${data.RncEmisor}</RncEmisor>`);

  if (data.CantidadeNCFAnulados)
    lines.push(`${INDENT_aux6}<CantidadeNCFAnulados>${data.CantidadeNCFAnulados}</CantidadeNCFAnulados>`);

  if (data.FechaHoraAnulacioneNCF)
    lines.push(`${INDENT_aux6}<FechaHoraAnulacioneNCF>${data.FechaHoraAnulacioneNCF}</FechaHoraAnulacioneNCF>`);

  lines.push(`${INDENT_aux4}</Encabezado>`);

  return lines.join("\n");
}


function crearDetalleAnulacion(detalles) {
  const lines = [];

  lines.push(`${INDENT_aux4}<DetalleAnulacion>`);

  detalles.forEach(det => {
    lines.push(crearAnulacion(det));
  });

  lines.push(`${INDENT_aux4}</DetalleAnulacion>`);

  return lines.join("\n");
}


function crearAnulacion(item) {
  const lines = [];

  lines.push(`${INDENT_aux6}<Anulacion>`);

  if (item.NoLinea)
    lines.push(`${INDENT_aux8}<NoLinea>${item.NoLinea}</NoLinea>`);

  if (item.TipoeCF)
    lines.push(`${INDENT_aux8}<TipoeCF>${item.TipoeCF}</TipoeCF>`);

  if (item.Rangos && item.Rangos.length > 0) {
    lines.push(crearTablaRangoSecuencias(item.Rangos));
  }

  if (item.CantidadeNCFAnulados)
    lines.push(`${INDENT_aux8}<CantidadeNCFAnulados>${item.CantidadeNCFAnulados}</CantidadeNCFAnulados>`);

  lines.push(`${INDENT_aux6}</Anulacion>`);

  return lines.join("\n");
}


function crearTablaRangoSecuencias(rangos) {
  const lines = [];

  lines.push(`${INDENT_aux8}<TablaRangoSecuenciasAnuladaseNCF>`);

  rangos.forEach(r => {
    if (r.SecuenciaeNCFDesde)
      lines.push(`${INDENT_aux10}<SecuenciaeNCFDesde>${r.SecuenciaeNCFDesde}</SecuenciaeNCFDesde>`);

    if (r.SecuenciaeNCFHasta)
      lines.push(`${INDENT_aux10}<SecuenciaeNCFHasta>${r.SecuenciaeNCFHasta}</SecuenciaeNCFHasta>`);
  });

  lines.push(`${INDENT_aux8}</TablaRangoSecuenciasAnuladaseNCF>`);

  return lines.join("\n");
}



function crearSignatureAnulacion(data) {
  const lines = [];

  lines.push(`${INDENT_aux4}<Signature>`);

  if (data.FirmaDigital)
    lines.push(`${INDENT_aux6}<FirmaDigital>${data.FirmaDigital}</FirmaDigital>`);

  lines.push(`${INDENT_aux4}</Signature>`);

  return lines.join("\n");
}
function generarXMLAnulacion(datos) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<AnulacioneNCF>`;

  // ENCABEZADO
  if (datos.Encabezado && Object.keys(datos.Encabezado).length > 0) {
    xml += "\n" + crearEncabezadoAnulacion(datos.Encabezado);
  }

  // DETALLE ANULACIÓN
  if (datos.DetalleAnulacion && datos.DetalleAnulacion.length > 0) {
    xml += "\n" + crearDetalleAnulacion(datos.DetalleAnulacion);
  }

  // SIGNATURE
  if (datos.Signature && Object.keys(datos.Signature).length > 0) {
    xml += "\n" + crearSignatureAnulacion(datos.Signature);
  }

  xml += `\n</AnulacioneNCF>`;
  return xml;
}



const datosPruebaAnulacion = {
  Encabezado: {
    Version: "1.0",
    RncEmisor: "101010101",
    CantidadeNCFAnulados: 3,
    FechaHoraAnulacioneNCF: "25-02-2025 14:33:20"
  },

  DetalleAnulacion: [
    {
      NoLinea: 1,
      TipoeCF: "31",
      CantidadeNCFAnulados: 2,
      Rangos: [
        {
          SecuenciaeNCFDesde: "E310000000500",
          SecuenciaeNCFHasta: "E310000000501"
        }
      ]
    },
    {
      NoLinea: 2,
      TipoeCF: "32",
      CantidadeNCFAnulados: 1,
      Rangos: [
        {
          SecuenciaeNCFDesde: "E320000001150",
          SecuenciaeNCFHasta: "E320000001150"
        }
      ]
    }
  ],

  Signature: {
    FirmaDigital: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvEj123ABCXYZFAKEFIRMA999"
  }
};

// async function main() {
//   const xml = generarXMLAnulacion(datosPruebaAnulacion);

//   const respuesta = await subirXMLaDrive(
//     xml,
//     "anulacion_0001.xml",
//     "Cliente_001",
//     "anulaciones"
//   );

//   console.log(respuesta);
// }

// main();

