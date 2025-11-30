const { create } = require("xmlbuilder2");
const { subirXMLaDrive } = require("./enviarXMLGoogleDirve"); // importa la función
// Función para IdDoc

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




function crearIdDoc(idDoc) {
  const lines = [];
  let cheque = false;

  

  lines.push(`${INDENT_aux4}<IdDoc>`);

  if (idDoc.TipoeCF) lines.push(`${INDENT_aux6}<TipoeCF>${idDoc.TipoeCF}</TipoeCF>`);
  if (idDoc.eNCF) lines.push(`${INDENT_aux6}<eNCF>${idDoc.eNCF}</eNCF>`);
  if (idDoc.FechaVencimientoSecuencia) lines.push(`${INDENT_aux6}<FechaVencimientoSecuencia>${idDoc.FechaVencimientoSecuencia}</FechaVencimientoSecuencia>`);

  if (idDoc.IndicadorNotaCredito) lines.push(`${INDENT_aux6}<IndicadorNotaCredito>${idDoc.IndicadorNotaCredito}</IndicadorNotaCredito>`);


  if (idDoc.IndicadorEnvioDiferido && idDoc.IndicadorEnvioDiferido>0) lines.push(`${INDENT_aux6}<IndicadorEnvioDiferido>${idDoc.IndicadorEnvioDiferido}</IndicadorEnvioDiferido>`);
  if (idDoc.IndicadorMontoGravado) lines.push(`${INDENT_aux6}<IndicadorMontoGravado>${idDoc.IndicadorMontoGravado}</IndicadorMontoGravado>`);
  if (idDoc.IndicadorServicioTodoIncluido) lines.push(`${INDENT_aux6}<IndicadorServicioTodoIncluido>${idDoc.IndicadorServicioTodoIncluido}</IndicadorServicioTodoIncluido>`);
  if (idDoc.TipoIngresos) lines.push(`${INDENT_aux6}<TipoIngresos>${idDoc.TipoIngresos}</TipoIngresos>`);
  if (idDoc.TipoPago) lines.push(`${INDENT_aux6}<TipoPago>${idDoc.TipoPago}</TipoPago>`);
  if (idDoc.FechaLimitePago && idDoc.TipoPago == 2)  lines.push(`${INDENT_aux6}<FechaLimitePago>${idDoc.FechaLimitePago}</FechaLimitePago>`);
  if (idDoc.TerminoPago && idDoc.TipoPago == 2) lines.push(`${INDENT_aux6}<TerminoPago>${idDoc.TerminoPago}</TerminoPago>`);

  // TablaFormasPago
  if (idDoc.TablaFormasPago && idDoc.TablaFormasPago.length > 0) {
    lines.push(`${INDENT_aux6}<TablaFormasPago>`);
    idDoc.TablaFormasPago.forEach(fp => {
      lines.push(`${INDENT_aux8}<FormaDePago>`);
      if(fp.FormaPago == 2) cheque =true;
      if (fp.FormaPago) lines.push(`${INDENT_aux10}<FormaPago>${fp.FormaPago}</FormaPago>`);
      if (fp.MontoPago) lines.push(`${INDENT_aux10}<MontoPago>${formatNumberDecimal16y2(fp.MontoPago)}</MontoPago>`);
      lines.push(`${INDENT_aux8}</FormaDePago>`);
    });
    lines.push(`${INDENT_aux6}</TablaFormasPago>`);
  }

  if (idDoc.TipoCuentaPago  && cheque) lines.push(`${INDENT_aux6}<TipoCuentaPago>${idDoc.TipoCuentaPago}</TipoCuentaPago>`);
  if (idDoc.NumeroCuentaPago && cheque) lines.push(`${INDENT_aux6}<NumeroCuentaPago>${idDoc.NumeroCuentaPago}</NumeroCuentaPago>`);
  if (idDoc.BancoPago && cheque) lines.push(`${INDENT_aux6}<BancoPago>${idDoc.BancoPago}</BancoPago>`);

  if (idDoc.FechaDesde) lines.push(`${INDENT_aux6}<FechaDesde>${idDoc.FechaDesde}</FechaDesde>`);
  if (idDoc.FechaHasta) lines.push(`${INDENT_aux6}<FechaHasta>${idDoc.FechaHasta}</FechaHasta>`);
  if (idDoc.TotalPaginas && idDoc.TotalPaginas>1) lines.push(`${INDENT_aux6}<TotalPaginas>${idDoc.TotalPaginas}</TotalPaginas>`);

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

  if (emisor.Telefonos && emisor.Telefonos.some(t => t && t.trim() !== "")) {
    lines.push(`${INDENT_aux6}<TablaTelefonoEmisor>`);
    emisor.Telefonos
      .filter(t => t && t.trim() !== "")
      .forEach(t => {
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

  if (comprador.IdentificadorExtranjero)
    lines.push(`${INDENT_aux6}<IdentificadorExtranjero>${comprador.IdentificadorExtranjero}</IdentificadorExtranjero>`);


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

  if (comprador.PaisComprador)
    lines.push(`${INDENT_aux6}<PaisComprador>${comprador.PaisComprador}</PaisComprador>`);


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





  if (info.NombrePuertoEmbarque)
    lines.push(`${INDENT_aux6}<NombrePuertoEmbarque>${info.NombrePuertoEmbarque}</NombrePuertoEmbarque>`);

  if (info.CondicionesEntrega)
    lines.push(`${INDENT_aux6}<CondicionesEntrega>${info.CondicionesEntrega}</CondicionesEntrega>`);

  if (info.TotalFob)
    lines.push(`${INDENT_aux6}<TotalFob>${info.TotalFob}</TotalFob>`);

  if (info.Seguro)
    lines.push(`${INDENT_aux6}<Seguro>${info.Seguro}</Seguro>`);

  if (info.Flete)
    lines.push(`${INDENT_aux6}<Flete>${info.Flete}</Flete>`);

  if (info.OtrosGastos)
    lines.push(`${INDENT_aux6}<OtrosGastos>${info.OtrosGastos}</OtrosGastos>`);

  if (info.TotalCif)
    lines.push(`${INDENT_aux6}<TotalCif>${info.TotalCif}</TotalCif>`);

  if (info.RegimenAduanero)
    lines.push(`${INDENT_aux6}<RegimenAduanero>${info.RegimenAduanero}</RegimenAduanero>`);

  if (info.NombrePuertoSalida)
    lines.push(`${INDENT_aux6}<NombrePuertoSalida>${info.NombrePuertoSalida}</NombrePuertoSalida>`);

if (info.NombrePuertoDesembarque)
  lines.push(`${INDENT_aux6}<NombrePuertoDesembarque>${info.NombrePuertoDesembarque}</NombrePuertoDesembarque>`);








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

  // 78 - ViaTransporte
  if (transporte.ViaTransporte)
    lines.push(`${INDENT_aux6}<ViaTransporte>${transporte.ViaTransporte}</ViaTransporte>`);

  // 79 - PaisOrigen
  if (transporte.PaisOrigen)
    lines.push(`${INDENT_aux6}<PaisOrigen>${transporte.PaisOrigen}</PaisOrigen>`);

  // 80 - DireccionDestino
  if (transporte.DireccionDestino)
    lines.push(`${INDENT_aux6}<DireccionDestino>${transporte.DireccionDestino}</DireccionDestino>`);

  // 81 - PaisDestino
  if (transporte.PaisDestino)
    lines.push(`${INDENT_aux6}<PaisDestino>${transporte.PaisDestino}</PaisDestino>`);

  // 82 - RNCIdentificacionCompaniaTransportista
  if (transporte.RNCIdentificacionCompaniaTransportista)
    lines.push(`${INDENT_aux6}<RNCIdentificacionCompaniaTransportista>${transporte.RNCIdentificacionCompaniaTransportista}</RNCIdentificacionCompaniaTransportista>`);

  // 83 - NombreCompaniaTransportista
  if (transporte.NombreCompaniaTransportista)
    lines.push(`${INDENT_aux6}<NombreCompaniaTransportista>${transporte.NombreCompaniaTransportista}</NombreCompaniaTransportista>`);

  // 84 - NumeroViaje
  if (transporte.NumeroViaje)
    lines.push(`${INDENT_aux6}<NumeroViaje>${transporte.NumeroViaje}</NumeroViaje>`);

  // 85 - Conductor
  if (transporte.Conductor)
    lines.push(`${INDENT_aux6}<Conductor>${transporte.Conductor}</Conductor>`);

  // 86 - DocumentoTransporte
  if (transporte.DocumentoTransporte)
    lines.push(`${INDENT_aux6}<DocumentoTransporte>${transporte.DocumentoTransporte}</DocumentoTransporte>`);

  // 87 - Ficha
  if (transporte.Ficha)
    lines.push(`${INDENT_aux6}<Ficha>${transporte.Ficha}</Ficha>`);

  // 88 - Placa
  if (transporte.Placa)
    lines.push(`${INDENT_aux6}<Placa>${transporte.Placa}</Placa>`);

  // 89 - RutaTransporte
  if (transporte.RutaTransporte)
    lines.push(`${INDENT_aux6}<RutaTransporte>${transporte.RutaTransporte}</RutaTransporte>`);

  // 90 - ZonaTransporte
  if (transporte.ZonaTransporte)
    lines.push(`${INDENT_aux6}<ZonaTransporte>${transporte.ZonaTransporte}</ZonaTransporte>`);

  // 91 - NumeroAlbaran
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
    lines.push(`${INDENT_aux6}<MontoGravadoTotal>${formatNumberDecimal16y2(totales.MontoGravadoTotal)}</MontoGravadoTotal>`);

  if (totales.MontoGravadoI1)
    lines.push(`${INDENT_aux6}<MontoGravadoI1>${formatNumberDecimal16y2(totales.MontoGravadoI1)}</MontoGravadoI1>`);

  if (totales.MontoGravadoI2)
    lines.push(`${INDENT_aux6}<MontoGravadoI2>${formatNumberDecimal16y2(totales.MontoGravadoI2)}</MontoGravadoI2>`);

  if (totales.MontoGravadoI3)
    lines.push(`${INDENT_aux6}<MontoGravadoI3>${formatNumberDecimal16y2(totales.MontoGravadoI3)}</MontoGravadoI3>`);

  if (totales.MontoExento)
    lines.push(`${INDENT_aux6}<MontoExento>${formatNumberDecimal16y2(totales.MontoExento)}</MontoExento>`);

  if (totales.ITBIS1)
    lines.push(`${INDENT_aux6}<ITBIS1>${totales.ITBIS1}</ITBIS1>`);

  if (totales.ITBIS2)
    lines.push(`${INDENT_aux6}<ITBIS2>${totales.ITBIS2}</ITBIS2>`);

  if (totales.ITBIS3)
    lines.push(`${INDENT_aux6}<ITBIS3>${totales.ITBIS3}</ITBIS3>`);

  if (totales.TotalITBIS)
    lines.push(`${INDENT_aux6}<TotalITBIS>${formatNumberDecimal16y2(totales.TotalITBIS)}</TotalITBIS>`);

  if (totales.TotalITBIS1)
    lines.push(`${INDENT_aux6}<TotalITBIS1>${formatNumberDecimal16y2(totales.TotalITBIS1)}</TotalITBIS1>`);

  if (totales.TotalITBIS2)
    lines.push(`${INDENT_aux6}<TotalITBIS2>${formatNumberDecimal16y2(totales.TotalITBIS2)}</TotalITBIS2>`);

  if (totales.TotalITBIS3)
    lines.push(`${INDENT_aux6}<TotalITBIS3>${formatNumberDecimal16y2(totales.TotalITBIS3)}</TotalITBIS3>`);

  if (totales.MontoImpuestoAdicional)
    lines.push(`${INDENT_aux6}<MontoImpuestoAdicional>${formatNumberDecimal16y2(totales.MontoImpuestoAdicional)}</MontoImpuestoAdicional>`);

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
        lines.push(`${INDENT_aux10}<MontoImpuestoSelectivoConsumoEspecifico>${formatNumberDecimal16y2(imp.MontoImpuestoSelectivoConsumoEspecifico)}</MontoImpuestoSelectivoConsumoEspecifico>`);

      if (imp.MontoImpuestoSelectivoConsumoAdvalorem)
        lines.push(`${INDENT_aux10}<MontoImpuestoSelectivoConsumoAdvalorem>${formatNumberDecimal16y2(imp.MontoImpuestoSelectivoConsumoAdvalorem)}</MontoImpuestoSelectivoConsumoAdvalorem>`);

      if (imp.OtrosImpuestosAdicionales)
        lines.push(`${INDENT_aux10}<OtrosImpuestosAdicionales>${formatNumberDecimal16y2(imp.OtrosImpuestosAdicionales)}</OtrosImpuestosAdicionales>`);

      lines.push(`${INDENT_aux8}</ImpuestoAdicional>`);
    });

    lines.push(`${INDENT_aux6}</ImpuestosAdicionales>`);
  }

  if (totales.MontoTotal)
    lines.push(`${INDENT_aux6}<MontoTotal>${formatNumberDecimal16y2(totales.MontoTotal)}</MontoTotal>`);

  if (totales.MontoNoFacturable)
    lines.push(`${INDENT_aux6}<MontoNoFacturable>${formatNumberDecimal16y2(totales.MontoNoFacturable)}</MontoNoFacturable>`);

  if (totales.MontoPeriodo)
    lines.push(`${INDENT_aux6}<MontoPeriodo>${formatNumberDecimal16y2(totales.MontoPeriodo)}</MontoPeriodo>`);

  if (totales.SaldoAnterior)
    lines.push(`${INDENT_aux6}<SaldoAnterior>${formatNumberDecimal16y2(totales.SaldoAnterior)}</SaldoAnterior>`);

  if (totales.MontoAvancePago)
    lines.push(`${INDENT_aux6}<MontoAvancePago>${formatNumberDecimal16y2(totales.MontoAvancePago)}</MontoAvancePago>`);

  if (totales.ValorPagar)
    lines.push(`${INDENT_aux6}<ValorPagar>${formatNumberDecimal16y2(totales.ValorPagar)}</ValorPagar>`);

  if (totales.TotalITBISRetenido)
    lines.push(`${INDENT_aux6}<TotalITBISRetenido>${formatNumberDecimal16y2(totales.TotalITBISRetenido)}</TotalITBISRetenido>`);

  if (totales.TotalISRRetencion)
    lines.push(`${INDENT_aux6}<TotalISRRetencion>${formatNumberDecimal16y2(totales.TotalISRRetencion)}</TotalISRRetencion>`);

  if (totales.TotalITBISPercepcion)
    lines.push(`${INDENT_aux6}<TotalITBISPercepcion>${formatNumberDecimal16y2(totales.TotalITBISPercepcion)}</TotalITBISPercepcion>`);

  if (totales.TotalISRPercepcion)
    lines.push(`${INDENT_aux6}<TotalISRPercepcion>${formatNumberDecimal16y2(totales.TotalISRPercepcion)}</TotalISRPercepcion>`);

  lines.push(`${INDENT_aux4}</Totales>`);

  return lines.join("\n");
}



