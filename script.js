document.addEventListener("DOMContentLoaded", () => {
    let music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play().catch(() => {
        // If autoplay is blocked, play after user interaction
        document.body.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });
});
