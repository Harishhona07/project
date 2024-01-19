function showDialog() {
    document.getElementById('dialogContainer').style.display = 'block';

}
function closeDialog() {
    document.getElementById('dialogContainer').style.display = 'none';
}

var isHoverEnabled = true;
function dangerItem() {
    if (isHoverEnabled) {
      var imgElement = document.getElementById("special-item");
      imgElement.src = "assets/meth.jpg";
      setTimeout(function () {
        normalItem();
      }, 500);

      document.getElementById("special-itemDetails").innerHTML = "ERror! in tThe Srver $(&#%@G#*D&%#%@%@JD&F&#&(@*#!_#)+)&@T";
      // Disable hover after the first hover
      disableHover();
    }
  }

  function normalItem() {
    var imgElement = document.getElementById("special-item");
    imgElement.src = null;
    document.getElementById("special-itemDetails").innerHTML = "ERror! in tThe Srver $(&#%@G#*D&%#%@%@JD&F&#&(@*#!_#)+)&@T";
    document.getElementById("menu").style.backgroundColor="black"
    document.getElementById("about-us").style.backgroundColor="black"
    document.getElementById("training").style.backgroundColor="black"
    document.getElementById("gustavo-img").src="assets/gus.png";
    document.getElementById("gustavo-img").style.backgroundImage="url('assets/methlab.jpg')";
    document.getElementById("gustavo-img").style.backgroundSize="100% 100%";
    document.getElementById("logo-img").src="assets/los-pollos-welcome-jumpsuit.png";
    document.getElementById("logo-img2").src="assets/tuco.png";
  }

  // Function to disable hover
  function disableHover() {
    isHoverEnabled = false;
    var imgElement = document.getElementById("special-item");
    imgElement.removeEventListener("mouseover", hoverImage);
    imgElement.removeEventListener("mouseout", resetImage);
  }
  // TESTIMONIAL SCRIPT 
