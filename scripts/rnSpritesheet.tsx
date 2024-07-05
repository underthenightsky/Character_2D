const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();    
playerImage.src = "../public/sprite/shadow_dog.png";

function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // we have to supply the image, x and y coordinates respectively
    ctx.drawImage(playerImage, 0, 0);
    // the requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser 
    //calls a specified function to update an animation before the next repaint
    // since we are calling the parent function we are in a loop
    requestAnimationFrame(animate);
};

animate();