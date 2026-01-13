import { appointmentService, listAppointmentsService, getAppointmentByIdService, deleteAppointmentService } from '../Services/appointmentService'

function createAppointmentController(req, res) {
    try {
        const { name, date, time } = req.body;
        const callService = appointmentService({ name, date, time });

        return res.status(201).json(callService);
    }
    catch(error) {
        console.log("Erro ao criar seu agendamento.")
        return res.status(400).json({
            error: error.message
        });
    }

}

function listAppointmentsController(req, res) {
    try {
        const appointments = listAppointmentsService();
        return res.status(200).json(appointments);
    }
    catch(error) {
        console.log("Erro ao listar seu agendamento.")
        return res.status(500).json({
            error: error.message
        })
    }
}

function getAppointmentByIdController(req, res) {
    try {
        const { id } = req.params
        const findById = getAppointmentByIdService(id)

        return res.status(200).json(findById)
    }
    catch(error) {
        console.log("Erro ao buscar seu agendamento.")
        return res.status(500).json({
            error: error.message
        })
    }
}

function deleteAppointmentByIdController(req, res) {
    try {
        const { id } = req.params
        const delById = deleteAppointmentService(id)

        return res.status(200).json(delById);

    }
    catch (error) {
        console.log("Erro ao deletar seu agendamento");
        return res.status(500).json({
            error: error.message
        })
    }
}


export { createAppointmentController, listAppointmentsController, getAppointmentByIdController, deleteAppointmentByIdController };