window.addEventListener("DOMContentLoaded", (event) => {
// Code pour fermer la popup
const popup = document.querySelector('.popup-overlay');
const closePopUpBtn = document.querySelector('.popup-close')
    
// FUNCTION - POPUP - Close the popup
    function popupClose() {
    popup.style.display = 'none';
    }

// EVENT - POPUP - Close the popup when the close button is clicked on
    closePopUpBtn.addEventListener('click', () => {
    popupClose();
});
});
