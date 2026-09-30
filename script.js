const SHEET_URL = "https://script.google.com/macros/s/AKfycbzbmLSzvs5PbusUWPW_Y3R6X7hIDAFa1IlhpgAKXFluujjh9sj7fC6_P3y7Hf7Er6Hb/exec";
const DEFAULT_SITE_CONFIG = {
brand: {
name: 'RUHKURI',
footer: '© 2026 Ruhkuri Rentals. All rights reserved.',
},
fetch(SHEET_URL) .then(response => response.json()) .then(data => {
    if (data.brand) {
        document.getElementById("site-logo").textContent = data.brand;
    }

    if (data.heroTitle) {
        document.getElementById("hero-title").textContent = data.heroTitle;
    }

    if (data.heroDescription) {
        document.getElementById("hero-description").textContent = data.heroDescription;
    }

    if (data.aboutTitle) {
        document.getElementById("about-title").textContent = data.aboutTitle;
    }

    if (data.propertyName) {
        document.querySelector(".property-info h3").textContent = data.propertyName;
    }

    if (data.propertyDescription) {
        document.querySelector(".property-info p").textContent = data.propertyDescription;
    }

    if (data.price) {
        document.querySelector(".price").textContent =
            "USD " + data.price + " / per night";
    }

})
.catch(error => {
    console.log("Could not load website settings:", error);
});
navigation: [
{ label: 'Home', href: '#home' },
{ label: 'About', href: '#about' },
{ label: 'Property', href: '#properties' },
{ label: 'Gallery', href: '#gallery' },
{ label: 'Contact', href: '#contact' },
],

hero: {
eyebrow: 'WELCOME TO RUHKURI',
title: 'Find your perfect place to stay.',
description: 'Comfortable and beautiful rental property for your next stay.',
buttonText: 'View Property',
image: 'images/property1.jpg',
},

about: {
eyebrow: 'ABOUT US',
title: 'A comfortable place to call home.',
paragraphs: [
'Ruhkuri is more than just a place to stay. Our homestay offers guests the opportunity to experience the warmth, comfort, and hospitality of a Maldivian home.',

'Stay in a comfortable and welcoming environment while enjoying a more personal experience during your visit. Guests can also rent bicycles and explore the island at their own pace, making it easy to discover the local surroundings.',

'For those who want to experience Maldivian culture and cuisine, guests can also enjoy dinner with the family featuring traditional Maldivian dishes and homemade food. It is a chance to share a meal, experience local hospitality, and enjoy a taste of everyday life in the Maldives.',

'Whether you are visiting to relax, explore, or experience local culture, Ruhkuri is a place where you can feel at home while discovering the beauty of the Maldives.'
],
},

properties: {
eyebrow: 'OUR PROPERTY',
title: 'Explore our property',
currency: 'USD',

property: {
name: 'Ocean View Stay',
description: 'A bright and peaceful room with a relaxing island feel and a great view.',
price: '120',
price_period: 'per night',
location: 'Ruhkuri Island',
bedrooms: 1,
bathrooms: 1,
image: 'images/property1.jpg',
},
},

gallery: {
eyebrow: 'GALLERY',
title: 'Take a look around',

images: [
{
src: 'images/property1.jpg',
alt: 'Property exterior'
},
{
src: 'images/property2.jpg',
alt: 'Property interior'
},
{
src: 'images/property3.jpg',
alt: 'Property room'
}
],
},

contact: {
eyebrow: 'GET IN TOUCH',
title: 'Interested in staying with us?',
description: 'Contact us for availability, prices and bookings.',
whatsapp: 'https://wa.me/9609825435',
phone: 'tel:+9609825435',
},
};

let siteConfig = DEFAULT_SITE_CONFIG;

let currentLightboxIndex = 0;

function renderNavigation() {
const navContainer = document.getElementById('top-nav');

navContainer.innerHTML = siteConfig.navigation
.map(item => `
<a href="${item.href}">
${item.label}
</a>
`)
.join('');
}

