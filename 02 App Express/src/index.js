const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

process.once("SIGTERM", () => {
  server.close(() => console.log("SIGTERM"))
})

process.once("SIGINT", () => {
  server.close(() => console.log("SIGINT"))
})