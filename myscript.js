// Initialize current image URL
var currentImage = "./images/desktop-image-hero-1.jpg";

// Function to change image on button click
function changeImage() {
  // Use switch statement to check current image URL and set it to the next image in sequence
  switch (currentImage) {
    case "./images/desktop-image-hero-1.jpg":
      currentImage = "./images/desktop-image-hero-2.jpg";
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "flex";
      document.getElementById("three").style.display = "none";
      break;
    case "./images/desktop-image-hero-2.jpg":
      currentImage = "./images/desktop-image-hero-3.jpg";
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "flex";
      break;
    case "./images/desktop-image-hero-3.jpg":
      currentImage = "./images/desktop-image-hero-1.jpg";
      document.getElementById("one").style.display = "flex";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      break;
    default:
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      break;
  }

  // Update img src attribute with new image URL
  document.getElementById("img1").src = currentImage;
}
// Bind changeImage function to button onclick event
document.getElementById("arrowForward").onclick = changeImage;
document.getElementById("arrowForward2").onclick = changeImage;
// Function to change image on button click
function changeImageBack() {
  // Use switch statement to check current image URL and set it to the next image in sequence
  switch (currentImage) {
    case "./images/desktop-image-hero-1.jpg":
      currentImage = "./images/desktop-image-hero-3.jpg";
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "flex";
      break;
    case "./images/desktop-image-hero-3.jpg":
      currentImage = "./images/desktop-image-hero-2.jpg";
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "flex";
      document.getElementById("three").style.display = "none";
      break;
    case "./images/desktop-image-hero-2.jpg":
      currentImage = "./images/desktop-image-hero-1.jpg";
      document.getElementById("one").style.display = "flex";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      break;
    default:
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      break;
  }
  // Update img src attribute with new image URL
  document.getElementById("img1").src = currentImage;
}
// Bind changeImage function to button onclick event
document.getElementById("arrowBackward").onclick = changeImageBack;
document.getElementById("arrowBackward2").onclick = changeImageBack;
//
//
//create hamburger variable
var hamburger = document.getElementById("hamburger");
//add an event listener for the hamburger variable
hamburger.addEventListener("click", showNavBar);
function showNavBar() {
  document.getElementById("navbar").style.display = "none";
  document.getElementById("mobileNavbar").style.display = "flex";
}
var cancelImg = document.getElementById("cancelImg");
//add an event listener for the hamburger variable
cancelImg.addEventListener("click", showDesktopNavBar);
function showDesktopNavBar() {
  document.getElementById("navbar").style.display = "flex";
  document.getElementById("mobileNavbar").style.display = "none";
}
