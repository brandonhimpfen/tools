document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('reaction-box');
  const result = document.getElementById('reactionResult');
  const reset = document.getElementById('resetReactionBtn');
  if (!box || !result || !reset) return;

  let startTime = null;
  let ready = false;
  let timer = null;

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
    return color;
  }

  function beginCycle() {
    ready = false;
    startTime = null;
    box.style.background = 'linear-gradient(180deg, #edf6fb 0%, #d9edf8 100%)';
    result.innerHTML = '<strong>Get ready.</strong><pre>Wait for the box to change color, then click as quickly as you can.</pre>';
    timer = setTimeout(() => {
      box.style.background = getRandomColor();
      startTime = Date.now();
      ready = true;
      result.innerHTML = '<strong>Now click.</strong><pre>The timer has started.</pre>';
    }, 1000 + Math.random() * 2000);
  }

  box.addEventListener('click', () => {
    if (!ready || !startTime) return;
    const reactionTime = Date.now() - startTime;
    ready = false;
    result.innerHTML = `<strong>Reaction time recorded</strong><pre>Your reaction time is ${reactionTime} milliseconds.</pre>`;
  });

  reset.addEventListener('click', () => {
    clearTimeout(timer);
    beginCycle();
  });

  beginCycle();
});