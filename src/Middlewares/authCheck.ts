import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Customer from '../db/models/dtb_customer';  

declare global {
    namespace Express {
      interface Request {
        user?: Customer; // Assuming 'Customer' is your user model
      }
    }
  }

const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (token == null) {
    return res.sendStatus(401); // No token provided
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;

    // Find the user based on the ID in the token
    const user = await Customer.findByPk(decoded.id); // Assuming 'id' is in the token payload
    if (!user) {
      return res.sendStatus(404); // User not found
    }

    // Attach user information to the request object
    req.user = user;

    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    console.error(err);
    res.sendStatus(403); // Invalid token
  }
};

export default authenticateToken;
