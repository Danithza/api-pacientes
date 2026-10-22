import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Paciente extends BaseModel {
  public static table = 'usuarios_pacientes'

  @column({ isPrimary: true, columnName: 'id_paciente' })
  declare idPaciente: number

  @column({ columnName: 'tipo_documento' })
  declare tipoDocumento: string

  @column({ columnName: 'numero_documento' })
  declare numeroDocumento: string

  @column()
  declare nombre: string

  @column()
  declare apellido: string

  @column({ columnName: 'fecha_nacimiento' })
  declare fechaNacimiento: string

  @column()
  declare telefono: string

  @column()
  declare correo: string

  @column()
  declare direccion: string

  @column({ columnName: 'password_hash' })
  declare passwordHash: string

  @column()
  declare estado: string

  @column.dateTime({ autoCreate: true, columnName: 'fecha_registro' })
  declare fechaRegistro: DateTime

  // --- MÉTODOS DEL MODELO ---

  public static async obtenerTodos() {
    return await this.all()
  }

  public static async obtenerPorId(id: number) {
    return await this.find(id)
  }

  public static async registrarPaciente(datos: Record<string, any>) {
    return await this.create(datos)
  }

  public static async actualizarPaciente(id: number, datos: Record<string, any>) {
    const paciente = await this.find(id)
    if (!paciente) return null

    paciente.merge(datos)
    await paciente.save()
    return paciente
  }

  public static async eliminarPaciente(id: number) {
    const paciente = await this.find(id)
    if (!paciente) return false

    await paciente.delete()
    return true
  }
}
