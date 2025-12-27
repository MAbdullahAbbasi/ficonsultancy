let responsiveNavbardiv = null;
let whatsAppContactPerson = null;
let menuBackdrop = null;

// Function to get responsive navbar element
function getResponsiveNavbar() {
    if (!responsiveNavbardiv) {
        responsiveNavbardiv = document.getElementById("responsiveNavbardiv");
    }
    return responsiveNavbardiv;
}

// Function to get WhatsApp contact person element
function getWhatsAppContactPerson() {
    if (!whatsAppContactPerson) {
        whatsAppContactPerson = document.getElementById("whatsAppContactPerson");
    }
    return whatsAppContactPerson;
}

// Initialize backdrop overlay
function initMenuBackdrop() {
    if (!menuBackdrop) {
        menuBackdrop = document.createElement('div');
        menuBackdrop.className = 'menuBackdrop';
        menuBackdrop.id = 'menuBackdrop';
        document.body.appendChild(menuBackdrop);
        
        // Close menu when backdrop is clicked
        menuBackdrop.addEventListener('click', function() {
            closeMobileMenu();
        });
    }
}

// Swipe-to-close gesture variables
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;
const minSwipeDistance = 50; // Minimum distance for swipe

// ============================================
// Hero Carousel Functionality
// ============================================
let currentSlideIndex = 0;
let previousSlideIndex = 0;
let carouselInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    // Remove all classes from all slides
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Add prev class to previous slide (for slide-out animation)
    if (slides[previousSlideIndex]) {
        slides[previousSlideIndex].classList.add('prev');
    }

    // Add active class to current slide and dot
    if (slides[index]) {
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Update previous index
    previousSlideIndex = index;
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
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on index page (has .carousel-slide)
    const indexCarousel = document.querySelectorAll('.carousel-slide');
    if (indexCarousel.length > 0) {
        showSlide(0);
        startCarousel();
    }

    // Initialize services page carousel
    const servicesCarousel = document.querySelectorAll('.services-carousel-slide');
    if (servicesCarousel.length > 0) {
        initializeServicesCarousel();
    }
});

// ============================================
// Services Page Carousel Functionality
// ============================================
let servicesCurrentSlideIndex = 0;
let servicesPreviousSlideIndex = 0;
let servicesCarouselInterval;

function showServicesSlide(index) {
    const slides = document.querySelectorAll('.services-carousel-slide');

    // Remove all classes from all slides
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });

    // Add prev class to previous slide (for slide-out animation)
    if (slides[servicesPreviousSlideIndex]) {
        slides[servicesPreviousSlideIndex].classList.add('prev');
    }

    // Add active class to current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }

    // Update previous index
    servicesPreviousSlideIndex = index;
}

function nextServicesSlide() {
    const slides = document.querySelectorAll('.services-carousel-slide');
    servicesCurrentSlideIndex = (servicesCurrentSlideIndex + 1) % slides.length;
    showServicesSlide(servicesCurrentSlideIndex);
}

function initializeServicesCarousel() {
    showServicesSlide(0);
    // Change slide every 2 seconds (2000ms)
    servicesCarouselInterval = setInterval(nextServicesSlide, 2000);
}

// ============================================
// Navigation Functions
// ============================================

function openMobileMenu() {
    const responsiveNavbardiv = getResponsiveNavbar();
    if (!responsiveNavbardiv) return;
    
    initMenuBackdrop();
    
    // Save current scroll position before locking
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    
    responsiveNavbardiv.style.transform = "translateX(0%)";
    responsiveNavbardiv.style.transition = "all .3s ease-in-out";
    responsiveNavbardiv.classList.add('active');
    
    // Show backdrop
    if (menuBackdrop) {
        menuBackdrop.classList.add('active');
    }
    
    // Lock body scroll
    document.body.classList.add('menuOpen');
    
    // Hide hamburger, show cross
    const hamburgerIcon = document.getElementById('openMenu');
    const closeIcon = document.getElementById('closeMenu');
    
    if (hamburgerIcon) {
        hamburgerIcon.style.display = 'none';
    }
    if (closeIcon) {
        closeIcon.style.display = 'flex';
    }
}

function closeMobileMenu() {
    const responsiveNavbardiv = getResponsiveNavbar();
    if (!responsiveNavbardiv) return;
    
    responsiveNavbardiv.style.transform = "translateX(-110%)";
    responsiveNavbardiv.style.transition = "all .3s ease-in-out";
    responsiveNavbardiv.classList.remove('active');
    
    // Hide backdrop
    if (menuBackdrop) {
        menuBackdrop.classList.remove('active');
    }
    
    // Unlock body scroll and restore scroll position
    const scrollY = document.body.style.top;
    document.body.classList.remove('menuOpen');
    document.body.style.top = '';
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    // Show hamburger, hide cross
    const hamburgerIcon = document.getElementById('openMenu');
    const closeIcon = document.getElementById('closeMenu');
    if (hamburgerIcon) {
        hamburgerIcon.style.display = 'flex';
    }
    if (closeIcon) {
        closeIcon.style.display = 'none';
    }
}

