# Vote App

HAAS Hash As A Service

## User Stories

* I can create my account, sign in and logout.
* As an authenticated user, I can hash my data with specified algorithm(md5, sha1, sha256) and iteration number.

## Getting Started

Include a `.env` file in the `server` directory with the following environment variables.

```
PORT = 4000
DATABASE = 'mongodb://localhost:27017/<DATABASE_NAME>'
SECRET = 'mysecretkey'
```

Install packages in the server and the client directory using npm

```
cd server
npm install
cd ../client
npm install
```

run the start.sh file to start both the client and the server (server port: 4000, client port: 3000)

```
sh start.sh if you are on windows
./start.sh for mac or ubuntu
```



## Built with

* nodejs
* express
* mongodb
* mongoose
* bcrypt
* jsonwebtoken
* react
* redux
* react-redux
* redux-thunk
