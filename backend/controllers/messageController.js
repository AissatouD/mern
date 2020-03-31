import mongoose from 'mongoose';
import { default as MessageSchema, default as UserSchema } from '../models/userModels';


const Message = mongoose.model('Message', MessageSchema);

const User = mongoose.model('User', UserSchema);

export const add = async(req, res) => {
  let user= await User.findOne({ userName: req.body.userName });
  console.log('user: ', user);

  if(!user) {

    user= new User ({ userName: req.body.userName});
    console.log(user);
  }
  var message = new Message ({ msg:req.body.msg});
  await message.save();

  user.messages.push(message);
  user = await user.save();

  res.send(user);
};

