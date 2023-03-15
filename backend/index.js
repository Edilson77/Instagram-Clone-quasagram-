const express = require('express')
const app = express()
const port = 3000

app.get('/posts', (request, response) => {
  let posts = [
    {
    caption: 'Golden Gate Bridge',
    location: 'Maputo, Mozambique'
  },
  {
    caption: 'Maputo Eye',
    location: 'Maputo, Maputo-Cidade'
  }
]
  response.send(posts)

})

app.listen(3000)
