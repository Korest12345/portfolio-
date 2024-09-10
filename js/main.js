const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

//Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});

//Hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});

//AOS animations settings
AOS.init({
  once: true,
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the default form submission

  var formData = new FormData(this);

   fetch("submit_form.php", {
      method: "POST",
      body: formData
  })
   .then(response => response.text())
   .then(data => {
      alert(data);  // Show popup message with response from PHP
      if (data === "Message Sent") {
          this.reset();  // Reset the form if the message was sent successfully
      }
  })
   .catch(error => {
      console.error("Error:", error);
      alert("There was an error sending the message.");
    });
});
