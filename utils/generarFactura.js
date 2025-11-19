const { create } = require("xmlbuilder2");
// Función para IdDoc

function crearIdDoc(idDoc) {
  return `
<IdDoc>
  ${idDoc.TipoeCF ? `<TipoeCF>${idDoc.TipoeCF}</TipoeCF>` : ""}
  ${idDoc.eNCF ? `<eNCF>${idDoc.eNCF}</eNCF>` : ""}
  ${idDoc.FechaVencimientoSecuencia ? `<FechaVencimientoSecuencia>${idDoc.FechaVencimientoSecuencia}</FechaVencimientoSecuencia>` : ""}
  ${idDoc.IndicadorEnvioDiferido ? `<IndicadorEnvioDiferido>${idDoc.IndicadorEnvioDiferido}</IndicadorEnvioDiferido>` : ""}
  ${idDoc.IndicadorMontoGravado ? `<IndicadorMontoGravado>${idDoc.IndicadorMontoGravado}</IndicadorMontoGravado>` : ""}
  ${idDoc.IndicadorServicioTodoIncluido ? `<IndicadorServicioTodoIncluido>${idDoc.IndicadorServicioTodoIncluido}</IndicadorServicioTodoIncluido>` : ""}
  ${idDoc.TipoIngresos ? `<TipoIngresos>${idDoc.TipoIngresos}</TipoIngresos>` : ""}
  ${idDoc.TipoPago ? `<TipoPago>${idDoc.TipoPago}</TipoPago>` : ""}
  ${idDoc.FechaLimitePago ? `<FechaLimitePago>${idDoc.FechaLimitePago}</FechaLimitePago>` : ""}
  ${idDoc.TerminoPago ? `<TerminoPago>${idDoc.TerminoPago}</TerminoPago>` : ""}

  ${
    idDoc.TablaFormasPago && idDoc.TablaFormasPago.length
      ? `<TablaFormasPago>
    ${idDoc.TablaFormasPago.map(fp => `
      <FormaDePago>
        ${fp.FormaPago ? `<FormaPago>${fp.FormaPago}</FormaPago>` : ""}
        ${fp.MontoPago ? `<MontoPago>${fp.MontoPago}</MontoPago>` : ""}
      </FormaDePago>`).join("")}
    </TablaFormasPago>`
      : ""
  }

  ${idDoc.TipoCuentaPago ? `<TipoCuentaPago>${idDoc.TipoCuentaPago}</TipoCuentaPago>` : ""}
  ${idDoc.NumeroCuentaPago ? `<NumeroCuentaPago>${idDoc.NumeroCuentaPago}</NumeroCuentaPago>` : ""}
  ${idDoc.BancoPago ? `<BancoPago>${idDoc.BancoPago}</BancoPago>` : ""}
  ${idDoc.FechaDesde ? `<FechaDesde>${idDoc.FechaDesde}</FechaDesde>` : ""}
  ${idDoc.FechaHasta ? `<FechaHasta>${idDoc.FechaHasta}</FechaHasta>` : ""}
  ${idDoc.TotalPaginas ? `<TotalPaginas>${idDoc.TotalPaginas}</TotalPaginas>` : ""}
</IdDoc>`;
}



function crearEmisor(emisor) {
  return `
<Emisor>
  ${emisor.RNCEmisor ? `<RNCEmisor>${emisor.RNCEmisor}</RNCEmisor>` : ""}
  ${emisor.RazonSocialEmisor ? `<RazonSocialEmisor>${emisor.RazonSocialEmisor}</RazonSocialEmisor>` : ""}
  ${emisor.NombreComercial ? `<NombreComercial>${emisor.NombreComercial}</NombreComercial>` : ""}
  ${emisor.Sucursal ? `<Sucursal>${emisor.Sucursal}</Sucursal>` : ""}
  ${emisor.DireccionEmisor ? `<DireccionEmisor>${emisor.DireccionEmisor}</DireccionEmisor>` : ""}
  ${emisor.Municipio ? `<Municipio>${emisor.Municipio}</Municipio>` : ""}
  ${emisor.Provincia ? `<Provincia>${emisor.Provincia}</Provincia>` : ""}
  ${
    emisor.Telefonos && emisor.Telefonos.length
      ? `<TablaTelefonoEmisor>
    ${emisor.Telefonos.map(t => `<TelefonoEmisor>${t}</TelefonoEmisor>`).join("")}
  </TablaTelefonoEmisor>`
      : ""
  }
  ${emisor.CorreoEmisor ? `<CorreoEmisor>${emisor.CorreoEmisor}</CorreoEmisor>` : ""}
  ${emisor.WebSite ? `<WebSite>${emisor.WebSite}</WebSite>` : ""}
  ${emisor.ActividadEconomica ? `<ActividadEconomica>${emisor.ActividadEconomica}</ActividadEconomica>` : ""}
  ${emisor.CodigoVendedor ? `<CodigoVendedor>${emisor.CodigoVendedor}</CodigoVendedor>` : ""}
  ${emisor.NumeroFacturaInterna ? `<NumeroFacturaInterna>${emisor.NumeroFacturaInterna}</NumeroFacturaInterna>` : ""}
  ${emisor.NumeroPedidoInterno ? `<NumeroPedidoInterno>${emisor.NumeroPedidoInterno}</NumeroPedidoInterno>` : ""}
  ${emisor.ZonaVenta ? `<ZonaVenta>${emisor.ZonaVenta}</ZonaVenta>` : ""}
  ${emisor.RutaVenta ? `<RutaVenta>${emisor.RutaVenta}</RutaVenta>` : ""}
  ${emisor.InformacionAdicionalEmisor ? `<InformacionAdicionalEmisor>${emisor.InformacionAdicionalEmisor}</InformacionAdicionalEmisor>` : ""}
  ${emisor.FechaEmision ? `<FechaEmision>${emisor.FechaEmision}</FechaEmision>` : ""}
</Emisor>`;
}

