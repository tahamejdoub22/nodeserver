const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    materielName: String,
    matrielImage: String,
    description:String,
    status:{
    type: 'string',
    required: true,
    default: ["Recycled","waiting"],

   
},
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
    },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    
    addedAt: {
        type: Date
    }

});
module.exports = mongoose.model('Materiel', materialSchema);
