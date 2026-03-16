document.addEventListener('DOMContentLoaded', () => {
  const age = document.getElementById('dogAge');
  const btn = document.getElementById('dogAgeBtn');
  const out = document.getElementById('dogAgeResult');
  if (!age || !btn || !out) return;

  btn.addEventListener('click', () => {
    const dogAge = Math.max(0, Number(age.value || 0));
    const humanAge = dogAge >= 2 ? 24 + ((dogAge - 2) * 5) : (dogAge * 15);
    out.style.display = 'block';
    out.innerHTML = `<strong>Estimated human-equivalent age</strong><pre>Your dog's age in human years is approximately ${humanAge.toFixed(1)}.</pre>`;
  });
});