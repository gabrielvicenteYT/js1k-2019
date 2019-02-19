n = document.createElement`canvas`
o = n.getContext`2d`
n.width = n.height = 256

for (t = 12; --t; o.stroke())
    o.strokeStyle = t & 1 ? '#000' : '#fff',
        o.lineWidth = (t + (t + 1 >> 1)) * 14.14,
        o.beginPath(),
        o.moveTo(78 - (t + (t + 1 >> 1)) * 5, 78 - (t + (t + 1 >> 1)) * 5),
        o.lineTo(178 + (t + (t + 1 >> 1)) * 5, 178 + (t + (t + 1 >> 1)) * 5),
        o.moveTo(78 - (t + (t + 1 >> 1)) * 5, 178 + (t + (t + 1 >> 1)) * 5),
        o.lineTo(178 + (t + (t + 1 >> 1)) * 5, 78 - (t + (t + 1 >> 1)) * 5)


setInterval(_ => {
    t++
    c.resetTransform()
    c.fillRect(c.globalAlpha = 1, 0, 512, 512)

    // front/back
    c.setTransform(
        Math.cos(t / 33 /*yaw*/),
        Math.sin(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        0,
        Math.cos(t / 99 /*pitch*/),
        256 + Math.sin(t / 33 /*yaw*/) * Math.sign(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128,
        256 - Math.cos(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/) * Math.sign(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128)
    c.globalAlpha = Math.abs(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/))
    c.drawImage(n, -128, -128)

    // left/right
    c.setTransform(
        Math.sin(t / 33 /*yaw*/),
        -Math.cos(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        0,
        Math.cos(t / 99 /*pitch*/),
        256 - Math.cos(t / 33 /*yaw*/) * Math.sign(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128,
        256 - Math.sin(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/) * Math.sign(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128)
    c.globalAlpha = Math.abs(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/))
    c.drawImage(n, -128, -128)

    // top/bottom
    c.setTransform(
        Math.cos(t / 33 /*yaw*/),
        Math.sin(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        -Math.sin(t / 33 /*yaw*/),
        Math.cos(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        256,
        256 + Math.cos(t / 99 /*pitch*/) * Math.sign(Math.sin(t / 99 /*pitch*/)) * 128)
    c.globalAlpha = Math.abs(Math.sin(t / 99 /*pitch*/))
    c.drawImage(n, -128, -128)
}, 33)