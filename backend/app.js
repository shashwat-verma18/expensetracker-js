const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

const routes = require('./routes/expenseRoutes');
const errorController = require('./controllers/error');

app.use(cors());
app.use(bodyParser.json({extended: false}));

app.use('/expense', routes);
app.use(errorController.get404)

sequelize
.sync()
.then(result => {
    app.listen(4000);
})
.catch(err => console.log(err));
