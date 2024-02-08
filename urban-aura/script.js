let cartValue=0;
function addToCart() {
    cartValue++;
    document.querySelector(".cart-value").textContent=cartValue;
}
function addToWishlist() {
    var button =   document.querySelector("#wishlist-btn");
    cartValue++;
    document.querySelector(".cart-value").textContent=cartValue;
    document.querySelector("#wishlist-btn").innerHTML="<i class='fa-solid fa-heart' style='color: #ff2e2e;'></i> Added to Wishlist";
    document.querySelector("#nav-wishlist").className="fa-solid fa-heart";
    button.disabled=true;
}
function openDialog1(){
    document.querySelector("#modal1").style.display = "flex";

}
function closeDialog1() {
    document.querySelector('#modal1').style.display="none"
}
function openDialog2(){
    document.querySelector("#modal2").style.display = "flex";

}
function closeDialog2() {
    document.querySelector('#modal2').style.display="none"
}
function performSearch() {
    // Get the search input value
    var searchText = document.getElementById('searchInput').value;

    // Get all product names
    var productNames = document.querySelectorAll('.txt-con #product-name');

    // Remove previous highlighting
    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element) {
        element.classList.remove('highlight');
    });

    // Loop through each product name
    var foundMatch = false; // Flag to track if a match is found
    productNames.forEach(function(productName) {
        // Get the text content of the product name
        var name = productName.textContent;

        // Perform a case-insensitive search for the search text in the product name
        var highlightedName = name.replace(new RegExp(searchText, 'gi'), function(match) {
            foundMatch = true; // Set the flag to true if a match is found
            return '<span class="highlight">' + match + '</span>';
        });

        // Update the HTML of the product name with the highlighted text
        productName.innerHTML = highlightedName;
    });

    // Get the search input element
    var searchInput = document.getElementById('searchInput');

    // If no match is found, display "Not found" as placeholder and change background color to red
    if (!foundMatch) {
        searchInput.value=null;
        searchInput.style.backgroundColor = "#ff3333";
    } else {
        searchInput.placeholder = "Search Products";
        searchInput.style.backgroundColor = ""; // Reset background color
    }

    // Get the first highlighted element
    var firstHighlightedElement = document.querySelector('.highlight');

    // If a highlighted element is found, scroll to it smoothly
    if (firstHighlightedElement) {
        firstHighlightedElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}


