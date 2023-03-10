import express from 'express'
import {createCar,BookCar,getCar,cancelBooking,getCars,getAllCars,updateCar,deleteCar} from '../controllers/car-controller'
import { authorize } from '../../middleware/auth';
import {validateSchema} from '../../middleware/zodValidation'
import { carSchema } from '../../schema/car';


const router = express.Router();

router.post('/car/create',authorize,validateSchema(carSchema),createCar);
router.post('/car/book/:carID',authorize,BookCar);
router.delete('/car/cancelBooking/:rentID',authorize,cancelBooking);
router.get('/car/getCar/:carID',getCar);
router.get('/car/getCars',getCars);
router.get('/car/getAllCars',getAllCars);
router.put('/car/updateCar/:carID',updateCar);
router.delete('/car/deleteCar/:carID',deleteCar);

export default router