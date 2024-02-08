function atcMenu(){
    let atcMenu = document.getElementById("addtocart_menu").style.display = "flex";
    let whislistmenu = document.getElementById("wishlist_menu").style.display = "none";

}
function atcmenuClose(){
    let atcMenu = document.getElementById("addtocart_menu").style.display = "none";
}

function wishlist(){
    console.log("added to wishlist");
   let wishlist = document.getElementById("wishlist");
   wishlist.innerHTML = "<i class=\"fa-solid fa-heart\" style=\"color: #ff2e2e;\"></i> ADDED TO WISHLIST";
   wishlist.style.backgroundColor = "white";
}

function wishlistMenu(){
    let whislistmenu = document.getElementById("wishlist_menu").style.display = "flex";
    // let wishlist = document.getElementById("wishlistLogo").innerHTML = " ";
    let wishlist1 = document.getElementById("wishlistLogo").style.color = "red";

    let atcMenu = document.getElementById("addtocart_menu").style.display = "none";

}
function wishlistClose(){
    let whislistmenu = document.getElementById("wishlist_menu").style.display = "none";
    let wishlist1 = document.getElementById("wishlistLogo").style.color = "black";
}



function closeModal1(){
    document.getElementById("modal1").style.display = "none";   
}
function openModal2(){
    document.getElementById("modal2").style.display = "flex";
}
function closeModal2(){
    document.getElementById("modal2").style.display = "none";   
}
function openModal3(){
    document.getElementById("modal3").style.display = "flex";
}
function closeModal3(){
    document.getElementById("modal3").style.display = "none";   
}
function openModal4(){
    document.getElementById("modal4").style.display = "flex";
}
function closeModal4(){
    document.getElementById("modal4").style.display = "none";   
}
function openModal5(){
    document.getElementById("modal5").style.display = "flex";
}
function closeModal5(){
    document.getElementById("modal5").style.display = "none";   
}
function openModal6(){
    document.getElementById("modal6").style.display = "flex";
}
function closeModal6(){
    document.getElementById("modal6").style.display = "none";   
}
function openModal7(){
    document.getElementById("modal7").style.display = "flex";
}
function closeModal7(){
    document.getElementById("modal7").style.display = "none";   
}
function openModal8(){
    document.getElementById("modal8").style.display = "flex";
}
function closeModal8(){
    document.getElementById("modal8").style.display = "none";   
}