import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/appLayout.js';

import '../../ui/pages/home.js';
import '../../ui/pages/createWine.js';

FlowRouter.route('/', {
    name: 'home',

    action: function () {
        BlazeLayout.render("appLayout", {content: "welcome"});
    }
});

FlowRouter.route('/createwine', {
    name: 'createwine',

    action: function () {
        BlazeLayout.render("appLayout", {content: "createWine"});

    }
})