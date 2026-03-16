document.addEventListener('DOMContentLoaded', () => {
  const temp = document.getElementById('temp');
  const unit = document.getElementById('unit');
  const btn = document.getElementById('tempBtn');
  const out = document.getElementById('temperatureResult');
  if (!temp || !unit || !btn || !out) return;

  btn.addEventListener('click', () => {
    const tempValue = parseFloat(temp.value);
    if (Number.isNaN(tempValue)) {
      out.style.display = 'block';
      out.innerHTML = '<strong>Enter a valid temperature.</strong>';
      return;
    }
    let result;
    if (unit.value === 'celsius') {
      result = `${tempValue}°C is equal to ${(((tempValue * 9) / 5) + 32).toFixed(2)}°F`;
    } else {
      result = `${tempValue}°F is equal to ${(((tempValue - 32) * 5) / 9).toFixed(2)}°C`;
    }
    out.style.display = 'block';
    out.innerHTML = `<strong>Converted temperature</strong><pre>${result}</pre>`;
  });
});