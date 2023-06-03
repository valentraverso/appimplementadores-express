import jwt from 'jsonwebtoken';

export default function verifyToken(req, res, next) {
    const { authorization } = req.headers;

    try {
        const decode = jwt.verify(authorization, 'privateKey');

        next();
    } catch (err) {
        res.status(401).send({
            msg: "Unathorized token"
        })
    }
}