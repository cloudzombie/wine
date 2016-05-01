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


export const fixtureAddSomeWines = new ValidatedMethod({
   name: 'wines.fixtureAddSomeWines',

   validate: null,

   run() {
       console.log("Adding some wines ...");

       const data = [
           {
               name: 'Schlürf'
           },
           {
               name: 'Lecker'
           },
           {
               name: 'Plörre'
           },
       ];


       data.forEach((wine) => {
           const listId = Wines.insert({
               name: wine.name,
           });
       });
   }
});


