document.addEventListener('DOMContentLoaded', () => {
  const length = document.getElementById('passwordLength');
  const uppercase = document.getElementById('includeUppercase');
  const lowercase = document.getElementById('includeLowercase');
  const numbers = document.getElementById('includeNumbers');
  const special = document.getElementById('includeSpecialChars');
  const words = document.getElementById('includeWords');
  const btn = document.getElementById('generatePasswordBtn');
  const output = document.getElementById('generatedPassword');
  if (!length || !uppercase || !lowercase || !numbers || !special || !words || !btn || !output) return;

  btn.addEventListener('click', () => {
    const targetLength = Math.max(4, Math.min(128, Number(length.value || 12)));
    let charset = '';
    if (uppercase.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers.checked) charset += '0123456789';
    if (special.checked) charset += '!@#$%^&*()_+[]{}|;:,.<>?';
    if (words.checked) charset += 'applebananacherrydateelephantfoxgrape';
    if (!charset) {
      output.value = 'Select at least one character option.';
      return;
    }
    let password = '';
    const cryptoObj = window.crypto || window.msCrypto;
    for (let i = 0; i < targetLength; i++) {
      const arr = new Uint32Array(1);
      cryptoObj.getRandomValues(arr);
      password += charset.charAt(arr[0] % charset.length);
    }
    output.value = password;
  });
});