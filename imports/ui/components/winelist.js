import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';

import './winelist.html';

import { Wines, Wine } from '/imports/api/wines/wine.js';

import { remove } from '/imports/api/wines/methods.js';

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


Template.wineList.events({
    "click #deleteWine": function() {
        remove.call({wineId: this._id});
    }

});
