"use strict";
const count = 10;
const apiKey = "FNkzkOc5sDLa5R_aUjApOV4LpA5vQwAsUP91q5Qm4eM";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let photosArray = []; //array to hold [pictures]

//get the dom elements in javascript
const loader = document.getElementById("loader");
const imageContainer = document.getElementById("image-container");

//set the attribute of DOM elements
function setElementAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//display the array of Photos gotten from source API
function displayPhotos() {
  photosArray.forEach((photo) => {
    const photoLink = document.createElement("a");
    setElementAttributes(photoLink, {
      href: photo.links.html,
      target: "_blank",
    });
    const img = document.createElement("img");
    setElementAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    photoLink.appendChild(img); //add img to link
    imageContainer.appendChild(photoLink); //add link to photo container
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
  } catch (error) {
    console.log(error);
  } finally {
    displayPhotos();
    loader.hidden = true;
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
    console.log("load more");
  }
});

setTimeout(getPhotos(), 1000); //set first loading in set Timeout so that there is time to display loader
