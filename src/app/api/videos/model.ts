import { Schema, model, models } from 'mongoose';
import { ApiVideos, Libraries } from '@/global';

const VideosSchema = new Schema<ApiVideos>({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  date: { type: String, required: true },
  library: {
    type: String,
    enum: Object.keys(Libraries),
    default: 'react',
  },
  ylink: { type: String, required: true },
  isMocked: { type: Boolean, required: true },
  hasCoding: { type: Boolean, required: true },

}, { timestamps: true });

const Videos = models.Videos || model<ApiVideos>('Videos', VideosSchema);

export default Videos;
