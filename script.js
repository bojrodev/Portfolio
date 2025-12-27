// 1. THEME TOGGLER
const toggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    if (toggleBtn) toggleBtn.innerHTML = '🌙'; 
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const isLight = body.getAttribute('data-theme') === 'light';
        if (isLight) {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            toggleBtn.innerHTML = '☀️';
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggleBtn.innerHTML = '🌙';
        }
    });
}

// 2. SCROLL REVEAL (Fades in elements)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// 3. AUTO-HIDE NAVBAR
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // Always show at top to prevent getting stuck
    if (window.scrollY < 10) {
        nav.classList.remove('nav-hidden');
        return;
    }

    if (window.scrollY > lastScrollY) {
        // SCROLLING DOWN -> HIDE
        nav.classList.add('nav-hidden');
    } else {
        // SCROLLING UP -> SHOW
        nav.classList.remove('nav-hidden');
    }
    
    lastScrollY = window.scrollY;
});

// 4. TYPEWRITER EFFECT
const textElement = document.getElementById('typewriter-text');
if (textElement) {
    const textToType = "> INIT_SYSTEM: ONLINE_";
    let index = 0;

    function typeLine() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeLine, 50);
        }
    }
    textElement.textContent = ""; 
    setTimeout(typeLine, 500);
}

// 5. DISCORD COPY FUNCTION
function copyDiscord() {
    const discordId = "bojrodev";
    navigator.clipboard.writeText(discordId).then(() => {
        const btns = document.querySelectorAll('#discord-btn');
        btns.forEach(btn => {
            const originalText = btn.innerHTML;
            btn.innerHTML = "Copied! ✓";
            btn.style.background = "#43b581"; 
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = ""; 
            }, 2000);
        });
    }).catch(err => {
        console.error('Failed to copy', err);
    });
}