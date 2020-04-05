const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Gemeente = require("../models/gemeente");


router.get("/", (req, res, next) => {
    Gemeente.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


router.get("/:gemeenteId", (req, res, next) => {
    const id = req.params.gemeenteId;
    Gemeente.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});



router.post("/", (req, res, next) => {
    const gemeente = new Gemeente({
        _id: new mongoose.Types.ObjectId(),
        Gemeentecode: req.body.Gemeentecode,
        GemeentecodeGM: req.body.GemeentecodeGM,
        Gemeentenaam: req.body.Gemeentenaam,
        Provinciecode: req.body.Provinciecode,
        ProvinciecodePV: req.body.ProvinciecodePV,
        Provincienaam: req.body.Provincienaam
    });
    gemeente
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling POST requests to /gemeenten",
                createdGemeente: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;