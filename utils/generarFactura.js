const { create } = require("xmlbuilder2");
// Función para IdDoc

const INDENT_aux1 = " "; // 1 espacio
const INDENT_aux2 = "  "; // 2 espacio
const INDENT_aux4 = "    "; // 4 espacio
const INDENT_aux6 = "      "; // 6 espacio
const INDENT_aux8 = "        "; // 8 espacio

const INDENT_aux10 = "          "; // 10 espacio

function crearIdDoc(idDoc) {
  const lines = [];

  

  lines.push(`${INDENT_aux4}<IdDoc>`);

  if (idDoc.TipoeCF) lines.push(`${INDENT_aux6}<TipoeCF>${idDoc.TipoeCF}</TipoeCF>`);
  if (idDoc.eNCF) lines.push(`${INDENT_aux6}<eNCF>${idDoc.eNCF}</eNCF>`);
  if (idDoc.FechaVencimientoSecuencia) lines.push(`${INDENT_aux6}<FechaVencimientoSecuencia>${idDoc.FechaVencimientoSecuencia}</FechaVencimientoSecuencia>`);
  if (idDoc.IndicadorEnvioDiferido) lines.push(`${INDENT_aux6}<IndicadorEnvioDiferido>${idDoc.IndicadorEnvioDiferido}</IndicadorEnvioDiferido>`);
  if (idDoc.IndicadorMontoGravado) lines.push(`${INDENT_aux6}<IndicadorMontoGravado>${idDoc.IndicadorMontoGravado}</IndicadorMontoGravado>`);
  if (idDoc.IndicadorServicioTodoIncluido) lines.push(`${INDENT_aux6}<IndicadorServicioTodoIncluido>${idDoc.IndicadorServicioTodoIncluido}</IndicadorServicioTodoIncluido>`);
  if (idDoc.TipoIngresos) lines.push(`${INDENT_aux6}<TipoIngresos>${idDoc.TipoIngresos}</TipoIngresos>`);
  if (idDoc.TipoPago) lines.push(`${INDENT_aux6}<TipoPago>${idDoc.TipoPago}</TipoPago>`);
  if (idDoc.TerminoPago) lines.push(`${INDENT_aux6}<TerminoPago>${idDoc.TerminoPago}</TerminoPago>`);

  // TablaFormasPago
  if (idDoc.TablaFormasPago && idDoc.TablaFormasPago.length > 0) {
    lines.push(`${INDENT_aux6}<TablaFormasPago>`);
    idDoc.TablaFormasPago.forEach(fp => {
      lines.push(`${INDENT_aux8}<FormaDePago>`);
      if (fp.FormaPago) lines.push(`${INDENT_aux10}<FormaPago>${fp.FormaPago}</FormaPago>`);
      if (fp.MontoPago) lines.push(`${INDENT_aux10}<MontoPago>${fp.MontoPago}</MontoPago>`);
      lines.push(`${INDENT_aux8}</FormaDePago>`);
    });
    lines.push(`${INDENT_aux6}</TablaFormasPago>`);
  }

  if (idDoc.TipoCuentaPago) lines.push(`${INDENT_aux6}<TipoCuentaPago>${idDoc.TipoCuentaPago}</TipoCuentaPago>`);
  if (idDoc.NumeroCuentaPago) lines.push(`${INDENT_aux6}<NumeroCuentaPago>${idDoc.NumeroCuentaPago}</NumeroCuentaPago>`);
  if (idDoc.BancoPago) lines.push(`${INDENT_aux6}<BancoPago>${idDoc.BancoPago}</BancoPago>`);
  if (idDoc.FechaDesde) lines.push(`${INDENT_aux6}<FechaDesde>${idDoc.FechaDesde}</FechaDesde>`);
  if (idDoc.FechaHasta) lines.push(`${INDENT_aux6}<FechaHasta>${idDoc.FechaHasta}</FechaHasta>`);
  if (idDoc.TotalPaginas) lines.push(`${INDENT_aux6}<TotalPaginas>${idDoc.TotalPaginas}</TotalPaginas>`);

  lines.push(`${INDENT_aux4}</IdDoc>`);

  return lines.join("\n");
}


function crearEmisor(emisor) {

  const lines = [];

  lines.push(`${INDENT_aux4}<Emisor>`);

  if (emisor.RNCEmisor)
    lines.push(`${INDENT_aux6}<RNCEmisor>${emisor.RNCEmisor}</RNCEmisor>`);
  
  if (emisor.RazonSocialEmisor)
    lines.push(`${INDENT_aux6}<RazonSocialEmisor>${emisor.RazonSocialEmisor}</RazonSocialEmisor>`);
  
  if (emisor.NombreComercial)
    lines.push(`${INDENT_aux6}<NombreComercial>${emisor.NombreComercial}</NombreComercial>`);
  
  if (emisor.Sucursal)
    lines.push(`${INDENT_aux6}<Sucursal>${emisor.Sucursal}</Sucursal>`);
  
  if (emisor.DireccionEmisor)
    lines.push(`${INDENT_aux6}<DireccionEmisor>${emisor.DireccionEmisor}</DireccionEmisor>`);
  
  if (emisor.Municipio)
    lines.push(`${INDENT_aux6}<Municipio>${emisor.Municipio}</Municipio>`);
  
  if (emisor.Provincia)
    lines.push(`${INDENT_aux6}<Provincia>${emisor.Provincia}</Provincia>`);

  // TablaTelefonoEmisor
  if (emisor.Telefonos && emisor.Telefonos.length > 0) {
    lines.push(`${INDENT_aux6}<TablaTelefonoEmisor>`);
    emisor.Telefonos.forEach(t => {
      lines.push(`${INDENT_aux8}<TelefonoEmisor>${t}</TelefonoEmisor>`);
    });
    lines.push(`${INDENT_aux6}</TablaTelefonoEmisor>`);
  }

  if (emisor.CorreoEmisor)
    lines.push(`${INDENT_aux6}<CorreoEmisor>${emisor.CorreoEmisor}</CorreoEmisor>`);

  if (emisor.WebSite)
    lines.push(`${INDENT_aux6}<WebSite>${emisor.WebSite}</WebSite>`);

  if (emisor.ActividadEconomica)
    lines.push(`${INDENT_aux6}<ActividadEconomica>${emisor.ActividadEconomica}</ActividadEconomica>`);

  if (emisor.CodigoVendedor)
    lines.push(`${INDENT_aux6}<CodigoVendedor>${emisor.CodigoVendedor}</CodigoVendedor>`);

  if (emisor.NumeroFacturaInterna)
    lines.push(`${INDENT_aux6}<NumeroFacturaInterna>${emisor.NumeroFacturaInterna}</NumeroFacturaInterna>`);

  if (emisor.NumeroPedidoInterno)
    lines.push(`${INDENT_aux6}<NumeroPedidoInterno>${emisor.NumeroPedidoInterno}</NumeroPedidoInterno>`);

  if (emisor.ZonaVenta)
    lines.push(`${INDENT_aux6}<ZonaVenta>${emisor.ZonaVenta}</ZonaVenta>`);

  if (emisor.RutaVenta)
    lines.push(`${INDENT_aux6}<RutaVenta>${emisor.RutaVenta}</RutaVenta>`);

  if (emisor.InformacionAdicionalEmisor)
    lines.push(`${INDENT_aux6}<InformacionAdicionalEmisor>${emisor.InformacionAdicionalEmisor}</InformacionAdicionalEmisor>`);

  if (emisor.FechaEmision)
    lines.push(`${INDENT_aux6}<FechaEmision>${emisor.FechaEmision}</FechaEmision>`);

  lines.push(`${INDENT_aux4}</Emisor>`);

  return lines.join("\n");
}


