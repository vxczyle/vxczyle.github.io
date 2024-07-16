// script.js

const trailContainer = document.getElementById('trail');
const numDots = 20;
const dots = [];

for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    trailContainer.appendChild(dot);
    dots.push(dot);
}

let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const nextDot = dots[i + 1] || dots[0];
        
        const dx = (mouseX - dot.offsetLeft) * 0.3;
        const dy = (mouseY - dot.offsetTop) * 0.3;
        
        dot.style.left = `${dot.offsetLeft + dx}px`;
        dot.style.top = `${dot.offsetTop + dy}px`;
        
        dot.style.opacity = (dots.length - i) / dots.length;
        dot.style.transform = `scale(${(dots.length - i) / dots.length})`;
    }
    requestAnimationFrame(updateDots);
}

updateDots();
