import { Wines } from '../wine.js';

Meteor.publish('wines', function allWines() {
    return Wines.find();
});
