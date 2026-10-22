import type { HttpContext } from '@adonisjs/core/http'
import Solicitud from '#models/solicitud'

export default class SolicitudesController {
  public async index({ response }: HttpContext) {
    const solicitudes = await Solicitud.obtenerTodas()
    return response.ok(solicitudes)
  }

  public async show({ params, response }: HttpContext) {
    const solicitud = await Solicitud.obtenerPorId(params.id)
    if (!solicitud) return response.notFound({ message: 'Solicitud no encontrada' })
    return response.ok(solicitud)
  }

  public async store({ request, response }: HttpContext) {
    try {
      const datos = request.only([
        'pacienteId',
        'tipoSolicitud',
        'asunto',
        'descripcion',
        'estado',
        'respuesta',
        'fechaRespuesta'
      ])
      const nueva = await Solicitud.registrar(datos)
      return response.created(nueva)
    } catch (error: any) {
      return response.status(400).json({ message: 'Error al registrar solicitud', error: error.message })
    }
  }
}
