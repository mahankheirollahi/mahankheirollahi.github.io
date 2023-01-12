// Using Scroll Reveal to Reveal Screen Items
const sr = ScrollReveal ({
     distance: '80px',
     duration: 2200,
      reset: false})
sr.reveal('.navbar-nav',{delay:100, origin: 'top'})
// Home Section Animations
 sr.reveal('.biggest-heading,.description,.btn-cv,.social-media-cta',{delay:700, origin: 'left'})
 sr.reveal('.heading-animation',{delay:700, origin: 'right',})
 // Skill Section Animations
 sr.reveal('.skill-header',{delay:100, origin: 'top',})
 sr.reveal('.skill-card',{delay:700, origin: 'left',})
 // Certification Section Animations
 sr.reveal('.certification-header',{delay:100, origin: 'top',})
 sr.reveal('.certification-container',{delay:700, origin: 'left',})
 // Languages Section Animations
 sr.reveal('.language-header',{delay:100, origin: 'top',})
 sr.reveal('.language-animation',{delay:500, origin: 'left',})
 sr.reveal('.language-name',{delay:200, origin: 'right',})
 // Education Section Animation
 sr.reveal('.education-header',{delay:100, origin: 'top',})
 sr.reveal('.education-card',{delay:700, origin: 'left',})
