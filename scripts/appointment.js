(function () {
    if (typeof emailjs !== "undefined") {
        emailjs.init("ho2gKdtfUB9Oq8Lu1"); // your PUBLIC KEY
        console.log("EmailJS initialized");
    } else {
        console.error("EmailJS failed to load");
    }
})();

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentFormDiv");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const btn = document.getElementById("appointbtn");
        const originalText = btn.innerHTML;

        btn.disabled = true;
        btn.innerHTML = `<span>Booking...</span> <i class="fas fa-spinner fa-spin"></i>`;

        // Get values
        const name = form.querySelector('[name="name"]')?.value || "";
        const email = form.querySelector('[name="email"]')?.value || "";
        const date = form.querySelector('[name="date"]')?.value || "";
        const time = form.querySelector('[name="time"]')?.value || "";
        const message = form.querySelector('[name="message"]')?.value || "No message provided";

        // Validation
        if (!name || !email || !date || !time) {
            showNotification("Please fill all required fields.", "error");
            btn.disabled = false;
            btn.innerHTML = originalText;
            return;
        }

        // ✅ reCAPTCHA validation (inside submit handler)
        const captchaResponse = grecaptcha.getResponse();
        if (!captchaResponse) {
            showNotification("Please verify that you are not a robot.", "error");
            btn.disabled = false;
            btn.innerHTML = originalText;
            return; // ✅ now legal because it's inside the function
        }

        // ✅ SEND EMAIL
        emailjs.send(
            "service_nf7gomv",       // Service ID
            "template_vnsddkc",      // Template ID
            {
                name: name,
                email: email,
                date: date,
                time: time,
                message: message,
                time_sent: new Date().toLocaleString()
            }
        )
        .then(() => {
            showNotification("Appointment booked successfully!", "success");

            form.reset();
            grecaptcha.reset(); // reset reCAPTCHA after submission

            btn.innerHTML = `<span>Booked</span> <i class="fas fa-check"></i>`;
            btn.style.backgroundColor = "#4CAF50";

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.style.backgroundColor = "";
            }, 3000);
        })
        .catch(error => {
            console.error("EmailJS Error:", error);

            showNotification("Failed to book appointment. Please try again.", "error");

            btn.disabled = false;
            btn.innerHTML = originalText;
        });
    });
});

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
        z-index: 9999;
        font-size: 15px;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
        max-width: 350px;
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
    }, 4000);
}
