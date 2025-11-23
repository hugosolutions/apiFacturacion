const INDENT_aux1 = " "; // 1 espacio
const INDENT_aux2 = "  "; // 2 espacio
const INDENT_aux4 = "    "; // 4 espacio
const INDENT_aux6 = "      "; // 6 espacio
const INDENT_aux8 = "        "; // 8 espacio


const INDENT_aux10 = "          "; // 10 espacio

function formatNumberDecimal16y2(num) {
  const n = Number(num);
  if (isNaN(n)) return null;

  // 2 decimales fijos
  const fixed = n.toFixed(2); 
  
  // Separar enteros y decimales
  const [integerPart, decimalPart] = fixed.split(".");

  // Rellenar a 16 dígitos la parte entera
  const paddedInteger = integerPart.padStart(16, "0");

  return `${paddedInteger}.${decimalPart}`;
}

function formatNumberDecimal16y3(num) {
  const n = Number(num);
  if (isNaN(n)) return null;

  // 2 decimales fijos
  const fixed = n.toFixed(3); 
  
  // Separar enteros y decimales
  const [integerPart, decimalPart] = fixed.split(".");

  // Rellenar a 16 dígitos la parte entera
  const paddedInteger = integerPart.padStart(16, "0");

  return `${paddedInteger}.${decimalPart}`;
}

function formatNumberDecimal16y4(num) {
  const n = Number(num);
  if (isNaN(n)) return null;

  // 2 decimales fijos
  const fixed = n.toFixed(4); 
  
  // Separar enteros y decimales
  const [integerPart, decimalPart] = fixed.split(".");

  // Rellenar a 16 dígitos la parte entera
  const paddedInteger = integerPart.padStart(16, "0");

  return `${paddedInteger}.${decimalPart}`;
}

function formatNumberDecimal3y4(num) {
  const n = Number(num);
  if (isNaN(n)) return null;

  // 2 decimales fijos
  const fixed = n.toFixed(4); 
  
  // Separar enteros y decimales
  const [integerPart, decimalPart] = fixed.split(".");

  // Rellenar a 16 dígitos la parte entera
  const paddedInteger = integerPart.padStart(3, "0");

  return `${paddedInteger}.${decimalPart}`;
}

function formatNumberDecimal3y2(num) {
  const n = Number(num);
  if (isNaN(n)) return null;

  // 2 decimales fijos
  const fixed = n.toFixed(2); 
  
  // Separar enteros y decimales
  const [integerPart, decimalPart] = fixed.split(".");

  // Rellenar a 16 dígitos la parte entera
  const paddedInteger = integerPart.padStart(3, "0");

  return `${paddedInteger}.${decimalPart}`;
}

// Exportarlas
module.exports = {
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
};