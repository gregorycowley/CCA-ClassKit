// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "https://teachablemachine.withgoogle.com/models/-YtW4SEGG/";

// Video
let video;
let flippedVideo;

// Feedback
let shapeColor;

let label = ""; // To store the classification
let previousLabel = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  createCanvas(720, 480);

  // Interesting ->
  // noLoop(); // Prevent draw() from looping

  // Create the video
  video = createCapture(VIDEO);
  video.size(720, 480);
  video.hide();

  flippedVideo = ml5.flipImage(video);

  // Start classifying
  classifyVideo();

  shapeColor = color(255, 0, 0); // Initial shape color set to red (RGB)
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // // Draw the label
  // fill(255);
  // textSize(16);
  // textAlign(CENTER);
  // text(label, width / 2, height - 4);

  fill(shapeColor);
  
  noStroke();
  // Draw a rectangle (or any shape you like) on top of the video
  rect(50, 50, 100, 100); // Example: Rectangle at (50, 50) with a size of 100x100 pixels

  // let colorValue = "#FF5733";
  // screenColor(colorValue);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

function screenColor(colorValue) {
  // Use the colorValue variable to set the background color
  background(colorValue);
}

function randomShapeColor() {
  // Randomly change the shape's color
  shapeColor = color(random(255), random(255), random(255));
}

function changeColor(setColor) {
  // Randomly change the shape's color
  shapeColor = setColor;
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  
  console.log(results[0]);
  
  // The results are in an array ordered by confidence.
  label = results[0].label;
  if (label != previousLabel) {
    // This is a Change Event
    onChangeEvent();
    previousLabel = label;
  }

  // Classifiy again!
  classifyVideo();
}

function onChangeEvent() {
  if (label == "Apple") {
    changeColor(color(255, 0, 0));
  } else if (label == "Cube") {
    changeColor(color(0, 255, 0));
  } else if (label == "Owl") {
    changeColor(color(0, 0, 255));
  } else if (label == "Up") {
    changeColor(color(255, 255, 0));
  } else if (label == "Down") {
    changeColor(color(255, 0, 255));
  } else if (label == "Left") {
    changeColor(color(255, 255, 255));
  } else if (label == "Right") {
    changeColor(color(0, 255, 255));
  } else {
    changeColor(color(0, 0, 0));
  }
}
