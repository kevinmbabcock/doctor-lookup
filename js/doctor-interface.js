import { DoctorSearch } from './../js/doctor.js';

$(document).ready(function(){

  let doctorSearch = new DoctorLookup();

  $("#illness-lookup").submit(function(event) {
    event.preventDefault();

    const Illness = $("#illness").val();
    $("ul#search-results").empty();
    doctorSearch.byIllness(Illness);
  })

  $("#doctor-lookup").submit(function(event) {
    event.preventDefault();

    const Name = $("#doctor").val();
    $("ul#search-results").empty();
    doctorSearch.byName(Name);
  })
})
