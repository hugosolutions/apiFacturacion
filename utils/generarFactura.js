const { create } = require("xmlbuilder2");
// Función para IdDoc
function crearIdDoc(idDoc) {
  return `
<IdDoc>
  <TipoeCF>${idDoc.TipoeCF}</TipoeCF>
  <eNCF>${idDoc.eNCF}</eNCF>
  <FechaVencimientoSecuencia>${idDoc.FechaVencimientoSecuencia}</FechaVencimientoSecuencia>
  <IndicadorEnvioDiferido>${idDoc.IndicadorEnvioDiferido}</IndicadorEnvioDiferido>
  <IndicadorMontoGravado>${idDoc.IndicadorMontoGravado}</IndicadorMontoGravado>
  <IndicadorServicioTodoIncluido>${idDoc.IndicadorServicioTodoIncluido}</IndicadorServicioTodoIncluido>
  <TipoIngresos>${idDoc.TipoIngresos}</TipoIngresos>
  <TipoPago>${idDoc.TipoPago}</TipoPago>
  <FechaLimitePago>${idDoc.FechaLimitePago}</FechaLimitePago>
  <TerminoPago>${idDoc.TerminoPago}</TerminoPago>
  <TablaFormasPago>
    ${idDoc.TablaFormasPago.map(fp => `
    <FormaDePago>
      <FormaPago>${fp.FormaPago}</FormaPago>
      <MontoPago>${fp.MontoPago}</MontoPago>
    </FormaDePago>`).join('')}
  </TablaFormasPago>
  <TipoCuentaPago>${idDoc.TipoCuentaPago}</TipoCuentaPago>
  <NumeroCuentaPago>${idDoc.NumeroCuentaPago}</NumeroCuentaPago>
  <BancoPago>${idDoc.BancoPago}</BancoPago>
  <FechaDesde>${idDoc.FechaDesde}</FechaDesde>
  <FechaHasta>${idDoc.FechaHasta}</FechaHasta>
  <TotalPaginas>${idDoc.TotalPaginas}</TotalPaginas>
</IdDoc>`;
}

// Función para Emisor
function crearEmisor(emisor) {
  return `
<Emisor>
  <RNCEmisor>${emisor.RNCEmisor}</RNCEmisor>
  <RazonSocialEmisor>${emisor.RazonSocialEmisor}</RazonSocialEmisor>
  <NombreComercial>${emisor.NombreComercial}</NombreComercial>
  <Sucursal>${emisor.Sucursal}</Sucursal>
  <DireccionEmisor>${emisor.DireccionEmisor}</DireccionEmisor>
  <Municipio>${emisor.Municipio}</Municipio>
  <Provincia>${emisor.Provincia}</Provincia>
  <TablaTelefonoEmisor>
    ${emisor.Telefonos.map(t => `<TelefonoEmisor>${t}</TelefonoEmisor>`).join('')}
  </TablaTelefonoEmisor>
  <CorreoEmisor>${emisor.CorreoEmisor}</CorreoEmisor>
  <WebSite>${emisor.WebSite}</WebSite>
  <ActividadEconomica>${emisor.ActividadEconomica}</ActividadEconomica>
  <CodigoVendedor>${emisor.CodigoVendedor}</CodigoVendedor>
  <NumeroFacturaInterna>${emisor.NumeroFacturaInterna}</NumeroFacturaInterna>
  <NumeroPedidoInterno>${emisor.NumeroPedidoInterno}</NumeroPedidoInterno>
  <ZonaVenta>${emisor.ZonaVenta}</ZonaVenta>
  <RutaVenta>${emisor.RutaVenta}</RutaVenta>
  <InformacionAdicionalEmisor>${emisor.InformacionAdicionalEmisor}</InformacionAdicionalEmisor>
  <FechaEmision>${emisor.FechaEmision}</FechaEmision>
</Emisor>`;
}

// Función para Comprador
function crearComprador(comprador) {
  return `
<Comprador>
  ${Object.entries(comprador).map(([k,v]) => `<${k}>${v}</${k}>`).join('')}
</Comprador>`;
}

// Función para InformacionesAdicionales
function crearInformacionesAdicionales(info) {
  return `
<InformacionesAdicionales>
  ${Object.entries(info).map(([k,v]) => `<${k}>${v}</${k}>`).join('')}
</InformacionesAdicionales>`;
}

