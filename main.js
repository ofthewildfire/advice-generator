import '@fontsource-variable/manrope';
import './style.css';

// Varaibles
const API_URL = `https://api.adviceslip.com/advice`;
const btn = document.querySelector('.advice-fetch-btn');
const adviceIdText = document.querySelector('.advice-num');
const adviceTextContainer = document.querySelector('.advice-text');

// Functions
async function getAdvice() {
  let value = null;

  try {
    const res = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache',
    });
    const data = await res.json();
    adviceIdText.textContent = `Advice #${data.slip.id}`;
    adviceTextContainer.textContent = `“${data.slip.advice}”`;
    value = data;
  } catch (error) {
    console.log(error);
  }
}

// Event listeners
btn.addEventListener('click', getAdvice);

// Onload for aethetic purposes
adviceIdText.textContent = `Advice #117`;
adviceTextContainer.textContent = `“It is easy to sit up and take notice, what's difficult is getting up and taking action.”`;
