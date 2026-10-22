import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Beneficiario extends BaseModel {
  public static table = 'beneficiarios'

  @column({ isPrimary: true, columnName: 'id_beneficiario' })
  declare idBeneficiario: number

  @column({ columnName: 'paciente_titular_id' })
  declare pacienteTitularId: number

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
  declare parentesco: string

  @column.dateTime({ autoCreate: true, columnName: 'fecha_registro' })
  declare fechaRegistro: DateTime

  // --- Métodos del Modelo ---
  public static async obtenerTodos() {
    return await this.all()
  }

  public static async obtenerPorId(id: number) {
    return await this.find(id)
  }

public static async obtenerPorPaciente(pacienteId: number) {
  return await this.query().where('paciente_titular_id', pacienteId)
}

public static async registrar(datos: Record<string, any>) {
  const { pacienteId, ...resto } = datos

  return await this.create({
    ...resto,
    pacienteTitularId: pacienteId,
  })
}

  public static async actualizar(id: number, datos: Record<string, any>) {
    const registro = await this.find(id)
    if (!registro) return null
    registro.merge(datos)
    await registro.save()
    return registro
  }

  public static async eliminar(id: number) {
    const registro = await this.find(id)
    if (!registro) return false
    await registro.delete()
    return true
  }
}