// Función para Transporte
function crearTransporte(transporte) {
  return `
<Transporte>
  ${Object.entries(transporte).map(([k,v]) => `<${k}>${v}</${k}>`).join('')}
</Transporte>`;
}

// Función para Totales
function crearTotales(totales) {
  return `
<Totales>
  ${Object.entries(totales).map(([k,v]) => `<${k}>${v}</${k}>`).join('')}
</Totales>`;
}

// Función para OtraMoneda
function crearOtraMoneda(moneda) {
  return `
<OtraMoneda>
  ${Object.entries(moneda).map(([k,v]) => `<${k}>${v}</${k}>`).join('')}
</OtraMoneda>`;
}

// Función principal Encabezado
function crearEncabezado(datos) {
  return `
<Encabezado>
  ${crearIdDoc(datos.IdDoc)}
  ${crearEmisor(datos.Emisor)}
  ${crearComprador(datos.Comprador)}
  ${crearInformacionesAdicionales(datos.InformacionesAdicionales)}
  ${crearTransporte(datos.Transporte)}
  ${crearTotales(datos.Totales)}
  ${crearOtraMoneda(datos.OtraMoneda)}
</Encabezado>`;
}


// Función para CodigosItem
function crearCodigosItem(codigos) {
  return codigos.map(c => `
<CodigosItem>
  <TipoCodigo>${c.TipoCodigo}</TipoCodigo>
  <CodigoItem>${c.CodigoItem}</CodigoItem>
</CodigosItem>`).join('');
}

// Función para TablaCodigosItem
function crearTablaCodigosItem(codigos) {
  return `<TablaCodigosItem>
  ${crearCodigosItem(codigos)}
</TablaCodigosItem>`;
}

// Función para Retencion
function crearRetencion(retencion) {
  return `
<Retencion>
  <IndicadorAgenteRetencionoPercepcion>${retencion.IndicadorAgenteRetencionoPercepcion}</IndicadorAgenteRetencionoPercepcion>
  <MontoITBISRetenido>${retencion.MontoITBISRetenido}</MontoITBISRetenido>
  <MontoISRRetenido>${retencion.MontoISRRetenido}</MontoISRRetenido>
</Retencion>`;
}

// Función para SubcantidadItem
function crearSubcantidadItem(subcantidad) {
  return subcantidad.map(s => `
<SubcantidadItem>
  <Subcantidad>${s.Subcantidad}</Subcantidad>
  <CodigoSubcantidad>${s.CodigoSubcantidad}</CodigoSubcantidad>
</SubcantidadItem>`).join('');
}

// Función para TablaSubcantidad
function crearTablaSubcantidad(subcantidad) {
  return `<TablaSubcantidad>
  ${crearSubcantidadItem(subcantidad)}
</TablaSubcantidad>`;
}

// Función para SubDescuento
function crearSubDescuento(subdescuento) {
  return subdescuento.map(s => `
<SubDescuento>
  <TipoSubDescuento>${s.TipoSubDescuento}</TipoSubDescuento>
  <SubDescuentoPorcentaje>${s.SubDescuentoPorcentaje}</SubDescuentoPorcentaje>
  <MontoSubDescuento>${s.MontoSubDescuento}</MontoSubDescuento>
</SubDescuento>`).join('');
}

// Función para TablaSubDescuento
function crearTablaSubDescuento(subdescuento) {
  return `<TablaSubDescuento>
  ${crearSubDescuento(subdescuento)}
</TablaSubDescuento>`;
}

// Función para SubRecargo
function crearSubRecargo(subrecargo) {
  return subrecargo.map(s => `
<SubRecargo>
  <TipoSubRecargo>${s.TipoSubRecargo}</TipoSubRecargo>
  <SubRecargoPorcentaje>${s.SubRecargoPorcentaje}</SubRecargoPorcentaje>
  <MontoSubRecargo>${s.MontoSubRecargo}</MontoSubRecargo>
</SubRecargo>`).join('');
}

// Función para TablaSubRecargo
function crearTablaSubRecargo(subrecargo) {
  return `<TablaSubRecargo>
  ${crearSubRecargo(subrecargo)}
</TablaSubRecargo>`;
}

