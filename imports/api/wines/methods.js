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

export const insert = new ValidatedMethod({
    name: 'wines.insert',
    
    validate: null,
    
    run({ wine }) {
        Wines.insert(wine);
    }
});


export const fixtureAddSomeWines = new ValidatedMethod({
   name: 'wines.fixtureAddSomeWines',

   validate: null,

   run() {
       console.log("Adding some wines ...");

       const data = [
           {
               name: 'Schlürf',
               notes: 'Sehr leckeres Tröpfchen aus der Pfalz. Ein schöner trockener Riesling, 2013.'
           },
           {
               name: 'Lecker',
               notes: 'Anbauregion:	D.O.Ca Rioja; Weingut:	Baron de Ley; Typus:	Rotwein; Rebsorte:	100% Tempranillo; Ausbau:	20 Monate in Barriques aus amerikanischer und 24 Monate auf der Flasche',

           },
           {
               name: 'Plörre',
               notes: 'Billiger Fusel vom Aldi. Weißwein; Müllert-Thurgau; 1,98€',
           },
       ];


       data.forEach((wine) => {
           Wines.insert({
               name: wine.name,
               notes: wine.notes,
           });
       });
   }
});