function crearComprador(comprador) {
  return `
<Comprador>
  ${comprador.RNCComprador ? `<RNCComprador>${comprador.RNCComprador}</RNCComprador>` : ""}
  ${comprador.RazonSocialComprador ? `<RazonSocialComprador>${comprador.RazonSocialComprador}</RazonSocialComprador>` : ""}
  ${comprador.ContactoComprador ? `<ContactoComprador>${comprador.ContactoComprador}</ContactoComprador>` : ""}
  ${comprador.CorreoComprador ? `<CorreoComprador>${comprador.CorreoComprador}</CorreoComprador>` : ""}
  ${comprador.DireccionComprador ? `<DireccionComprador>${comprador.DireccionComprador}</DireccionComprador>` : ""}
  ${comprador.MunicipioComprador ? `<MunicipioComprador>${comprador.MunicipioComprador}</MunicipioComprador>` : ""}
  ${comprador.ProvinciaComprador ? `<ProvinciaComprador>${comprador.ProvinciaComprador}</ProvinciaComprador>` : ""}
  ${comprador.FechaEntrega ? `<FechaEntrega>${comprador.FechaEntrega}</FechaEntrega>` : ""}
  ${comprador.ContactoEntrega ? `<ContactoEntrega>${comprador.ContactoEntrega}</ContactoEntrega>` : ""}
  ${comprador.DireccionEntrega ? `<DireccionEntrega>${comprador.DireccionEntrega}</DireccionEntrega>` : ""}
  ${comprador.TelefonoAdicional ? `<TelefonoAdicional>${comprador.TelefonoAdicional}</TelefonoAdicional>` : ""}
  ${comprador.FechaOrdenCompra ? `<FechaOrdenCompra>${comprador.FechaOrdenCompra}</FechaOrdenCompra>` : ""}
  ${comprador.NumeroOrdenCompra ? `<NumeroOrdenCompra>${comprador.NumeroOrdenCompra}</NumeroOrdenCompra>` : ""}
  ${comprador.CodigoInternoComprador ? `<CodigoInternoComprador>${comprador.CodigoInternoComprador}</CodigoInternoComprador>` : ""}
  ${comprador.ResponsablePago ? `<ResponsablePago>${comprador.ResponsablePago}</ResponsablePago>` : ""}
  ${comprador.InformacionAdicionalComprador ? `<InformacionAdicionalComprador>${comprador.InformacionAdicionalComprador}</InformacionAdicionalComprador>` : ""}
</Comprador>`;
}


// Función para InformacionesAdicionales con ifs por cada campo
function crearInformacionesAdicionales(info) {
  let xml = `<InformacionesAdicionales>`;

  if (info.FechaEmbarque) 
    xml += `<FechaEmbarque>${info.FechaEmbarque}</FechaEmbarque>`;
  
  if (info.NumeroEmbarque) 
    xml += `<NumeroEmbarque>${info.NumeroEmbarque}</NumeroEmbarque>`;
  
  if (info.NumeroContenedor) 
    xml += `<NumeroContenedor>${info.NumeroContenedor}</NumeroContenedor>`;
  
  if (info.NumeroReferencia) 
    xml += `<NumeroReferencia>${info.NumeroReferencia}</NumeroReferencia>`;
  
  if (info.PesoBruto) 
    xml += `<PesoBruto>${info.PesoBruto}</PesoBruto>`;
  
  if (info.PesoNeto) 
    xml += `<PesoNeto>${info.PesoNeto}</PesoNeto>`;
  
  if (info.UnidadPesoBruto) 
    xml += `<UnidadPesoBruto>${info.UnidadPesoBruto}</UnidadPesoBruto>`;
  
  if (info.UnidadPesoNeto) 
    xml += `<UnidadPesoNeto>${info.UnidadPesoNeto}</UnidadPesoNeto>`;
  
  if (info.CantidadBulto) 
    xml += `<CantidadBulto>${info.CantidadBulto}</CantidadBulto>`;
  
  if (info.UnidadBulto) 
    xml += `<UnidadBulto>${info.UnidadBulto}</UnidadBulto>`;
  
  if (info.VolumenBulto) 
    xml += `<VolumenBulto>${info.VolumenBulto}</VolumenBulto>`;
  
  if (info.UnidadVolumen) 
    xml += `<UnidadVolumen>${info.UnidadVolumen}</UnidadVolumen>`;

  xml += `</InformacionesAdicionales>`;

  return xml;
}



