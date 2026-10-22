import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Notificacion extends BaseModel {
  public static table = 'notificaciones'

  @column({ isPrimary: true, columnName: 'id_notificacion' })
  declare idNotificacion: number

  @column({ columnName: 'paciente_id' })
  declare pacienteId: number

  @column()
  declare titulo: string

  @column()
  declare mensaje: string

  @column()
  declare tipo: string

  @column.dateTime({ autoCreate: true, columnName: 'fecha_envio' })
  declare fechaEnvio: DateTime

  @column()
  declare leida: boolean

  @column({ columnName: 'fecha_lectura' })
  declare fechaLectura: string

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
