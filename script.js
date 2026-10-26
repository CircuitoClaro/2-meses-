/* ============================================================
   NOCHE DE FAROLILLOS & LAGO DE LOS DESEOS 🏮✨
   Script Principal Interactivo y Motores Gráficos
   ============================================================ */

/* ============================================================
   CONFIGURACIÓN PERSONALIZABLE
   ============================================================ */
const CONFIG = {
  // ============================================================
  // PERSONALIZACIÓN: JOSE & TAMY
  // ============================================================
  girlfriendName: "Tamy",
  yourName: "Jose",

  // Fecha en que comenzó su historia de amor (Día 27, hace 2 meses):
  // 27 de Agosto (Mes 7 en JavaScript, ya que Enero es 0):
  startDate: new Date(2026, 7, 27, 0, 0, 0),

  // Lista de 9 fotos con dedicatorias especiales por sus 2 meses (Jose & Tamy)
  photos: [
    { url: '0.png', title: 'Donde Todo Empezó (Día 27) ❤️', desc: 'Aquel hermoso día 27 comenzó la historia más bonita de mi vida a tu lado, mi Tamy.' },
    { url: '1.png', title: 'Tu Mirada Mágica ✨', desc: 'En tus hermosos ojos encuentro la paz y la felicidad más pura, mi niña.' },
    { url: '2.png', title: 'Caminando Juntos 💫', desc: 'Caminar de tu mano hace que cada instante sea un recuerdo inolvidable.' },
    { url: '3.png', title: 'Risas y Complicidad 💕', desc: 'Jose & Tamy: dos meses llenos de risas, bromas tontas y miradas cómplices.' },
    { url: '4.png', title: 'Mi Lugar Seguro 🌹', desc: 'Estar entre tus brazos es sentir que estoy exactamente donde pertenezco.' },
    { url: '5.png', title: '2 Meses Inolvidables 🌌', desc: 'Dos meses haciéndome el hombre más feliz y afortunado de todo el planeta.' },
    { url: '6.png', title: 'Amor que Crece Cada Día 💖', desc: 'Cada día que pasa a tu lado me enamoro más y más de ti, mi Tamy.' },
    { url: '7.png', title: 'Nuestra Gran Historia 🚀', desc: 'Lo más bonito de mi presente y todo lo que sueño construir en mi futuro contigo.' },
    { url: '8.png', title: 'Jose & Tamy Por Siempre 🏮', desc: 'El 2do mes de todos los que nos esperan juntos bajo las estrellas.' }
  ],

  // 60 Grandes motivos para amarte (¡Una razón por cada día de nuestros 2 meses!)
  reasons: [
    "Por tu hermosa sonrisa que tiene el poder de iluminar hasta el día más nublado.",
    "Por la forma tan dulce, tierna y única en la que me miras.",
    "Por cada carcajada compartida, chiste tonto y momento divertido juntos.",
    "Por tus abrazos que me llenan de paz y me hacen sentir exactamente en casa.",
    "Por ser una mujer increíble: inteligente, valiente, dedicada y de gran corazón.",
    "Por cómo tomas mi mano y me haces sentir la persona más afortunada del mundo.",
    "Por tus mensajes de buenos días y buenas noches que alegran mi existencia.",
    "Por escucharme con paciencia, apoyarme y creer en mí incluso cuando yo dudo.",
    "Por la confianza, el respeto y la hermosa conexión que construimos día a día.",
    "Por el brillo tan especial de tus ojitos cuando estás feliz o entusiasmada.",
    "Por tus ocurrencias espontáneas y tu forma de ser tan auténtica y maravillosa.",
    "Por hacer de los momentos más simples los recuerdos más inolvidables.",
    "Por motivarme a ser una mejor persona cada día solo con tu presencia.",
    "Por el tono de tu voz que tiene la magia de calmar cualquier tormenta en mí.",
    "Por cada caricia, beso y detalle con el que me demuestras tu cariño.",
    "Por ser mi compañera, mi mejor amiga, mi confidente y el gran amor de mi vida.",
    "Por cómo encajas a la perfección en mi vida y en mi corazón.",
    "Por soñar a mi lado y emocionarte con los planes de nuestro camino juntos.",
    "Por tu infinita ternura y la bondad con la que tratas a todos.",
    "Por esas pláticas interminables que se van volando y donde nunca queremos colgar.",
    "Por hacerme sentir querido, respetado y valorado en cada segundo.",
    "Por enseñarme lo bonito, sano y mágico que es amar de verdad.",
    "Por existir y haber coincidido conmigo en este universo tan inmenso.",
    "Por ser simplemente tú, mi Tamy, perfecta en todas tus formas.",
    "Por estos 2 meses maravillosos a tu lado, mi Tamy, que han sido los más felices de mi vida. ❤️",
    "Por cómo te preocupas por mí y siempre estás al pendiente con tanto amor.",
    "Por tus risas que son mi melodía favorita en todo el planeta.",
    "Por la paz tan inmensa que siento cada vez que estoy cerca de ti.",
    "Por ser mi refugio seguro cuando el mundo afuera se vuelve un caos.",
    "Por la paciencia, dulzura y comprensión que siempre me regalas.",
    "Por compartir tus sueños, anhelos y miedos más profundos conmigo.",
    "Por cómo se siente el tiempo a tu lado: un segundo dura una eternidad y horas parecen minutos.",
    "Por todas las fotos y recuerdos que hemos creado en estos dos primeros meses.",
    "Por tus besos tiernos que aceleran mi corazón como el primer día.",
    "Por esa chispita de travesura y alegría que siempre llevas contigo.",
    "Por inspirarme a soñar en grande y querer darte siempre lo mejor de mí.",
    "Por respetar y celebrar quién soy, haciéndome sentir libre de ser yo mismo.",
    "Por alegrar mis días con un simple mensaje o una llamada inesperada.",
    "Por la carita tan linda que pones cuando te da pena o te sonrojas.",
    "Por ser la primera persona en la que pienso al despertar y la última al acostarme.",
    "Por cada paseo, cada salida y cada plática que guardo en mi memoria como un tesoro.",
    "Por cómo me miras cuando crees que no me doy cuenta.",
    "Por hacerme creer en la magia del destino y de las almas que se encuentran.",
    "Por la calidez de tus manos entrelazadas con las mías.",
    "Por cómo compartes lo que amas y me permites ser parte de tu mundo.",
    "Por ser tan dulce conmigo, incluso en los días difíciles.",
    "Por esa risa contagiosa que no puedo evitar imitar cada vez que la escucho.",
    "Por hacer que estos dos meses se sientan como el inicio de toda una vida maravillosa.",
    "Por ser mi lugar favorito en el mundo, sin importar dónde estemos físicamente.",
    "Por la luz tan bonita que irradias a donde quiera que vas.",
    "Por cada 'te amo', 'te quiero' y 'te extraño' sincero que me has dicho.",
    "Por demostrarme que los cuentos de hadas sí pueden existir en la vida real.",
    "Por convertir un día común en una aventura mágica solo con estar a mi lado.",
    "Por enseñarme a valorar los pequeños detalles que hacen grande el amor.",
    "Por tu inteligencia, tu sentido del humor y tu brillante forma de ver la vida.",
    "Por cómo haces que mi corazón lata con más fuerza con una simple mirada.",
    "Por darme dos meses llenos de felicidad, emoción y gratitud infinita.",
    "Por elegirme a mí, a tu Jose, como tu compañero en este hermoso camino.",
    "Por prometer construir un futuro lleno de momentos mágicos juntos.",
    "Y sobre todo, porque te amo con cada latido de mi corazón, ¡felices 2 meses mi Tamy hermosa! ❤️"
  ],

  // Deseos románticos predeterminados para los farolillos (Jose & Tamy)
  romanticWishes: [
    "✨ '¡Felices 2 meses, mi Tamy hermosa! Por mil meses más a tu lado (Jose & Tamy) ❤️'",
    "🏮 'Que el amor de Jose y Tamy siga brillando más allá de las estrellas 🌌'",
    "💫 'Tamy, eres y siempre serás mi deseo más hermoso hecho realidad 💕'",
    "💖 '2 meses amándote cada segundo y toda una vida por compartir 🥰'",
    "🌟 'Que jamás nos falten las risas, los abrazos y los besos tiernos ✨'",
    "❤️ 'Te amo con toda mi alma, mi niña, hoy y para toda la eternidad 🌹'",
    "👑 'Hacerte la mujer más feliz del universo cada día, mi Tamy 💫'",
    "✈️ 'Jose & Tamy viajando por el mundo tomados de la mano 💕'"
  ]
};

