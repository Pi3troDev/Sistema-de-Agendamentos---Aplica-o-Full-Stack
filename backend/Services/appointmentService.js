import { saveAppointment, listAppointments, findAppointmentById, deleteAppointmentById } from '../Models/appointmentModel';

function appointmentService({ name, date, time }) {

  if (!name || !date || !time) {
    throw new Error("Dados incompletos para criar o agendamento");
  }

  const [hour, minute] = time.split(':').map(Number);
  const totalMinutes = hour * 60 + minute;

  if (totalMinutes < 480 || totalMinutes > 1080) {
    throw new Error("Horário não disponível");
  }

  const appointment = saveAppointment({ name, date, time });

  return appointment;
}


function listAppointmentsService() {
  return listAppointments();
}


function getAppointmentByIdService(id) {
  const appointment = findAppointmentById(id);

  if (!appointment) {
    throw new Error("Agendamento não encontrado");
  }

  return appointment;
}


function deleteAppointmentService(id) {
  const deleted = deleteAppointmentById(id);

  if (!deleted) {
    throw new Error("Agendamento não encontrado");
  }

  return deleted;
}


export { appointmentService, listAppointmentsService, getAppointmentByIdService, deleteAppointmentService };
