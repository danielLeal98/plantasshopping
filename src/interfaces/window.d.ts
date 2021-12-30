declare global {
  interface Window { recaptchaVerifier: any; }
}
interface Window { recaptchaVerifier: any; }


window.recaptchaVerifier = window.recaptchaVerifier || {};