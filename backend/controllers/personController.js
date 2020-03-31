import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import moment from 'moment';
import Person from '../models/personModels';

export const signUp = (req, res) => {
  let person = new Person(req.body);
  person.save((err, savedPerson) => {
    if (err) {
      res.send(err);
    }
    res.json(savedPerson);
  });
};

export const getAllPerson = (req, res) => {
  Person.find({}, (err, person) => {
    if (err) {
      res.send('an error occured while trying to get person');
    }
    res.send(person);
  });
};

export const login = async(req,res) => {

  //1 check if email exist
  const person = await Person.findOne({ email: req.body.email });

  //2 compare password
  if(!person) {
    return res.send('this user does not exist');
  }

  const password = req.body.paswword;
  bcrypt.compare(password, person.paswword, function(error, sucess){
    if(sucess){
      const payload = {
        exp: moment.add(1, 'hour').unix(),
        iat: moment.unix(),
        iss: person.id
      };

      let token = jwt.encode(payload, process.env.TOKEN_SECRET);
      res.json({
        firstName: person.firstName,
        lastName: person.lastName,
        token: `Bearer ${token}`,
        expiration: moment().add(1, 'hour').format('YYY-MM-DD HH:mm')
      });
    }
    res.send('this email and password combination is incorrect');
  });
};
