const upsellElmnts = document.querySelectorAll('[class*="upsell"]');

for (const e of upsellElmnts) {
  if (e)
    e.remove()
}
