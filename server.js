const express = require('express');
const app = express();

app.use(express.static(_dirname + '/'));

app.listen(process.env.PORT || 8080);