const appointments = [];

function saveAppointment({ name, date, time }) {
  const appointment = {
    id: appointments.length + 1,
    name,
    date,
    time
  };

  appointments.push(appointment);

  return appointment;
}

function listAppointments() {
  return appointments;
}

function findAppointmentById(id) {
  return appointments.find(appointment => appointment.id === id);
}


function deleteAppointmentById(id) {
  const index = appointments.findIndex(app => app.id === id);

  if (index === -1) return null;

  const deleted = appointments.splice(index, 1);
  return deleted[0];
}


export { saveAppointment, listAppointments, findAppointmentById, deleteAppointmentById };