/* ============================================================
   INICIALIZACIÓN DE CANVASES
   ============================================================ */
const auroraSkyCanvas = document.getElementById('auroraSkyCanvas');
const skyCtx = auroraSkyCanvas ? auroraSkyCanvas.getContext('2d') : null;

const waterCanvas = document.getElementById('waterCanvas');
const waterCtx = waterCanvas ? waterCanvas.getContext('2d') : null;

const firefliesCanvas = document.getElementById('firefliesCanvas');
const ffCtx = firefliesCanvas ? firefliesCanvas.getContext('2d') : null;

const sparkleCanvas = document.getElementById('sparkleCanvas');
const spCtx = sparkleCanvas ? sparkleCanvas.getContext('2d') : null;

let width = window.innerWidth;
let height = window.innerHeight;
let isMobileView = width < 768;
let waterHeight = isMobileView ? height * 0.26 : height * 0.38;
let waterTop = height - waterHeight;

function resizeAllCanvases() {
  width = window.innerWidth;
  height = window.innerHeight;
  const currentIsMobile = width < 768;
  waterHeight = currentIsMobile ? height * 0.26 : height * 0.38;
  waterTop = height - waterHeight;

  [auroraSkyCanvas, firefliesCanvas, sparkleCanvas].forEach(c => {
    if (c) {
      c.width = width;
      c.height = height;
    }
  });

  if (waterCanvas) {
    waterCanvas.width = width;
    waterCanvas.height = waterHeight;
  }

  if (isMobileView !== currentIsMobile) {
    isMobileView = currentIsMobile;
    if (activeLanternElements && activeLanternElements.length > 0) {
      initLanternFleet();
    }
  }

  initSkyStars();
  initFireflies();
}

window.addEventListener('resize', resizeAllCanvases);

/* ============================================================
   1. CIELO NOCTURNO, AURORA BOREAL Y ESTRELLAS TITILANTES
   ============================================================ */
let stars = [];
const STAR_COUNT = 160;

function initSkyStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * (height * 0.75),
      size: 0.6 + Math.random() * 1.8,
      baseAlpha: 0.3 + Math.random() * 0.7,
      twinkleSpeed: 0.02 + Math.random() * 0.04,
      twinklePhase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.3 ? '#ffffff' : (Math.random() > 0.5 ? '#ffd166' : '#a0e7e5')
    });
  }
}

let auroraTime = 0;

