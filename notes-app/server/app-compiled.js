'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _configJson = require('./config.json');

var _utilsDataBaseUtilsJs = require('./utils/DataBaseUtils.js');

var db = _interopRequireWildcard(_utilsDataBaseUtilsJs);

db.setUpConnection();

var app = (0, _express2['default'])();

app.use(_bodyParser2['default'].json());

app.get('/notes', function (req, res) {
        db.listNotes().then(function (data) {
                return res.send(data);
        });
});

app.post('/notes', function (req, res) {
        db.createNote(req.body).then(function (data) {
                return res.send(data);
        });
});

app['delete']('/notes/:id', function (req, res) {
        db.createNote(req.params.id).then(function (data) {
                return res.send(data);
        });
});

var server = app.listen(_configJson.serverPort, function () {
        console.log('server listens port ' + _configJson.serverPort);
});

//# sourceMappingURL=app-compiled.js.map