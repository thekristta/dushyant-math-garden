const line_color = "#FFFFFF";

const line_width = 10;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var canvas;
var context;

function prepareCanvas() {
    // console.log('Preparing canvas');

    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = line_color;

    context.lineWidth = line_width;
    context.lineJoin = 'round';

    var isPainting = false;

    document.addEventListener('mousedown', function (event) {
        // console.log("Mouse Pressed");
        isPainting = true;

        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
    });

    document.addEventListener('mousemove', function (event) {

        if (isPainting) {
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.clientY - canvas.offsetTop;

            draw();
        }

    });

    document.addEventListener('mouseup', function (event) {
        // console.log("Mouse released");
        isPainting = false;
    });

    canvas.addEventListener('mouseleave', function (event) {
        isPainting = false;
    });

    // Touch Events

    canvas.addEventListener('touchstart', function (event) {
        // console.log("Touch down");
        isPainting = true;

        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;
    });

    canvas.addEventListener('touchend', function (event) {
        isPainting = false;
    });

    canvas.addEventListener('touchcancel', function (event) {
        isPainting = false;
    });

    canvas.addEventListener('touchmove', function (event) {

        if (isPainting) {
            previousX = currentX;
            currentX = event.touches[0].clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.touches[0].clientY - canvas.offsetTop;

            draw();

        }

    });

}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas(){
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;

    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}