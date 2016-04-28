import './winelist.html';

import { Wines, Wine } from '/imports/api/wines/wine.js';

Template.wineList.onCreated(function() {
   this.subscribe('wines');
});

Template.wineList.onRendered(function() {
    $.material.init();
});

Template.wineList.helpers({
   wines: function() {
       var wines = Wines.find().fetch();
       console.log(wines);
       return wines;
   }
});
