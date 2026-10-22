import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cita extends BaseModel {
  public static table = 'citas'

  @column({ isPrimary: true, columnName: 'id_cita' })
  declare idCita: number

  @column({ columnName: 'paciente_id' })
  declare pacienteId: number

  @column({ columnName: 'beneficiario_id' })
  declare beneficiarioId: number

  @column({ columnName: 'medico_id_externo' })
  declare medicoIdExterno: number

  @column({ columnName: 'especialidad_id_externa' })
  declare especialidadIdExterna: number

  @column({ columnName: 'sede_id_externa' })
  declare sedeIdExterna: number

  @column({ columnName: 'fecha_cita' })
  declare fechaCita: string

  @column({ columnName: 'hora_cita' })
  declare horaCita: string

  @column()
  declare motivo: string

  @column()
  declare estado: string

  @column.dateTime({ autoCreate: true, columnName: 'fecha_solicitud' })
  declare fechaSolicitud: DateTime

  @column()
  declare observaciones: string

  // --- Métodos del Modelo ---
  public static async obtenerTodas() {
    return await this.all()
  }

  public static async obtenerPorId(id: number) {
    return await this.find(id)
  }

  public static async agendar(datos: Record<string, any>) {
    return await this.create(datos)
  }

  public static async actualizar(id: number, datos: Record<string, any>) {
    const cita = await this.find(id)
    if (!cita) return null
    cita.merge(datos)
    await cita.save()
    return cita
  }

  public static async cancelar(id: number) {
    const cita = await this.find(id)
    if (!cita) return null
    cita.estado = 'CANCELADA'
    await cita.save()
    return cita
  }
}
