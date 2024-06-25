function toggleMenu() {
    var nav = document.querySelector('.nav ul');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}
// Get the modal
var bookNowModal = document.getElementById('bookNowModal');
var handymanModal = document.getElementById('handymanModal');

// Get the button that opens the modal
var bookNowBtn = document.querySelector('.btn[href="#bookNow"]');
var handymanBtn = document.querySelector('.btn[href="#handyman"]');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
bookNowBtn.onclick = function() {
    bookNowModal.style.display = "block";
}
handymanBtn.onclick = function() {
    handymanModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (let span of spans) {
    span.onclick = function() {
        span.parentElement.parentElement.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == bookNowModal || event.target == handymanModal) {
        event.target.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    let currentTestimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    // Function to update the testimonial display
    function updateTestimonialDisplay() {
        testimonials.forEach((testimonial, index) => {
            if (index === currentTestimonialIndex) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
    }

    // Function to move to the next testimonial
    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
        updateTestimonialDisplay();
    }

    // Initialize the first testimonial
    updateTestimonialDisplay();

    // Set interval to automatically change testimonials every 3 seconds
    setInterval(nextTestimonial, 3000);
});
