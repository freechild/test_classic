console.log('hello')
import mongoose from 'mongoose'
import { findAll } from '../controllers/home';
var Schema = mongoose.Schema;

export interface Info_Artist extends mongoose.Document {
    name: string;
    birth: string;
    obit: string;
    genre: string;
    nation: string;
};

const ArtistSchema = new Schema({
    name: { type: String, required: true },
    birth: { type: String, required: true },
    obit: { type: String },
    genre: { type: String, required: true },
    nation: { type: String, required: true }
})

export const ArtistModel = mongoose.model<Info_Artist>('Artist', ArtistSchema);
