import type { HttpContext } from '@adonisjs/core/http'
import Cita from '#models/cita'

export default class CitasController {
  public async index({ response }: HttpContext) {
    const citas = await Cita.obtenerTodas()
    return response.ok(citas)
  }

  public async show({ params, response }: HttpContext) {
    const cita = await Cita.obtenerPorId(params.id)
    if (!cita) return response.notFound({ message: 'Cita no encontrada' })
    return response.ok(cita)
  }

  public async store({ request, response }: HttpContext) {
    const datos = request.only([
      'pacienteId',
      'beneficiarioId',
      'medicoIdExterno',
      'especialidadIdExterna',
      'sedeIdExterna',
      'fechaCita',
      'horaCita',
      'motivo',
      'estado',
      'observaciones'
    ])
    const nuevaCita = await Cita.agendar(datos)
    return response.created(nuevaCita)
  }

  public async update({ params, request, response }: HttpContext) {
    const datos = request.only([
      'fechaCita',
      'horaCita',
      'motivo',
      'estado',
      'observaciones'
    ])
    const actualizada = await Cita.actualizar(params.id, datos)
    if (!actualizada) return response.notFound({ message: 'Cita no encontrada' })
    return response.ok(actualizada)
  }

  public async destroy({ params, response }: HttpContext) {
    const cancelada = await Cita.cancelar(params.id)
    if (!cancelada) return response.notFound({ message: 'Cita no encontrada' })
    return response.ok({ message: 'Cita cancelada correctamente', cita: cancelada })
  }
}
