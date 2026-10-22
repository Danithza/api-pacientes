import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'pacientes.index': { paramsTuple?: []; params?: {} }
    'pacientes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pacientes.store': { paramsTuple?: []; params?: {} }
    'pacientes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pacientes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'beneficiarios.index': { paramsTuple?: []; params?: {} }
    'beneficiarios.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'beneficiarios.store': { paramsTuple?: []; params?: {} }
    'beneficiarios.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'beneficiarios.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'citas.index': { paramsTuple?: []; params?: {} }
    'citas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'citas.store': { paramsTuple?: []; params?: {} }
    'citas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'citas.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'facturas.index': { paramsTuple?: []; params?: {} }
    'facturas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'facturas.store': { paramsTuple?: []; params?: {} }
    'facturas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'resultados_examenes.index': { paramsTuple?: []; params?: {} }
    'resultados_examenes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'resultados_examenes.store': { paramsTuple?: []; params?: {} }
    'pagos.index': { paramsTuple?: []; params?: {} }
    'pagos.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'pacientes.index': { paramsTuple?: []; params?: {} }
    'pacientes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'beneficiarios.index': { paramsTuple?: []; params?: {} }
    'beneficiarios.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'citas.index': { paramsTuple?: []; params?: {} }
    'citas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'facturas.index': { paramsTuple?: []; params?: {} }
    'facturas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'resultados_examenes.index': { paramsTuple?: []; params?: {} }
    'resultados_examenes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pagos.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'pacientes.index': { paramsTuple?: []; params?: {} }
    'pacientes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'beneficiarios.index': { paramsTuple?: []; params?: {} }
    'beneficiarios.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'citas.index': { paramsTuple?: []; params?: {} }
    'citas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'facturas.index': { paramsTuple?: []; params?: {} }
    'facturas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'resultados_examenes.index': { paramsTuple?: []; params?: {} }
    'resultados_examenes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pagos.index': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'pacientes.store': { paramsTuple?: []; params?: {} }
    'beneficiarios.store': { paramsTuple?: []; params?: {} }
    'citas.store': { paramsTuple?: []; params?: {} }
    'facturas.store': { paramsTuple?: []; params?: {} }
    'resultados_examenes.store': { paramsTuple?: []; params?: {} }
    'pagos.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'pacientes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'beneficiarios.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'citas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'facturas.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'pacientes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'beneficiarios.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'citas.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}