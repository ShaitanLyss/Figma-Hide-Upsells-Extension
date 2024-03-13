
// Creating an observer instance
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      mutation.addedNodes.forEach((n) => {
        if (n instanceof Element) {
          const upsellElmnts = n.querySelectorAll('[class*="upsell"], [data-onboarding-key="file_tracker_upsell_tooltip_key"]');
          for (const e of upsellElmnts) {
            console.log("Removing upsell", e)
             e.remove() 
          }
        }
      })
    }
  });
});
// Configuration of the observer:
const config = { childList: true, subtree: true };
observer.observe(document.body, config)
