const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let ready = false;
let images = 0;
let totalImages = 0;
let phothosArray = [];

const count = 25;
const apiKey = "";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const setAttributes = (element, attributes) => {
  for (const att in attributes) {
    element.setAttribute(att, attributes[att]);
  }
};

const imagesLoaded = () => {
  images++;
  if (images === totalImages) {
    ready = true;
    loader.hidden = true;
  }
};

const displayPhotos = () => {
  images = 0;
  totalImages = phothosArray.length;
  console.log(totalImages);
  phothosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    img.addEventListener("load", imagesLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

const getPhotos = async () => {
  try {
    const res = await fetch(apiUrl);
    phothosArray = await res.json();
    displayPhotos();
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
