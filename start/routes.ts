import router from '@adonisjs/core/services/router'

const PacientesController = () => import('#controllers/pacientes_controller')
const BeneficiariosController = () => import('#controllers/beneficiarios_controller')
const CitasController = () => import('#controllers/citas_controller')
const FacturasController = () => import('#controllers/facturas_controller')
const ResultadosExamenesController = () => import('#controllers/resultados_examenes_controller')
const PagosController = () => import('#controllers/pagos_controller')
const DocumentosMedicosController = () => import('#controllers/documentos_medicos_controller')
const ExamenesController = () => import('#controllers/examenes_controller')
const NotificacionesController = () => import('#controllers/notificaciones_controller')
const SolicitudesController = () => import('#controllers/solicitudes_controller')


router
  .group(() => {
    // Pacientes
    router.group(() => {
      router.get('/', [PacientesController, 'index'])
      router.get('/:id', [PacientesController, 'show'])
      router.post('/', [PacientesController, 'store'])
      router.put('/:id', [PacientesController, 'update'])
      router.delete('/:id', [PacientesController, 'destroy'])
    }).prefix('pacientes')

    // Beneficiarios
    router.group(() => {
      router.get('/', [BeneficiariosController, 'index'])
      router.get('/:id', [BeneficiariosController, 'show'])
      router.post('/', [BeneficiariosController, 'store'])
      router.put('/:id', [BeneficiariosController, 'update'])
      router.delete('/:id', [BeneficiariosController, 'destroy'])
    }).prefix('beneficiarios')

    // Citas
    router.group(() => {
      router.get('/', [CitasController, 'index'])
      router.get('/:id', [CitasController, 'show'])
      router.post('/', [CitasController, 'store'])
      router.put('/:id', [CitasController, 'update'])
      router.delete('/:id', [CitasController, 'destroy'])
    }).prefix('citas')

    // Facturas
    router.group(() => {
      router.get('/', [FacturasController, 'index'])
      router.get('/:id', [FacturasController, 'show'])
      router.post('/', [FacturasController, 'store'])
      router.put('/:id', [FacturasController, 'update'])
    }).prefix('facturas')

    // Resultados de Exámenes
    router.group(() => {
      router.get('/', [ResultadosExamenesController, 'index'])
      router.get('/:id', [ResultadosExamenesController, 'show'])
      router.post('/', [ResultadosExamenesController, 'store'])
    }).prefix('examenes')

    // Pagos
    router.group(() => {
      router.get('/', [PagosController, 'index'])
      router.post('/', [PagosController, 'store'])
    }).prefix('pagos')

    // Documentos Médicos
    router.group(() => {
      router.get('/', [DocumentosMedicosController, 'index'])
      router.get('/:id', [DocumentosMedicosController, 'show'])
      router.post('/', [DocumentosMedicosController, 'store'])
    }).prefix('documentos-medicos')

    // Exámenes
   router.group(() => {
   router.get('/', [ExamenesController, 'index'])
   router.get('/:id', [ExamenesController, 'show'])
   router.post('/', [ExamenesController, 'store'])
   }).prefix('catalogo-examenes')
   
    // Notificaciones
    router.group(() => {
      router.get('/', [NotificacionesController, 'index'])
      router.get('/:id', [NotificacionesController, 'show'])
      router.post('/', [NotificacionesController, 'store'])
    }).prefix('notificaciones')

    // Solicitudes
    router.group(() => {
      router.get('/', [SolicitudesController, 'index'])
      router.get('/:id', [SolicitudesController, 'show'])
      router.post('/', [SolicitudesController, 'store'])
    }).prefix('solicitudes')

  })
  .prefix('/api/v1')
