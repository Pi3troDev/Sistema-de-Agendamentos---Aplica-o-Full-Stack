import { Router } from "express";
import { createAppointmentController, listAppointmentsController, getAppointmentByIdController, deleteAppointmentByIdController } from "../Controllers/apiController";

const router = Router();

router.post('/appointments', createAppointmentController)

router.get('/appointments', listAppointmentsController)

router.get('/appointments/:id', getAppointmentByIdController)

router.delete('/appointments/:id', deleteAppointmentByIdController)

export default router