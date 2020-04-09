const express = require('express');
const router = express.Router();
const checkAuth = require('../middelware/check-auth');
const Gemeente = require("../models/gemeente");

/**
 * GET (ie READ) all gemeenten in the collection
 * No login required!
 */
router.get("/", (req, res, next) => {
    Gemeente.find()
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                gemeenten: docs.map(doc => {
                    return {
                        GemeentecodeGM: doc.GemeentecodeGM,
                        Gemeentenaam: doc.Gemeentenaam,
                        Provincienaam: doc.Provincienaam,
                        request: {
                            type: "GET_SPECIFIC_GEMEENTE",
                            url: "http://localhost:3000/gemeenten/" + doc.GemeentecodeGM
                        }
                    };
                })
            };
            console.log(docs);
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * GET (ie READ) a specific gemeente in the collection by `GemeentecodeGM`
 * No login required!
 */
router.get("/:gemeenteId", (req, res, next) => {
    const id = req.params.gemeenteId;
    Gemeente.find({ GemeentecodeGM: { $eq: id } })
        .exec()
        .then(docs => {
            if (docs.length >= 1) {
                const response = {
                    count: docs.length,
                    gemeenten: docs.map(doc => {
                        return {
                            GemeentecodeGM: doc.GemeentecodeGM,
                            Gemeentenaam: doc.Gemeentenaam,
                            Provincienaam: doc.Provincienaam,
                            request: {
                                type: "GET_ALL_GEMEENTEN",
                                url: "http://localhost:3000/gemeenten/"
                            }
                        };
                    })
                };
                console.log(docs);
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: "No valid Gemeente found for provided GemeentecodeGM"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * POST (ie CREATE) a single and/or a serie of gemeenten in the collection
 * Login via JSON Web Token authorization is required!
 */
router.post("/insert", checkAuth, (req, res, next) => {
    Gemeente.insertMany(req.body)
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created gemeente(n) successfully",
                gemeenten: result.map(doc => {
                    return {
                        GemeentecodeGM: doc.GemeentecodeGM,
                        Gemeentenaam: doc.Gemeentenaam,
                        Provincienaam: doc.Provincienaam,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/gemeenten/" + doc.GemeentecodeGM
                        }
                    };
                })
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * PATCH (ie UPDATE) a specific gemeente in the collection by `GemeentecodeGM`
 * Can handle incomplete set of properties
 * Login via JSON Web Token authorization is required!
 */
router.patch("/:gemeenteId", checkAuth, (req, res, next) => {
    const id = req.params.gemeenteId;
    Gemeente.updateMany({ GemeentecodeGM: { $eq: id } }, { $set: req.body }, { upsert: true })
        .exec()
        .then(result => {
            console.log(result)
            res.status(200).json({
                message: "Gemeente succesfully updated!",
                request: {
                    type: "GET_UPDATED_GEMEENTE",
                    url: "http://localhost:3000/gemeenten/" + id
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * DELETE a specific gemeente in the collection by `GemeentecodeGM`
 * Login via JSON Web Token authorization is required!
 */
router.delete("/:gemeenteId", checkAuth, (req, res, next) => {
    const id = req.params.gemeenteId;
    Gemeente.deleteOne({ GemeentecodeGM: { $eq: id } })
        .exec()
        .then(result => {
            if (result.deletedCount !== 0) {
                console.log(result)
                res.status(200).json({
                    message: "Gemeente succesfully deleted from the collection"
                })
            } else {
                res.status(404).json({
                    message: "No valid Gemeente found for provided GemeentecodeGM"
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;