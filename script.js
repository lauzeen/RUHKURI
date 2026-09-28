const SUPABASE_URL = "https://qhzoxdhfrwvhjcaarfis.supabase.co"; const SUPABASE_KEY = "sb_publishable_beXj_aSwGoSNMEIccehtaw__Kehhw8a";
const supabaseClient = supabase.createClient( SUPABASE_URL, SUPABASE_KEY );
const propertyList = document.getElementById("property-list");
async function loadProperties() {
propertyList.innerHTML =
    "<p>Loading properties...</p>";


const {
    data,
    error
} = await supabaseClient
    .from("properties")
    .select("*")
    .limit(2);

if (error) {

    console.error("Supabase error:", error);

    propertyList.innerHTML =
        "<p>Unable to load properties.</p>";

    return;
}


propertyList.innerHTML = "";


data.forEach(property => {

    const card =
        document.createElement("div");


    card.className =
        "property-card";


    card.innerHTML = `

        <img
            src="${property.image_url}"
            alt="${property.name}"
        >

        <div class="property-info">

            <h3>
                ${property.name}
            </h3>

            <p>
                ${property.description || ""}
            </p>

            <p>
                📍 ${property.location || ""}
            </p>

            <p>
                🛏 ${property.bedrooms || 0}
                bedrooms
                ·
                🚿 ${property.bathrooms || 0}
                bathrooms
            </p>

            <div class="price">
                MVR ${property.price}
                /
                ${property.price_period}
            </div>

            <a
                href="#contact"
                class="button"
            >
                Contact Us
            </a>

        </div>

    `;


    propertyList.appendChild(card);

});
}
loadProperties();