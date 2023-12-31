// validationMiddleware.ts

import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

// Example validation schema using Joi
export const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  // Add more validation rules as needed
});

export const validateRequest = (
  schema: Joi.ObjectSchema<any>
) => async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};
