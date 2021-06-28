// function to fetch image details
export async function getImagedetails(loadId) {
    let res;
    try {
        res = await fetch(`https://jsonplaceholder.typicode.com/photos/${loadId}`);
        const imageDetails = await res.json();
        console.log(imageDetails);
        return imageDetails;

    }
    catch (error) {
        console.error(error);
    }
}
//function to load default page
export async function preloadPage() {
    let res;
    res = await fetch(`https://jsonplaceholder.typicode.com/photos/1`);
    const imageDetails = await res.json();
    return imageDetails;
}

//function to create image
export function createImage(imageUrl) {
    const imageHTMLElement = document.getElementById('loadedPic');
    imageHTMLElement.src = imageUrl;
}