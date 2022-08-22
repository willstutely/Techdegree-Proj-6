# Techdegree-Proj-6
 Node and Express app
This app puts into practice using Pug templates within the Express framework.  It allows a user (maybe a prospective employer) to view the projects I've completed up until this point, and with links to the github repositories associated with each project (as well as a live demo view) the user can examine my code and see it in action.  Users can initiate the app running "node app.js" in the terminal, or the app can be launched using 'npm start' after the necessary modules are installed using 'npm install.' Errors are handled with simple middleware, simulating '404 Not Found' errors, as well as issues with the server.  Other middleware functions are used to iterate through the data.json file's contents, and pass those contents on to the relevant Pug templates to dynamically populate the respective web pages.  A static server is used for the static files and folders stored in the 'public' folder.

Some changes to the CSS stylesheet were made, such as:
    - The bio thumbnail image changes when hovered over
    - Project thumbnails increase box-shadow on hover
    - "Back" navigation buttons changed to italics
    - Navigation section background color changed
    - "Back" navigation buttons changed to white to stand out from background