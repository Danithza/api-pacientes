import type { HttpContext } from '@adonisjs/core/http'
import Pago from '#models/pago'

export default class PagosController {
  public async index({ response }: HttpContext) {
    const pagos = await Pago.obtenerTodos()
    return response.ok(pagos)
  }

  public async store({ request, response }: HttpContext) {
    try {
      const datos = request.only([
        'facturaId',
        'valor',
        'metodoPago',
        'referenciaPago',
        'estado'
      ])

      const nuevoPago = await Pago.registrar(datos)
      return response.created(nuevoPago)
    } catch (error: any) {
      return response.status(400).json({
        message: 'Error al registrar el pago',
        error: error.message
      })
    }
  }
}
