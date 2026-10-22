
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class DocumentoMedico extends BaseModel {
  public static table = 'documentos_medicos'

  @column({ isPrimary: true, columnName: 'id_documento' })
  declare idDocumento: number

  @column({ columnName: 'paciente_id' })
  declare pacienteId: number

  @column({ columnName: 'tipo_documento' })
  declare tipoDocumento: string

  @column({ columnName: 'nombre_documento' })
  declare nombreDocumento: string

  @column()
  declare descripcion: string

  @column({ columnName: 'archivo_url' })
  declare archivoUrl: string

  @column({ columnName: 'fecha_documento' })
  declare fechaDocumento: string

  @column({ columnName: 'consulta_id_externa' })
  declare consultaIdExterna: number

  @column()
  declare estado: string

  // --- Métodos del Modelo ---
  public static async obtenerTodos() {
    return await this.all()
  }

  public static async obtenerPorId(id: number) {
    return await this.find(id)
  }

  public static async registrar(datos: Record<string, any>) {
    return await this.create(datos)
  }
}
