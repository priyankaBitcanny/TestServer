const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const str2 =
  '<html lang="en"><head>\n' +
  '    <meta charset="UTF-8">\n' +
  '    <title>Title</title>\n' +
  '</head><script type="text/javascript">\n' +
  '  window.onload = function() {\n' +
  '    // Deep link to your app goes here\n' +
  '    document.getElementById("l").src = "rentlymanager://installer/";' +
  '\n' +
  '    setTimeout(function() {\n' +
  '      // Link to the App Store should go here -- only fires if deep link fails' +
  '      window.location = "https://itunes.apple.com/us/app/my.app/id123456789?ls=1&mt=8";' +
  '    }, 500);\n' +
  '  };\n' +
  '</script>' +
  '<iframe id="l" width="1" height="1" style="visibility:hidden"></iframe>' +
  '<body>' +
  '<br/>Rently Manager <a href="rentlymanager://installer/ce9f0396b5d6e7bdc1689591fb77381025b34932b76e98574e43f5cfa1da0c97">Installer</a>' +
  '<br/><br/>Firebase <a' +
  ' href="https://managerapp.page.link/installer">Installer</a>' +
  '</body>' +
  '</html>'
;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(str2));


app.listen(3000, () => console.log('Example app listening on port 3000!'))