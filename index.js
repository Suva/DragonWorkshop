const name = '';
const service = require('esticade')(name)

service.on('KnightSpotted', ev => {
    const {gameId, knight} = ev.body
    // service.emit("DragonAppears", {gameId, dragon})
})

service.on('WeatherReport', ev => {
    const {gameId, code} = ev.body
})

service.on('Victory', ev => { console.log("Victory", ev.body.player) })
service.on('Defeat', ev => { console.log("Defeat", ev.body.player) })

