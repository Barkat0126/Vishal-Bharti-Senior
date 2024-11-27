// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    
    container.addEventListener('mouseover', () => {
        slider.style.animationPlayState = 'paused';
    });

    container.addEventListener('mouseout', () => {
        slider.style.animationPlayState = 'running';
    });
});