function drawAuroraLayer(ctx, waveY, amplitude, freq, speed, colorStops) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, waveY);

  for (let x = 0; x <= width; x += 15) {
    const y = waveY + 
              Math.sin(x * freq + auroraTime * speed) * amplitude + 
              Math.cos(x * (freq * 0.5) - auroraTime * (speed * 0.7)) * (amplitude * 0.5);
    ctx.lineTo(x, y);
  }

  ctx.lineTo(width, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();

  const grad = ctx.createLinearGradient(0, waveY - amplitude * 2, 0, waveY + amplitude * 2);
  colorStops.forEach(stop => grad.addColorStop(stop.pos, stop.color));

  ctx.fillStyle = grad;
  ctx.fill();
  ctx.restore();
}

function renderSkyAndAurora() {
  if (!skyCtx) return;
  auroraTime += 0.015;

  // Fondo Cielo Profundo
  const bgGrad = skyCtx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#040714');
  bgGrad.addColorStop(0.5, '#0a0f28');
  bgGrad.addColorStop(0.85, '#12102a');
  bgGrad.addColorStop(1, '#050814');

  skyCtx.fillStyle = bgGrad;
  skyCtx.fillRect(0, 0, width, height);

  // Aurora Boreal: 3 capas de ondas luminosas
  // Capa 1: Verde esmeralda & cian místico
  drawAuroraLayer(skyCtx, height * 0.28, 45, 0.003, 0.8, [
    { pos: 0, color: 'rgba(76, 201, 240, 0)' },
    { pos: 0.4, color: 'rgba(64, 224, 208, 0.18)' },
    { pos: 0.7, color: 'rgba(80, 250, 180, 0.12)' },
    { pos: 1, color: 'rgba(76, 201, 240, 0)' }
  ]);

  // Capa 2: Violeta & Magenta Romántico
  drawAuroraLayer(skyCtx, height * 0.22, 55, 0.0025, -0.6, [
    { pos: 0, color: 'rgba(114, 9, 183, 0)' },
    { pos: 0.5, color: 'rgba(199, 125, 255, 0.16)' },
    { pos: 0.8, color: 'rgba(255, 117, 143, 0.12)' },
    { pos: 1, color: 'rgba(114, 9, 183, 0)' }
  ]);

  // Capa 3: Destello Ámbar / Dorado Cálido
  drawAuroraLayer(skyCtx, height * 0.35, 35, 0.004, 1.1, [
    { pos: 0, color: 'rgba(255, 209, 102, 0)' },
    { pos: 0.5, color: 'rgba(255, 183, 3, 0.08)' },
    { pos: 1, color: 'rgba(255, 209, 102, 0)' }
  ]);

  // Estrellas titilantes
  stars.forEach(s => {
    s.twinklePhase += s.twinkleSpeed;
    const alpha = Math.max(0.1, Math.min(1, s.baseAlpha + Math.sin(s.twinklePhase) * 0.4));
    
    skyCtx.save();
    skyCtx.globalAlpha = alpha;
    skyCtx.fillStyle = s.color;
    skyCtx.shadowColor = s.color;
    skyCtx.shadowBlur = s.size > 1.4 ? 8 : 2;
    skyCtx.beginPath();
    skyCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    skyCtx.fill();
    skyCtx.restore();
  });

  requestAnimationFrame(renderSkyAndAurora);
}

/* ============================================================
   2. LAGO MÁGICO, REFLEJOS Y ONDAS DE AGUA INTERACTIVAS
   ============================================================ */
let waterRipples = [];
let waterWaveTime = 0;

function addWaterRipple(x, y) {
  waterRipples.push({
    x: x,
    y: y,
    radius: 5,
    maxRadius: 70 + Math.random() * 40,
    alpha: 0.8,
    speed: 1.2 + Math.random() * 0.8
  });
}

