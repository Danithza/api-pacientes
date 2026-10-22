import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pago extends BaseModel {
  public static table = 'pagos'

  @column({ isPrimary: true, columnName: 'id_pago' })
  declare idPago: number

  @column({ columnName: 'factura_id' })
  declare facturaId: number

  @column.dateTime({ autoCreate: true, columnName: 'fecha_pago' })
  declare fechaPago: DateTime

  @column()
  declare valor: number

  @column({ columnName: 'metodo_pago' })
  declare metodoPago: string

  @column({ columnName: 'referencia_pago' })
  declare referenciaPago: string

  @column()
  declare estado: string

  // --- Métodos del Modelo ---
  public static async obtenerTodos() {
    return await this.all()
  }

  public static async registrar(datos: Record<string, any>) {
    return await this.create(datos)
  }
}
