(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(function() {
        alert("Message sent successfully!");
      }, function(error) {
        alert("Failed to send message: " + JSON.stringify(error));
      });
  });
