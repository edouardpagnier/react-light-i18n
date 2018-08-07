export default class I18n {

    static translations
	static locale
	static languageFallback

    static setTranslations(translations, fallback = undefined) {
		this.translations = translations
		if (this.locale === undefined) {
			let tmpLocale = I18n.getLocale()
			this.locale = tmpLocale.includes("-") ? tmpLocale.split("-")[0] : tmpLocale
		}
		this.languageFallback = fallback === undefined ? 'en' : fallback
	}
	
	static setLocale(locale) {
		this.locale = locale.includes("-") ? locale.split("-")[0] : locale
	}

    static t(key) {
		if (this.translations !== undefined) {
			if(this.locale in this.translations) {
				if(key in this.translations[this.locale]) {
					return this.translations[this.locale][key]
				} else {
					return 'No ' + this.locale + ' translation for ' + key
				}
			} else {
				if(key in this.translations[this.languageFallback]) {
					return this.translations[this.languageFallback][key]
				} else {
					return 'No ' + this.locale + ' translation for ' + key
				}
			}
		} else {
			console.log('ERROR: No translation defined, consider calling setTranslations() first.')
		}    	
	}
	
	static getLocale() {
		let locale
		if (navigator.languages && navigator.languages.length) {
			locale = navigator.languages[0]
		} else if (navigator.userLanguage) {
			locale = navigator.userLanguage
		} else {
			locale = navigator.language
		}
		return locale
	}
}
