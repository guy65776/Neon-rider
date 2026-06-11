const config =
{
    type: Phaser.AUTO,

    width: window.innerWidth,
    height: window.innerHeight,

    parent: "game",

    physics:
    {
        default: "matter",

        matter:
        {
            gravity:
            {
                y: 1
            },

            debug: false
        }
    },

    scene:
    {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);

let bike;
let wheel1;
let wheel2;

let cursors;

let scoreText;

let score = 0;

function preload()
{
}
