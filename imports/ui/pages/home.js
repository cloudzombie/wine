import './home.html';


Template.welcome.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.welcome.onRendered(function() {
    $.material.init();
});

Template.welcome.helpers({
    counter() {
        return Template.instance().counter.get();
    }
});

Template.welcome.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    }
});