import getLocale from 'browser-locale'

export default class I18n {

    static translations
    static locale

    static setTranslations(translations) {
        this.translations = translations
        this.locale = getLocale()
    }

    static t(key) {
    	if(this.locale in this.translations) {
    		if(key in this.translations[this.locale]) {
    			return this.translations[this.locale][key]
    		} else {
    			return 'No ' + this.locale + ' translation for ' + key
    		}
    	} else {
    		return 'No translation for ' + this.locale
    	}
    }
}
