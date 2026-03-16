document.addEventListener('DOMContentLoaded', () => {
  const fromTime = document.getElementById('basic-from-time');
  const fromZone = document.getElementById('basic-from-zone');
  const toZone = document.getElementById('basic-to-zone');
  const btn = document.getElementById('basicTzBtn');
  const out = document.getElementById('basicTzResult');
  if (!fromTime || !fromZone || !toZone || !btn || !out) return;

  btn.addEventListener('click', () => {
    if (!fromTime.value) {
      out.style.display = 'block';
      out.innerHTML = '<strong>Please enter a valid time.</strong>';
      return;
    }
    const [hours, minutes] = fromTime.value.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    try {
      const utcTime = new Date(date.toLocaleString('en-US', { timeZone: fromZone.value }));
      const converted = utcTime.toLocaleString('en-US', {
        timeZone: toZone.value,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      out.style.display = 'block';
      out.innerHTML = `<strong>Converted time</strong><pre>${fromTime.value} in ${fromZone.value}\n→ ${converted} in ${toZone.value}</pre>`;
    } catch (error) {
      out.style.display = 'block';
      out.innerHTML = '<strong>An error occurred.</strong><pre>Please check your selected time zones.</pre>';
    }
  });
});