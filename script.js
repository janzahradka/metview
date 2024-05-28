document.addEventListener('DOMContentLoaded', function () {
    const product = {
        'oblc': 'oblc',
        'pocasi': 'pocasi',
        'bascu': 'bascu',
        'cu': 'cu',
        'tmp2m': 'tmp2m',
        'tlcu': 'tlcu',
        'vlhk700': 'vlhk700',
        'vitr10m': 'vitr10m',
        'narazy': 'narazy',
        'vi950': 'vi950',
        'vi850': 'vi850',
        'vi700': 'vi700',
        'vi600': 'vi600',
        'vi500': 'vi500'

    }
    const serverUrl = 'https://server1.meteopress.cz/icond2/';
    const extension = '.png';
    const numberOfImages = 48;
    const imageCache = {};
    const imageDisplay = document.getElementById('image-display');
    const slider = document.getElementById('slider');
    let currentImageIndex = 1; // Store the current slider position

    function generateImageUrls(setType) {
        const urls = [];
        for (let i = 1; i <= numberOfImages; i++) {
            urls.push(`${serverUrl}${product[setType]}${i}${extension}`);
        }
        return urls;
    }

    function preloadImages(imageUrls, initialImageIndex) {
        imageUrls.forEach((url, index) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                imageCache[index + 1] = img.src;
                if (index + 1 === initialImageIndex) {
                    // Set the initial image based on the slider position
                    imageDisplay.src = img.src;
                }
            };
        });
    }

    window.loadImages = function(setType) {
        const imageUrls = generateImageUrls(setType);
        slider.max = numberOfImages; // Set the max value of the slider dynamically
        preloadImages(imageUrls, currentImageIndex); // Pass the current image index
    }

    // Load the default set of images (Oblacnost)
    loadImages('oblc');

    // Update the image based on the slider value
    slider.addEventListener('input', (event) => {
        currentImageIndex = parseInt(event.target.value, 10); // Update the current image index
        imageDisplay.src = imageCache[currentImageIndex];
    });
    window.toggleDropdown = function() {
        const dropdownContent = document.getElementById('dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdownContent = document.getElementById('dropdown-content');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    }
});
