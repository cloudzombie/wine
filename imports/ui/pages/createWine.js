import {Wine} from '../../api/wines/wine.js';

import './createWine.html';

Template.createWine.onRendered(function () {
    $.material.init();
    console.log("Template createWine rendered.")
});


Template.createWine.events({
    "click #btnAdd": function (event, template) {
        event.preventDefault();

        const name = template.find("#id_winename").value;
        const notes = template.find("#id_winenotes").value;

        if (name == "") {
            return;
        }

        const wine = new Wine({
            name: name,
            notes: notes,
            createdAt: new Date()
        });
        wine.save();

        // Clear form
        template.find("#id_winename").value = "";
        template.find("#id_winenotes").value = "";
        template.find("#id_winename").focus();
    }
});