function handleRespNav() {
    // Toggle menu: if open, close it; if closed, open it
    const responsiveNavbardiv = getResponsiveNavbar();
    if (!responsiveNavbardiv) {
        console.error('Responsive navbar element not found!');
        return;
    }
    if (responsiveNavbardiv.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

// Make function globally accessible
window.handleRespNav = handleRespNav;

function handleCrossClick() {
    closeMobileMenu();
}

// Swipe-to-close gesture handler
function setupSwipeToClose() {
    const responsiveNavbardiv = getResponsiveNavbar();
    if (!responsiveNavbardiv) return;
    
    responsiveNavbardiv.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    responsiveNavbardiv.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;
    
    // Check if horizontal swipe is greater than vertical (more horizontal than vertical)
    // and if swipe distance is sufficient
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        // Swipe left (close menu) - user started on the right and swiped left
        if (deltaX > 0) {
            closeMobileMenu();
        }
    }
}

// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
    // Ensure elements are found
    responsiveNavbardiv = getResponsiveNavbar();
    whatsAppContactPerson = getWhatsAppContactPerson();
    
    // Initialize backdrop
    initMenuBackdrop();
    
    // Setup swipe-to-close
    setupSwipeToClose();
    
    const mobileLinks = document.querySelectorAll('.listsrespnav');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close the menu when a link is clicked
            closeMobileMenu();
        });
    });
    
    // Close menu when appointment button is clicked
    const appointmentBtn = document.getElementById('MakeAppointmentMobile');
    if (appointmentBtn) {
        appointmentBtn.addEventListener('click', function() {
            // Menu will close after navigation, but we can close it immediately for better UX
            setTimeout(closeMobileMenu, 100);
        });
    }
});

function handleAppointmentBtn() {
    // Get the current path and determine the correct relative path to appointment.html
    const currentPath = window.location.pathname;
    const currentUrl = window.location.href;
    let appointmentPath;
    
    // Check if we're in a subdirectory (services/* or industries/*)
    if (currentPath.includes('/pages/services/') || currentPath.includes('/pages/industries/')) {
        // From subdirectories (services/* or industries/*) - go up one level
        appointmentPath = "../appointment.html";
    } 
    // Check if we're in the pages directory (but not in a subdirectory)
    else if (currentPath.includes('/pages/') && !currentPath.includes('/pages/services/') && !currentPath.includes('/pages/industries/')) {
        // From pages directory (services.html, industries.html, contact.html, appointment.html, etc.)
        appointmentPath = "appointment.html";
    } 
    // Check if we're at root (index.html or just /)
    else if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/index.html') || currentPath.endsWith('/')) {
        // From root (index.html)
        appointmentPath = "pages/appointment.html";
    } 
    // Fallback: try to detect based on URL structure
    else {
        // Count directory depth
        const depth = (currentPath.match(/\//g) || []).length - 1;
        if (depth > 1) {
            // We're in a subdirectory, go up
            appointmentPath = "../appointment.html";
        } else if (depth === 1) {
            // We're in pages directory
            appointmentPath = "appointment.html";
        } else {
            // We're at root
            appointmentPath = "pages/appointment.html";
        }
    }
    
    window.location.href = appointmentPath;
}

function handleWhatsappOpener() {
    const whatsAppContactPerson = getWhatsAppContactPerson();
    if (whatsAppContactPerson) {
        whatsAppContactPerson.style.display = "block";
    }
}

function whatsAppCrossBtnhandle() {
    const whatsAppContactPerson = getWhatsAppContactPerson();
    if (whatsAppContactPerson) {
        whatsAppContactPerson.style.display = "none";
    }
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

function handleEmailClick() {
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

// ============================================
// Search Functionality
// ============================================

function handleSearch() {
    const searchInput = document.getElementById('searchBarInput');
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        return; // Don't search if input is empty
    }

    // Simple search: highlight matching text on the page
    // You can extend this to redirect to a search results page or perform more complex searches
    const searchableText = document.body.innerText.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    if (searchableText.includes(searchTermLower)) {
        // Find and scroll to first occurrence
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            if (node.textContent.toLowerCase().includes(searchTermLower)) {
                node.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Highlight the text (optional)
                const range = document.createRange();
                const selection = window.getSelection();
                range.selectNodeContents(node.parentElement);
                selection.removeAllRanges();
                selection.addRange(range);
                break;
            }
        }
    } else {
        alert(`No results found for "${searchTerm}"`);
    }
}

// Mobile search handler
function handleMobileSearch() {
    const searchInput = document.getElementById('mobileSearchBarInput');
    const searchTerm = searchInput ? searchInput.value.trim() : '';

    if (searchTerm === '') {
        return; // Don't search if input is empty
    }

    // Use the same search logic as desktop
    const searchableText = document.body.innerText.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    if (searchableText.includes(searchTermLower)) {
        // Find and scroll to first occurrence
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            if (node.textContent.toLowerCase().includes(searchTermLower)) {
                // Close menu first
                closeMobileMenu();
                // Then scroll to result
                setTimeout(() => {
                    node.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Highlight the text (optional)
                    const range = document.createRange();
                    const selection = window.getSelection();
                    range.selectNodeContents(node.parentElement);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }, 300);
                break;
            }
        }
    } else {
        // Close menu and show alert
        closeMobileMenu();
        setTimeout(() => {
            alert(`No results found for "${searchTerm}"`);
        }, 300);
    }
}

// Allow Enter key to trigger search (both desktop and mobile)
document.addEventListener('DOMContentLoaded', function() {
    // Desktop search
    const searchInput = document.getElementById('searchBarInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }
    
    // Mobile search
    const mobileSearchInput = document.getElementById('mobileSearchBarInput');
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleMobileSearch();
            }
        });
    }
});