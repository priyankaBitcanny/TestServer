const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Rently Manager <a' +
  ' href="rentlymanager://installer/ca07483102d61fce7a212c108b309e98fc6bd16a574554d57c9d8ec0ccca0b4e">Installer</a>'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))