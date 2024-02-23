# Increment UI State

<pre class="language-javascript"><code class="lang-javascript">// Declare Variables
let slides;
let classifier;
let video;
let flippedVideo;
<strong>
</strong>// Declare AND Define Variables
let currentClass = "";
let currentSlide = 0;
let nextState = 'aClassName1';

// Update to include the TM model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/ItRPfoQMn/';

function preload(){
    // Define the Classifier (AKA Our TM Model)
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');

    // A slide is a UI state 
    let slide1 = loadImage("/path/to/image1.png");
    let slide2 = loadImage("/path/to/image2.png");
    let slide3 = loadImage("/path/to/image3.png");
    let slide4 = loadImage("/path/to/image4.png");
    let slide5 = loadImage("/path/to/image5.png");
    
    // Assemble the slides into an array
    slides = [slide1, slide1, slide1, slide1, slide5];
}

function setup() {
    // Create a UI space
    createCanvas(1920, 1080);
    
    // Start the webcam
    video = createCapture(VIDEO);
    video.size(360, 320);
    
    // Connect the webcam to the model
    flippedVideo = ml5.flipImage(video);
    
    // Initialize the slideshow by showing the first slide
    showSlide(currentSlide);
    
    // Start the model's engine
    classifyVideo();
}

function draw() {
    // Draw a white backgound layer
    background(0);
    
    // Draw a webcam image layer
    if (currentVideo) {
        image(currentVideo, 0, 0, width, height); // Draw the current video frame
    }    
    
    // Draw a UI layer
    image(currentSlide, 0, 0, width, height);
}

function onChangeEvent(){
    // Called when the model recognizes a new class

}


// Slide behavior

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none'; // Show only the current slide
    });
}

function advanceSlide() {
    if (currentSlide &#x3C; slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
        // Determine the next key based on the current slide
        switch (currentSlide) {
            case 1:
                nextKey = 'aClassName2';
                break;
            case 2:
                nextKey = 'aClassName3';
                break;
            case 3:
                nextKey = 'aClassName4';
                break;
            case 4:
                nextKey = 'aClassName5';
                break;
            default:
                console.log('End of slideshow or invalid state');
        }
    } else {
        console.log('End of slideshow reached');
    }
}


// Operational Functions for the Teachable Machine model

function classifyVideo() {
    // Capture a webcam frame
    flippedVideo = ml5.flipImage(video);
    
    // Ask a model for a prediction for the webcam frame
    classifier.classify(flippedVideo, gotResult);
    
    // Note: `gotResult` above is the function the model will
    // send the prediction to.
}

function gotResult(error, results) {
  // Check for an error an print the result to the console
  if (error) {
    console.error(error);
    return;
  }
  
  // Choose one. This is a switch.
  // let debug = true;
  let debug = false;
  if ( debug ) {
      console.log(results[0]);
  }
  
  // The results are in an array ordered by confidence
  let currentClass = results[0].label;
  
  // Update the 
  if (currentClass != previousClass) {
    // This is a Change Event
    onChangeEvent();
    previousClass = tmClass;
  }

  // Run the model's engine again
  classifyVideo();
}


// Optional Default Functions 

function drawDefaultBanner (bannerText) {
    // Label Background Color
    fill(255);
    // Format Text
    textSize(16);
    textAlign(CENTER);
    // Define Text Position
    let positionTextHorizontally = width / 2;
    let positionTextVertically = height - 4;
    // Draw on screen
    text(bannerText, positionTextHorizontally, positionTextVertically - 4);
}



    

</code></pre>
