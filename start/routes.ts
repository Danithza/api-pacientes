import router from '@adonisjs/core/services/router'

const PacientesController = () => import('#controllers/pacientes_controller')

router
  .group(() => {
    router
      .group(() => {
        router.get('/', [PacientesController, 'index']).as('index')
        router.get('/:id', [PacientesController, 'show']).as('show')
        router.post('/', [PacientesController, 'store']).as('store')
        router.put('/:id', [PacientesController, 'update']).as('update')
        router.delete('/:id', [PacientesController, 'destroy']).as('destroy')
      })
      .prefix('pacientes')
      .as('pacientes')
  })
  .prefix('/api/v1')
