function DOG_GAME () {
    mySprite4 = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
}
function CHARACTER_SELECT () {
    if (controller.A.isPressed()) {
        pause(100)
        DOG_GAME()
        sprites.destroy(CHARACTER_SELECT_TEXT)
        sprites.destroy(DOG)
        sprites.destroy(B_BUTTON)
        sprites.destroy(CAT)
        sprites.destroy(A_BUTTON)
    } else {
    	
    }
    DOG = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
    DOG.setPosition(35, 85)
    DOG.setScale(2.5, ScaleAnchor.Middle)
    CAT = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
    CAT.setPosition(125, 85)
    CAT.setScale(2.5, ScaleAnchor.Middle)
    animation.runImageAnimation(
    CAT,
    [img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e b f b . 
        f d d f d d f d d f f d f . 
        f b d d b b d d 2 b f d f . 
        . f 2 2 2 2 2 2 d b d b f . 
        . f d d d d d d d f f f . . 
        . f d b d f f f d f . . . . 
        . . f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e b f b . 
        f d d f d d f d d f f d f . 
        f b d d b b d d 2 b f d f . 
        . f 2 2 2 2 2 2 d b d b f . 
        . f d d d d d d d f f f . . 
        . f d b d f f f d f . . . . 
        . . f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    DOG,
    [img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    500,
    true
    )
    A_BUTTON = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 4 4 4 4 4 4 4 e . . . . 
        . . e 4 d d d d d d d d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 4 4 4 4 e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 d d d d d d d d e . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    B_BUTTON = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 4 4 4 4 4 4 4 e . . . . 
        . . e 4 d d d d d d d d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e d d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 d d d d d d d d e . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    A_BUTTON,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 4 4 4 4 4 4 4 e . . . . 
        . . e 4 d d d d d d d d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 4 4 4 4 e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 d d d d d d d d e . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 4 4 4 4 4 4 4 e . . . . 
        . . e 4 d d d d d d d d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 4 4 4 4 e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 d d d d d d d d e . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 4 4 4 4 4 4 4 e . . . . 
        . . e 4 d d d d d d d d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 4 4 4 4 e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 d d d d d d d d e . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    A_BUTTON.setPosition(35, 110)
    animation.runImageAnimation(
    B_BUTTON,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 4 4 4 4 4 4 4 e . . . . 
        . . e 4 d d d d d d d d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e d d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 d d d d d d d d e . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 4 4 4 4 4 4 4 e . . . . 
        . . e 4 d d d d d d d d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e d d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 d d d d d d d d e . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 4 4 4 4 4 4 4 e . . . . 
        . . e 4 d d d d d d d d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e d d e . . . 
        . . e 4 e 4 d d d d e d e . . . 
        . . e 4 e e e e e e e d e . . . 
        . . e 4 d d d d d d d d e . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    B_BUTTON.setPosition(125, 110)
    CHARACTER_SELECT_TEXT = sprites.create(img`
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ..eeeee.........................................................................
        ..e.....e.e.eee.eee.eee.eee.eee.eee.eee.....eee.eee.e...eee.eee.eee.eee.eee.....
        ..e.....e.e.e.e.e...e.e.e....e..e...e.......e...e...e...e...e....e..e...e.......
        ..e.....eee.eee.e...eee.e....e..eee.e.......eee.eee.e...eee.e....e..eee.e.......
        ..e.....e.e.e.e.e...e.e.e....e..e...e.........e.e...e...e...e....e..e...e.......
        ..eeeee.e.e.e.e.e...e.e.eee..e..eee.e.......eee.eee.eee.eee.eee..e..eee.e.......
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        `, SpriteKind.Player)
    mySprite3 = sprites.create(img`
        ............................................................
        ............................................................
        ...33.......................................................
        ..3..333333......................................333...333..
        .3..3.............................................3.....3...
        .3..3.............................................3.....3...
        3....3............................................3.....3...
        3....3............................................3.....3...
        3....3............................................3.....3...
        3....3............................................3.....3...
        3....3.3333.3...3.3333.333..3333.333.333.3.3......3.....3...
        3....3.3..3.33.33.3..3.3....3..3..3..3...3.3......3.....3...
        .3...3.3333.3.3.3.3333.3..3.3..3..3..3...333.333..3.....3...
        .3333..3..3.3...3.3..3.3333.3333..3..333.3.3......3333333...
        ............................................................
        ............................................................
        `, SpriteKind.Player)
    mySprite3.setPosition(80, 20)
    mySprite3.setScale(1.75, ScaleAnchor.Middle)
}
function CAT_GAME () {
	
}
function LOADING_INTRO () {
    scene.setBackgroundColor(13)
    mySprite = sprites.create(img`
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ...eeee...e..e.e....eeeee.e..e..e......e
        ...e...e...ee..e....e...e.ee.e..e......e
        ...e...e....e..e....e...e.e.ee..ee....e.
        ...e...e...e...e....eeeee.e..e...e.ee.e.
        ...e...e...e...e....e...e.e..e...eeeeee.
        ...e...e..e....e....e...e.e..e....eeee..
        ...eeee...e....eeee.e...e.e..e....e..e..
        ........................................
        ........................................
        ........................................
        ........................................
        `, SpriteKind.Player)
    pause(3000)
    sprites.destroy(mySprite)
    mySprite2 = sprites.create(img`
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ..eeeee.e....e....e...eee..eeeee..e.e.e.
        ..e.....e....e....e..e...e...e....e.e.e.
        ..e.....e....e....e..e...e...e....e.e.e.
        ..eeeee.e....e....e..e...e...e....e.e.e.
        ..e.....e....e....e..e...e...e....e.e.e.
        ..e.....e....e....e..e...e...e....e.e.e.
        ..eeeee.eeee.eeee.e...eee....e....eeeee.
        ........................................
        ........................................
        ........................................
        ........................................
        `, SpriteKind.Player)
    pause(3000)
    sprites.destroy(mySprite)
    sprites.destroy(mySprite2)
    mySprite3 = sprites.create(img`
        ............................................................
        ............................................................
        ...33.......................................................
        ..3..333333......................................333...333..
        .3..3.............................................3.....3...
        .3..3.............................................3.....3...
        3....3............................................3.....3...
        3....3............................................3.....3...
        3....3............................................3.....3...
        3....3............................................3.....3...
        3....3.3333.3...3.3333.333..3333.333.333.3.3......3.....3...
        3....3.3..3.33.33.3..3.3....3..3..3..3...3.3......3.....3...
        .3...3.3333.3.3.3.3333.3..3.3..3..3..3...333.333..3.....3...
        .3333..3..3.3...3.3..3.3333.3333..3..333.3.3......3333333...
        ............................................................
        ............................................................
        `, SpriteKind.Player)
    mySprite3.setScale(2.5, ScaleAnchor.Middle)
    pause(3000)
    sprites.destroy(mySprite)
    sprites.destroy(mySprite3)
    sprites.destroy(mySprite2)
    CHARACTER_SELECT()
}
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mySprite3: Sprite = null
let A_BUTTON: Sprite = null
let CAT: Sprite = null
let B_BUTTON: Sprite = null
let DOG: Sprite = null
let CHARACTER_SELECT_TEXT: Sprite = null
let mySprite4: Sprite = null
LOADING_INTRO()
CHARACTER_SELECT()
