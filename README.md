# mongodb-atlas-restful-api-node-js
Illustrates building a RESTful API with Node.js and Express Framework

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
