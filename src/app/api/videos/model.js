import { nanoid } from 'nanoid';

const mongoose = require('mongoose');

const { Schema } = mongoose;
const VideosSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  name: String,
  date: String,
  library: {
    type: String,
    enum: ['react', 'vue', 'angular'],
    default: 'react',
  },
  link: String,
  mocked: Boolean,
  coding: Boolean,
  grade: String,

}, { timestamps: true });

const Videos = mongoose.model('Videos', VideosSchema);

module.exports = Videos;