function renderWaterLake() {
  if (!waterCtx) return;
  waterWaveTime += 0.02;

  const w = width;
  const h = waterHeight;

  waterCtx.clearRect(0, 0, w, h);

  // Fondo del Lago: Gradiente Profundo de Agua Nocturna
  const waterGrad = waterCtx.createLinearGradient(0, 0, 0, h);
  waterGrad.addColorStop(0, 'rgba(4, 8, 24, 0.95)');
  waterGrad.addColorStop(0.4, 'rgba(8, 16, 42, 0.92)');
  waterGrad.addColorStop(1, 'rgba(2, 4, 12, 0.98)');

  waterCtx.fillStyle = waterGrad;
  waterCtx.fillRect(0, 0, w, h);

  // Línea de horizonte con resplandor dorado
  const horizonGrad = waterCtx.createLinearGradient(0, 0, 0, 18);
  horizonGrad.addColorStop(0, 'rgba(255, 209, 102, 0.35)');
  horizonGrad.addColorStop(1, 'rgba(255, 209, 102, 0)');
  waterCtx.fillStyle = horizonGrad;
  waterCtx.fillRect(0, 0, w, 18);

  // Líneas suaves de ondas y reflejos en el agua
  waterCtx.save();
  for (let i = 0; i < 12; i++) {
    const lineY = 15 + i * (h / 12);
    const alpha = (1 - (i / 12)) * 0.25;
    
    waterCtx.beginPath();
    waterCtx.moveTo(0, lineY);
    for (let x = 0; x <= w; x += 30) {
      const yOffset = Math.sin(x * 0.015 + waterWaveTime + i) * (2 + i * 0.4);
      waterCtx.lineTo(x, lineY + yOffset);
    }
    waterCtx.strokeStyle = `rgba(255, 215, 102, ${alpha})`;
    waterCtx.lineWidth = 1 + i * 0.2;
    waterCtx.stroke();
  }
  waterCtx.restore();

  // Reflejo de los Farolillos y la Luna en el agua
  const activeLanterns = document.querySelectorAll('.floating-lantern');
  activeLanterns.forEach(lantern => {
    const rect = lantern.getBoundingClientRect();
    const lanternX = rect.left + rect.width / 2;
    const lanternY = rect.bottom;

    if (lanternY < height) {
      const reflectDist = height - lanternY;
      if (reflectDist < height * 0.6) {
        const reflectY = (reflectDist / height) * h * 0.65;
        const refAlpha = Math.max(0, 0.35 - (reflectDist / height) * 0.4);
        
        waterCtx.save();
        waterCtx.fillStyle = `rgba(255, 180, 50, ${refAlpha})`;
        waterCtx.shadowColor = '#ffd166';
        waterCtx.shadowBlur = 15;
        
        const shimmerX = lanternX + Math.sin(waterWaveTime * 2 + reflectDist) * 8;
        waterCtx.beginPath();
        waterCtx.ellipse(shimmerX, reflectY, 16 + reflectDist * 0.05, 4, 0, 0, Math.PI * 2);
        waterCtx.fill();
        waterCtx.restore();
      }
    }
  });

  // Renderizar ondas de agua interactivas (Ripples)
  for (let i = waterRipples.length - 1; i >= 0; i--) {
    const r = waterRipples[i];
    r.radius += r.speed;
    r.alpha -= 0.015;

    if (r.alpha <= 0 || r.radius >= r.maxRadius) {
      waterRipples.splice(i, 1);
      continue;
    }

    waterCtx.save();
    waterCtx.beginPath();
    waterCtx.ellipse(r.x, r.y, r.radius, r.radius * 0.35, 0, 0, Math.PI * 2);
    waterCtx.strokeStyle = `rgba(255, 209, 102, ${r.alpha})`;
    waterCtx.lineWidth = 1.8;
    waterCtx.shadowColor = '#ffd166';
    waterCtx.shadowBlur = 8;
    waterCtx.stroke();
    waterCtx.restore();
  }

  requestAnimationFrame(renderWaterLake);
}

if (waterCanvas) {
  waterCanvas.addEventListener('click', (e) => {
    const rect = waterCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addWaterRipple(x, y);
    spawnSparkleBurst(e.clientX, e.clientY, 12, '#ffd166');
  });

  waterCanvas.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      const rect = waterCanvas.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      addWaterRipple(x, y);
      spawnSparkleBurst(e.touches[0].clientX, e.touches[0].clientY, 10, '#ffd166');
    }
  }, { passive: true });
}

/* ============================================================
   3. LUCIÉRNAGAS Y CHISPAS DORADAS INTERACTIVAS
   ============================================================ */
let fireflies = [];
let firefliesEnabled = true;
const FIREFLY_COUNT = 38;
let mousePos = { x: -1000, y: -1000 };

function Firefly() {
  this.reset(true);
}

Firefly.prototype.reset = function(initial) {
  this.x = Math.random() * width;
  this.y = initial ? Math.random() * height : height + 20;
  this.size = 1.2 + Math.random() * 2.2;
  this.speedY = -(0.3 + Math.random() * 0.7);
  this.speedX = (Math.random() - 0.5) * 0.8;
  this.pulseSpeed = 0.03 + Math.random() * 0.04;
  this.pulsePhase = Math.random() * Math.PI * 2;
  this.wanderAngle = Math.random() * Math.PI * 2;
  this.color = Math.random() > 0.3 ? '#ffd166' : (Math.random() > 0.5 ? '#ff758f' : '#4cc9f0');
};

Firefly.prototype.update = function() {
  this.pulsePhase += this.pulseSpeed;
  this.wanderAngle += (Math.random() - 0.5) * 0.15;
  
  this.x += this.speedX + Math.cos(this.wanderAngle) * 0.6;
  this.y += this.speedY + Math.sin(this.wanderAngle) * 0.3;

  // Suave atracción hacia el mouse/touch
  const dx = mousePos.x - this.x;
  const dy = mousePos.y - this.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < 140 && dist > 10) {
    this.x += (dx / dist) * 0.8;
    this.y += (dy / dist) * 0.8;
  }

  if (this.y < -30 || this.x < -30 || this.x > width + 30) {
    this.reset(false);
  }
};

Firefly.prototype.draw = function(ctx) {
  const alpha = Math.max(0.1, (Math.sin(this.pulsePhase) + 1) / 2);
  ctx.save();
  ctx.globalAlpha = alpha * 0.85;
  ctx.fillStyle = this.color;
  ctx.shadowColor = this.color;
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
};

function initFireflies() {
  fireflies = [];
  for (let i = 0; i < FIREFLY_COUNT; i++) {
    fireflies.push(new Firefly());
  }
}

function renderFireflies() {
  if (!ffCtx) return;
  ffCtx.clearRect(0, 0, width, height);

  if (firefliesEnabled) {
    fireflies.forEach(f => {
      f.update();
      f.draw(ffCtx);
    });
  }

  requestAnimationFrame(renderFireflies);
}

document.addEventListener('mousemove', (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
});

document.addEventListener('touchmove', (e) => {
  if (e.touches && e.touches.length > 0) {
    mousePos.x = e.touches[0].clientX;
    mousePos.y = e.touches[0].clientY;
  }
}, { passive: true });

