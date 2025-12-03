let responsiveNavbardiv = document.getElementById("responsiveNavbardiv");
let whatsAppContactPerson = document.getElementById("whatsAppContactPerson");

let container = document.getElementById("heroBannerDiv");
let triggeringBannerImagesVariable = 0;

let bannerImages = [
    "../images/consutancyBannerImages/image1.jpg",
    "../images/consutancyBannerImages/image2.jpg",
    "../images/consutancyBannerImages/image3.jpg",
    "../images/consutancyBannerImages/image4.jpg",
];

function handleRespNav(){
    responsiveNavbardiv.style.transform = "translateX(0%)";
    responsiveNavbardiv.style.transition = "all 1s ease-in-out";
}

function handleCrossClick(){
    responsiveNavbardiv.style.transform = "translateX(-110%)";
    responsiveNavbardiv.style.transition = "all 1s ease-in-out";
}

function handleAppointmentBtn(){
    // window.open("../pages/appointment.html", "_blank");
    window.location.href = "../pages/appointment.html";
}

function handleWhatsappOpener(){
    whatsAppContactPerson.style.display = "block";
}

function whatsAppCrossBtnhandle(){
    whatsAppContactPerson.style.display = "none";
}

function openWhatsAppContact1() {
  const phoneNumber = "923141503257";
  const message = "Hello, I'd like to connect with you!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function openWhatsAppContact2() {
  const phoneNumber = "923220846330";
  const message = "Hello, I'd like to connect with you!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function changeBannerImage()
{
    container.style.backgroundImage = `url('${bannerImages[i]}')`
    triggeringBannerImagesVariable = (triggeringBannerImagesVariable + 1) % bannerImages.length;
}

  changeBannerImage();
  setInterval(changeBannerImage, 100000);