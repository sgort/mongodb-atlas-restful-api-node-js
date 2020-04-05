# mongodb-atlas-restful-api-node-js
Illustrates building a RESTful API with Node.js and Express Framework

morgan is used for logging requests to the console

nodemon is used for automatically restarting the server when your code changes

`npm start` is all you need after cloning the repo

```> mongodb-atlas-restful-api-node-js@1.0.0 start /home/steven/Development/mongodb-atlas-restful-api-node-js
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
- POST a single gemeente into the collection
`localhost:3000/gemeenten`
- POST a serie of gemeenten into the collection
`localhost:3000/gemeenten/insertbatch`
- GET a single gemeente from the collection
`localhost:3000/gemeenten/:_id`
- DELETE a single gemeente from the collection
`localhost:3000/gemeenten/:_id`
- PATCH a single gemeente in the collection
`localhost:3000/gemeenten/:_id`

 <br>*notice that the `_id` here is the MongoDB ObjectId*
