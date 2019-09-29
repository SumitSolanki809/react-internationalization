import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ChangeLanguage() {
    const { i18n } = useTranslation()

    const changeLang = lng => {
        i18n.changeLanguage(lng)
    }


    return (
        <div className="App">
            <button onClick={() => changeLang('de')}>de</button>
            <button onClick={() => changeLang('en')}>en</button>
        </div>
    )
}
