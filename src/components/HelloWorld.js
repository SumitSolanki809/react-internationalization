import React from 'react'
import { withTranslation } from 'react-i18next';

class HelloWorld extends React.Component {
    render() {
        const { t } = this.props
        return (
            <div>{t('message')}</div>
        )
    }
}

export default withTranslation()(HelloWorld)