// Función para ImpuestoAdicional
function crearImpuestoAdicional(impuestos) {
  return impuestos.map(i => `
<ImpuestoAdicional>
  <TipoImpuesto>${i.TipoImpuesto}</TipoImpuesto>
</ImpuestoAdicional>`).join('');
}

// Función para TablaImpuestoAdicional
function crearTablaImpuestoAdicional(impuestos) {
  return `<TablaImpuestoAdicional>
  ${crearImpuestoAdicional(impuestos)}
</TablaImpuestoAdicional>`;
}

// Función para OtraMonedaDetalle
function crearOtraMonedaDetalle(otraMoneda) {
  return `
<OtraMonedaDetalle>
  <PrecioOtraMoneda>${otraMoneda.PrecioOtraMoneda}</PrecioOtraMoneda>
  <DescuentoOtraMoneda>${otraMoneda.DescuentoOtraMoneda}</DescuentoOtraMoneda>
  <RecargoOtraMoneda>${otraMoneda.RecargoOtraMoneda}</RecargoOtraMoneda>
  <MontoItemOtraMoneda>${otraMoneda.MontoItemOtraMoneda}</MontoItemOtraMoneda>
</OtraMonedaDetalle>`;
}

// Función para Item
function crearItem(item) {
  return `
<Item>
  <NumeroLinea>${item.NumeroLinea}</NumeroLinea>
  ${crearTablaCodigosItem(item.TablaCodigosItem)}
  <IndicadorFacturacion>${item.IndicadorFacturacion}</IndicadorFacturacion>
  ${crearRetencion(item.Retencion)}
  <NombreItem>${item.NombreItem}</NombreItem>
  <IndicadorBienoServicio>${item.IndicadorBienoServicio}</IndicadorBienoServicio>
  <DescripcionItem>${item.DescripcionItem}</DescripcionItem>
  <CantidadItem>${item.CantidadItem}</CantidadItem>
  <UnidadMedida>${item.UnidadMedida}</UnidadMedida>
  <CantidadReferencia>${item.CantidadReferencia}</CantidadReferencia>
  <UnidadReferencia>${item.UnidadReferencia}</UnidadReferencia>
  ${crearTablaSubcantidad(item.TablaSubcantidad)}
  <GradosAlcohol>${item.GradosAlcohol}</GradosAlcohol>
  <PrecioUnitarioReferencia>${item.PrecioUnitarioReferencia}</PrecioUnitarioReferencia>
  <FechaElaboracion>${item.FechaElaboracion}</FechaElaboracion>
  <FechaVencimientoItem>${item.FechaVencimientoItem}</FechaVencimientoItem>
  <PrecioUnitarioItem>${item.PrecioUnitarioItem}</PrecioUnitarioItem>
  <DescuentoMonto>${item.DescuentoMonto}</DescuentoMonto>
  ${crearTablaSubDescuento(item.TablaSubDescuento)}
  <RecargoMonto>${item.RecargoMonto}</RecargoMonto>
  ${crearTablaSubRecargo(item.TablaSubRecargo)}
  ${crearTablaImpuestoAdicional(item.TablaImpuestoAdicional)}
  ${crearOtraMonedaDetalle(item.OtraMonedaDetalle)}
  <MontoItem>${item.MontoItem}</MontoItem>
</Item>`;
}

// Función principal para DetallesItems
function crearDetallesItems(items) {
  return `
<DetallesItems>
  ${items.map(i => crearItem(i)).join('')}
</DetallesItems>`;
}


// Función para un Subtotal
function crearSubtotal(subtotal) {
  return `
<Subtotal>
  <NumeroSubTotal>${subtotal.NumeroSubTotal}</NumeroSubTotal>
  <DescripcionSubtotal>${subtotal.DescripcionSubtotal}</DescripcionSubtotal>
  <Orden>${subtotal.Orden}</Orden>
  <SubTotalMontoGravadoTotal>${subtotal.SubTotalMontoGravadoTotal}</SubTotalMontoGravadoTotal>
  <SubTotalMontoGravadoI1>${subtotal.SubTotalMontoGravadoI1}</SubTotalMontoGravadoI1>
  <SubTotalMontoGravadoI2>${subtotal.SubTotalMontoGravadoI2}</SubTotalMontoGravadoI2>
  <SubTotalMontoGravadoI3>${subtotal.SubTotalMontoGravadoI3}</SubTotalMontoGravadoI3>
  <SubTotaITBIS>${subtotal.SubTotaITBIS}</SubTotaITBIS>
  <SubTotaITBIS1>${subtotal.SubTotaITBIS1}</SubTotaITBIS1>
  <SubTotaITBIS2>${subtotal.SubTotaITBIS2}</SubTotaITBIS2>
  <SubTotaITBIS3>${subtotal.SubTotaITBIS3}</SubTotaITBIS3>
  <SubTotalImpuestoAdicional>${subtotal.SubTotalImpuestoAdicional}</SubTotalImpuestoAdicional>
  <SubTotalExento>${subtotal.SubTotalExento}</SubTotalExento>
  <MontoSubTotal>${subtotal.MontoSubTotal}</MontoSubTotal>
  <Lineas>${subtotal.Lineas}</Lineas>
</Subtotal>`;
}

