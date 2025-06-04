const express = require("express")
const { default: loaders, GracefulShutdownServer } = require("@medusajs/medusa")

;(async () => {
  async function start() {
    const app = express()
    const directory = process.cwd()

    try {
      const { container } = await loaders({
        directory,
        expressApp: app,
        isTest: false,
      })
      const configModule = container.resolve("configModule")
      const port = process.env.PORT || 9000

      const server = GracefulShutdownServer.create(
        app.listen(port, (err) => {
          if (err) {
            return
          }
          console.log(`Server is ready on port: ${port}!`)
        })
      )

      // Handle graceful shutdown
      const gracefulShutDown = () => {
        server
          .shutdown()
          .then(() => {
            console.log("Gracefully stopping the server.")
            process.exit(0)
          })
          .catch((e) => {
            console.error("Error received when shutting down the server.", e)
            process.exit(1)
          })
      }
      process.on("SIGTERM", gracefulShutDown)
      process.on("SIGINT", gracefulShutDown)
    } catch (err) {
      console.error("Error starting server", err)
      process.exit(1)
    }
  }

  await start()
})()
