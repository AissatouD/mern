import express from 'express';
import { getAllPerson, login, signUp } from '../controllers/personController';

let personRouter= express.Router();

personRouter.get('/', getAllPerson);
personRouter.post('/signup', signUp);
personRouter.post('/login', login);

export default personRouter;
