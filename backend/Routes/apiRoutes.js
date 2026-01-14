import { Router } from "express";
import { createAppointmentController, listAppointmentsController, getAvailableTimesController ,getAppointmentByIdController, deleteAppointmentByIdController } from "../Controllers/apiController.js";

const router = Router();

router.post('/appointments', createAppointmentController)

router.get('/appointments', listAppointmentsController)

router.get('/appointments/:id', getAppointmentByIdController)

router.delete('/appointments/:id', deleteAppointmentByIdController)

router.get('/available-times', getAvailableTimesController);


export default router