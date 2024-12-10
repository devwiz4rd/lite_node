const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello to DEVOPS from KHAI Student. P.S Dmytro Vasyk was here!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
