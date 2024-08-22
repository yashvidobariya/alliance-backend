const express = require('express');
const dotenv = require("dotenv")
dotenv.config()
const bodyParser = require('body-parser');
const formRoutes = require('./controller/form');
const app = express();

app.use(bodyParser.json());

app.use('/form', formRoutes);
app.get("/", (req, res) => {
    res.send('Alliance Backed')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
