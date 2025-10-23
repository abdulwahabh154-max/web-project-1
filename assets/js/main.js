// Script to update Date on the copyright sign
const DateToday = new Date().getFullYear();
const copyrightYearElement = document.querySelector(
  "[--data-js-copyrightYear]"
);
if (copyrightYearElement) {
  copyrightYearElement.textContent = DateToday.toString();
}
