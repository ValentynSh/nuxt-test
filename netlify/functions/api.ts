import express, { Router } from 'express';
import serverless from 'serverless-http';
import cors from 'cors'
import connect from "../../src/utils/connect";
import { createUserHandler, findUsersHandler } from "../../src/controller/user.controller";
const api = express();

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World!'));

var corsOptions = {
    origin: 'https://lucent-valkyrie-311905.netlify.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


router.get("/user", cors(corsOptions),  findUsersHandler);
api.listen(1337, async () => {
   
  
    await connect();
  
    
  });
api.use('/api/', router);

export const handler = serverless(api);