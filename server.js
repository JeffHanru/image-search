const express = require('express')
const axios = require('axios')

const app = express()

app.get('/api/imagesearch', (req, res) => {
  const query = req.query
  axios({
    method: 'get',
    url: 'https://www.flickr.com/services/feeds/photos_public.gne',
    params: query
  }).then(response => {
    const { data } = response
    res.status(200).json({
      data
    })
  }).catch(() => {
    res.status(400).send('request failed') 
  })
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
