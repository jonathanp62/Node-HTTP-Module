/**
 * (#)http-module.mjs   1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import http from 'http';

import { config } from "../config.mjs";
import { createServer } from 'http';
import { setTimeout } from "timers/promises";

/**
 * The HTTP module class.
 *
 * The express module is more likely
 * to be used than this module.
 */
class HttpModule {
    /**
     * The constructor.
     *
     * @param   {config}    config
     */
    constructor(config) {
        this._config = config;
    }

    /**
     * Create the server and start the listener.
     */
    startServer() {
        const server = createServer((request, response) => {
            if (request.url === '/') {
                response.write(`${this._config.htmlContent}`);
                response.end();
            }
        });

        server.listen(this._config.port);

        const sockets= new Set();

        server.on('connection', (socket) => {
            sockets.add(socket);

            server.once('close', () => {
                sockets.delete(socket);
            });
        });

        console.log(`The HTTP Server is listening on port ${this._config.port}`);

        this.waitAndClose(server, sockets);
    }

    /**
     * Wait and close the server.
     *
     * @param   {http.Server}   server
     * @param   {Set}           sockets
     * @returns {Promise<void>}
     */
    waitAndClose = async (server, sockets) => {
        await setTimeout(this._config.timeoutInSeconds * 1000);

        server.closeIdleConnections();

        console.log(`Waiting ${this._config.timeoutInSeconds} seconds...`);

        server.close(() => {
            for (const socket of sockets) {
                socket.destroy();
                sockets.delete(socket);
            }
        });

        console.log('The HTTP Server is no longer listening');
    };
}

export { HttpModule };
