const mongoose = require('mongoose');


const RecipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, `{PATH} is required`],
            minlength: [2, `{PATH} must be at least {MINLENGTH} characters`],
        },
        description: {
            type: String,
            required: [true, `{PATH} is required`],
            minlength: [5, `{PATH} must be at least {MINLENGTH} characters`],
        },
        prepTime: {
            type: Boolean,
            default: false,
        },
        cookTime: {
            type: Boolean,
            default: false,
        },
        servings: {
            type: Boolean,
            default: false,
        },
        ingredients: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)

//register schema with mongoose
const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = { Recipe };