document.addEventListener('touchstart', (e) => {
  if (e.touches && e.touches.length > 0) {
    mousePos.x = e.touches[0].clientX;
    mousePos.y = e.touches[0].clientY;
  }
}, { passive: true });

/* ============================================================
   4. CHISPAS Y FUEGOS DE ESTRELLAS AL INTERACTUAR
   ============================================================ */
let sparkles = [];

function Sparkle(x, y, vx, vy, color, size, decay) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.color = color;
  this.size = size || (1.5 + Math.random() * 2);
  this.alpha = 1;
  this.decay = decay || (0.015 + Math.random() * 0.02);
}

Sparkle.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  this.vy += 0.03; // Gravedad ligera
  this.vx *= 0.98;
  this.vy *= 0.98;
  this.alpha -= this.decay;
};

Sparkle.prototype.draw = function(ctx) {
  if (this.alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = Math.max(0, this.alpha);
  ctx.fillStyle = this.color;
  ctx.shadowColor = this.color;
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
};

function spawnSparkleBurst(originX, originY, count, color) {
  const colors = color ? [color] : ['#ffd166', '#ff758f', '#ffffff', '#ff9e00', '#c77dff'];
  const cnt = count || 20;

  for (let i = 0; i < cnt; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 3.5;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    const col = colors[Math.floor(Math.random() * colors.length)];
    sparkles.push(new Sparkle(originX, originY, vx, vy, col));
  }
}

function renderSparkles() {
  if (!spCtx) return;
  spCtx.clearRect(0, 0, width, height);

  for (let i = sparkles.length - 1; i >= 0; i--) {
    const s = sparkles[i];
    s.update();
    s.draw(spCtx);
    if (s.alpha <= 0) {
      sparkles.splice(i, 1);
    }
  }

  requestAnimationFrame(renderSparkles);
}

/* ============================================================
   5. MOTOR DE FAROLILLOS FLOTANTES 3D (FOTOS Y DESEOS)
   ============================================================ */
const lanternsContainer = document.getElementById('lanterns-container');
let activeLanternElements = [];
let lanternIdCounter = 0;

function createLanternElement(data) {
  const el = document.createElement('div');
  el.className = 'floating-lantern';
  el.id = `lantern-${++lanternIdCounter}`;

  const isPhoto = data.isPhoto;
  const colorClass = data.colorClass || '';

  if (isPhoto) {
    el.innerHTML = `
      <div class="photo-lantern-hang"></div>
      <div class="photo-lantern-card">
        <img src="${data.photo.url}" alt="${data.photo.title}" loading="lazy">
        <div class="photo-lantern-heart">💖</div>
      </div>
    `;
    el.title = `Haz clic para ver: ${data.photo.title}`;
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openPhotoModal(data.photo);
      spawnSparkleBurst(e.clientX, e.clientY, 18, '#ff758f');
    });
  } else {
    el.innerHTML = `
      <div class="lantern-frame">
        <div class="lantern-dome ${colorClass}">
          <div class="lantern-ribs"></div>
          <div class="lantern-inner-candle"></div>
        </div>
        <div class="lantern-tassel"></div>
      </div>
    `;
    el.title = "Farolillo de Amor ✨ (Haz clic para ver el deseo)";
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      showToastNotification(data.wishText || "🏮 'Un deseo lleno de amor que sube a las estrellas ✨'", '🏮');
      spawnSparkleBurst(e.clientX, e.clientY, 15, '#ffd166');
    });
  }

  lanternsContainer.appendChild(el);
  return el;
}

function LanternInstance(data, initialY) {
  this.data = data;
  this.element = createLanternElement(data);
  const isMobile = width < 768;

  this.z = Math.random() * 400 - 200; // Profundidad 3D

  if (isMobile) {
    const margin = 20;
    const safeW = Math.max(30, width - margin * 2 - 90);
    this.x = margin + Math.random() * safeW;
    this.swayAmplitude = 10 + Math.random() * 12;
    // En celulares las fotos y farolillos deben verse grandes, nítidos y destacables
    if (data.isPhoto) {
      this.scale = 0.95 + Math.random() * 0.22;
      this.opacity = 0.95 + Math.random() * 0.05;
    } else {
      this.scale = 0.80 + Math.random() * 0.22;
      this.opacity = 0.85 + Math.random() * 0.15;
    }
    this.speedY = 0.38 + Math.random() * 0.42;
  } else {
    this.x = 40 + Math.random() * (width - 120);
    this.swayAmplitude = 25 + Math.random() * 30;
    const depthScale = Math.max(0.45, Math.min(1.15, (this.z + 500) / 500));
    this.scale = depthScale * (data.isPhoto ? 0.95 : (0.75 + Math.random() * 0.35));
    this.opacity = Math.max(0.5, Math.min(1, depthScale));
    this.speedY = 0.45 + Math.random() * 0.55;
  }

  this.y = initialY !== undefined ? initialY : height + 50 + Math.random() * 80;
  this.swaySpeed = 0.015 + Math.random() * 0.02;
  this.swayPhase = Math.random() * Math.PI * 2;
}

LanternInstance.prototype.update = function() {
  this.y -= this.speedY;
  this.swayPhase += this.swaySpeed;
  const currentX = this.x + Math.sin(this.swayPhase) * this.swayAmplitude;

  this.element.style.transform = `translate3d(${currentX}px, ${this.y}px, ${this.z}px) scale(${this.scale})`;
  this.element.style.opacity = this.opacity;
  this.element.style.zIndex = Math.round(this.z + 500);

  // Si sobrepasa la pantalla por arriba, se reinicia desde abajo
  if (this.y < -160) {
    this.y = height + 40 + Math.random() * 60;
    const isMobile = width < 768;
    const margin = isMobile ? 20 : 40;
    const safeW = isMobile ? Math.max(30, width - margin * 2 - 90) : (width - 100);
    this.x = margin + Math.random() * safeW;
  }
};

