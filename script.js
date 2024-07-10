const products = [
    { name: 'AGARBATTI & HOLDER', quantity: 4, price: 300, image: 'images/agarbatti_holder.jpeg' },
    { name: 'COTTON FABRIC MALA', quantity: 2, price: 2000, image: 'images/cotton_fabric_mala.jpeg' },
    { name: 'DOOP DANI', quantity: 3, price: null, image: 'images/doop_dani.jpeg' },
    { name: 'SHREYAS NOTE BOX', quantity: 13, price: null, image: 'images/shreyas_note_box.jpeg' },
    { name: 'SCARPH', quantity: 1, price: 9900, image: 'images/scarph.jpeg' },
    { name: 'BLUE TOP', quantity: 1, price: 14800, image: 'images/blue_top.jpeg' },
    { name: 'YELLOW TOP', quantity: 1, price: 9900, image: 'images/yellow_top.jpeg' },
    { name: 'LONG SHIRT', quantity: 1, price: 29900, image: 'images/long_shirt.jpeg' },
    { name: 'PANT', quantity: 1, price: 12900, image: 'images/pant.jpeg' },
    { name: 'BLUE TOP', quantity: 1, price: 14900, image: 'images/blue_top.jpeg' },
    { name: 'BLACK DRESS', quantity: 1, price: 21100, image: 'images/black_dress.jpeg' },
    { name: 'WHITE COTTON OT', quantity: 3, price: 1900, image: 'images/white_cotton.jpeg' },
    { name: 'WHITE COTTON (WITH BLUE LINE)OT', quantity: 4, price: 1500, image: 'images/white_cotton_blue_line.jpeg' },
    { name: 'GREEN COTTON', quantity: 2, price: 2200, image: 'images/green_cotton.jpeg' },
    { name: 'BROWN STOLES', quantity: 1, price: 2200, image: 'images/brown.jpeg' },
    { name: 'BLUE STOLES', quantity: 1, price: 3500, image: 'images/blue.jpeg' },
    { name: 'BODY SCRUBS (HERBOMINERALS)', quantity: 3, price: null, image: 'images/body_scrubs_herbominerals.jpeg' },
    { name: 'BODY SCRUBS (TANUSHA)', quantity: 1, price: 185, image: 'images/body_scrubs_tanusha.jpeg' },
    { name: 'PAPER BOX', quantity: 3, price: 1000, image: 'images/paper_box.jpeg' },
    { name: 'TISSUE HOLDER (RATTAN)', quantity: 3, price: 850, image: 'images/tissue_holder_rattan.jpeg' },
    { name: 'CANE BASKETS', quantity: 3, price: null, image: 'images/cane_baskets.jpeg' },
    { name: 'JUTE FRUITE BOWL', quantity: 1, price: null, image: 'images/jute_fruite_bowl.jpeg' },
    { name: 'BALI (MOTAR & PESTLE)', quantity: 3, price: null, image: 'images/bali_motar_pestle.jpeg' },
    { name: 'BALI BOWL', quantity: 8, price: null, image: 'images/bali_bowl.jpeg' },
    { name: 'BALI BOX', quantity: 8, price: null, image: 'images/bali_box.jpeg' },
    { name: 'CERAMICTEA SETS', quantity: 2, price: null, image: 'images/ceramictea_sets.jpeg' },
    { name: 'CERAMIC CATLE', quantity: 1, price: null, image: 'images/ceramic_catle.jpeg' },
    { name: 'CARD GIFT SETS', quantity: 1, price: null, image: 'images/card_gift_sets.jpeg' },
    { name: 'JOURNAL', quantity: 2, price: 295, image: 'images/genrals.jpeg' },
    { name: 'METAL CANDLE HOLDER', quantity: 1, price: null, image: 'images/metal_candle_holder.jpeg' },
    { name: 'JOURNEY OF LIFE', quantity: 21, price: null, image: 'images/journey_of_life.jpeg' },
    { name: 'BKS IYENGAR LIGHT OF LIFE', quantity: 2, price: 499, image: 'images/bks_iyengar_light_of_life.jpeg' },
    { name: 'BAGAVAD GITA', quantity: 2, price: 695, image: 'images/bagavad_gita.jpeg' },
    { name: 'HOLISTIC HEALTH', quantity: 2, price: 250, image: 'images/holistic_health.jpeg' },
    { name: 'HEALING THE HOLE PERSON', quantity: 2, price: 340, image: 'images/healing_the_hole_person.jpeg' },
    { name: 'PATH OF FIRE AND LIGHT', quantity: 2, price: 295, image: 'images/path_of_fire_and_light.jpeg' },
    { name: 'AYURVEDA OF SELF HEALING', quantity: 2, price: 395, image: 'images/ayurveda_of_self_healing.jpeg' },
    { name: 'BKS IYENGAR LIGHT ON YOGA', quantity: 1, price: 499, image: 'images/bks_iyengar_light_of_yoga.jpeg' },
    { name: 'LIGHT ON PRANAYAMA', quantity: 1, price: 399, image: 'images/light_of_pranayama.jpeg' },
    { name: 'PATH OF FIRE AND LIGHT', quantity: 1, price: 350, image: 'images/path_of_fire_and_lights.jpeg' },
    { name: 'THE THEORY AND PRACTICE OF MEDITATION', quantity: 1, price: 295, image: 'images/the_theory_and_practice_of_meditation.jpeg' },
    { name: 'YOGA VASISTHA SARA SANGRAHM', quantity: 1, price: null, image: 'images/yoga_vasistha_sara_sangrahah.jpeg' },
    { name: 'YOGA SUTRAS OF PATANJALI', quantity: 1, price: 895, image: 'images/yoga_sutras_of_patanjali.jpeg' }
];

window.onload = () => {
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="{product.name}">
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price ? product.price : 'N/A'}</p>
            <p>Quantity: ${product.quantity}</p>
        `;
        productGrid.appendChild(productCard);
    });
};