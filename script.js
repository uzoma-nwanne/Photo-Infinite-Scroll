"use strict";
const count = 10;
const apiKey = "FNkzkOc5sDLa5R_aUjApOV4LpA5vQwAsUP91q5Qm4eM";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let photosArray = [];

function displayPhotos() {}

async function getPhotos() {
  try {
    const data = await fetch(apiURL);
    photosArray = await data.json();
  } catch {
    console.log(error);
  } finally {
    displayPhotos();
  }
}
