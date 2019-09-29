import React from 'react'
import { withTranslation } from 'react-i18next';

class MyName extends React.Component {
    render() {
        const { t } = this.props
        return (
            <div>{t('name')}</div>
        )
    }
}

export default withTranslation()(MyName)