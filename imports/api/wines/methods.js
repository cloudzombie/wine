import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Wines } from './wine.js';

export const remove = new ValidatedMethod({
    name: 'wines.remove',

    validate: null,

    run({ wineId }) {
        console.log("Wine: " + wineId);
        const wine = Wines.findOne(wineId);
        console.log(wine.name);
        Wines.remove(wineId);
    }
});


