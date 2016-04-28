import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/appLayout.js';

import '../../ui/pages/home.js';


FlowRouter.route('/', {
   action: function() {
       BlazeLayout.render("appLayout", {content: "welcome"});
   }
});