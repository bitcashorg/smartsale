import express, { NextFunction, Response, Request } from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { healthcheck } from './healthcheck'
import { alchemyWebhook } from './alchemy'
import pinoHttp from 'pino-http'
import { logger } from '~/lib/logger'


export function startExpress() {
  const app = express()
  const port = 8080

  // Security Middlewares
  app.use(helmet())

  app.use(rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100 // limit each IP to 100 requests per windowMs
  }))

  // Logging middleware
  app.use(pinoHttp({ logger }))

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
    logger.error(error, 'Uncaught Exception')
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