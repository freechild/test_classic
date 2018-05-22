import * as mongoose from 'mongoose';
import { Info_Artist, ArtistModel } from './artist';

export class DB {
    constructor() { }

    bulk_insert() {
        let arr = [
            <Info_Artist>{ name: 'Ludwig van Beethoven', birth: '1770-12-17', obit: '1827-03-26', genre: 'classic', nation: 'Austria' },
            <Info_Artist>{ name: 'Wolfgang Amadeus Mozart', birth: '1756-01-27', obit: '1791-12-05', genre: 'classic', nation: 'Austria' },
            <Info_Artist>{ name: 'Johannes Brahms', birth: '1833-05-07', obit: '1897-04-03', genre: 'classic', nation: 'Germany' },
        ];

        ArtistModel.insertMany(arr)
        return 'done';
    }

    read(query: any): mongoose.DocumentQuery<Info_Artist[], Info_Artist> {
        return ArtistModel.find(query);
    }

    create(artist: Info_Artist): Promise<Info_Artist> {
        let p = new ArtistModel(artist);
        return p.save();
    }

    delete(target_id: string): any {
        console.log('id = > ' + target_id);
        return ArtistModel.deleteOne({ _id: target_id });
    }
    size(): any {
        return ArtistModel.count({});
        // ArtistModel.count({}, (err, count) => {
        //     return count
        // }).then((result) => {
        //     console.log('2 = ' + result)
        //     return result;
        // })
    }
    findAll(): any {
        return ArtistModel.find({});
    }

    modify(id: any, target: string, value: any): any {
        console.log(value)
        let update = {}
        update[target] = value;
        // return ArtistModel.update({ _id: id }, { $set: { name: value } });
        return ArtistModel.update({ _id: id }, { $set: update });
    }

    valueCheck(type: string, value: any) {

    }
}