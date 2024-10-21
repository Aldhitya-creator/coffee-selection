    // Hamburger menu toggle
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); // Show/Hide mobile menu on click
});

// dark mode toggle
const toggleDarkMode = () => {
    const html = document.documentElement;
    const themeIcon = document.getElementById("themeIcon");
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1M12 21v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h1M21 12h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7.5 7.5 0 1010.5 9.79z"></path>';
    }
};

// Memuat preferensi tema dari localStorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Memulai GSAP animation
gsap.registerPlugin(ScrollTrigger);

 // Membuat timeline untuk animasi
 const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".coffee",  // Element yang akan memicu scroll
        start: "clamp(top center)",
        end: "bottom top",
        scrub: true,
        markers: false,
        id: "scrub",
    } 
});

// Tambahkan animasi ke timeline
// timeline.to(".coffee", { 
//     duration: 8,
//     x: 450,
//     y: 500,
//     x: 300,
//     rotation:60,
//     scale: 1,
//     rotation: 360,
//   })
//   .to(".coffee", {
//     duration: 2,
//     // scale: 2
//   });

// timeline.from(".yes",  {
//     opacity : 0
// });
// timeline.to(".yes", {
//     opacity : 100
// });

  // Coffee beans entrance animation
  gsap.from(".beans", {
    y: 100, // Starting position above the viewport
    scale: 0.2, // Start with smaller size
    opacity: 0, // Start with invisible box
    rotation: 40, // Small rotation to add the "beans bean" effect
    duration: 2, // Duration of the entrance
    ease: "elastic.out(0.5, 0.5)", // Elastic effect to mimic bouncing beans beans
    onComplete: () => {
      // Bounce loop animation after entrance
      gsap.to(".beans", {
        y: 20, 
        duration: 2, 
        ease: "power1.in", 
        repeat: -1, 
        yoyo: true
      });
    }
  });