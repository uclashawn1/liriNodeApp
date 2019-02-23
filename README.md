# liriNodeApp
## The Liri App



<!-- Images showing CLI works! -->
![Screen Pics of App Output](./)


### Project Explanation
Create a command line node app that takes in parameters and returns data from the following APIs: 
Bandsintown, Spotify and OMDb.

### How to use completed app:
cd into main file of app - liriNodeApp

Type into the command line any of the following....

#### node liri.js concert-this "artist/band name here"
Returns concert information from Bandsintown.
or
#### node liri.js spotify-this-song "song name here"
Returns song information from Spotify (If no song is entered, a hard coded default song will be returned).
or
#### node liri.js movie-this "movie name here"
Returns movie information from OMDb (If no movie is entered, a hard coded default movie will be returned).
or
#### node liri.js do-what-it-says
Returns information stored in random.txt.

### Technologies used
Node.js, chalk, figlet, fs, request, Bandsintown API, OMDb API, Spotify API

### Instructions for creating app:

1. Initialize package.json by running npm init -y

2. Create .gitignore file

3. Create keys.js

4. Create .env file, go get and paste Spotify API keys, store in .env

5. Create random.txt with default result for do-what-it-says command

5. Create liri.js

6. npm install - dotenv, fs, request, figlet, node-spotify-api, chalk

7. Declare command line variables (command, parameter)

8. SwitchCase(); switch statement instead of if/else

9. Declare artist variable as parameter
  -Figlet "Bandsintown" for style
  -Send request for concerts to Bandsintown API based off "artist" entered into parameter
  -Parse data into readable object
  -Return name, city, country and date of concerts
  -Chalk package style
  -SpotifySong();

10. Declare searchTrack variable as parameter
  -Set undefined parameter
  -Return Ace of Base The Sign if no track entered into parameter
  -Figlet "Spotify" for style
  -Search Spotify and return data in parameter
  -Chalk package used for style
  -ombdInfo();

11. Set findMovie variable as parameter
  -Set undefined parameter and return 
  -Figlet "OMDB" for style
  -Movie request to OMDb API and return
  -Chalk package used for style
  -getRandom();

12. read and return random.txt
  -display();

13. Append information to log.txt
  -Call switchCase() function;