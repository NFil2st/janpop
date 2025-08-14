const menuBtn = document.getElementById('menu-button'); 
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


// เปิดใช้งาน smooth scroll สำหรับลิงก์ทั้งหมดที่มี href แบบ #id
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // ป้องกันการกระโดดทันที

    const targetId = this.getAttribute('href').substring(1); // ตัด # ออก
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const contactSection = document.getElementById('Contact');

const contactColors = [
  'linear-gradient(to bottom, #0f172a, #1e293b)',  
  'linear-gradient(to bottom, #1e3a8a, #3b82f6)',  
  'linear-gradient(to bottom, #0f766e, #14b8a6)',  
  'linear-gradient(to bottom, #3730a3, #6366f1)',  
  'linear-gradient(to bottom, #2563eb, #60a5fa)'   
];

let currentColorIndex = 0;

setInterval(() => {
  currentColorIndex = (currentColorIndex + 1) % contactColors.length;
  contactSection.style.background = contactColors[currentColorIndex];
}, 4000);




