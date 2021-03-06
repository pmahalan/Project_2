$(document).ready(function () {
  //Cancel preloader
  const preloader = $('.progress');
  preloader.fadeOut(500);


  // When newPerson (submit) button is pressed
  $("#newPerson").on("click", function (event) {
    // Prevents default behavior
    event.preventDefault();

    // Collects data from form
    // Getting references to our form and input
    let personFirst = $("#firstName").val().trim();
    let personLast = $("#lastName").val().trim();
    let personCell = $("#cell").val().trim();
    let personRole = $("#role").val().trim();
    let personEmail = $("#email").val().trim();
    let personKeyword = $("#keyword").val().trim();

    //if needed fields are empty, this will send an error notice:
    if (personCell === "" || personFirst === "") {
      //Creates Toast for error messages
      let toastHTML = '<span>The name and keyword fields cannot be empty.</span>';
      return M.toast({ html: toastHTML, displayLength: 2000 });
    };

    // parseInt for cell number

    let personData = {
      first_name: personFirst,
      last_name: personLast,
      cell: personCell,
      email: personEmail,
      role: personRole
  
    };

    // Stringify personData
    let createdPerson = JSON.stringify(personData);
    console.log(createdPerson);

    // makes Ajax post request
 
      $.post("/api/users", personData)
        .then(function (response) {
          console.log(response);
          // Success message
          let toastHTML = `<span><i class="material-icons">thumb_up</i> Success! </span>`;
          M.toast({ html: toastHTML, displayLength: 2000 });
        })
        .then(() => {
          //set Timeout
          setTimeout( () => {
          //reload the window
          window.location.replace("/newPerson");
          }, 800);
        })
        .catch((err) => {
          // If there's an error, handle it by throwing up an alert
          console.log(err)
            let toastHTML = `<span><i class="material-icons">error</i> ${err} </span>`;
            return M.toast({ html: toastHTML, displayLength: 2000 });
        })
    

    
    let keywordSearch =  {cell: personCell, keyword: personKeyword};
    
   
      $.post("api/keywords", keywordSearch)
      .then(function (response){
      console.log(response);
      
      })
      window.location.href = "/";
   
  });

  // // Delete Person on click

  // $("#deletePerson").on("click", function (event) {
  //   event.preventDefault();
  //   console.log("clicked")
  //   // declare id variable
  //   let id = $(this).data("id").val();
  //   console.log(id);
  //   window.location.replace("/index");
  //   // create ajax delete req
  //     // $.delete("/api/newEvent/" + id)
  //     //   .then(function (response) {
  //     //     console.log(response)
  //     //     window.location.replace("/index");
  //     //   });
    
  // });
});


// function postPerson(data) {
//   $.post("/api/users", data)
//     .then(function (response) {
//       console.log(response);
//       // Success message
//       let toastHTML = `<span><i class="material-icons">thumb_up</i> Success! </span>`;
//       M.toast({ html: toastHTML, displayLength: 2000 });
//     })
//     .then(() => {
//       //set Timeout
//       setTimeout( () => {
//       //reload the window
//       window.location.replace("/newPerson");
//       }, 800);
//     })
//     .catch((err) => {
//       // If there's an error, handle it by throwing up an alert
//       console.log(err)
//         let toastHTML = `<span><i class="material-icons">error</i> ${err} </span>`;
//         return M.toast({ html: toastHTML, displayLength: 2000 });
//     })
// };


// let keywordSearch =  {cell: personCell, keyword: personKeyword};

// function postKeyword(data){
//   $.post("api/keywords", data)
//   .then(function (response){
//   console.log(response);
  
//   })
// }
// postKeyword(keywordSearch);
// // sends ajax post request
// postPerson(createdPerson)
// });
