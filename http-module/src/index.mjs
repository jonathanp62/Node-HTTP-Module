/**
 * (#)index.mjs 1.0.0   09/12/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { Application } from './application.mjs';
import { config } from "../config.mjs";

new Application(config).run();
