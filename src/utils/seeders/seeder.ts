import { jokesModel } from "../../models"
import { jokesSeed } from "./jokes/jokes";

const seedUploader = {
    jokesSeed: async () => {
        try {
            await jokesModel.deleteMany({});
            const seed = await jokesModel.insertMany(jokesSeed);
            
            return;
        } catch (err) {
            new Error(err)
        }
    }
}

export default seedUploader;