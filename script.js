// Responsive Hamburger Menu Logic
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// carosal js code start here
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}
// ends here
// form js code start here
const form = document.getElementById('userForm');
const inputs = form.querySelectorAll('input, textarea');

const validations = {
    firstName: {
        regex: /^[A-Za-z]{2,}$/,
        error: "First name must contain at least 2 letters."
    },
    lastName: {
        regex: /^[A-Za-z]{2,}$/,
        error: "Last name must contain at least 2 letters."
    },
    mobile: {
        regex: /^[6-9]\d{9}$/,
        error: "Mobile number must start with 6-9 and have 10 digits."
    },
    email: {
        regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        error: "Please enter a valid email address."
    },
    message: {
        regex: /^.{10,}$/,
        error: "Message must be at least 10 characters long."
    }
};

inputs.forEach(input => {
    input.addEventListener('input', function() {
        validateField(this);
    });

    input.addEventListener('blur', function() {
        validateField(this);
    });
});

function validateField(field) {
    const validation = validations[field.id];
    const errorElement = document.getElementById(`${field.id}Error`);
    const validElement = field.nextElementSibling.nextElementSibling;

    if (validation && !validation.regex.test(field.value)) {
        errorElement.textContent = validation.error;
        errorElement.style.display = 'block';
        validElement.style.display = 'none';
        field.setAttribute('aria-invalid', 'true');
        field.style.borderColor = '#f44336';
    } else {
        errorElement.style.display = 'none';
        validElement.style.display = 'block';
        field.removeAttribute('aria-invalid');
        field.style.borderColor = '#4CAF50';
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
        validateField(input);
        if (document.getElementById(`${input.id}Error`).style.display === 'block') {
            isValid = false;
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
        inputs.forEach(input => {
            input.style.borderColor = '#ddd';
            input.nextElementSibling.nextElementSibling.style.display = 'none';
        });
    } else {
        alert('Please fix the errors in the form.');
    }
});
// ends here
// prics js start here
  // Add animation on scroll
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pricing-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
// ends here
// contact js start here
 // Fade in animation on scroll
 document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.contact__fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => observer.observe(card));
});
// ends here
// cards js start here animations 
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5,
});

cards.forEach(card => observer.observe(card));