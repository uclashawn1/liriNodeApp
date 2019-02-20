// At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:


require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable.


  var keys = require("./keys.js");

// You should then be able to access your keys information like so


  var spotify = new Spotify(keys.spotify);

// Make it so liri.js can take in one of the following commands:


// concert-this
node liri.js concert-this <artist/band name here>
// This will search the Bands in Town Artist Events API 
("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") 
/* for an artist and render the following information about each event to the terminal:
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY") */

// spotify-this-song
node liri.js spotify-this-song '<song name here>'

// movie-this
node liri.js movie-this '<movie name here>'

// do-what-it-says
node liri.js do-what-it-says