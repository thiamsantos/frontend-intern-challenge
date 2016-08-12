import validatesUrl from './validatesUrl';
import randomUrl from './randomUrl';

export default class ShortUrl {

	constructor(input, btnSubmit, btnClose) {
		this._input = input;
		this._btnSubmit = btnSubmit;
		this._btnClose = btnClose;
		this._btnState = {
			copy: 'COPIAR',
			short: 'ENCURTAR'
		}
		this._btnSubmit.classList.add('disabled');
		this._btnClose.classList.add('hide');
	}

	submitEvent() {
		let btnSubmitText = this._btnSubmit.textContent.toUpperCase()
		let short = btnSubmitText === this._btnState.short;
		let copy = btnSubmitText === this._btnState.copy;

		if (short) {

			this._input.value = randomUrl();
			this._btnSubmit.textContent = this._btnState.copy;
			this._input.classList.add('js-urlShorted');
		} else if (copy) {

			this._input.select();
    	document.execCommand('copy');
		}
	}

	validates() {

		if (validatesUrl(this._input.value))
			this._btnSubmit.classList.remove('disabled')
		else this._btnSubmit.classList.add('disabled');

		if (this._input.value != '')
			this._btnClose.classList.remove('hide')
		else this._btnClose.classList.add('hide');
	}

	clear() {

		this._input.value = '';
		this._input.classList.remove('js-urlShorted');

		this._btnClose.classList.add('hide');

		this._btnSubmit.classList.add('disabled');
		this._btnSubmit.textContent = this._btnState.short;
	}
}