function crearComprador(comprador) {
  const lines = [];

  lines.push(`${INDENT_aux4}<Comprador>`);

  if (comprador.RNCComprador)
    lines.push(`${INDENT_aux6}<RNCComprador>${comprador.RNCComprador}</RNCComprador>`);

  if (comprador.RazonSocialComprador)
    lines.push(`${INDENT_aux6}<RazonSocialComprador>${comprador.RazonSocialComprador}</RazonSocialComprador>`);

  if (comprador.ContactoComprador)
    lines.push(`${INDENT_aux6}<ContactoComprador>${comprador.ContactoComprador}</ContactoComprador>`);

  if (comprador.CorreoComprador)
    lines.push(`${INDENT_aux6}<CorreoComprador>${comprador.CorreoComprador}</CorreoComprador>`);

  if (comprador.DireccionComprador)
    lines.push(`${INDENT_aux6}<DireccionComprador>${comprador.DireccionComprador}</DireccionComprador>`);

  if (comprador.MunicipioComprador)
    lines.push(`${INDENT_aux6}<MunicipioComprador>${comprador.MunicipioComprador}</MunicipioComprador>`);

  if (comprador.ProvinciaComprador)
    lines.push(`${INDENT_aux6}<ProvinciaComprador>${comprador.ProvinciaComprador}</ProvinciaComprador>`);

  if (comprador.FechaEntrega)
    lines.push(`${INDENT_aux6}<FechaEntrega>${comprador.FechaEntrega}</FechaEntrega>`);

  if (comprador.ContactoEntrega)
    lines.push(`${INDENT_aux6}<ContactoEntrega>${comprador.ContactoEntrega}</ContactoEntrega>`);

  if (comprador.DireccionEntrega)
    lines.push(`${INDENT_aux6}<DireccionEntrega>${comprador.DireccionEntrega}</DireccionEntrega>`);

  if (comprador.TelefonoAdicional)
    lines.push(`${INDENT_aux6}<TelefonoAdicional>${comprador.TelefonoAdicional}</TelefonoAdicional>`);

  if (comprador.FechaOrdenCompra)
    lines.push(`${INDENT_aux6}<FechaOrdenCompra>${comprador.FechaOrdenCompra}</FechaOrdenCompra>`);

  if (comprador.NumeroOrdenCompra)
    lines.push(`${INDENT_aux6}<NumeroOrdenCompra>${comprador.NumeroOrdenCompra}</NumeroOrdenCompra>`);

  if (comprador.CodigoInternoComprador)
    lines.push(`${INDENT_aux6}<CodigoInternoComprador>${comprador.CodigoInternoComprador}</CodigoInternoComprador>`);

  if (comprador.ResponsablePago)
    lines.push(`${INDENT_aux6}<ResponsablePago>${comprador.ResponsablePago}</ResponsablePago>`);

  if (comprador.InformacionAdicionalComprador)
    lines.push(`${INDENT_aux6}<InformacionAdicionalComprador>${comprador.InformacionAdicionalComprador}</InformacionAdicionalComprador>`);

  lines.push(`${INDENT_aux4}</Comprador>`);

  return lines.join("\n");
}



// Función para InformacionesAdicionales con ifs por cada campo
function crearInformacionesAdicionales(info) {
  const lines = [];

  lines.push(`${INDENT_aux4}<InformacionesAdicionales>`);

  if (info.FechaEmbarque)
    lines.push(`${INDENT_aux6}<FechaEmbarque>${info.FechaEmbarque}</FechaEmbarque>`);

  if (info.NumeroEmbarque)
    lines.push(`${INDENT_aux6}<NumeroEmbarque>${info.NumeroEmbarque}</NumeroEmbarque>`);

  if (info.NumeroContenedor)
    lines.push(`${INDENT_aux6}<NumeroContenedor>${info.NumeroContenedor}</NumeroContenedor>`);

  if (info.NumeroReferencia)
    lines.push(`${INDENT_aux6}<NumeroReferencia>${info.NumeroReferencia}</NumeroReferencia>`);

  if (info.PesoBruto)
    lines.push(`${INDENT_aux6}<PesoBruto>${info.PesoBruto}</PesoBruto>`);

  if (info.PesoNeto)
    lines.push(`${INDENT_aux6}<PesoNeto>${info.PesoNeto}</PesoNeto>`);

  if (info.UnidadPesoBruto)
    lines.push(`${INDENT_aux6}<UnidadPesoBruto>${info.UnidadPesoBruto}</UnidadPesoBruto>`);

  if (info.UnidadPesoNeto)
    lines.push(`${INDENT_aux6}<UnidadPesoNeto>${info.UnidadPesoNeto}</UnidadPesoNeto>`);

  if (info.CantidadBulto)
    lines.push(`${INDENT_aux6}<CantidadBulto>${info.CantidadBulto}</CantidadBulto>`);

  if (info.UnidadBulto)
    lines.push(`${INDENT_aux6}<UnidadBulto>${info.UnidadBulto}</UnidadBulto>`);

  if (info.VolumenBulto)
    lines.push(`${INDENT_aux6}<VolumenBulto>${info.VolumenBulto}</VolumenBulto>`);

  if (info.UnidadVolumen)
    lines.push(`${INDENT_aux6}<UnidadVolumen>${info.UnidadVolumen}</UnidadVolumen>`);

  lines.push(`${INDENT_aux4}</InformacionesAdicionales>`);

  return lines.join("\n");
}



