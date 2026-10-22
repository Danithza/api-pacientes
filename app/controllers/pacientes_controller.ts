import type { HttpContext } from '@adonisjs/core/http'
import Paciente from '#models/paciente'

export default class PacientesController {
  // GET /api/pacientes
  public async index({ response }: HttpContext) {
    const pacientes = await Paciente.obtenerTodos()
    return response.ok(pacientes)
  }

  // GET /api/pacientes/:id
  public async show({ params, response }: HttpContext) {
    const paciente = await Paciente.obtenerPorId(params.id)
    if (!paciente) {
      return response.notFound({ message: 'Paciente no encontrado' })
    }
    return response.ok(paciente)
  }

  // POST /api/pacientes
  public async store({ request, response }: HttpContext) {
    const datos = request.only([
      'tipoDocumento',
      'numeroDocumento',
      'nombre',
      'apellido',
      'fechaNacimiento',
      'telefono',
      'correo',
      'direccion',
      'passwordHash'
    ])

    const nuevoPaciente = await Paciente.registrarPaciente(datos)
    return response.created(nuevoPaciente)
  }
}
