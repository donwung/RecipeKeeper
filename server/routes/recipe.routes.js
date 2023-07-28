const express = require('express');

const {
    handleCreateRecipe,
    getAllRecipes,
    getRecipeById,
    deleteRecipeById,
    updateRecipeById,
} = require('../controllers/recipe.controller');

const router = express.Router();

router.post('/', handleCreateRecipe);
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.delete('/:id', deleteRecipeById);
router.put('/:id', updateRecipeById);

module.exports = {
    recipeRouter: router
}