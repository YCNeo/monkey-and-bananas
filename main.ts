radio.onReceivedNumber(function (num) {
    music.setTempo(180)
    if (num == 1) {
        display(rightHandSeq1)
    } else if (num == 2) {
        display(rightHandSeq2)
    }
})
radio.onReceivedNumber(function (num) {
    music.setTempo(180)
    if (num == 1) {
        display(leftHandSeq1)
    } else if (num == 2) {
        display(leftHandSeq2)
    }
})
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
function display(arr: [string, string, number][]) {
    for (let item4 of arr) {
        if (item4[0] == "rest") {
            if (item4[1] == "half") {
                music.rest(music.beat(BeatFraction.Half))
            } else if (item4[1] == "whole") {
                music.rest(music.beat(BeatFraction.Whole))
            } else if (item4[1] == "double") {
                music.rest(music.beat(BeatFraction.Double))
            }
        } else if (item4[0] == "play") {
            if (item4[1] == "half") {
                music.play(music.tonePlayable(item4[2], music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            } else if (item4[1] == "whole") {
                music.play(music.tonePlayable(item4[2], music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (item4[1] == "double") {
                music.play(music.tonePlayable(item4[2], music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
            }
        }
    }
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
let rightHandSeq1: [string, string, number][] = [
    ["rest", "half", 0],
    ["play", "half", 370],
    ["rest", "half", 0],
    ["play", "half", 440],
    ["play", "half", 554],
    ["rest", "half", 0],
    ["play", "half", 440],
    ["rest", "half", 0],
    ["play", "half", 370],
    ["play", "half", 294],
    ["play", "half", 294],
    ["play", "half", 294],
    ["rest", "whole", 0],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["play", "half", 370],
    ["play", "half", 440],
    ["play", "half", 554],
    ["rest", "half", 0],
    ["play", "half", 440],
    ["rest", "half", 0],
    ["play", "half", 370],
    ["play", "whole", 659],
    ["play", "half", 659],
    ["play", "half", 622],
    ["play", "half", 587],
    ["rest", "whole", 0],
    ["rest", "half", 0],
    ["play", "half", 415],
    ["rest", "half", 0],
    ["play", "half", 554],
    ["play", "half", 370],
    ["rest", "half", 0],
    ["play", "half", 554],
    ["rest", "half", 0],
    ["play", "half", 392],
    ["rest", "half", 0],
    ["play", "half", 554],
    ["rest", "half", 0],
    ["play", "half", 392],
    ["play", "half", 370],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["play", "half", 330],
    ["play", "half", 330],
    ["play", "half", 330],
    ["rest", "whole", 0],
    ["play", "half", 330],
    ["play", "half", 330],
    ["play", "half", 330],
    ["rest", "whole", 0],
    ["rest", "half", 0],
    ["play", "whole", 311],
    ["play", "whole", 294],
    ["play", "double", 277]
]
let rightHandSeq2: [string, string, number][] = [
    ["play", "half", 523],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 622],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 523],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 622],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 523],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 622],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "whole", 698],
    ["play", "whole", 622],
    ["play", "double", 587],
    ["play", "half", 523],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 622],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 523],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 622],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 523],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "half", 622],
    ["play", "half", 392],
    ["play", "half", 587],
    ["play", "half", 392],
    ["play", "whole", 698],
    ["play", "whole", 622],
    ["play", "whole", 587],
    ["play", "whole", 494],
    ["play", "double", 523]
]
let leftHandSeq1: [string, string, number][] = [
    ["rest", "half", 0],
    ["play", "half", 294],
    ["rest", "half", 0],
    ["play", "half", 370],
    ["play", "half", 440],
    ["rest", "half", 0],
    ["play", "half", 370],
    ["rest", "half", 0],
    ["play", "half", 294],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["rest", "whole", 0],
    ["play", "half", 277],
    ["play", "half", 294],
    ["play", "half", 294],
    ["play", "half", 370],
    ["play", "half", 440],
    ["rest", "half", 0],
    ["play", "half", 370],
    ["rest", "half", 0],
    ["play", "half", 294],
    ["play", "whole", 554],
    ["play", "half", 554],
    ["play", "half", 523],
    ["play", "half", 494],
    ["rest", "whole", 0],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["play", "half", 330],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["play", "half", 330],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["rest", "half", 0],
    ["play", "half", 330],
    ["rest", "half", 0],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["rest", "whole", 0],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["rest", "whole", 0],
    ["rest", "half", 0],
    ["play", "whole", 247],
    ["play", "whole", 233],
    ["play", "double", 220]
]
let leftHandSeq2: [string, string, number][] = [
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "whole", 175],
    ["play", "whole", 175],
    ["play", "double", 175],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 196],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 208],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "half", 262],
    ["play", "whole", 175],
    ["play", "whole", 175],
    ["play", "whole", 175],
    ["play", "whole", 196],
    ["play", "double", 262]
]
monPos = [2, 4]
radio.setGroup(0)
radio.setGroup(1)
// basic.showString("START!")
led.plot(monPos[0], monPos[1])
while (second <= 60) {
    if (second == 20) {
        radio.sendNumber(1)
    } else if (second == 40) {
        radio.sendNumber(2)
    }
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
