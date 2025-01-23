// Initialize Swiper instance for the slider
var swiper = new Swiper(".swiper", {
    direction: "vertical",      //vertically
    slidesPerView: 1,           // Only one slide visible
    spaceBetween: 0,           // 0px space 
    mousewheel: true,           // Enables mouse wheel
    speed: 1000,                // Transition speed of 1 second

    pagination: {
        el: ".swiper-pagination",  
        clickable: true,        
    },
});


// GSAP Animations
// yellow section moving it down from -1000px position over 2 seconds
gsap.from(".first .yellow", {
    y: -1000,    
    duration: 2  
});

// black section moving it up from 1000px position over 2 seconds
gsap.from(".first .black", {
    y: 1000,     
    duration: 2  
});

// first image sliding it in from the right
gsap.from(".first img", {
    x: 1000,     
    duration: 2  
});

// text appearing with a fade-in effect and delay
gsap.from(".first .small", {
    y: 100,     
    opacity: 0,  // Starts from invisible state
    delay: 3
});

// Letters in the Big textt
gsap.from(".first .big span", {
    y: 100,      
    opacity: 0,  
    stagger: 0.5, 
    delay: 1.5
});

