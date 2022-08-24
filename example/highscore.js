class Example extends Phaser.Scene {
  constructor ()
  {
    super('Higscore');
  }
  preload (){
        this.load.setBaseURL('https://labs.phaser.io')
        this.load.image('sky', 'assets/skies/bigsky.png');
      }

  create () {   
        
    const sky = this.add.image(100, 100, 'sky');
    const heading = this.add.text(160, 100, 'Top Score', { font: '25px Courier', fill: '#00000' });
    const rank = this.add.text(150, 150, '', { font: '16px Courier', fill: '#00000' });
    const name = this.add.text(200, 150, '', { font: '16px Courier', fill: '#00000' });
    const score = this.add.text(250, 150, '', { font: '16px Courier', fill: '#00000' });

      rank.setText([
                'Rank ',' 1  ',' 2  ', ' 3  ', ' 4  ',' 5  ',
                ' 6  ',' 7  ',' 8  ',' 9  ',' 10 ',
            ]);
      name.setText([
                'Name ',' dad  ',' fdf  ', ' ewr  ', ' xxx  ',' bth  ',
                ' AAA ',' QWERT  ',' popo  ',' )OII  ',' RERF ',
            ]);
      score.setText([
                'Score ',' 100000  ',' 40000  ', ' 30000 ', ' 25000  ',' 20000  ',
                ' 17000  ',' 16000  ',' 15000  ',' 14000  ',' 13000 ',
            ]);

    const button = this.add.text(50, 75, 'Back', {font: '20px Courier', fill: '#D1D0CE' })
      .setPadding(10)
      .setStyle({ backgroundColor: '#111' })
      .setInteractive({ useHandCursor: true })
      .on('pointerover', () => startButton.setStyle({font: '20px Courier', fill: '#f39c12' }))
      .on('pointerout', () => startButton.setStyle({ font: '20px Courier',fill: '#FFF' }))
      .on('pointerdown', () => this.scene.start('Button'));
  
    }
  update(){}

}



 


