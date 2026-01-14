const appointments = [];

function saveAppointment({ name, date, time, serviceType }) {
  const appointment = {
    id: appointments.length + 1,
    name,
    date,
    time,
    serviceType
  };

  appointments.push(appointment);
  return appointment;
}

function listAppointments() {
  return appointments;
}

function getAppointmentsByDate(date) {
  return appointments.filter(app => app.date === date);
}

function findAppointmentById(id) {
  return appointments.find(
    appointment => appointment.id === Number(id)
  );
}

function deleteAppointmentById(id) {
  const index = appointments.findIndex(app => app.id === Number(id));

  if (index === -1) return null;

  const deleted = appointments.splice(index, 1);
  return deleted[0];
}

export {
  saveAppointment,
  listAppointments,
  getAppointmentsByDate,
  findAppointmentById,
  deleteAppointmentById
};
