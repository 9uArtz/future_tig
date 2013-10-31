_ = require('underscore');

module.exports = {
    numOfPlayer: 5,
    chats: {},

    /*
     * @param {Integer} chatId
     * @param {Integer} userId
     * @param {String}  userName
     */
    add: function(chatId, userId, userName) {
        if (this.chats[chatId].length < this.numOfPlayer) {
            this.chats[chatId][userId] = {name: userName, state: false};
            return true;
        } else {
            return false;
        }
    },

    /*
     * @param {Integer} chatId
     */
    get: function(chatId) {
        return this.chats[chatId];
    },

    /*
     * @param {Integer} chatId
     * @param {Integer} userId
     * @param {boolean} state
     */
    changeUserState: function(chatId, userId, state) {
        if (this.chats[chatId] || this.chats[chatId][userId]) {
            this.chats[chatId][userId].state = state;
            return true;
        } else {
            return false;
        }
    }
};
