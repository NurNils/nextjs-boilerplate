import mongoose from 'mongoose';

/* RecipeSchema will correspond to the recipe collection in the MongoDB database. */
const RecipeSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['cooking-recipe', 'baking-recipe', 'other-recipe'],
        required: true,
        default: 'cooking-recipe',
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    idTiktok: {
        type: String
    },
    idInstagram: {
        type: String,
        required: true
    },
    idYoutube: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        enum: ['schwäbisch', 'vegetarisch', 'vegan', 'laktosefrei', 'fleisch', 'fisch'],
        required: true,
        default: [],
    },
    durationCook: { type: Number },
    durationWork: { type: Number },
    difficulty: {
        type: String,
        enum: ['Einfach', 'Mittel', 'Schwer'],
        required: true,
        default: 'Einfach',
    },
    portions: { type: Number, required: true },
    ingredients: [{
        amount: {
            type: Number
        },
        type: {
            type: String,
            required: true,
            default: null,
        },
        name: {
            type: String,
            required: true
        },
        ref: {
            type: String
        }
    }],
    content: { type: String, required: true }
});

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);