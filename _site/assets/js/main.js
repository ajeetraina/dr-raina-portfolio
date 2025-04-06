document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 70; // Account for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Sticky header color change on scroll
  const header = document.querySelector('.site-header');
  const scrollThreshold = 50;
  
  function updateHeaderOnScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', updateHeaderOnScroll);
  updateHeaderOnScroll(); // Initial check
  
  // Mobile menu toggle
  const menuTrigger = document.querySelector('.nav-trigger');
  const menuIcon = document.querySelector('.menu-icon');
  
  if (menuTrigger && menuIcon) {
    menuIcon.addEventListener('click', function() {
      const expanded = menuTrigger.checked;
      menuTrigger.checked = !expanded;
    });
  }
  
  // Form validation
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const nameInput = this.querySelector('#name');
      const emailInput = this.querySelector('#email');
      const messageInput = this.querySelector('#message');
      let isValid = true;
      
      if (!nameInput.value.trim()) {
        markInvalid(nameInput, 'Please enter your name');
        isValid = false;
      } else {
        markValid(nameInput);
      }
      
      if (!emailInput.value.trim()) {
        markInvalid(emailInput, 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        markInvalid(emailInput, 'Please enter a valid email address');
        isValid = false;
      } else {
        markValid(emailInput);
      }
      
      if (!messageInput.value.trim()) {
        markInvalid(messageInput, 'Please enter your message');
        isValid = false;
      } else {
        markValid(messageInput);
      }
      
      if (!isValid) {
        e.preventDefault();
      }
    });
  }
  
  function markInvalid(element, message) {
    const formGroup = element.closest('.form-group');
    formGroup.classList.add('error');
    
    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
  }
  
  function markValid(element) {
    const formGroup = element.closest('.form-group');
    formGroup.classList.remove('error');
    
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
