const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/<news-api>'));
app.get('/*', function(req,res)

{res.sendFile(path.join(__dirname+'/dist/<news-api>/index.html'));});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});