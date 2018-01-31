import { DoctorSearch } from './../js/doctor.js';

$(document).ready(function() {

  let doctorSearch = new DoctorSearch();

  $("#illness-lookup").submit(function(event) {
    event.preventDefault();

    const Illness = $("#illness").val();
    $("ul#search-results").empty();
    doctorSearch.byIllness(Illness);
    $("#results").show();
  })

  $("#doctor-lookup").submit(function(event) {
    event.preventDefault();

    const Name = $("#doctor").val();
    $("ul#search-results").empty();
    doctorSearch.byName(Name);
    $("#results").show();
  })
})