// Función para Subtotales
function crearSubtotales(subtotales) {
  return `
<Subtotales>
  ${subtotales.map(s => crearSubtotal(s)).join('')}
</Subtotales>`;
}

function crearDescuentoORecargo(desc) {
  return `
<DescuentoORecargo>
  <NumeroLinea>${desc.NumeroLinea}</NumeroLinea>
  <TipoAjuste>${desc.TipoAjuste}</TipoAjuste>
  <IndicadorNorma1007>${desc.IndicadorNorma1007}</IndicadorNorma1007>
  <DescripcionDescuentooRecargo>${desc.DescripcionDescuentooRecargo}</DescripcionDescuentooRecargo>
  <TipoValor>${desc.TipoValor}</TipoValor>
  <ValorDescuentooRecargo>${desc.ValorDescuentooRecargo}</ValorDescuentooRecargo>
  <MontoDescuentooRecargo>${desc.MontoDescuentooRecargo}</MontoDescuentooRecargo>
  <MontoDescuentooRecargoOtraMoneda>${desc.MontoDescuentooRecargoOtraMoneda}</MontoDescuentooRecargoOtraMoneda>
  <IndicadorFacturacionDescuentooRecargo>${desc.IndicadorFacturacionDescuentooRecargo}</IndicadorFacturacionDescuentooRecargo>
</DescuentoORecargo>`;
}

function crearDescuentosORecargos(descArray) {
  return `
<DescuentosORecargos>
  ${descArray.map(d => crearDescuentoORecargo(d)).join('')}
</DescuentosORecargos>`;
}


function crearPagina(pagina) {
  return `
<Pagina>
  <PaginaNo>${pagina.PaginaNo}</PaginaNo>
  <NoLineaDesde>${pagina.NoLineaDesde}</NoLineaDesde>
  <NoLineaHasta>${pagina.NoLineaHasta}</NoLineaHasta>
  <SubtotalMontoGravadoPagina>${pagina.SubtotalMontoGravadoPagina}</SubtotalMontoGravadoPagina>
  <SubtotalMontoGravado1Pagina>${pagina.SubtotalMontoGravado1Pagina}</SubtotalMontoGravado1Pagina>
  <SubtotalMontoGravado2Pagina>${pagina.SubtotalMontoGravado2Pagina}</SubtotalMontoGravado2Pagina>
  <SubtotalMontoGravado3Pagina>${pagina.SubtotalMontoGravado3Pagina}</SubtotalMontoGravado3Pagina>
  <SubtotalExentoPagina>${pagina.SubtotalExentoPagina}</SubtotalExentoPagina>
  <SubtotalItbisPagina>${pagina.SubtotalItbisPagina}</SubtotalItbisPagina>
  <SubtotalItbis1Pagina>${pagina.SubtotalItbis1Pagina}</SubtotalItbis1Pagina>
  <SubtotalItbis2Pagina>${pagina.SubtotalItbis2Pagina}</SubtotalItbis2Pagina>
  <SubtotalItbis3Pagina>${pagina.SubtotalItbis3Pagina}</SubtotalItbis3Pagina>
  <SubtotalImpuestoAdicionalPagina>${pagina.SubtotalImpuestoAdicionalPagina}</SubtotalImpuestoAdicionalPagina>
  <SubtotalImpuestoAdicional>
    <SubtotalImpuestoSelectivoConsumoEspecificoPagina>${pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina}</SubtotalImpuestoSelectivoConsumoEspecificoPagina>
    <SubtotalOtrosImpuesto>${pagina.SubtotalOtrosImpuesto}</SubtotalOtrosImpuesto>
  </SubtotalImpuestoAdicional>
  <MontoSubtotalPagina>${pagina.MontoSubtotalPagina}</MontoSubtotalPagina>
  <SubtotalMontoNoFacturablePagina>${pagina.SubtotalMontoNoFacturablePagina}</SubtotalMontoNoFacturablePagina>
</Pagina>`;
}

