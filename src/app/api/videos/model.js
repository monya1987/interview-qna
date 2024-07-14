// import { nanoid } from 'nanoid';

const mongoose = require('mongoose');

const { Schema } = mongoose;
const VideosSchema = new Schema({
  name: String,
  date: String,
  // library: {
  //   type: String,
  //   enum: ['react', 'vue', 'angular'],
  //   default: 'react',
  // },
  ylink: String,
  isMocked: Boolean,
  hasCoding: Boolean,
  // grade: String,

}, { timestamps: true });

const Videos = mongoose.model('Videos', VideosSchema);

module.exports = Videos;
