$(document).ready(function() {
  $("#illness-lookup").submit(function(event) {
    event.preventDefault();

    const illness = ("#illness").val();
  })

  $("#doctor-lookup").submit(function(event) {
    event.preventDefault();

    const doctorName = ("#doctor").val();

    const doctor = new Doctor(doctorName);
  })
})