function crearPaginacion(paginasArray) {
  return `
<Paginacion>
  ${paginasArray.map(p => crearPagina(p)).join('')}
</Paginacion>`;
}



function crearInformacionReferencia(info) {
  return `
<InformacionReferencia>
  <NCFModificado>${info.NCFModificado}</NCFModificado>
  <RNCOtroContribuyente>${info.RNCOtroContribuyente}</RNCOtroContribuyente>
  <FechaNCFModificado>${info.FechaNCFModificado}</FechaNCFModificado>
  <CodigoModificacion>${info.CodigoModificacion}</CodigoModificacion>
</InformacionReferencia>`;
}


function crearFirma(info) {
  return `
<FechaHoraFirma>${info.FechaHoraFirma}</FechaHoraFirma>
<any_element>${info.any_element}</any_element>`;
}




// Función principal que arma todo
function crearFactura(datosFactura) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<ECF>
  ${crearEncabezado(datosFactura.Encabezado)}
  ${crearDetallesItems(datosFactura.DetallesItems)}
  ${crearSubtotales(datosFactura.Subtotales)}
  ${crearDescuentosORecargos(datosFactura.DescuentosORecargos)}
  ${crearPaginacion(datosFactura.Paginacion)}
  ${crearInformacionReferencia(datosFactura.InformacionReferencia)}
  ${crearFirma(datosFactura.InformacionReferencia)}
