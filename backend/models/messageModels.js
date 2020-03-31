import { Schema } from 'mongoose';

const MessageSchema = new Schema({
  msg: {
    type: String,
    required: true
  },
  userName: { type: Schema.Type.objectId, ref: 'User' }
});

export default MessageSchema;
