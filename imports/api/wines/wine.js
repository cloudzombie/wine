
export const Wines = new Mongo.Collection("wines",
    {
        transform: function (doc) {
            return new Wine(doc);
        }
    }
);


export class Wine {
    constructor(source) {   // constructs obj from Mongo ID or Mongo document
        if (! source)
            return;

        if (typeof source === 'string') {   // we may have an ID here.
            source = Wines.findOne(source);
        }
        if (typeof source === 'object') { // inject class methods in plain collection document
            _.extend(this, source);
        }
    }
};
