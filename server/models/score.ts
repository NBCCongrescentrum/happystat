import { mongoose } from "../services/database";
import { Schema, Document, Model } from "mongoose";

export interface IScore extends Document {
  score: number;
  created_at: Date;
}

export interface IScoreModel {
  getAll(): Promise<IScore>
}

const schema = new Schema({
  score: Number,
  create: {
      type: Date,
      "default": Date.now
  }
});

schema.static("getAll", () => {
  return Score
      .find()
      .lean()
      .exec();
});

export type ScoreModel = Model<IScore> & IScoreModel;

export const Score: ScoreModel = <ScoreModel>mongoose.model<IScore>("Score", schema);
