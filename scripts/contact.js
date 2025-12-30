// ================================
// EmailJS Configuration
// ================================
const SERVICE_ID = "service_nf7gomv";           // Your EmailJS Service ID
const TEMPLATE_ID_MAIN = "template_isbsonk";    // Template for main email to you
const TEMPLATE_ID_REPLY = "template_auto_reply"; // Template for auto-reply to user
const PUBLIC_KEY = "ho2gKdtfUB9Oq8Lu1";        // Your EmailJS public key
const SITE_KEY = "6Lf8dzssAAAAAAGge1I5Hum8ytNE9jOCeQhTePas"; // reCAPTCHA site key

// ================================
// Initialize EmailJS
// ================================
(function () {
    function initEmailJS() {
        if (typeof emailjs !== "undefined") {
            emailjs.init(PUBLIC_KEY);
            console.log("EmailJS initialized successfully");
        } else {
            setTimeout(initEmailJS, 100);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initEmailJS);
    } else {
        initEmailJS();
    }
})();

// ================================
// Helper Functions for Form Field Management
// ================================
function disableFormFields(form) {
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    console.log('Found', inputs.length, 'inputs to disable');
    inputs.forEach(input => {
        input.disabled = true;
        input.style.opacity = '0.6';
        input.style.cursor = 'not-allowed';
        input.style.backgroundColor = '#f5f5f5'; // Add visual feedback
        console.log('Disabled:', input.name || input.id);
    });
}

function enableFormFields(form) {
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    console.log('Found', inputs.length, 'inputs to enable');
    inputs.forEach(input => {
        input.disabled = false;
        input.style.opacity = '';
        input.style.cursor = '';
        input.style.backgroundColor = ''; // Reset background
        console.log('Enabled:', input.name || input.id);
    });
}

// ================================
// Contact Form Submission
// ================================
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    console.log('Contact form found:', !!contactForm);
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const submitButton = document.getElementById("submitbutton");
        const originalText = submitButton.innerHTML;

        // Disable button and form fields, show loading
        submitButton.disabled = true;
        console.log('About to disable form fields');
        disableFormFields(contactForm);
        console.log('Form fields disabled');
        submitButton.innerHTML = `<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>`;

        // Get form values
        const firstName = contactForm.querySelector('[name="first_name"]')?.value.trim() || '';
        const lastName = contactForm.querySelector('[name="last_name"]')?.value.trim() || '';
        const email = contactForm.querySelector('[name="email"]')?.value.trim() || '';
        const message = contactForm.querySelector('[name="message"]')?.value.trim() || '';

        // Validation
        if (!firstName || !email || !message) {
            showNotification("Please fill all required fields.", "error");
            submitButton.disabled = false;
            enableFormFields(contactForm);
            submitButton.innerHTML = originalText;
            return;
        }

        // Check reCAPTCHA
        const captchaResponse = grecaptcha.getResponse();
        if (!captchaResponse) {
            showNotification("Please verify that you are not a robot.", "error");
            submitButton.disabled = false;
            enableFormFields(contactForm);
            submitButton.innerHTML = originalText;
            return;
        }

        // Prepare email data
        const templateParams = {
            name: `${firstName} ${lastName}`.trim(),
            email: email,
            message: message,
            title: "New Contact Form Submission",
            time: new Date().toLocaleString()
        };

        // Temporarily simulate form submission for testing
        setTimeout(() => {
            // Success notification
            submitButton.innerHTML = `<span>Message Sent!</span> <i class="fas fa-check"></i>`;
            submitButton.style.backgroundColor = "#4CAF50";
            showNotification("Message sent successfully! We will get back to you soon.", "success");

            contactForm.reset();
            grecaptcha.reset(); // reset reCAPTCHA after submission

            setTimeout(() => {
                submitButton.disabled = false;
                console.log('About to enable form fields');
                enableFormFields(contactForm);
                console.log('Form fields enabled');
                submitButton.innerHTML = originalText;
                submitButton.style.backgroundColor = "";
            }, 3000);
        }, 2000); // Simulate 2 second delay

        /*
        // Send main email to you
        emailjs.send(SERVICE_ID, TEMPLATE_ID_MAIN, templateParams)
            .then(() => {
                // Send auto-reply to user
                emailjs.send(SERVICE_ID, TEMPLATE_ID_REPLY, templateParams)
                    .then(() => console.log("Auto-reply sent successfully"))
                    .catch(err => console.error("Auto-reply failed:", err));

                // Success notification
                submitButton.innerHTML = `<span>Message Sent!</span> <i class="fas fa-check"></i>`;
                submitButton.style.backgroundColor = "#4CAF50";
                showNotification("Message sent successfully! We will get back to you soon.", "success");

                contactForm.reset();
                grecaptcha.reset(); // reset reCAPTCHA after submission

                setTimeout(() => {
                    submitButton.disabled = false;
                    enableFormFields(contactForm);
                    submitButton.innerHTML = originalText;
                    submitButton.style.backgroundColor = "";
                }, 3000);
            })
            .catch(error => {
                console.error("EmailJS Error:", error);

                let errorMessage = "Failed to send message. ";
                if (error.status === 400) errorMessage += "Invalid request.";
                else if (error.status === 401) errorMessage += "Authentication failed.";
                else if (error.status === 404) errorMessage += "Service or template not found.";
                else errorMessage += "Please try again later.";

                showNotification(errorMessage, "error");
                submitButton.disabled = false;
                enableFormFields(contactForm);
                submitButton.innerHTML = originalText;
            });
        */
    });
});

// ================================
// Notification Function
// ================================
function showNotification(message, type) {
    const old = document.querySelector(".form-notification");
    if (old) old.remove();

    const notification = document.createElement("div");
    notification.className = "form-notification";
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === "success" ? "#4CAF50" : "#f44336"};
        color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-size: 16px;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;

    if (!document.getElementById("notify-style")) {
        const style = document.createElement("style");
        style.id = "notify-style";
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = "slideIn 0.3s ease-out reverse";
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}
