import { Request, Response } from "express";
import mongoose from 'mongoose';
import { Info_Artist, ArtistModel } from "../models/artist";
import { DB } from "../models/db";


/**
 * GET /
 * Home page.
 */


let uri = 'mongodb://localhost:27017/artist';
const connection = mongoose.connect(uri);

const db = new DB();

// connection.then(() => {
//     return db.bulk_insert()
// }).then((result) => {
//     console.log(result)
// })


export let index = (req: Request, res: Response) => {
    res.send('hello world');
};

export let modify_data = (req: Request, res: Response) => {
    connection.then(() => {
        return db.modify(req.query.id, req.query.field, req.query.fieldValue)
    }).then((result) => {
        console.log(result)
    })
    res.header("Access-Control-Allow-Origin", "*");
    res.send('out')
}

export let add_data = (req: Request, res: Response) => {
    console.log('add');

    connection.then(() => {
        let artistValue = <Info_Artist>{ name: req.query.name, birth: req.query.birth, obit: req.query.obit, genre: req.query.genre, nation: req.query.nation }
        return db.create(artistValue)
    }).then((result) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(result)
    })
}

export let delete_data = (req: Request, res: Response) => {
    console.log(req.query.id);

    connection.then(() => {
        return db.delete(req.query.id)
    }).then((result) => {
        res.header("Access-Control-Allow-Origin", "*");
        // console.log(result)
        if (result.n === 1)
            res.send(true)
        else
            res.send(false)
    })
}

export let findAll = (req: Request, res: Response) => {

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
            res.send(false)
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.jsonp(result)
        }
    })

};
