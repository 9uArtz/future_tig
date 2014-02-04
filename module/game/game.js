_ = require('underscore');

/**
 * @param {Map} map
 */
module.exports = function(map) {
    var self = this;

    this.players = [];
    this.turn = 0;
    this.map = map;

    var Player = require('./player');

    this.addPlayer = function(userId) {
        this.players.push(new Player(userId));
    };

    this.removePlayer = function(userId) {
        for (var i in this.players) {
            if (this.players[i].id == userId) {
                this.players.splice(i, 1);
                return true;
            }
        }
        return false;
    };

    this.changeTurn = function(){
        this.turn = (this.turn >= this.players.length - 1) ? 0 : this.turn + 1 ;
    };
};
