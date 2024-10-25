def on_button_pressed_a():
    led.unplot(monPos[0], monPos[1])
    if monPos[0] != 0:
        monPos[0] = monPos[0] + 1
    led.plot(monPos[0], monPos[1])
input.on_button_pressed(Button.A, on_button_pressed_a)

def drop():
    for e in queue:
        if e[1] <= 4:
            led.plot_brightness(e[0], e[1], 0)
            e[1] = e[1] + 1
            led.plot_brightness(e[0], e[1], 120)
def judge(mon: List[any], ban: List[any]):
    if mon[0] == ban[0] and mon[1] == ban[1]:
        return 1
    return 0

def on_button_pressed_b():
    led.unplot(monPos[0], monPos[1])
    if monPos[0] != 4:
        monPos[0] = monPos[0] + 1
    led.plot(monPos[0], monPos[1])
input.on_button_pressed(Button.B, on_button_pressed_b)

popBan: List[number] = []
x = 0
queue: List[List[number]] = []
monPos: List[number] = []
score = 0
monPos = [2, 4]
basic.show_string("START!")
led.plot(monPos[0], monPos[1])

def on_every_interval():
    global x, popBan, score
    y = 0
    drop()
    x = randint(0, 4)
    led.plot_brightness(x, y, 120)
    queue.insert_at(0, [x, y])
    if len(queue) >= 5:
        # popBan = queue.pop()
        score += judge(monPos, popBan)
    led.plot_brightness(popBan[0], popBan[1], 0)
    led.plot(monPos[0], monPos[1])
    print(score)
loops.every_interval(2000, on_every_interval)
