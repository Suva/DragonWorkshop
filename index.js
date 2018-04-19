const name = '';
const service = require('esticade')(name);

service.on('Knight Spotted', ev => {
    const {gameId, knight} = ev.body;
    // service.emit("Dragon Appears", {gameId, dragon});
});

/**************
 * Other events:
 * - Weather Report
 * - Victory
 * - Defeat
 * - Already Defeated
 */

