import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import expressValidator from "express-validator";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
// import logger from "./util/logger";
// import lusca from "lusca";
// import mongo from "connect-mongo";
// import flash from "express-flash";
// import mongoose from "mongoose";
// import passport from "passport";
// import bluebird from "bluebird";
// import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

// const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Controllers (route handlers)
import * as homeController from "./controllers/home";
// import * as userController from "./controllers/user";
// import * as apiController from "./controllers/api";
// import * as contactController from "./controllers/contact";


// API keys and Passport configuration

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/front", homeController.findAll);
app.post("/front/input", homeController.modify_data);
app.post("/front/add", homeController.add_data);
app.post("/front/delete", homeController.delete_data);
/**
 * API examples routes.
 */

// app.get("/api", apiController.getApi);

export default app;