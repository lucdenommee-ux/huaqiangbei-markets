// Fichier : data/mobiles_specs.js
const MOBILE_SPECS = {
    "iPhone_16_Pro": {
        name: "iPhone 16 Pro",
        brand: "Apple",
        image: "images/mobiles/Apple/iPhone_16_Pro.jpg",
        chip: "A18 Pro",
        ram: "8 Go",
        storage: "256 Go",
        display: "6.3\" OLED 120Hz"
    },
    "Galaxy_S25_Ultra": {
        name: "Galaxy S25 Ultra",
        brand: "Samsung",
        image: "images/mobiles/Samsung/Galaxy_S25_Ultra.jpg",
        chip: "Snapdragon 8 Elite",
        ram: "12 Go",
        storage: "512 Go",
        display: "6.9\" AMOLED 120Hz"
    },
    "Pixel_9_Pro": {
        name: "Pixel 9 Pro",
        brand: "Google",
        image: "images/mobiles/Google/Pixel_9_Pro.jpg",
        chip: "Tensor G4",
        ram: "16 Go",
        storage: "256 Go",
        display: "6.3\" OLED 120Hz"
    }
};

function getWaUrl(productName) {
    const msg = `Hi, I'm interested in ${productName}. Please send price.`;
    return `https://wa.me/8613501552311?text=${encodeURIComponent(msg)}`;
}