// Función para Transporte con ifs por cada campo
function crearTransporte(transporte) {
  const lines = [];

  lines.push(`${INDENT_aux4}<Transporte>`);

  if (transporte.Conductor)
    lines.push(`${INDENT_aux6}<Conductor>${transporte.Conductor}</Conductor>`);

  if (transporte.DocumentoTransporte)
    lines.push(`${INDENT_aux6}<DocumentoTransporte>${transporte.DocumentoTransporte}</DocumentoTransporte>`);

  if (transporte.Ficha)
    lines.push(`${INDENT_aux6}<Ficha>${transporte.Ficha}</Ficha>`);

  if (transporte.Placa)
    lines.push(`${INDENT_aux6}<Placa>${transporte.Placa}</Placa>`);

  if (transporte.RutaTransporte)
    lines.push(`${INDENT_aux6}<RutaTransporte>${transporte.RutaTransporte}</RutaTransporte>`);

  if (transporte.ZonaTransporte)
    lines.push(`${INDENT_aux6}<ZonaTransporte>${transporte.ZonaTransporte}</ZonaTransporte>`);

  if (transporte.NumeroAlbaran)
    lines.push(`${INDENT_aux6}<NumeroAlbaran>${transporte.NumeroAlbaran}</NumeroAlbaran>`);

  lines.push(`${INDENT_aux4}</Transporte>`);

  return lines.join("\n");
}



// Función para Totales con ifs por cada campo
function crearTotales(totales) {
  const lines = [];

  lines.push(`${INDENT_aux4}<Totales>`);

  if (totales.MontoGravadoTotal)
    lines.push(`${INDENT_aux6}<MontoGravadoTotal>${totales.MontoGravadoTotal}</MontoGravadoTotal>`);

  if (totales.MontoGravadoI1)
    lines.push(`${INDENT_aux6}<MontoGravadoI1>${totales.MontoGravadoI1}</MontoGravadoI1>`);

  if (totales.MontoGravadoI2)
    lines.push(`${INDENT_aux6}<MontoGravadoI2>${totales.MontoGravadoI2}</MontoGravadoI2>`);

  if (totales.MontoGravadoI3)
    lines.push(`${INDENT_aux6}<MontoGravadoI3>${totales.MontoGravadoI3}</MontoGravadoI3>`);

  if (totales.MontoExento)
    lines.push(`${INDENT_aux6}<MontoExento>${totales.MontoExento}</MontoExento>`);

  if (totales.ITBIS1)
    lines.push(`${INDENT_aux6}<ITBIS1>${totales.ITBIS1}</ITBIS1>`);

  if (totales.ITBIS2)
    lines.push(`${INDENT_aux6}<ITBIS2>${totales.ITBIS2}</ITBIS2>`);

  if (totales.ITBIS3)
    lines.push(`${INDENT_aux6}<ITBIS3>${totales.ITBIS3}</ITBIS3>`);

  if (totales.TotalITBIS)
    lines.push(`${INDENT_aux6}<TotalITBIS>${totales.TotalITBIS}</TotalITBIS>`);

  if (totales.TotalITBIS1)
    lines.push(`${INDENT_aux6}<TotalITBIS1>${totales.TotalITBIS1}</TotalITBIS1>`);

  if (totales.TotalITBIS2)
    lines.push(`${INDENT_aux6}<TotalITBIS2>${totales.TotalITBIS2}</TotalITBIS2>`);

  if (totales.TotalITBIS3)
    lines.push(`${INDENT_aux6}<TotalITBIS3>${totales.TotalITBIS3}</TotalITBIS3>`);

  if (totales.MontoImpuestoAdicional)
    lines.push(`${INDENT_aux6}<MontoImpuestoAdicional>${totales.MontoImpuestoAdicional}</MontoImpuestoAdicional>`);

  // ------------------------------
  // Subnodo: ImpuestosAdicionales
  // ------------------------------
  if (totales.ImpuestosAdicionales && totales.ImpuestosAdicionales.length > 0) {
    lines.push(`${INDENT_aux6}<ImpuestosAdicionales>`);

    totales.ImpuestosAdicionales.forEach(imp => {
      lines.push(`${INDENT_aux8}<ImpuestoAdicional>`);

      if (imp.TipoImpuesto)
        lines.push(`${INDENT_aux10}<TipoImpuesto>${imp.TipoImpuesto}</TipoImpuesto>`);

      if (imp.TasaImpuestoAdicional)
        lines.push(`${INDENT_aux10}<TasaImpuestoAdicional>${imp.TasaImpuestoAdicional}</TasaImpuestoAdicional>`);

      if (imp.MontoImpuestoSelectivoConsumoEspecifico)
        lines.push(`${INDENT_aux10}<MontoImpuestoSelectivoConsumoEspecifico>${imp.MontoImpuestoSelectivoConsumoEspecifico}</MontoImpuestoSelectivoConsumoEspecifico>`);

      if (imp.MontoImpuestoSelectivoConsumoAdvalorem)
        lines.push(`${INDENT_aux10}<MontoImpuestoSelectivoConsumoAdvalorem>${imp.MontoImpuestoSelectivoConsumoAdvalorem}</MontoImpuestoSelectivoConsumoAdvalorem>`);

      if (imp.OtrosImpuestosAdicionales)
        lines.push(`${INDENT_aux10}<OtrosImpuestosAdicionales>${imp.OtrosImpuestosAdicionales}</OtrosImpuestosAdicionales>`);

      lines.push(`${INDENT_aux8}</ImpuestoAdicional>`);
    });

    lines.push(`${INDENT_aux6}</ImpuestosAdicionales>`);
  }

  if (totales.MontoTotal)
    lines.push(`${INDENT_aux6}<MontoTotal>${totales.MontoTotal}</MontoTotal>`);

  if (totales.MontoNoFacturable)
    lines.push(`${INDENT_aux6}<MontoNoFacturable>${totales.MontoNoFacturable}</MontoNoFacturable>`);

  if (totales.MontoPeriodo)
    lines.push(`${INDENT_aux6}<MontoPeriodo>${totales.MontoPeriodo}</MontoPeriodo>`);

  if (totales.SaldoAnterior)
    lines.push(`${INDENT_aux6}<SaldoAnterior>${totales.SaldoAnterior}</SaldoAnterior>`);

  if (totales.MontoAvancePago)
    lines.push(`${INDENT_aux6}<MontoAvancePago>${totales.MontoAvancePago}</MontoAvancePago>`);

  if (totales.ValorPagar)
    lines.push(`${INDENT_aux6}<ValorPagar>${totales.ValorPagar}</ValorPagar>`);

  if (totales.TotalITBISRetenido)
    lines.push(`${INDENT_aux6}<TotalITBISRetenido>${totales.TotalITBISRetenido}</TotalITBISRetenido>`);

  if (totales.TotalISRRetencion)
    lines.push(`${INDENT_aux6}<TotalISRRetencion>${totales.TotalISRRetencion}</TotalISRRetencion>`);

  if (totales.TotalITBISPercepcion)
    lines.push(`${INDENT_aux6}<TotalITBISPercepcion>${totales.TotalITBISPercepcion}</TotalITBISPercepcion>`);

  if (totales.TotalISRPercepcion)
    lines.push(`${INDENT_aux6}<TotalISRPercepcion>${totales.TotalISRPercepcion}</TotalISRPercepcion>`);

  lines.push(`${INDENT_aux4}</Totales>`);

  return lines.join("\n");
}



