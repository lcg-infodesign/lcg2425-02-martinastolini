let glifoSize = 40; 
let spacing = 40;
let margin = 20; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  noLoop(); 
}

function draw() {
  drawGrid();
}

function drawGrid() {
  //calcolo il numero di colonne e righe in base alla dimensione della finestra
  let columns = floor((windowWidth - 3 * margin) / (glifoSize + spacing));
  let rows = floor((windowHeight - 3 * margin) / (glifoSize + spacing));

  //calcolo la larghezza e l'altezza totale della griglia
  let totalWidth = columns * (glifoSize + spacing) - spacing; 
  let totalHeight = rows * (glifoSize + spacing) - spacing; 

  // calcolo offset per centrare la griglia nella finestra
  let startX = (windowWidth - totalWidth) / 1.5; 
  let startY = (windowHeight - totalHeight) / 1.5; 

  // calcolo coordinate di ogni elemento 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let x = startX + j * (glifoSize + spacing);
      let y = startY + i * (glifoSize + spacing);

// genero il glifo      
drawGlyph(x, y, glifoSize);
    }
  }
}

function drawGlyph(x, y, size) {
  push(); // applico solo al glifo 
  
  // randomizza la posizione dei glifi
  let variationX = random(-1, 1); 
  let variationY = random(-1, 1); 
  translate(x + variationX, y + variationY); // traslazione in base alla randomizzazione

  strokeWeight(2); 
  stroke(0); 
  stroke(color(36, 204, 68));
  noFill(); 

  // disegno rettangoli sovrapposti
  let numRectangles = floor(random(1, 5));
  for (let i = 0; i < numRectangles; i++) { 
    let rectWidth = random(size / 4, size / 1.5); // larghezza casuale
    let rectHeight = random(size / 4, size / 1.5); // altezza casuale
    let rectX = random(-size / 3, size / 3); // posizione x casuale
    let rectY = random(-size / 3, size / 3); // posizione y casuale

    push(); // faccio un secondo push per applicare la traslazione solo al rettangolo
    translate(rectX, rectY); // traslazione alla posizione casuale
    rect(0, 0, rectWidth, rectHeight);
    pop();
  }
  
  // disegno dei pallini
  let numDots = floor(random(1, 3)); 
  for (let i = 0; i < numDots; i++) {
    let dotX = random(-size / 2, size / 2); 
    let dotY = random(-size / 2, size / 2); 
    let dotSize = 6;
 
    ellipse(dotX, dotY, dotSize, dotSize);
  }

  pop(); // fine del push
}