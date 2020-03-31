import mongoose from 'mongoose';
import fishSchema from '../models/fishModels';

const Fish = mongoose.model('Fish', fishSchema);

export const getAllFish = (req, res) => {
  Fish.find({}, (err, fish) => {
    if (err) {
      res.send('an error occured while trying to get all fish');
    }
    res.send(fish);
  });
};

export const addFish = async (req, res) => {
  try {
    const fish = new Fish(req.body);
    await fish.save();
    return res.send(fish);
  } catch (err) {
    return res.send(err);
  }
};

export const updateFish = (req, res) => {
  Fish.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, fishUpdated) => {
    if (err) {
      res.send('an error occured while trying to get player');
    }
    res.json(fishUpdated);
  });
};

export const deleteFish = (req, res) => {
  Fish.remove({ _id: req.params.id }, err => {
    if (err) {
      res.send('oups une erreur est survenu en voulant supprimer cet article');
    }
    res.send('Le poisson à été supprimé !');
  });
};
