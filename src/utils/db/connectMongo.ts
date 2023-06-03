import mongoose from 'mongoose';

export default async function connectMongo(app, DB_URI, PORT) {
    try {
        await mongoose.connect(DB_URI); // Connect to mongoDB

        // Run server
        await app.listen(PORT, () => {
            console.log(`
            ,---------------------------,
            |  /---------------------\\  |
            | |   Running...          | |
            | |   Valentino Traverso  | |
            | |      Services         | |
            | |     PORT: ${PORT}        | |
            | |                       | |
            |  \\_____________________/  |
            |___________________________|
          ,---\\_____     []     _______/------,
        /         /______________\\           /|
      /___________________________________ /  | ___
      |                                   |   |    )
      |  _ _ _                 [-------]  |   |   (
      |  o o o                 [-------]  |  /    _)_
      |__________________________________ |/     /  /
  /-------------------------------------/|      ( )/
/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            `)
        })

    } catch (err) {
        console.log(err)
    }
}