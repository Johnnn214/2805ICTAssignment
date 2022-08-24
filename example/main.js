const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 500,
    height: 600,
    scene: [ First, Example ]
};

const game = new Phaser.Game(config);