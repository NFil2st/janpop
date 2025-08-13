// เมนู Responsive
const navMenu = document.querySelector("nav ul");
document.querySelector(".logo").addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const slides = document.querySelectorAll(".bg-slide");
const bgImages = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg"
];

let current = 0;

// ตั้งค่ารูปให้แต่ละเลเยอร์
slides.forEach((slide, i) => {
    slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImages[i]}')`;
});

// ฟังก์ชันสลับภาพ
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? 1 : 0;
    });
}

// เริ่มแสดงภาพแรก
showSlide(current);

// เปลี่ยนภาพทุก 5 วินาที
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 5000);


const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');
const perfGrid = document.querySelector('.performance-grid');

if (leftBtn && rightBtn && perfGrid) {
    leftBtn.addEventListener('click', function () {
        perfGrid.scrollBy({ left: -300, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', function () {
        perfGrid.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

function openImage(src) {
    window.open(src, '_blank');
}
