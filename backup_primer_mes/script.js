(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

/* ============================================================
   CANVASES PRINCIPALES Y PARTICULAS DEL UNIVERSO
   ============================================================ */
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    glowCanvas = document.getElementById("glowCanvas"),
    gCtx = glowCanvas.getContext("2d"),
    petalsCanvas = document.getElementById("petalsCanvas"),
    petalsCtx = petalsCanvas ? petalsCanvas.getContext("2d") : null,
    fireworksCanvas = document.getElementById("fireworksCanvas"),
    fwCtx = fireworksCanvas ? fireworksCanvas.getContext("2d") : null,
    constellationCanvas = document.getElementById("constellationCanvas"),
    cCtx = constellationCanvas ? constellationCanvas.getContext("2d") : null,
    width = window.innerWidth,
    height = window.innerHeight,
    vanishPointY = height / 2,
    vanishPointX = width / 2,
    focalLength = 300,
    angle = 0,
    angleY = 180,
    angleX = 180,
    angleZ = 180;

function updateDimensions() {
    width = window.innerWidth;
    height = window.innerHeight;
    vanishPointY = height / 2;
    vanishPointX = width / 2;

    glowCanvas.width = width / 4;
    glowCanvas.height = height / 4;
    glowCanvas.style.width = width + 'px';
    glowCanvas.style.height = height + 'px';

    canvas.width = width;
    canvas.height = height;

    if (petalsCanvas) {
        petalsCanvas.width = width;
        petalsCanvas.height = height;
    }
    if (fireworksCanvas) {
        fireworksCanvas.width = width;
        fireworksCanvas.height = height;
    }
    if (constellationCanvas) {
        constellationCanvas.width = width;
        constellationCanvas.height = height;
    }

    gCtx.fillStyle = "rgba(0,0,0,0.7)";
}

updateDimensions();
window.addEventListener('resize', updateDimensions);

function Emitter() {
    var PART_NUM = 4000;
    this.particles = [];

    for (var i = 0; i < PART_NUM; i++) {
        this.particles.push(new Particle());
    }
}

Emitter.prototype.update = function () {
    var partLen = this.particles.length;
    angle += 0.01;
    angleZ = Math.sin(angle);

    this.particles.sort(function (a, b) {
        return b.z - a.z;
    });

    for (var i = 0; i < partLen; i++) {
        var particle = this.particles[i];
        particle.update();
    }
};

Emitter.prototype.render = function () {
    var imgData = ctx.createImageData(width, height),
        data = imgData.data,
        partLen = this.particles.length;

    for (var i = 0; i < partLen; i++) {
        var particle = this.particles[i];
        if (particle.render && particle.xPos < width && particle.xPos > 0 && particle.yPos > 0 && particle.yPos < height) {
            for (var w = 0; w < particle.size; w++) {
                for (var h = 0; h < particle.size; h++) {
                    if (particle.xPos + w < width && particle.xPos + w > 0 && particle.yPos + h > 0 && particle.yPos + h < height) {
                        var pData = (~~(particle.xPos + w) + (~~(particle.yPos + h) * width)) * 4;
                        data[pData] = particle.color[0];
                        data[pData + 1] = particle.color[1];
                        data[pData + 2] = particle.color[2];
                        data[pData + 3] = 255;
                    }
                }
            }
        }
    }

    ctx.putImageData(imgData, 0, 0);
    gCtx.fillRect(0, 0, glowCanvas.width, glowCanvas.height);
    gCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, glowCanvas.width, glowCanvas.height);
};

function Particle() {
    this.x = (Math.random() * 5) - 2.5;
    this.y = (Math.random() * 5) - 2.5;
    this.z = (Math.random() * 5) - 2.5;

    this.startX = this.x;
    this.startY = this.y;
    this.startZ = this.z;

    this.xPos = 0;
    this.yPos = 0;
    this.angle = 0;
    this.dir = 0;

    this.vx = (Math.random() * 120) - 60;
    this.vy = (Math.random() * 120) - 60;
    this.vz = (Math.random() * 120) - 60;

    this.color = [~~(255), ~~(255), ~~(Math.random() * 255)];
    this.render = true;
    this.size = Math.round(1 + Math.random() * 1);
}

