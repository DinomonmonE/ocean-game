namespace SpriteKind {
    export const Boss = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
    if (randint(0, 10) == 1) {
        game.splash("1")
    } else if (randint(0, 10) == 2) {
        game.splash("2")
    } else if (randint(0, 10) == 3) {
        game.splash("3")
    } else if (randint(0, 10) == 4) {
        game.splash("4")
    } else if (randint(0, 10) == 5) {
        game.splash("5")
    } else if (randint(0, 10) == 6) {
        game.splash("6")
    } else if (randint(0, 10) == 7) {
        game.splash("7")
    } else if (randint(0, 10) == 8) {
        game.splash("8")
    } else if (randint(0, 10) == 9) {
        game.splash("9")
    } else if (randint(0, 10) == 10) {
        game.splash("10")
    } else {
        game.splash("Hi, who ever is looking at the code, it's currently 3:30am")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
    if (randint(0, 10) == 1) {
        game.splash("1")
    } else if (randint(0, 10) == 2) {
        game.splash("2")
    } else if (randint(0, 10) == 3) {
        game.splash("3")
    } else if (randint(0, 10) == 4) {
        game.splash("4")
    } else if (randint(0, 10) == 5) {
        game.splash("5")
    } else if (randint(0, 10) == 6) {
        game.splash("6")
    } else if (randint(0, 10) == 7) {
        game.splash("7")
    } else if (randint(0, 10) == 8) {
        game.splash("8")
    } else if (randint(0, 10) == 9) {
        game.splash("9")
    } else if (randint(0, 10) == 10) {
        game.splash("10")
    } else {
        game.splash("Hi, who ever is looking at the code, it's currently 3:30am")
    }
})
let projectile: Sprite = null
info.setScore(0)
scene.setBackgroundImage(assets.image`myImage`)
let Fish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
controller.moveSprite(Fish, 100, 100)
let Bottle_1 = sprites.create(assets.image`Bottle 1`, SpriteKind.Enemy)
let Bottle_2 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .....7977777777.....
    .....7777777777.....
    ......66666666......
    ......99999999......
    .....9999999999.....
    .....9999999999.....
    .....9999999999.....
    .....7777777777.....
    .....7777777777.....
    .....7777777776.....
    .....7777777776.....
    ......76666666......
    ....................
    ....................
    `, SpriteKind.Enemy)
let Bottle_3 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........4eee........
    .......eeeeee.......
    .........cc.........
    .........4c.........
    ........4444........
    .......444444.......
    ......44444444......
    .....4444444444.....
    .....eeeeeeeeee.....
    .....eeeeeeeecc.....
    ......eeeeeecc......
    .......eccccc.......
    ....................
    ....................
    `, SpriteKind.Enemy)
let Bottle_4 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........dd55........
    ........5555........
    .........44.........
    ........dddd........
    ........dddd........
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    .......dddddd.......
    ........dddd........
    ........4444........
    ....................
    `, SpriteKind.Enemy)
let Bottle_5 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .........888........
    .........888........
    ......888888888.....
    ........fffff.......
    .......8888888......
    .......8998888......
    .......8988888......
    .......8888888......
    .......8888888......
    .......8888888......
    ......888888888.....
    ......fffffffff.....
    ....................
    ....................
    `, SpriteKind.Enemy)
