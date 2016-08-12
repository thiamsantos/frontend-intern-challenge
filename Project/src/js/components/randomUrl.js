export default function() {

		let randomChar = Math.random().toString(36).substring(2,7);
		let baseUrl = 'http://chr.dc/';

		return baseUrl + randomChar;
}
