document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
    observer.observe(sec);
});

document.querySelector('.visit-btn').onclick = () => {
    window.open('https://github.com/FlukeKS', '_blank');
};

document.querySelector('.contact .btn').onclick = () => {
    alert('Thank you for contacting me! I will reply soon.');
};
