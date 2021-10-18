import checkLuhn from './luhnFunc';

export default class CardValidator {
  constructor(el) {
    this.el = el;
    this.input = el.querySelector('.validationinput');
    this.button = el.querySelector('.validationbutton');
    this.warning = el.querySelector('.warning');
    this.visa = el.querySelector('.visa');
    this.master = el.querySelector('.master');
    this.amex = el.querySelector('.amex');
    this.discover = el.querySelector('.discover');
    this.dinner = el.querySelector('.dinner');
    this.jcb = el.querySelector('.jcb');
    this.mir = el.querySelector('.mir');
  }

  addEvents() {
    this.button.addEventListener('click', this.onButtonPress.bind(this));
  }

  onButtonPress(evt) {
    evt.preventDefault();
    const cardNumber = this.input.value;
    // Luhn validation
    if (checkLuhn(cardNumber)) {
    // Emitent check
      const amex = /^(?:3[47][0-9]{13})$/;
      const visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      const master = /^(?:5[1-5][0-9]{14})$/;
      const discover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
      const dinner = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
      const jcb = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
      const mir = /^(220[014])/;
      if (cardNumber.match(amex)) {
        this.amex.classList.remove('disable');
      } if (cardNumber.match(visa)) {
        this.visa.classList.remove('disable');
      } if (cardNumber.match(master)) {
        this.master.classList.remove('disable');
      } if (cardNumber.match(discover)) {
        this.discover.classList.remove('disable');
      } if (cardNumber.match(dinner)) {
        this.dinner.classList.remove('disable');
      } if (cardNumber.match(jcb)) {
        this.jcb.classList.remove('disable');
      } if (cardNumber.match(mir)) {
        this.mir.classList.remove('disable');
      }
      this.input.disabled = true;
      this.input.classList.add('valid');
    } else {
      this.warning.classList.remove('hide');
      this.input.disabled = true;
    }
    this.button.textContent = 'Попробуй еще!';
    this.input.classList.add('failed');
    this.button.addEventListener('click', () => document.location.reload());
  }
}
