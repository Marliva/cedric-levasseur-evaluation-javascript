// Fonction pour gérer l'ajout au panier
export function initShopNow() {
    // Je récupére le compteur du panier dans l'html
    const cartCounter = document.querySelector('#cart p');
    
    // Je récupére tous les boutons "Shop Now" sur les cards
    const shopButtons = document.querySelectorAll('#shopNow button');
    
    // J'ajoute l'événement au clic sur chaque bouton "shop now"
    shopButtons.forEach(button => {
        button.addEventListener('click', () => {
            let currentCount = parseInt(cartCounter.textContent);
            
            // J'incrémenter de 1 le compteur en-haut à droite du cart
            currentCount++;
            
            // Je mets à jour l'affichage du compteur
            cartCounter.textContent = currentCount;
        });
    });
}