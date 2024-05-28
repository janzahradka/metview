document.addEventListener('DOMContentLoaded', function () {
    const baseUrls = {
        'oblacnost': 'https://server1.meteopress.cz/icond2/oblc',
        'pocasi': 'https://server1.meteopress.cz/icond2/pocasi',
        'kumuly': 'https://server1.meteopress.cz/icond2/bascu'
    };
    const extension = '.png';
    const numberOfImages = 48;
    const imageCache = {};
    const imageDisplay = document.getElementById('image-display');
    const slider = document.getElementById('slider');

    function generateImageUrls(setType) {
        const urls = [];
        for (let i = 1; i <= numberOfImages; i++) {
            urls.push(`${baseUrls[setType]}${i}${extension}`);
        }
        return urls;
    }

    function preloadImages(imageUrls) {
        imageUrls.forEach((url, index) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                imageCache[index + 1] = img.src;
                if (index === 0) {
                    // Set the first image as the initial source
                    imageDisplay.src = img.src;
                }
            };
        });
    }

    window.loadImages = function(setType) {
        const imageUrls = generateImageUrls(setType);
        slider.max = numberOfImages; // Set the max value of the slider dynamically
        preloadImages(imageUrls);
    }

    // Load the default set of images (Oblacnost)
    loadImages('oblacnost');

    // Update the image based on the slider value
    slider.addEventListener('input', (event) => {
        const imageIndex = event.target.value;
        imageDisplay.src = imageCache[imageIndex];
    });
});
