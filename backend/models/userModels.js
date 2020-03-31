import { Schema } from 'mongoose';

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

export default UserSchema;