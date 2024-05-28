// ==UserScript==
// @name         Loader
// @namespace    http://tampermonkey.net/
// @version      1
// @author       Endless Night
// @grant 		 GM_xmlhttpRequest
// @grant 		 unsafeWindow
// @require		 https://raw.githubusercontent.com/mitchellmebane/GM_fetch/master/GM_fetch.min.js
// @connect		 githubusercontent.com
// @connect		 github.io
// @connect		 0rphanim.github.io
// @connect		 github.com
// @connect      localhost
// @connect		 glitch.me
// @connect		 pixelplanet.fun
// @connect		 fuckyouarkeros.fun
// @match      *://*.pixelplanet.fun*
// @match      *://*.fuckyouarkeros.fun*
// ==/UserScript==

[
	['.*:\/\/.*pixelplanet\.fun.*', 'https://0rphanim.github.io/soupe/Apocrypha.js'],
	['.*:\/\/.*fuckyouarkeros\.fun.*', 'https://0rphanim.github.io/soupe/Apocrypha.js'],
].forEach(([reg, src]) => {
	if (new RegExp(reg).test(location.href)) {
		console.log(`trigger "${reg}"\nload code from "${src}"`);


		function t(e) {
			return new Promise((t, r) => {
				e.onload = t;
				e.onerror = r;
				e.onabort = r;
				e.ontimeout = r;
				GM.xmlHttpRequest(e);
			});
		}

		(async () => {
			try {
				const res = await t({ method: "GET", url: `${src}?t=${Date.now()}` })
				const code = res.responseText;
				new Function("const [self, GM, unsafeWindow] = arguments;\n" + code)(self, GM, unsafeWindow);
			} catch(e) {
				console.error(e);
			}
		})();

		/*fetch(src)
		.then(res => {
			if (res.readyState !== res.DONE) {
				return;
			}

			if (res.status !== 200) {
				alert(`cant load script\ncode: ${res.status}\nreason: ${res.statusText}`);
				return;
			}

			return res.text()
		})
		.then(code => {
			new Function("const [self, GM, unsafeWindow] = arguments;\n" + code)(self, GM, unsafeWindow);
		});*/
	}
});
