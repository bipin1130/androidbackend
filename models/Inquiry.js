var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let InquirySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    imageName: {
        type: String,
        default: ''
    },
    solution: {
        type: String,
        required: true
    }
    
},
    {
    timestamps: true
    });

var Inquiry= mongoose.model('Inquiry', InquirySchema);
module.exports = Inquiry;