// Función para Transporte con ifs por cada campo
function crearTransporte(transporte) {
  let xml = `<Transporte>`;

  if (transporte.Conductor)
    xml += `<Conductor>${transporte.Conductor}</Conductor>`;

  if (transporte.DocumentoTransporte)
    xml += `<DocumentoTransporte>${transporte.DocumentoTransporte}</DocumentoTransporte>`;

  if (transporte.Ficha)
    xml += `<Ficha>${transporte.Ficha}</Ficha>`;

  if (transporte.Placa)
    xml += `<Placa>${transporte.Placa}</Placa>`;

  if (transporte.RutaTransporte)
    xml += `<RutaTransporte>${transporte.RutaTransporte}</RutaTransporte>`;

  if (transporte.ZonaTransporte)
    xml += `<ZonaTransporte>${transporte.ZonaTransporte}</ZonaTransporte>`;

  if (transporte.NumeroAlbaran)
    xml += `<NumeroAlbaran>${transporte.NumeroAlbaran}</NumeroAlbaran>`;

  xml += `</Transporte>`;
  return xml;
}


// Función para Totales con ifs por cada campo
function crearTotales(totales) {
  let xml = `<Totales>`;

  if (totales.MontoGravadoTotal)
    xml += `<MontoGravadoTotal>${totales.MontoGravadoTotal}</MontoGravadoTotal>`;

  if (totales.MontoGravadoI1)
    xml += `<MontoGravadoI1>${totales.MontoGravadoI1}</MontoGravadoI1>`;

  if (totales.MontoGravadoI2)
    xml += `<MontoGravadoI2>${totales.MontoGravadoI2}</MontoGravadoI2>`;

  if (totales.MontoGravadoI3)
    xml += `<MontoGravadoI3>${totales.MontoGravadoI3}</MontoGravadoI3>`;

  if (totales.MontoExento)
    xml += `<MontoExento>${totales.MontoExento}</MontoExento>`;

  if (totales.ITBIS1)
    xml += `<ITBIS1>${totales.ITBIS1}</ITBIS1>`;

  if (totales.ITBIS2)
    xml += `<ITBIS2>${totales.ITBIS2}</ITBIS2>`;

  if (totales.ITBIS3)
    xml += `<ITBIS3>${totales.ITBIS3}</ITBIS3>`;

  if (totales.TotalITBIS)
    xml += `<TotalITBIS>${totales.TotalITBIS}</TotalITBIS>`;

  if (totales.TotalITBIS1)
    xml += `<TotalITBIS1>${totales.TotalITBIS1}</TotalITBIS1>`;

  if (totales.TotalITBIS2)
    xml += `<TotalITBIS2>${totales.TotalITBIS2}</TotalITBIS2>`;

  if (totales.TotalITBIS3)
    xml += `<TotalITBIS3>${totales.TotalITBIS3}</TotalITBIS3>`;

  if (totales.MontoImpuestoAdicional)
    xml += `<MontoImpuestoAdicional>${totales.MontoImpuestoAdicional}</MontoImpuestoAdicional>`;

  // Subnodo ImpuestosAdicionales
  if (totales.ImpuestosAdicionales && totales.ImpuestosAdicionales.length > 0) {
    xml += `<ImpuestosAdicionales>`;
    totales.ImpuestosAdicionales.forEach(imp => {
      xml += `<ImpuestoAdicional>`;

      if (imp.TipoImpuesto)
        xml += `<TipoImpuesto>${imp.TipoImpuesto}</TipoImpuesto>`;

      if (imp.TasaImpuestoAdicional)
        xml += `<TasaImpuestoAdicional>${imp.TasaImpuestoAdicional}</TasaImpuestoAdicional>`;

      if (imp.MontoImpuestoSelectivoConsumoEspecifico)
        xml += `<MontoImpuestoSelectivoConsumoEspecifico>${imp.MontoImpuestoSelectivoConsumoEspecifico}</MontoImpuestoSelectivoConsumoEspecifico>`;

      if (imp.MontoImpuestoSelectivoConsumoAdvalorem)
        xml += `<MontoImpuestoSelectivoConsumoAdvalorem>${imp.MontoImpuestoSelectivoConsumoAdvalorem}</MontoImpuestoSelectivoConsumoAdvalorem>`;

      if (imp.OtrosImpuestosAdicionales)
        xml += `<OtrosImpuestosAdicionales>${imp.OtrosImpuestosAdicionales}</OtrosImpuestosAdicionales>`;

      xml += `</ImpuestoAdicional>`;
    });
    xml += `</ImpuestosAdicionales>`;
  }

  if (totales.MontoTotal)
    xml += `<MontoTotal>${totales.MontoTotal}</MontoTotal>`;

  if (totales.MontoNoFacturable)
    xml += `<MontoNoFacturable>${totales.MontoNoFacturable}</MontoNoFacturable>`;

  if (totales.MontoPeriodo)
    xml += `<MontoPeriodo>${totales.MontoPeriodo}</MontoPeriodo>`;

  if (totales.SaldoAnterior)
    xml += `<SaldoAnterior>${totales.SaldoAnterior}</SaldoAnterior>`;

  if (totales.MontoAvancePago)
    xml += `<MontoAvancePago>${totales.MontoAvancePago}</MontoAvancePago>`;

  if (totales.ValorPagar)
    xml += `<ValorPagar>${totales.ValorPagar}</ValorPagar>`;

  if (totales.TotalITBISRetenido)
    xml += `<TotalITBISRetenido>${totales.TotalITBISRetenido}</TotalITBISRetenido>`;

  if (totales.TotalISRRetencion)
    xml += `<TotalISRRetencion>${totales.TotalISRRetencion}</TotalISRRetencion>`;

  if (totales.TotalITBISPercepcion)
    xml += `<TotalITBISPercepcion>${totales.TotalITBISPercepcion}</TotalITBISPercepcion>`;

  if (totales.TotalISRPercepcion)
    xml += `<TotalISRPercepcion>${totales.TotalISRPercepcion}</TotalISRPercepcion>`;

  xml += `</Totales>`;
  return xml;
}


