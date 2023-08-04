const paper = document.querySelector(".paper")
const line = paper.getContext("2d")
const maxAngle = 2 * Math.PI
let arcs = []

const colors = [
  "#D0E7F5",
  "#D9E7F4",
  "#D6E3F4",
  "#BCDFF5",
  "#B7D9F4",
  "#C3D4F0",
  "#9DC1F3",
  "#9AA9F4",
  "#8D83EF",
  "#AE69F0",
  "#D46FF1",
  "#DB5AE7",
  "#D911DA",
  "#D601CB",
  "#E713BF",
  "#F24CAE",
  "#FB79AB",
  "#FFB6C1",
  "#FED2CF",
  "#FDDFD5",
  "#FEDCD1"
];

const angle = Math.PI
let startTime = new Date().getTime()

const draw = () => {

    const length = Math.min(paper.width, paper.height) * 0.9
    const arcRadius = length * 0.05


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

    // Line
    line.strokeStyle = "white"
    line.lineWidth = 4

    line.beginPath()
    line.moveTo(start.x, start.y)
    line.lineTo(end.x, end.y)
    line.stroke()

    // Drawing 21 arcs
    const initalArc = length * 0.05
    arcs.forEach((arc, index) =>{
        const arcRadius = initalArc + (index * 20)

        line.beginPath()
        line.arc(center.x, center.y, arcRadius, Math.PI, 2 * Math.PI)
        line.stroke()

        line.fillStyle = "white"
        line.beginPath()
        line.arc(x, y, length * 0.0065, 0, 2 * Math.PI)
        line.fill()
        line.stroke()
    })
    

    // Arc
    // line.beginPath()
    // line.arc(center.x, center.y, arcRadius, Math.PI, 2 * Math.PI)
    // line.stroke()

    // Distance = Time * Velocity
    const velocity  = 1
    const distance = Math.PI + (elapsedTime * velocity)
    const modDistance = distance % maxAngle
    
    // Movement
    adjustedDistance = modDistance >= Math.PI ? modDistance: maxAngle - modDistance
    const x = center.x + arcRadius * Math.cos(adjustedDistance)
    const y = center.y + arcRadius * Math.sin(adjustedDistance)

    // Ball
    // line.fillStyle = "white"
    // line.beginPath()
    // line.arc(x, y, length * 0.0065, 0, 2 * Math.PI)
    // line.fill()
    // line.stroke()

    requestAnimationFrame(draw)

}


    
draw()



