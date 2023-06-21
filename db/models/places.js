import mongoose from "mongoose";
const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: false },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  favorite: { type: String, required: false },
  description: { type: String, required: false },
  grill: { type: String, required: false },
  beatch: { type: String, required: false },
  camping: { type: String, required: false },
  shore: { type: String, required: false },
  boat: { type: String, required: false },
});
const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
