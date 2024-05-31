document.addEventListener('DOMContentLoaded', function () {
    const groups = {
        'icon-d2': {
            label: 'ICON D2',
            serverUrl: 'https://server1.meteopress.cz/icond2/',
            product: {
                'oblc': {
                    label: 'Oblačnost',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'pocasi': {
                    label: 'Srážky',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'cu': {
                    label: 'Čistá + Cu',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'bascu': {
                    label: 'Kumuly',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'tlcu': {
                    label: 'Toušťka Cu',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'tmp2m': {
                    label: 'Teplota 2m',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'vlhk700': {
                    label: 'Vlhkost 3km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'vitr10m': {
                    label: 'Vítr 10m',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'narazy': {
                    label: 'Nárazy',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'vi950': {
                    label: 'Vítr 0,5km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'vi850': {
                    label: 'Vítr 1,5km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'vi700': {
                    label: 'Vítr 3km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'vi600': {
                    label: 'Vítr 4km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                },
                'vi500': {
                    label: 'Vítr 5,5km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48
                }
            }
        },
        'wetterzentrale': {
            label: 'Wetterzentrale',
            serverUrl: 'https://www.wetterzentrale.de/maps/',
            product: {
                'GFSOPEU06_': {
                    label: 'T850hpa',
                    step: 3,
                    extension: '_2.png',
                    numberOfImages: 129
                },

            }
        }
    };

    let currentGroup = 'icon-d2';
    const imageCache = {};
    const imageDisplay = document.getElementById('image-display');
    const slider = document.getElementById('slider');
    let currentImageIndex = 1; // Store the current slider position

    function generateImageUrls(group, setType) {
        const urls = [];
        const { serverUrl, product } = groups[group];
        const { step, extension, numberOfImages } = product[setType];
        for (let i = 0; i < numberOfImages; i++) {
            const imageIndex = i * step;
            urls.push(`${serverUrl}${setType}${imageIndex}${extension}`);
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

    function createDropdownMenu() {
        const dropdownContent = document.getElementById('dropdown-content');
        dropdownContent.innerHTML = ''; // Clear existing menu items

        const product = groups[currentGroup].product;
        for (const key in product) {
            if (product.hasOwnProperty(key)) {
                const menuItem = document.createElement('a');
                menuItem.href = '#';
                menuItem.textContent = product[key].label;
                menuItem.onclick = function () {
                    loadImages(key);
                    toggleDropdown();
                };
                dropdownContent.appendChild(menuItem);
            }
        }
    }

    window.loadImages = function(setType) {
        const imageUrls = generateImageUrls(currentGroup, setType);
        slider.max = imageUrls.length; // Set the max value of the slider dynamically
        preloadImages(imageUrls, currentImageIndex); // Pass the current image index

        // Hide the dropdown if the window width is less than 1340 pixels
        const windowWidth = window.innerWidth;
        if (windowWidth < 1340) {
            const dropdownContent = document.getElementById('dropdown-content');
            dropdownContent.style.display = 'none';
        }
    };

    window.setGroup = function(group) {
        currentGroup = group;
        createDropdownMenu(); // Create menu items dynamically for the selected group
        loadImages(Object.keys(groups[group].product)[0]); // Load the first set of images for the selected group
    };

    // Load the default set of images (ICON D2)
    createDropdownMenu();
    loadImages('oblc');

    // Update the image based on the slider value
    slider.addEventListener('input', (event) => {
        currentImageIndex = parseInt(event.target.value, 10); // Update the current image index
        imageDisplay.src = imageCache[currentImageIndex];
    });

    window.toggleDropdown = function() {
        const windowWidth = window.innerWidth;
        const dropdownContent = document.getElementById('dropdown-content');
        if (windowWidth >= 1340) {
            dropdownContent.style.display = 'block'; // Always visible on wide screens
        } else {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        }
    };

    window.toggleGroupDropdown = function() {
        const dropdownContent = document.getElementById('group-dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    };

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdownContent = document.getElementById('dropdown-content');
            const groupDropdownContent = document.getElementById('group-dropdown-content');
            const windowWidth = window.innerWidth;
            if (dropdownContent.style.display === 'block' && windowWidth < 1340) {
                dropdownContent.style.display = 'none';
            }
            if (groupDropdownContent.style.display === 'block') {
                groupDropdownContent.style.display = 'none';
            }
        }
    };
});
