import { jokesModel } from "../models";

const jokesController = {
    postJokeByApi: async (req, res, next) => {
        const { category } = req.params;

        try {
            const fetchJokeByCategory = fetch(`https://official-joke-api.appspot.com/jokes/${category}/random`)

            const joke = await jokesModel
                .create(
                    {

                    }
                );

            if (!joke) {
                res.status(300).send({
                    status: false
                })
            }

            res.status(201).send({
                status: true,
                msg: "We create a joke",
                data: joke
            })
        } catch (err) {

        }
    }
}