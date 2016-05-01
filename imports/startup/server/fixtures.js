import { Wines } from '../../api/wines/wine.js';
import { fixtureAddSomeWines } from '../../api/wines/methods.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
    console.log("Startup");

    if (Wines.find().count() === 0) {
        fixtureAddSomeWines.call();
    }
});