// Función para OtraMoneda con ifs y subnodos
function crearOtraMoneda(moneda) {
  const lines = [];

  lines.push(`${INDENT_aux4}<OtraMoneda>`);

  if (moneda.TipoMoneda) lines.push(`${INDENT_aux6}<TipoMoneda>${moneda.TipoMoneda}</TipoMoneda>`);
  if (moneda.TipoCambio) lines.push(`${INDENT_aux6}<TipoCambio>${formatNumberDecimal3y4(moneda.TipoCambio)}</TipoCambio>`);
  if (moneda.MontoGravadoTotalOtraMoneda) lines.push(`${INDENT_aux6}<MontoGravadoTotalOtraMoneda>${formatNumberDecimal16y2(moneda.MontoGravadoTotalOtraMoneda)}</MontoGravadoTotalOtraMoneda>`);
  if (moneda.MontoGravado1OtraMoneda) lines.push(`${INDENT_aux6}<MontoGravado1OtraMoneda>${formatNumberDecimal16y2(moneda.MontoGravado1OtraMoneda)}</MontoGravado1OtraMoneda>`);
  if (moneda.MontoGravado2OtraMoneda) lines.push(`${INDENT_aux6}<MontoGravado2OtraMoneda>${formatNumberDecimal16y2(moneda.MontoGravado2OtraMoneda)}</MontoGravado2OtraMoneda>`);
  if (moneda.MontoGravado3OtraMoneda) lines.push(`${INDENT_aux6}<MontoGravado3OtraMoneda>${formatNumberDecimal16y2(moneda.MontoGravado3OtraMoneda)}</MontoGravado3OtraMoneda>`);
  if (moneda.MontoExentoOtraMoneda) lines.push(`${INDENT_aux6}<MontoExentoOtraMoneda>${formatNumberDecimal16y2(moneda.MontoExentoOtraMoneda)}</MontoExentoOtraMoneda>`);
  if (moneda.TotalITBISOtraMoneda) lines.push(`${INDENT_aux6}<TotalITBISOtraMoneda>${formatNumberDecimal16y2(moneda.TotalITBISOtraMoneda)}</TotalITBISOtraMoneda>`);
  if (moneda.TotalITBIS1OtraMoneda) lines.push(`${INDENT_aux6}<TotalITBIS1OtraMoneda>${formatNumberDecimal16y2(moneda.TotalITBIS1OtraMoneda)}</TotalITBIS1OtraMoneda>`);
  if (moneda.TotalITBIS2OtraMoneda) lines.push(`${INDENT_aux6}<TotalITBIS2OtraMoneda>${formatNumberDecimal16y2(moneda.TotalITBIS2OtraMoneda)}</TotalITBIS2OtraMoneda>`);
  if (moneda.TotalITBIS3OtraMoneda) lines.push(`${INDENT_aux6}<TotalITBIS3OtraMoneda>${formatNumberDecimal16y2(moneda.TotalITBIS3OtraMoneda)}</TotalITBIS3OtraMoneda>`);
  if (moneda.MontoImpuestoAdicionalOtraMoneda) lines.push(`${INDENT_aux6}<MontoImpuestoAdicionalOtraMoneda>${formatNumberDecimal16y2(moneda.MontoImpuestoAdicionalOtraMoneda)}</MontoImpuestoAdicionalOtraMoneda>`);

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
        lines.push(`${INDENT_aux10}<MontoImpuestoSelectivoConsumoEspecificoOtraMoneda>${formatNumberDecimal16y2(imp.MontoImpuestoSelectivoConsumoEspecificoOtraMoneda)}</MontoImpuestoSelectivoConsumoEspecificoOtraMoneda>`);

      if (imp.MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda)
        lines.push(`${INDENT_aux10}<MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda>${formatNumberDecimal16y2(imp.MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda)}</MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda>`);

      if (imp.OtrosImpuestosAdicionalesOtraMoneda)
        lines.push(`${INDENT_aux10}<OtrosImpuestosAdicionalesOtraMoneda>${formatNumberDecimal16y2(imp.OtrosImpuestosAdicionalesOtraMoneda)}</OtrosImpuestosAdicionalesOtraMoneda>`);

      lines.push(`${INDENT_aux8}</ImpuestoAdicionalOtraMoneda>`);
    });

    lines.push(`${INDENT_aux6}</ImpuestosAdicionalesOtraMoneda>`);
  }

  if (moneda.MontoTotalOtraMoneda)
    lines.push(`${INDENT_aux6}<MontoTotalOtraMoneda>${formatNumberDecimal16y2(moneda.MontoTotalOtraMoneda)}</MontoTotalOtraMoneda>`);

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

  lines.push(`${INDENT_aux2}<DetallesItems>`);

  items.forEach(item => {
    lines.push(`${INDENT_aux4}<Item>`);
    lines.push(`${INDENT_aux6}<NumeroLinea>${item.NumeroLinea}</NumeroLinea>`);

    // TablaCodigosItem
    if (item.TablaCodigosItem && item.TablaCodigosItem.length > 0) {
      lines.push(`${INDENT_aux6}<TablaCodigosItem>`);
      item.TablaCodigosItem.forEach(c => {
        lines.push(`${INDENT_aux8}<CodigosItem>`);
        lines.push(`${INDENT_aux10}<TipoCodigo>${c.TipoCodigo}</TipoCodigo>`);
        lines.push(`${INDENT_aux10}<CodigoItem>${c.CodigoItem}</CodigoItem>`);
        lines.push(`${INDENT_aux8}</CodigosItem>`);
      });
      lines.push(`${INDENT_aux6}</TablaCodigosItem>`);
    }

    if (item.IndicadorFacturacion)
      lines.push(`${INDENT_aux6}<IndicadorFacturacion>${item.IndicadorFacturacion}</IndicadorFacturacion>`);

    // Retención
    if (item.Retencion) {
      lines.push(`${INDENT_aux6}<Retencion>`);
      if (item.Retencion.IndicadorAgenteRetencionoPercepcion)
        lines.push(`${INDENT_aux8}<IndicadorAgenteRetencionoPercepcion>${item.Retencion.IndicadorAgenteRetencionoPercepcion}</IndicadorAgenteRetencionoPercepcion>`);
      if (item.Retencion.MontoITBISRetenido)
        lines.push(`${INDENT_aux8}<MontoITBISRetenido>${formatNumberDecimal16y2(item.Retencion.MontoITBISRetenido)}</MontoITBISRetenido>`);
      if (item.Retencion.MontoISRRetenido)
        lines.push(`${INDENT_aux8}<MontoISRRetenido>${formatNumberDecimal16y2(item.Retencion.MontoISRRetenido)}</MontoISRRetenido>`);
      lines.push(`${INDENT_aux6}</Retencion>`);
    }

    if (item.NombreItem) lines.push(`${INDENT_aux6}<NombreItem>${item.NombreItem}</NombreItem>`);
    if (item.IndicadorBienoServicio) lines.push(`${INDENT_aux6}<IndicadorBienoServicio>${item.IndicadorBienoServicio}</IndicadorBienoServicio>`);
    if (item.DescripcionItem) lines.push(`${INDENT_aux6}<DescripcionItem>${item.DescripcionItem}</DescripcionItem>`);
    if (item.CantidadItem) lines.push(`${INDENT_aux6}<CantidadItem>${formatNumberDecimal16y2(item.CantidadItem)}</CantidadItem>`);
    if (item.UnidadMedida) lines.push(`${INDENT_aux6}<UnidadMedida>${item.UnidadMedida}</UnidadMedida>`);
    if (item.CantidadReferencia) lines.push(`${INDENT_aux6}<CantidadReferencia>${formatNumberDecimal16y2(item.CantidadReferencia)}</CantidadReferencia>`);
    if (item.UnidadReferencia) lines.push(`${INDENT_aux6}<UnidadReferencia>${item.UnidadReferencia}</UnidadReferencia>`);

    // TablaSubcantidad
    if (item.TablaSubcantidad && item.TablaSubcantidad.length > 0) {
      lines.push(`${INDENT_aux6}<TablaSubcantidad>`);
      item.TablaSubcantidad.forEach(s => {
        lines.push(`${INDENT_aux8}<SubcantidadItem>`);
        lines.push(`${INDENT_aux8}<Subcantidad>${formatNumberDecimal16y3(s.Subcantidad)}</Subcantidad>`);
        lines.push(`${INDENT_aux8}<CodigoSubcantidad>${s.CodigoSubcantidad}</CodigoSubcantidad>`);
        lines.push(`${INDENT_aux8}</SubcantidadItem>`);
      });
      lines.push(`${INDENT_aux6}</TablaSubcantidad>`);
    }

    if (item.GradosAlcohol) lines.push(`${INDENT_aux6}<GradosAlcohol>${formatNumberDecimal3y2(item.GradosAlcohol)}</GradosAlcohol>`);
    if (item.PrecioUnitarioReferencia) lines.push(`${INDENT_aux6}<PrecioUnitarioReferencia>${formatNumberDecimal16y2(item.PrecioUnitarioReferenci)}</PrecioUnitarioReferencia>`);
    if (item.FechaElaboracion) lines.push(`${INDENT_aux6}<FechaElaboracion>${item.FechaElaboracion}</FechaElaboracion>`);
    if (item.FechaVencimientoItem) lines.push(`${INDENT_aux6}<FechaVencimientoItem>${item.FechaVencimientoItem}</FechaVencimientoItem>`);
    if (item.PrecioUnitarioItem) lines.push(`${INDENT_aux6}<PrecioUnitarioItem>${formatNumberDecimal16y4(item.PrecioUnitarioItem)}</PrecioUnitarioItem>`);
    if (item.DescuentoMonto) lines.push(`${INDENT_aux6}<DescuentoMonto>${formatNumberDecimal16y2(item.DescuentoMonto)}</DescuentoMonto>`);

    // TablaSubDescuento
    if (item.TablaSubDescuento && item.TablaSubDescuento.length > 0) {
      lines.push(`${INDENT_aux6}<TablaSubDescuento>`);
      item.TablaSubDescuento.forEach(d => {
        lines.push(`${INDENT_aux8}<SubDescuento>`);
        lines.push(`${INDENT_aux8}<TipoSubDescuento>${d.TipoSubDescuento}</TipoSubDescuento>`);
        lines.push(`${INDENT_aux8}<SubDescuentoPorcentaje>${formatNumberDecimal3y2(d.SubDescuentoPorcentaje)}</SubDescuentoPorcentaje>`);
        lines.push(`${INDENT_aux8}<MontoSubDescuento>${formatNumberDecimal16y2(d.MontoSubDescuento)}</MontoSubDescuento>`);
        lines.push(`${INDENT_aux8}</SubDescuento>`);
      });
      lines.push(`${INDENT_aux6}</TablaSubDescuento>`);
    }

    if (item.RecargoMonto) lines.push(`${INDENT_aux6}<RecargoMonto>${formatNumberDecimal16y2(item.RecargoMonto)}</RecargoMonto>`);

    // TablaSubRecargo
    if (item.TablaSubRecargo && item.TablaSubRecargo.length > 0) {
      lines.push(`${INDENT_aux6}<TablaSubRecargo>`);
      item.TablaSubRecargo.forEach(r => {
        lines.push(`${INDENT_aux8}<SubRecargo>`);
        lines.push(`${INDENT_aux10}<TipoSubRecargo>${r.TipoSubRecargo}</TipoSubRecargo>`);
        if (r.SubRecargoPorcentaje) lines.push(`${INDENT_aux10}<SubRecargoPorcentaje>${formatNumberDecimal3y2(r.SubRecargoPorcentaje)}</SubRecargoPorcentaje>`);
        lines.push(`${INDENT_aux10}<MontoSubRecargo>${formatNumberDecimal16y2(r.MontoSubRecargo)}</MontoSubRecargo>`);
        lines.push(`${INDENT_aux8}</SubRecargo>`);
      });
      lines.push(`${INDENT_aux6}</TablaSubRecargo>`);
    }

    // TablaImpuestoAdicional
    if (item.TablaImpuestoAdicional && item.TablaImpuestoAdicional.length > 0) {
      lines.push(`${INDENT_aux6}<TablaImpuestoAdicional>`);
      item.TablaImpuestoAdicional.forEach(i => {
        lines.push(`${INDENT_aux8}<ImpuestoAdicional>`);
        lines.push(`${INDENT_aux8}<TipoImpuesto>${i.TipoImpuesto}</TipoImpuesto>`);
        lines.push(`${INDENT_aux8}</ImpuestoAdicional>`);
      });
      lines.push(`${INDENT_aux6}</TablaImpuestoAdicional>`);
    }

    // OtraMonedaDetalle
    if (item.OtraMonedaDetalle) {
      lines.push(`${INDENT_aux6}<OtraMonedaDetalle>`);
      Object.entries(item.OtraMonedaDetalle).forEach(([k, v]) => {
        lines.push(`${INDENT_aux8}<${k}>${v}</${k}>`);
      });
      lines.push(`${INDENT_aux6}</OtraMonedaDetalle>`);
    }

    if (item.MontoItem) lines.push(`${INDENT_aux6}<MontoItem>${formatNumberDecimal16y2(item.MontoItem)}</MontoItem>`);

    lines.push(`${INDENT_aux4}</Item>`);
  });

  lines.push(`${INDENT_aux2}</DetallesItems>`);

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
    lines.push(`${INDENT_aux6}<SubTotalMontoGravadoTotal>${formatNumberDecimal16y2(subtotal.SubTotalMontoGravadoTotal)}</SubTotalMontoGravadoTotal>`);

  if (subtotal.SubTotalMontoGravadoI1)
    lines.push(`${INDENT_aux6}<SubTotalMontoGravadoI1>${formatNumberDecimal16y2(subtotal.SubTotalMontoGravadoI1)}</SubTotalMontoGravadoI1>`);

  if (subtotal.SubTotalMontoGravadoI2)
    lines.push(`${INDENT_aux6}<SubTotalMontoGravadoI2>${formatNumberDecimal16y2(subtotal.SubTotalMontoGravadoI2)}</SubTotalMontoGravadoI2>`);

  if (subtotal.SubTotalMontoGravadoI3)
    lines.push(`${INDENT_aux6}<SubTotalMontoGravadoI3>${formatNumberDecimal16y2(subtotal.SubTotalMontoGravadoI3)}</SubTotalMontoGravadoI3>`);

  if (subtotal.SubTotaITBIS)
    lines.push(`${INDENT_aux6}<SubTotaITBIS>${formatNumberDecimal16y2(subtotal.SubTotaITBIS)}</SubTotaITBIS>`);

  if (subtotal.SubTotaITBIS1)
    lines.push(`${INDENT_aux6}<SubTotaITBIS1>${formatNumberDecimal16y2(subtotal.SubTotaITBIS1)}</SubTotaITBIS1>`);

  if (subtotal.SubTotaITBIS2)
    lines.push(`${INDENT_aux6}<SubTotaITBIS2>${formatNumberDecimal16y2(subtotal.SubTotaITBIS2)}</SubTotaITBIS2>`);

  if (subtotal.SubTotaITBIS3)
    lines.push(`${INDENT_aux6}<SubTotaITBIS3>${formatNumberDecimal16y2(subtotal.SubTotaITBIS3)}</SubTotaITBIS3>`);

  if (subtotal.SubTotalImpuestoAdicional)
    lines.push(`${INDENT_aux6}<SubTotalImpuestoAdicional>${formatNumberDecimal16y2(subtotal.SubTotalImpuestoAdicional)}</SubTotalImpuestoAdicional>`);

  if (subtotal.SubTotalExento)
    lines.push(`${INDENT_aux6}<SubTotalExento>${formatNumberDecimal16y2(subtotal.SubTotalExento)}</SubTotalExento>`);

  if (subtotal.MontoSubTotal)
    lines.push(`${INDENT_aux6}<MontoSubTotal>${formatNumberDecimal16y2(subtotal.MontoSubTotal)}</MontoSubTotal>`);

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
    lines.push(`${INDENT_aux6}<ValorDescuentooRecargo>${formatNumberDecimal3y2(desc.ValorDescuentooRecargo)}</ValorDescuentooRecargo>`);

  if (desc.MontoDescuentooRecargo !== undefined && desc.MontoDescuentooRecargo !== null)
    lines.push(`${INDENT_aux6}<MontoDescuentooRecargo>${formatNumberDecimal16y2(desc.MontoDescuentooRecargo)}</MontoDescuentooRecargo>`);

  if (desc.MontoDescuentooRecargoOtraMoneda !== undefined && desc.MontoDescuentooRecargoOtraMoneda !== null)
    lines.push(`${INDENT_aux6}<MontoDescuentooRecargoOtraMoneda>${formatNumberDecimal16y2(desc.MontoDescuentooRecargoOtraMoneda)}</MontoDescuentooRecargoOtraMoneda>`);

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
    lines.push(`${INDENT_aux6}<SubtotalMontoGravadoPagina>${formatNumberDecimal16y2(pagina.SubtotalMontoGravadoPagina)}</SubtotalMontoGravadoPagina>`);

  if (pagina.SubtotalMontoGravado1Pagina !== undefined && pagina.SubtotalMontoGravado1Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalMontoGravado1Pagina>${formatNumberDecimal16y2(pagina.SubtotalMontoGravado1Pagina)}</SubtotalMontoGravado1Pagina>`);

  if (pagina.SubtotalMontoGravado2Pagina !== undefined && pagina.SubtotalMontoGravado2Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalMontoGravado2Pagina>${formatNumberDecimal16y2(pagina.SubtotalMontoGravado2Pagina)}</SubtotalMontoGravado2Pagina>`);

  if (pagina.SubtotalMontoGravado3Pagina !== undefined && pagina.SubtotalMontoGravado3Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalMontoGravado3Pagina>${formatNumberDecimal16y2(pagina.SubtotalMontoGravado3Pagina)}</SubtotalMontoGravado3Pagina>`);

  if (pagina.SubtotalExentoPagina !== undefined && pagina.SubtotalExentoPagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalExentoPagina>${formatNumberDecimal16y2(pagina.SubtotalExentoPagina)}</SubtotalExentoPagina>`);

  if (pagina.SubtotalItbisPagina !== undefined && pagina.SubtotalItbisPagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalItbisPagina>${formatNumberDecimal16y2(pagina.SubtotalItbisPagina)}</SubtotalItbisPagina>`);

  if (pagina.SubtotalItbis1Pagina !== undefined && pagina.SubtotalItbis1Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalItbis1Pagina>${formatNumberDecimal16y2(pagina.SubtotalItbis1Pagina)}</SubtotalItbis1Pagina>`);

  if (pagina.SubtotalItbis2Pagina !== undefined && pagina.SubtotalItbis2Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalItbis2Pagina>${formatNumberDecimal16y2(pagina.SubtotalItbis2Pagina)}</SubtotalItbis2Pagina>`);

  if (pagina.SubtotalItbis3Pagina !== undefined && pagina.SubtotalItbis3Pagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalItbis3Pagina>${formatNumberDecimal16y2(pagina.SubtotalItbis3Pagina)}</SubtotalItbis3Pagina>`);

  if (pagina.SubtotalImpuestoAdicionalPagina !== undefined && pagina.SubtotalImpuestoAdicionalPagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalImpuestoAdicionalPagina>${formatNumberDecimal16y2(pagina.SubtotalImpuestoAdicionalPagina)}</SubtotalImpuestoAdicionalPagina>`);

  // --- Subnivel <SubtotalImpuestoAdicional> ---
  if (
    pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina !== undefined ||
    pagina.SubtotalOtrosImpuesto !== undefined
  ) {
    lines.push(`${INDENT_aux6}<SubtotalImpuestoAdicional>`);

    if (pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina !== undefined && pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina !== null)
      lines.push(`${INDENT_aux8}<SubtotalImpuestoSelectivoConsumoEspecificoPagina>${formatNumberDecimal16y2(pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina)}</SubtotalImpuestoSelectivoConsumoEspecificoPagina>`);

    if (pagina.SubtotalOtrosImpuesto !== undefined && pagina.SubtotalOtrosImpuesto !== null)
      lines.push(`${INDENT_aux8}<SubtotalOtrosImpuesto>${formatNumberDecimal16y2(pagina.SubtotalOtrosImpuesto)}</SubtotalOtrosImpuesto>`);

    lines.push(`${INDENT_aux6}</SubtotalImpuestoAdicional>`);
  }

  if (pagina.MontoSubtotalPagina !== undefined && pagina.MontoSubtotalPagina !== null)
    lines.push(`${INDENT_aux6}<MontoSubtotalPagina>${formatNumberDecimal16y2(pagina.MontoSubtotalPagina)}</MontoSubtotalPagina>`);

  if (pagina.SubtotalMontoNoFacturablePagina !== undefined && pagina.SubtotalMontoNoFacturablePagina !== null)
    lines.push(`${INDENT_aux6}<SubtotalMontoNoFacturablePagina>${formatNumberDecimal16y2(pagina.SubtotalMontoNoFacturablePagina)}</SubtotalMontoNoFacturablePagina>`);

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

  if (info.RazonModificacion)
    lines.push(`${INDENT_aux4}<RazonModificacion>${info.RazonModificacion}</RazonModificacion>`);


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
    xml += `${crearDetallesItems(datosFactura.DetallesItems)}\n`;

  if (datosFactura.Subtotales && datosFactura.Subtotales.length)
    xml += `${crearSubtotales(datosFactura.Subtotales)}\n`;

  if (datosFactura.DescuentosORecargos && datosFactura.DescuentosORecargos.length)
    xml += `${crearDescuentosORecargos(datosFactura.DescuentosORecargos)}\n`;

  if (datosFactura.Paginacion && Object.keys(datosFactura.Paginacion).length)
    xml += `${crearPaginacion(datosFactura.Paginacion)}\n`;

  if (datosFactura.InformacionReferencia && Object.keys(datosFactura.InformacionReferencia).length)
    xml += `${crearInformacionReferencia(datosFactura.InformacionReferencia)}\n`;

  if (datosFactura.Firma && Object.keys(datosFactura.Firma).length)
    xml += `${crearFirma(datosFactura.Firma)}\n`;

  xml += `</ECF>`;
  return xml;
}


const datosPrueba = {
    Encabezado : {
    IdDoc: {
      TipoeCF: "01",
      eNCF: "B0100000001",
      FechaVencimientoSecuencia: "2025-12-31",
      IndicadorNotaCredito: "0",
      IndicadorEnvioDiferido: 1,
      IndicadorMontoGravado: 1,
      TipoPago: 2,
      FechaLimitePago: "2026-01-15",
      TerminoPago: "Contado",
      TablaFormasPago: [
        { FormaPago: 1, MontoPago: 1000.50 },
        { FormaPago: 2, MontoPago: 500.75 }
      ],
      TipoCuentaPago: "Ahorros",
      NumeroCuentaPago: "123456789",
      BancoPago: "Banco de Prueba",
      FechaDesde: "2025-11-01",
      FechaHasta: "2025-11-30",
      TotalPaginas: 2
    },
    Emisor: {
      RNCEmisor: "131234567",
      RazonSocialEmisor: "Mi Empresa SRL",
      NombreComercial: "Mi Empresa",
      Sucursal: "01",
      DireccionEmisor: "Calle Falsa 123",
      Municipio: "Santo Domingo",
      Provincia: "Distrito Nacional",
      Telefonos: ["809-555-1234", "809-555-5678"],
      CorreoEmisor: "contacto@empresa.com",
      WebSite: "www.empresa.com",
      ActividadEconomica: "Comercio",
      CodigoVendedor: "001",
      NumeroFacturaInterna: "F123",
      NumeroPedidoInterno: "P123",
      ZonaVenta: "Zona Norte",
      RutaVenta: "Ruta 1",
      InformacionAdicionalEmisor: "Datos extra",
      FechaEmision: "2025-11-30"
    },
    Comprador: {
      RNCComprador: "101234567",
      RazonSocialComprador: "Cliente Ejemplo SRL",
      ContactoComprador: "Juan Perez",
      CorreoComprador: "juan@cliente.com",
      DireccionComprador: "Av. Siempre Viva 456",
      MunicipioComprador: "Santiago",
      ProvinciaComprador: "Santiago",
      PaisComprador: "República Dominicana",
      FechaEntrega: "2025-12-05",
      ContactoEntrega: "Ana Lopez",
      DireccionEntrega: "Calle Secundaria 789",
      TelefonoAdicional: "809-555-9999",
      FechaOrdenCompra: "2025-11-28",
      NumeroOrdenCompra: "OC-001",
      CodigoInternoComprador: "C001",
      ResponsablePago: "Juan Perez",
      InformacionAdicionalComprador: "Observaciones"
    },
    InformacionesAdicionales: {
      FechaEmbarque: "2025-12-01",
      NumeroEmbarque: "EMB-001",
      NumeroContenedor: "CONT-001",
      NumeroReferencia: "REF-001",
      NombrePuertoEmbarque: "Puerto de Santo Domingo",
      CondicionesEntrega: "FOB",
      TotalFob: 1200.00,
      Seguro: 50.00,
      Flete: 100.00,
      OtrosGastos: 25.00,
      TotalCif: 1375.00,
      RegimenAduanero: "Importación",
      NombrePuertoSalida: "Puerto de Miami",
      NombrePuertoDesembarque: "Puerto de Santo Domingo",
      PesoBruto: 500,
      PesoNeto: 480,
      UnidadPesoBruto: "Kg",
      UnidadPesoNeto: "Kg",
      CantidadBulto: 10,
      UnidadBulto: "Caja",
      VolumenBulto: 2.5,
      UnidadVolumen: "m3"
    },
    Transporte: {
      ViaTransporte: "Marítimo",
      PaisOrigen: "EEUU",
      DireccionDestino: "Puerto de Santo Domingo",
      PaisDestino: "República Dominicana",
      RNCIdentificacionCompaniaTransportista: "131234567",
      NombreCompaniaTransportista: "Transportes SRL",
      NumeroViaje: "V001",
      Conductor: "Pedro Gómez",
      DocumentoTransporte: "DT-001",
      Ficha: "F001",
      Placa: "ABC-123",
      RutaTransporte: "Ruta 1",
      ZonaTransporte: "Zona Norte",
      NumeroAlbaran: "ALB-001"
    },
    Totales: {
      MontoGravadoTotal: 1000.50,
      MontoExento: 0,
      TotalITBIS: 180.09,
      MontoTotal: 1180.59,
      MontoNoFacturable: 0,
      SaldoAnterior: 0,
      MontoAvancePago: 0,
      ValorPagar: 1180.59
    },
    OtraMoneda: {
      TipoMoneda: "USD",
      TipoCambio: 54.50,
      MontoTotalOtraMoneda: 21.64
    },
    },
  DetallesItems: [
    {
      NumeroLinea: 1,
      NombreItem: "Producto A",
      CantidadItem: 2,
      UnidadMedida: "UND",
      PrecioUnitarioItem: 500.25,
      MontoItem: 1000.50
    },
    {
      NumeroLinea: 2,
      NombreItem: "Producto B",
      CantidadItem: 1,
      UnidadMedida: "UND",
      PrecioUnitarioItem: 180.09,
      MontoItem: 180.09
    }
  ],
  Subtotales: [
    {
      NumeroSubTotal: 1,
      SubTotalMontoGravadoTotal: 1000.50,
      MontoSubTotal: 1000.50
    }
  ],
  DescuentosORecargos: [
    {
      NumeroLinea: 1,
      TipoAjuste: "Descuento",
      ValorDescuentooRecargo: 10,
      MontoDescuentooRecargo: 10.00
    }
  ],
  Paginacion: [
    {
      PaginaNo: 1,
      NoLineaDesde: 1,
      NoLineaHasta: 2,
      MontoSubtotalPagina: 1180.59
    }
  ],
  InformacionReferencia: {
    NCFModificado: "B0100000000",
    FechaNCFModificado: "2025-11-29"
  }
};

// Ejemplo de uso
// async function main() {
//   const xml = crearFactura(datosPrueba);

//   const respuesta = await subirXMLaDrive(
//     xml,
//     "factura_0001.xml",
//     "Cliente_001",
//     "Factura"
//   );

//   console.log(respuesta);
// }

// main();




module.exports = { crearFactura };