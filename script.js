// script.js

// Function to load HTML into a specific element
function loadHTML(elementId, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;

      // After loading header, set active navigation link
      if (elementId === "header") {
        setActiveNavLink();
        handleDropdowns();
        handleMobileMenu();
      }
    })
    .catch((error) => console.error("Error loading " + url + ":", error));
}

// Function to set the active navigation link based on current page
function setActiveNavLink() {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
    } else if (page === "" && link.getAttribute("href") === "index.html") {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Function to handle mobile menu toggle
function handleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const nav = document.querySelector("nav");

  if (menu) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
}

// Function to handle dropdowns in mobile view
function handleDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const dropbtn = dropdown.querySelector(".dropbtn");
    dropbtn.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.querySelector(".dropdown-content").classList.toggle("show");
    });
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", (e) => {
    if (!e.target.matches(".dropbtn")) {
      dropdowns.forEach((dropdown) => {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        }
      });
    }
  });
}

// Function to handle accordion in FAQs
function handleAccordion() {
  const acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      // Toggle between adding and removing the "active" class
      this.classList.toggle("active");

      // Toggle between hiding and showing the active panel
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

// Function to handle form validations and submissions
function handleForms() {
  // Contact Form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }

      // Simulate form submission
      alert("Thank you for contacting us! We will get back to you soon.");

      // Reset the form
      contactForm.reset();
    });
  }

  // Booking Form
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation
      const name = document.getElementById("booking-name").value.trim();
      const email = document.getElementById("booking-email").value.trim();
      const date = document.getElementById("booking-date").value;
      const ticketType = document.getElementById("ticket-type").value;
      const guests = document.getElementById("guests").value;

      if (
        name === "" ||
        email === "" ||
        date === "" ||
        ticketType === "" ||
        guests === ""
      ) {
        alert("Please fill in all fields.");
        return;
      }

      // Simulate form submission
      alert(
        "Thank you for your booking! We will confirm your reservation soon."
      );

      // Reset the form
      bookingForm.reset();
    });
  }
}

// Function to handle testimonial slider
function handleTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  let current = 0;

  // Initialize first testimonial
  if (testimonials.length > 0) {
    testimonials[0].classList.add("active");
  }

  // Handle navigation buttons
  const prevBtn = document.querySelector(".testimonial-slider::before");
  const nextBtn = document.querySelector(".testimonial-slider::after");

  // Since pseudo-elements cannot be selected directly, use click events on the parent
  const slider = document.querySelector(".testimonial-slider");

  slider.addEventListener("click", (e) => {
    if (e.target.closest(".testimonial-slider::before")) {
      // Previous button clicked
      testimonials[current].classList.remove("active");
      current = current === 0 ? testimonials.length - 1 : current - 1;
      testimonials[current].classList.add("active");
    } else if (e.target.closest(".testimonial-slider::after")) {
      // Next button clicked
      testimonials[current].classList.remove("active");
      current = current === testimonials.length - 1 ? 0 : current + 1;
      testimonials[current].classList.add("active");
    }
  });

  // Auto-slide
  setInterval(() => {
    testimonials[current].classList.remove("active");
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add("active");
  }, 5000); // Change testimonial every 5 seconds
}

// Function to handle attractions carousel
function handleCarousel() {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let current = 0;

  function showSlide(index) {
    carouselItems.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    current = current === 0 ? carouselItems.length - 1 : current - 1;
    showSlide(current);
  });

  nextBtn.addEventListener("click", () => {
    current = current === carouselItems.length - 1 ? 0 : current + 1;
    showSlide(current);
  });

  // Initialize
  showSlide(current);
}

// Initialize all functionalities after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Load Header and Footer
  loadHTML("header", "header.html");
  loadHTML("footer", "footer.html");

  // Handle FAQs Accordion
  handleAccordion();

  // Handle Forms
  handleForms();

  // Handle Testimonials
  handleTestimonials();

  // Handle Carousel
  handleCarousel();
});

//new function
//new function branch
//hiDS
//hih
//hi
