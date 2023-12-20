let container3 =
document.querySelector(".container3");
let observer =
new IntersectionObserver(enteries => {
    enteries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform ="translateX(1)"
        }
    }
        
    )
}
)
observer.observe(container3);
    
    