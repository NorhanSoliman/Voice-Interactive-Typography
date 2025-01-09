let mic, fft;

let font;
// varray that will be filled with points from the text
let points;
let points2;


let rows = 20;  
let cols = 30; 
let mwidth;
let mheight;


let x = 0; // Initial x position of the text
let y =0;
let speed = 3; // Speed of the text


// preloading the customized font for arabic text
function preload() {
  font = loadFont('myfont.ttf');
}

function setup() {
    createCanvas(600, 800);

    // Initialize microphone and FFT analyzer
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

    mwidth = width / cols;
    mheight = height / rows;
    //frameRate(2);

    textSize(24); 
    textAlign(CENTER, CENTER); 

    
}


function draw() {
  background(0);

  // Get waveform data
  let waveform = fft.waveform();

  stroke(255);
  //drawGrid(cols, rows, mwidth, mheight);
  // Draw a circular waveform at row 5, column 10
  //drawWaveformCircle(waveform, 5, 10, 50, mwidth, mheight);


  //Main Module 
  //drawWaveformCircleCenter(waveform, width / 2, height / 2, 50);

  //drawWaveformHalfCircle(waveform, width / 2, 300, 150);  

  //drawWaveformQuadCircle(waveform, 150, 250, 200); 


  // drawWaveformCircle(waveform, width / 2, height / 2, 10);
  push();
  fill(255);
  noStroke();
  let textWidthTotal = textWidth("       Rafael Lozano-Hemmer       Zach Lieberman       Erik van Blokland       Jessica Walsh");

  text("       Rafael Lozano-Hemmer       Zach Lieberman       Erik van Blokland       Jessica Walsh       ", x, 372);
  text("       Rafael Lozano-Hemmer       Zach Lieberman       Erik van Blokland       Jessica Walsh              ", x-textWidthTotal, 372); 
  
  text("21 March", x-320, 350);
  text("22 March", x-70, 350); 
  text("23 March", x +140, 350); 
  text("24 March", x + 380, 350); 

  text("21 March", x-320-textWidthTotal-20, 350);
  text("22 March", x-70-textWidthTotal-20, 350); 
  text("23 March", x +140-textWidthTotal-20, 350); 
  text("24 March", x + 380-textWidthTotal-20, 350); 
  pop();

  // Text to points of the poster name s: sama3 h:hos b:bos
  points = font.textToPoints('s', -50, 500, 900, { sampleFactor:  0.09 });
  for (let p of points) {
      drawWaveformCircle(waveform, p.x,p.y, 10);
  }

  points2 = font.textToPoints('h', -50, 700, 900, { sampleFactor:  0.09 });
  for (let p of points2) {
    //drawWaveformHalfCircle(waveform, p.x,p.y, 10);
    drawWaveformCircle(waveform, p.x,p.y, 10);
  }

        
  points3 = font.textToPoints('b', -60, 900, 1000, { sampleFactor:  0.09 });
  for (let p of points3) {
    //drawWaveformQuadCircle(waveform, p.x,p.y, 10);
    drawWaveformCircle(waveform, p.x,p.y, 10);
  }




    // Display the text
    fill(255);
    noStroke();


    text("       Rafael Lozano-Hemmer       Zach Lieberman       Erik van Blokland       Jessica Walsh       ", x, 20);
    text("       Rafael Lozano-Hemmer       Zach Lieberman       Erik van Blokland       Jessica Walsh              ", x-textWidthTotal, 20); 

    text("21 March", x-320, 42);
    text("22 March", x-70, 42); 
    text("23 March", x +140, 42); 
    text("24 March", x + 380, 42); 

    text("21 March", x-320-textWidthTotal-20, 42);
    text("22 March", x-70-textWidthTotal-20, 42); 
    text("23 March", x +140-textWidthTotal-20, 42); 
    text("24 March", x + 380-textWidthTotal-20, 42); 




    let textWidthTotal1 = textWidth("       Expermential Graphic Design Festival       ");
    text("Expermential Graphic Design Festival", x, 750); 
    text("Expermential Graphic Design Festival", x-textWidthTotal1-300, 750);

    let textWidthTotal2 = textWidth("Voice Interactive Typography");
    text("Voice Interactive Typography", x+400, 750); 
    text("Voice Interactive Typography", x-textWidthTotal2-100, 750);
    text("Voice Interactive Typography", x-4*textWidthTotal2, 750);

    let textWidthTotal3 = textWidth("AUC Tahrir Cultural Center");
    text("AUC Tahrir Cultural Center", x , 772); 
    text("AUC Tahrir Cultural Center", x+400, 772); 
    text("AUC Tahrir Cultural Center", x-textWidthTotal3-100 , 772); 
    text("AUC Tahrir Cultural Center", x-textWidthTotal3-500, 772); 
    text("AUC Tahrir Cultural Center", x-4*textWidthTotal3-100, 772); 


    
    x += speed;

        
    // Reset the x position when the text moves off the canvas
    if (x > width+850) {
        x=0;
    }

}




function drawGrid(cols, rows, mwidth, mheight) {

    for (let i = 0; i <= cols; i++) {
      // Draw vertical grid lines
      line(i * mwidth, 0, i * mwidth, height);
    }
  
    for (let j = 0; j <= rows; j++) {
      // Draw horizontal grid lines
      line(0, j * mheight, width, j * mheight);
    }
  }

function drawWaveformCircle(waveform, centerX, centerY, baseRadius) {
  //noFill();
  fill(0);

  strokeWeight(2);
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
      let angle = map(i, 0, waveform.length, 0, TWO_PI); // Map each point to a circle's angle
      let radius = baseRadius + map(waveform[i]*20, -1, 1, -100, 100) ; // Vary radius based on waveform
      let x = centerX + radius * cos(angle); // Convert polar to Cartesian coordinates
      let y = centerY + radius * sin(angle);
      vertex(x, y);
  }
  endShape(CLOSE);
}


function drawWaveformHalfCircle(waveform, centerX, centerY, baseRadius) {
  fill(0);

  strokeWeight(2);
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
      let angle = map(i, 0, waveform.length*2, 0, TWO_PI); // Half
      let radius = baseRadius + map(waveform[i]*20, -1, 1, -100, 100); 
      let x = centerX + radius * cos(angle); 
      let y = centerY + radius * sin(angle);
      vertex(x, y);
  }
  endShape(CLOSE);
}

function drawWaveformQuadCircle(waveform, centerX, centerY, baseRadius) {
  fill(0);

  strokeWeight(2);
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
      let angle = map(i, 0, waveform.length*4, 0, TWO_PI); // One Quarter
      let radius = baseRadius + map(waveform[i]*20, -1, 1, -100, 100); 
      let x = centerX + radius * cos(angle); 
      let y = centerY + radius * sin(angle);
      vertex(x, y);
  }
  endShape(CLOSE);
}


function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('myCanvas', 'png');
    }
}


