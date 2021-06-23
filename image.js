// function to fetch image details
export async function getImagedetails() {
    let res;
    let randomId = Math.floor(Math.random() * 100);
    if (randomId == 0) {
        randomId = 1
    }
    const currentId = randomId;
    try {
        res = await fetch(`https://jsonplaceholder.typicode.com/photos/${currentId}`);
        const imageDetails = await res.json();
        console.log(imageDetails);
        return imageDetails;

    }
    catch (error) {
        console.error(error);
    }
}
export function createImage(imageUrl) {
    const imageHTMLElement = document.getElementById('pic');
    const imgSpace = document.getElementById('imgSpace');
    imageHTMLElement.src = imageUrl;
    imgSpace.append(imageHTMLElement);
}