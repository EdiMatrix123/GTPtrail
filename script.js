const translateBtn = document.getElementById('translate-btn');
const textToTranslate = document.getElementById('text-to-translate');
const targetLanguage = document.getElementById('target-language');
const translatedText = document.getElementById('translated-text');

translateBtn.addEventListener('click', () => {
  const text = textToTranslate.value;
  const language = targetLanguage.value;

  // Call the translation API
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${language}&dt=t&q=${encodeURI(text)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const translated = data[0][0][0];
      translatedText.value = translated;
    })
    .catch(error => console.error(error));
});