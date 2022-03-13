import express from 'express';
import devoeController from '../controllers/devoeController';
import checkIfAuthenticated from '../middlewares/checkIfAuthenticated';

const devoeRoute=express.Router();
devoeRoute.use(checkIfAuthenticated);

devoeRoute.get('/list', devoeController.list);

export default devoeRoute;