Start assignment: 26 september 2024
Name: Lohrenz Amatkasan
Back-end: Django as API with django rest framework
Front-end: ReactJS with CSS
Database: sqlite3

# Setup Linux/MacOs
1. git clone git@github.com:lohrenz/front-end-assignment.git
2. cd front-end-assignment/
3. python -m venv venv
4. source venv/bin/activate
4. cd myNoteProject/
5. pip install -r requirements.txt
6. python manage.py migrate
7. open a second terminal and cd to front-end-assigment/frontend make sure you are in venv
8. npm install
9. run python manage.py runserver in the django terminal, this is used as an api
make sure you are in the myNoteProject/ directory.
10. run npm start in the react temrinal, make sure you are in the frontend/ directory

Enjoy! :)


# Bootmine Front-end assignment note app

This assignment is created to get a good view on your front-end skills. You will be building a simple note app with basic CRUD (Create, Read, Update & Delete actions). Included in this repository you'll find a Figma file with all the desired elements. The way you approach this assignment is all up to you :)

Figma is an all-browser-compatible design-tool, which we use a lot at Bootmine. See the link for the design at the bottom of this README.

## The assignment

Create the SPA (Single Page Application) and follow the design closely. Make sure the app is responsive (it also looks good on tablet and mobile devices). There is no responsive design provided so this has to be thought out by yourself.

### Functionalities

1. Add notes
2. Show notes
3. Edit note
4. Delete note

### Basic requirements/tips

-   Decide for yourself if you want to use a specific framework, and if so, which one you would like to use (Angular, React, VueJS, Svelte).
-   Make use of typescript
-   Notes doesn't have to be stored in a real database. Usage of localStorage is also allowed, but if you're able to connect it to a database, that's a bonus :)
-   Use Git as version management control and publish the end result in a public repository and share it with us. Be sure to create comprehensive commit messages!

### Bonus points

-   Make use of a pre-processor like Gulp, Parcel, Rollup or Webpack
-   Make use of Sass (SCSS) in stead of CSS
-   To be able to point weaknesses in the UI/UX of the application and to be able to give good fundamental arguments of course ;)
-   Enabling Markdown syntax on creating/editing notes
-   A lot of bonus points for unit tests that are easy to run

### Links

-   [Figma design](https://www.figma.com/file/NM6EKY5KUgYuKDbcBNWuSo/note-app?node-id=0%3A1)
-   [LocalStorage api](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
-   [Linea icons](http://www.linea.io/)
