# Meetupz Full Stack React & LoopBack Application

You need MongoDB installed as we are using the Mongo connector for Loopback

### Server Installation & Setup

From the root folder (meetupz), install the dependencies

```sh
$ npm install
```
To run the server

```sh
$ npm start
```

You will get an error at http://localhost:3000 because the client is not yet setup, but you can view the Loopback explorer at
http://localhost:3000/explorer

### Client Installation & Setup 

Open a new terminal in the "client_src" folder

```sh
$ npm install -g create-react-app
```

From the "client_src folder" install client dependencies

```sh
$ npm install
```

 To Serve client

 ```sh
$ npm start
```

It will ask to start on a different port (3001), choose yes

Now you have the server on 3000 and the client on 3001

### Compile The Client

From the "client_src" folder run

 ```sh
$ npm run build
```

This will put all static assets in the Loopback "client" folder
Now you can simply run the server and the client will display at
http//localhost:3000