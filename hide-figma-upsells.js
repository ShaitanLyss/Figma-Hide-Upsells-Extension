
const upsellElmnts = document.querySelectorAll('[class*="upsell"]');
// Creating an observer instance
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      mutation.addedNodes.forEach((n) => {
        console.log("Removing", n)
        n.remove()
      })
    }
  });
});
// Configuration of the observer:
const config = { childList: true, subtree: true };
observer.observe(document.body, config)
