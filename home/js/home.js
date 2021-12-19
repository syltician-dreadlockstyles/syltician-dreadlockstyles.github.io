var activeSlideIndex = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loopSlides() {
    while (true) {
        const container = document.getElementById("slideshow-container");
        const slides = container.children;
        await sleep(slides[activeSlideIndex].textContent.length * 50);
        slides[activeSlideIndex].style.display = "none";
        if (activeSlideIndex == slides.length - 1) {
            activeSlideIndex = 0;
        } else {
            activeSlideIndex += 1;
        }
        slides[activeSlideIndex].style.display = "block";
    }
}

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(loopSlides);