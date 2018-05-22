"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('hello');
const mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
;
const ArtistSchema = new Schema({
    name: { type: String, required: true },
    birth: { type: String, required: true },
    obit: { type: String },
    genre: { type: String, required: true },
    nation: { type: String, required: true }
});
exports.ArtistModel = mongoose_1.default.model('Artist', ArtistSchema);
//# sourceMappingURL=artist.js.map