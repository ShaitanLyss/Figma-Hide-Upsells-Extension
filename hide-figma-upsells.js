
// Creating an observer instance
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      mutation.addedNodes.forEach((n) => {
        console.log(n)
        if (n instanceof Element) {
          const upsellElmnts = document.querySelectorAll('[class*="upsell"]');
          for (const e of upsellElmnts)
             e.remove() 
        }
      })
    }
  });
});
// Configuration of the observer:
const config = { childList: true, subtree: true };
observer.observe(document.body, config)
