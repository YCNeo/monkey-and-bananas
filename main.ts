input.onButtonPressed(Button.A, function () {
    led.unplot(monPos[0], monPos[1])
    if (monPos[0] != 0) {
        monPos[0] = monPos[0] - 1
    }
    led.plot(monPos[0], monPos[1])
})
function drop() {
    for (let item of queue) {
        if (item[1] <= 4) {
            led.plotBrightness(item[0], item[1], 0)
            item[1] = item[1] + 1
            led.plotBrightness(item[0], item[1], item[2])
        }
    }
}
function judge() {
    for (let item3 of queue) {
        if (item3[0] == monPos[0] && item3[1] == monPos[1]) {
            scoreArr = item3
            score += scoreArr[2] / 14
        }
    }
    return scoreArr
}
input.onButtonPressed(Button.B, function () {
    led.unplot(monPos[0], monPos[1])
    if (monPos[0] != 4) {
        monPos[0] = monPos[0] + 1
    }
    led.plot(monPos[0], monPos[1])
})
function generateBananas() {
    for (let index = 0; index < randint(1, 3); index++) {
        let y = 0
        x = randint(0, 4)
        if (randint(0, 100) <= 50) {
            bright = 70
        } else {
            bright = 140
        }
        if (isValid(x, y)) {
            led.plotBrightness(x, y, bright)
            queue.insertAt(0, [x, y, bright])
        }
    }
}
function isValid(x: number, y: number) {
    for (let item2 of queue) {
        if (item2[0] == x && item2[1] == y) {
            return false
        }
    }
    return true
}
let bright = 0
let x = 0
let scoreArr: number[] = []
let queue: number[][] = []
let popBan: number[] = []
let monPos: number[] = []
let score = 0
let second = 1
monPos = [2, 4]
// basic.showString("START!")
led.plot(monPos[0], monPos[1])
while (second <= 60) {
    drop()
    if (second % 2 == 1) {
        generateBananas()
        popBan = judge()
    }
    led.plotBrightness(popBan[0], popBan[1], 0)
    led.plot(monPos[0], monPos[1])
    console.log(`sec: ${second}, score: ${score}`)
    basic.pause(1000)
    second += 1
}
basic.clearScreen()
basic.showString("" + (`SCORE:${score}`))
basic.showString("END")


radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        for (let index = 0; index < 1; index++) {
            music.setTempo(315)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Whole))
            music.play(music.tonePlayable(277, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(554, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Whole))
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(233, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        }
    } else {

    }
    if (receivedNumber == 2) {
        for (let index = 0; index < 1; index++) {
            music.setTempo(180)
        }
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
})
radio.setGroup(0)
for (let index = 0; index < 1; index++) {
    music.setTempo(315)
    radio.sendNumber(1)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(415, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
}
basic.pause(2000)
for (let index = 0; index < 1; index++) {
    music.setTempo(180)
    radio.sendNumber(2)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
}
