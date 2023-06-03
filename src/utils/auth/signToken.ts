import jwt from 'jsonwebtoken';
import { AUDIENCE } from '../config';

export default async function signToken(req, res, next) {
    const { username } = req.body;

    if (!username) {
        return res.status(300).send({
            status: false,
            msg: "We require a username to create a token."
        })
    }

    try {
        const token = jwt.sign(
            {
                username: username
            },
            'privateKey',
            {
                expiresIn: '30m',
                audience: AUDIENCE
            }
        )

        res.status(200).send({
            status: true,
            expires: "In 30 minutes",
            token: token
        })
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: "We have a problem while creating token."
        })
    }

    next();
}

