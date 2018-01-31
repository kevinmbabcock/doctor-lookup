var apiKey = require('./../.env').apiKey;

export class DoctorSearch {
  constructor() {
  }

  byName(name){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=2b1aa58aebc573bf4f7679d9370bd716`)
    .then(function(response){
      if (response.data.length === 0) {
        $('#search-results').append("There are no doctor's in this area that fit your search criteria.");
      }
      response.data.forEach(function(doctorResults) {
  			$('#search-results').append(`<li>
          <em>Name: </em>${doctorResults.practices[0].name}<br>
          <em>Address:</em> ${doctorResults.practices[0].visit_address.city},${doctorResults.practices[0].visit_address.state}<br>
          <em>Phone Number: </em>${doctorResults.practices[0].phones[0].number}<br>
          <em>Accepting New Patients:</em> ${doctorResults.practices[0].accepts_new_patients}
          <em>Website:</em> ${doctorResults.practices[0].website}<br>
          </li>`);
       })
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request. Please try again.`);
    });
  }

  byIllness(illness){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${illness}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=2b1aa58aebc573bf4f7679d9370bd716`)
    .then(function(response){
      if (response.data.length === 0) {
        $('#search-results').append("There are no doctor's in this area that fit your search criteria.");
      }
      response.data.forEach(function(doctorResults) {
  			$('#search-results').append(`<li>
          <em>Name: </em>${doctorResults.profile.first_name} ${doctorResults.profile.last_name}<br>
          <em>Address:</em> ${doctorResults.practices[0].visit_address.city},${doctorResults.practices[0].visit_address.state} <br>
          <em>Phone Number: </em>${doctorResults.practices[0].phones[0].number}<br>
          <em>Accepting New Patients: </em>${doctorResults.practices[0].accepts_new_patients}<br>
          <em>Website:</em> ${doctorResults.practices[0].website}
          </li>`);
		   })
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request. Please try again.`);
    });
  }
}