function initLanternFleet() {
  if (!lanternsContainer) return;
  lanternsContainer.innerHTML = '';
  activeLanternElements = [];

  const isMobile = width < 768;

  // Crear farolillos para cada foto bien distribuidos
  CONFIG.photos.forEach((photo, idx) => {
    const spacing = height / (CONFIG.photos.length + 1);
    const initialY = spacing * (idx + 1) + (Math.random() * 40 - 20);
    activeLanternElements.push(new LanternInstance({ isPhoto: true, photo: photo }, initialY));
  });

  // Farolillos de deseos ambientales adicionales
  const ambientCount = isMobile ? 4 : 7;
  const wishColors = ['color-rose', 'color-violet', 'color-cyan', ''];
  for (let i = 0; i < ambientCount; i++) {
    const initialY = Math.random() * height;
    const color = wishColors[i % wishColors.length];
    const wish = CONFIG.romanticWishes[i % CONFIG.romanticWishes.length];
    activeLanternElements.push(new LanternInstance({ isPhoto: false, colorClass: color, wishText: wish }, initialY));
  }
}

function animateLanterns() {
  activeLanternElements.forEach(lantern => lantern.update());
  requestAnimationFrame(animateLanterns);
}

/* ============================================================
   6. LANZAR UN FAROLILLO CON DESEO PERSONALIZADO
   ============================================================ */
const openWishMakerBtn = document.getElementById('open-wish-maker-btn');
const closeWishBtn = document.getElementById('close-wish-btn');
const wishModal = document.getElementById('wish-modal');
const wishBackdrop = document.getElementById('wish-backdrop');
const releaseWishLanternBtn = document.getElementById('release-wish-lantern-btn');
const customWishInput = document.getElementById('custom-wish-input');
const colorDots = document.querySelectorAll('.color-dot');
const quickWishTags = document.querySelectorAll('.wish-tag');

let selectedLanternColor = 'gold';

colorDots.forEach(dot => {
  dot.addEventListener('click', () => {
    colorDots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    selectedLanternColor = dot.dataset.color;
  });
});

quickWishTags.forEach(tag => {
  tag.addEventListener('click', () => {
    if (customWishInput) {
      customWishInput.value = tag.textContent;
    }
  });
});

if (openWishMakerBtn && wishModal) {
  openWishMakerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    wishModal.classList.add('active');
  });
}

function closeWishModal() {
  if (wishModal) wishModal.classList.remove('active');
}

if (closeWishBtn) closeWishBtn.addEventListener('click', closeWishModal);
if (wishBackdrop) wishBackdrop.addEventListener('click', closeWishModal);

if (releaseWishLanternBtn) {
  releaseWishLanternBtn.addEventListener('click', () => {
    const wishText = (customWishInput && customWishInput.value.trim()) 
      ? customWishInput.value.trim() 
      : "✨ '¡Felices 2 meses mi amor! Estar siempre juntos y hacernos inmensamente felices ❤️'";

    closeWishModal();

    // Determinar clase de color
    let colorClass = '';
    if (selectedLanternColor === 'rose') colorClass = 'color-rose';
    else if (selectedLanternColor === 'violet') colorClass = 'color-violet';
    else if (selectedLanternColor === 'cyan') colorClass = 'color-cyan';

    // Lanzar farolillo nuevo desde el centro del lago
    const newLantern = new LanternInstance({
      isPhoto: false,
      colorClass: colorClass,
      wishText: `✨ Deseo por Nuestros 2 Meses: "${wishText}" ❤️`
    }, height - 30);

    newLantern.x = width / 2 - 35 + (Math.random() * 40 - 20);
    newLantern.speedY = 0.95; // Sube más rápido al inicio
    activeLanternElements.push(newLantern);

    // Chispas y notificación
    spawnSparkleBurst(width / 2, height - 60, 30, '#ffd166');
    showToastNotification("🏮 ¡Tu farolillo se encendió y subió a las estrellas por nuestros 2 meses, Tamy! ✨", "🏮");

    if (customWishInput) customWishInput.value = '';
  });
}

/* ============================================================
   7. FESTIVAL MASIVO DE FAROLILLOS (RAPUNZEL CASCADE)
   ============================================================ */
const triggerFestivalBtn = document.getElementById('trigger-festival-btn');
const letterCelebrateBtn = document.getElementById('letter-celebrate-btn');

function triggerLanternFestival() {
  showToastNotification("✨ ¡Felices 2 Meses, Jose & Tamy! Lluvia de farolillos al cielo 🏮🎆", "🎆");

  const colors = ['color-rose', 'color-violet', 'color-cyan', ''];
  const isMobile = width < 768;
  const totalNewLanterns = isMobile ? 16 : 28;

  for (let i = 0; i < totalNewLanterns; i++) {
    setTimeout(() => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const randomWish = CONFIG.romanticWishes[Math.floor(Math.random() * CONFIG.romanticWishes.length)];
      
      const lantern = new LanternInstance({
        isPhoto: false,
        colorClass: color,
        wishText: randomWish
      }, height + 20);

      lantern.x = (isMobile ? 15 : 20) + Math.random() * (width - (isMobile ? 50 : 80));
      lantern.speedY = 0.65 + Math.random() * 0.7;
      activeLanternElements.push(lantern);

      spawnSparkleBurst(lantern.x, height - 10, 8, '#ffd166');
    }, i * 280);
  }
}

