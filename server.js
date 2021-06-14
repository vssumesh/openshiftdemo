// The `res.redirect()` function sends back an HTTP 302 by default.
// When an HTTP client receives a response with status 302, it will send
// an HTTP request to the URL in the response, in this case `/to`


const express = require('express')
const app = express()
const port = 8080

var url=process.env.REDIRECT_URL || 'https://www.google.com/'

app.get('/', (req, res) => {
   res.redirect(url);
})

app.get('/sayehello', (req, res) => {
	res.send("hello world")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
