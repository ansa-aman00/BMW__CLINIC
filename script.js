// Appointment Form

const appointmentForm =
    document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your appointment request has been received."
        );

        appointmentForm.reset();

    });

}


// Contact Form

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been submitted."
        );

        contactForm.reset();

    });

}


// Smooth page experience

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "BMW Clinic website loaded successfully."
        );

    }
);