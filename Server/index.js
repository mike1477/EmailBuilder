"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("es6-shim");
require("reflect-metadata");
var path = __importStar(require("path"));
var bodyParser = __importStar(require("body-parser"));
var moment_1 = __importDefault(require("moment"));
var express = require('express');
var spa = "node_modules/em-spa/dist/EM-SPA";
// Allowed extensions list can be extended depending on your own needs
var allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.port = 8888;
        // Create expressjs application
        this.app = express();
        // Route our backend calls
        this.app.get('/api', function (req, res) { return res.json({ application: 'Reibo collection' }); });
        // Redirect all the other resquests
        this.app.get('*', function (req, res) {
            if (allowedExt.filter(function (ext) { return req.url.indexOf(ext) > 0; }).length > 0) {
                res.sendFile(path.resolve(spa + "/" + req.url));
            }
            else {
                res.sendFile(path.resolve(spa + "/index.html"));
            }
        });
        // Depending on your own needs, this can be extended
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.raw({ limit: '50mb' }));
        this.app.use(bodyParser.text({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({
            limit: '50mb',
            extended: true
        }));
        // Start the server on the provided port
        this.app.listen(this.port, function () { return console.log("http is started " + _this.port); });
        // Catch errors
        this.app.on('error', function (error) {
            console.error(moment_1.default().format(), 'ERROR', error);
        });
        process.on('uncaughtException', function (error) {
            console.log(moment_1.default().format(), error);
        });
    }
    Server.bootstrap = function () {
        return new Server();
    };
    return Server;
}());
//Bootstrap the server, so it is actualy started
var server = Server.bootstrap();
exports.default = server.app;
