import { Router } from "express";
import { createAppointmentController, listAppointmentsController } from "../Controllers/apiController";

const router = Router();

router.post('/appointments', createAppointmentController)

router.get('/appointments', listAppointmentsController)

export default router