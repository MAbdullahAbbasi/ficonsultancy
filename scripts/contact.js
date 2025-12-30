// // EmailJS Configuration
// // Template is already set up with ID: d778vjo
// // Template variables: {{name}}, {{email}}, {{message}}, {{title}}, {{time}}
// // Service ID: service_nf7gomv

// // Initialize EmailJS when the script loads
// // EmailJS should be loaded before this script
// (function() {
//     // Wait for DOM and EmailJS to be ready
//     function initEmailJS() {
//         if (typeof emailjs !== 'undefined') {
//             emailjs.init("ho2gKdtfUB9Oq8Lu1")
//                 .then(function() {
//                     console.log('EmailJS initialized successfully');
//                 })
//                 .catch(function(error) {
//                     console.error('EmailJS initialization error:', error);
//                 });
//         } else {
//             // Retry after a short delay if EmailJS isn't loaded yet
//             setTimeout(initEmailJS, 100);
//         }
//     }
    
//     // Initialize when DOM is ready
//     if (document.readyState === 'loading') {
//         document.addEventListener('DOMContentLoaded', initEmailJS);
//     } else {
//         initEmailJS();
//     }
// })();

// // Contact Form Submission Handler
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById("contactForm");
    
//     if (contactForm) {
//         contactForm.addEventListener("submit", function(e) {
//             e.preventDefault();
            
//             // Check if EmailJS is available
//             if (typeof emailjs === 'undefined') {
//                 showNotification('EmailJS library not loaded. Please refresh the page.', 'error');
//                 console.error('EmailJS library is not loaded');
//                 return;
//             }
            
//             // Get the submit button
//             const submitButton = document.getElementById("submitbutton");
//             const originalText = submitButton.innerHTML;
            
//             // Disable button and show loading state
//             submitButton.disabled = true;
//             submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            
//             // Add additional fields to form for EmailJS template variables
//             // Template expects: {{name}}, {{email}}, {{message}}, {{title}}, {{time}}
//             // Form has: first_name, last_name, email, message
            
//             // Create hidden inputs for template variables
//             const nameField = document.createElement('input');
//             nameField.type = 'hidden';
//             nameField.name = 'name';
//             nameField.value = contactForm.first_name.value + ' ' + contactForm.last_name.value;
//             contactForm.appendChild(nameField);
            
//             const titleField = document.createElement('input');
//             titleField.type = 'hidden';
//             titleField.name = 'title';
//             titleField.value = 'New Contact Form Submission';
//             contactForm.appendChild(titleField);
            
//             const timeField = document.createElement('input');
//             timeField.type = 'hidden';
//             timeField.name = 'time';
//             timeField.value = new Date().toLocaleString();
//             contactForm.appendChild(timeField);
            
//             console.log('Sending email via EmailJS...');
//             console.log('Form data:', {
//                 name: nameField.value,
//                 email: contactForm.email.value,
//                 message: contactForm.message.value,
//                 title: titleField.value,
//                 time: timeField.value
//             });
            
//             // Send email using EmailJS sendForm method (more reliable for forms)
//             // Service ID: service_nf7gomv
//             // Template ID: d778vjo
//             emailjs.sendForm("service_nf7gomv", "d778vjo", contactForm)
//                 .then(function(response) {
//                     // Success
//                     submitButton.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
//                     submitButton.style.backgroundColor = '#4CAF50';
                    
//                     // Show success message
//                     showNotification('Message sent successfully! We will get back to you soon.', 'success');
                    
//                     // Remove temporary hidden fields
//                     const hiddenFields = contactForm.querySelectorAll('input[type="hidden"]');
//                     hiddenFields.forEach(field => {
//                         if (['name', 'title', 'time'].includes(field.name)) {
//                             field.remove();
//                         }
//                     });
                    
//                     // Reset form
//                     contactForm.reset();
                    
//                     // Reset button after 3 seconds
//                     setTimeout(function() {
//                         submitButton.disabled = false;
//                         submitButton.innerHTML = originalText;
//                         submitButton.style.backgroundColor = '';
//                     }, 3000);
//                 }, function(error) {
//                     // Error
//                     submitButton.innerHTML = originalText;
//                     submitButton.disabled = false;
                    
//                     // Remove temporary hidden fields
//                     const hiddenFields = contactForm.querySelectorAll('input[type="hidden"]');
//                     hiddenFields.forEach(field => {
//                         if (['name', 'title', 'time'].includes(field.name)) {
//                             field.remove();
//                         }
//                     });
                    
