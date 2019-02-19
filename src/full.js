t = setInterval(_ => {
    t++
    c.resetTransform()
    c.fillStyle = '#000'
    c.fillRect(0, 0, 512, 512)

    // front/back
    c.setTransform(
        Math.cos(t / 33 /*yaw*/),
        Math.sin(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        0,
        Math.cos(t / 99 /*pitch*/),
        256 + Math.sin(t / 33 /*yaw*/) * Math.sign(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128,
        256 - Math.cos(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/) * Math.sign(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128)
    c.fillStyle = 'rgb(' + ~~Math.abs(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/) * 255) + ',' + ~~Math.abs(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/) * 255) + ',' + ~~Math.abs(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/) * 255) + ')'
    c.fillRect(-128, -128, 256, 256)

    // left/right
    c.setTransform(
        Math.sin(t / 33 /*yaw*/),
        -Math.cos(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        0,
        Math.cos(t / 99 /*pitch*/),
        256 - Math.cos(t / 33 /*yaw*/) * Math.sign(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128,
        256 - Math.sin(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/) * Math.sign(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128)
        c.fillStyle = 'rgb(' + ~~Math.abs(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/) * 255) + ',' + ~~Math.abs(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/) * 255) + ',' + ~~Math.abs(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/) * 255) + ')'
    c.fillRect(-128, -128, 256, 256)

    // top/bottom
    c.setTransform(
        Math.cos(t / 33 /*yaw*/),
        Math.sin(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        -Math.sin(t / 33 /*yaw*/),
        Math.cos(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        256,
        256 + Math.cos(t / 99 /*pitch*/) * Math.sign(Math.sin(t / 99 /*pitch*/)) * 128)
        c.fillStyle = 'rgb(' + ~~Math.abs(Math.sin(t / 99 /*pitch*/) * 255) + ',' + ~~Math.abs(Math.sin(t / 99 /*pitch*/) * 255) + ',' + ~~Math.abs(Math.sin(t / 99 /*pitch*/) * 255) + ')'
    c.fillRect(-128, -128, 256, 256)
}, 33)