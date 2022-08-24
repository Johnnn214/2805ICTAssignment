class First extends Phaser.Scene {
  constructor ()
  {
    super('Button');
  }
  preload (){
    this.load.setBaseURL('https://labs.phaser.io')
        this.load.image('sky', 'assets/skies/bigsky.png');
      }

  create(){

    const button = this.add.text(50, 75, 'Higscore', {font: '20px Courier', fill: '#D1D0CE' })
      .setPadding(10)
      .setStyle({ backgroundColor: '#111' })
      .setInteractive({ useHandCursor: true })
      .on('pointerover', () => startButton.setStyle({font: '20px Courier', fill: '#f39c12' }))
      .on('pointerout', () => startButton.setStyle({ font: '20px Courier',fill: '#FFF' }))
      .on('pointerdown', () => this.scene.start('Higscore'));
  }
  update(){

  }
}


