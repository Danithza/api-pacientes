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
    'documentos_medicos.index': { paramsTuple?: []; params?: {} }
    'documentos_medicos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'documentos_medicos.store': { paramsTuple?: []; params?: {} }
    'examenes.index': { paramsTuple?: []; params?: {} }
    'examenes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'examenes.store': { paramsTuple?: []; params?: {} }
    'notificaciones.index': { paramsTuple?: []; params?: {} }
    'notificaciones.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'notificaciones.store': { paramsTuple?: []; params?: {} }
    'solicitudes.index': { paramsTuple?: []; params?: {} }
    'solicitudes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'solicitudes.store': { paramsTuple?: []; params?: {} }
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
    'documentos_medicos.index': { paramsTuple?: []; params?: {} }
    'documentos_medicos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'examenes.index': { paramsTuple?: []; params?: {} }
    'examenes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'notificaciones.index': { paramsTuple?: []; params?: {} }
    'notificaciones.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'solicitudes.index': { paramsTuple?: []; params?: {} }
    'solicitudes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
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
    'documentos_medicos.index': { paramsTuple?: []; params?: {} }
    'documentos_medicos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'examenes.index': { paramsTuple?: []; params?: {} }
    'examenes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'notificaciones.index': { paramsTuple?: []; params?: {} }
    'notificaciones.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'solicitudes.index': { paramsTuple?: []; params?: {} }
    'solicitudes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'pacientes.store': { paramsTuple?: []; params?: {} }
    'beneficiarios.store': { paramsTuple?: []; params?: {} }
    'citas.store': { paramsTuple?: []; params?: {} }
    'facturas.store': { paramsTuple?: []; params?: {} }
    'resultados_examenes.store': { paramsTuple?: []; params?: {} }
    'pagos.store': { paramsTuple?: []; params?: {} }
    'documentos_medicos.store': { paramsTuple?: []; params?: {} }
    'examenes.store': { paramsTuple?: []; params?: {} }
    'notificaciones.store': { paramsTuple?: []; params?: {} }
    'solicitudes.store': { paramsTuple?: []; params?: {} }
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