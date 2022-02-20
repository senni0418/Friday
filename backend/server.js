const express = require('express');
const axios = require('axios');
const cors = require('cors');
const getSentiment = require('./google-sentinent')
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//expose an endpoint for assembly AI
app.get('/', async (req, res) => {
  try {
    const response = await axios.post('https://api.assemblyai.com/v2/realtime/token', // use account token to get a temp user token
      { expires_in: 3600 }, // can set a TTL timer in seconds.
      { headers: { authorization: '1624c45da5354d5d9fed7753a9da5d31' } }); // AssemblyAI API Key goes here
    const { data } = response;
    res.json(data);
  } catch (error) {
    const {response: {status, data}} = error;
    res.status(status).json(data);
  }
});


app.use('/sentiment', async(req, res) => {
  try{
    const journal = req.body.text
    getSentiment((res_json) => {
      console.log(res_json)
      res.json(res_json)
    }, journal)
  }catch (error) {
    const {response: {status, data}} = error;
    console.log(status)
  }

})

app.set('port', 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${server.address().port}`);
});