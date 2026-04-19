// Fichier : data/tablets_specs.js
const TABLET_SPECS = {
    "iPad_Pro_13_M5": {
        name: "iPad Pro 13 M5",
        brand: "Apple",
        image: "images/ipad/iPad_Pro_13_M5.jpg",
        chip: "Apple M5",
        ram: "8 Go",
        storage: "256 Go",
        display: "13\" Ultra Retina XDR"
    },
    "iPad_Pro_11_M5": {
        name: "iPad Pro 11 M5",
        brand: "Apple",
        image: "images/ipad/iPad_Pro_11_M5.jpg",
        chip: "Apple M5",
        ram: "8 Go",
        storage: "256 Go",
        display: "11\" Ultra Retina XDR"
    },
    "iPad_Air_7_11": {
        name: "iPad Air 7 11",
        brand: "Apple",
        image: "images/ipad/iPad_Air_7_11.jpg",
        chip: "Apple M3",
        ram: "8 Go",
        storage: "128 Go",
        display: "11\" Liquid Retina"
    },
    "Galaxy_Tab_S10_Ultra": {
        name: "Galaxy Tab S10 Ultra",
        brand: "Samsung",
        image: "images/samsung_tab/Galaxy_Tab_S10_Ultra.jpg",
        chip: "Dimensity 9300+",
        ram: "12 Go",
        storage: "256 Go",
        display: "14.6\" AMOLED 120Hz"
    },
    "Galaxy_Tab_S10_Plus": {
        name: "Galaxy Tab S10+",
        brand: "Samsung",
        image: "images/samsung_tab/Galaxy_Tab_S10_Plus.jpg",
        chip: "Dimensity 9300+",
        ram: "12 Go",
        storage: "256 Go",
        display: "12.4\" AMOLED 120Hz"
    }
};

function getWaUrl(productName) {
    const msg = `Hi, I'm interested in ${productName}. Please send price.`;
    return `https://wa.me/8613501552311?text=${encodeURIComponent(msg)}`;
}