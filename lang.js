document.addEventListener('DOMContentLoaded', () => {
  const langSelector = document.getElementById('languageSwitcher');
  const elements = document.querySelectorAll('[data-i18n]');

  function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
      .then(res => res.json())
      .then(data => {
        elements.forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (data[key]) el.textContent = data[key];
        });
      });
  }

  langSelector.addEventListener('change', (e) => {
    loadLanguage(e.target.value);
  });

  loadLanguage(langSelector.value);
});