//                     // Detailed error logging
//                     console.error('EmailJS Error Details:', error);
//                     console.error('Error Status:', error.status);
//                     console.error('Error Text:', error.text);
                    
//                     // More specific error message
//                     let errorMessage = 'Failed to send message. ';
//                     if (error.status === 0) {
//                         errorMessage += 'Network error. Please check your internet connection.';
//                     } else if (error.status === 400) {
//                         errorMessage += 'Invalid request. Please check the form fields.';
//                     } else if (error.status === 401) {
//                         errorMessage += 'Authentication failed. Please check EmailJS configuration.';
//                     } else if (error.status === 404) {
//                         errorMessage += 'Service or template not found. Please verify EmailJS setup.';
//                     } else {
//                         errorMessage += 'Please try again or contact us directly at info@ficonsultancy.net';
//                     }
                    
//                     showNotification(errorMessage, 'error');
//                 });
//         });
//     }
// });

// // Notification function
// function showNotification(message, type) {
//     // Remove existing notification if any
//     const existingNotification = document.querySelector('.form-notification');
//     if (existingNotification) {
//         existingNotification.remove();
//     }
    
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = 'form-notification';
//     notification.textContent = message;
//     notification.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         padding: 15px 20px;
//         background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
//         color: white;
//         border-radius: 8px;
//         box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//         z-index: 10000;
//         font-size: 16px;
//         font-weight: 500;
//         animation: slideIn 0.3s ease-out;
//         max-width: 400px;
//     `;
    
//     // Add animation
//     const style = document.createElement('style');
//     style.textContent = `
//         @keyframes slideIn {
//             from {
//                 transform: translateX(400px);
//                 opacity: 0;
//             }
//             to {
//                 transform: translateX(0);
//                 opacity: 1;
//             }
//         }
//     `;
//     document.head.appendChild(style);
    
//     // Append to body
//     document.body.appendChild(notification);
    
//     // Remove after 5 seconds
//     setTimeout(function() {
//         notification.style.animation = 'slideIn 0.3s ease-out reverse';
//         setTimeout(function() {
//             notification.remove();
//         }, 300);
//     }, 5000);
// }


// ================================
// EmailJS Configuration
// ================================
// Template ID: d778vjo
// Service ID: service_nf7gomv
// Variables: {{name}}, {{email}}, {{message}}, {{title}}, {{time}}
// ================================
// EmailJS Initialization (v4 SAFE)
// ================================
(function () {
    function initEmailJS() {
        if (typeof emailjs !== "undefined") {
            emailjs.init("ho2gKdtfUB9Oq8Lu1"); // ✅ Public Key
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
// Contact Form Submission
// ================================
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (typeof emailjs === "undefined") {
            showNotification("Email service not loaded. Please refresh the page.", "error");
            return;
        }

        const submitButton = document.getElementById("submitbutton");
        const originalText = submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML = `<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>`;

        // Get form values
        const firstName = contactForm.querySelector('[name="first_name"]')?.value || '';
        const lastName = contactForm.querySelector('[name="last_name"]')?.value || '';
        const email = contactForm.querySelector('[name="email"]')?.value || '';
        const message = contactForm.querySelector('[name="message"]')?.value || '';

        // Validation
        if (!firstName || !email || !message) {
            showNotification("Please fill all required fields.", "error");
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            return;
        }

        // ✅ SEND EMAIL
        emailjs.send(
            "service_nf7gomv",       // ✅ Your Service ID
            "template_isbsonk",      // ✅ Your Template ID
            {
                name: `${firstName} ${lastName}`.trim(),
                email: email,
                message: message,
                title: "New Contact Form Submission",
                time: new Date().toLocaleString()
            }
        )
        .then(() => {
            submitButton.innerHTML = `<span>Message Sent!</span> <i class="fas fa-check"></i>`;
            submitButton.style.backgroundColor = "#4CAF50";

            showNotification("Message sent successfully! We will get back to you soon.", "success");

            contactForm.reset();

            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                submitButton.style.backgroundColor = "";
            }, 3000);
        })
        .catch(error => {
            console.error("EmailJS Error:", error);

            let errorMessage = "Failed to send message. ";

            if (error.status === 400) {
                errorMessage += "Invalid request.";
            } else if (error.status === 401) {
                errorMessage += "Authentication failed.";
            } else if (error.status === 404) {
                errorMessage += "Service or template not found.";
            } else {
                errorMessage += "Please try again later.";
            }

            showNotification(errorMessage, "error");

            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        });
    });
});


// ================================
// Notification UI
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
