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

export { saveAppointment, listAppointments };