if (triggerFestivalBtn) {
  triggerFestivalBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerLanternFestival();
  });
}

if (letterCelebrateBtn) {
  letterCelebrateBtn.addEventListener('click', () => {
    const letterModal = document.getElementById('letter-modal');
    if (letterModal) letterModal.classList.remove('active');
    triggerLanternFestival();
  });
}

/* ============================================================
   8. MODAL DE FOTO POLAROID ZOOM & BESOS
   ============================================================ */
const photoModal = document.getElementById('photo-modal');
const closePhotoBtn = document.getElementById('close-photo-btn');
const photoBackdrop = document.getElementById('photo-backdrop');
const modalPhotoImg = document.getElementById('modal-photo-img');
const modalPhotoTitle = document.getElementById('modal-photo-title');
const modalPhotoDesc = document.getElementById('modal-photo-desc');
const sendKissBtn = document.getElementById('send-kiss-btn');

function openPhotoModal(photo) {
  if (!photoModal) return;
  if (modalPhotoImg) modalPhotoImg.src = photo.url;
  if (modalPhotoTitle) modalPhotoTitle.textContent = photo.title;
  if (modalPhotoDesc) modalPhotoDesc.textContent = photo.desc;
  photoModal.classList.add('active');
}

function closePhotoModal() {
  if (photoModal) photoModal.classList.remove('active');
}

if (closePhotoBtn) closePhotoBtn.addEventListener('click', closePhotoModal);
if (photoBackdrop) photoBackdrop.addEventListener('click', closePhotoModal);

if (sendKissBtn) {
  sendKissBtn.addEventListener('click', (e) => {
    showToastNotification("💋 ¡Jose te envía un beso enorme con todo su corazón, mi Tamy! 💖", "💋");
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        spawnFloatingHeart(
          width / 2 + (Math.random() * 200 - 100),
          height / 2 + (Math.random() * 100 - 50)
        );
      }, i * 120);
    }
  });
}

/* ============================================================
   9. MODAL CARTA DE AMOR & BARQUITO DE PAPEL
   ============================================================ */
const openLetterBtn = document.getElementById('open-letter-btn');
const closeLetterBtn = document.getElementById('close-letter-btn');
const letterModal = document.getElementById('letter-modal');
const letterBackdrop = document.getElementById('letter-backdrop');
const origamiBoat = document.getElementById('origami-boat');

function openLetter() {
  if (letterModal) letterModal.classList.add('active');
}

function closeLetter() {
  if (letterModal) letterModal.classList.remove('active');
}

if (openLetterBtn) openLetterBtn.addEventListener('click', (e) => { e.stopPropagation(); openLetter(); });
if (origamiBoat) {
  origamiBoat.addEventListener('click', (e) => {
    e.stopPropagation();
    spawnSparkleBurst(width * 0.15, height * 0.85, 25, '#ffd166');
    showToastNotification("⛵ 'Jose & Tamy navegando juntos... ¡2 meses de puro amor! Te amo con el alma' 💕", "⛵");
    setTimeout(openLetter, 1100);
  });
}
if (closeLetterBtn) closeLetterBtn.addEventListener('click', closeLetter);
if (letterBackdrop) letterBackdrop.addEventListener('click', closeLetter);

/* ============================================================
   10. MODAL RAZONES POR LAS QUE TE AMO
   ============================================================ */
const openReasonsBtn = document.getElementById('open-reasons-btn');
const closeReasonsBtn = document.getElementById('close-reasons-btn');
const reasonsModal = document.getElementById('reasons-modal');
const reasonsBackdrop = document.getElementById('reasons-backdrop');
const reasonNumberEl = document.getElementById('reason-number');
const reasonTextEl = document.getElementById('reason-text');
const reasonsProgressEl = document.getElementById('reasons-progress');
const prevReasonBtn = document.getElementById('prev-reason-btn');
const nextReasonBtn = document.getElementById('next-reason-btn');
const randomReasonBtn = document.getElementById('random-reason-btn');

let currentReasonIndex = 0;

function showReason(index) {
  if (index < 0) index = CONFIG.reasons.length - 1;
  if (index >= CONFIG.reasons.length) index = 0;
  currentReasonIndex = index;

  if (reasonTextEl) {
    reasonTextEl.style.opacity = '0';
    setTimeout(() => {
      if (reasonNumberEl) reasonNumberEl.textContent = `Razón #${currentReasonIndex + 1} de ${CONFIG.reasons.length}`;
      reasonTextEl.textContent = CONFIG.reasons[currentReasonIndex];
      reasonTextEl.style.opacity = '1';
      if (reasonsProgressEl) {
        reasonsProgressEl.style.width = `${((currentReasonIndex + 1) / CONFIG.reasons.length) * 100}%`;
      }
    }, 150);
  }
}

if (openReasonsBtn && reasonsModal) {
  openReasonsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    reasonsModal.classList.add('active');
    showReason(currentReasonIndex);
  });
}

if (closeReasonsBtn) closeReasonsBtn.addEventListener('click', () => reasonsModal.classList.remove('active'));
if (reasonsBackdrop) reasonsBackdrop.addEventListener('click', () => reasonsModal.classList.remove('active'));

