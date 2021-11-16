const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000
const router = require('./router')

app.use('/api', router)

app.use('/api*', (req, res) => {
  res.status(401).send('Unauthorized')
});

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '../client/build')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})