import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

const PacientesController = () => import('#controllers/pacientes_controller')

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    // Autenticación
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    // Perfil del usuario autenticado
    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    // Rutas del Módulo Pacientes (Usando PacientesController)
    router
      .group(() => {
        router.get('/', [PacientesController, 'index']).as('index')
        router.get('/:id', [PacientesController, 'show']).as('show')
        router.post('/', [PacientesController, 'store']).as('store')
      })
      .prefix('pacientes')
      .as('pacientes')
  })
  .prefix('/api/v1')
