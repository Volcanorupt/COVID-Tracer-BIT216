const express = require('express')
const bodyParser = require('body-parser')

const TestCentre = require('./models/testCentre');
const Tester = require('./models/tester');

const mongoose = require("mongoose");

const app = express()

mongoose.connect("mongodb+srv://khubs:6aXMf344ooafxRSv@cluster0.7rcxc.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection failed');
    });

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

//////////////////////////////////////////Register Test Centre//////////////////////////////////////////

app.post(
    "/api/test-centres",
    (req, res, next) => {
        const { centreName, centreTel, centreAdd } = req.body;

        const testCentre = new TestCentre({
            centreName,
            centreTel,
            centreAdd
        });

        console.log('new test centre before save to DB:', testCentre);

        return testCentre
            .save()
            .then(newCentre => {
                console.log('after save to DB', newCentre)
                res.status(200).json({
                    message: 'Test centre added successfully',
                    postId: newCentre._id
                });
            });

    }
);


app.get("/api/test-centres", (req, res, next) => {
    TestCentre
        .find()
        .then(testCentreList => {
            res.json(testCentreList).status(200)
        })
})

//////////////////////////////////////////Record Tester//////////////////////////////////////////

app.post("/api/tester", (req, res, next) => {
    const { officerName, officerPosition, testCentreId } = req.body;

    const tester = new Tester({
        officerName,
        officerPosition,
        testCentreId,
    });

    return tester
        .save()
        .then(newTester => {
            res.status(200).json(newTester);
        })

})

app.get("/api/tester", (req, res, next) => {
    Tester
        .find()
        .then(testerList => {
            res.json(testerList).status(200)
        })
})

module.exports = app;