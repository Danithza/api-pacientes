import router from '@adonisjs/core/services/router'

const PacientesController = () => import('#controllers/pacientes_controller')
const BeneficiariosController = () => import('#controllers/beneficiarios_controller')
const CitasController = () => import('#controllers/citas_controller')
const FacturasController = () => import('#controllers/facturas_controller')

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

  })
  .prefix('/api/v1')
