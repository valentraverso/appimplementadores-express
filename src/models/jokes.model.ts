import { Schema, model } from "mongoose";
import { AllowedCategories } from "../utils/types/jokes.td";

interface JokeInterface {
    category: AllowedCategories;
    setup: string;
    punchline: string;
}

const jokesSchema = new Schema<JokeInterface>({
    category: {
        type: String,
        required: [true, "The category of the joke is required"]
    },
    setup: {
        type: String,
        required: [true, 'A setup for the joke is required.']
    },
    punchline: {
        type: String,
        required: [true, 'A punchline for the joke is required']
    }
})

const jokesModel = model('jokes', jokesSchema);

export { jokesModel };