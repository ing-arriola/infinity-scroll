const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let phothosArray = [];

const count = 15;
const apiKey = "";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const setAttributes = (element, attributes) => {
  for (const att in attributes) {
    element.setAttribute(att, attributes[att]);
  }
};

const displayPhotos = () => {
  phothosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    const img = document.createElement("img");
    //img.setAttribute("src", photo.urls.regular);
    //img.setAttribute("alt", photo.alt_description);
    //img.setAttribute("title", photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
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

getPhotos();
