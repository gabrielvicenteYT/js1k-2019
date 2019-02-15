I = c.createImageData(256, 256),
    I.data.fill(t = 256)

setInterval(_ => {
    for (i = ++t % 7; i < 256 * 256; i += 7)
        x = i % 256 - 128,
            y = i / 256 - 128,
            // http://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
            k = Math.max(Math.max(Math.abs(x - y), Math.abs(x + y)) - 99, Math.min(Math.abs(x - y), Math.abs(x + y))) % 27 < 20,
            v = Math.sin(x * Math.cos(t / 99) / 33 - y * Math.sin(t / 99) / 33 + y * Math.cos(t / 99) / 33 + x * Math.sin(t / 99) / 33)
            + Math.sin(y / 33)
            + Math.sin(x / 20)
            + Math.sin(Math.hypot(x + 99 * Math.cos(t / 33), y + 99 * Math.sin(t / 33)) / 20)
            + 22 * k,
            I.data[i * 4] = 127 * k + 127 * Math.cos(t / 30 + v),
            I.data[i * 4 + 1] = 127 * k + 127 * Math.cos(t / 10 + v * 2),
            I.data[i * 4 + 2] = 127 * k + 127 * Math.cos(t / 13 + v * 3)
    createImageBitmap(I).then(I => { // this is probably hugely wasteful, maybe find a better way?
        c.resetTransform()
        c.fillRect(0, 0, a.width, a.height)
        c.strokeStyle = 'white'

        const Y = t / 33; // yaw
        const P = t / 99; // pitch

        // front/back
        c.setTransform(
            Math.cos(Y),
            Math.sin(Y) * Math.sin(P),
            0,
            Math.cos(P),
            a.width / 2 + Math.sin(Y) * 128 * Math.sign(Math.cos(Y) * Math.cos(P)),
            a.height / 2 - Math.cos(Y) * Math.sin(P) * 128 * Math.sign(Math.cos(Y) * Math.cos(P)))
        c.drawImage(I, -128, -128)

        // left/right
        c.setTransform(
            -Math.sin(Y),
            Math.cos(Y) * Math.sin(P),
            0,
            Math.cos(P),
            a.width / 2 - Math.cos(Y) * 128 * Math.sign(Math.sin(Y) * Math.cos(P)),
            a.height / 2 - Math.sin(Y) * Math.sin(P) * 128 * Math.sign(Math.sin(Y) * Math.cos(P)))
        c.drawImage(I, -128, -128)

        // top/bottom
        c.setTransform(
            Math.cos(Y),
            Math.sin(Y) * Math.sin(P),
            Math.sin(Y),
            -Math.cos(Y) * Math.sin(P),
            a.width / 2,
            a.height / 2 + Math.cos(P) * 128 * Math.sign(Math.sin(P)))
        c.drawImage(I, -128, -128)
    })
}, 33)