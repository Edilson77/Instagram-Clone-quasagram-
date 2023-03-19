const express = require('express')
const app = express()

app.get('/posts', (request, response) => {
  let posts =[
    {
      caption: 'Golden Gate Bridge',
      location: 'Maputo, Mozambique'
    },
    {
      caption: 'Maputo Eye',
      location:'Maputo'
    }
  ]
  response.send(posts)

})

app.listen( process.env.PORT || 3000)
