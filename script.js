const paper = document.querySelector(".paper")
const line = paper.getContext("2d")

const draw = () => {
    paper.width = paper.clientWidth
    paper.height = paper.clientHeight
}

draw()

const start = {
    x: paper.width * 0.1,
    y: paper.height * 0.9
}

const end = {
    x: paper.width * 0.9,
    y: paper.height * 0.9
}

line.strokeStyle = "white"
line.lineWidth = 6

line.beginPath()
line.moveTo(start.x, start.y)
line.lineTo(end.x, end.y)
line.stroke()



    




