import 'es6-shim';
import 'reflect-metadata';
import { Request, Response } from 'express-serve-static-core';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import moment from 'moment';

const express = require('express');
const assembler = require("../Template-Assembler/index.js");

const spa = "node_modules/em-spa/dist/EM-SPA";

// Allowed extensions list can be extended depending on your own needs
const allowedExt = [
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

class Server {
    public app: any;
    private port = 6060;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        // Create expressjs application
        this.app = express();

        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.raw({ limit: '50mb' }));
        this.app.use(bodyParser.text({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({
            limit: '50mb',
            extended: true
        }));

        // Route our backend calls
        this.app.get('/api', (req: any, res: { json: (arg0: { application: string; }) => void; }) => res.json({ application: 'Template Designer' }));
        this.app.post('/api/assemble', (req: any, res: { send: (arg0: string) => void; }) => {

            var data = JSON.parse(req.body.data);
            var design = JSON.parse(req.body.design);

            var result = assembler.render(data, design);

            res.send(result);
        })

        // Redirect all the other resquests
        this.app.get('*', (req: Request, res: Response) => {
            if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
                res.sendFile(path.resolve(`${spa}/${req.url}`));
            } else {
                res.sendFile(path.resolve(`${spa}/index.html`));
            }
        });



        // Start the server on the provided port
        this.app.listen(this.port, () => console.log(`http is started ${this.port}`));

        // Catch errors
        this.app.on('error', (error: any) => {
            console.error(moment().format(), 'ERROR', error);
        });

        process.on('uncaughtException', (error: any) => {
            console.log(moment().format(), error);
        });
    }
}

//Bootstrap the server, so it is actualy started
const server = Server.bootstrap();
export default server.app;