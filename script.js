
    const paper = document.querySelector(".paper")
    const line = paper.getContext("2d")

    const draw = () => {
        paper.width = paper.cilentWidth
        paper.height = paper.cilentHeight
    }

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
    line.moveTo(paper.width * 0.1, paper.height * 0.9)
    line.lineTo(paper.width * 0.9, paper.height * 0.9)
    line.stroke()

    draw()




