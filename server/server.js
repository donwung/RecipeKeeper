const express = require('express');
const cors = require('cors');
const { recipeRouter } = require('./routes/recipe.routes');

const port = 8000;

require('./config/mongoose.config');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/recipes', recipeRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests to respond to.`)
})