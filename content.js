(function () {
  const articleUrl = "https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-024-19191-5?utm_source";

  // Перенаправляем на статью, если URL содержит /shorts/ (для YouTube), tiktok.com или vk.com с клипами
  if (window.location.href.includes("/shorts/") || window.location.href.includes("tiktok.com") || window.location.href.includes("vk.com/*clip*")) {
    window.location.replace(articleUrl);
  }

  // Перехват pushState и replaceState для динамических изменений URL
  const patchHistoryMethod = (method) => {
    const original = history[method];
    history[method] = function (...args) {
      const result = original.apply(this, args);
      if (window.location.href.includes("/shorts/") || window.location.href.includes("tiktok.com") || window.location.href.includes("vk.com/*clip*")) {
        window.location.replace(articleUrl);
      }
      return result;
    };
  };

  patchHistoryMethod("pushState");
  patchHistoryMethod("replaceState");

  // Реагируем на изменения в истории браузера
  window.addEventListener("popstate", () => {
    if (window.location.href.includes("/shorts/") || window.location.href.includes("tiktok.com") || window.location.href.includes("vk.com/*clip*")) {
      window.location.replace(articleUrl);
    }
  });

  // Наблюдаем за изменениями URL на странице
  let lastUrl = location.href;
  new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      if (window.location.href.includes("/shorts/") || window.location.href.includes("tiktok.com") || window.location.href.includes("vk.com/*clip*")) {
        window.location.replace(articleUrl);
      }
    }
  }).observe(document, { subtree: true, childList: true });
})();
