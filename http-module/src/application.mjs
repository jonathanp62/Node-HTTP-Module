/**
 * (#)application.mjs   1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { config } from "../config.mjs";
import { HttpModule } from "./http-module.mjs";

/**
 * The application class.
 */
class Application {
    /**
     * The constructor.
     *
     * @param   {config}  config
     */
    constructor(config) {
        this._config = config;
    }

    /**
     * The run method.
     */
    run() {
        new HttpModule(this._config).startServer();
    }
}

export { Application };