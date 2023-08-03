const paper = document.querySelector(".paper")
const line = paper.getContext("2d")
const length = Math.min(paper.width, paper.height) * 0.9
const maxAngle = 2 * Math.PI

const arcRadius = length * 0.5
const angle = Math.PI
let startTime = new Date().getTime()

const draw = () => {
    const currentTime = new Date().getTime()
    const elapsedTime = (currentTime - startTime) / 1000

    paper.width = paper.clientWidth
    paper.height = paper.clientHeight

    

    const start = {
        x: paper.width * 0.1,
        y: paper.height * 0.9
    }

    const end = {
        x: paper.width * 0.9,
        y: paper.height * 0.9
    }

    const center = {
        x: paper.width / 2,
        y: paper.height * 0.9
    }

    //Line
    line.strokeStyle = "white"
    line.lineWidth = 4

    line.beginPath()
    line.moveTo(start.x, start.y)
    line.lineTo(end.x, end.y)
    line.stroke()

    //Arc
    line.beginPath()
    line.arc(center.x, center.y, arcRadius, Math.PI, 2 * Math.PI)
    line.stroke()


    //Circle
    const velocity  = 0.5
    const distance = Math.PI + (elapsedTime * velocity)
    const modDistance = distance % maxAngle
    
    adjustedDistance = modDistance >= Math.PI ? modDistance: maxAngle - modDistance
    


    const x = center.x + arcRadius * Math.cos(adjustedDistance)
    const y = center.y + arcRadius * Math.sin(adjustedDistance)

    line.fillStyle = "white"
    line.beginPath()
    line.arc(x, y, length * 0.065, 0, 2 * Math.PI)
    line.fill()
    line.stroke()

    requestAnimationFrame(draw)

}


    
draw()



