import type { HttpContext } from '@adonisjs/core/http'
import ResultadoExamen from '#models/resultado_examen'

export default class ResultadosExamenesController {
  // GET /api/v1/examenes
  public async index({ response }: HttpContext) {
    const examenes = await ResultadoExamen.obtenerTodos()
    return response.ok(examenes)
  }

  // GET /api/v1/examenes/:id
  public async show({ params, response }: HttpContext) {
    const examen = await ResultadoExamen.obtenerPorId(params.id)
    if (!examen) {
      return response.notFound({ message: 'Examen no encontrado' })
    }
    return response.ok(examen)
  }

  // POST /api/v1/examenes
  public async store({ request, response }: HttpContext) {
    try {
      const datos = request.only([
        'examenId',
        'resultado',
        'observaciones',
        'fechaResultado',
        'archivoUrl',
        'tipoArchivo'
      ])

      const nuevoExamen = await ResultadoExamen.registrar(datos)
      return response.created(nuevoExamen)
    } catch (error: any) {
      return response.status(400).json({
        message: 'Error al registrar examen',
        error: error.message
      })
    }
  }
}
