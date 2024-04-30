// Lab 6 
// Author: Kristine Gail Buriel
// Date: 4/28/24

// Define Variables
myTransport = [" Toyota ", " bus ", " rides from friends ", " walking"];

//create an object for my main ride 
myMainRide = {
    make: "Toyota",
    model: "Tacoma",
    color: "silver",
    year: "2019",
    // let's figure out the age using year! 
    age: function() {
      return 2022 - this.year;
    }
}

//output
document.writeln ("Kinds of transportaiton I use", myTransport, "</br>"); 
//object time! 
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>"); 
