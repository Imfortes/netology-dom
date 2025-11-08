document.addEventListener("DOMContentLoaded", () => {
    const revealCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal_active');
            } else {
                entry.target.classList.remove('reveal_active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.5
    });

    document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
    });
})