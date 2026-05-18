  // image eye poster
let eyeposter;

function preload () {
 eyeposter = loadImage("assets/images/exit-8-2.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background
	background(255);

}

function draw() {
	//background
	for (let i = 0; i < width; i += 40) {
		line(i, 10, i, windowHeight);
	}

   for (let i = 0; i < width; i += 40) {
		line(10, i, width, i);
	}

	// shape 
	fill('#FFD300');
	rect(1000, 100, 400, 600);
	stroke(0);

	// text 
	textSize(200);
	fill(0);
	text("8", 1150, 450);
	stroke(0);
	
  // Add eye poster image here	
  image(eyeposter, 100, 200, 300, 400);
}

// I took my code that I made on p5.js on 
// the Open Processing website and pasted into the code.
// The eye poster image I did completly on visual studio code.