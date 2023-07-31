const admin = require("../firebase/firebaseConfig");

const verifyToken = async(req: any, res: any, next: any) => {
    const token = req.headers.authorization;
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (decodeValue) {
            req.user = decodeValue;
            return next();
        }
        return res.json({message: 'Un authorize'});
    } catch (e) {
        return res.json({message: 'Internal Error'});

    }

}

module.exports = verifyToken;

