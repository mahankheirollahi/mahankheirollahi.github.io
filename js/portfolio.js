// Using Scroll Reveal to Reveal Screen Items
const sr = ScrollReveal ({
     distance: '80px',
     duration: 2200,
      reset: false})
sr.reveal('.header',{delay:100, origin: 'top'})
sr.reveal('.portfolio-gif',{delay:100, origin: 'left'})
sr.reveal('.card',{delay:100, origin: 'top'})