// Función para OtraMoneda con ifs y subnodos
function crearOtraMoneda(moneda) {
  let xml = `<OtraMoneda>`;

  if (moneda.TipoMoneda)
    xml += `<TipoMoneda>${moneda.TipoMoneda}</TipoMoneda>`;

  if (moneda.TipoCambio)
    xml += `<TipoCambio>${moneda.TipoCambio}</TipoCambio>`;

  if (moneda.MontoGravadoTotalOtraMoneda)
    xml += `<MontoGravadoTotalOtraMoneda>${moneda.MontoGravadoTotalOtraMoneda}</MontoGravadoTotalOtraMoneda>`;

  if (moneda.MontoGravado1OtraMoneda)
    xml += `<MontoGravado1OtraMoneda>${moneda.MontoGravado1OtraMoneda}</MontoGravado1OtraMoneda>`;

  if (moneda.MontoGravado2OtraMoneda)
    xml += `<MontoGravado2OtraMoneda>${moneda.MontoGravado2OtraMoneda}</MontoGravado2OtraMoneda>`;

  if (moneda.MontoGravado3OtraMoneda)
    xml += `<MontoGravado3OtraMoneda>${moneda.MontoGravado3OtraMoneda}</MontoGravado3OtraMoneda>`;

  if (moneda.MontoExentoOtraMoneda)
    xml += `<MontoExentoOtraMoneda>${moneda.MontoExentoOtraMoneda}</MontoExentoOtraMoneda>`;

  if (moneda.TotalITBISOtraMoneda)
    xml += `<TotalITBISOtraMoneda>${moneda.TotalITBISOtraMoneda}</TotalITBISOtraMoneda>`;

  if (moneda.TotalITBIS1OtraMoneda)
    xml += `<TotalITBIS1OtraMoneda>${moneda.TotalITBIS1OtraMoneda}</TotalITBIS1OtraMoneda>`;

  if (moneda.TotalITBIS2OtraMoneda)
    xml += `<TotalITBIS2OtraMoneda>${moneda.TotalITBIS2OtraMoneda}</TotalITBIS2OtraMoneda>`;

  if (moneda.TotalITBIS3OtraMoneda)
    xml += `<TotalITBIS3OtraMoneda>${moneda.TotalITBIS3OtraMoneda}</TotalITBIS3OtraMoneda>`;

  if (moneda.MontoImpuestoAdicionalOtraMoneda)
    xml += `<MontoImpuestoAdicionalOtraMoneda>${moneda.MontoImpuestoAdicionalOtraMoneda}</MontoImpuestoAdicionalOtraMoneda>`;

  // Subnodo: ImpuestosAdicionalesOtraMoneda
  if (moneda.ImpuestosAdicionalesOtraMoneda && moneda.ImpuestosAdicionalesOtraMoneda.length > 0) {
    xml += `<ImpuestosAdicionalesOtraMoneda>`;
    moneda.ImpuestosAdicionalesOtraMoneda.forEach(imp => {
      xml += `<ImpuestoAdicionalOtraMoneda>`;

      if (imp.TipoImpuestoOtraMoneda)
        xml += `<TipoImpuestoOtraMoneda>${imp.TipoImpuestoOtraMoneda}</TipoImpuestoOtraMoneda>`;

      if (imp.TasaImpuestoAdicionalOtraMoneda)
        xml += `<TasaImpuestoAdicionalOtraMoneda>${imp.TasaImpuestoAdicionalOtraMoneda}</TasaImpuestoAdicionalOtraMoneda>`;

      if (imp.MontoImpuestoSelectivoConsumoEspecificoOtraMoneda)
        xml += `<MontoImpuestoSelectivoConsumoEspecificoOtraMoneda>${imp.MontoImpuestoSelectivoConsumoEspecificoOtraMoneda}</MontoImpuestoSelectivoConsumoEspecificoOtraMoneda>`;

      if (imp.MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda)
        xml += `<MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda>${imp.MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda}</MontoImpuestoSelectivoConsumoAdvaloremOtraMoneda>`;

      if (imp.OtrosImpuestosAdicionalesOtraMoneda)
        xml += `<OtrosImpuestosAdicionalesOtraMoneda>${imp.OtrosImpuestosAdicionalesOtraMoneda}</OtrosImpuestosAdicionalesOtraMoneda>`;

      xml += `</ImpuestoAdicionalOtraMoneda>`;
    });
    xml += `</ImpuestosAdicionalesOtraMoneda>`;
  }

  if (moneda.MontoTotalOtraMoneda)
    xml += `<MontoTotalOtraMoneda>${moneda.MontoTotalOtraMoneda}</MontoTotalOtraMoneda>`;

  xml += `</OtraMoneda>`;
  return xml;
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
  return `
<DetallesItems>
  ${items.map(item => `
  <Item>
    <NumeroLinea>${item.NumeroLinea}</NumeroLinea>

    ${item.TablaCodigosItem ? `
    <TablaCodigosItem>
      ${item.TablaCodigosItem.map(c => `
      <CodigosItem>
        <TipoCodigo>${c.TipoCodigo}</TipoCodigo>
        <CodigoItem>${c.CodigoItem}</CodigoItem>
      </CodigosItem>`).join('')}
    </TablaCodigosItem>` : ''}

    ${item.IndicadorFacturacion ? `<IndicadorFacturacion>${item.IndicadorFacturacion}</IndicadorFacturacion>` : ''}

    ${item.Retencion ? `
    <Retencion>
      ${item.Retencion.IndicadorAgenteRetencionoPercepcion ? `<IndicadorAgenteRetencionoPercepcion>${item.Retencion.IndicadorAgenteRetencionoPercepcion}</IndicadorAgenteRetencionoPercepcion>` : ''}
      ${item.Retencion.MontoITBISRetenido ? `<MontoITBISRetenido>${item.Retencion.MontoITBISRetenido}</MontoITBISRetenido>` : ''}
      ${item.Retencion.MontoISRRetenido ? `<MontoISRRetenido>${item.Retencion.MontoISRRetenido}</MontoISRRetenido>` : ''}
    </Retencion>` : ''}

    ${item.NombreItem ? `<NombreItem>${item.NombreItem}</NombreItem>` : ''}
    ${item.IndicadorBienoServicio ? `<IndicadorBienoServicio>${item.IndicadorBienoServicio}</IndicadorBienoServicio>` : ''}
    ${item.DescripcionItem ? `<DescripcionItem>${item.DescripcionItem}</DescripcionItem>` : ''}
    ${item.CantidadItem ? `<CantidadItem>${item.CantidadItem}</CantidadItem>` : ''}
    ${item.UnidadMedida ? `<UnidadMedida>${item.UnidadMedida}</UnidadMedida>` : ''}
    ${item.CantidadReferencia ? `<CantidadReferencia>${item.CantidadReferencia}</CantidadReferencia>` : ''}
    ${item.UnidadReferencia ? `<UnidadReferencia>${item.UnidadReferencia}</UnidadReferencia>` : ''}

    ${item.TablaSubcantidad ? `
    <TablaSubcantidad>
      ${item.TablaSubcantidad.map(s => `
      <SubcantidadItem>
        <Subcantidad>${s.Subcantidad}</Subcantidad>
        <CodigoSubcantidad>${s.CodigoSubcantidad}</CodigoSubcantidad>
      </SubcantidadItem>`).join('')}
    </TablaSubcantidad>` : ''}

    ${item.GradosAlcohol ? `<GradosAlcohol>${item.GradosAlcohol}</GradosAlcohol>` : ''}
    ${item.PrecioUnitarioReferencia ? `<PrecioUnitarioReferencia>${item.PrecioUnitarioReferencia}</PrecioUnitarioReferencia>` : ''}
    ${item.FechaElaboracion ? `<FechaElaboracion>${item.FechaElaboracion}</FechaElaboracion>` : ''}
    ${item.FechaVencimientoItem ? `<FechaVencimientoItem>${item.FechaVencimientoItem}</FechaVencimientoItem>` : ''}
    ${item.PrecioUnitarioItem ? `<PrecioUnitarioItem>${item.PrecioUnitarioItem}</PrecioUnitarioItem>` : ''}
    ${item.DescuentoMonto ? `<DescuentoMonto>${item.DescuentoMonto}</DescuentoMonto>` : ''}

    ${item.TablaSubDescuento ? `
    <TablaSubDescuento>
      ${item.TablaSubDescuento.map(d => `
      <SubDescuento>
        <TipoSubDescuento>${d.TipoSubDescuento}</TipoSubDescuento>
        <SubDescuentoPorcentaje>${d.SubDescuentoPorcentaje}</SubDescuentoPorcentaje>
        <MontoSubDescuento>${d.MontoSubDescuento}</MontoSubDescuento>
      </SubDescuento>`).join('')}
    </TablaSubDescuento>` : ''}

    ${item.RecargoMonto ? `<RecargoMonto>${item.RecargoMonto}</RecargoMonto>` : ''}

    ${item.TablaSubRecargo ? `
    <TablaSubRecargo>
      ${item.TablaSubRecargo.map(r => `
      <SubRecargo>
        <TipoSubRecargo>${r.TipoSubRecargo}</TipoSubRecargo>
        <SubRecargoPorcentaje>${r.SubRecargoPorcentaje}</SubRecargoPorcentaje>
        <MontoSubRecargo>${r.MontoSubRecargo}</MontoSubRecargo>
      </SubRecargo>`).join('')}
    </TablaSubRecargo>` : ''}

    ${item.TablaImpuestoAdicional ? `
    <TablaImpuestoAdicional>
      ${item.TablaImpuestoAdicional.map(i => `
      <ImpuestoAdicional>
        <TipoImpuesto>${i.TipoImpuesto}</TipoImpuesto>
      </ImpuestoAdicional>`).join('')}
    </TablaImpuestoAdicional>` : ''}

    ${item.OtraMonedaDetalle ? `
    <OtraMonedaDetalle>
      ${Object.entries(item.OtraMonedaDetalle).map(([k,v]) => `<${k}>${v}</${k}>`).join('')}
    </OtraMonedaDetalle>` : ''}

    ${item.MontoItem ? `<MontoItem>${item.MontoItem}</MontoItem>` : ''}
  </Item>`).join('')}
</DetallesItems>`;
}


