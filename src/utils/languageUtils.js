import i18n from "./i18n";

/**
 * Dil değiştirici fonksiyon.
 * Bu fonksiyon, uygulamanın dilini değiştirir ve
 * bu dili tarayıcı yerel depolamasına kaydeder.
 *
 * @param {string} lng - Değiştirilecek dil kodu (örn. "en", "tr").
 */
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem("lang", lng);
};

/**
 * Başlangıç dilini döndürür.
 * Tarayıcı yerel depolamasında kaydedilmiş bir dil varsa
 * onu döndürür, aksi halde varsayılan olarak "en" döndürür.
 *
 * @returns {string} - Kaydedilmiş dil kodu ya da varsayılan olarak "en".
 */
export const getInitialLanguage = () => {
  return (
    localStorage.getItem("lang") || navigator.language.split("-")[0] || "en"
  );
};
