Game = require('./game');
Map = require('./map');
describe('game', function () {
    var game;
    beforeEach(function () {
        var map = new Map();
        game = new Game(map);
        for (var i = 1; i < 4; i++) game.addPlayer(i);
    });
    it('change turn', function () {
        game.changeTurn();
        expect(game.turn).toBe(1);
        game.changeTurn();
        expect(game.turn).toBe(2);
        game.changeTurn();
        expect(game.turn).toBe(0);
    });
    it('remove player', function () {
        expect(game.removePlayer(2)).toBe(true);
        expect(game.players.length).toBe(2);
    });
});
