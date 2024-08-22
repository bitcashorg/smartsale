import express, {
  type NextFunction,
  type Response,
  type Request,
} from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import pinoHttp from 'pino-http'
import { logger } from '~/lib/logger'
import { setupSentryErrorHandler } from '~/lib/sentry'
import { alchemyWebhook } from './alchemy'
import { healthcheck } from './healthcheck'

export function startExpress() {
  const app = express()
  const port = 8080

  // Trust proxy
  app.set('trust proxy', 1)

  // Sentry error handler
  setupSentryErrorHandler(app)

  // Security Middlewares
  // app.use(helmet())

  app.use(
    rateLimit({
      windowMs: 60 * 1000, // 1 minute
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  )

  // Logging middleware
  // app.use(pinoHttp({ 
  //   logger,
  //   serializers: {
  //     req: (req) => JSON.stringify(req),
  //     res: (res) => JSON.stringify(res),
  //     err: (err) => JSON.stringify(err)
  //   }
  // }))

  // Routes
  app.get('/', healthcheck)
  app.post('/alchemy', alchemyWebhook)

  // Error handling middleware
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err, 'Unhandled error')
    res.status(500).json({ error: 'Internal Server Error' })
  })

  // Start the server
  const server = app.listen(port, () => {
    logger.info(`Server running at http://localhost:${port}`)
  })

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
    logger.error({ reason, promise }, 'Unhandled Rejection')
    // Optionally, you can choose to exit the process
    // process.exit(1)
  })

  // Handle uncaught exceptions
  process.on('uncaughtException', (error: Error) => {
    logger.error(JSON.stringify(error), 'Uncaught Exception')
    // It's generally recommended to exit the process on uncaught exceptions
    process.exit(1)
  })

  // Graceful shutdown
  process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received: closing HTTP server')
    server.close(() => {
      logger.info('HTTP server closed')
      process.exit(0)
    })
  })
}
