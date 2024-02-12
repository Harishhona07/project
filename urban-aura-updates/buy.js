function openBuy(itemId, itemName) {
    var dialogId="buy-form"+itemId;
    document.getElementById(dialogId).style.display="block";
    document.getElementById("itemname"+itemId).value=itemName;
    document.querySelector(".dialog-box").style.animation="slideLeft 1s ease"
    document.getElementById(dialogId).style.animation="slideRight 0.9s ease";

    
}
function closeBuy(itemId) {
    document.querySelector(".dialog-box").style.animation="closeRight 1s ease" 
        document.getElementById(itemId).style.animation="closebuyForm 1.5s ease";  
        setTimeout(function() {
            document.getElementById(itemId).style.display="none"
        },900)

}
function wishlistBuy() {
    openBuy(itemId, itemName);
}