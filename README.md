# basic node backend

this is my first node.js server for the assignment. i didnt use express, just the built in http module.

## how to run

go into the basic-backend folder and run:

```
node server.js
```

then open http://localhost:3000

## routes

- `/` says Hello, World!
- `/about` is the about page
- `/data` sends some json
- `/greet?name=Kenny` says hello to the name you put in the url
- any other page says page not found

server.js starts the server. routes/routes.js checks the url. each page has its own file in controllers. the json data is in data/user.json.
