console.log("Hello my boi")
const upsellElmnts = document.querySelectorAll('[class*="upsell"]');

for (const e of upsellElmnts) {
  e.remove()
}
