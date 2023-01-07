const io = require('socket.io')(4201, {
    cors: {
        origin: ["http://localhost:4200"]
    }
});
io.on('connection', client => {
    client.on('connected', () => {
        console.log(`Poloczono z ${client.id}`)
    })

    client.emit('alerts', { "userId":2, "userName":"TEST_HUMAN_5", "limit_percent": 100, "zone_id":"638730a8c3d82bc4b28d9308", "zone_name":"WANNA_1", "type": "exposure_alert", "timeEnter":1647585422.26, "timeExit":null })
    client.emit('alerts', { "userId":2, "userName":"TEST_HUMAN_5565675869768979", "limit_percent": 100, "zone_id":"638730a8c3d82bc4b28d9308", "zone_name":"WANNA_1", "type": "exposure_alert", "timeEnter":1647585422.26, "timeExit":null })
    client.emit('alerts', { "userId":2, "userName": "Zbigniew", "limit_percent": 100, "type": "exposure_alert", "zoneId": "638730a8c3d82bc4b28d9308", "zone_name": "WANNA_636", "timeEnter": 1671179184.48, "timeExit": null })
});
