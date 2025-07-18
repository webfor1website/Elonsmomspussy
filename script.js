console.log('Three.js loaded:', typeof THREE !== 'undefined' ? 'Yes' : 'No');

window.onload = () => {
    alert('3 hints over 60 seconds, crack the cipher or you don’t deserve the code, fucker!');
    document.getElementById('hint-0').style.display = 'block';
};
setTimeout(() => document.getElementById('hint-20').style.display = 'block', 20000);
setTimeout(() => document.getElementById('hint-40').style.display = 'block', 40000);

function checkKey() {
    const key = document.getElementById('key-input').value;
    if (key === '7') {
        document.getElementById('code-container').style.display = 'block';
        alert('You cracked the chaos, you unhinged fuck!');
    } else {
        alert('Wrong fucking key. It’s one digit. Get it together.');
    }
}

function copyCode(id) {
    const code = document.getElementById(id).textContent;
    navigator.clipboard.writeText(code).then(() => alert('Code’s yours, you chaotic motherfucker!'));
}

const featureHeadings = [
    { id: 'feature-1', name: 'TriadSynapse', code: 'Q⚡B85URZJR92 SLL' },
    { id: 'feature-2', name: 'MultiModalFusion', code: 'C1U3R⚡RNSYP C37MKF' },
    { id: 'feature-3', name: 'DistributedChaos', code: 'HYXB3TREQQ∆ E3NFYH9ZK' }
];
function flashFeatureHeadings() {
    featureHeadings.forEach(feature => {
        const el = document.getElementById(feature.id);
        if (Math.random() < (window.innerWidth < 430 ? 0.15 : 0.25)) {
            el.textContent = feature.code;
            el.classList.add('flash-code');
            setTimeout(() => {
                el.textContent = feature.name;
                el.classList.remove('flash-code');
            }, 1000);
        }
    });
}
setInterval(flashFeatureHeadings, 2000);

const lightningCanvas = document.getElementById('lightning-canvas');
const lCtx = lightningCanvas.getContext('2d');
lightningCanvas.width = window.innerWidth;
lightningCanvas.height = window.innerHeight;
let stormMode = false;
function drawLightning() {
    let lightningChance = stormMode ? 0.2 : 0.1;
    if (Math.random() < lightningChance) {
        lCtx.clearRect(0, 0, lightningCanvas.width, lightningCanvas.height);
        lCtx.strokeStyle = '#ffff00';
        lCtx.lineWidth = 6;
        lCtx.shadowBlur = 20;
        lCtx.shadowColor = '#9900ff';
        lCtx.beginPath();
        let x = Math.random() * lightningCanvas.width;
        let y = 0;
        lCtx.moveTo(x, y);
        for (let i = 0; i < 8; i++) {
            x += (Math.random() - 0.5) * 150;
            y += lightningCanvas.height / 8;
            lCtx.lineTo(x, y);
        }
        lCtx.stroke();
        document.body.style.background = 'linear-gradient(45deg, #9900ff, #ffff00)';
        document.body.style.opacity = '0.8';
        document.body.style.animation = 'screen-shake 0.2s';
        document.querySelectorAll('.neon-text, .text-white, .hint, .cipher-text').forEach(el => el.classList.add('lightning-flash'));
        setTimeout(() => {
            lCtx.globalAlpha = 0.4;
            lCtx.stroke();
            setTimeout(() => {
                lCtx.clearRect(0, 0, lightningCanvas.width, lightningCanvas.height);
                lCtx.globalAlpha = 1;
                document.body.style.background = 'linear-gradient(45deg, #666666, #999999)';
                document.body.style.opacity = '1';
                document.body.style.animation = '';
                document.querySelectorAll('.lightning-flash').forEach(el => el.classList.remove('lightning-flash'));
            }, 200);
        }, 100);
    }
}
setInterval(drawLightning, 100);
setInterval(() => { if (Math.random() < 0.01) { stormMode = true; setTimeout(() => stormMode = false, 3000); } }, 5000);