Particle.prototype.rotate = function () {
    var x = this.startX * Math.cos(angleZ) - this.startY * Math.sin(angleZ),
        y = this.startY * Math.cos(angleZ) + this.startX * Math.sin(angleZ);

    this.x = x;
    this.y = y;
};

Particle.prototype.update = function () {
    var cosY = Math.cos(angleX),
        sinY = Math.sin(angleX),
        dist = Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));

    this.x = (this.startX += this.vx * (dist * .001));
    this.y = (this.startY += this.vy * (dist * .001));
    this.z = (this.startZ -= this.vz * (dist * .001));
    this.rotate();

    this.render = false;

    if (this.z > -focalLength) {
        var scale = focalLength / (focalLength + this.z);
        this.size = scale * 2;
        this.xPos = vanishPointX + this.x * scale;
        this.yPos = vanishPointY + this.y * scale;
        this.render = true;
    }
};

var emitter = new Emitter();

function render() {
    emitter.update();
    emitter.render();
    requestAnimationFrame(render);
}
render();

/* ============================================================
   GALAXIA 3D DE IMÁGENES
   ============================================================ */
var galaxyInitialized = false;
function initImageGalaxy() {
    if (galaxyInitialized) return;
    galaxyInitialized = true;

    const galaxyContainer = document.getElementById('image-galaxy');
    if (!galaxyContainer) return;

    galaxyContainer.classList.add('visible');

    const sunImg = document.createElement('img');
    sunImg.src = 'sol.png';
    sunImg.className = 'galaxy-sun';
    sunImg.alt = 'Sol';
    galaxyContainer.appendChild(sunImg);

    const imageUrls = [
        '1.png', '2.png', '3.png', '4.png',
        '5.png', '6.png', '7.png', '8.png', '0.png',
        '1.png', '2.png', '3.png', '4.png',
        '5.png', '6.png', '7.png', '8.png', '0.png'
    ];

    const imagesData = [];

    imageUrls.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;
        img.className = 'love-img';
        img.alt = 'Recuerdo';

        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const radius = 230 + Math.random() * 140;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        imagesData.push({ element: img, x, y, z });
        galaxyContainer.appendChild(img);
    });

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragRotX = 0;
    let dragRotY = 0;
    let autoRotation = 0;

    // Mouse Events
    document.addEventListener('mousedown', (e) => {
        if (e.target.closest('.custom-modal') || e.target.closest('#intro-screen') || e.target.closest('#music-player') || e.target.closest('.action-buttons-group') || e.target.closest('.time-counter-badge')) {
            return;
        }
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };

            dragRotY += deltaMove.x * 0.008;
            dragRotX += deltaMove.y * 0.008;

            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });

    document.addEventListener('mouseup', () => { isDragging = false; });
    document.addEventListener('mouseleave', () => { isDragging = false; });

    // Touch Events for Mobile
    document.addEventListener('touchstart', (e) => {
        if (e.target.closest('.custom-modal') || e.target.closest('#intro-screen') || e.target.closest('#music-player') || e.target.closest('.action-buttons-group') || e.target.closest('.time-counter-badge')) {
            return;
        }
        if (e.touches.length === 1) {
            isDragging = true;
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length === 1) {
            const deltaMove = {
                x: e.touches[0].clientX - previousMousePosition.x,
                y: e.touches[0].clientY - previousMousePosition.y
            };

            dragRotY += deltaMove.x * 0.008;
            dragRotX += deltaMove.y * 0.008;

            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    }, { passive: true });

    document.addEventListener('touchend', () => { isDragging = false; });
    document.addEventListener('touchcancel', () => { isDragging = false; });

    function animateImages() {
        if (!isDragging) {
            autoRotation += 0.002;
        }

        const totalRotY = autoRotation + dragRotY;
        const totalRotX = dragRotX;

        sunImg.style.transform = `translate3d(0px, 0px, 0px)`;

        imagesData.forEach((data) => {
            let rotX = data.x * Math.cos(totalRotY) - data.z * Math.sin(totalRotY);
            let rotZ = data.z * Math.cos(totalRotY) + data.x * Math.sin(totalRotY);

            let finalY = data.y * Math.cos(totalRotX) - rotZ * Math.sin(totalRotX);
            let finalZ = rotZ * Math.cos(totalRotX) + data.y * Math.sin(totalRotX);

            const scale = Math.max(0.2, (finalZ + 500) / 500);
            const opacity = Math.max(0.3, Math.min(1, scale));

            data.element.style.transform = `translate3d(${rotX}px, ${finalY}px, ${finalZ}px) scale(${scale})`;
            data.element.style.opacity = opacity;
            data.element.style.zIndex = Math.round(finalZ + 1000);
        });

        requestAnimationFrame(animateImages);
    }

    animateImages();
}

