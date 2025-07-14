const admin = require('../firebaseConfig');

const authMiddleware = async (req, res, next) => {
    console.log('🔍 Auth Middleware Invoked');
    
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.log('🚫 No Authorization header provided.');
        return res.status(403).json({ message: "No token provided" });
    }

    const token = authHeader.split(' ')[1];
    console.log('🔑 Token received:', token);

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log('Decoded Token:', decodedToken);
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error('Error verifying token:', error.message);
        res.status(403).json({ message: "Invalid or expired token" });
    }    
};

module.exports = authMiddleware;
