const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post("/", async (req, res) => {
  console.log(req.body);
  res.send('OK!');
});

app.listen(app.get('port'), function() {
  console.log("server iniciado na porta "+app.get('port'));
});
