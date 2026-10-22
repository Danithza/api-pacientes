import type { HttpContext } from '@adonisjs/core/http'
import DocumentoMedico from '#models/documento_medico'

export default class DocumentosMedicosController {
  public async index({ response }: HttpContext) {
    const documentos = await DocumentoMedico.obtenerTodos()
    return response.ok(documentos)
  }

  public async show({ params, response }: HttpContext) {
    const documento = await DocumentoMedico.obtenerPorId(params.id)
    if (!documento) return response.notFound({ message: 'Documento no encontrado' })
    return response.ok(documento)
  }

  public async store({ request, response }: HttpContext) {
    try {
      const datos = request.only([
        'pacienteId',
        'tipoDocumento',
        'nombreDocumento',
        'descripcion',
        'archivoUrl',
        'fechaDocumento',
        'consultaIdExterna',
        'estado'
      ])
      const nuevo = await DocumentoMedico.registrar(datos)
      return response.created(nuevo)
    } catch (error: any) {
      return response.status(400).json({ message: 'Error al registrar documento médico', error: error.message })
    }
  }
}
