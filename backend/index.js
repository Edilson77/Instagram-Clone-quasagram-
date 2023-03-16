const express = require('express')
const app = express()
const port = 5000

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

app.listen(process.env.PORT || 5000)
