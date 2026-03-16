document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('colorInput');
  const btn = document.getElementById('hexRgbBtn');
  const out = document.getElementById('hexRgbResult');
  const preview = document.getElementById('hexRgbPreview');
  if (!input || !btn || !out || !preview) return;

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  }

  function rgbToHex(rgb) {
    const result = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(rgb);
    if (!result) return null;
    const vals = result.slice(1).map(Number);
    if (vals.some(v => v < 0 || v > 255)) return null;
    return '#' + vals.map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
  }

  btn.addEventListener('click', () => {
    const value = input.value.trim();
    let html = '';
    let color = '';
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      const rgb = hexToRgb(value);
      html = `<strong>Conversion</strong><pre>Hex: ${value.toUpperCase()}\nRGB: ${rgb}</pre>`;
      color = value;
    } else if (/^rgb\(/i.test(value)) {
      const hex = rgbToHex(value);
      if (!hex) {
        out.style.display = 'block';
        out.innerHTML = '<strong>Invalid input.</strong><pre>Enter a full hex value like #27AE60 or an RGB value like rgb(39, 174, 96).</pre>';
        preview.style.background = 'linear-gradient(180deg, #edf6fb 0%, #d9edf8 100%)';
        return;
      }
      html = `<strong>Conversion</strong><pre>RGB: ${value}\nHex: ${hex}</pre>`;
      color = hex;
    } else {
      out.style.display = 'block';
      out.innerHTML = '<strong>Invalid input.</strong><pre>Enter a full hex value like #27AE60 or an RGB value like rgb(39, 174, 96).</pre>';
      preview.style.background = 'linear-gradient(180deg, #edf6fb 0%, #d9edf8 100%)';
      return;
    }
    out.style.display = 'block';
    out.innerHTML = html;
    preview.style.background = color;
  });
});