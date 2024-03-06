const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const kare = document.getElementById("kare");
let kareX = 200;
let kareY = 200;

function ciz() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(kareX, kareY, kare.width, kare.height);
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        kareX -= 10;
    } else if (e.keyCode == 38) {
        kareY -= 10;
    } else if (e.keyCode == 39) {
        kareX += 10;
    } else if (e.keyCode == 40) {
        kareY += 10;
    }
});

setInterval(ciz, 20);
