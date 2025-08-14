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

const cards = document.querySelectorAll('.certificates-card img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupClose = document.querySelector('.popup-close');

// คลิกรูป
cards.forEach(card => {
    card.addEventListener('click', () => {
        popupImg.src = card.src;
        popupImg.alt = card.alt;
        popup.classList.add('show');
    });
});

// ปิด popup
popupClose.addEventListener('click', () => {
    popup.classList.remove('show');
});

// ปิด popup เมื่อคลิกรอบๆ
popup.addEventListener('click', e => {
    if(e.target === popup) {
        popup.classList.remove('show');
    }
});