function renderStaticContent() {

document.getElementById('site-logo').textContent =
siteConfig.brand.name;

document.getElementById('hero-eyebrow').textContent =
siteConfig.hero.eyebrow;

document.getElementById('hero-title').textContent =
siteConfig.hero.title;

document.getElementById('hero-description').textContent =
siteConfig.hero.description;

document.getElementById('hero-button').textContent =
siteConfig.hero.buttonText;

document.getElementById('about-eyebrow').textContent =
siteConfig.about.eyebrow;

document.getElementById('about-title').textContent =
siteConfig.about.title;

document.getElementById('about-text').innerHTML =
siteConfig.about.paragraphs
.map(paragraph => `<p>${paragraph}</p>`)
.join('');

document.getElementById('properties-eyebrow').textContent =
siteConfig.properties.eyebrow;

document.getElementById('properties-title').textContent =
siteConfig.properties.title;

document.getElementById('gallery-eyebrow').textContent =
siteConfig.gallery.eyebrow;

document.getElementById('gallery-title').textContent =
siteConfig.gallery.title;

document.getElementById('contact-eyebrow').textContent =
siteConfig.contact.eyebrow;

document.getElementById('contact-title').textContent =
siteConfig.contact.title;

document.getElementById('contact-description').textContent =
siteConfig.contact.description;

document.getElementById('whatsapp-button').href =
siteConfig.contact.whatsapp;

document.getElementById('call-button').href =
siteConfig.contact.phone;

document.getElementById('footer-text').textContent =
siteConfig.brand.footer;

const hero = document.querySelector('.hero');

hero.style.backgroundImage =
`linear-gradient(
rgba(0,0,0,0.45),
rgba(0,0,0,0.45)
), url("${siteConfig.hero.image}")`;

renderProperty();

renderGallery();
}

function renderProperty() {

const property = siteConfig.properties.property;

const propertyList =
document.getElementById('property-list');

propertyList.innerHTML = `
<div class="property-card">

<img
class="property-card-image"
src="${property.image}"
alt="${property.name}"
>

<div class="property-info">

<h3>${property.name}</h3>

<p>
${property.description}
</p>

<p>
📍 ${property.location}
</p>

<p>
🛏 ${property.bedrooms} bedrooms
·
🚿 ${property.bathrooms} bathrooms
</p>

<div class="price">
${siteConfig.properties.currency}
${property.price}
/
${property.price_period}
</div>

<a href="#contact" class="button">
Contact Us
</a>

</div>

</div>
`;

attachLightboxEvents();
}

function renderGallery() {

const galleryGrid =
document.getElementById('gallery-grid');

galleryGrid.innerHTML =
siteConfig.gallery.images
.map(image => `
<img
class="gallery-image"
src="${image.src}"
alt="${image.alt}"
>
`)
.join('');

attachLightboxEvents();
}

function getLightboxImages() {

return [
...siteConfig.gallery.images,

{
src: siteConfig.properties.property.image,
alt: siteConfig.properties.property.name
}
];
}

function attachLightboxEvents() {

const clickableImages =
document.querySelectorAll(
'.gallery-image, .property-card img'
);

clickableImages.forEach(image => {

image.style.cursor = 'pointer';

image.onclick = () => {

const images = getLightboxImages();

const selectedSrc =
image.getAttribute('src');

const selectedIndex =
images.findIndex(
item => item.src === selectedSrc
);

currentLightboxIndex =
selectedIndex >= 0
? selectedIndex
: 0;

const lightbox =
document.getElementById('lightbox');

const lightboxImage =
document.getElementById('lightbox-image');

function updateLightbox() {

lightboxImage.src =
images[currentLightboxIndex].src;

lightboxImage.alt =
images[currentLightboxIndex].alt;
}

updateLightbox();

lightbox.classList.remove('hidden');

lightbox.setAttribute(
'aria-hidden',
'false'
);

document.querySelector(
'.lightbox-next'
).onclick = () => {

currentLightboxIndex =
(currentLightboxIndex + 1)
% images.length;

updateLightbox();
};

document.querySelector(
'.lightbox-prev'
).onclick = () => {

currentLightboxIndex =
(currentLightboxIndex - 1 + images.length)
% images.length;

updateLightbox();
};
};
});

const lightbox =
document.getElementById('lightbox');

const closeButton =
document.querySelector('.lightbox-close');

if (closeButton) {

closeButton.onclick = () => {

lightbox.classList.add('hidden');

lightbox.setAttribute(
'aria-hidden',
'true'
);
};
}

lightbox.onclick = event => {

if (event.target === lightbox) {

lightbox.classList.add('hidden');

lightbox.setAttribute(
'aria-hidden',
'true'
);
}
};

document.onkeydown = event => {

if (lightbox.classList.contains('hidden')) {
return;
}

const images = getLightboxImages();

if (event.key === 'Escape') {

lightbox.classList.add('hidden');

lightbox.setAttribute(
'aria-hidden',
'true'
);
}

if (event.key === 'ArrowRight') {

currentLightboxIndex =
(currentLightboxIndex + 1)
% images.length;

document.getElementById(
'lightbox-image'
).src =
images[currentLightboxIndex].src;
}

if (event.key === 'ArrowLeft') {

currentLightboxIndex =
(currentLightboxIndex - 1 + images.length)
% images.length;

document.getElementById(
'lightbox-image'
).src =
images[currentLightboxIndex].src;
}
};
}

renderNavigation();
renderStaticContent();
