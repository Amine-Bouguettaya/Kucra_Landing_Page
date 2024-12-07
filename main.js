let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

if (localStorage.getItem("active")) {
  let bg = document.getElementById("scrollTop");
  let submitButton = document.getElementById("submitButton");
  let card = document.getElementsByClassName("card");
  let learnbutton = document.getElementsByClassName("learnButton");
  let valueCards = document.getElementsByClassName("valueCard");
  let titleContainer = document.getElementById("promoCard");
  let joinButton = document.getElementsByClassName("joinButton");
  let promoButton = document.getElementsByClassName("promoButton");
  let readMore = document.getElementsByClassName("readMore");

    submitButton.style.backgroundColor = "#be2525";
  for (var i = 0; i < card.length; i++) {
    card[i].style.background = "radial-gradient(circle, #f58b8b 35%, #b81212 100%)";
  }
  for (var i = 0; i < valueCards.length; i++) {
    valueCards[i].style.color = "#fc6060";
  }
  for (var i = 0; i < readMore.length; i++) {
    readMore[i].style.color = "#fc6060";
  }
  for (var i = 0; i < joinButton.length; i++) {
    joinButton[i].style.border = "1px solid #fc6060"
    joinButton[i].style.color = "#fc6060";
  }
  bg.style.background = "radial-gradient(circle, #f58b8b 35%, #b81212 100%)";
  learnbutton[0].style.background = "#fc6060";
  promoButton[0].style.background = "#fc6060";
  titleContainer.style.background = "#fc6060";
  bg.classList.add("active");
}
function backgroundColorChange() {
    let bg = document.getElementById("scrollTop");
    let submitButton = document.getElementById("submitButton");
    let card = document.getElementsByClassName("card");
    let learnbutton = document.getElementsByClassName("learnButton");
    let valueCards = document.getElementsByClassName("valueCard");
    let titleContainer = document.getElementById("promoCard");
    let joinButton = document.getElementsByClassName("joinButton");
    let promoButton = document.getElementsByClassName("promoButton");
    let readMore = document.getElementsByClassName("readMore");
  
  if (bg.classList.contains("active")) {
      submitButton.style.backgroundColor = "#2596be";
      bg.style.background = "radial-gradient(circle, rgba(139,195,245,1) 35%, rgba(18,148,184,1) 100%)";
      learnbutton[0].style.background = "608cfc";
      titleContainer.style.background = "608cfc";
      for (var i = 0; i < card.length; i++) {
        card[i].style.background = "radial-gradient(circle, rgba(139,195,245,1) 35%, rgba(18,148,184,1) 100%)";
      }
      for (var i = 0; i < valueCards.length; i++) {
        valueCards[i].style.color = "#608cfc";
      }
      for (var i = 0; i < joinButton.length; i++) {
        joinButton[i].style.border = "1px solid #608cfc;";
        joinButton[i].style.color = "#608cfc";
      }
      for (var i = 0; i < readMore.length; i++) {
        readMore[i].style.color = "#608cfc";
      }
      promoButton[0].style.background = "608cfc";
      bg.classList.remove("active");
      localStorage.removeItem("active");
    } else {
        submitButton.style.backgroundColor = "#be2525";
      for (var i = 0; i < card.length; i++) {
        card[i].style.background = "radial-gradient(circle, #f58b8b 35%, #b81212 100%)";
      }
      for (var i = 0; i < valueCards.length; i++) {
        valueCards[i].style.color = "#fc6060";
      }
      for (var i = 0; i < readMore.length; i++) {
        readMore[i].style.color = "#fc6060";
      }
      for (var i = 0; i < joinButton.length; i++) {
        joinButton[i].style.border = "1px solid #fc6060"
        joinButton[i].style.color = "#fc6060";
      }
      bg.style.background = "radial-gradient(circle, #f58b8b 35%, #b81212 100%)";
      learnbutton[0].style.background = "#fc6060";
      promoButton[0].style.background = "#fc6060";
      titleContainer.style.background = "#fc6060";
      bg.classList.add("active");
      localStorage.setItem("active", "color: Red");
   }
  }