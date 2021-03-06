"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler_1 = __importDefault(require("errorhandler"));
const App_1 = __importDefault(require("./App"));
/**
 * Error Handler. Provides full stack - remove for production
 */
App_1.default.use(errorhandler_1.default());
/**
 * Start Express server.
 */
const server = App_1.default.listen(App_1.default.get("port"), () => {
    console.log("  App is running at http://localhost:%d in %s mode", App_1.default.get("port"), App_1.default.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
//# sourceMappingURL=Server.js.map