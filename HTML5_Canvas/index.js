const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = 'BADA55' //initial color for drawing
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 14
// ctx.globalCompositeOperation = 'multiply'    //colors blend when drawing on top of each other
let hue = 0
let direction = true

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(e) {
    if (!isDrawing) return //stops func from running when not moused down
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    // ctx.lineWidth = hue
    ctx.beginPath()
    //start from
    ctx.moveTo(lastX, lastY)
    //go to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++   //changes color as the line extends
    if (hue >= 350) {
        hue = 0
    }
    // lastX = e.offsetX
    // lastY = e.offsetY

    //func increases and decreases line width
    /*
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction
    }
    if(direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    */
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false);