/* ============================================================
   OPCIÓN 2: CONTADOR DE TIEMPO EN VIVO
   ============================================================ */
const START_DATE = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 25 * 60 * 1000));

function updateLoveCounter() {
    const now = new Date();
    const diff = Math.max(0, now - START_DATE);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

setInterval(updateLoveCounter, 1000);
updateLoveCounter();

/* ============================================================
   OPCIÓN 4: 30 RAZONES POR LAS QUE TE AMO
   ============================================================ */
const reasons = [
    "Por tu hermosa sonrisa que me alegra el día entero.",
    "Por la forma tan linda y cariñosa en la que me miras.",
    "Por cada risa, chiste y momento divertido que compartimos.",
    "Por tus abrazos que me hacen sentir en total paz y seguridad.",
    "Por tu forma de ser tan única, auténtica y especial.",
    "Por hacerme sentir la persona más afortunada del mundo.",
    "Por tus mensajes de buenos días que iluminan mis mañanas.",
    "Por ser mi lugar seguro y mi persona favorita.",
    "Por la confianza y complicidad que hemos creado juntos.",
    "Por escucharme con atención y apoyarme en todo.",
    "Por cómo brillan tus ojos cuando estás feliz.",
    "Por cada detalle, caricia y palabra tierna que tienes conmigo.",
    "Por hacerme reír incluso en los días más difíciles.",
    "Por tus besos que hacen que el tiempo se detenga.",
    "Por ser tan dulce, atenta, inteligente y comprensiva.",
    "Por caminar a mi lado y construir esta hermosa historia.",
    "Por enseñarme lo bonito que es amar con el corazón.",
    "Por cómo me tomas de la mano sin importar dónde estemos.",
    "Por todos los recuerdos inolvidables de este primer mes.",
    "Por inspirarme a ser mejor persona cada día.",
    "Por el tono de tu voz que me llena el alma de tranquilidad.",
    "Por cada plática nocturna que no quiero que termine jamás.",
    "Por ser mi motivación diaria y mi pensamiento favorito.",
    "Por la infinita paciencia y cariño que me demuestras.",
    "Por tus ocurrencias y tu ternura sin igual.",
    "Por hacer que cada día a tu lado sea una aventura mágica.",
    "Por soñar con un futuro y metas a mi lado.",
    "Por cómo encajas a la perfección en mi vida y mi corazón.",
    "Por ser tú misma, exactamente tal como eres.",
    "Porque en solo 1 mes te has convertido en todo mi universo. ❤️"
];

let currentReasonIndex = 0;
const reasonNumberEl = document.getElementById('reason-number');
const reasonTextEl = document.getElementById('reason-text');
const reasonsProgressEl = document.getElementById('reasons-progress');
const prevReasonBtn = document.getElementById('prev-reason-btn');
const nextReasonBtn = document.getElementById('next-reason-btn');
const randomReasonBtn = document.getElementById('random-reason-btn');
const reasonsModal = document.getElementById('reasons-modal');
const openReasonsBtn = document.getElementById('open-reasons-btn');
const closeReasonsBtn = document.getElementById('close-reasons-btn');
const reasonsBackdrop = document.getElementById('reasons-backdrop');

function showReason(index) {
    if (index < 0) index = reasons.length - 1;
    if (index >= reasons.length) index = 0;
    currentReasonIndex = index;

    if (reasonTextEl) {
        reasonTextEl.style.opacity = 0;
        setTimeout(() => {
            if (reasonNumberEl) reasonNumberEl.textContent = `Razón #${currentReasonIndex + 1}`;
            reasonTextEl.textContent = reasons[currentReasonIndex];
            reasonTextEl.style.opacity = 1;
            if (reasonsProgressEl) {
                reasonsProgressEl.style.width = `${((currentReasonIndex + 1) / reasons.length) * 100}%`;
            }
        }, 150);
    }
}

if (prevReasonBtn) prevReasonBtn.addEventListener('click', () => showReason(currentReasonIndex - 1));
if (nextReasonBtn) nextReasonBtn.addEventListener('click', () => showReason(currentReasonIndex + 1));
if (randomReasonBtn) {
    randomReasonBtn.addEventListener('click', () => {
        let rand;
        do {
            rand = Math.floor(Math.random() * reasons.length);
        } while (rand === currentReasonIndex && reasons.length > 1);
        showReason(rand);
    });
}

if (openReasonsBtn) {
    openReasonsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (reasonsModal) reasonsModal.classList.add('active');
        showReason(currentReasonIndex);
    });
}
if (closeReasonsBtn) closeReasonsBtn.addEventListener('click', () => reasonsModal.classList.remove('active'));
if (reasonsBackdrop) reasonsBackdrop.addEventListener('click', () => reasonsModal.classList.remove('active'));

