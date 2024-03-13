console.log("Hello my boi")
const upsellElmnts = document.querySelectorAll('[class*="upsell"]');
console.log("upsellElmnts")
for (const e of upsellElmnts) {
  e.remove()
}
