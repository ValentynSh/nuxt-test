import express, { Router } from 'express';
import serverless from 'serverless-http';
import cors from 'cors'
import { createUserHandler, findUsersHandler } from "../../src/controller/user.controller";
const api = express();

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World!'));

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


router.get("/user", cors(corsOptions),  findUsersHandler);

api.use('/api/', router);

export const handler = serverless(api);