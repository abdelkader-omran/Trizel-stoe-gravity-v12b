
const langData = {};
const langElements = document.querySelectorAll("[data-i18n]");

async function setLanguage(lang) {
  const response = await fetch(`i18n/${lang}.json`);
  const translations = await response.json();
  langElements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[key] || el.textContent;
  });
}

document.getElementById("langSwitcher").addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

setLanguage("en");