if (prevReasonBtn) prevReasonBtn.addEventListener('click', () => showReason(currentReasonIndex - 1));
if (nextReasonBtn) nextReasonBtn.addEventListener('click', () => showReason(currentReasonIndex + 1));
if (randomReasonBtn) {
  randomReasonBtn.addEventListener('click', () => {
    let rand;
    do {
      rand = Math.floor(Math.random() * CONFIG.reasons.length);
    } while (rand === currentReasonIndex && CONFIG.reasons.length > 1);
    showReason(rand);
  });
}

/* ============================================================
   11. CONTADOR DE AMOR EN VIVO
   ============================================================ */
function updateLoveCounter() {
  const now = new Date();
  const diff = Math.max(0, now - CONFIG.startDate);

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
   12. TOAST FLOTANTE DE NOTIFICACIÓN
   ============================================================ */
const floatingToast = document.getElementById('floating-toast');
const toastText = document.getElementById('toast-text');
const toastIcon = document.getElementById('toast-icon');
let toastTimer = null;

function showToastNotification(message, icon) {
  if (!floatingToast || !toastText) return;
  toastText.textContent = message;
  if (toastIcon) toastIcon.textContent = icon || '🏮';
  floatingToast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    floatingToast.classList.remove('show');
  }, 3600);
}

/* ============================================================
   13. BOTÓN TOGGLE LUCIÉRNAGAS
   ============================================================ */
const toggleFirefliesBtn = document.getElementById('toggle-fireflies-btn');
if (toggleFirefliesBtn) {
  toggleFirefliesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    firefliesEnabled = !firefliesEnabled;
    toggleFirefliesBtn.classList.toggle('active', firefliesEnabled);
    showToastNotification(
      firefliesEnabled ? "🌟 Luciérnagas mágicas encendidas ✨" : "🌟 Luciérnagas en reposo",
      "🌟"
    );
  });
}

/* ============================================================
   14. REPRODUCTOR DE MÚSICA ROMÁNTICA
   ============================================================ */
const bgMusic = document.getElementById('bg-music');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const musicDiscWrap = document.getElementById('music-disc-wrap');
const audioWaves = document.getElementById('audio-waves');

function toggleAudio(play) {
  if (!bgMusic) return;

  if (play === undefined) {
    play = bgMusic.paused;
  }

  if (play) {
    bgMusic.play().then(() => {
      if (playIcon) playIcon.textContent = '⏸️';
      if (musicDiscWrap) musicDiscWrap.classList.add('spinning');
      if (audioWaves) audioWaves.classList.add('playing');
    }).catch(err => {
      console.log('Audio autoplay prevented or file missing:', err);
      if (playIcon) playIcon.textContent = '▶️';
      if (musicDiscWrap) musicDiscWrap.classList.remove('spinning');
      if (audioWaves) audioWaves.classList.remove('playing');
    });
  } else {
    bgMusic.pause();
    if (playIcon) playIcon.textContent = '▶️';
    if (musicDiscWrap) musicDiscWrap.classList.remove('spinning');
    if (audioWaves) audioWaves.classList.remove('playing');
  }
}

if (playPauseBtn) {
  playPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleAudio();
  });
}

/* ============================================================
   15. PANTALLA DE BIENVENIDA / BOTÓN EMPEZAR
   ============================================================ */
const startBtn = document.getElementById('start-btn');
const introScreen = document.getElementById('intro-screen');

if (startBtn && introScreen) {
  startBtn.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    toggleAudio(true);
    initLanternFleet();
    setTimeout(() => {
      spawnSparkleBurst(width / 2, height * 0.5, 40, '#ffd166');
      showToastNotification("🏮 ¡Felices 2 Meses, mi Tamy hermosa! Bienvenida a nuestra noche mágica ❤️", "✨");
    }, 1200);
  });
} else {
  initLanternFleet();
}

/* ============================================================
   LUNA BRILLANTE INTERACTIVA (EASTER EGG)
   ============================================================ */
const glowingMoon = document.getElementById('glowing-moon');
if (glowingMoon) {
  glowingMoon.style.cursor = 'pointer';
  glowingMoon.title = "Haz clic en la luna de nuestro amor 🌕";
  glowingMoon.addEventListener('click', (e) => {
    e.stopPropagation();
    spawnSparkleBurst(e.clientX, e.clientY, 35, '#ffd166');
    showToastNotification("🌕 'Ni la luna ni todas las estrellas brillan tanto como tú, mi Tamy. ¡Felices 2 meses!' ❤️", "🌕");
  });
}

/* ============================================================
   16. CORAZONES FLOTANTES AL CLIC
   ============================================================ */
const romanticEmojis = ['❤️', '💖', '💕', '✨', '🏮', '🌹', '🥰', '💋'];

function spawnFloatingHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'floating-click-heart';
  heart.textContent = romanticEmojis[Math.floor(Math.random() * romanticEmojis.length)];
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.setProperty('--tx', `${Math.random() * 80 - 40}px`);

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1800);
}

document.addEventListener('click', (e) => {
  if (
    e.target.closest('.custom-modal') ||
    e.target.closest('#intro-screen') ||
    e.target.closest('.actions-dock') ||
    e.target.closest('.romantic-music-player') ||
    e.target.closest('.love-counter-badge') ||
    e.target.closest('.floating-lantern') ||
    e.target.closest('#origami-boat')
  ) {
    return;
  }

  spawnFloatingHeart(e.clientX, e.clientY);
  spawnSparkleBurst(e.clientX, e.clientY, 8);
});

/* ============================================================
   INICIO DE CICLOS DE RENDER
   ============================================================ */
resizeAllCanvases();
renderSkyAndAurora();
renderWaterLake();
renderFireflies();
renderSparkles();
animateLanterns();
