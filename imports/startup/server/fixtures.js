import { Wines } from '../../api/wines/wine.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
    console.log("Startup");

    if (Wines.find().count() === 0) {
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

