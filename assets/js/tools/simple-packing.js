document.addEventListener('DOMContentLoaded', () => {
  const tripType = document.getElementById('trip-type');
  const duration = document.getElementById('trip-duration');
  const specialItems = document.getElementById('special-items');
  const btn = document.getElementById('simplePackingBtn');
  const out = document.getElementById('simplePackingResult');
  if (!tripType || !duration || !specialItems || !btn || !out) return;

  btn.addEventListener('click', () => {
    const days = Number(duration.value || 0);
    if (days <= 0) {
      out.style.display = 'block';
      out.innerHTML = '<strong>Please enter a valid trip duration.</strong>';
      return;
    }
    const extras = specialItems.value.split(',').map(item => item.trim()).filter(Boolean);
    const essentials = ['Clothing', 'Toiletries', 'Travel Documents', 'Phone and Charger'];
    const typeSpecific = {
      beach: ['Swimsuit', 'Beach Towel', 'Sunscreen'],
      mountains: ['Hiking Boots', 'Warm Jacket', 'Flashlight'],
      city: ['Comfortable Shoes', 'City Map', 'Light Jacket'],
      international: ['Passport', 'Travel Adapter', 'Guidebook']
    };
    const list = [...essentials, ...(typeSpecific[tripType.value] || []), ...extras];
    out.style.display = 'block';
    out.innerHTML = `<strong>Simple packing list</strong><pre>${list.map(item => `- ${item}`).join('\n')}</pre>`;
  });
});