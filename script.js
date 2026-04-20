function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

/* Scroll reveal animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "0.8s ease";
        }
    });
});

document.querySelectorAll(".card, .about, .contact").forEach(el => {
    observer.observe(el);
});

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.classList.add('show');
        }
    });
});

const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});
