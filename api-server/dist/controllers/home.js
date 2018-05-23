"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("../models/db");
/**
 * GET /
 * Home page.
 */
let uri = 'mongodb://localhost:27017/artist';
const connection = mongoose_1.default.connect(uri);
const db = new db_1.DB();
// connection.then(() => {
//     return db.bulk_insert()
// }).then((result) => {
//     console.log(result)
// })
exports.index = (req, res) => {
    res.send('hello world');
};
exports.modify_data = (req, res) => {
    connection.then(() => {
        return db.modify(req.query.id, req.query.field, req.query.fieldValue);
    }).then((result) => {
        console.log(result);
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.send('out');
};
exports.add_data = (req, res) => {
    console.log('add');
    connection.then(() => {
        let artistValue = { name: req.query.name, birth: req.query.birth, obit: req.query.obit, genre: req.query.genre, nation: req.query.nation };
        return db.create(artistValue);
    }).then((result) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(result);
    });
};
exports.delete_data = (req, res) => {
    console.log(req.query.id);
    connection.then(() => {
        return db.delete(req.query.id);
    }).then((result) => {
        res.header("Access-Control-Allow-Origin", "*");
        // console.log(result)
        if (result.n === 1)
            res.send(true);
        else
            res.send(false);
    });
};
exports.findAll = (req, res) => {
    connection.then(() => {
        return db.size();
    }).then((result) => {
        if (result > 0) {
            return db.findAll();
        }
        else {
            return false;
        }
    }).then((result) => {
        if (result === false) {
            res.send(false);
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.jsonp(result);
        }
    });
};
//# sourceMappingURL=home.js.map