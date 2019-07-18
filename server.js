const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(`${__dirname}/dist`))

// Redirect all urls to index.html and let React Router render the proper page
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.listen(process.env.PORT)
