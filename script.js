const screen = document.querySelector("#screen")
const line = screen.getContext("2d")

const draw = () => {
    screen.width = screen.cilentWidth
    screen.height = screen.cilentHeight
}

const start = {
    x: screen.width * 0.1,
    y: screen.height * 0.9
}

const end = {
    x: screen.width * 0.9,
    y: screen.height * 0.9
}

line

draw()
