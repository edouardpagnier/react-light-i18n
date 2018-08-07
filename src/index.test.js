import I18n from './index'

I18n.setLocale('en')
I18n.setTranslations({
    en: {
        'HELLO': 'Hello',
        'GOODBYE': 'Goodbye'
    },
    fr: {
        'HELLO': 'Bonjour',
        'GOODBYE': 'Au revoir'
    }
})

test('en trad for HELLO is Hello', () => {
  I18n.setLocale('en')
  expect(I18n.t('HELLO')).toBe('Hello')
})

test('en trad for GOODBYE is Goodbye', () => {
    I18n.setLocale('en')
    expect(I18n.t('GOODBYE')).toBe('Goodbye')
})

test('fr trad for HELLO is Bonjour', () => {
    I18n.setLocale('fr')
    expect(I18n.t('HELLO')).toBe('Bonjour')
})

test('fr trad for GOODBYE is Au revoir', () => {
    I18n.setLocale('fr')
    expect(I18n.t('GOODBYE')).toBe('Au revoir')
})

test('en-US locale fallback to en trad', () => {
    I18n.setLocale('en-US')
    expect(I18n.t('GOODBYE')).toBe('Goodbye')
})

test('fr-FR locale fallback to fr trad', () => {
    I18n.setLocale('fr-FR')
    expect(I18n.t('GOODBYE')).toBe('Au revoir')
})

test('Fallback to en when no fallback defined and unavaible locale used', () => {
    I18n.setLocale('es')
    expect(I18n.t('GOODBYE')).toBe('Goodbye')
})

test('Fallback to fr when fr is defined as fallback and unavaible locale used', () => {
    I18n.setTranslations({
        en: {
            'HELLO': 'Hello',
            'GOODBYE': 'Goodbye'
        },
        fr: {
            'HELLO': 'Bonjour',
            'GOODBYE': 'Au revoir'
        }
    }, 'fr')
    I18n.setLocale('es')
    expect(I18n.t('GOODBYE')).toBe('Au revoir')
})

test('Error message when a key is not available', () => {
    I18n.setLocale('fr-FR')
    expect(I18n.t('BYE')).toBe('No fr translation for BYE')
})