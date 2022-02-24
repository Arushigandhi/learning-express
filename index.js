const express = require('express');

const app = express();
app.use(express.json());

app.use('', require('./routes/todos'));

app.listen(3000, () => {
    console.log("we do be listenin on 3000");
});

