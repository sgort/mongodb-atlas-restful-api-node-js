# mongodb-atlas-restful-api-node-js
Illustrates building a RESTful API with Node.js and Express Framework

morgan is used for logging requests to the console

nodemon is used for automatically restarting the server when your code changes

`npm start` is all you need after cloning the repo

```
steven@steven-K501LX:~/Development/mongodb-atlas-restful-api-node-js$ npm start

> mongodb-atlas-restful-api-node-js@1.0.0 start /home/steven/Development/mongodb-atlas-restful-api-node-js
> nodemon app.js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Connected to `demo`!

```


Currently support these endpoints:

- GET all gemeenten of the collection
`localhost:3000/gemeenten`
- POST a single and/or a serie of gemeenten into the collection
`localhost:3000/gemeenten/insert`
- GET a single gemeente from the collection
`localhost:3000/gemeenten/:GemeentecodeGM`
- DELETE a single gemeente from the collection
`localhost:3000/gemeenten/:GemeentecodeGM`
- PATCH a single gemeente in the collection
`localhost:3000/gemeenten/:GemeentecodeGM`


### Preview of DisciplMongoDB Atlas
![Screenshot from 2020-04-06 11-18-33](https://user-images.githubusercontent.com/25812095/78544112-f178a880-77f9-11ea-80bf-09497b31c845.png)
