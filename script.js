document.addEventListener('DOMContentLoaded', function () {
    const groups = {
        'icon-d2-thermal': {
            label: 'Horác ICON D2 Termika',
            serverUrl: 'https://server1.meteopress.cz/icond2/',
            urlPattern: '${serverUrl}${productType}${imageIndex}${extension}',
            product: {
                'oblc': {
                    label: 'Oblačnost',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'pocasi': {
                    label: 'Srážky',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'tmp2m': {
                    label: 'Teplota 2m',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'vitr10m': {
                    label: 'Vítr 10m',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'cu': {
                    label: 'Čistá + Cu',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'bascu': {
                    label: 'Kumuly',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'tlcu': {
                    label: 'Toušťka Cu',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'vi850': {
                    label: 'Vítr 1,5km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'vlhk700': {
                    label: 'Vlhkost 3km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
            }
        },
        'icon-d2-wind': {
            label: 'Horác ICON D2 Vítr',
            serverUrl: 'https://server1.meteopress.cz/icond2/',
            urlPattern: '${serverUrl}${productType}${imageIndex}${extension}',
            product: {
                'vitr10m': {
                    label: 'Vítr 10m',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'narazy': {
                    label: 'Nárazy',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'vi950': {
                    label: 'Vítr 0,5km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'vi850': {
                    label: 'Vítr 1,5km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'vi700': {
                    label: 'Vítr 3km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'vi600': {
                    label: 'Vítr 4km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                },
                'vi500': {
                    label: 'Vítr 5,5km',
                    step: 1,
                    extension: '.png',
                    numberOfImages: 48,
                    thumbnailIndex: 10
                }
            }
        },
        'WetterzentraleEurope': {
            label: 'Wetterzentrale E',
            serverUrl: 'https://www.wetterzentrale.de/maps/GFSOPEU06_',
            urlPattern: '${serverUrl}${imageIndex}${productType}${extension}',
            product: {
                '_2': {
                    label: 'Teplota 850hpa',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_1': {
                    label: 'Výška hladiny 500hpa',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_3': {
                    label: 'Vítr 850hpa',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_4': {
                    label: 'Srážky',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_34': {
                    label: 'Teplotní odchylka 850hpa',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_5': {
                    label: 'Teplota 2m',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                }
            }
        },
        'WetterzentraleCentralEurope': {
            label: 'Wetterzentrale CE',
            serverUrl: 'https://www.wetterzentrale.de/maps/GFSOPME06_',
            urlPattern: '${serverUrl}${imageIndex}${productType}${extension}',
            product: {
                 '_4': {
                    label: 'Srážky',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_5': {
                    label: 'Teplota 2m',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_9': {
                    label: 'Vítr 10m',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_10': {
                    label: 'Rosný bod',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_11': {
                    label: 'CAPE',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_24': {
                    label: 'Celková oblačnost',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_12': {
                    label: 'Vysoká oblačnost',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_13': {
                    label: 'Střední oblačnost',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                },
                '_15': {
                    label: 'Nízká oblačnost',
                    step: 3,
                    extension: '.png',
                    numberOfImages: 129,
                    thumbnailIndex: 10
                }
            }
        }
    };

    let currentGroup = 'icon-d2-thermal';
    let currentProductType = 'oblc';
    const imageCache = {};
    const imageDisplay = document.getElementById('image-display');
    const slider = document.getElementById('slider');
    const title = document.getElementById('title');
    const productGrid = document.getElementById('product-grid');
    let currentImageIndex = 1; // Store the current slider position

    function updateTitle() {
        const groupLabel = groups[currentGroup].label;
        const productLabel = groups[currentGroup].product[currentProductType].label;
        title.textContent = `${groupLabel} : ${productLabel}`;
    }

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

    function createProductGrid() {
        productGrid.innerHTML = ''; // Clear existing grid items
        const product = groups[currentGroup].product;
        for (const key in product) {
            if (product.hasOwnProperty(key)) {
                const thumbnailIndex = product[key].thumbnailIndex;
                const thumbnailUrl = generateImageUrls(currentGroup, key)[thumbnailIndex];
                const gridItem = document.createElement('div');
                gridItem.className = 'product-grid-item';
                gridItem.innerHTML = `
                    <img src="${thumbnailUrl}" alt="${product[key].label}">
                    <div>${product[key].label}</div>
                `;
                gridItem.onclick = function () {
                    currentProductType = key;
                    loadImages(key);
                    updateTitle();
                };
                productGrid.appendChild(gridItem);
            }
        }
    }

    window.loadImages = function(productType) {
        const imageUrls = generateImageUrls(currentGroup, productType);
        slider.max = imageUrls.length; // Set the max value of the slider dynamically
        preloadImages(imageUrls, currentImageIndex); // Pass the current image index
    };

    window.setGroup = function(group) {
        currentGroup = group;
        currentProductType = Object.keys(groups[group].product)[0];
        createProductGrid(); // Create the product grid dynamically for the selected group
        loadImages(currentProductType); // Load the first set of images for the selected group
        updateTitle(); // Update the title with the current group and product labels
    };

    // Load the default set of images (ICON D2)
    createProductGrid();
    loadImages(currentProductType);
    updateTitle();

    // Update the image based on the slider value
    slider.addEventListener('input', (event) => {
        currentImageIndex = parseInt(event.target.value, 10); // Update the current image index
        imageDisplay.src = imageCache[currentImageIndex];
    });

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
            const dropdownContent = document.getElementById('group-dropdown-content');
            const windowWidth = window.innerWidth;
            if (dropdownContent.style.display === 'block' && windowWidth < 1340) {
                dropdownContent.style.display = 'none';
            }
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    };
});
