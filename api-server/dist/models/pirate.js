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
    birthday: { type: Date, required: true },
    obit: { type: Date },
    genre: { type: String, required: true },
    nation: { type: String, required: true }
});
// pirateSchema.statics.bulkWrite = function (body, cb) {
// }
// const PirateModel = mongoose.model<Pirate>('Pirate', pirateSchema);
exports.ArtistModel = mongoose_1.default.model('Artist', ArtistSchema);
//# sourceMappingURL=pirate.js.map