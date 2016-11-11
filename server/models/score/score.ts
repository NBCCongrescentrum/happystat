import { mongoose } from "../../services/database";
import { Schema, Document, Model } from "mongoose";

export interface IScore extends Document {
    score: number;
    created_at: Date;
    location: {}
}

export interface IScoreModel {
    findAllByLocation(id: string): Promise<IScore>
}

const schema = new Schema({
    score: Number,
    create: {
        type: Date,
        "default": Date.now
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }
});

schema.static("findAllByLocation", (location: string) => {

    return Score
        .find({ location: location })
        .lean()
        .exec();
});

export type ScoreModel = Model<IScore> & IScoreModel;

export const Score: ScoreModel = <ScoreModel>mongoose.model<IScore>("Score", schema);