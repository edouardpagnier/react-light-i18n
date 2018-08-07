# react-light-i18n

A very light weight library to deal with string translations with automatic locale detection.

## Usage

```javascript
import I18n from 'react-light-i18n'

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

class Login extends Component <Props, State> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>{I18n.t('HELLO')}</p>
                <p>{I18n.t('GOODBYE')}</p>
            </div>
        )
    }
}
```

You can also use separated JSON files to store your translations:

```javascript
import I18n from 'react-light-i18n'

I18n.setTranslations({
    en: require('./translations/en'),
    fr: require('./translations/fr')
})

class Login extends Component <Props, State> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>{I18n.t('HELLO')}</p>
                <p>{I18n.t('GOODBYE')}</p>
            </div>
        )
    }
}
```

#### ./translations/en.json

```javascript
{
    "HELLO": "Hello",
    "GOODBYE": "Goodbye"
}
```

#### ./translations/fr.json

```javascript
{
    "HELLO": "Bonjour",
    "GOODBYE": "Au revoir"
}
```

## Locale auto detection

By default, **react-light-i18n** automatically detects the browser's locale.

Alternatively, you can force the locale to be used like this:

```javascript
I18n.setLocale('en')
```

In current version, locale like **en-US** or **fr-FR will** respectively fallback to **en** and **fr**.