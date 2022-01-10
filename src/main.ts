import './style.css'

const newsletterBtn = (<HTMLInputElement>document.querySelector('#newsletter-btn'));
const newsletterError = (<HTMLInputElement>document.querySelector('#newsletter-error'));

const validateEmail = (email: string): RegExpMatchArray | null => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

newsletterBtn?.addEventListener('click', (ev: Event) => {
  ev.preventDefault();
  
  const emailInput = (<HTMLInputElement>document.querySelector('#newsletter-email'));
  const email = emailInput.value;

  if (email && validateEmail(email)) {
    newsletterError.classList.add('hidden');
    console.log(`Send mail to ${email}`)
    emailInput.value = '';
  } else {
    newsletterError.classList.remove('hidden');
  }
})
