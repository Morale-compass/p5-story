let life

function setup () {
  createCanvas (1340, 620)

  life = random(2);
  
}

function draw () {
  
    background (150);
    textSize(100);
    textAlign(CENTER);

    if ( life === 1 ) {
  
    fill(green);
    text('You Lived', random(width/2-3, width/2+3), random(height/2-3, height/2+3));

   }

   else if (life === 2) {

    fill(red);
    text('You Died', 500, 500);

   }

}
