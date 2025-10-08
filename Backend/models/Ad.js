import mongoose from "mongoose";

const adSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    fileUrl: { type: String },
    area: { type: String },
  },
  {
    timestamps: true, // ✅ creates createdAt & updatedAt with full date+time
  }
);

export default mongoose.model("Ad", adSchema);
