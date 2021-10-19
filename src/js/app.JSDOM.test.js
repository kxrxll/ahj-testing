import CardValidator from './CardValidator';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { document } = (new JSDOM('...')).window;

test('should validate input', () => {
  document.body.innerHTML = `<section class='cardvalidator'>
    <div class='cards'>
    <img class='disable visa' src="./img/visa.png">
    <img class='disable master' src="./img/mastercard.png">
    <img class='disable amex' src="./img/amex.png">
    <img class='disable mir' src="./img/mir.png">
    <img class='disable dinner' src="./img/diners.png">
    <img class='disable discover' src="./img/discover.png">
    <img class='disable jcb' src="./img/jcb.png">
    </div>
    <div>
    <form data-widget='form'>
    <input data-id="input" type="text" class='validationinput'>
    <p class='warning hide'>Номер карты недействителен!</p>
    <button data-id='submit' class='validationbutton'>Проверить</button>
    </form>
    </div>
    </section>`;
  const container = document.querySelector('.cardvalidator');
  const widget = new CardValidator(container);
  widget.addEvents();
  const input = container.querySelector('.validationinput');
  input.value = '2201382000000013';
  const submit = container.querySelector('.validationbutton');
  submit.click();
  expect(input.classList.contains('valid')).toBeTruthy();
});
