/**
 * (#)index.mjs 1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import { Application } from './application.mjs';
import { config } from "../config.mjs";

new Application(config).run();
