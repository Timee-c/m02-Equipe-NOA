const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const productController = require('./controllers/productController.js');
app.use('/products', productController);
const UnitController = require('./controllers/unitController.js');
app.use('/unities', UnitController);
const SubGroupController = require('./controllers/SubGroupController.js');
app.use('/subGroups', SubGroupController);
const BrandController = require('./controllers/brandController.js');
app.use('/brands', BrandController);
const GroupController = require('./controllers/GroupController');
app.use('/groups', GroupController);


app.listen(PORT, () => {
    console.log("Server on on Port: " + PORT);
});
