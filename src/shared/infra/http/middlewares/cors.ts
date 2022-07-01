import { NextFunction, Request, Response } from 'express';

const cors = (request: Request, response: Response, next: NextFunction) => {
  response.setHeader('Access-Control-Allow-Origin', 'https://www.adopetcp.com');

  next();
};

export default cors;
