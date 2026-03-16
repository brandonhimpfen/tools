document.addEventListener('DOMContentLoaded', () => {
  const monthlyMembers = document.getElementById('monthly-members');
  const monthlyPrice = document.getElementById('monthly-price');
  const yearlyMembers = document.getElementById('yearly-members');
  const yearlyPrice = document.getElementById('yearly-price');
  const btn = document.getElementById('blogArrBtn');
  const out = document.getElementById('blogArrResult');
  if (!monthlyMembers || !monthlyPrice || !yearlyMembers || !yearlyPrice || !btn || !out) return;

  btn.addEventListener('click', () => {
    const mm = parseInt(monthlyMembers.value || '0', 10);
    const mp = parseFloat(monthlyPrice.value || '0');
    const ym = parseInt(yearlyMembers.value || '0', 10);
    const yp = parseFloat(yearlyPrice.value || '0');

    const monthlyARR = mm * mp * 12;
    const yearlyARR = ym * yp;
    const totalARR = monthlyARR + yearlyARR;

    out.style.display = 'block';
    out.innerHTML = `<strong>ARR estimate</strong><pre>Monthly plan ARR: $${monthlyARR.toFixed(2)}\nYearly plan ARR: $${yearlyARR.toFixed(2)}\nTotal ARR: $${totalARR.toFixed(2)}</pre>`;
  });
});