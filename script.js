let imageIndex =1;
window.onload = function() {
    showImages(imageIndex);
    automaticShow();
};

//Automatic image slider

function automaticShow() {
    let images = document.getElementsByClassName("images");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    images[imageIndex-1].style.display = "block";
    dots[imageIndex - 1].className += " active";

    imageIndex++;
    if (imageIndex > images.length) {
        imageIndex = 1;
    }

    setTimeout(automaticShow, 2000); // Change image every 2 seconds
  }

// Going to next image
function plusImages(n) {
    showImages(imageIndex += n);
}

// Showing the correct image
function currentImg(n) {
    showImages(imageIndex = n);
}

function showImages(n) {
    let i;
    let images = document.getElementsByClassName("images");
    let dots = document.getElementsByClassName("dot");
        if (n > images.length) {
            imageIndex = 1;
        }
        if (n < 1){
            imageIndex = images.length;
        }
    
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    images[imageIndex-1].style.display = "block";
    dots[imageIndex-1].className += " active";
}
