document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
});
window.addEventListener('scroll', () => {
  const homeSection = document.querySelector('.fade-in');
  const rect = homeSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    homeSection.classList.add('active');
  }
});

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('#navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }
});

// Fade-in sections when in view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-section');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden-section');
  observer.observe(section);
});

// Remove blinking cursor after typing animation completes
setTimeout(() => {
  const lead = document.querySelector('.lead');
  if (lead) {
    lead.style.borderRight = 'none';
  }
}, 4500);
