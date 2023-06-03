import { Schema, model } from "mongoose";

const jokesSchema = new Schema({
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