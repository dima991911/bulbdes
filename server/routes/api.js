const express = require('express');
const mongojs = require('mongojs');
const router = express.Router();
const db = mongojs('mongodb://dimon4uk.ds:192837465ds@ds137464.mlab.com:37464/mytasklist', ['tasks']);


/* GET api listing. */
router.get('/objects', (req, res, next) => {

    db.tasks.find(function (err, docs) {
        if (err) console.log(err);

        res.json(docs);
    });
        
});

router.get('/object/:id', function (req, res, next) {
    var id = mongojs.ObjectID(req.params.id);

    db.tasks.findOne({ _id: id }, function (err, docs) {
        if (err) console.log(err);

        res.json(docs);
    });
    
});

router.post('/email', function (req, res, next) {
    var tasks = req.body;

    db.tasks.save(tasks, function (err, docs) {
        if (err) console.log(err);
        res.json(docs);
    });
});

router.delete('/object/:id', function (req, res) {
    var id = mongojs.ObjectID(req.params.id);

    db.tasks.remove({ _id: id }, function (err, docs) {
        if (err) console.log(err);

        res.json(docs);
    });
});

module.exports = router;