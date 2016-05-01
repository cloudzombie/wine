import './home.html';

import { fixtureAddSomeWines } from '../../api/wines/methods.js';

import '../components/winelist.js'


Template.welcome.onRendered(function() {
    $.material.init();
});


Template.welcome.events({
    'click button'(event, instance) {
        fixtureAddSomeWines.call();
    }
});