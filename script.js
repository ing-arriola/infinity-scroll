const count = 15;
const apiKey = "";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const getPhotos = async () => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getPhotos();
