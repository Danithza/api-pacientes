import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ResultadoExamen extends BaseModel {
  public static table = 'resultados_examenes'

  @column({ isPrimary: true, columnName: 'id_resultado' })
  declare idResultado: number

  @column({ columnName: 'examen_id' })
  declare examenId: number

  @column()
  declare resultado: string

  @column()
  declare observaciones: string

  @column.dateTime({ columnName: 'fecha_resultado' })
  declare fechaResultado: DateTime

  @column({ columnName: 'archivo_url' })
  declare archivoUrl: string

  @column({ columnName: 'tipo_archivo' })
  declare tipoArchivo: string

  // --- MÉTODOS Y LÓGICA DE DATOS ---

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