const shockwaveCanvas = document.getElementById('shockwave-canvas');
const swCtx = shockwaveCanvas.getContext('2d');
shockwaveCanvas.width = window.innerWidth;
shockwaveCanvas.height = window.innerHeight;
let shockwaveRadius = 0;
function drawShockwave() {
    if (Math.random() < 0.1 || stormMode) { shockwaveRadius = 10; setTimeout(() => shockwaveRadius = 0, 500); }
    if (shockwaveRadius > 0) {
        swCtx.clearRect(0, 0, shockwaveCanvas.width, shockwaveCanvas.height);
        swCtx.beginPath();
        swCtx.arc(window.innerWidth / 2, window.innerHeight / 2, shockwaveRadius, 0, Math.PI * 2);
        swCtx.strokeStyle = '#ffff00';
        swCtx.lineWidth = 3;
        swCtx.globalAlpha = 0.5;
        swCtx.stroke();
        shockwaveRadius += 10;
    }
}
setInterval(drawShockwave, 50);

const pulseCanvas = document.getElementById('neon-pulse');
const pulseCtx = pulseCanvas.getContext('2d');
pulseCanvas.width = window.innerWidth;
pulseCanvas.height = window.innerHeight;
let pulseRadius = 0;
function drawNeonPulse() {
    if (stormMode || shockwaveRadius > 0) { pulseRadius = 10; setTimeout(() => pulseRadius = 0, 500); }
    if (pulseRadius > 0) {
        pulseCtx.clearRect(0, 0, pulseCanvas.width, pulseCanvas.height);
        pulseCtx.beginPath();
        pulseCtx.arc(window.innerWidth / 2, window.innerHeight / 2, pulseRadius, 0, Math.PI * 2);
        pulseCtx.strokeStyle = '#ffff00';
        pulseCtx.lineWidth = 5;
        pulseCtx.globalAlpha = 0.7;
        pulseCtx.stroke();
        pulseRadius += 15;
    }
}
setInterval(drawNeonPulse, 50);

const asciiCanvas = document.getElementById('ascii-rain');
const asciiCtx = asciiCanvas.getContext('2d');
asciiCanvas.width = window.innerWidth;
asciiCanvas.height = window.innerHeight;
const asciiChars = ['∆', '⚡', '*', '8==D', '∆∆∆'];
const drops = [];
for (let i = 0; i < (window.innerWidth < 430 ? 30 : 50); i++) {
    drops.push({ x: Math.random() * asciiCanvas.width, y: Math.random() * asciiCanvas.height, char: asciiChars[Math.floor(Math.random() * asciiChars.length)], speed: Math.random() * 5 + 2 });
}
function drawAsciiRain() {
    asciiCtx.clearRect(0, 0, asciiCanvas.width, asciiCanvas.height);
    asciiCtx.fillStyle = '#9900ff';
    asciiCtx.font = window.innerWidth < 430 ? '10px monospace' : '12px monospace';
    drops.forEach(drop => {
        asciiCtx.fillText(drop.char, drop.x, drop.y);
        drop.y += drop.speed;
        if (drop.y > asciiCanvas.height) { drop.y = 0; drop.char = asciiChars[Math.floor(Math.random() * asciiChars.length)]; }
        if ((stormMode || shockwaveRadius > 0) && (drop.char === '8==D')) {
            drop.char = '∆∆∆';
            drop.speed += 5;
            for (let i = 0; i < 5; i++) {
                let sparkX = drop.x + (Math.random() - 0.5) * 20;
                let sparkY = drop.y + (Math.random() - 0.5) * 20;
                asciiCtx.fillText('⚡', sparkX, sparkY);
            }
            setTimeout(() => { drop.char = asciiChars[Math.floor(Math.random() * asciiChars.length)]; drop.speed = Math.random() * 5 + 2; }, 200);
        }
    });
}
setInterval(drawAsciiRain, 50);

const matrixCanvas = document.getElementById('neural-matrix');
const matrixCtx = matrixCanvas.getContext('2d');
matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;
function drawMatrixGrid() {
    matrixCtx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    matrixCtx.strokeStyle = '#9900ff';
    matrixCtx.lineWidth = 1;
    const gridSize = window.innerWidth < 430 ? 30 : 50;
    for (let x = 0; x < matrixCanvas.width; x += gridSize) {
        for (let y = 0; y < matrixCanvas.height; y += gridSize) {
            matrixCtx.beginPath();
            matrixCtx.arc(x, y, 5 + Math.sin(Date.now() * 0.002) * 2, 0, Math.PI * 2);
            matrixCtx.stroke();
        }
    }
}
setInterval(drawMatrixGrid, 100);

