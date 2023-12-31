import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

const asyncHandler = (fn: { (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>>; (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void>; (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>>; (arg0: any, arg1: any, arg2: any): any; }) => (req: any, res: any, next: ((reason: any) => PromiseLike<never>) | null | undefined) =>
    Promise.resolve(fn(req, res, next)).catch(next);
export default asyncHandler;