import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'pacientes.index': { paramsTuple?: []; params?: {} }
    'pacientes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pacientes.store': { paramsTuple?: []; params?: {} }
    'pacientes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'pacientes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'pacientes.index': { paramsTuple?: []; params?: {} }
    'pacientes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'pacientes.index': { paramsTuple?: []; params?: {} }
    'pacientes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'pacientes.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'pacientes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'pacientes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}