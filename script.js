// Array of image paths
const images = [
    "1.jpg", "2.jpg", "3.jpg", "Slide 1.jpg", "Slide 2.jpg",
    "Slide 3.jpg", "Slide 4.jpg", "Slide 5.jpg", "Slide 6.jpg", "Slide 7.jpg", "Slide 8.jpg", "Slide 9.jpg", "Slide 10.jpg", "Slide 11.jpg", 
    "Slide 12.jpg", "Slide 13.jpg", "Slide 14.jpg", "Slide 15.jpg", "Slide 16.jpg", "Slide 17.jpg", "Slide 18.jpg", "Slide 19.jpg", "Slide 20.jpg",
    "Slide 21.jpg", "Slide 22.jpg", "Slide 23.jpg", "Slide 24.jpg", "Slide 25.png", "Slide 26.png", "Slide 27.png", "Slide 28.png" , "Slide 29.png",
    "Slide 30.png", "Slide 31.png", "Slide 33.png", "Slide 34.png", "Slide 35.png", "Slide 36.png", "Slide 37.png", "Slide 38.png", "Slide 39.png",
    "Slide 40.png", "Slide 41.png", "Slide 42.png", "Slide 43.png", "Slide 44.png", "Slide 45.png", "Slide 46.png", "Slide 47.png", "Slide 48.png",
    "Slide 49.png", "Slide 50.png", "Slide 51png.png", "Slide 52.png", "Slide 53.png", "Slide 54.png", "Slide 55.png", "Slide 56.png", "Slide 57.png",
    "Slide 58.png", "Slide 59.png",  "Slide 60.png", "Slide 61.png", "Slide 62.png", "Slide 63.png", "Slide 64.png", "Slide 65.png", "Slide 66.png",
    "Slide 67.png", "Slide 68.png", "Slide 69.png", "Slide 70.png", "Slide 71.png", "Slide 72.png", "Slide 73.png", "Slide 74.png", "Slide 75.png",
    "Slide 76.png", "Slide 77.png", "Slide 78.png", "Slide 79.png", "Slide 80.png", "Slide 81.png", "Slide 82.png", "Slide 83.png", "Slide 84.png",
    "Slide 85.png", "Slide 86.png", "Slide 87.png", "Slide 88.png", "Slide 89.png", "Slide 90.png", "Slide 91.png", "Slide 92.png", "Slide 93.png",
    "Slide 94.png", "Slide 95.png", "Slide 96.png", "Slide 97.png", "Slide 98.png", "Slide 99.png", "Slide 100.png", "Slide 101.png", "Slide 102.png",
    "Slide 103.png", "Slide 104.png", "Slide 105.png","Slide 106.png", "Slide 107.png", "Slide 108.png", "Slide 109.png", "Slide 110.png", "Slide 111.png",
    "Slide 112.png", "Slide 113.png", "Slide 114.png", "Slide 115.png", "Slide 116.png", "Slide 117.png", "Slide 118.png", "Slide 119.png", "Slide 120.png",
    "Slide 121.png", "Slide 122.png", "Slide 123.png", "Slide 124.png", "Slide 125.png", "Slide 126.png", "Slide 127.png", "Slide 128.png", "Slide 129.png",
    "Slide 130.png", "Slide 131.png", "Slide 132.png", "Slide 133.png", "Slide 134.png", "Slide 135.png", "Slide 136.png", "Slide 137.png", "Slide 138.png",
    "Slide 139.png", "Slide 140.png", "Slide 141.png", "Slide 142.png", "Slide 143.png", "Slide 144.png", "Slide 145.png", "Slide 146.png", "Slide 147.png",
    "Slide 148.png", "Slide 149.png", "Slide 150.png", "Slide 151.png", "Slide 152.png", "Slide 153.png", "Slide 154.png", "Slide 155.png", "Slide 156.png",
    "Slide 157.png", "Slide 158.png", "Slide 159.png", "Slide 160.png", "Slide 161.png", "Slide 162.png", "Slide 163.png", "Slide 164.png", "Slide 165.png",
    "Slide 166.png", "Slide 167.png", "Slide 168.png", "Slide 169.png", "Slide 170.png", "Slide 171.png", "Slide 172.png", "Slide 173.png", "Slide 174.png",
    "Slide 175.png", "Slide 176.png", "Slide 177.png", "Slide 178.png", "Slide 179.png", "Slide 180.png", "Slide 181.png", "Slide 182.png", "Slide 183.png",
    "Slide 184.png", "Slide 185.png", "Slide 186.png"
];

let currentIndex = 0; // Track the current image index
const slideshow = document.getElementById('slideshow');

// Function to update the image
function updateSlideshow() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    slideshow.src = images[currentIndex];
}

// Change image every 10 seconds (adjust as needed)
setInterval(updateSlideshow, 10000);
