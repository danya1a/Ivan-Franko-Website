document.addEventListener("DOMContentLoaded", () => {
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.set("body", { overflow: "hidden" });

    const preloaderTL = gsap.timeline();
    
    preloaderTL
        .to(".preloader-quote", {
            duration: 1.5,
            opacity: 1,
            y: 0,
            ease: "power2.out",
            delay: 0.5
        })
        .to(".preloader-quote", {
            duration: 1,
            opacity: 0,
            y: -30,
            ease: "power2.in",
            delay: 1
        })
        .to("#preloader", {
            duration: 1.2,
            yPercent: -100,
            ease: "power3.inOut"
        })
        .set("body", { overflow: "auto" });

    const introTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro-section",
            start: "top 60%",
            toggleActions: "play none none none"
        }
    });

    introTL
        .from(".intro-title", { opacity: 0, x: -50, duration: 1, ease: "power3.out" })
        .from(".intro-subtitle", { opacity: 0, x: -50, duration: 1, ease: "power3.out" }, "-=0.8")
        .from(".intro-quote", { opacity: 0, x: -50, duration: 1, ease: "power3.out" }, "-=0.8")
        .from(".intro-image-wrapper", { opacity: 0, scale: 0.8, duration: 1.2, ease: "power3.out" }, "-=1");
        
    
    gsap.to(".about-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });

    const track = document.querySelector(".horizontal-track");
    
    gsap.to(track, {
        x: () => -(track.scrollWidth - document.documentElement.clientWidth + 160), 
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-scroll-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: ".sticky-wrapper",
            invalidateOnRefresh: true
        }
    });
    
    const quoteCards = gsap.utils.toArray(".quote-card");
    
    quoteCards.forEach(card => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 70%",
                scrub: 1,
            }
        });
    });
    
    gsap.from(".final-thought", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: ".final-thought",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

});