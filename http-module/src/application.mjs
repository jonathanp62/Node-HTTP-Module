/**
 * (#)application.mjs   1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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