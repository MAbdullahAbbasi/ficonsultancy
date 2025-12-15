let responsiveNavbardiv = document.getElementById("responsiveNavbardiv");
let whatsAppContactPerson = document.getElementById("whatsAppContactPerson");

// ============================================
// Hero Carousel Functionality
// ============================================
let currentSlideIndex = 0;
let carouselInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    if (slides[index]) {
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    
    // Reset interval when manually changing slides
    clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 5000);
}

// Start automatic carousel
function startCarousel() {
    carouselInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    startCarousel();
});

// ============================================
// Navigation Functions
// ============================================

function handleRespNav(){
    responsiveNavbardiv.style.transform = "translateX(0%)";
    responsiveNavbardiv.style.transition = "all .3s ease-in-out";
}

function handleCrossClick(){
    responsiveNavbardiv.style.transform = "translateX(-110%)";
    responsiveNavbardiv.style.transition = "all .3s ease-in-out";
}

function handleAppointmentBtn(){
    window.location.href = "pages/appointment.html";
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

function handleEmailClick(){
    const email = "info@ficonsultancy.net";
    const subject = "Inquiry";
    const body = "";

    // Detect mobile device
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        setTimeout(() => {
            window.location.href = `googlegmail:///co?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }, 300);

    } else {
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
            "_blank"
        );
    }
}