/**
 * (#)http-module.mjs   1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import http from 'http';

import { createServer } from 'http';
import { setTimeout } from "timers/promises";

/**
 * The HTTP module class.
 *
 * The express module is more likely
 * to be used than this module.
 */
export class HttpModule {
    /**
     * Create the server and start the listener.
     */
    startServer() {
        const server = createServer((request, response) => {
            if (request.url === '/') {
                response.write('<h1>Hello, Node.js!</h1>');
                response.end();
            }
        });

        server.listen(8080);

        const sockets= new Set();

        server.on('connection', (socket) => {
            sockets.add(socket);

            server.once('close', () => {
                sockets.delete(socket);
            });
        });

        console.log(`The HTTP Server is listening on port 8080`);

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
        await setTimeout(5000);

        server.closeIdleConnections();

        console.log("Waiting 5 seconds...");

        server.close(() => {
            for (const socket of sockets) {
                socket.destroy();
                sockets.delete(socket);
            }
        });

        console.log(`The HTTP Server is no longer listening`);
    };
}