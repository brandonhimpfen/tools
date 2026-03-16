document.addEventListener('DOMContentLoaded', () => {
  const tag = document.getElementById('htmlTag');
  const words = document.getElementById('numWords');
  const sentences = document.getElementById('numSentences');
  const btn = document.getElementById('htmlIpsumBtn');
  const out = document.getElementById('htmlOutput');
  if (!tag || !words || !sentences || !btn || !out) return;

  const loremWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];
  const loremSentences = [
    'Lorem ipsum dolor sit amet.',
    'Consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ];

  btn.addEventListener('click', () => {
    const chosenTag = tag.value;
    const wordCount = Number(words.value || 0);
    const sentenceCount = Number(sentences.value || 0);
    let generated = '';

    if (wordCount > 0) {
      generated = Array.from({ length: wordCount }, (_, i) => `<${chosenTag}>${loremWords[i % loremWords.length]}</${chosenTag}>`).join('\n');
    } else if (sentenceCount > 0) {
      generated = Array.from({ length: sentenceCount }, (_, i) => `<${chosenTag}>${loremSentences[i % loremSentences.length]}</${chosenTag}>`).join('\n');
    } else {
      generated = `<${chosenTag}>Lorem ipsum dolor sit amet.</${chosenTag}>`;
    }

    out.value = generated;
  });
});