import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Solicitud extends BaseModel {
  public static table = 'solicitudes'

  @column({ isPrimary: true, columnName: 'id_solicitud' })
  declare idSolicitud: number

  @column({ columnName: 'paciente_id' })
  declare pacienteId: number

  @column({ columnName: 'tipo_solicitud' })
  declare tipoSolicitud: string

  @column()
  declare asunto: string

  @column()
  declare descripcion: string

  @column.dateTime({ autoCreate: true, columnName: 'fecha_creacion' })
  declare fechaCreacion: DateTime

  @column()
  declare estado: string

  @column()
  declare respuesta: string

  @column({ columnName: 'fecha_respuesta' })
  declare fechaRespuesta: string

  // --- Métodos del Modelo ---
  public static async obtenerTodas() {
    return await this.all()
  }

  public static async obtenerPorId(id: number) {
    return await this.find(id)
  }

  public static async registrar(datos: Record<string, any>) {
    return await this.create(datos)
  }
}
