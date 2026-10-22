import type { HttpContext } from '@adonisjs/core/http'
import Examen from '#models/examenes'

export default class ExamenesController {
  public async index({ response }: HttpContext) {
    const examenes = await Examen.obtenerTodos()
    return response.ok(examenes)
  }

  public async show({ params, response }: HttpContext) {
    const examen = await Examen.obtenerPorId(params.id)
    if (!examen) return response.notFound({ message: 'Examen no encontrado' })
    return response.ok(examen)
  }

  public async store({ request, response }: HttpContext) {
    try {
      const datos = request.only([
        'pacienteId',
        'tipoExamen',
        'nombreExamen',
        'fechaSolicitud',
        'fechaRealizacion',
        'estado',
        'consultaIdExterna',
        'observaciones'
      ])
      const nuevo = await Examen.registrar(datos)
      return response.created(nuevo)
    } catch (error: any) {
      return response.status(400).json({ message: 'Error al registrar examen', error: error.message })
    }
  }
}
