const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const scaledCanvas = {
    width: canvas.width / 4,
    height: canvas.height / 4,
}
const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 36) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 36));
}
const CollisionBlocks = []
floorCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 202) {
            console.log("draw a block here");
            CollisionBlocks.push(new CollisionBlock({
                position: {
                    x: x * 16,
                    y: y * 16,
                }
            }))
        }
    })
})
const platformCollisions2D = []

for (let i = 0; i < platformCollisions.length; i += 36) {
    platformCollisions2D.push(platformCollisions.slice(i, i + 36));
}
const CollisionPlatforms = []
platformCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 202) {
            console.log("draw a block here");
            CollisionPlatforms.push(new CollisionPlatform({
                position: {
                    x: x * 16,
                    y: y * 16,
                }
            }))
        }
    })
})
const gravity = 0.5;
const player = new Player({
    position: {
        x: 100,
        y: 300,
    },
    collisionBlocks: CollisionBlocks,
    imageSrc: "../assets/Images/warrior/Idle.png",
    framerate: 8,
    animations: {
        Idle: {
            imageSrc: "../assets/Images/warrior/Idle.png",
            frameRate: 8,
        },
        Run: {
            imagesrc: "../assets/Images/warrior/Run.png",
            frameRate: 8,
        } 
    }
})

const keys = {
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}
const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "../assets/Images/background.png",
})

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = "White";
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.save();
    c.scale(4, 4);
    c.translate(0, -background.image.height + scaledCanvas.height);
    background.update();
    CollisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update();
    });
    CollisionPlatforms.forEach((collisionPlatform) => {
        collisionPlatform.update();
    })
    player.update();
    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.switchSprite('Run');
        player.velocity.x = 5}
    else if (keys.a.pressed) player.velocity.x = -5;
    c.restore()
}
animate();

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "d":
            keys.d.pressed = true;
            break;
        case "a":
            keys.a.pressed = true;
            break;
        case "w":
            player.velocity.y = -10;
            break;
    }
})

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "d":
            keys.d.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
    }
})