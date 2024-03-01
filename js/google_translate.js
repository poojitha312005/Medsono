function googleTranslateElementInit() {
    var selectedLanguage = localStorage.getItem("selectedLanguage") || 'en';
    new google.translate.TranslateElement({ pageLanguage: selectedLanguage }, 'google_translate_element');
}

function setLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    location.reload(); // Reload the page to apply the selected language
}
          