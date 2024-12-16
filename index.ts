import dotenv from 'dotenv';
import { testUserRoles } from './constants';
import express, { Request, Response } from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/roles', (_request: Request, response: Response) => {
    response.send({ roles: testUserRoles });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
