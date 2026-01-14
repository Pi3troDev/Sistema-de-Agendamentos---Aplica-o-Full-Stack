import {
  saveAppointment,
  listAppointments,
  findAppointmentById,
  deleteAppointmentById,
  getAppointmentsByDate
} from '../Models/appointmentModel.js';

/**
 * Serviços e durações (minutos)
 */
const SERVICES_DURATION = {
  corte: 30,
  barba: 30,
  sobrancelha: 10,
  pezinho: 10,
  corte_barba: 60,
  corte_sobrancelha: 40,
  barba_sobrancelha: 40,
  corte_barba_sobrancelha: 70
};

function timeToMinutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

/**
 * CREATE
 */
function appointmentService({ name, date, time, serviceType }) {
  if (!name || !date || !time || !serviceType) {
    throw new Error("Dados incompletos");
  }

  const duration = SERVICES_DURATION[serviceType];
  if (!duration) throw new Error("Serviço inválido");

  const start = timeToMinutes(time);
  const end = start + duration;

  if (start < 480 || end > 1080) {
    throw new Error("Fora do horário de funcionamento");
  }

  const sameDay = getAppointmentsByDate(date);

  const conflict = sameDay.some(app => {
    const appStart = timeToMinutes(app.time);
    const appEnd =
      appStart + SERVICES_DURATION[app.serviceType];

    return start < appEnd && end > appStart;
  });

  if (conflict) {
    throw new Error("Horário ocupado");
  }

  return saveAppointment({ name, date, time, serviceType });
}

/**
 * GET DISPONIBILIDADE
 */
function getAvailableTimesService(date, serviceType) {
  if (!date || !serviceType) {
    throw new Error("Data e serviço obrigatórios");
  }

  const duration = SERVICES_DURATION[serviceType];
  if (!duration) throw new Error("Serviço inválido");

  const OPEN = 480;
  const CLOSE = 1080;

  const sameDay = getAppointmentsByDate(date);
  const available = [];

  for (let start = OPEN; start + duration <= CLOSE; start += 10) {
    const end = start + duration;

    const conflict = sameDay.some(app => {
      const appStart = timeToMinutes(app.time);
      const appEnd =
        appStart + SERVICES_DURATION[app.serviceType];

      return start < appEnd && end > appStart;
    });

    if (!conflict) {
      const h = String(Math.floor(start / 60)).padStart(2, '0');
      const m = String(start % 60).padStart(2, '0');
      available.push(`${h}:${m}`);
    }
  }

  return available;
}

/**
 * OUTROS
 */
function listAppointmentsService() {
  return listAppointments();
}

function getAppointmentByIdService(id) {
  const app = findAppointmentById(id);
  if (!app) throw new Error("Agendamento não encontrado");
  return app;
}

function deleteAppointmentService(id) {
  const deleted = deleteAppointmentById(id);
  if (!deleted) throw new Error("Agendamento não encontrado");
  return deleted;
}

export {
  appointmentService,
  listAppointmentsService,
  getAppointmentByIdService,
  deleteAppointmentService,
  getAvailableTimesService
};
