import express from 'express'


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.status(401).json({
    ok: false,
    msg: 'Token not exist in the request'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})