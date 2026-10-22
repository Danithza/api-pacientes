import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Factura extends BaseModel {
  public static table = 'facturas'

  @column({ isPrimary: true, columnName: 'id_factura' })
  declare idFactura: number

  @column({ columnName: 'paciente_id' })
  declare pacienteId: number

  @column({ columnName: 'numero_factura' })
  declare numeroFactura: string

  @column.dateTime({ autoCreate: true, columnName: 'fecha_emision' })
  declare fechaEmision: DateTime

  @column({ columnName: 'fecha_vencimiento' })
  declare fechaVencimiento: string

  @column()
  declare subtotal: number

  @column()
  declare impuestos: number

  @column()
  declare descuento: number

  @column()
  declare total: number

  @column()
  declare estado: string

  // --- Métodos del Modelo ---
  public static async obtenerTodas() {
    return await this.all()
  }

  public static async obtenerPorId(id: number) {
    return await this.find(id)
  }

  public static async generar(datos: Record<string, any>) {
    return await this.create(datos)
  }

  public static async actualizarEstado(id: number, datos: Record<string, any>) {
    const factura = await this.find(id)
    if (!factura) return null
    factura.merge(datos)
    await factura.save()
    return factura
  }
}
