(function () {
  const articleUrl = "https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-024-19191-5?utm_source";

  const redirectIfShorts = () => {
    if (window.location.href.includes("/shorts/")) {
      window.location.replace(articleUrl);
    }
  };

  // Проверка при загрузке
  redirectIfShorts();

  // Перехват pushState и replaceState
  const patchHistoryMethod = (method) => {
    const original = history[method];
    history[method] = function (...args) {
      const result = original.apply(this, args);
      redirectIfShorts();
      return result;
    };
  };

  patchHistoryMethod("pushState");
  patchHistoryMethod("replaceState");

  // Также реагируем на изменения истории
  window.addEventListener("popstate", redirectIfShorts);

  // На всякий случай: наблюдаем DOM тоже
  let lastUrl = location.href;
  new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      redirectIfShorts();
    }
  }).observe(document, { subtree: true, childList: true });
})();

  