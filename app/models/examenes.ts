import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Examen extends BaseModel {
  public static table = 'examenes'

  @column({ isPrimary: true, columnName: 'id_examen' })
  declare idExamen: number

  @column({ columnName: 'paciente_id' })
  declare pacienteId: number

  @column({ columnName: 'tipo_examen' })
  declare tipoExamen: string

  @column({ columnName: 'nombre_examen' })
  declare nombreExamen: string

  @column({ columnName: 'fecha_solicitud' })
  declare fechaSolicitud: string

  @column({ columnName: 'fecha_realizacion' })
  declare fechaRealizacion: string

  @column()
  declare estado: string

  @column({ columnName: 'consulta_id_externa' })
  declare consultaIdExterna: number

  @column()
  declare observaciones: string

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
