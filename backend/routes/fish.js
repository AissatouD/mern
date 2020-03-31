import express from 'express';
import { addFish, deleteFish, getAllFish, updateFish } from '../controllers/fishController';
//import ensureIsAuthentificated from '../helpers/authenticationGuard';

let fishRouter= express.Router();

fishRouter.get('/', getAllFish);
fishRouter.post('/add', addFish);
fishRouter.put('/update', updateFish);
fishRouter.delete('/delete', deleteFish);

export default fishRouter;

