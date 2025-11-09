// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Smooth Scroll & Active Link Highlight
document.querySelectorAll('.nav-menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    // Remove active class from all links
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to clicked link
    this.classList.add('active');
  });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-menu a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.opacity = '1';
    scrollToTopBtn.style.pointerEvents = 'auto';
  } else {
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.style.pointerEvents = 'none';
  }
});

// Scroll to Top Button
document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// Animasi Circle Chart (Soft Skills)
document.addEventListener('DOMContentLoaded', function() {
  const circularProgresses = document.querySelectorAll('.circular-progress');

  circularProgresses.forEach(chart => {
    const percent = parseInt(chart.getAttribute('data-percent'));
    const circumference = 2 * Math.PI * 45; // radius = 45
    const offset = circumference - (percent / 100) * circumference;

    const fillCircle = chart.querySelector('.fill-circle');
    // set initial state (full circle)
    fillCircle.style.strokeDashoffset = `${circumference}`;
    // fillCircle.style.strokeDashoffset = ${offset};

    // Trigger animation after a short delay
    setTimeout(() => {
      fillCircle.style.transition = 'stroke-dashoffset 2s ease-in-out';
      fillCircle.style.strokeDashoffset = `${offset}`;
    }, 300);
  });
});

// Animasi Progress Bar (Hard Skills) - Scroll Triggered
const skillCards = document.querySelectorAll('.skill-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target.querySelector('.progress-fill');
      const width = progressBar.style.width;
      progressBar.style.width = '0%';
      setTimeout(() => {
        progressBar.style.width = width;
      }, 100);
    }
  });
}, { threshold: 0.2 });

skillCards.forEach(card => {
  observer.observe(card);
});

// // Audio Player
// const audio = new Audio('audio/song`1.mp3'); // Ganti dengan path lagu kamu
// const audioToggle = document.getElementById('audioToggle');
// const audioVolume = document.getElementById('audioVolume');

// // Set volume awal
// audio.volume = 0.3;

// // Play/Pause toggle
// audioToggle.addEventListener('click', () => {
//   if (audio.paused) {
//     audio.play();
//     audioToggle.innerHTML = '<i class="fas fa-pause"></i>';
//   } else {
//     audio.pause();
//     audioToggle.innerHTML = '<i class="fas fa-play"></i>';
//   }
// });

// // Volume control
// audioVolume.addEventListener('input', () => {
//   audio.volume = audioVolume.value;
// });
