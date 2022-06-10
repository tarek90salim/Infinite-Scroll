const imgContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash APIcontainerloader");
const count = 10;
const apiKey = 'rR2Q7d5zII0d2lFIgtyiO0o08PBxZP8IVfdU9HXfIi0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set attributes
function setAttributes(element, attribute) {
    for (const key in attribute) {
        element.setAttribute(key, attribute[key])
    }
}




// Create Elements for Links & Photos, then Add to DOM 
function displayPhotos() {
    // Run function for each object in "photosArray"
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement("a");
        // item.setAttribute("href", photo.links.html);
        // item.setAttribute("target", "_blanck");
        setAttributes(item, {
            href: photo.links.html,
            target: "_blanck",
        });
        
        // Create <img> for photo
        const img = document.createElement("img");
        // img.setAttribute("src", photo.urls.regular);
        // img.setAttribute("alt", photo.alt_description);
        // img.setAttribute("title", photo.description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.description
        });

        // Put <img> inside <a>, then put both insdie imgContainer
        item.appendChild(img);
        imgContainer.appendChild(item);
    });
}


// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Errors Here
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();        
    }
});

// On Load
getPhotos();