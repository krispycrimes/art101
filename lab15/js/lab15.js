$(document).ready(function() {
  // Define a function to fetch fortune when button is clicked
  function fetchFortune() {
      // Using the core $.ajax() method
      $.ajax({
          // The URL for the request (from the api docs)
          url: "http://www.yerkee.com/api",
          // The data to send (will be converted to a query string)
          data: { 
              // here is where any data required by the api 
              // goes (check the api docs)
              format: "json"
          },
          // Whether this is a POST or GET request
          type: "GET",
          // The type of data we expect back
          dataType : "json",
          // What do we do when the api call is successful
          // all the action goes in here
          success: function(data) {
              // do stuff
              console.log(data);
              // Display the fetched fortune
              $("#output").text(data.fortune);
          },
          // What we do if the api call fails
          error: function (jqXHR, textStatus, errorThrown) { 
              // do stuff
              console.log("Error:", textStatus, errorThrown);
          }
      });
  }

  //Fetch Fortune
  $("#button").click(fetchFortune);
});
