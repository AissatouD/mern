import { Schema } from 'mongoose';

const fishSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default: 'image non disponible'
  },
  desc: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['available', 'unavailable']
  }
});

export default fishSchema;
