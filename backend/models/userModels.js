import { Schema } from 'mongoose';

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  message: [{type: Schema.Types.ObjectId, ref: 'message'}]
});

export default UserSchema;