// Función para crear un solo Subtotal con IFs
function crearSubtotal(subtotal) {
  let xml = "<Subtotal>";

  if (subtotal.NumeroSubTotal) xml += `<NumeroSubTotal>${subtotal.NumeroSubTotal}</NumeroSubTotal>`;
  if (subtotal.DescripcionSubtotal) xml += `<DescripcionSubtotal>${subtotal.DescripcionSubtotal}</DescripcionSubtotal>`;
  if (subtotal.Orden) xml += `<Orden>${subtotal.Orden}</Orden>`;
  if (subtotal.SubTotalMontoGravadoTotal) xml += `<SubTotalMontoGravadoTotal>${subtotal.SubTotalMontoGravadoTotal}</SubTotalMontoGravadoTotal>`;
  if (subtotal.SubTotalMontoGravadoI1) xml += `<SubTotalMontoGravadoI1>${subtotal.SubTotalMontoGravadoI1}</SubTotalMontoGravadoI1>`;
  if (subtotal.SubTotalMontoGravadoI2) xml += `<SubTotalMontoGravadoI2>${subtotal.SubTotalMontoGravadoI2}</SubTotalMontoGravadoI2>`;
  if (subtotal.SubTotalMontoGravadoI3) xml += `<SubTotalMontoGravadoI3>${subtotal.SubTotalMontoGravadoI3}</SubTotalMontoGravadoI3>`;
  if (subtotal.SubTotaITBIS) xml += `<SubTotaITBIS>${subtotal.SubTotaITBIS}</SubTotaITBIS>`;
  if (subtotal.SubTotaITBIS1) xml += `<SubTotaITBIS1>${subtotal.SubTotaITBIS1}</SubTotaITBIS1>`;
  if (subtotal.SubTotaITBIS2) xml += `<SubTotaITBIS2>${subtotal.SubTotaITBIS2}</SubTotaITBIS2>`;
  if (subtotal.SubTotaITBIS3) xml += `<SubTotaITBIS3>${subtotal.SubTotaITBIS3}</SubTotaITBIS3>`;
  if (subtotal.SubTotalImpuestoAdicional) xml += `<SubTotalImpuestoAdicional>${subtotal.SubTotalImpuestoAdicional}</SubTotalImpuestoAdicional>`;
  if (subtotal.SubTotalExento) xml += `<SubTotalExento>${subtotal.SubTotalExento}</SubTotalExento>`;
  if (subtotal.MontoSubTotal) xml += `<MontoSubTotal>${subtotal.MontoSubTotal}</MontoSubTotal>`;
  if (subtotal.Lineas) xml += `<Lineas>${subtotal.Lineas}</Lineas>`;

  xml += "</Subtotal>";
  return xml;
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
  let xml = "<DescuentoORecargo>";

  if (desc.NumeroLinea !== undefined && desc.NumeroLinea !== null)
    xml += `<NumeroLinea>${desc.NumeroLinea}</NumeroLinea>`;

  if (desc.TipoAjuste)
    xml += `<TipoAjuste>${desc.TipoAjuste}</TipoAjuste>`;

  if (desc.IndicadorNorma1007 !== undefined && desc.IndicadorNorma1007 !== null)
    xml += `<IndicadorNorma1007>${desc.IndicadorNorma1007}</IndicadorNorma1007>`;

  if (desc.DescripcionDescuentooRecargo)
    xml += `<DescripcionDescuentooRecargo>${desc.DescripcionDescuentooRecargo}</DescripcionDescuentooRecargo>`;

  if (desc.TipoValor)
    xml += `<TipoValor>${desc.TipoValor}</TipoValor>`;

  if (desc.ValorDescuentooRecargo !== undefined && desc.ValorDescuentooRecargo !== null)
    xml += `<ValorDescuentooRecargo>${desc.ValorDescuentooRecargo}</ValorDescuentooRecargo>`;

  if (desc.MontoDescuentooRecargo !== undefined && desc.MontoDescuentooRecargo !== null)
    xml += `<MontoDescuentooRecargo>${desc.MontoDescuentooRecargo}</MontoDescuentooRecargo>`;

  if (desc.MontoDescuentooRecargoOtraMoneda !== undefined && desc.MontoDescuentooRecargoOtraMoneda !== null)
    xml += `<MontoDescuentooRecargoOtraMoneda>${desc.MontoDescuentooRecargoOtraMoneda}</MontoDescuentooRecargoOtraMoneda>`;

  if (desc.IndicadorFacturacionDescuentooRecargo !== undefined && desc.IndicadorFacturacionDescuentooRecargo !== null)
    xml += `<IndicadorFacturacionDescuentooRecargo>${desc.IndicadorFacturacionDescuentooRecargo}</IndicadorFacturacionDescuentooRecargo>`;

  xml += "</DescuentoORecargo>";
  return xml;
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
  let xml = "<Pagina>";

  if (pagina.PaginaNo !== undefined && pagina.PaginaNo !== null)
    xml += `<PaginaNo>${pagina.PaginaNo}</PaginaNo>`;

  if (pagina.NoLineaDesde !== undefined && pagina.NoLineaDesde !== null)
    xml += `<NoLineaDesde>${pagina.NoLineaDesde}</NoLineaDesde>`;

  if (pagina.NoLineaHasta !== undefined && pagina.NoLineaHasta !== null)
    xml += `<NoLineaHasta>${pagina.NoLineaHasta}</NoLineaHasta>`;

  if (pagina.SubtotalMontoGravadoPagina !== undefined && pagina.SubtotalMontoGravadoPagina !== null)
    xml += `<SubtotalMontoGravadoPagina>${pagina.SubtotalMontoGravadoPagina}</SubtotalMontoGravadoPagina>`;

  if (pagina.SubtotalMontoGravado1Pagina !== undefined && pagina.SubtotalMontoGravado1Pagina !== null)
    xml += `<SubtotalMontoGravado1Pagina>${pagina.SubtotalMontoGravado1Pagina}</SubtotalMontoGravado1Pagina>`;

  if (pagina.SubtotalMontoGravado2Pagina !== undefined && pagina.SubtotalMontoGravado2Pagina !== null)
    xml += `<SubtotalMontoGravado2Pagina>${pagina.SubtotalMontoGravado2Pagina}</SubtotalMontoGravado2Pagina>`;

  if (pagina.SubtotalMontoGravado3Pagina !== undefined && pagina.SubtotalMontoGravado3Pagina !== null)
    xml += `<SubtotalMontoGravado3Pagina>${pagina.SubtotalMontoGravado3Pagina}</SubtotalMontoGravado3Pagina>`;

  if (pagina.SubtotalExentoPagina !== undefined && pagina.SubtotalExentoPagina !== null)
    xml += `<SubtotalExentoPagina>${pagina.SubtotalExentoPagina}</SubtotalExentoPagina>`;

  if (pagina.SubtotalItbisPagina !== undefined && pagina.SubtotalItbisPagina !== null)
    xml += `<SubtotalItbisPagina>${pagina.SubtotalItbisPagina}</SubtotalItbisPagina>`;

  if (pagina.SubtotalItbis1Pagina !== undefined && pagina.SubtotalItbis1Pagina !== null)
    xml += `<SubtotalItbis1Pagina>${pagina.SubtotalItbis1Pagina}</SubtotalItbis1Pagina>`;

  if (pagina.SubtotalItbis2Pagina !== undefined && pagina.SubtotalItbis2Pagina !== null)
    xml += `<SubtotalItbis2Pagina>${pagina.SubtotalItbis2Pagina}</SubtotalItbis2Pagina>`;

  if (pagina.SubtotalItbis3Pagina !== undefined && pagina.SubtotalItbis3Pagina !== null)
    xml += `<SubtotalItbis3Pagina>${pagina.SubtotalItbis3Pagina}</SubtotalItbis3Pagina>`;

  if (pagina.SubtotalImpuestoAdicionalPagina !== undefined && pagina.SubtotalImpuestoAdicionalPagina !== null)
    xml += `<SubtotalImpuestoAdicionalPagina>${pagina.SubtotalImpuestoAdicionalPagina}</SubtotalImpuestoAdicionalPagina>`;

  // 🧩 Subnivel <SubtotalImpuestoAdicional>
  if (
    pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina !== undefined ||
    pagina.SubtotalOtrosImpuesto !== undefined
  ) {
    xml += `<SubtotalImpuestoAdicional>`;

    if (pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina !== undefined && pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina !== null)
      xml += `<SubtotalImpuestoSelectivoConsumoEspecificoPagina>${pagina.SubtotalImpuestoSelectivoConsumoEspecificoPagina}</SubtotalImpuestoSelectivoConsumoEspecificoPagina>`;

    if (pagina.SubtotalOtrosImpuesto !== undefined && pagina.SubtotalOtrosImpuesto !== null)
      xml += `<SubtotalOtrosImpuesto>${pagina.SubtotalOtrosImpuesto}</SubtotalOtrosImpuesto>`;

    xml += `</SubtotalImpuestoAdicional>`;
  }

  if (pagina.MontoSubtotalPagina !== undefined && pagina.MontoSubtotalPagina !== null)
    xml += `<MontoSubtotalPagina>${pagina.MontoSubtotalPagina}</MontoSubtotalPagina>`;

  if (pagina.SubtotalMontoNoFacturablePagina !== undefined && pagina.SubtotalMontoNoFacturablePagina !== null)
    xml += `<SubtotalMontoNoFacturablePagina>${pagina.SubtotalMontoNoFacturablePagina}</SubtotalMontoNoFacturablePagina>`;

  xml += "</Pagina>";
  return xml;
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
  let xml = `<InformacionReferencia>\n`;

  if (info.NCFModificado) 
    xml += `  <NCFModificado>${info.NCFModificado}</NCFModificado>\n`;
  if (info.RNCOtroContribuyente) 
    xml += `  <RNCOtroContribuyente>${info.RNCOtroContribuyente}</RNCOtroContribuyente>\n`;
  if (info.FechaNCFModificado) 
    xml += `  <FechaNCFModificado>${info.FechaNCFModificado}</FechaNCFModificado>\n`;
  if (info.CodigoModificacion) 
    xml += `  <CodigoModificacion>${info.CodigoModificacion}</CodigoModificacion>\n`;

  xml += `</InformacionReferencia>`;
  return xml;
}



function crearFirma(info) {
  return `
<FechaHoraFirma>${info.FechaHoraFirma}</FechaHoraFirma>
<any_element>${info.any_element}</any_element>`;
}



// Función principal que arma todo el XML
function crearFactura(datosFactura) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<ECF>\n`;

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


// module.exports = { crearFactura };