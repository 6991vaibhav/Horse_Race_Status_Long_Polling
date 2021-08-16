const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const apiRouter = require('./router')

const app = express();
const port = 3080;

app.use(bodyParser.json());
app.use(cors())
app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Server is listening to post ${port}`)
})