const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)

  // add a couple of endpoints for health checks and version checks, so that we can monitor the deployed app and trigger redeploys when needed.
  app.get('/health', (req, res) => {
    res.send('ok')
  })

  app.get('/version', (req, res) => {
    res.send('2') // change this string to ensure a new version deployed
  })
}

start()
