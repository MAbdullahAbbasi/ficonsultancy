// EmailJS Configuration
// To use this, you need to:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the placeholders below with your actual values

(function() {
    // Initialize EmailJS with your Public Key
    // Get this from: https://dashboard.emailjs.com/admin/integration
    emailjs.init("ho2gKdtfUB9Oq8Lu1");
})();

// Contact Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Get the submit button
            const submitButton = document.getElementById("submitbutton");
            const originalText = submitButton.innerHTML;
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            
            // Send email using EmailJS
            // Replace these with your actual values:
            // - SERVICE_ID: Your EmailJS service ID (from https://dashboard.emailjs.com/admin)
            // - TEMPLATE_ID: Your EmailJS template ID (from https://dashboard.emailjs.com/admin/template)
            // - PUBLIC_KEY: Your EmailJS public key (from https://dashboard.emailjs.com/admin/integration)
            emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
                .then(function(response) {
                    // Success
                    submitButton.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
                    submitButton.style.backgroundColor = '#4CAF50';
                    
                    // Show success message
                    showNotification('Message sent successfully! We will get back to you soon.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(function() {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalText;
                        submitButton.style.backgroundColor = '';
                    }, 3000);
                }, function(error) {
                    // Error
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    
                    // Show error message
                    showNotification('Failed to send message. Please try again or contact us directly.', 'error');
                    
                    console.error('EmailJS Error:', error);
                });
        });
    }
});

// Notification function
function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.form-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'form-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-size: 16px;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Append to body
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(function() {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(function() {
            notification.remove();
        }, 300);
    }, 5000);
}
