document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const terms = document.getElementById("terms").checked;

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            alert("Please enter a valid name.");
            isValid = false;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (phone && !/^\d{10,}$/.test(phone)) {
            alert("Please enter a valid phone number.");
            isValid = false;
        }

        if (subject.length === 0) {
            alert("Please enter a subject.");
            isValid = false;
        }

        if (message.length < 10) {
            alert("Your message must be at least 10 characters long.");
            isValid = false;
        }

        if (!terms) {
            alert("You must agree to the terms and conditions.");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});
