const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const chatSchema = new Schema({
    id_user: {
        type: String,
        required: true,
    },
    msg_sent: {
        type: String,
        required: true,
    }
})

chatSchema.plugin(normalize);

var Chats = mongoose.model('Chats', chatSchema);

module.exports = Chats;