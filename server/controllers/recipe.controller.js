const { createRecipe } = require('../services/recipe.service');
const { Recipe } = require('../models/recipe.model')


//then/catch will run code and get a response later
const handleCreateRecipe = async (req, res) => {
    try {
        const newRecipe = await createRecipe(req.body);
        return res.json(newRecipe);
    } catch (err) {
        return res.status(400).json(err);
    }
}

//async/await will pause code and continue when a return is received
const getAllRecipes = async (req, res) => {
    //attempt to run this code
    try {
        //await pauses operation until a return occurs
        const recipes = await Recipe.find(); //the first line of code in .then/.catch functions 
        return res.json(recipes); //the rest of .then
        //catch err if any
    } catch (err) {
        return res.status(400).json(err);
    }

}

const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        return res.json(recipe);
    } catch (err) {
        return res.status(400).json(err);
    }

}

const deleteRecipeById = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        return res.json(deletedRecipe);
    } catch (err) {
        return res.status(400).json(err);
    }

}

const updateRecipeById = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
        });
        return res.json(updatedRecipe);
    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports = {
    handleCreateRecipe,
    getAllRecipes,
    getRecipeById,
    deleteRecipeById,
    updateRecipeById,
}