import type { HttpContext } from '@adonisjs/core/http'
import Notificacion from '#models/notificacion'

export default class NotificacionesController {
  public async index({ response }: HttpContext) {
    const notificaciones = await Notificacion.obtenerTodas()
    return response.ok(notificaciones)
  }

  public async show({ params, response }: HttpContext) {
    const notificacion = await Notificacion.obtenerPorId(params.id)
    if (!notificacion) return response.notFound({ message: 'Notificación no encontrada' })
    return response.ok(notificacion)
  }

  public async store({ request, response }: HttpContext) {
    try {
      const datos = request.only([
        'pacienteId',
        'titulo',
        'mensaje',
        'tipo',
        'leida',
        'fechaLectura'
      ])
      const nueva = await Notificacion.registrar(datos)
      return response.created(nueva)
    } catch (error: any) {
      return response.status(400).json({ message: 'Error al crear notificación', error: error.message })
    }
  }
}
