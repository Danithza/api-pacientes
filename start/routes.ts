/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'
import db from '@adonisjs/lucid/services/db'

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

    // Rutas del Módulo Pacientes (Conexión a MySQL AWS bajo /api/v1/pacientes)
    router
      .group(() => {
        router
          .get('/', async () => {
            try {
              const pacientes = await db.from('usuarios_pacientes').select('*').limit(10)
              return {
                status: 'success',
                data: pacientes,
              }
            } catch (error: any) {
              return {
                status: 'error',
                message: error.message,
              }
            }
          })
          .as('index')
      })
      .prefix('pacientes')
      .as('pacientes')
  })
  .prefix('/api/v1')

// Ruta directa /pacientes (Sin prefijo api/v1)
router.get('/pacientes', async () => {
  try {
    const pacientes = await db.from('usuarios_pacientes').select('*').limit(10)
    return {
      status: 'success',
      data: pacientes,
    }
  } catch (error: any) {
    return {
      status: 'error',
      message: error.message,
    }
  }
})
