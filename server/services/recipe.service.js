const { Recipe } = require('../models/recipe.model');

//now createRecipe can be called from anywhere and isn't limited
//to being called from destination.controller (where this was previously held)
const createRecipe = async (data) => {
    const destination = await Recipe.create(data);
    return destination;
}

module.exports = {
    createRecipe
};