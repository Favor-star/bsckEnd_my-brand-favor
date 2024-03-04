import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  storyTitle: {
    type: String,
    required: true,
  },
  storyContent: {
    type: String,
    required: true,
  },
  storyImageURL: {
    type: String,
    required: true,
  },
  storyCategory: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date().toString(),
  },
});
export default new mongoose.model("Story", storySchema);
