let cartValue = getCartValueFromCookie() || null;

function addToCart() {
    cartValue++;
    updateCartDisplay();
    saveCartValueToCookie();
}

function updateCartDisplay() {
    document.querySelector(".cart-value").textContent = cartValue;
}

function saveCartValueToCookie() {
    // Set the cartValue in a cookie with an expiration date
    document.cookie = "cartValue=" + cartValue + "; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";
}

function getCartValueFromCookie() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.split('=');
        if (cookieKey === "cartValue") {
            return parseInt(cookieValue);
        }
    }
    return null;
}
function clearCart() {
    cartValue = null; // Reset cart value to zero/null
    updateCartDisplay(); // Update the cart display
    saveCartValueToCookie(); // Update the cookie to reflect the cleared cart value
}
// Initialize cart display on page load
updateCartDisplay();
 