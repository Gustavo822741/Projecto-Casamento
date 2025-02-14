const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 200;
let frame = 0;
function drawAnimation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = '#8B4513';
    ctx.fillText('Silas ❤ Melissa', 120 + Math.sin(frame * 0.1) * 20, 100);
    frame++;
    requestAnimationFrame(drawAnimation);
}
drawAnimation();
function operacaoCasamento() {
    document.getElementById('qrModal').style.display = 'block';
    new QRCode(document.getElementById("qrcode"), "(21) 97030-7175");
}
function fecharModal() {
    document.getElementById('qrModal').style.display = 'none';
}
function menuRecepcao() {
    window.location.href = './assets/menu.html';
}
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 5000);
}
setInterval(createPetal, 300);