Bottle_1.setPosition(randint(5, 160), 0)
Bottle_1.setVelocity(0, randint(1, 100))
Bottle_2.setPosition(0, 0)
Bottle_3.setPosition(0, 0)
Bottle_4.setPosition(0, 0)
Bottle_5.setPosition(0, 0)
animation.runImageAnimation(
Fish,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . c d d d d d c . . . 
    . . . . . . c c c c c d c . . . 
    . . . . . c 4 4 4 4 d c c . . . 
    . . . . c d 4 4 4 4 4 1 c . . . 
    . . . c 4 4 1 4 4 4 4 4 1 c . . 
    . . c 4 4 4 4 1 4 4 4 4 1 c c c 
    . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
    . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
    f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
    f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
    . f 4 4 4 4 1 4 4 4 4 c b c f f 
    . . f f f d 4 4 4 4 c d d c . . 
    . . . . . f f f f f c c c . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . c c 
    . . . c 4 d 4 4 4 4 4 1 c c 4 c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
    . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
    f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
    . f 4 4 4 4 1 c c 4 4 d f f . . 
    . . f f 4 d 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c . . . 
    . . . . . . . c c d d d d c . . 
    . . . . . c c c c c c d d c . . 
    . . . c c c 4 4 4 4 d c c c c c 
    . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
    . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
    f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
    f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
    f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
    . f 4 4 4 4 1 4 4 f 4 4 d f . . 
    . . f 4 4 1 4 c c 4 4 d f . . . 
    . . . f d 4 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `],
150,
true
)
game.onUpdateInterval(5000, function () {
    if (info.score() >= 10) {
        if (randint(1, 10) <= 5) {
            projectile = sprites.createProjectileFromSide(img`
                ..............fffcc.............
                ..............fcbddcc...........
                ...............fbbddcc..........
                ...............fcbbccf..........
                ..ccc.........ffccccccfffff.....
                ..cbbcc....fffcbbbbcbbbbbbbff...
                ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
                ...fbbdcfcccccbbbcbcbbffbbbbbbff
                ....fbbffcccccbbbbbcb1ff11bbbcbf
                ....fcbbcccccccbbbbb11111111bbbf
                ....fcccccccccccbbbb11cc33111bf.
                ...fcbbffbdbcccccbbb111c13cccf..
                ...fbbf..ccddddcfbbbc111c31cf...
                ..fbbf.....ccdccbbdbf111cccf....
                ..fff........ccbbdcfcccc........
                ..............fffff.............
                `, randint(10, 100), 0)
            projectile.setPosition(0, randint(0, 160))
            animation.runImageAnimation(
            projectile,
            [img`
                ..............fffcc.............
                ..............fcbddcc...........
                ...............fbbddcc..........
                ...............fcbbccf..........
                ..ccc.........ffccccccfffff.....
                ..cbbcc....fffcbbbbcbbbbbbbff...
                ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
                ...fbbdcfcccccbbbcbcbbffbbbbbbff
                ....fbbffcccccbbbbbcb1ff11bbbcbf
                ....fcbbcccccccbbbbb11111111bbbf
                ....fcccccccccccbbbb11cc33111bf.
                ...fcbbffbdbcccccbbb111c13cccf..
                ...fbbf..ccddddcfbbbc111c31cf...
                ..fbbf.....ccdccbbdbf111cccf....
                ..fff........ccbbdcfcccc........
                ..............fffff.............
                `,img`
                ..............fffcc.............
                ..............fbbddc............
                ...............fbbddc...........
                ccc............fcbbccf..........
                cbbcc.........ffccccccffffff....
                .cbbdc.....fffcbbbbbbbbbbbbbff..
                .fbbddc..ffcccbbbbcbcbbbbbbbbbff
                ..fbbdfffcccccbbbcbcbbffbbbbbcbf
                ..fcbbbcccccccbbbcbcb1ff1111bbbf
                ..fccbcccccccccbbbbbb11111111bf.
                .fcbbfffccccccccbbbb11cc33cccf..
                .fbbf...cbdbcccccbbb111c131cf...
                fbbf.....ccdddddfbbbc111c33f....
                fff........ccddfbbdbf1111ff.....
                .............cfbbdbfccccc.......
                ..............fffff.............
                `,img`
                ..............fffc..............
                ..............fbddcc............
                ..ccc.........ffbddbc...........
                ..cbbc.........fcbbccf..........
                ...cbdc.......ffccccccfffffff...
                ...fbdc....fffcbbbbbbbbbbbbbcff.
                ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
                ....fcdffcccccbbbcbcbbbffbbbbcbf
                ....fcbbccccccbbbcbcbbbff1111bbf
                ...fcbbccccccccbbbcbb11111111bf.
                ...fbbfffcccccccbbbb11bc33cccf..
                ..fbbf..cbdbcccccbbb111c131cf...
                ..fff....cbdddddccbbc111c33f....
                ..........ccbddccbbdf1111ff.....
                ............ccfbbbdfccccc.......
                ..............fffff.............
                `,img`
                ..............fffcc.............
                ..............fbbddc............
                ...............fbbddc...........
                ccc............fcbbccf..........
                cbbcc.........ffccccccffffff....
                .cbbdc.....fffcbbbbbbbbbbbbbff..
                .fbbddc..ffcccbbbbcbcbbbbbbbbbff
                ..fbbdfffcccccbbbcbcbbffbbbbbcbf
                ..fcbbbcccccccbbbcbcb1ff1111bbbf
                ..fccbcccccccccbbbbbb11111111bf.
                .fcbbfffccccccccbbbb11cc33cccf..
                .fbbf...cbdbcccccbbb111c131cf...
                fbbf.....ccdddddfbbbc111c33f....
                fff........ccddfbbdbf1111ff.....
                .............cfbbdbfccccc.......
                ..............fffff.............
                `],
            150,
            true
            )
        }
    }
})
forever(function () {
    if (info.score() == 5) {
        Bottle_2.setPosition(randint(5, 160), 0)
        Bottle_2.setVelocity(0, randint(50, 100))
        Bottle_3.setPosition(randint(5, 160), 0)
        Bottle_3.setVelocity(0, randint(50, 100))
        Bottle_4.setVelocity(0, randint(50, 100))
        Bottle_4.setPosition(randint(5, 160), 0)
        Bottle_5.setVelocity(0, randint(50, 100))
        Bottle_5.setPosition(randint(5, 160), 0)
        pauseUntil(() => info.score() == 6)
    }
    if (Fish.x > 160) {
        game.gameOver(false)
        if (randint(0, 10) == 1) {
            game.showLongText("", DialogLayout.Full)
        } else if (randint(0, 10) == 2) {
            game.splash("2")
        } else if (randint(0, 10) == 3) {
            game.splash("3")
        } else if (randint(0, 10) == 4) {
            game.splash("4")
        } else if (randint(0, 10) == 5) {
            game.splash("5")
        } else if (randint(0, 10) == 6) {
            game.splash("6")
        } else if (randint(0, 10) == 7) {
            game.splash("7")
        } else if (randint(0, 10) == 8) {
            game.splash("8")
        } else if (randint(0, 10) == 9) {
            game.splash("9")
        } else if (randint(0, 10) == 10) {
            game.splash("10")
        } else {
            game.splash("Hi, who ever is looking at the code, it's currently 3:30am")
        }
    }
    if (Fish.y > 120) {
        game.gameOver(false)
        if (randint(0, 10) == 1) {
            game.splash("1")
        } else if (randint(0, 10) == 2) {
            game.splash("2")
        } else if (randint(0, 10) == 3) {
            game.splash("3")
        } else if (randint(0, 10) == 4) {
            game.splash("4")
        } else if (randint(0, 10) == 5) {
            game.splash("5")
        } else if (randint(0, 10) == 6) {
            game.splash("6")
        } else if (randint(0, 10) == 7) {
            game.splash("7")
        } else if (randint(0, 10) == 8) {
            game.splash("8")
        } else if (randint(0, 10) == 9) {
            game.splash("9")
        } else if (randint(0, 10) == 10) {
            game.splash("10")
        } else {
            game.splash("Hi, who ever is looking at the code, it's currently 3:30am")
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Bottle_1.y > 120) {
        Bottle_1.setPosition(randint(0, 160), 0)
        Bottle_1.setVelocity(0, randint(1, 100))
        info.changeScoreBy(1)
    }
    if (info.score() >= 5) {
        if (Bottle_2.y > 120) {
            Bottle_2.setPosition(randint(0, 160), 0)
            Bottle_2.setVelocity(0, randint(1, 100))
            info.changeScoreBy(1)
        }
        if (Bottle_3.y > 120) {
            Bottle_3.setPosition(randint(0, 160), 0)
            Bottle_3.setVelocity(0, randint(1, 100))
            info.changeScoreBy(1)
        }
        if (Bottle_4.y > 120) {
            Bottle_4.setPosition(randint(0, 160), 0)
            Bottle_4.setVelocity(0, randint(1, 100))
            info.changeScoreBy(1)
        }
        if (Bottle_5.y > 120) {
            Bottle_5.setPosition(randint(0, 160), 0)
            Bottle_5.setVelocity(0, randint(1, 100))
            info.changeScoreBy(1)
        }
    }
})
