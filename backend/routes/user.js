import express from 'express';
import { getAll } from '../ontrollers/userController';

let userRouter= express.Router();

userRouter.get('/', getAll);

export default userRouter;
