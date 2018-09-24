import * as React from 'react';
import { translate } from 'react-i18next';
import {
    RouteComponentProps,
} from 'react-router-dom';

const MultiLang = (WrappedComponent: React.ComponentClass<RouteComponentProps>) => {
    return translate('app',  {wait: true})(WrappedComponent);
}

export default MultiLang;