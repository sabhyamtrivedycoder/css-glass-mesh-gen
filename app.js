function updateGlass() {
  const blur = document.getElementById('blurInput').value;
  const opacity = document.getElementById('opacityInput').value / 100;
  const border = document.getElementById('borderInput').value / 100;
  const radius = document.getElementById('radiusInput').value;

  document.getElementById('blurVal').textContent = `${blur}px`;
  document.getElementById('opacityVal').textContent = opacity;
  document.getElementById('borderVal').textContent = border;
  document.getElementById('radiusVal').textContent = `${radius}px`;

  const card = document.getElementById('glassCard');
  card.style.background = `rgba(255, 255, 255, ${opacity})`;
  card.style.backdropFilter = `blur(${blur}px)`;
  card.style.webkitBackdropFilter = `blur(${blur}px)`;
  card.style.border = `1px solid rgba(255, 255, 255, ${border})`;
  card.style.borderRadius = `${radius}px`;

  const css = `background: rgba(255, 255, 255, ${opacity});
backdrop-filter: blur(${blur}px);
-webkit-backdrop-filter: blur(${blur}px);
border-radius: ${radius}px;
border: 1px solid rgba(255, 255, 255, ${border});
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);`;

  document.getElementById('cssCodeOutput').textContent = css;
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
  ['blurInput', 'opacityInput', 'borderInput', 'radiusInput'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateGlass);
  });
  updateGlass();
  document.getElementById('copyCssBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('cssCodeOutput').textContent);
    alert('CSS copied!');
  });
});
}
if (typeof module !== 'undefined') module.exports = { getCssSnippet: () => true };