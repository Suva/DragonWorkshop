const name = 'Mister Dark';

//////////////////////////////////////////

const service = require('esticade')(name)
const solver = require('mugloar-solver')

const games = {}

function addGamePiece(gameId, piece) {
    let game = games[gameId]

    if (!game) {
        game = {}
    }

    game = {...game, ...piece}
    games[gameId] = game

    if (game.knight && game.weather) {
        console.log("We have game data!")
        let dragon = solver.solve(game.knight, game.weather);
        service.emit("Dragon Appears", {gameId, dragon})
    }
}

service.on('Knight Spotted', ev => {
    try {
        const {gameId, knight} = ev.body
        console.log({gameId, knight: knight.name})
        addGamePiece(gameId, {knight})
    } catch (err) {
        console.log(err)
    }
})

service.on('Weather Report', ev => {
    try {
        const {gameId, code: weather} = ev.body
        console.log({gameId, weather})
        addGamePiece(gameId, {weather})
    } catch (err) {
        console.log(err)
    }
})

service.on('Victory', (ev) => {
    console.log("Victory", ev.body.player)
})

service.on('Defeat', (ev) => {
    console.log("Defeat", ev.body.player)
})