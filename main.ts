namespace SpriteKind {
    export const Shop_Keeper = SpriteKind.create()
    export const Fish = SpriteKind.create()
    export const Shop = SpriteKind.create()
    export const boat = SpriteKind.create()
}
function boatfishing () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    if (boattype == 1) {
        scene.setBackgroundImage(assets.image`The lake`)
        tiles.setCurrentTilemap(tilemap`level`)
        lake = 1
        if (playertype == 0) {
            Wooden_Row_Boat = sprites.create(assets.image`woodenboatman`, SpriteKind.boat)
        }
        if (playertype == 1) {
            Wooden_Row_Boat = sprites.create(assets.image`woodenboatmangb`, SpriteKind.boat)
        }
        if (playertype == 2) {
            Wooden_Row_Boat = sprites.create(assets.image`woodenboatmanB`, SpriteKind.boat)
        }
        if (playertype == 3) {
            Wooden_Row_Boat = sprites.create(assets.image`woodenboatmang`, SpriteKind.boat)
        }
        scaling.scaleByPercent(Wooden_Row_Boat, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        Wooden_Row_Boat.setPosition(105, 150)
        Wooden_Row_Boat.setStayInScreen(true)
        catchofthedaay.push(7)
        catchofthedaay.push(8)
    }
    if (boattype == 2) {
        scene.setBackgroundImage(assets.image`endday`)
        tiles.setCurrentTilemap(tilemap`level`)
        lake = 2
        if (playertype == 0) {
            Motorized_Boat = sprites.create(assets.image`raftboy1`, SpriteKind.boat)
        }
        if (playertype == 1) {
            Motorized_Boat = sprites.create(assets.image`raftgirl1`, SpriteKind.boat)
        }
        if (playertype == 2) {
            Motorized_Boat = sprites.create(assets.image`raftboy2`, SpriteKind.boat)
        }
        if (playertype == 3) {
            Motorized_Boat = sprites.create(assets.image`raftgirl2`, SpriteKind.boat)
        }
        scaling.scaleByPercent(Motorized_Boat, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        Motorized_Boat.setPosition(100, 150)
        Motorized_Boat.setStayInScreen(true)
        catchofthedaay.push(9)
        catchofthedaay.push(10)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    dino.setImage(assets.image`Dinoright`)
    animation.runImageAnimation(
    dino,
    assets.animation`myAnimright`,
    200,
    true
    )
    dino.setVelocity(50, 0)
    dino.setFlag(SpriteFlag.DestroyOnWall, true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playertype == 0) {
        mySprite.setImage(assets.image`Player`)
    }
    if (playertype == 1) {
        mySprite.setImage(assets.image`PlayerGb`)
    }
    if (playertype == 2) {
        mySprite.setImage(assets.image`PlayerB`)
    }
    if (playertype == 3) {
        mySprite.setImage(assets.image`PlayerG`)
    }
})
function shop () {
    controller.moveSprite(mySprite, 0, 0)
    story.spriteSayText(Shop_Keeper2, "Og sell gear. What you buy?")
    story.showPlayerChoices("Bye", "Snagless fishing rod ($300)", "Sure catch fishing rod ($500)", "More Options")
    if (story.checkLastAnswer("Bye")) {
        controller.moveSprite(mySprite, 100, 0)
        story.spriteSayText(Shop_Keeper2, "Ugh", 15)
    } else if (story.checkLastAnswer("Snagless fishing rod ($300)")) {
        if (info.score() < 0) {
            story.spriteSayText(Shop_Keeper2, "Sorry, you no have money for that.", 2)
            music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
            shop()
            controller.moveSprite(mySprite, 100, 0)
        } else if (info.score() >= 0) {
            info.changeScoreBy(0)
            story.printText("You get snagless rod!", 170, 90, 15)
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
            controller.moveSprite(mySprite, 100, 0)
            rodtype = 1
        }
    } else if (story.checkLastAnswer("Sure catch fishing rod ($500)")) {
        if (info.score() < 0) {
            story.spriteSayText(Shop_Keeper2, "Sorry, you no have money for that.", 2)
            music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
            shop()
        } else if (info.score() >= 0) {
            info.changeScoreBy(0)
            story.printText("You get sure catch rod!", 170, 90, 15)
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
            controller.moveSprite(mySprite, 100, 0)
            rodtype = 2
        } else {
            if (story.checkLastAnswer("Bye")) {
                controller.moveSprite(mySprite, 100, 0)
                story.spriteSayText(Shop_Keeper2, "Ugh!", 15)
            }
        }
    } else if (story.checkLastAnswer("More Options")) {
        story.showPlayerChoices("Monster catch fishing rod ($700)", "Wooden row boat ($800)", "Big raft ($1,500)", "Bye")
        if (story.checkLastAnswer("Monster catch fishing rod ($700)")) {
            if (info.score() < 0) {
                story.spriteSayText(Shop_Keeper2, "Sorry, you no have money for that.", 2)
                music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
                shop()
            } else if (info.score() >= 0) {
                info.changeScoreBy(0)
                story.printText("You get monster catch rod!", 170, 90, 15)
                music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
                controller.moveSprite(mySprite, 100, 0)
                rodtype = 3
            }
        }
        if (story.checkLastAnswer("Wooden row boat ($800)")) {
            if (info.score() < 0) {
                story.spriteSayText(Shop_Keeper2, "Sorry, you no have money for that.", 2)
                music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
                shop()
            } else if (info.score() >= 0) {
                info.changeScoreBy(0)
                story.printText("You get row boat!", 170, 90, 15)
                music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
                controller.moveSprite(mySprite, 100, 0)
                boattype = 1
            }
        }
        if (story.checkLastAnswer("Big raft ($1,500)")) {
            if (info.score() < 0) {
                story.spriteSayText(Shop_Keeper2, "Sorry, you no have money for that.", 2)
                music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
                shop()
            } else if (info.score() >= 0) {
                info.changeScoreBy(0)
                story.printText("You get big raft!", 170, 90, 15)
                music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
                controller.moveSprite(mySprite, 100, 0)
                boattype = 2
            }
        }
        if (story.checkLastAnswer("Bye")) {
            controller.moveSprite(mySprite, 100, 0)
            story.spriteSayText(Shop_Keeper2, "Ugh!", 15)
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playertype == 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e e . . . . . . 
            . . . . . . . e d d . . . . . . 
            . . . . . . . d d d . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . d d 2 2 d . . . . . 
            . . . . . . d d 2 2 d . . . . . 
            . . . . . . d d 2 2 d . . . . . 
            . . . . . . . 8 8 8 . . . . . . 
            . . . . . . . 8 8 8 . . . . . . 
            . . . . . . . 8 8 8 . . . . . . 
            . . . . . . . e e e . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (playertype == 1) {
        mySprite.setImage(assets.image`PlayerGbr`)
    }
    if (playertype == 2) {
        mySprite.setImage(assets.image`playerrb`)
    }
    if (playertype == 3) {
        mySprite.setImage(assets.image`playerrg`)
    }
})
function fishing () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    if (rodtype == 0) {
        if (playertype == 0) {
            mySprite.setImage(assets.image`wooden`)
        }
        if (playertype == 1) {
            mySprite.setImage(assets.image`woodengb`)
        }
        if (playertype == 2) {
            mySprite.setImage(assets.image`woodenB`)
        }
        if (playertype == 3) {
            mySprite.setImage(assets.image`woodeng`)
        }
        music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else {
        if (rodtype == 1) {
            if (playertype == 0) {
                mySprite.setImage(assets.image`steel`)
            }
            if (playertype == 1) {
                mySprite.setImage(assets.image`steelgb`)
            }
            if (playertype == 2) {
                mySprite.setImage(assets.image`steelB`)
            }
            if (playertype == 3) {
                mySprite.setImage(assets.image`steelg`)
            }
            music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            catchofthedaay.removeAt(5)
        } else {
            if (rodtype == 2) {
                if (playertype == 0) {
                    mySprite.setImage(assets.image`gold`)
                }
                if (playertype == 1) {
                    mySprite.setImage(assets.image`goldg0`)
                }
                if (playertype == 2) {
                    mySprite.setImage(assets.image`goldB`)
                }
                if (playertype == 3) {
                    mySprite.setImage(assets.image`goldg`)
                }
                music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                catchofthedaay.removeAt(5)
                catchofthedaay.removeAt(6)
            } else {
                if (rodtype == 3) {
                    if (playertype == 0) {
                        mySprite.setImage(assets.image`composite`)
                    }
                    if (playertype == 1) {
                        mySprite.setImage(assets.image`compositegb`)
                    }
                    if (playertype == 2) {
                        mySprite.setImage(assets.image`compositeB`)
                    }
                    if (playertype == 3) {
                        mySprite.setImage(assets.image`compositeg`)
                    }
                    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    catchofthedaay.removeAt(5)
                    catchofthedaay.removeAt(6)
                    if (lake == 0) {
                        catchofthedaay.insertAt(2, 4)
                        catchofthedaay.insertAt(3, 1)
                    }
                    if (lake == 1) {
                        catchofthedaay.insertAt(2, 7)
                        catchofthedaay.insertAt(3, 8)
                    }
                    if (lake == 2) {
                        catchofthedaay.insertAt(2, 7)
                        catchofthedaay.insertAt(3, 8)
                        catchofthedaay.insertAt(1, 9)
                    }
                }
            }
        }
    }
    pause(5000)
    _catch = catchofthedaay._pickRandom()
    if (_catch == 0) {
        Coelacanth = sprites.create(assets.image`Ceolocanth`, SpriteKind.Food)
        Coelacanth.setPosition(75, 165)
        story.printText("You caught a coelacanth, an ancient fish from the Devonian period that still exists! This fish is worth $20.", 80, 100, 8)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        info.changeScoreBy(20)
    }
    if (_catch == 1) {
        Bothriolepsis = sprites.create(assets.image`Bothriolepsis`, SpriteKind.Food)
        Bothriolepsis.setPosition(75, 165)
        story.printText("You caught a bothriolepsis, a 400 million year old fish from the Devonian period! This fish is worth $20.", 80, 100, 8)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        info.changeScoreBy(15)
    }
    if (_catch == 2) {
        Pteraspis = sprites.create(assets.image`Pteraspis`, SpriteKind.Food)
        Pteraspis.setPosition(75, 165)
        story.printText("You caught a pteraspis, a 400 million year old fish from the Devonian period! This fish is worth $10.", 80, 105, 8)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        info.changeScoreBy(10)
    }
    if (_catch == 3) {
        Ammonite = sprites.create(assets.image`Ammonite`, SpriteKind.Food)
        Ammonite.setPosition(80, 165)
        story.printText("You caught an ammonite, a 140 million year old cephalopod from the Cretaceous period! It is worth $15.", 80, 105, 8)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        info.changeScoreBy(15)
    }
    if (_catch == 4) {
        Orthoceras = sprites.create(assets.image`Orthoceras`, SpriteKind.Food)
        Orthoceras.setPosition(75, 165)
        story.printText("You caught an orthoceras, a 460 million year old cephalopod from the Ordovician period! It is worth $25.", 80, 105, 8)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        info.changeScoreBy(25)
    }
    if (_catch == 5) {
        Lipodendron = sprites.create(assets.image`Lepidodendron`, SpriteKind.Food)
        Lipodendron.setPosition(80, 165)
        story.printText("You snagged your line on a lipodendron, a 300 million year old tree from the Carboniferous period. You lost your lure and need to buy another for $10.", 80, 105, 2)
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        info.changeScoreBy(-10)
    }
    if (_catch == 6) {
        story.printText("Sorry but you didn't catch anything.", 80, 105, 15)
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    }
    if (_catch == 7) {
        Xiphactinus = sprites.create(assets.image`Xiphactinus`, SpriteKind.Food)
        scaling.scaleToPercent(Xiphactinus, 110, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
        Xiphactinus.setPosition(75, 170)
        story.printText("You caught a xiphactinus, a 100 million year old apex predator from the cretaceous period! It is worth $40.", 80, 105, 8)
        info.changeScoreBy(40)
    }
    if (_catch == 8) {
        mosasaur = sprites.create(assets.image`Mosasaur`, SpriteKind.Food)
        scaling.scaleToPercent(mosasaur, 110, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
        mosasaur.setPosition(80, 170)
        story.printText("You caught a mosasaur, a 75 million year old marine lizard from the cretaceous period! It is worth $40.", 80, 105, 8)
        info.changeScoreBy(40)
    }
    if (_catch == 9) {
        dunkleosteus = sprites.create(assets.image`Dunkleosteus`, SpriteKind.Food)
        scaling.scaleToPercent(mosasaur, 125, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
        dunkleosteus.setPosition(80, 170)
        story.printText("You caught a dunkleosteus, a 300 million year old apex predator from the devonian period! It is worth $50.", 80, 105, 8)
        info.changeScoreBy(50)
    }
    if (_catch == 10) {
        megalodon = sprites.create(assets.image`megalodon`, SpriteKind.Food)
        scaling.scaleToPercent(megalodon, 175, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
        megalodon.setPosition(80, 170)
        story.printText("You caught a megalodon, a 20 million year old predator from the Miocene period! It is one of the largest, most powerful predators to have ever lived!", 80, 105, 8, 1)
        pause(2000)
        game.gameOver(true)
        game.setGameOverEffect(true, effects.bubbles)
        game.setGameOverPlayable(true, music.melodyPlayable(music.magicWand), false)
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    if (playertype == 0) {
        mySprite.setImage(assets.image`Player`)
    }
    if (playertype == 1) {
        mySprite.setImage(assets.image`PlayerGb`)
    }
    if (playertype == 2) {
        mySprite.setImage(assets.image`PlayerB`)
    }
    if (playertype == 3) {
        mySprite.setImage(assets.image`PlayerG`)
    }
    pause(1000)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lake > 0) {
        story.showPlayerChoices("Fish here", "Return to shore")
        if (story.checkLastAnswer("Fish here")) {
            fishing()
        }
        if (story.checkLastAnswer("Return to shore")) {
            sprites.destroyAllSpritesOfKind(SpriteKind.boat)
            lake = 0
            scene.setBackgroundImage(assets.image`Jurassic2`)
            tiles.setCurrentTilemap(tilemap`level1`)
            if (playertype == 0) {
                mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
            }
            if (playertype == 1) {
                mySprite = sprites.create(assets.image`PlayerGb`, SpriteKind.Player)
            }
            if (playertype == 2) {
                mySprite = sprites.create(assets.image`PlayerB`, SpriteKind.Player)
            }
            if (playertype == 3) {
                mySprite = sprites.create(assets.image`PlayerG`, SpriteKind.Player)
            }
            Shop_Keeper2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . e e e . . . . . . . . 
                . . . . . d d e . . . . . . . . 
                . . . . . e e e . . . . . . . . 
                . . . . d d f e d . . . . . . . 
                . . . . d e f d d . . . . . . . 
                . . . . d f e d d . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            scaling.scaleByPixels(mySprite, 26, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            scaling.scaleByPixels(Shop_Keeper2, 26, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            Shop_Keeper2.setPosition(217, 126)
            mySprite.setPosition(151, 115)
            mySprite.setStayInScreen(true)
            mySprite.ay = 200
            scene.cameraFollowSprite(mySprite)
            controller.moveSprite(mySprite, 100, 0)
        }
    } else {
        if (mySprite.x != 104 && mySprite.x != 184.875) {
            story.printText("You can't fish here. To fish, go up to the water.", 150, 100, 15, 9)
        } else if (mySprite.x == 104) {
            if (boattype > 0) {
                story.showPlayerChoices("Fish from shore", "Use a boat")
                if (story.checkLastAnswer("Fish from shore")) {
                    fishing()
                }
                if (story.checkLastAnswer("Use a boat")) {
                    boatfishing()
                }
            } else {
                fishing()
            }
        } else {
            if (mySprite.x == 184.875) {
                shop()
            }
        }
    }
})
let megalodon: Sprite = null
let dunkleosteus: Sprite = null
let mosasaur: Sprite = null
let Xiphactinus: Sprite = null
let Lipodendron: Sprite = null
let Orthoceras: Sprite = null
let Ammonite: Sprite = null
let Pteraspis: Sprite = null
let Bothriolepsis: Sprite = null
let Coelacanth: Sprite = null
let _catch = 0
let dino: Sprite = null
let Motorized_Boat: Sprite = null
let Wooden_Row_Boat: Sprite = null
let Shop_Keeper2: Sprite = null
let mySprite: Sprite = null
let playertype = 0
let lake = 0
let boattype = 0
let rodtype = 0
let catchofthedaay: number[] = []
scene.setBackgroundImage(assets.image`ancient sea`)
let mySprite3 = sprites.create(assets.image`Ammonite`, SpriteKind.Player)
animation.runMovementAnimation(
mySprite3,
animation.animationPresets(animation.bobbing),
5000,
false
)
mySprite3.setPosition(100, 100)
let mySprite2 = sprites.create(assets.image`Dunkleosteus`, SpriteKind.Player)
mySprite2.setPosition(0, 0)
animation.runMovementAnimation(
mySprite2,
animation.animationPresets(animation.flyToCenter),
5000,
false
)
music.play(music.createSong(assets.song`2001 Theme Song`), music.PlaybackMode.UntilDone)
catchofthedaay = [
0,
1,
2,
3,
4,
5,
6
]
rodtype = 0
boattype = 0
lake = 0
game.setDialogFrame(assets.image`frame`)
game.setDialogTextColor(8)
game.showLongText("Welcome to Prehistoric Fishing! Use arrows to move & B to interact. Catch ancient aquatic creatures & upgrade your gear in your pursuit of the mighty megalodon!", DialogLayout.Full)
game.showLongText("Play as...", DialogLayout.Top)
story.showPlayerChoices("Boy 1", "Girl 1", "Boy 2", "Girl 2")
sprites.destroy(mySprite2)
sprites.destroy(mySprite3)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`Jurassic2`)
if (story.checkLastAnswer("Boy 1")) {
    playertype = 0
    mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
}
if (story.checkLastAnswer("Girl 1")) {
    playertype = 1
    mySprite = sprites.create(assets.image`PlayerGb`, SpriteKind.Player)
}
if (story.checkLastAnswer("Boy 2")) {
    playertype = 2
    mySprite = sprites.create(assets.image`PlayerB`, SpriteKind.Player)
}
if (story.checkLastAnswer("Girl 2")) {
    playertype = 3
    mySprite = sprites.create(assets.image`PlayerG`, SpriteKind.Player)
}
Shop_Keeper2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e . . . . . . . . 
    . . . . . d d e . . . . . . . . 
    . . . . . e e d . . . . . . . . 
    . . . . d d 4 4 d . . . . . . . 
    . . . . d 4 f d d . . . . . . . 
    . . . . d f 4 d d . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scaling.scaleByPixels(mySprite, 26, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scaling.scaleByPixels(Shop_Keeper2, 26, ScaleDirection.Uniformly, ScaleAnchor.Middle)
Shop_Keeper2.setPosition(217, 126)
mySprite.setPosition(151, 115)
mySprite.setStayInScreen(true)
mySprite.ay = 200
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
info.setScore(0)
game.onUpdateInterval(randint(60000, 300000), function () {
    if (lake == 0) {
        timer.after(500, function () {
            dino = sprites.create(assets.image`Dino`, SpriteKind.Projectile)
            dino.setPosition(220, 150)
            animation.runImageAnimation(
            dino,
            assets.animation`myAnimleft`,
            200,
            true
            )
            dino.setVelocity(-25, 0)
        })
    }
})