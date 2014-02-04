Game = require('./game');
Map = require('./map');
Repository = require('./repository');
describe('repository', function () {
    var repository = new Repository();
    beforeEach(function () {
        var map = new Map();
        var game1 = new Game(map);
        for (var i = 1; i < 4; i++) game1.addPlayer(i);
        var game2 = new Game(map);
        for (var i = 4; i < 7; i++) game2.addPlayer(i);
        repository.store(game1);
        repository.store(game2);
    });
    it('resolve', function () {
        var game1 = repository.resolveByUserId(1);
        expect(game1.players[0].id).toBe(1);
        expect(game1.players[1].id).toBe(2);
        expect(game1.players[2].id).toBe(3);
        var game2 = repository.resolveByUserId(4);
        expect(game2.players[0].id).toBe(4);
        expect(game2.players[1].id).toBe(5);
        expect(game2.players[2].id).toBe(6);
        expect(repository.resolveByUserId(7)).toBe(false);
    });
    it('delete', function () {
        expect(repository.deleteByUserId(1)).toBe(true);
        expect(repository.resolveByUserId(1)).toBe(false);
        expect(repository.resolveByUserId(2)).not.toBe(false);
        expect(repository.resolveByUserId(7)).toBe(false);
    });
});
