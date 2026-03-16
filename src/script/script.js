document.querySelector("#slogan").classList.add("visible")
const carouselBox = document.querySelector('#carousel_box')

// código base para o Observer
if (window.innerWidth > 600) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('visible')
                
                observer.unobserve(e.target)
            }
        })
    }, {
        threshold: 0.5 // 50% do elemento visível
    })
    
    observer.observe(carouselBox);
} else {carouselBox.classList.add('visible')}