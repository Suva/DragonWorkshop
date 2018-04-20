const db = require('./db')('Jaan Pullerits', '')
const esticade = require('esticade')('Jaan Pullerits Event Recorder')

async function run() {
    let events = await db.collection('events')

    esticade.on('Victory', recordEvent)
    esticade.on('Defeat', recordEvent)

    function recordEvent(event) {
        console.log('Recoding event', event.name, event.body.player)
        event.time = new Date().toISOString()
        events.insert(event)
    }
}

run()