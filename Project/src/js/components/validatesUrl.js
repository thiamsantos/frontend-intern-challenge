export default function validates(url) {
	// Based on this gist by Diego Perini: https://gist.github.com/dperini/729294
	let pattern = new RegExp("^" +
    // protocol identifier
    "(?:(?:https?)://)?" + "(?:" +
      // host name
      "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
      // domain name
      "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
      // TLD identifier
      "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
      // TLD may end with dot
      "\\.?" + ")" +
	    // resource path
	  "(?:[/?#]\\S*)?" + "$",
	"i");

	return pattern.test(url);
}
