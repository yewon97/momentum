const images = [
  "0.jpg", "1.png", "2.jpg", "3.jpg", "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// prepend:맨앞 append:맨뒤
document.body.appendChild(bgImage);