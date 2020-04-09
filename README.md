# mongodb-atlas-restful-api-node-js
Prototype code base for business use case(s) illustrating usage of a RESTful API with Node.js and Express Framework

- morgan is used for logging requests to the console
- nodemon is used for automatically restarting the server when your code changes
- bcrypt is used for uer token creation (ie signup & login)
- jsonwebtoken is used for route protection POST, PATCH & DELETE requests (ie requires Authorization)

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

First use case to apply this with is process(es) concerning beslagvrije voet. See this (in Dutch)

Currently support these endpoints:
### Users
- GET all users from the collection
`localhost:3000/users`
- POST a new user into the collection
`localhost:3000/users/signup`
- DELETE a specific user from the collection (where '_id' is the MongoDB Schema.Types.ObjectId)
`localhost:3000/users/:_id`
- POST a JSON Web Token for a specific user (raw body input) to login (ie use the protected routes)
`localhost:3000/users/login`


### Gemeenten
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

### Waterschappen
- GET all waterschappen of the collection
`localhost:3000/waterschappen`
- POST a single and/or a serie of waterschappen into the collection
`localhost:3000/waterschappen/insert`
- GET a single waterschap from the collection
`localhost:3000/waterschappen/:WaterschapKey`
- DELETE a single waterschap from the collection
`localhost:3000/waterschappen/:WaterschapKey`
- PATCH a single waterschap in the collection
`localhost:3000/waterschappen/:WaterschapKey`

### Preview of DisciplMongoDB Atlas
![Screenshot from 2020-04-09 12-15-53](https://user-images.githubusercontent.com/25812095/78884867-eae96b80-7a5b-11ea-82e9-8b7b8d66eada.png)
