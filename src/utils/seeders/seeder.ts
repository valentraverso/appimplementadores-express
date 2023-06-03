import { jokesModel } from "../../models"
import { jokesSeed } from "./jokes/jokes";

const seedUploader = {
    jokesSeed: async () => {
        await jokesModel.deleteMany({});
        await jokesModel.create(jokesSeed)
    }
}