export default function checkLuhn(cardNo) {
  let s = 0;
  let doubleDigit = false;
  for (let i = cardNo.length - 1; i >= 0; i -= 1) {
    let digit = +cardNo[i];
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) { digit -= 9; }
    }
    s += digit;
    doubleDigit = !doubleDigit;
  }
  return s % 10 === 0;
}
