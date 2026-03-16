document.addEventListener('DOMContentLoaded', () => {
  const age = document.getElementById('catAge');
  const btn = document.getElementById('catAgeBtn');
  const out = document.getElementById('catAgeResult');
  if (!age || !btn || !out) return;

  btn.addEventListener('click', () => {
    const catAge = Math.max(0, Number(age.value || 0));
    const humanAge = catAge >= 2 ? 24 + ((catAge - 2) * 4) : (catAge * 15);
    out.style.display = 'block';
    out.innerHTML = `<strong>Estimated human-equivalent age</strong><pre>Your cat's age in human years is approximately ${humanAge.toFixed(1)}.</pre>`;
  });
});