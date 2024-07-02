const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/product.route');

const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', productRoute)

const server = app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});



