import { mongoose } from "../../services/database";
import { Schema, Document, Model, model } from "mongoose";

export interface ILocation extends Document {
    name: string;
    question: string;
}

const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    question: {
        type: String,
        required: true
    }
});

export type LocationModel = Model<ILocation> & ILocation;

export const Location: LocationModel = <LocationModel>mongoose.model<ILocation>("Location", schema);