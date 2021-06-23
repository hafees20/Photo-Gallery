import { getImagedetails } from "./image.js";
import { createImage } from "./image.js";
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const nextImage = async () => {
    const imageDetails = await getImagedetails();
    createImage(imageDetails.url);
}
// const previousImage = async () => {
//     const imageDetails = await getImagedetails();
//     createImage(imageDetails.url);
// }
btn2.addEventListener('click', nextImage);
// btn1.addEventListener('click', previousImage);