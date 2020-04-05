const express = require('express');
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;

router.get("/", (req, res, next) => {
    collection.find({}).toArray((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
});


router.get("/:id", (req, res, next) => {
    collection.findOne({ "_id": new ObjectId(req.params.id) }, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
});


router.post("/", (req, res, next) => {
    collection.insertOne(req.body, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result.result);
    });
});

module.exports = router;