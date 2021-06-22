import { getImagedetails } from "./image.js";
import { fetchImage } from "./image.js";
import { createImage } from "./image.js";
const btn2 = document.querySelector('#btn2');
const nextImage = async () => {
    const imageDetails = await getImagedetails();
    createImage(imageDetails.url);
}
const imgFetching = await fetchImage();
btn2.addEventListener('click', nextImage);
