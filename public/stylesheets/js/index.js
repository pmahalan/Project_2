$(document).ready(function () {
  $('select').formSelect();

  // ***********************************
  //        STARTS A NEW SEARCH
  // ***********************************

  // When newSearch (submit) button is pressed
  $("#newSearch").on("click", function (event) {
    // Prevents default behavior
    event.preventDefault();

    // Collects data from form, getting references to our form and input

    //Collects the value of the form's search parameter
    let optionValue = $("#searchParam").val();

    // // Throws error if no search parameter was chosen
    if (optionValue === "") {
      return alert("You must choose a search parameter.");
    };
    
    switch(optionValue) {
      case "eventName":
        // when optionValue = this case, calls associated function
        getEventsByName();
        break;
      case "eventKeyword":
        // when optionValue = this case, calls associated function
        getEventsByKeyword();
        break;
      case "personName":
        // when optionValue = this case, calls associated function
        getPersonByName();
        break;
      case "personCell":
        // when optionValue = this case, calls associated function
        getPersonByCell();
        break;
    }
  });
  

  // ***********************************
  //        SEARCH FUNCTIONS
  // ***********************************


  // SEARCH FOR EVENT BY NAME  ========================
  

  function getEventsByName() {

    // splits search string into separate words at each space
    let searchText = $("#search").val().trim();
    // Throws error if a person tries to input more than just a first and last name
      if (searchText === "") {
        return alert("The search field cannot be empty.");
      };

      console.log(searchText);

    // creates Ajax get request
    function getEventName(data) {
      $.get("/api/events/name/" + data) 
        .then(function (response) {
          console.log(response);
          // If there's an error, handle it by throwing up a bootstrap alert
        })
    }
    // sends ajax request
    getEventName(searchText);
  }


  // SEARCH FOR EVENT BY KEYWORD  ========================
  

  function getEventsByKeyword() {

    // splits search string into separate words at each space
    let searchText = $("#search").val().trim();
    // Throws error if a person tries to input more than just a first and last name
      if (searchText === "") {
        return alert("The search field cannot be empty.");
      };

      console.log(searchText);

    // creates Ajax get request
    function getEventKey(data) {
      $.get("/api/events/keyword/" + data) 
        .then(function (response) {
          console.log(response);
          // If there's an error, handle it by throwing up a bootstrap alert
        })
    }
    // sends ajax request
    getEventKey(searchText);
  }


  // SEARCH FOR PERSON BY NAME  ========================


  function getPersonByName() {

    // splits search string into separate words at each space
    let searchText = $("#search").val().trim().split(" ");
      // Throws error if a person tries to input more than just a first and last name
      if (searchText === "") {
        return alert("The search field cannot be empty.");
      };
      // Throws error if searchText is more than 2 indices long.
      if (searchText.length > 2) {
        return alert("Please search by first and last name only.")
      }

    //assigns variables to the words in searchText array
    let firstName = searchText[0];
    let lastName = searchText[1];

    console.log(firstName, lastName);

    // makes Ajax post request
    function getPersonName(name1, name2) {
      $.post("api/users/name/" + name1 + "/" + name2)
        .then(function (data) {
          console.log(data);
          // If there's an error, handle it by throwing up a bootstrap alert
        })
    }
    // sends ajax post request
    getPersonName(firstName, lastName);
  }


  // SEARCH FOR PERSON BY CELL ========================


  function getPersonByCell() {

    // splits search string into separate words at each space
    let searchText = $("#search").val().trim();
    // Throws error if a person tries to input more than just a first and last name
      if (searchText === "") {
        return alert("The search field cannot be empty.");
      };

    //Cleans search text to be numbers only
    let cleanedText = searchText.replace(/\D+/g, '');

    // creates Ajax get request
    function getCell(data) {
      $.get("/api/users/cell/" + data) 
        .then(function (response) {
          console.log(response);
          // If there's an error, handle it by throwing up a bootstrap alert
        })
    }

    // sends ajax request
    getCell(cleanedText);
  }
});