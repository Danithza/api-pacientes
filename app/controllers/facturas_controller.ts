import type { HttpContext } from '@adonisjs/core/http'
import Factura from '#models/factura'

export default class FacturasController {
  public async index({ response }: HttpContext) {
    const facturas = await Factura.obtenerTodas()
    return response.ok(facturas)
  }

  public async show({ params, response }: HttpContext) {
    const factura = await Factura.obtenerPorId(params.id)
    if (!factura) return response.notFound({ message: 'Factura no encontrada' })
    return response.ok(factura)
  }

  public async store({ request, response }: HttpContext) {
    try {
      const datos = request.only([
        'pacienteId',
        'numeroFactura',
        'fechaVencimiento',
        'subtotal',
        'impuestos',
        'descuento',
        'total',
        'estado'
      ])

      const nuevaFactura = await Factura.generar(datos)
      return response.created(nuevaFactura)
    } catch (error: any) {
      return response.status(400).json({
        status: 'error',
        message: 'No se pudo crear la factura',
        error: error.message
      })
    }
  }

  public async update({ params, request, response }: HttpContext) {
    const datos = request.only(['estado', 'fechaVencimiento'])
    const actualizada = await Factura.actualizarEstado(params.id, datos)
    if (!actualizada) return response.notFound({ message: 'Factura no encontrada' })
    return response.ok(actualizada)
  }
}
