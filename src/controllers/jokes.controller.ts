import { jokesModel } from "../models";

const jokesController = {
    getAllJokes: async (req, res, next) => {
        try {
            const pagination: number = req.params.page * 25 || 0;

            const joke = await jokesModel
                .aggregate([
                    {
                        $sort: { _id: -1 }
                    },
                    {
                        $project: { _id: 0 }
                    },
                    {
                        $skip: pagination
                    },
                    {
                        $limit: 25
                    }
                ])
                .exec();

            if (joke.length < 1) {
                return res.status(404).send({
                    status: false,
                    msg: "We couldn't find jokes."
                })
            }

            res.status(200).send({
                status: true,
                msg: "We find results.",
                data: joke
            })

        } catch (err) {
            res.status(500).send({
                status: false,
                msg: "We have troubles while fetching all Jokes"
            })
        }

        next();
    },
    postJokeByApi: async (req, res, next) => {
        const { category } = req.params;

        try {
            const callAPI = await fetch(`https://official-joke-api.appspot.com/jokes/${category}/random`)
            const [resAPI] = await callAPI.json();

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

        next();
    }
}

export { jokesController }