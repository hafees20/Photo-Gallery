import { getImagedetails, preloadPage, createImage } from "./image.js";

const btn1 = document.querySelector('#previousBtn');
const btn2 = document.querySelector('#nextBtn');

//default page loader function
const defaultPage = async () => {
    const preloadImage = await preloadPage();
    createImage(preloadImage.url);
}

let currentId = 1;

//function to return next image id
function loadnextId() {
    currentId++;
    return currentId;
}

//function to return previous image id
function loadpreviousId() {
    currentId--;
    if (currentId < 1) {
        currentId = 1
    } else {
        return currentId;
    }
}

//next button handler
const nextImage = async () => {
    loadnextId();
    const imageDetails = await getImagedetails(currentId);
    createImage(imageDetails.url);
    indexNo(currentId);
}

//previous button handler
const previousImage = async () => {
    loadpreviousId();
    const imageDetails = await getImagedetails(currentId);
    createImage(imageDetails.url);
    indexNo(currentId);
}

// function to show index no
function indexNo(currentId) {
    const indexText = document.getElementById('indexNo');
    indexText.innerHTML = currentId;
}

defaultPage();

btn2.addEventListener('click', nextImage);

btn1.addEventListener('click', previousImage);