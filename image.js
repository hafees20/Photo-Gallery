// function to fetch image details
export async function getImagedetails() {
    let res;
    let randomId = Math.floor(Math.random() * 100);
    try {
        res = await fetch(`https://jsonplaceholder.typicode.com/photos/${randomId}`);
        const imageDetails = await res.json();
        console.log(imageDetails)
        return imageDetails

    }
    catch (error) {
        console.error(error);
    }
}
// Function to fetch image from url
export async function fetchImage(imageUrl) {
    try {
        let res = await fetch(imageUrl)
        const imageData = await res.json();
        console.log(imageUrl)
        return imageData;

    }
    catch (error) {
        console.error(error)
    }
}

export function createImage(imageUrl) {
    const imageHTMLElement = document.createElement('img');
    imageHTMLElement.id = 'loadedImage';

    imageHTMLElement.src = imageUrl;
    document.body.appendChild(imageHTMLElement);
}