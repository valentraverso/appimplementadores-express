import { jokesModel } from "../models";

const jokesController = {
    postJokeByApi: async (req, res, next) => {
        const { category } = req.params;

        try {
            const callAPI = await fetch(`https://official-joke-api.appspot.com/jokes/${category}/random`)
            const [resAPI] = await callAPI.json();

            console.log(resAPI)

            const joke = await jokesModel
                .create(
                    {
                        category: resAPI.type,
                        setup: resAPI.setup,
                        punchline: resAPI.punchline
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
            res.status(500).send({
                status: false,
                msg: "We have troubles while uploading joke.",
                data: err
            })
        }
    }
}

export { jokesController }