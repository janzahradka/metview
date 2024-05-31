document.addEventListener('DOMContentLoaded', function () {
    const groups = {
        'icon-d2': {
            label: 'ICON D2',
            serverUrl: 'https://server1.meteopress.cz/icond2/',
            urlPattern: '${serverUrl}${productType}${imageIndex}${extension}',
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
        'WetterzentraleEurope': {
            label: 'Wetterzentrale E',
            serverUrl: 'https://www.wetterzentrale.de/maps/GFSOPEU06_',
            urlPattern: '${serverUrl}${imageIndex}${productType}${extension}',
            product: {
                '_2': {
                    label: 'T850hpa',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                },
                '_1': {
                    label: 'h500hpa',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                },
                '_3': {
                    label: 'Vítr 850hpa',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                },
                '_34': {
                    label: 'Teplotní odchylka 850hpa',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                },
                '_5': {
                    label: 'Teplota 2m',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                }
            }
        },
        'WetterzentraleCentralEurope': {
            label: 'Wetterzentrale CE',
            serverUrl: 'https://www.wetterzentrale.de/maps/GFSOPME06_',
            urlPattern: '${serverUrl}${imageIndex}${productType}${extension}',
            product: {
                '_9': {
                    label: 'Vítr 10m',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                },
                '_10': {
                    label: 'Rosný bod',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                },
                '_11': {
                    label: 'CAPE',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                },
                '_12': {
                    label: 'Vysoká oblačnost',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                },
                '_13': {
                    label: 'Střední oblačnost',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129
                },
                '_15': {
                    label: 'Nízká oblačnost',
                    step: 3,
                    extension: '.png',
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

    function generateImageUrls(group, productType) {
        const urls = [];
        const { serverUrl, product, urlPattern } = groups[group];
        const { step, extension, numberOfImages } = product[productType];
        for (let i = 0; i < numberOfImages; i++) {
            const imageIndex = i * step;
            const url = urlPattern
                .replace('${serverUrl}', serverUrl)
                .replace('${productType}', productType)
                .replace('${imageIndex}', imageIndex)
                .replace('${extension}', extension);
            urls.push(url);
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

    window.loadImages = function(productType) {
        const imageUrls = generateImageUrls(currentGroup, productType);
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