/* ============================================================
   ESTRELLAS FUGACES INTERACTIVAS Y POPUP DE DESEOS
   ============================================================ */
const shootingStarsContainer = document.getElementById('shooting-stars-container');
const starWishPopup = document.getElementById('star-wish-popup');
const starWishText = document.getElementById('star-wish-text');
const starWishIcon = document.getElementById('star-wish-icon');

const romanticWishes = [
    "✨ ¡Pediste un deseo! 'Deseo estar siempre a tu lado ❤️'",
    "🌠 'Eres mi estrella más brillante en todo el universo ✨'",
    "💫 'Deseo que este sea el 1ero de mil meses juntos 💕'",
    "💖 'Mi único deseo se cumplió cuando te conocí 🥰'",
    "🌟 'Que nuestro amor siga creciendo hasta el infinito 🌌'",
    "❤️ 'Te amo con todo mi corazón, hoy y siempre ✨'"
];

function showWishPopup(customText, customIcon) {
    if (!starWishPopup || !starWishText) return;
    const wish = customText || romanticWishes[Math.floor(Math.random() * romanticWishes.length)];
    starWishText.textContent = wish;
    if (starWishIcon) starWishIcon.textContent = customIcon || '🌠';
    starWishPopup.classList.add('show');

    setTimeout(() => {
        starWishPopup.classList.remove('show');
    }, 3200);
}

