import * as React from 'react';
import { translate } from 'react-i18next';

const MultiLang = (WrappedComponent: React.ComponentClass) => {
    return translate('app',  {wait: true})(WrappedComponent);
}

export default MultiLang;