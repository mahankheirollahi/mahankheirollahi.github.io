// Using Scroll Reveal to Reveal Screen Items
const sr = ScrollReveal ({
     distance: '80px',
     duration: 2200,
      reset: false})
sr.reveal('.gif',{delay:100, origin: 'top'})
sr.reveal('.header',{delay:300, origin: 'top'})
sr.reveal('.form',{delay:600, origin: 'left'})