</ECF>`;
}

const facturaPrueba = {
  Encabezado: {
    IdDoc: {
      TipoeCF: "01",
      eNCF: "B0100000001",
      FechaVencimientoSecuencia: "2025-10-31",
      IndicadorEnvioDiferido: "0",
      IndicadorMontoGravado: "1",
      IndicadorServicioTodoIncluido: "0",
      TipoIngresos: "Venta",
      TipoPago: "Contado",
      FechaLimitePago: "2025-11-05",
      TerminoPago: "0",
      TablaFormasPago: [
        { FormaPago: "01", MontoPago: "1000" }
      ],
      TipoCuentaPago: "Ahorros",
      NumeroCuentaPago: "123456789",
      BancoPago: "BancoPrueba",
      FechaDesde: "2025-10-01",
      FechaHasta: "2025-10-31",
      TotalPaginas: "2"
    },
    Emisor: {
      RNCEmisor: "131234567",
      RazonSocialEmisor: "Mi Empresa S.A.",
      NombreComercial: "Mi Tienda",
      Sucursal: "Principal",
      DireccionEmisor: "Calle 123, Santo Domingo",
      Municipio: "Santo Domingo",
      Provincia: "DN",
      Telefonos: ["8091234567", "8097654321"],
      CorreoEmisor: "info@mitienda.com",
      WebSite: "www.mitienda.com",
      ActividadEconomica: "Comercio",
      CodigoVendedor: "001",
      NumeroFacturaInterna: "1001",
      NumeroPedidoInterno: "5001",
      ZonaVenta: "Zona1",
      RutaVenta: "RutaA",
      InformacionAdicionalEmisor: "Sin información adicional",
      FechaEmision: "2025-10-30"
    },
    Comprador: {
      RNCComprador: "402345678",
      NombreComprador: "Cliente Prueba",
      DireccionComprador: "Av. Principal 456",
      TelefonoComprador: "8091112233",
      CorreoComprador: "cliente@prueba.com"
    },
    InformacionesAdicionales: {
      Nota1: "Esta es una nota adicional"
    },
    Transporte: {
      TipoTransporte: "Terrestre",
      NombreTransportista: "Transportes SRL"
    },
    Totales: {
      MontoTotal: "1500",
      ITBISTotal: "180",
      MontoExento: "0",
      MontoImpuestoAdicional: "0"
    },
    OtraMoneda: {
      Moneda: "USD",
      TipoCambio: "56.50"
    }
  },
  DetallesItems: [
    {
      NumeroLinea: 1,
      TablaCodigosItem: [
        { TipoCodigo: "01", CodigoItem: "A001" }
      ],
      IndicadorFacturacion: "1",
      Retencion: {
        IndicadorAgenteRetencionoPercepcion: "0",
        MontoITBISRetenido: "0",
        MontoISRRetenido: "0"
      },
      NombreItem: "Producto Prueba",
      IndicadorBienoServicio: "B",
      DescripcionItem: "Descripción del producto de prueba",
      CantidadItem: "2",
      UnidadMedida: "UND",
      CantidadReferencia: "2",
      UnidadReferencia: "UND",
      TablaSubcantidad: [
        { Subcantidad: "1", CodigoSubcantidad: "S001" }
      ],
      GradosAlcohol: "0",
      PrecioUnitarioReferencia: "500",
      FechaElaboracion: "2025-10-01",
      FechaVencimientoItem: "2025-12-01",
      PrecioUnitarioItem: "500",
      DescuentoMonto: "50",
      TablaSubDescuento: [
        { TipoSubDescuento: "D", SubDescuentoPorcentaje: "10", MontoSubDescuento: "5" }
      ],
      RecargoMonto: "0",
      TablaSubRecargo: [],
      TablaImpuestoAdicional: [],
      OtraMonedaDetalle: {
        PrecioOtraMoneda: "8.85",
        DescuentoOtraMoneda: "0.88",
        RecargoOtraMoneda: "0",
        MontoItemOtraMoneda: "17.7"
      },
      MontoItem: "950"
    }
  ],
  Subtotales: [
    {
      NumeroSubTotal: 1,
      DescripcionSubtotal: "Subtotal 1",
      Orden: 1,
      SubTotalMontoGravadoTotal: 1000,
      SubTotalMontoGravadoI1: 1000,
      SubTotalMontoGravadoI2: 0,
      SubTotalMontoGravadoI3: 0,
      SubTotaITBIS: 180,
      SubTotaITBIS1: 180,
      SubTotaITBIS2: 0,
      SubTotaITBIS3: 0,
      SubTotalImpuestoAdicional: 0,
      SubTotalExento: 0,
      MontoSubTotal: 1180,
      Lineas: 1
    }
  ],
  DescuentosORecargos: [
    {
      NumeroLinea: 1,
      TipoAjuste: "D",
      IndicadorNorma1007: 0,
      DescripcionDescuentooRecargo: "Descuento Prueba",
      TipoValor: "$",
      ValorDescuentooRecargo: 50,
      MontoDescuentooRecargo: 50,
      MontoDescuentooRecargoOtraMoneda: 0.88,
      IndicadorFacturacionDescuentooRecargo: 1
    }
  ],
  Paginacion: [
    {
      PaginaNo: 1,
      NoLineaDesde: 1,
      NoLineaHasta: 1,
      SubtotalMontoGravadoPagina: 1000,
      SubtotalMontoGravado1Pagina: 1000,
      SubtotalMontoGravado2Pagina: 0,
      SubtotalMontoGravado3Pagina: 0,
      SubtotalExentoPagina: 0,
      SubtotalItbisPagina: 180,
      SubtotalItbis1Pagina: 180,
      SubtotalItbis2Pagina: 0,
      SubtotalItbis3Pagina: 0,
      SubtotalImpuestoAdicionalPagina: 0,
      SubtotalImpuestoSelectivoConsumoEspecificoPagina: 0,
      SubtotalOtrosImpuesto: 0,
      MontoSubtotalPagina: 1180,
      SubtotalMontoNoFacturablePagina: 0
    }
  ],
  InformacionReferencia: {
    NCFModificado: "B0100000000",
    RNCOtroContribuyente: "402345678",
    FechaNCFModificado: "2025-10-29",
    CodigoModificacion: 1,
    FechaHoraFirma: "2025-10-30T10:00:00",
    any_element: "anyType"
  }
};


// const fs = require('fs');

// // Generar XML
// const xmlFacturaPrueba = crearFactura(facturaPrueba);

// // Guardar en un archivo
// fs.writeFileSync('factura.xml', xmlFacturaPrueba);

// console.log("Factura XML generada correctamente en factura.xml");