function spawnShootingStar() {
    if (!shootingStarsContainer) return;

    const star = document.createElement('div');
    star.className = 'shooting-star';

    const startX = Math.random() * (window.innerWidth * 0.7);
    const startY = Math.random() * (window.innerHeight * 0.4);
    const length = 100 + Math.random() * 80;
    const angleDeg = 30 + Math.random() * 25;

    star.style.left = startX + 'px';
    star.style.top = startY + 'px';
    star.style.width = length + 'px';
    star.style.transform = `rotate(${angleDeg}deg)`;

    star.addEventListener('click', (e) => {
        e.stopPropagation();
        showWishPopup();
        star.remove();
    });

    shootingStarsContainer.appendChild(star);

    const duration = 1200 + Math.random() * 800;
    const distance = 400 + Math.random() * 300;
    const rad = (angleDeg * Math.PI) / 180;

    star.animate([
        { transform: `translate(0, 0) rotate(${angleDeg}deg)`, opacity: 0 },
        { transform: `translate(${distance * 0.3 * Math.cos(rad)}px, ${distance * 0.3 * Math.sin(rad)}px) rotate(${angleDeg}deg)`, opacity: 1, offset: 0.2 },
        { transform: `translate(${distance * Math.cos(rad)}px, ${distance * Math.sin(rad)}px) rotate(${angleDeg}deg)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => {
        star.remove();
    };
}

setInterval(() => {
    if (document.visibilityState === 'visible') {
        spawnShootingStar();
    }
}, 6000);

/* ============================================================
   NUEVA FUNCIÓN 1: 🌹 LLUVIA DE PÉTALOS DE ROSA EN 3D
   ============================================================ */
let petalsActive = true;
let petalsList = [];
const PETAL_COUNT = 35;

function Petal() {
    this.reset(true);
}

Petal.prototype.reset = function (initial) {
    this.x = Math.random() * width;
    this.y = initial ? Math.random() * height : -30;
    this.size = 12 + Math.random() * 14;
    this.speedY = 1 + Math.random() * 1.5;
    this.speedX = (Math.random() - 0.5) * 1.2;
    this.rotX = Math.random() * Math.PI * 2;
    this.rotY = Math.random() * Math.PI * 2;
    this.rotZ = Math.random() * Math.PI * 2;
    this.rotSpeedX = (Math.random() - 0.5) * 0.04;
    this.rotSpeedY = (Math.random() - 0.5) * 0.04;
    this.rotSpeedZ = (Math.random() - 0.5) * 0.02;
    this.opacity = 0.5 + Math.random() * 0.45;
    this.color = Math.random() > 0.4 ? '#e6194b' : '#ff4d6d';
};

Petal.prototype.update = function () {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.02) * 0.6;
    this.rotX += this.rotSpeedX;
    this.rotY += this.rotSpeedY;
    this.rotZ += this.rotSpeedZ;

    if (this.y > height + 40 || this.x < -40 || this.x > width + 40) {
        this.reset(false);
    }
};

Petal.prototype.draw = function () {
    if (!petalsCtx) return;
    petalsCtx.save();
    petalsCtx.translate(this.x, this.y);
    petalsCtx.rotate(this.rotZ);
    petalsCtx.scale(Math.cos(this.rotX), Math.sin(this.rotY));

    petalsCtx.beginPath();
    petalsCtx.moveTo(0, 0);
    petalsCtx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
    petalsCtx.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);

    const grad = petalsCtx.createRadialGradient(0, this.size / 2, 2, 0, this.size / 2, this.size);
    grad.addColorStop(0, '#ff758f');
    grad.addColorStop(0.7, this.color);
    grad.addColorStop(1, '#800f2f');

    petalsCtx.fillStyle = grad;
    petalsCtx.globalAlpha = this.opacity;
    petalsCtx.shadowColor = 'rgba(255, 77, 109, 0.4)';
    petalsCtx.shadowBlur = 8;
    petalsCtx.fill();
    petalsCtx.restore();
};

for (let i = 0; i < PETAL_COUNT; i++) {
    petalsList.push(new Petal());
}

function renderPetals() {
    if (!petalsCtx) return;
    petalsCtx.clearRect(0, 0, width, height);

    if (petalsActive) {
        petalsList.forEach((petal) => {
            petal.update();
            petal.draw();
        });
    }
    requestAnimationFrame(renderPetals);
}
renderPetals();

const togglePetalsBtn = document.getElementById('toggle-petals-btn');
if (togglePetalsBtn) {
    togglePetalsBtn.classList.add('active');
    togglePetalsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        petalsActive = !petalsActive;
        togglePetalsBtn.classList.toggle('active', petalsActive);
        showWishPopup(petalsActive ? '🌹 Lluvia de pétalos activada 💕' : '🌹 Pétalos en pausa ✨', '🌹');
    });
}

/* ============================================================
   NUEVA FUNCIÓN 3: 🎆 FUEGOS ARTIFICIALES DE CORAZONES
   ============================================================ */
let fireworks = [];

function FireworkParticle(x, y, vx, vy, color, isSparkle) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.alpha = 1;
    this.decay = 0.012 + Math.random() * 0.015;
    this.size = isSparkle ? 1.5 : 2.5 + Math.random() * 2;
    this.gravity = 0.04;
}

FireworkParticle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.vx *= 0.98;
    this.vy *= 0.98;
    this.alpha -= this.decay;
};

FireworkParticle.prototype.draw = function () {
    if (!fwCtx || this.alpha <= 0) return;
    fwCtx.save();
    fwCtx.globalAlpha = Math.max(0, this.alpha);
    fwCtx.fillStyle = this.color;
    fwCtx.shadowColor = this.color;
    fwCtx.shadowBlur = 10;
    fwCtx.beginPath();
    fwCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    fwCtx.fill();
    fwCtx.restore();
};

function launchHeartFirework(targetX, targetY) {
    const originX = targetX || (width * 0.2 + Math.random() * (width * 0.6));
    const originY = targetY || (height * 0.2 + Math.random() * (height * 0.45));
    const colors = ['#ff4081', '#ff007f', '#ffd700', '#ff80bf', '#00e5ff', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const heartPoints = 85;
    for (let i = 0; i < heartPoints; i++) {
        const t = (i / heartPoints) * Math.PI * 2;
        // Ecuación paramétrica del corazón
        const hx = 16 * Math.pow(Math.sin(t), 3);
        const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const speed = 0.22 + Math.random() * 0.05;
        const vx = hx * speed;
        const vy = hy * speed;

        fireworks.push(new FireworkParticle(originX, originY, vx, vy, color, false));
        if (Math.random() > 0.4) {
            fireworks.push(new FireworkParticle(originX, originY, vx * 0.5, vy * 0.5, '#ffffff', true));
        }
    }
}

function renderFireworks() {
    if (!fwCtx) return;
    fwCtx.clearRect(0, 0, width, height);

    for (let i = fireworks.length - 1; i >= 0; i--) {
        const p = fireworks[i];
        p.update();
        p.draw();
        if (p.alpha <= 0) {
            fireworks.splice(i, 1);
        }
    }
    requestAnimationFrame(renderFireworks);
}
renderFireworks();

function triggerCelebrationFiesta() {
    showWishPopup('🎆 ¡Feliz 1er Mes, Mi Amor! ¡Te Amo! 🥂💖', '🎆');
    for (let i = 0; i < 7; i++) {
        setTimeout(() => {
            launchHeartFirework();
        }, i * 350);
    }
}

const triggerFireworksBtn = document.getElementById('trigger-fireworks-btn');
const letterCelebrateBtn = document.getElementById('letter-celebrate-btn');

if (triggerFireworksBtn) triggerFireworksBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerCelebrationFiesta();
});
if (letterCelebrateBtn) letterCelebrateBtn.addEventListener('click', () => {
    if (letterModal) letterModal.classList.remove('active');
    triggerCelebrationFiesta();
});

/* ============================================================
   NUEVA FUNCIÓN 4: 🌌 CONSTELACIÓN DE AMOR ("CORAZÓN DE ESTRELLAS")
   ============================================================ */
let constellationActive = false;
let constellationStars = [];
let constellationPulse = 0;

function initConstellation() {
    constellationStars = [];
    const count = 30; // 30 estrellas por los 30 días
    const centerX = width / 2;
    const centerY = height / 2;
    const size = Math.min(width, height) * 0.28;

    for (let i = 0; i < count; i++) {
        const t = (i / count) * Math.PI * 2;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const starX = centerX + (x / 16) * size;
        const starY = centerY + (y / 16) * size;

        constellationStars.push({
            origX: starX,
            origY: starY,
            x: starX,
            y: starY,
            twinkle: Math.random() * Math.PI * 2
        });
    }
}

function renderConstellation() {
    if (!cCtx) return;
    cCtx.clearRect(0, 0, width, height);

    if (constellationActive && constellationStars.length > 0) {
        constellationPulse += 0.03;
        const pulseFactor = 1 + Math.sin(constellationPulse) * 0.05;
        const centerX = width / 2;
        const centerY = height / 2;

        cCtx.save();

        // Dibujar líneas brillantes de la constelación
        cCtx.beginPath();
        constellationStars.forEach((star, idx) => {
            const curX = centerX + (star.origX - centerX) * pulseFactor;
            const curY = centerY + (star.origY - centerY) * pulseFactor;
            if (idx === 0) cCtx.moveTo(curX, curY);
            else cCtx.lineTo(curX, curY);
        });
        cCtx.closePath();

        cCtx.strokeStyle = 'rgba(255, 105, 180, 0.75)';
        cCtx.lineWidth = 2.5;
        cCtx.shadowColor = '#ff4081';
        cCtx.shadowBlur = 18;
        cCtx.stroke();

        // Conectar con líneas internas hacia el centro para efecto constelación
        cCtx.beginPath();
        for (let i = 0; i < constellationStars.length; i += 3) {
            const curX = centerX + (constellationStars[i].origX - centerX) * pulseFactor;
            const curY = centerY + (constellationStars[i].origY - centerY) * pulseFactor;
            cCtx.moveTo(curX, curY);
            cCtx.lineTo(centerX, centerY);
        }
        cCtx.strokeStyle = 'rgba(255, 182, 193, 0.25)';
        cCtx.lineWidth = 1;
        cCtx.stroke();

        // Dibujar estrellas en los vértices
        constellationStars.forEach((star) => {
            star.twinkle += 0.05;
            const starRadius = 2.5 + Math.sin(star.twinkle) * 1.5;
            const curX = centerX + (star.origX - centerX) * pulseFactor;
            const curY = centerY + (star.origY - centerY) * pulseFactor;

            cCtx.beginPath();
            cCtx.arc(curX, curY, starRadius, 0, Math.PI * 2);
            cCtx.fillStyle = '#ffffff';
            cCtx.shadowColor = '#ffd700';
            cCtx.shadowBlur = 12;
            cCtx.fill();
        });

        // Texto central de la constelación
        cCtx.font = "bold 24px 'Dancing Script', cursive";
        cCtx.fillStyle = "#ffb6c1";
        cCtx.textAlign = "center";
        cCtx.shadowColor = "#ff4081";
        cCtx.shadowBlur = 15;
        cCtx.fillText("Constelación de Nuestro Amor ✨", centerX, centerY + 10);

        cCtx.restore();
    }

    requestAnimationFrame(renderConstellation);
}

initConstellation();
renderConstellation();
window.addEventListener('resize', initConstellation);

const toggleConstellationBtn = document.getElementById('toggle-constellation-btn');
if (toggleConstellationBtn) {
    toggleConstellationBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        constellationActive = !constellationActive;
        toggleConstellationBtn.classList.toggle('active', constellationActive);
        showWishPopup(constellationActive ? '🌌 ¡Constelación de Nuestro Amor Activada! ✨' : '🌌 Constelación Oculta ✨', '🌌');
    });
}

/* ============================================================
   CONTROL DE MÚSICA, REPRODUCTOR Y VISUALIZADOR DE ONDAS
   ============================================================ */
const bgMusic = document.getElementById('bg-music');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const vinylDisc = document.getElementById('vinyl-disc');
const soundWave = document.getElementById('sound-wave');

function toggleMusic(play) {
    if (!bgMusic) return;

    if (play === undefined) {
        play = bgMusic.paused;
    }

    if (play) {
        bgMusic.play().then(() => {
            if (playIcon) playIcon.textContent = '⏸️';
            if (vinylDisc) vinylDisc.classList.add('spinning');
            if (soundWave) soundWave.classList.add('playing');
        }).catch((err) => {
            console.log('Audio autoplay prevented or file missing:', err);
            if (playIcon) playIcon.textContent = '▶️';
            if (vinylDisc) vinylDisc.classList.remove('spinning');
            if (soundWave) soundWave.classList.remove('playing');
        });
    } else {
        bgMusic.pause();
        if (playIcon) playIcon.textContent = '▶️';
        if (vinylDisc) vinylDisc.classList.remove('spinning');
        if (soundWave) soundWave.classList.remove('playing');
    }
}

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMusic();
    });
}

/* ============================================================
   PANTALLA DE INICIO / BOTÓN COMENZAR
   ============================================================ */
const startBtn = document.getElementById('start-btn');
const introScreen = document.getElementById('intro-screen');

if (startBtn && introScreen) {
    startBtn.addEventListener('click', () => {
        introScreen.classList.add('hidden');
        toggleMusic(true);
        initImageGalaxy();
        setTimeout(spawnShootingStar, 1000);
        setTimeout(() => {
            launchHeartFirework();
        }, 1500);
    });
} else {
    setTimeout(initImageGalaxy, 4000);
}

/* ============================================================
   MODAL DE LA CARTA DE AMOR
   ============================================================ */
const openLetterBtn = document.getElementById('open-letter-btn');
const closeLetterBtn = document.getElementById('close-letter-btn');
const letterModal = document.getElementById('letter-modal');
const letterBackdrop = document.getElementById('letter-backdrop');

if (openLetterBtn) {
    openLetterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (letterModal) letterModal.classList.add('active');
    });
}
if (closeLetterBtn) closeLetterBtn.addEventListener('click', () => letterModal.classList.remove('active'));
if (letterBackdrop) letterBackdrop.addEventListener('click', () => letterModal.classList.remove('active'));

/* ============================================================
   CORAZONES FLOTANTES AL HACER CLIC EN CUALQUIER PARTE
   ============================================================ */
const heartSymbols = ['❤️', '💖', '💕', '✨', '🌸', '💘', '🌹'];

document.addEventListener('click', (e) => {
    if (e.target.closest('.custom-modal') || e.target.closest('#intro-screen') || e.target.closest('#music-player') || e.target.closest('.action-buttons-group') || e.target.closest('.time-counter-badge')) {
        return;
    }

    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.setProperty('--tx', (Math.random() * 60 - 30) + 'px');

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1800);
});