// Función para OtraMoneda con ifs y subnodos
function crearOtraMoneda(moneda) {
  const lines = [];

  lines.push(`${INDENT_aux4}<OtraMoneda>`);

  if (moneda.TipoMoneda) lines.push(`${INDENT_aux6}<TipoMoneda>${moneda.TipoMoneda}</TipoMoneda>`);
  if (moneda.TipoCambio) lines.push(`${INDENT_aux6}<TipoCambio>${moneda.TipoCambio}</TipoCambio>`);
  if (moneda.MontoGravadoTotalOtraMoneda) lines.push(`${INDENT_aux6}<MontoGravadoTotalOtraMoneda>${moneda.MontoGravadoTotalOtraMoneda}</MontoGravadoTotalOtraMoneda>`);
  if (moneda.MontoGravado1OtraMoneda) lines.push(`${INDENT_aux6}<MontoGravado1OtraMoneda>${moneda.MontoGravado1OtraMoneda}</MontoGravado1OtraMoneda>`);
  if (moneda.MontoGravado2OtraMoneda) lines.push(`${INDENT_aux6}<MontoGravado2OtraMoneda>${moneda.MontoGravado2OtraMoneda}</MontoGravado2OtraMoneda>`);
  if (moneda.MontoGravado3OtraMoneda) lines.push(`${INDENT_aux6}<MontoGravado3OtraMoneda>${moneda.MontoGravado3OtraMoneda}</MontoGravado3OtraMoneda>`);
  if (moneda.MontoExentoOtraMoneda) lines.push(`${INDENT_aux6}<MontoExentoOtraMoneda>${moneda.MontoExentoOtraMoneda}</MontoExentoOtraMoneda>`);
  if (moneda.TotalITBISOtraMoneda) lines.push(`${INDENT_aux6}<TotalITBISOtraMoneda>${moneda.TotalITBISOtraMoneda}</TotalITBISOtraMoneda>`);
  if (moneda.TotalITBIS1OtraMoneda) lines.push(`${INDENT_aux6}<TotalITBIS1OtraMoneda>${moneda.TotalITBIS1OtraMoneda}</TotalITBIS1OtraMoneda>`);
  if (moneda.TotalITBIS2OtraMoneda) lines.push(`${INDENT_aux6}<TotalITBIS2OtraMoneda>${moneda.TotalITBIS2OtraMoneda}</TotalITBIS2OtraMoneda>`);
  if (moneda.TotalITBIS3OtraMoneda) lines.push(`${INDENT_aux6}<TotalITBIS3OtraMoneda>${moneda.TotalITBIS3OtraMoneda}</TotalITBIS3OtraMoneda>`);
  if (moneda.MontoImpuestoAdicionalOtraMoneda) lines.push(`${INDENT_aux6}<MontoImpuestoAdicionalOtraMoneda>${moneda.MontoImpuestoAdicionalOtraMoneda}</MontoImpuestoAdicionalOtraMoneda>`);

  // Subnodo: ImpuestosAdicionalesOtraMoneda
  if (moneda.ImpuestosAdicionalesOtraMoneda && moneda.ImpuestosAdicionalesOtraMoneda.length > 0) {
    lines.push(`${INDENT_aux6}<ImpuestosAdicionalesOtraMoneda>`);
    
    moneda.ImpuestosAdicionalesOtraMoneda.forEach(imp => {
      lines.push(`${INDENT_aux8}<ImpuestoAdicionalOtraMoneda>`);

      if (imp.TipoImpuestoOtraMoneda)
        lines.push(`${INDENT_aux10}<TipoImpuestoOtraMoneda>${imp.TipoImpuestoOtraMoneda}</TipoImpuestoOtraMoneda>`);

      if (imp.TasaImpuestoAdicionalOtraMoneda)
        lines.push(`${INDENT_aux10}<TasaImpuestoAdicionalOtraMoneda>${imp.TasaImpuestoAdicionalOtraMoneda}</TasaImpuestoAdicionalOtraMoneda>`);

      if (imp.MontoImpuestoSelectivoConsumoEspecificoOtraMoneda)
        lines.push(`${INDENT_aux10}<MontoImpuestoSelectivoConsumoEspecificoOtraMoneda>${imp.MontoImpuestoSelectivoConsumoEspecificoOtraMoneda}</MontoImpuestoSelectivoConsumoEspecificoOtraMoneda>`);

      if (imp.MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda)
        lines.push(`${INDENT_aux10}<MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda>${imp.MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda}</MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda>`);

      if (imp.OtrosImpuestosAdicionalesOtraMoneda)
        lines.push(`${INDENT_aux10}<OtrosImpuestosAdicionalesOtraMoneda>${imp.OtrosImpuestosAdicionalesOtraMoneda}</OtrosImpuestosAdicionalesOtraMoneda>`);

      lines.push(`${INDENT_aux8}</ImpuestoAdicionalOtraMoneda>`);
    });

    lines.push(`${INDENT_aux6}</ImpuestosAdicionalesOtraMoneda>`);
  }

  if (moneda.MontoTotalOtraMoneda)
    lines.push(`${INDENT_aux6}<MontoTotalOtraMoneda>${moneda.MontoTotalOtraMoneda}</MontoTotalOtraMoneda>`);

  lines.push(`${INDENT_aux4}</OtraMoneda>`);

  return lines.join("\n");
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

// Función para generar <DetallesItems> dinámico
function crearDetallesItems(items) {
  const lines = [];

  lines.push(`${INDENT_aux4}<DetallesItems>`);

  items.forEach(item => {
    lines.push(`${INDENT_aux6}<Item>`);
    lines.push(`${INDENT_aux8}<NumeroLinea>${item.NumeroLinea}</NumeroLinea>`);

    // TablaCodigosItem
    if (item.TablaCodigosItem && item.TablaCodigosItem.length > 0) {
      lines.push(`${INDENT_aux8}<TablaCodigosItem>`);
      item.TablaCodigosItem.forEach(c => {
        lines.push(`${INDENT_aux10}<CodigosItem>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<TipoCodigo>${c.TipoCodigo}</TipoCodigo>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<CodigoItem>${c.CodigoItem}</CodigoItem>`);
        lines.push(`${INDENT_aux10}</CodigosItem>`);
      });
      lines.push(`${INDENT_aux8}</TablaCodigosItem>`);
    }

    if (item.IndicadorFacturacion)
      lines.push(`${INDENT_aux8}<IndicadorFacturacion>${item.IndicadorFacturacion}</IndicadorFacturacion>`);

    // Retención
    if (item.Retencion) {
      lines.push(`${INDENT_aux8}<Retencion>`);
      if (item.Retencion.IndicadorAgenteRetencionoPercepcion)
        lines.push(`${INDENT_aux10}<IndicadorAgenteRetencionoPercepcion>${item.Retencion.IndicadorAgenteRetencionoPercepcion}</IndicadorAgenteRetencionoPercepcion>`);
      if (item.Retencion.MontoITBISRetenido)
        lines.push(`${INDENT_aux10}<MontoITBISRetenido>${item.Retencion.MontoITBISRetenido}</MontoITBISRetenido>`);
      if (item.Retencion.MontoISRRetenido)
        lines.push(`${INDENT_aux10}<MontoISRRetenido>${item.Retencion.MontoISRRetenido}</MontoISRRetenido>`);
      lines.push(`${INDENT_aux8}</Retencion>`);
    }

    if (item.NombreItem) lines.push(`${INDENT_aux8}<NombreItem>${item.NombreItem}</NombreItem>`);
    if (item.IndicadorBienoServicio) lines.push(`${INDENT_aux8}<IndicadorBienoServicio>${item.IndicadorBienoServicio}</IndicadorBienoServicio>`);
    if (item.DescripcionItem) lines.push(`${INDENT_aux8}<DescripcionItem>${item.DescripcionItem}</DescripcionItem>`);
    if (item.CantidadItem) lines.push(`${INDENT_aux8}<CantidadItem>${item.CantidadItem}</CantidadItem>`);
    if (item.UnidadMedida) lines.push(`${INDENT_aux8}<UnidadMedida>${item.UnidadMedida}</UnidadMedida>`);
    if (item.CantidadReferencia) lines.push(`${INDENT_aux8}<CantidadReferencia>${item.CantidadReferencia}</CantidadReferencia>`);
    if (item.UnidadReferencia) lines.push(`${INDENT_aux8}<UnidadReferencia>${item.UnidadReferencia}</UnidadReferencia>`);

    // TablaSubcantidad
    if (item.TablaSubcantidad && item.TablaSubcantidad.length > 0) {
      lines.push(`${INDENT_aux8}<TablaSubcantidad>`);
      item.TablaSubcantidad.forEach(s => {
        lines.push(`${INDENT_aux10}<SubcantidadItem>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<Subcantidad>${s.Subcantidad}</Subcantidad>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<CodigoSubcantidad>${s.CodigoSubcantidad}</CodigoSubcantidad>`);
        lines.push(`${INDENT_aux10}</SubcantidadItem>`);
      });
      lines.push(`${INDENT_aux8}</TablaSubcantidad>`);
    }

    if (item.GradosAlcohol) lines.push(`${INDENT_aux8}<GradosAlcohol>${item.GradosAlcohol}</GradosAlcohol>`);
    if (item.PrecioUnitarioReferencia) lines.push(`${INDENT_aux8}<PrecioUnitarioReferencia>${item.PrecioUnitarioReferencia}</PrecioUnitarioReferencia>`);
    if (item.FechaElaboracion) lines.push(`${INDENT_aux8}<FechaElaboracion>${item.FechaElaboracion}</FechaElaboracion>`);
    if (item.FechaVencimientoItem) lines.push(`${INDENT_aux8}<FechaVencimientoItem>${item.FechaVencimientoItem}</FechaVencimientoItem>`);
    if (item.PrecioUnitarioItem) lines.push(`${INDENT_aux8}<PrecioUnitarioItem>${item.PrecioUnitarioItem}</PrecioUnitarioItem>`);
    if (item.DescuentoMonto) lines.push(`${INDENT_aux8}<DescuentoMonto>${item.DescuentoMonto}</DescuentoMonto>`);

    // TablaSubDescuento
    if (item.TablaSubDescuento && item.TablaSubDescuento.length > 0) {
      lines.push(`${INDENT_aux8}<TablaSubDescuento>`);
      item.TablaSubDescuento.forEach(d => {
        lines.push(`${INDENT_aux10}<SubDescuento>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<TipoSubDescuento>${d.TipoSubDescuento}</TipoSubDescuento>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<SubDescuentoPorcentaje>${d.SubDescuentoPorcentaje}</SubDescuentoPorcentaje>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<MontoSubDescuento>${d.MontoSubDescuento}</MontoSubDescuento>`);
        lines.push(`${INDENT_aux10}</SubDescuento>`);
      });
      lines.push(`${INDENT_aux8}</TablaSubDescuento>`);
    }

    if (item.RecargoMonto) lines.push(`${INDENT_aux8}<RecargoMonto>${item.RecargoMonto}</RecargoMonto>`);

    // TablaSubRecargo
    if (item.TablaSubRecargo && item.TablaSubRecargo.length > 0) {
      lines.push(`${INDENT_aux8}<TablaSubRecargo>`);
      item.TablaSubRecargo.forEach(r => {
        lines.push(`${INDENT_aux10}<SubRecargo>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<TipoSubRecargo>${r.TipoSubRecargo}</TipoSubRecargo>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<SubRecargoPorcentaje>${r.SubRecargoPorcentaje}</SubRecargoPorcentaje>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<MontoSubRecargo>${r.MontoSubRecargo}</MontoSubRecargo>`);
        lines.push(`${INDENT_aux10}</SubRecargo>`);
      });
      lines.push(`${INDENT_aux8}</TablaSubRecargo>`);
    }

    // TablaImpuestoAdicional
    if (item.TablaImpuestoAdicional && item.TablaImpuestoAdicional.length > 0) {
      lines.push(`${INDENT_aux8}<TablaImpuestoAdicional>`);
      item.TablaImpuestoAdicional.forEach(i => {
        lines.push(`${INDENT_aux10}<ImpuestoAdicional>`);
        lines.push(`${INDENT_aux10}${INDENT_aux2}<TipoImpuesto>${i.TipoImpuesto}</TipoImpuesto>`);
        lines.push(`${INDENT_aux10}</ImpuestoAdicional>`);
      });
      lines.push(`${INDENT_aux8}</TablaImpuestoAdicional>`);
    }

    // OtraMonedaDetalle
    if (item.OtraMonedaDetalle) {
      lines.push(`${INDENT_aux8}<OtraMonedaDetalle>`);
      Object.entries(item.OtraMonedaDetalle).forEach(([k, v]) => {
        lines.push(`${INDENT_aux10}<${k}>${v}</${k}>`);
      });
      lines.push(`${INDENT_aux8}</OtraMonedaDetalle>`);
    }

    if (item.MontoItem) lines.push(`${INDENT_aux8}<MontoItem>${item.MontoItem}</MontoItem>`);

    lines.push(`${INDENT_aux6}</Item>`);
  });

  lines.push(`${INDENT_aux4}</DetallesItems>`);

  return lines.join("\n");
}



// Función para crear un solo Subtotal con IFs
function crearSubtotal(subtotal) {
  const lines = [];

  lines.push(`${INDENT_aux4}<Subtotal>`);

  if (subtotal.NumeroSubTotal)
    lines.push(`${INDENT_aux6}<NumeroSubTotal>${subtotal.NumeroSubTotal}</NumeroSubTotal>`);

  if (subtotal.DescripcionSubtotal)
    lines.push(`${INDENT_aux6}<DescripcionSubtotal>${subtotal.DescripcionSubtotal}</DescripcionSubtotal>`);

  if (subtotal.Orden)
    lines.push(`${INDENT_aux6}<Orden>${subtotal.Orden}</Orden>`);

  if (subtotal.SubTotalMontoGravadoTotal)
    lines.push(`${INDENT_aux6}<SubTotalMontoGravadoTotal>${subtotal.SubTotalMontoGravadoTotal}</SubTotalMontoGravadoTotal>`);

  if (subtotal.SubTotalMontoGravadoI1)
    lines.push(`${INDENT_aux6}<SubTotalMontoGravadoI1>${subtotal.SubTotalMontoGravadoI1}</SubTotalMontoGravadoI1>`);

  if (subtotal.SubTotalMontoGravadoI2)
    lines.push(`${INDENT_aux6}<SubTotalMontoGravadoI2>${subtotal.SubTotalMontoGravadoI2}</SubTotalMontoGravadoI2>`);

  if (subtotal.SubTotalMontoGravadoI3)
    lines.push(`${INDENT_aux6}<SubTotalMontoGravadoI3>${subtotal.SubTotalMontoGravadoI3}</SubTotalMontoGravadoI3>`);

  if (subtotal.SubTotaITBIS)
    lines.push(`${INDENT_aux6}<SubTotaITBIS>${subtotal.SubTotaITBIS}</SubTotaITBIS>`);

  if (subtotal.SubTotaITBIS1)
    lines.push(`${INDENT_aux6}<SubTotaITBIS1>${subtotal.SubTotaITBIS1}</SubTotaITBIS1>`);

  if (subtotal.SubTotaITBIS2)
    lines.push(`${INDENT_aux6}<SubTotaITBIS2>${subtotal.SubTotaITBIS2}</SubTotaITBIS2>`);

  if (subtotal.SubTotaITBIS3)
    lines.push(`${INDENT_aux6}<SubTotaITBIS3>${subtotal.SubTotaITBIS3}</SubTotaITBIS3>`);

  if (subtotal.SubTotalImpuestoAdicional)
    lines.push(`${INDENT_aux6}<SubTotalImpuestoAdicional>${subtotal.SubTotalImpuestoAdicional}</SubTotalImpuestoAdicional>`);

  if (subtotal.SubTotalExento)
    lines.push(`${INDENT_aux6}<SubTotalExento>${subtotal.SubTotalExento}</SubTotalExento>`);

  if (subtotal.MontoSubTotal)
    lines.push(`${INDENT_aux6}<MontoSubTotal>${subtotal.MontoSubTotal}</MontoSubTotal>`);

  if (subtotal.Lineas)
    lines.push(`${INDENT_aux6}<Lineas>${subtotal.Lineas}</Lineas>`);

  lines.push(`${INDENT_aux4}</Subtotal>`);

  return lines.join("\n");
}


// Función para crear una lista de Subtotales
function crearSubtotales(listaSubtotales) {
  if (!listaSubtotales || listaSubtotales.length === 0) return "";
  return `
  <Subtotales>
${listaSubtotales.map(s => crearSubtotal(s)).join('\n  ')}
  </Subtotales>`;
}

// console.log(crearSubtotales(subtotales));


// Función para un solo <DescuentoORecargo> con IFs
function crearDescuentoORecargo(desc) {
  const lines = [];

  lines.push(`${INDENT_aux4}<DescuentoORecargo>`);

  if (desc.NumeroLinea !== undefined && desc.NumeroLinea !== null)
    lines.push(`${INDENT_aux6}<NumeroLinea>${desc.NumeroLinea}</NumeroLinea>`);

  if (desc.TipoAjuste)
    lines.push(`${INDENT_aux6}<TipoAjuste>${desc.TipoAjuste}</TipoAjuste>`);

  if (desc.IndicadorNorma1007 !== undefined && desc.IndicadorNorma1007 !== null)
    lines.push(`${INDENT_aux6}<IndicadorNorma1007>${desc.IndicadorNorma1007}</IndicadorNorma1007>`);

  if (desc.DescripcionDescuentooRecargo)
    lines.push(`${INDENT_aux6}<DescripcionDescuentooRecargo>${desc.DescripcionDescuentooRecargo}</DescripcionDescuentooRecargo>`);

  if (desc.TipoValor)
    lines.push(`${INDENT_aux6}<TipoValor>${desc.TipoValor}</TipoValor>`);

  if (desc.ValorDescuentooRecargo !== undefined && desc.ValorDescuentooRecargo !== null)
    lines.push(`${INDENT_aux6}<ValorDescuentooRecargo>${desc.ValorDescuentooRecargo}</ValorDescuentooRecargo>`);

  if (desc.MontoDescuentooRecargo !== undefined && desc.MontoDescuentooRecargo !== null)
    lines.push(`${INDENT_aux6}<MontoDescuentooRecargo>${desc.MontoDescuentooRecargo}</MontoDescuentooRecargo>`);

  if (desc.MontoDescuentooRecargoOtraMoneda !== undefined && desc.MontoDescuentooRecargoOtraMoneda !== null)
    lines.push(`${INDENT_aux6}<MontoDescuentooRecargoOtraMoneda>${desc.MontoDescuentooRecargoOtraMoneda}</MontoDescuentooRecargoOtraMoneda>`);

  if (desc.IndicadorFacturacionDescuentooRecargo !== undefined && desc.IndicadorFacturacionDescuentooRecargo !== null)
    lines.push(`${INDENT_aux6}<IndicadorFacturacionDescuentooRecargo>${desc.IndicadorFacturacionDescuentooRecargo}</IndicadorFacturacionDescuentooRecargo>`);

  lines.push(`${INDENT_aux4}</DescuentoORecargo>`);

  return lines.join("\n");
}


// Función para lista completa <DescuentosORecargos>
function crearDescuentosORecargos(descArray) {
  if (!descArray || descArray.length === 0) return "";
  return `
  <DescuentosORecargos>
${descArray.map(d => crearDescuentoORecargo(d)).join('\n  ')}
  </DescuentosORecargos>`;
}




// 🧩 Función para un solo <Pagina> con validaciones IF
function crearPagina(pagina) {
  const lines = [];

  lines.push(`${INDENT_aux4}<Pagina>`);

  if (pagina.PaginaNo !== undefined && pagina.PaginaNo !== null)
    lines.push(`${INDENT_aux6}<PaginaNo>${pagina.PaginaNo}</PaginaNo>`);

  if (pagina.NoLineaDesde !== undefined && pagina.NoLineaDesde !== null)
    lines.push(`${INDENT_aux6}<NoLineaDesde>${pagina.NoLineaDesde}</NoLineaDesde>`);

  if (pagina.NoLineaHasta !== undefined && pagina.NoLineaHasta !== null)
    lines.push(`${INDENT_aux6}<NoLineaHasta>${pagina.NoLineaHasta}</NoLineaHasta>`);

  if (pagina.SubtotalMontoGravadoPagina !== undefined && pagina.SubtotalMontoGravadoPagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalMontoGravadoPagina>${pagina.SubtotalMontoGravadoPagina}</SubtotalMontoGravadoPagina>`);

  if (pagina.SubtotalMontoGravado1Pagina !== undefined && pagina.SubtotalMontoGravado1Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalMontoGravado1Pagina>${pagina.SubtotalMontoGravado1Pagina}</SubtotalMontoGravado1Pagina>`);

  if (pagina.SubtotalMontoGravado2Pagina !== undefined && pagina.SubtotalMontoGravado2Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalMontoGravado2Pagina>${pagina.SubtotalMontoGravado2Pagina}</SubtotalMontoGravado2Pagina>`);

  if (pagina.SubtotalMontoGravado3Pagina !== undefined && pagina.SubtotalMontoGravado3Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalMontoGravado3Pagina>${pagina.SubtotalMontoGravado3Pagina}</SubtotalMontoGravado3Pagina>`);

  if (pagina.SubtotalExentoPagina !== undefined && pagina.SubtotalExentoPagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalExentoPagina>${pagina.SubtotalExentoPagina}</SubtotalExentoPagina>`);

  if (pagina.SubtotalItbisPagina !== undefined && pagina.SubtotalItbisPagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalItbisPagina>${pagina.SubtotalItbisPagina}</SubtotalItbisPagina>`);

  if (pagina.SubtotalItbis1Pagina !== undefined && pagina.SubtotalItbis1Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalItbis1Pagina>${pagina.SubtotalItbis1Pagina}</SubtotalItbis1Pagina>`);

  if (pagina.SubtotalItbis2Pagina !== undefined && pagina.SubtotalItbis2Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalItbis2Pagina>${pagina.SubtotalItbis2Pagina}</SubtotalItbis2Pagina>`);

  if (pagina.SubtotalItbis3Pagina !== undefined && pagina.SubtotalItbis3Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalItbis3Pagina>${pagina.SubtotalItbis3Pagina}</SubtotalItbis3Pagina>`);

  if (pagina.SubtotalImpuestoAdicionalPagina !== undefined && pagina.SubtotalImpuestoAdicionalPagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalImpuestoAdicionalPagina>${pagina.SubtotalImpuestoAdicionalPagina}</SubtotalImpuestoAdicionalPagina>`);

  // --- Subnivel <SubtotalImpuestoAdicional> ---
  if (
    pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina !== undefined ||
    pagina.SubtotalOtrosImpuesto !== undefined
  ) {
    lines.push(`${INDENT_aux6}<SubtotalImpuestoAdicional>`);

    if (pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina !== undefined && pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina !== null)
      lines.push(`${INDENT_aux8}<SubtotalImpuestoSelectivoConsumoEspecificoPagina>${pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina}</SubtotalImpuestoSelectivoConsumoEspecificoPagina>`);

    if (pagina.SubtotalOtrosImpuesto !== undefined && pagina.SubtotalOtrosImpuesto !== null)
      lines.push(`${INDENT_aux8}<SubtotalOtrosImpuesto>${pagina.SubtotalOtrosImpuesto}</SubtotalOtrosImpuesto>`);

    lines.push(`${INDENT_aux6}</SubtotalImpuestoAdicional>`);
  }

  if (pagina.MontoSubtotalPagina !== undefined && pagina.MontoSubtotalPagina !== null)
    lines.push(`${INDENT_aux6}<MontoSubtotalPagina>${pagina.MontoSubtotalPagina}</MontoSubtotalPagina>`);

  if (pagina.SubtotalMontoNoFacturablePagina !== undefined && pagina.SubtotalMontoNoFacturablePagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalMontoNoFacturablePagina>${pagina.SubtotalMontoNoFacturablePagina}</SubtotalMontoNoFacturablePagina>`);

  lines.push(`${INDENT_aux4}</Pagina>`);

  return lines.join("\n");
}

// 🧾 Función para lista completa <Paginacion>
function crearPaginacion(paginasArray) {
  if (!paginasArray || paginasArray.length === 0) return "";
  return `
  <Paginacion>
${paginasArray.map(p => crearPagina(p)).join('\n  ')}
  </Paginacion>`;
}



function crearInformacionReferencia(info) {
  const lines = [];

  lines.push(`${INDENT_aux2}<InformacionReferencia>`);

  if (info.NCFModificado)
    lines.push(`${INDENT_aux4}<NCFModificado>${info.NCFModificado}</NCFModificado>`);

  if (info.RNCOtroContribuyente)
    lines.push(`${INDENT_aux4}<RNCOtroContribuyente>${info.RNCOtroContribuyente}</RNCOtroContribuyente>`);

  if (info.FechaNCFModificado)
    lines.push(`${INDENT_aux4}<FechaNCFModificado>${info.FechaNCFModificado}</FechaNCFModificado>`);

  if (info.CodigoModificacion)
    lines.push(`${INDENT_aux4}<CodigoModificacion>${info.CodigoModificacion}</CodigoModificacion>`);

  lines.push(`${INDENT_aux2}</InformacionReferencia>`);

  return lines.join("\n");
}




function crearFirma(info) {
  return `
<FechaHoraFirma>${info.FechaHoraFirma}</FechaHoraFirma>
<any_element>${info.any_element}</any_element>`;
}



// Función principal que arma todo el XML
function crearFactura(datosFactura) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<ECF>`;

  if (datosFactura.Encabezado && Object.keys(datosFactura.Encabezado).length)
    xml += `  ${crearEncabezado(datosFactura.Encabezado)}\n`;

  if (datosFactura.DetallesItems && datosFactura.DetallesItems.length)
    xml += `  ${crearDetallesItems(datosFactura.DetallesItems)}\n`;

  if (datosFactura.Subtotales && datosFactura.Subtotales.length)
    xml += `  ${crearSubtotales(datosFactura.Subtotales)}\n`;

  if (datosFactura.DescuentosORecargos && datosFactura.DescuentosORecargos.length)
    xml += `  ${crearDescuentosORecargos(datosFactura.DescuentosORecargos)}\n`;

  if (datosFactura.Paginacion && Object.keys(datosFactura.Paginacion).length)
    xml += `  ${crearPaginacion(datosFactura.Paginacion)}\n`;

  if (datosFactura.InformacionReferencia && Object.keys(datosFactura.InformacionReferencia).length)
    xml += `  ${crearInformacionReferencia(datosFactura.InformacionReferencia)}\n`;

  if (datosFactura.Firma && Object.keys(datosFactura.Firma).length)
    xml += `  ${crearFirma(datosFactura.Firma)}\n`;

  xml += `</ECF>`;
  return xml;
}


module.exports = { crearFactura };