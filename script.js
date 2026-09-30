const site = { brand: "RUHKURI",
hero: {
    eyebrow: "WELCOME TO RUHKURI",
    title: "Find your perfect place to stay.",
    description: "Comfortable and beautiful rental property for your next stay.",
    button: "View Property",
    image: "property1.jpg"
},

about: {
    eyebrow: "ABOUT US",
    title: "A comfortable place to call home.",
    paragraphs: [
        "Ruhkuri is more than just a place to stay. Our homestay offers guests the opportunity to experience the warmth, comfort, and hospitality of a Maldivian home.",
        "Stay in a comfortable and welcoming environment while enjoying a more personal experience during your visit. Guests can also rent bicycles and explore the island at their own pace, making it easy to discover the local surroundings.",
        "For those who want to experience Maldivian culture and cuisine, guests can also enjoy dinner with the family featuring traditional Maldivian dishes and homemade food.",
        "Whether you’re visiting to relax, explore, or experience local culture, Ruhkuri is a place where you can feel at home while discovering the beauty of the Maldives."
    ]
},

property: {
    name: "Ocean View Stay",
    description: "A bright and peaceful room with a relaxing island feel and a great view.",
    price: "120",
    period: "per night",
    location: "Ruhkuri Island",
    bedrooms: 1,
    bathrooms: 1,
    image: "property1.jpg"
},

gallery: [
    {
        image: "property1.jpg",
        alt: "Property exterior"
    },
    {
        image: "property2.jpg",
        alt: "Property interior"
    },
    {
        image: "property3.jpg",
        alt: "Property room"
    }
],

contact: {
    eyebrow: "GET IN TOUCH",
    title: "Interested in staying with us?",
    description: "Contact us for availability, prices and bookings.",
    whatsapp: "https://wa.me/9609825435",
    phone: "tel:+9609825435"
}
};
// NAVIGATION document.getElementById("site-logo").textContent = site.brand;
// HERO document.getElementById("hero-eyebrow").textContent = site.hero.eyebrow; document.getElementById("hero-title").textContent = site.hero.title; document.getElementById("hero-description").textContent = site.hero.description; document.getElementById("hero-button").textContent = site.hero.button;
document.querySelector(".hero").style.backgroundImage = linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url("${site.hero.image}");
// ABOUT document.getElementById("about-eyebrow").textContent = site.about.eyebrow; document.getElementById("about-title").textContent = site.about.title;
document.getElementById("about-text").innerHTML = site.about.paragraphs .map(text => <p>${text}</p>) .join("");
// PROPERTY document.getElementById("properties-eyebrow").textContent = "OUR PROPERTY"; document.getElementById("properties-title").textContent = "Explore our property";
const property = site.property;
document.getElementById("property-list").innerHTML = ` <div class="property-card">
    <img
        class="property-card-image"
        src="${property.image}"
        alt="${property.name}"
    >

    <div class="property-info">

        <h3>${property.name}</h3>

        <p>${property.description}</p>

        <p>📍 ${property.location}</p>

        <p>
            🛏 ${property.bedrooms} bedrooms
            ·
            🚿 ${property.bathrooms} bathrooms
        </p>

        <div class="price">
            USD ${property.price} / ${property.period}
        </div>

        <a href="#contact" class="button">
            Contact Us
        </a>

    </div>

</div>
`;
// GALLERY document.getElementById("gallery-eyebrow").textContent = "GALLERY"; document.getElementById("gallery-title").textContent = "Take a look around";
document.getElementById("gallery-grid").innerHTML = site.gallery .map(item => <img class="gallery-image" src="${item.image}" alt="${item.alt}" >) .join("");
// CONTACT document.getElementById("contact-eyebrow").textContent = site.contact.eyebrow;
document.getElementById("contact-title").textContent = site.contact.title;
document.getElementById("contact-description").textContent = site.
