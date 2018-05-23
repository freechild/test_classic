"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const artist_1 = require("./artist");
class DB {
    constructor() { }
    bulk_insert() {
        let arr = [
            { name: 'Ludwig van Beethoven', birth: '1770-12-17', obit: '1827-03-26', genre: 'classic', nation: 'Austria' },
            { name: 'Wolfgang Amadeus Mozart', birth: '1756-01-27', obit: '1791-12-05', genre: 'classic', nation: 'Austria' },
            { name: 'Johannes Brahms', birth: '1833-05-07', obit: '1897-04-03', genre: 'classic', nation: 'Germany' },
        ];
        artist_1.ArtistModel.insertMany(arr);
        return 'done';
    }
    read(query) {
        return artist_1.ArtistModel.find(query);
    }
    create(artist) {
        let p = new artist_1.ArtistModel(artist);
        return p.save();
    }
    delete(target_id) {
        console.log('id = > ' + target_id);
        return artist_1.ArtistModel.deleteOne({ _id: target_id });
    }
    size() {
        return artist_1.ArtistModel.count({});
    }
    findAll() {
        return artist_1.ArtistModel.find({});
    }
    modify(id, target, value) {
        let update = {};
        update[target] = value;
        // return ArtistModel.update({ _id: id }, { $set: { name: value } });
        return artist_1.ArtistModel.update({ _id: id }, { $set: update });
    }
    valueCheck(type, value) {
    }
}
exports.DB = DB;
//# sourceMappingURL=db.js.map