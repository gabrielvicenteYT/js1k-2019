a.style.width = a.style.height = '32em',
    I = c.createImageData(256, 256),
    I.data.fill(t = 256)

setInterval(_ => {
    for (i = ++t % 7; i < 256 * 256; i += 7)
        x = i % 256 - 127,
            y = i / 256 - 127,
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
    createImageBitmap(I).then(I =>
        c.resetTransform(),
        c.fillRect(0, 0, 256, 256),
        c.setTransform(
            Math.cos(t / 33) * (Math.sin(t / 33) / 2 + 1),
            -Math.sin(t / 33) * (Math.sin(t / 33) / 2 + 1),
            Math.sin(t / 33) * (Math.sin(t / 33) / 2 + 1),
            Math.cos(t / 33) * (Math.sin(t / 33) / 2 + 1),
            127,
            127),
        c.drawImage(I, -127, -127)
    )
}, 33)