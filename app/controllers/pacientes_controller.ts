import type { HttpContext } from '@adonisjs/core/http'
import Paciente from '#models/paciente'

export default class PacientesController {
  // GET /api/v1/pacientes
  public async index({ response }: HttpContext) {
    const pacientes = await Paciente.obtenerTodos()
    return response.ok(pacientes)
  }

  // GET /api/v1/pacientes/:id (BUSCAR POR ID)
  public async show({ params, response }: HttpContext) {
    const paciente = await Paciente.obtenerPorId(params.id)
    if (!paciente) {
      return response.notFound({ message: 'Paciente no encontrado' })
    }
    return response.ok(paciente)
  }

  // POST /api/v1/pacientes (CREAR)
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
      'passwordHash',
      'estado'
    ])

    const nuevoPaciente = await Paciente.registrarPaciente(datos)
    return response.created(nuevoPaciente)
  }

  // PUT /api/v1/pacientes/:id (EDITAR)
  public async update({ params, request, response }: HttpContext) {
    const datos = request.only([
      'tipoDocumento',
      'numeroDocumento',
      'nombre',
      'apellido',
      'fechaNacimiento',
      'telefono',
      'correo',
      'direccion',
      'passwordHash',
      'estado'
    ])

    const pacienteActualizado = await Paciente.actualizarPaciente(params.id, datos)
    if (!pacienteActualizado) {
      return response.notFound({ message: 'Paciente no encontrado para actualizar' })
    }

    return response.ok(pacienteActualizado)
  }

  // DELETE /api/v1/pacientes/:id (ELIMINAR)
  public async destroy({ params, response }: HttpContext) {
    const eliminado = await Paciente.eliminarPaciente(params.id)
    if (!eliminado) {
      return response.notFound({ message: 'Paciente no encontrado para eliminar' })
    }

    return response.ok({ message: 'Paciente eliminado correctamente' })
  }
}