const hudCanvas = document.getElementById('hud-overlay');
const hudCtx = hudCanvas.getContext('2d');
hudCanvas.width = window.innerWidth < 430 ? 150 : 250;
hudCanvas.height = window.innerWidth < 430 ? 80 : 120;
function drawHUD() {
    hudCtx.clearRect(0, 0, hudCanvas.width, hudCanvas.height);
    hudCtx.strokeStyle = '#9900ff';
    hudCtx.lineWidth = 1;
    hudCtx.font = window.innerWidth < 430 ? '8px monospace' : '10px monospace';
    hudCtx.fillStyle = '#9900ff';
    hudCtx.fillText(`BCI SYNC: ${Math.floor(Math.random() * 100)}%`, 10, 20);
    hudCtx.fillText(`NEURAL LOAD: ${Math.random().toFixed(2)} THz`, 10, 40);
    hudCtx.fillText(`CHAOS METER: ${(stormMode || shockwaveRadius > 0) ? 100 : Math.floor(Math.random() * 100)}%`, 10, 60);
    hudCtx.beginPath();
    const barWidth = hudCanvas.width - 20;
    hudCtx.rect(10, 70, barWidth * ((stormMode || shockwaveRadius > 0) ? 1 : Math.random() * 0.5 + 0.5), 10);
    hudCtx.fillStyle = shockwaveRadius > 0 ? '#ffff00' : '#9900ff';
    hudCtx.fill();
    hudCtx.stroke();
}
setInterval(drawHUD, 100);

const glyphCanvas = document.getElementById('triad-glyph');
const glyphCtx = glyphCanvas.getContext('2d');
glyphCanvas.width = window.innerWidth < 430 ? 80 : 120;
glyphCanvas.height = window.innerWidth < 430 ? 80 : 120;
function drawGlyph() {
    glyphCtx.clearRect(0, 0, glyphCanvas.width, glyphCanvas.height);
    glyphCtx.strokeStyle = '#ffff00';
    glyphCtx.lineWidth = 3;
    glyphCtx.beginPath();
    const offset = Math.sin(Date.now() * (stormMode ? 0.006 : 0.003)) * 7;
    glyphCtx.moveTo(glyphCanvas.width / 2, 20 + offset);
    glyphCtx.lineTo(glyphCanvas.width / 2 + 30 + offset, glyphCanvas.height - 30);
    glyphCtx.lineTo(glyphCanvas.width / 2 - 30 - offset, glyphCanvas.height - 30);
    glyphCtx.closePath();
    glyphCtx.stroke();
}
setInterval(drawGlyph, 50);

const cyberDicks = document.getElementById('cyber-dicks');
function addCyberDick() {
    let count = (stormMode || shockwaveRadius > 0) ? 6 : 1;
    for (let i = 0; i < count; i++) {
        const dick = document.createElement('div');
        dick.className = 'cyber-dick';
        dick.textContent = '8==D';
        const posX = Math.random() * (window.innerWidth - 50);
        const posY = Math.random() * (window.innerHeight - 50);
        dick.style.left = `${posX}px`;
        dick.style.top = `${posY}px`;
        cyberDicks.appendChild(dick);
        dick.style.opacity = '1';
        setTimeout(() => { dick.style.opacity = '0'; setTimeout(() => dick.remove(), 200); }, 300);
    }
}
setInterval(addCyberDick, 100);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('neural-orb').appendChild(renderer.domElement);
const orbGeometry = new THREE.SphereGeometry(2, 32, 32);
const orbMaterial = new THREE.MeshBasicMaterial({ color: 0x9900ff, wireframe: true });
const orb = new THREE.Mesh(orbGeometry, orbMaterial);
scene.add(orb);
camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);
    if (renderer && orb) {
        orb.rotation.z += 0.007;
        renderer.render(scene, camera);
    }
}
animate();

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

window.addEventListener('resize', () => {
    lightningCanvas.width = window.innerWidth;
    lightningCanvas.height = window.innerHeight;
    shockwaveCanvas.width = window.innerWidth;
    shockwaveCanvas.height = window.innerHeight;
    asciiCanvas.width = window.innerWidth;
    asciiCanvas.height = window.innerHeight;
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    pulseCanvas.width = window.innerWidth;
    pulseCanvas.height = window.innerHeight;
    hudCanvas.width = window.innerWidth < 430 ? 150 : 250;
    hudCanvas.height = window.innerWidth < 430 ? 80 : 120;
    glyphCanvas.width = window.innerWidth < 430 ? 80 : 120;
    glyphCanvas.height = window.innerWidth < 430 ? 80 : 120;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
