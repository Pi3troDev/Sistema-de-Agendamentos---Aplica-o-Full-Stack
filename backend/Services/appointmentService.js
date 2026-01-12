import { saveAppointment, listAppointments } from '../Models/appointmentModel';

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

export { appointmentService, listAppointmentsService };
