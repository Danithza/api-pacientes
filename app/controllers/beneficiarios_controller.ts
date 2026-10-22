import type { HttpContext } from '@adonisjs/core/http'
import Beneficiario from '#models/beneficiarios'

export default class BeneficiariosController {
  public async index({ response }: HttpContext) {
    const beneficiarios = await Beneficiario.obtenerTodos()
    return response.ok(beneficiarios)
  }

  public async show({ params, response }: HttpContext) {
    const beneficiario = await Beneficiario.obtenerPorId(params.id)
    if (!beneficiario) return response.notFound({ message: 'Beneficiario no encontrado' })
    return response.ok(beneficiario)
  }

public async store({ request, response }: HttpContext) {
  const datos = request.only([
    'pacienteId',
    'tipoDocumento',
    'numeroDocumento',
    'nombre',
    'apellido',
    'fechaNacimiento',
    'parentesco',
  ])

  if (!datos.pacienteId) {
    return response.badRequest({
      message: 'El campo pacienteId es obligatorio',
    })
  }

  const nuevo = await Beneficiario.registrar(datos)
  return response.created(nuevo)
}

  public async update({ params, request, response }: HttpContext) {
    const datos = request.only([
      'tipoDocumento',
      'numeroDocumento',
      'nombre',
      'apellido',
      'fechaNacimiento',
      'parentesco'
    ])
    const actualizado = await Beneficiario.actualizar(params.id, datos)
    if (!actualizado) return response.notFound({ message: 'Beneficiario no encontrado' })
    return response.ok(actualizado)
  }

  public async destroy({ params, response }: HttpContext) {
    const eliminado = await Beneficiario.eliminar(params.id)
    if (!eliminado) return response.notFound({ message: 'Beneficiario no encontrado' })
    return response.ok({ message: 'Beneficiario eliminado correctamente' })
  }
}
